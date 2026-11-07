import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
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


  it("opens the annual funding planner and exposes its estimate inputs", async () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Funding planner/ }));
    expect(await screen.findByRole("heading", { name: "Plan your education funding", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("spinbutton", { name: /Tuition & mandatory fees/ })).toBeInTheDocument();
    expect(screen.getByRole("spinbutton", { name: /Scholarship scenario/ })).toBeInTheDocument();
    expect(screen.getByText(/not an award prediction/)).toBeInTheDocument();
  });


  it("opens the statement workspace and saves a draft locally with a word count", async () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Statement workspace/ }));
    expect(await screen.findByRole("heading", { name: "Scholarship statement workspace", level: 1 })).toBeInTheDocument();
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


  it("opens the student guide with official portal links and accessible guidance", async () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Student guide/ }));
    expect(await screen.findByRole("heading", { name: "Student application guide", level: 1 })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: "A clearer path from discovery to application." })).toBeInTheDocument();
    expect(await screen.findByRole("link", { name: /Read the official NSP student instructions/ })).toHaveAttribute("href", "https://scholarships.gov.in/Students");
    expect(screen.getByText(/Do not share OTPs, passwords, PINs/)).toBeInTheDocument();
    const results = await axe.run(document.body, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } });
    expect(results.violations.map(item => item.id)).toEqual([]);
  });


  it("clears profile, tracker, planner and essay data after explicit confirmation", async () => {
    localStorage.setItem("grantly:workspace:v1", JSON.stringify({ saved: ["csss"], applications: [], profile: { course: "CSE" } }));
    localStorage.setItem("grantly:funding-planner:v1", JSON.stringify({ tuition: 45000 }));
    localStorage.setItem("grantly:essay-workspace:v1", JSON.stringify({ draft: "Private draft" }));
    const confirmation = vi.spyOn(window, "confirm").mockReturnValue(true);
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Clear local data/ }));
    await waitFor(() => expect(JSON.parse(localStorage.getItem("grantly:workspace:v1") || "{}").saved).toEqual([]));
    expect(localStorage.getItem("grantly:funding-planner:v1")).toBeNull();
    expect(localStorage.getItem("grantly:essay-workspace:v1")).toBeNull();
    expect(screen.getByText(/Grantly local data cleared/)).toBeInTheDocument();
    expect(confirmation).toHaveBeenCalledTimes(1);
    confirmation.mockRestore();
  });

  it("does not clear local data when the confirmation is declined", () => {
    localStorage.setItem("grantly:funding-planner:v1", JSON.stringify({ tuition: 45000 }));
    const confirmation = vi.spyOn(window, "confirm").mockReturnValue(false);
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Clear local data/ }));
    expect(localStorage.getItem("grantly:funding-planner:v1")).not.toBeNull();
    confirmation.mockRestore();
  });


  it("filters scholarships by education level and domicile state", () => {
    render(<App />);
    const level = screen.getByLabelText("Filter by education level");
    fireEvent.change(level, { target: { value: "Undergraduate" } });
    expect(screen.getByText("PM-USP Central Sector Scholarship (CSSS)")).toBeInTheDocument();
    expect(screen.queryByText("INSPIRE Scholarship for Higher Education (SHE)")).not.toBeInTheDocument();
    fireEvent.change(level, { target: { value: "All levels" } });
    fireEvent.change(screen.getByLabelText("Filter by state or union territory"), { target: { value: "Karnataka" } });
    fireEvent.change(screen.getByLabelText("Search scholarships"), { target: { value: "Karnataka SSP" } });
    expect(screen.getByText(/Karnataka State Scholarship Portal/)).toBeInTheDocument();
  });

  it("filters scholarship cards by category", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Science & research" }));
    expect(screen.getByText("INSPIRE Scholarship for Higher Education (SHE)")).toBeInTheDocument();
    expect(screen.queryByText("AICTE Pragati Scholarship")).not.toBeInTheDocument();
  });

  it("opens the scholarship details and explains unknown profile checks", async () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole("button", { name: /View details/ })[0]);
    const dialog = await screen.findByRole("dialog");
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

  it("edits and saves the student profile", async () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Edit profile" }));
    fireEvent.change(await screen.findByLabelText("Course / programme"), { target: { value: "B.E. Computer Science" } });
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
    await screen.findByRole("dialog");
    expect(screen.getAllByText("Profile checks align").length).toBeGreaterThan(0);
  });

  it("tracks an opportunity, updates its stage and persists document checklist state", async () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole("button", { name: /Track/ })[0]);
    fireEvent.click(screen.getByRole("button", { name: /My applications/ }));
    const stage = screen.getAllByLabelText("TRACKING STAGE")[0];
    fireEvent.change(stage, { target: { value: "Submitted" } });
    fireEvent.click(screen.getByRole("button", { name: /View scholarship details/ }));
    const dialog = await screen.findByRole("dialog");
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
