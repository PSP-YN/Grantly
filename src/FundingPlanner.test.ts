import { describe, expect, it } from "vitest";
import { calculateFundingGap } from "./features/funding-planner/calculations";

const empty = { tuition: 0, housing: 0, food: 0, books: 0, transport: 0, other: 0, existingAid: 0, scholarship: 0 };

describe("funding gap calculator", () => {
  it("computes cost, support, remaining gap and coverage", () => {
    expect(calculateFundingGap({ ...empty, tuition: 100000, housing: 40000, existingAid: 30000, scholarship: 20000 }))
      .toEqual({ cost: 140000, support: 50000, gap: 90000, surplus: 0, coverage: 36 });
  });
  it("never reports a negative gap when entered support exceeds cost", () => {
    expect(calculateFundingGap({ ...empty, tuition: 10000, existingAid: 12000 }))
      .toEqual({ cost: 10000, support: 12000, gap: 0, surplus: 2000, coverage: 100 });
  });
  it("avoids a divide-by-zero coverage result", () => {
    expect(calculateFundingGap(empty).coverage).toBe(0);
  });
});
