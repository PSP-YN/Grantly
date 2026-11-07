import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import axe from "axe-core";

afterEach(() => cleanup());
beforeEach(() => { cleanup(); localStorage.clear(); });

describe("FundNavi workspace", () => {
  it("renders the discovery workspace and source transparency notice", () => {
    render(<App />);
    expect(screen.getByText("fund", { exact: true })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Find your next opportunity" })).toBeInTheDocument();
    expect(screen.getByText(/A profile match is not an eligibility decision/)).toBeInTheDocument();
    expect(screen.getByText("PM-USP Central Sector Scholarship (CSSS)")).toBeInTheDocument();
  });

  it("filters scholarship cards by category", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Science & research" }));
    expect(screen.getByText("INSPIRE Scholarship for Higher Education (SHE)")).toBeInTheDocument();
    expect(screen.queryByText("AICTE Pragati Scholarship")).not.toBeInTheDocument();
  });

  it("opens the scholarship details and explains unknown profile checks", () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole("button", { name: /View details/ })[0]);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText("Profile-based checks")).toBeInTheDocument();
    expect(within(dialog).getAllByText("More details needed")[0]).toBeInTheDocument();
    expect(within(dialog).getAllByText("Not provided")[0]).toBeInTheDocument();
    expect(within(dialog).getByRole("button", { name: /Add to tracker/ })).toBeInTheDocument();
  });

  it("persists saved opportunities under the FundNavi storage key", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Save PM-USP Central Sector/ }));
    const saved = JSON.parse(localStorage.getItem("fundnavi:workspace:v1") || "{}").saved;
    expect(saved).toContain("csss");
  });

  it("edits and saves the student profile", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Edit profile" }));
    fireEvent.change(screen.getByLabelText("Course / programme"), { target: { value: "B.E. Computer Science" } });
    fireEvent.change(screen.getByLabelText("Current year"), { target: { value: "1st year" } });
    fireEvent.change(screen.getByLabelText("Class XII academic standing"), { target: { value: "Above 80th percentile" } });
    fireEvent.change(screen.getByLabelText("Annual family income"), { target: { value: "₹2.5–4.5 lakh" } });
    fireEvent.change(screen.getByLabelText("Study mode"), { target: { value: "Regular / full-time" } });
    fireEvent.change(screen.getByLabelText("Receiving another scholarship / fee reimbursement?"), { target: { value: "No" } });
    fireEvent.change(screen.getByLabelText("PM-USP CSSS application route"), { target: { value: "Fresh applicant" } });
    fireEvent.click(screen.getByRole("button", { name: "Save profile" }));
    const profile = JSON.parse(localStorage.getItem("fundnavi:workspace:v1") || "{}").profile;
    expect(profile.course).toBe("B.E. Computer Science");
    expect(profile.academicBand).toBe("Above 80th percentile");
    fireEvent.click(screen.getAllByRole("button", { name: /View details/ })[0]);
    expect(screen.getAllByText("Profile checks align").length).toBeGreaterThan(0);
  });

  it("tracks an opportunity, updates its stage and persists document checklist state", () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole("button", { name: /Track/ })[0]);
    fireEvent.click(screen.getByRole("button", { name: /My applications/ }));
    const stage = screen.getAllByLabelText("TRACKING STAGE")[0];
    fireEvent.change(stage, { target: { value: "Submitted" } });
    fireEvent.click(screen.getByRole("button", { name: /View scholarship details/ }));
    const dialog = screen.getByRole("dialog");
    const documentBox = within(dialog).getByLabelText("Class XII marksheet");
    fireEvent.click(documentBox);
    const app = JSON.parse(localStorage.getItem("fundnavi:workspace:v1") || "{}").applications[0];
    expect(app.stage).toBe("Submitted");
    expect(app.completedDocuments).toContain("Class XII marksheet");
  });

  it("passes axe-core WCAG semantic checks on the discovery view", async () => {
    render(<App />);
    const results = await axe.run(document.body, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
      rules: { "color-contrast": { enabled: false } }
    });
    expect(results.violations.map(item => item.id)).toEqual([]);
  });

  it("migrates valid old workspace records and drops unknown scholarship ids", () => {
    localStorage.setItem("grantly:workspace:v1", JSON.stringify({
      saved: ["csss", "not-a-real-id"],
      applications: [{ id: "csss", stage: "Preparing" }],
      profile: { course: "B.E. CSE", year: "2nd year" }
    }));
    render(<App />);
    const migrated = JSON.parse(localStorage.getItem("fundnavi:workspace:v1") || "{}");
    expect(migrated.saved).toEqual(["csss"]);
    expect(migrated.applications[0].completedDocuments).toEqual([]);
    expect(migrated.profile.course).toBe("B.E. CSE");
  });

  it("discards invalid ids, stages and injected profile markup from browser storage", () => {
    localStorage.setItem("fundnavi:workspace:v1", JSON.stringify({
      saved: ["unknown"],
      applications: [{ id: "unknown", stage: "admin" }],
      profile: { course: "<script>alert(1)</script>" }
    }));
    render(<App />);
    expect(screen.queryByText("<script>alert(1)</script>")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Saved/ }));
    expect(screen.getByText("0 results")).toBeInTheDocument();
  });
});
