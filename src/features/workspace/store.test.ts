import { describe, expect, it } from "vitest";
import { normalizeStore, parseWorkspaceExport } from "./store";
import { scholarships } from "../../data";

describe("workspace import normalization",()=>{
 it("drops unknown scholarship IDs, stages and checklist entries",()=>{
  const csss=scholarships.find(s=>s.id==="csss")!;
  const value=normalizeStore({
   saved:["csss","not-a-scheme","csss"],
   applications:[{id:"csss",stage:"Preparing",completedDocuments:[csss.documents[0],"fake-doc"]},{id:"bogus",stage:"Awarded"},{id:"csss",stage:"not-valid"}],
   profile:{course:" <script> B.E. CSE ",state:"Karnataka",income:23}
  });
  expect(value.saved).toEqual(["csss"]);
  expect(value.applications).toHaveLength(1);
  expect(value.applications[0].completedDocuments).toEqual([csss.documents[0]]);
  expect(value.profile.course).toBe("script B.E. CSE");
  expect(value.profile.income).toBe("Not specified");
 });
 it("accepts a full Grantly export with planner and essay data",()=>{
  const payload={product:"Grantly",exportedAt:"2026-11-07T00:00:00Z",workspace:{saved:["csss"],applications:[],profile:{}},fundingPlanner:{tuition:12345},essayWorkspace:{draft:"A real student story",limit:250}};
  const parsed=parseWorkspaceExport(JSON.stringify(payload));
  expect(parsed.store.saved).toEqual(["csss"]);
  expect(parsed.fundingPlanner?.tuition).toBe(12345);
  expect(parsed.essayWorkspace?.draft).toBe("A real student story");
  expect(parsed.essayWorkspace?.limit).toBe(250);
 });
 it("rejects unrelated JSON and malformed content",()=>{
  expect(()=>parseWorkspaceExport(JSON.stringify({hello:"world"}))).toThrow(/not a Grantly/);
  expect(()=>parseWorkspaceExport("invalid-json")).toThrow();
 });
});
