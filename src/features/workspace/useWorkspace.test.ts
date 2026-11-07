import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORE_KEY } from "./store";
import { useWorkspace } from "./useWorkspace";

beforeEach(() => localStorage.clear());

describe("useWorkspace", () => {
  it("persists saved scholarships and application tracker updates", () => {
    const { result } = renderHook(() => useWorkspace());

    act(() => {
      result.current.toggleSaved("csss");
      result.current.addApplication("csss");
    });

    expect(result.current.store.saved).toEqual(["csss"]);
    expect(result.current.store.applications).toEqual([
      { id: "csss", stage: "Interested", updated: "Today", completedDocuments: [] }
    ]);

    act(() => {
      result.current.updateStage("csss", "Preparing");
      result.current.toggleDocument("csss", "Class XII marksheet");
    });

    const persisted = JSON.parse(localStorage.getItem(STORE_KEY) ?? "{}");
    expect(persisted.applications[0].stage).toBe("Preparing");
    expect(persisted.applications[0].completedDocuments).toEqual(["Class XII marksheet"]);
  });

  it("does not duplicate an application when added twice", () => {
    const { result } = renderHook(() => useWorkspace());
    act(() => {
      result.current.addApplication("csss");
      result.current.addApplication("csss");
    });
    expect(result.current.store.applications).toHaveLength(1);
  });
});
