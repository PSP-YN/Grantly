import { describe, expect, it } from "vitest";
import { countWords } from "./features/essay/wordCount";

describe("statement word count", () => {
  it("counts words separated by spaces, newlines or tabs", () => {
    expect(countWords("  first\tsecond\nthird  ")).toBe(3);
  });
  it("returns zero for blank drafts", () => {
    expect(countWords("  \n  ")).toBe(0);
  });
});
