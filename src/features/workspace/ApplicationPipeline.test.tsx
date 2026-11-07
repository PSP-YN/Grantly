import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ApplicationPipeline from "./ApplicationPipeline";
import type { AppRecord } from "./store";
import type { Scholarship } from "../../data";

const scholarship = { id: "pipeline-test", name: "Test scholarship", provider: "Test provider", documents: ["Income certificate", "Marksheet"] } as Scholarship;
const application: AppRecord = { id: "pipeline-test", stage: "Interested", updated: "Today", completedDocuments: ["Income certificate"] };

describe("ApplicationPipeline", () => {
  it("renders an empty state when there are no tracked opportunities", () => {
    render(<ApplicationPipeline applications={[]} scholarships={[scholarship]} onStageChange={vi.fn()} />);
    expect(screen.getByText(/pipeline is empty/i)).toBeTruthy();
  });
  it("shows tracked opportunities and their checklist progress", () => {
    render(<ApplicationPipeline applications={[application]} scholarships={[scholarship]} onStageChange={vi.fn()} />);
    expect(screen.getByText("Test scholarship")).toBeTruthy();
    expect(screen.getByText("1/2 checklist items complete")).toBeTruthy();
  });
  it("allows a keyboard-accessible stage change", () => {
    const onStageChange = vi.fn();
    render(<ApplicationPipeline applications={[application]} scholarships={[scholarship]} onStageChange={onStageChange} />);
    fireEvent.change(screen.getByRole("combobox", { name: "Move Test scholarship to stage" }), { target: { value: "Preparing" } });
    expect(onStageChange).toHaveBeenCalledWith("pipeline-test", "Preparing");
  });
});
