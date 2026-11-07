import { describe, expect, it } from "vitest";
import { buildDeadlineCalendar, parseExplicitDeadline } from "./calendar";
import type { Scholarship } from "../../data";

const base: Scholarship = {
  id:"sample",name:"Sample Award",provider:"Example provider",amount:"Unknown",amountValue:0,
  deadline:"Student application closes 30 Nov 2026",category:"Need-based",level:"UG",region:"India",
  description:"sample",eligibility:[],tags:[],source:"https://example.org/award",sourceLabel:"official",
  lastVerified:"2026-11-07",verificationNote:"Verify the current notice.",initials:"S",tone:"blue",rules:[],documents:[]
};
describe("deadline calendar",()=>{
 it("parses explicitly stated dates and ignores vague deadlines",()=>{
  expect(parseExplicitDeadline("Close date: 30 Nov 2026")).toBe("2026-11-30");
  expect(parseExplicitDeadline("2026-12-01")).toBe("2026-12-01");
  expect(parseExplicitDeadline("Check official portal")).toBeNull();
  expect(parseExplicitDeadline("31 Feb 2026")).toBeNull();
 });
 it("exports only dated opportunities and escapes ICS text",()=>{
  const calendar=buildDeadlineCalendar([base,{...base,id:"undated",deadline:"Check portal",name:"No date"}],new Date("2026-11-07T00:00:00Z"));
  expect(calendar).toContain("DTSTART;VALUE=DATE:20261130");
  expect(calendar).toContain("SUMMARY:Scholarship deadline: Sample Award");
  expect(calendar).not.toContain("No date");
  expect(calendar).toContain("TRIGGER:-P1D");
 });
});
