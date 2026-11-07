import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen, within, waitFor } from "@testing-library/react";
import App from "./App";
import axe from "axe-core";

afterEach(() => cleanup());
beforeEach(() => { cleanup(); localStorage.clear(); });

describe("Grantly workspace", () => {
  it("renders the discovery workspace and source transparency notice", () => {
    render(<App />);
    expect(screen.getByText("Grantly", { exact: true })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Find your next opportunity" })).toBeInTheDocument();
    expect(screen.getByText(/A profile match is not an eligibility decision/)).toBeInTheDocument();
    expect(screen.getByText("PM-USP Central Sector Scholarship (CSSS)")).toBeInTheDocument();
  });


  it("opens the annual funding planner and exposes its estimate inputs", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Funding planner/ }));
    expect(screen.getByRole("heading", { name: "Plan your education funding", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("spinbutton", { name: /Tuition & mandatory fees/ })).toBeInTheDocument();
    expect(screen.getByRole("spinbutton", { name: /Scholarship scenario/ })).toBeInTheDocument();
    expect(screen.getByText(/not an award prediction/)).toBeInTheDocument();
  });


  it("opens the statement workspace and saves a draft locally with a word count", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Statement workspace/ }));
    expect(screen.getByRole("heading", { name: "Scholarship statement workspace", level: 1 })).toBeInTheDocument();
    const draft = screen.getByLabelText("Your statement draft");
    fireEvent.change(draft, { target: { value: "My goal is to study engineering." } });
    expect(screen.getByText("6 / 500 words")).toBeInTheDocument();
    const saved = JSON.parse(localStorage.getItem("grantly:essay-workspace:v1") || "{}");
    expect(saved.draft).toBe("My goal is to study engineering.");
    expect(screen.getByText(/Your writing is saved in this browser only/)).toBeInTheDocument();
  });


  it("imports a validated workspace JSON file and restores the full local workspace", async () => {
    render(<App />);
    const payload = {
      product: "Grantly",
      exportedAt: "2026-11-07T00:00:00Z",
      workspace: {
        saved: ["csss"],
        applications: [{ id: "csss", stage: "Preparing", completedDocuments: [] }],
        profile: { course: "B.E. Computer Science", year: "2nd year" }
      },
      fundingPlanner: { tuition: 12345 },
      essayWorkspace: { draft: "My personal statement", limit: 250 }
    };
    const file = new File([JSON.stringify(payload)], "grantly-workspace.json", { type: "application/json" });
    fireEvent.change(screen.getByLabelText("Import Grantly workspace JSON"), { target: { files: [file] } });
    await waitFor(() => expect(JSON.parse(localStorage.getItem("grantly:workspace:v1") || "{}").saved).toEqual(["csss"]));
    expect(JSON.parse(localStorage.getItem("grantly:funding-planner:v1") || "{}").tuition).toBe(12345);
    expect(JSON.parse(localStorage.getItem("grantly:essay-workspace:v1") || "{}").draft).toBe("My personal statement");
    expect(screen.getByText(/Workspace, funding plan and statement draft restored/)).toBeInTheDocument();
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

  it("persists saved opportunities under the Grantly storage key", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Save PM-USP Central Sector/ }));
    const saved = JSON.parse(localStorage.getItem("grantly:workspace:v1") || "{}").saved;
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
    const profile = JSON.parse(localStorage.getItem("grantly:workspace:v1") || "{}").profile;
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
    const app = JSON.parse(localStorage.getItem("grantly:workspace:v1") || "{}").applications[0];
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
    localStorage.setItem("fundnavi:workspace:v1", JSON.stringify({
      saved: ["csss", "not-a-real-id"],
      applications: [{ id: "csss", stage: "Preparing" }],
      profile: { course: "B.E. CSE", year: "2nd year" }
    }));
    render(<App />);
    const migrated = JSON.parse(localStorage.getItem("grantly:workspace:v1") || "{}");
    expect(migrated.saved).toEqual(["csss"]);
    expect(migrated.applications[0].completedDocuments).toEqual([]);
    expect(migrated.profile.course).toBe("B.E. CSE");
  });

  it("discards invalid ids, stages and injected profile markup from browser storage", () => {
    localStorage.setItem("grantly:workspace:v1", JSON.stringify({
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
