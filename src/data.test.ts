import { describe, expect, it } from "vitest";
import { categories, scholarships } from "./catalog";

describe("scholarship catalogue quality", () => {
  it("contains a meaningful India-wide directory and unique stable IDs", () => {
    expect(scholarships.length).toBeGreaterThanOrEqual(92);
    const ids = scholarships.map(item => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("includes the newly catalogued UGC and ministry scholarship programmes", () => {
    const ids = new Set(scholarships.map(item => item.id));
    for (const id of ["tn-pudhumai-penn","tn-tamil-pudhalvan","wb-oasis-postmatric","jharkhand-ekalyan-postmatric","chhattisgarh-postmatric","lic-golden-jubilee-2026","national-overseas-st-students","hr-stipend-sc","hr-stipend-freedom","hr-free-books-sc","hr-ug-girls-merit","hr-merit-incentive","hr-merit-incentive-cbse","hr-ug-pg-merit","hr-lower-income","ugc-savitri-single-girl-fellowship","ugc-net-jrf","karnataka-raitha-vidya-nidhi","karnataka-labour-welfare-education","karnataka-minority-scholarships","karnataka-construction-worker-scholarship","pmcares-children-scholarship","vidyadhan-sdf","sitaram-jindal-scholarship","northsouth-foundation-scholarship","tata-capital-pankh","ongc-merit-scholarship","indianoil-scholarship","aditya-birla-scholarship","siemens-scholarship-program","postmatric-sc", "prematric-sc", "prematric-obc", "national-fellowship-sc", "national-fellowship-obc", "pg-indira-single-girl", "pg-university-rank", "pg-sc-st-professional", "aicte-gate-pg", "karnataka-vidyasiri", "maharashtra-shahu", "maharashtra-punjabrao", "maharashtra-eklavya", "wb-svmcm", "wb-aikyashree", "odisha-medhabruti", "telangana-epass-pms", "up-postmatric", "bihar-pms", "gujarat-mysy", "kerala-egrantz"]) expect(ids.has(id)).toBe(true);
  });


  it("exposes filters for state schemes, private foundations and fellowships", () => {
    expect(categories).toContain("State scheme");
    expect(categories).toContain("Private foundation");
    expect(categories).toContain("Fellowship");
    expect(scholarships.some(item => item.category === "State scheme")).toBe(true);
    expect(scholarships.some(item => item.category === "Private foundation")).toBe(true);
    expect(scholarships.some(item => item.category === "Fellowship")).toBe(true);
  });

  it("keeps the supplemental programme claims cautious and source-backed", () => {
    const ids = ["tn-pudhumai-penn","tn-tamil-pudhalvan","wb-oasis-postmatric","jharkhand-ekalyan-postmatric","chhattisgarh-postmatric","lic-golden-jubilee-2026","national-overseas-st-students","hr-stipend-sc","hr-stipend-freedom","hr-free-books-sc","hr-ug-girls-merit","hr-merit-incentive","hr-merit-incentive-cbse","hr-ug-pg-merit","hr-lower-income","ugc-savitri-single-girl-fellowship","ugc-net-jrf","karnataka-raitha-vidya-nidhi","karnataka-labour-welfare-education","karnataka-minority-scholarships","karnataka-construction-worker-scholarship","pmcares-children-scholarship","vidyadhan-sdf","sitaram-jindal-scholarship","northsouth-foundation-scholarship","tata-capital-pankh","ongc-merit-scholarship","indianoil-scholarship","aditya-birla-scholarship","siemens-scholarship-program"];
    const byId = new Map(scholarships.map(item => [item.id, item]));
    for (const id of ids) {
      const item = byId.get(id);
      expect(item, id).toBeDefined();
      expect(item?.rules, id).toEqual([]);
      expect(item?.source, id).toMatch(/^https:\/\//);
      expect(item?.verificationNote, id).toMatch(/check|confirm|verify|current|official|closed/i);
    }
  });


  it("keeps all catalogue categories discoverable and verifies PM CARES scope", () => {
    for (const item of scholarships) expect(categories, item.id).toContain(item.category);
    const pmcares = scholarships.find(item => item.id === "pmcares-children-scholarship");
    expect(pmcares).toBeDefined();
    expect(pmcares?.amountValue).toBe(20000);
    expect(pmcares?.source).toContain("spniwcd.wcd.gov.in");
    expect(pmcares?.eligibility.join(" ")).toMatch(/not a general scholarship/i);
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
  it("keeps programme names unique and every record dated with a source review", () => {
    const names = scholarships.map(item => item.name.trim().toLocaleLowerCase());
    expect(new Set(names).size).toBe(names.length);
    for (const item of scholarships) {
      expect(item.lastVerified, item.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(item.lastVerified)), item.id).toBe(false);
      expect(item.region.trim(), item.id).not.toBe("");
      expect(item.sourceLabel.trim(), item.id).not.toBe("");
    }
  });

  it("does not infer eligibility for supplemental records without reviewed rules", () => {
    const supplemental = scholarships.filter(item => item.id !== "csss");
    for (const item of supplemental) {
      if (item.rules.length === 0) expect(item.verificationNote).toMatch(/confirm|check|verify|review|current|listed/i);
    }
  });
});
