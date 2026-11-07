import { describe, expect, it } from "vitest";

function luminance(hex: string): number {
  const rgb = [1, 3, 5].map(index => parseInt(hex.slice(index, index + 2), 16) / 255);
  const linear = rgb.map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrastRatio(foreground: string, background: string): number {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

describe("Grantly palette contrast", () => {
  it("keeps primary text and action pairs at WCAG AA normal-text contrast", () => {
    expect(contrastRatio("#17324D", "#F6F1E6")).toBeGreaterThanOrEqual(7);
    expect(contrastRatio("#B05230", "#F6F1E6")).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio("#F6F1E6", "#B05230")).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio("#66717D", "#FFFEFA")).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio("#9D4B2E", "#F2E1D8")).toBeGreaterThanOrEqual(4.5);
  });
});
