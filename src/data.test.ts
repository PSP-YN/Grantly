import { describe, expect, it } from "vitest";
import { categories, scholarships } from "./data";

describe("scholarship catalogue quality", () => {
  it("contains a meaningful India-wide directory and unique stable IDs", () => {
    expect(scholarships.length).toBeGreaterThanOrEqual(63);
    const ids = scholarships.map(item => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("includes the newly catalogued UGC and ministry scholarship programmes", () => {
    const ids = new Set(scholarships.map(item => item.id));
    for (const id of ["pm-cares-children", "postmatric-sc", "prematric-sc", "prematric-obc", "national-fellowship-sc", "national-fellowship-obc", "pg-indira-single-girl", "pg-university-rank", "pg-sc-st-professional", "aicte-gate-pg", "karnataka-vidyasiri", "maharashtra-shahu", "maharashtra-punjabrao", "maharashtra-eklavya", "wb-svmcm", "wb-aikyashree", "odisha-medhabruti", "telangana-epass-pms", "up-postmatric", "bihar-pms", "gujarat-mysy", "kerala-egrantz"]) expect(ids.has(id)).toBe(true);
  });

  it("keeps key NSP AY 2026–27 deadline dates source-linked", () => {
    const byId = new Map(scholarships.map(item => [item.id, item]));
    for (const id of ["aicte-swanath-degree", "aicte-swanath-diploma", "pmss-capf", "pmss-police-martyred", "postmatric-disability", "top-class-disability", "national-pg-scholarship"]) {
      expect(byId.get(id)?.deadline).toContain("30 Nov 2026");
    }
  });

  it("exposes every catalogue category in the filter controls", () => {
    const filterCategories = new Set(categories);
    for (const item of scholarships) expect(filterCategories.has(item.category), item.id).toBe(true);
  });

  it("keeps PM CARES scholarship scoped to identified beneficiaries", () => {
    const item = scholarships.find(s => s.id === "pm-cares-children");
    expect(item).toBeDefined();
    expect(item?.amountValue).toBe(20000);
    expect(item?.rules).toHaveLength(0);
    expect(item?.eligibility.join(" ")).toMatch(/identified as eligible PM CARES/i);
    expect(item?.verificationNote).toMatch(/beneficiary status/i);
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
