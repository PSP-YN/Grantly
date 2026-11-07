import { describe, expect, it } from "vitest";
import { categories, scholarships } from "./catalog";

describe("scholarship catalogue quality", () => {
  it("contains a meaningful India-wide directory and unique stable IDs", () => {
    expect(scholarships.length).toBeGreaterThanOrEqual(84);
    const ids = scholarships.map(item => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("includes the newly catalogued UGC and ministry scholarship programmes", () => {
    const ids = new Set(scholarships.map(item => item.id));
    for (const id of ["tn-pudhumai-penn","tn-tamil-pudhalvan","wb-oasis-postmatric","jharkhand-ekalyan-postmatric","chhattisgarh-postmatric","ugc-savitri-single-girl-fellowship","ugc-net-jrf","karnataka-raitha-vidya-nidhi","karnataka-labour-welfare-education","karnataka-minority-scholarships","karnataka-construction-worker-scholarship","pmcares-children-scholarship","lic-golden-jubilee-2026","national-overseas-st-students","vidyadhan-sdf","sitaram-jindal-scholarship","northsouth-foundation-scholarship","tata-capital-pankh","ongc-merit-scholarship","indianoil-scholarship","aditya-birla-scholarship","siemens-scholarship-program","postmatric-sc", "prematric-sc", "prematric-obc", "national-fellowship-sc", "national-fellowship-obc", "pg-indira-single-girl", "pg-university-rank", "pg-sc-st-professional", "aicte-gate-pg", "karnataka-vidyasiri", "maharashtra-shahu", "maharashtra-punjabrao", "maharashtra-eklavya", "wb-svmcm", "wb-aikyashree", "odisha-medhabruti", "telangana-epass-pms", "up-postmatric", "bihar-pms", "gujarat-mysy", "kerala-egrantz"]) expect(ids.has(id)).toBe(true);
  });


  it("exposes filters for state schemes, private foundations and fellowships", () => {
    expect(categories).toContain("State scheme");
    expect(categories).toContain("Private foundation");
    expect(categories).toContain("Fellowship");
    expect(categories).toContain("Overseas study");
    expect(scholarships.some(item => item.category === "State scheme")).toBe(true);
    expect(scholarships.some(item => item.category === "Private foundation")).toBe(true);
    expect(scholarships.some(item => item.category === "Fellowship")).toBe(true);
  });

  it("keeps the supplemental programme claims cautious and source-backed", () => {
    const ids = ["tn-pudhumai-penn","tn-tamil-pudhalvan","wb-oasis-postmatric","jharkhand-ekalyan-postmatric","chhattisgarh-postmatric","ugc-savitri-single-girl-fellowship","ugc-net-jrf","karnataka-raitha-vidya-nidhi","karnataka-labour-welfare-education","karnataka-minority-scholarships","karnataka-construction-worker-scholarship","pmcares-children-scholarship","vidyadhan-sdf","sitaram-jindal-scholarship","northsouth-foundation-scholarship","tata-capital-pankh","ongc-merit-scholarship","indianoil-scholarship","aditya-birla-scholarship","siemens-scholarship-program"];
    const byId = new Map(scholarships.map(item => [item.id, item]));
    for (const id of ids) {
      const item = byId.get(id);
      expect(item, id).toBeDefined();
      expect(item?.rules, id).toEqual([]);
      expect(item?.source, id).toMatch(/^https:\/\//);
      expect(item?.verificationNote, id).toMatch(/check|confirm|verify|current|official|closed/i);
    }
  });

  it("keeps key NSP AY 2026–27 deadline dates source-linked", () => {
    const byId = new Map(scholarships.map(item => [item.id, item]));
    for (const id of ["aicte-swanath-degree", "aicte-swanath-diploma", "pmss-capf", "pmss-police-martyred", "postmatric-disability", "top-class-disability", "national-pg-scholarship"]) {
      expect(byId.get(id)?.deadline).toContain("30 Nov 2026");
    }
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
