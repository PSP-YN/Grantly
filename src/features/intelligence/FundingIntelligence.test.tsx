import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import FundingIntelligence from "./FundingIntelligence";
import { defaultProfile } from "../workspace/store";
import { FUNDING_INTELLIGENCE_STORAGE_KEY } from "./analysis";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("FundingIntelligence workspace", () => {
  it("renders the funding model and statement diagnostics", () => {
    render(<FundingIntelligence profile={defaultProfile} applications={[]}/>);
    expect(screen.getByRole("heading", { name: "Annual cost and support model" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Estimate the remaining education loan" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Personal statement review" })).toBeTruthy();
  });

  it("updates the cost scenario and persists inputs locally", () => {
    render(<FundingIntelligence profile={defaultProfile} applications={[]}/>);
    fireEvent.change(screen.getByLabelText("Tuition and fees"), { target: { value: "125000" } });
    expect(screen.getByText("Estimated annual cost").parentElement?.textContent).toContain("₹1,25,000");
    const saved = JSON.parse(localStorage.getItem(FUNDING_INTELLIGENCE_STORAGE_KEY) ?? "{}") as { tuition?: number };
    expect(saved.tuition).toBe(125000);
  });

  it("shows writing feedback as the draft changes", () => {
    render(<FundingIntelligence profile={defaultProfile} applications={[]}/>);
    fireEvent.change(screen.getByLabelText("Paste or write a draft"), {
      target: { value: "I built a low-cost sensor with my classmates. I tested it in our college lab." }
    });
    expect(screen.getByText("15")).toBeTruthy();
  });
});
