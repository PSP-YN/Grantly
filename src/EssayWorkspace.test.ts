import { describe, expect, it } from "vitest";

const countWords = (text: string) => text.trim() ? text.trim().split(/\s+/).length : 0;

describe("statement word count", () => {
  it("counts words separated by spaces, newlines or tabs", () => {
    expect(countWords("  first\tsecond\nthird  ")).toBe(3);
  });
  it("returns zero for blank drafts", () => {
    expect(countWords("  \n  ")).toBe(0);
  });
});
