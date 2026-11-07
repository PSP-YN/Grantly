import { describe, expect, it } from "vitest";
import { normalizeEssayDraft, EMPTY_ESSAY_DRAFT } from "./draft";

describe("essay draft normalization",()=>{
 it("limits text size and normalizes invalid word limits",()=>{
  const value=normalizeEssayDraft({draft:"student voice",limit:100000,prompt:17});
  expect(value.draft).toBe("student voice");
  expect(value.limit).toBe(10000);
  expect(value.prompt).toBe("");
 });
 it("returns a safe empty draft for non-object input",()=>{
  expect(normalizeEssayDraft(null)).toEqual(EMPTY_ESSAY_DRAFT);
 });
});
