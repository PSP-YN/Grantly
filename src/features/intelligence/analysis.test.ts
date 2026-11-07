import { describe, expect, it } from "vitest";
import { calculateFundingSnapshot, reviewNarrative, type FundingInputs } from "./analysis";

const base: FundingInputs = {
  tuition: 100000, housing: 50000, food: 30000, books: 5000, transport: 5000, otherCosts: 10000,
  institutionalAid: 20000, governmentGrants: 15000, workIncome: 0, savings: 10000,
  awardedScholarships: 5000, proposedScholarship: 25000, annualInterestRate: 10, repaymentYears: 5
};

describe("funding intelligence calculations", () => {
  it("calculates annual cost, confirmed support and projected gap", () => {
    const result = calculateFundingSnapshot(base);
    expect(result.annualCost).toBe(200000);
    expect(result.confirmedSupport).toBe(50000);
    expect(result.projectedSupport).toBe(75000);
    expect(result.currentGap).toBe(150000);
    expect(result.projectedGap).toBe(125000);
    expect(result.projectedSurplus).toBe(0);
  });

  it("flags an overfunded scenario as a surplus without making an eligibility claim", () => {
    const result = calculateFundingSnapshot({ ...base, proposedScholarship: 300000 });
    expect(result.projectedSurplus).toBe(150000);
    expect(result.projectedGap).toBe(0);
  });

  it("handles zero-interest repayment without division errors", () => {
    const result = calculateFundingSnapshot({ ...base, annualInterestRate: 0, repaymentYears: 5 });
    expect(result.monthlyEmi).toBe(125000 / 60);
    expect(result.totalInterest).toBe(0);
  });

  it("clamps invalid negative inputs to zero", () => {
    const result = calculateFundingSnapshot({ ...base, tuition: -100000, annualInterestRate: -4 });
    expect(result.annualCost).toBe(100000);
  });
});

describe("narrative review", () => {
  it("returns a useful empty-draft prompt", () => {
    expect(reviewNarrative("").suggestions.length).toBeGreaterThan(0);
  });

  it("counts words and identifies generic phrases without claiming AI detection", () => {
    const result = reviewNarrative("I have always been my dream to help. I learned from my family and community.");
    expect(result.words).toBe(15);
    expect(result.firstPersonReferences).toBeGreaterThan(0);
    expect(result.cliches).toContain("always been my dream");
  });
});
