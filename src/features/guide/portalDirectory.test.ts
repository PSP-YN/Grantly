import { describe, expect, it } from "vitest";
import { scholarshipPortals } from "./portalDirectory";

describe("India scholarship portal directory", () => {
  it("includes all 28 states and 8 union territories with unique labels", () => {
    expect(scholarshipPortals).toHaveLength(36);
    expect(new Set(scholarshipPortals.map(item => item.state)).size).toBe(36);
  });

  it("provides a secure portal URL and a route note for every state/UT", () => {
    for (const item of scholarshipPortals) {
      expect(item.url, item.state).toMatch(/^https:\/\//);
      expect(item.routeNote.trim(), item.state).not.toBe("");
      for (const alternate of item.alternate ?? []) {
        expect(alternate.url, item.state).toMatch(/^https:\/\//);
      }
    }
  });
});
