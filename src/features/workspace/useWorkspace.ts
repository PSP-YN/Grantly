import { useEffect, useState } from "react";
import { loadStore, STORE_KEY, type Stage, type Store } from "./store";

/**
 * Owns browser workspace persistence and common tracker mutations.
 * The store is normalized at read/import boundaries in store.ts.
 */
export function useWorkspace() {
  const [store, setStore] = useState<Store>(loadStore);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch {
      // Keep the current in-memory workspace usable when storage is unavailable.
    }
  }, [store]);

  const toggleSaved = (id: string) => setStore(previous => ({
    ...previous,
    saved: previous.saved.includes(id)
      ? previous.saved.filter(savedId => savedId !== id)
      : [...previous.saved, id]
  }));

  const addApplication = (id: string) => setStore(previous => ({
    ...previous,
    applications: previous.applications.some(application => application.id === id)
      ? previous.applications
      : [...previous.applications, { id, stage: "Interested", updated: "Today", completedDocuments: [] }]
  }));

  const toggleDocument = (id: string, document: string) => setStore(previous => ({
    ...previous,
    applications: previous.applications.map(application => application.id === id
      ? {
          ...application,
          completedDocuments: application.completedDocuments.includes(document)
            ? application.completedDocuments.filter(item => item !== document)
            : [...application.completedDocuments, document]
        }
      : application)
  }));

  const updateStage = (id: string, stage: Stage) => setStore(previous => ({
    ...previous,
    applications: previous.applications.map(application => application.id === id
      ? { ...application, stage, updated: "Today" }
      : application)
  }));

  return { store, setStore, toggleSaved, addApplication, toggleDocument, updateStage };
}
