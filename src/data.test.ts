import { describe, expect, it } from "vitest";
import { scholarships } from "./data";

describe("scholarship catalogue quality", () => {
  it("contains a meaningful India-wide directory and unique stable IDs", () => {\n    expect(scholarships.length).toBeGreaterThanOrEqual(40);
    const ids = scholarships.map(item => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("has core metadata and an HTTPS source for every record", () => {
    for (const item of scholarships) {
      expect(item.name.trim(), item.id).not.toBe("");
      expect(item.provider.trim(), item.id).not.toBe("");
      expect(item.source, item.id).toMatch(/^https:\/\//);
      expect(item.sourceLabel.trim(), item.id).not.toBe("");
      expect(item.verificationNote.trim(), item.id).not.toBe("");
      expect(item.documents.length, item.id).toBeGreaterThan(0);
      expect(item.amountValue, item.id).toBeGreaterThanOrEqual(0);
    }
  });
  it("does not infer eligibility for supplemental records without reviewed rules", () => {
    const supplemental = scholarships.filter(item => item.id !== "csss");
    for (const item of supplemental) {
      if (item.rules.length === 0) expect(item.verificationNote).toMatch(/confirm|check|verify|review|current|listed/i);
    }
  });
});
