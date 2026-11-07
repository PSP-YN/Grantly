import type { AppRecord } from "../workspace/store";
import type { Scholarship } from "../../data";

type Destination = "Profile" | "Saved" | "Applications";
export type JourneyStep = {
  id: string;
  title: string;
  detail: string;
  complete: boolean;
  action: Destination;
  actionLabel: string;
};

export function buildJourneySteps(input: {
  profileCompletion: number;
  savedCount: number;
  applications: AppRecord[];
  scholarships: Scholarship[];
}): JourneyStep[] {
  const byId = new Map(input.scholarships.map(item => [item.id, item]));
  const tracked = input.applications;
  const requiredDocuments = tracked.reduce((total, record) => total + (byId.get(record.id)?.documents.length ?? 0), 0);
  const completedDocuments = tracked.reduce((total, record) => {
    const allowed = new Set(byId.get(record.id)?.documents ?? []);
    return total + record.completedDocuments.filter(document => allowed.has(document)).length;
  }, 0);
  return [
    {
      id: "profile",
      title: "Complete your student profile",
      detail: input.profileCompletion === 100 ? "Your profile fields are complete." : `${input.profileCompletion}% complete — add missing details to improve the context used by rule checks.`,
      complete: input.profileCompletion === 100,
      action: "Profile",
      actionLabel: input.profileCompletion === 100 ? "Review profile" : "Complete profile"
    },
    {
      id: "shortlist",
      title: "Build a scholarship shortlist",
      detail: input.savedCount ? `${input.savedCount} opportunity${input.savedCount === 1 ? "" : "ies"} saved for review.` : "Save opportunities you want to verify with their official providers.",
      complete: input.savedCount > 0,
      action: "Saved",
      actionLabel: "View shortlist"
    },
    {
      id: "tracker",
      title: "Start an application plan",
      detail: tracked.length ? `${tracked.length} opportunity${tracked.length === 1 ? "" : "ies"} in your tracker.` : "Move a shortlisted opportunity into your application tracker.",
      complete: tracked.length > 0,
      action: "Applications",
      actionLabel: "Open tracker"
    },
    {
      id: "documents",
      title: "Prepare application documents",
      detail: requiredDocuments ? `${completedDocuments} of ${requiredDocuments} checklist items marked complete.` : "Document progress appears after you add an opportunity to the tracker.",
      complete: requiredDocuments > 0 && completedDocuments === requiredDocuments,
      action: "Applications",
      actionLabel: "Review checklist"
    }
  ];
}

