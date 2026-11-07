import { describe, expect, it } from "vitest";
import { scholarships } from "./data";

describe("scholarship catalogue quality", () => {
  it("contains a meaningful India-wide directory and unique stable IDs", () => {
    expect(scholarships.length).toBeGreaterThanOrEqual(49);
    const ids = scholarships.map(item => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("includes the newly catalogued UGC and ministry scholarship programmes", () => {\n    const ids = new Set(scholarships.map(item => item.id));\n    for (const id of ["postmatric-sc", "prematric-sc", "prematric-obc", "national-fellowship-sc", "national-fellowship-obc", "pg-indira-single-girl", "pg-university-rank", "pg-sc-st-professional", "aicte-gate-pg"]) expect(ids.has(id)).toBe(true);\n  });\n\n  it("has core metadata and an HTTPS source for every record", () => {
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
