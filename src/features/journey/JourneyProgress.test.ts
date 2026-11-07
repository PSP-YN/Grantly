import { describe, expect, it } from "vitest";
import { buildJourneySteps } from "./JourneyProgress";
import type { Scholarship } from "../../data";
import type { AppRecord } from "../workspace/store";

const scholarship = {
  id: "test-scholarship",
  documents: ["Income certificate", "Marksheet"]
} as Scholarship;

describe("buildJourneySteps", () => {
  it("shows useful next actions for a new student", () => {
    const steps = buildJourneySteps({ profileCompletion: 20, savedCount: 0, applications: [], scholarships: [scholarship] });
    expect(steps).toHaveLength(4);
    expect(steps.every(step => !step.complete)).toBe(true);
    expect(steps[0].action).toBe("Profile");
    expect(steps[1].action).toBe("Saved");
  });

  it("counts only checklist documents required by tracked scholarships", () => {
    const applications: AppRecord[] = [{ id: "test-scholarship", stage: "Preparing", updated: "Today", completedDocuments: ["Income certificate", "Not a valid document"] }];
    const steps = buildJourneySteps({ profileCompletion: 100, savedCount: 1, applications, scholarships: [scholarship] });
    expect(steps[0].complete).toBe(true);
    expect(steps[1].complete).toBe(true);
    expect(steps[2].complete).toBe(true);
    expect(steps[3].detail).toContain("1 of 2");
    expect(steps[3].complete).toBe(false);
  });

  it("marks document preparation complete only when all required items are checked", () => {
    const applications: AppRecord[] = [{ id: "test-scholarship", stage: "Preparing", updated: "Today", completedDocuments: ["Income certificate", "Marksheet"] }];
    const steps = buildJourneySteps({ profileCompletion: 100, savedCount: 1, applications, scholarships: [scholarship] });
    expect(steps[3].complete).toBe(true);
  });
});
