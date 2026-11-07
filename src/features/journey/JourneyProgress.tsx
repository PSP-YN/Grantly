import type { AppRecord } from "../workspace/store";
import type { Scholarship } from "../../data";

type Destination = "Profile" | "Saved" | "Applications";

type JourneyStep = {
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

export default function JourneyProgress(props: {
  profileCompletion: number;
  savedCount: number;
  applications: AppRecord[];
  scholarships: Scholarship[];
  onNavigate: (destination: Destination) => void;
}) {
  const steps = buildJourneySteps(props);
  const completed = steps.filter(step => step.complete).length;
  const percent = Math.round((completed / steps.length) * 100);
  const next = steps.find(step => !step.complete);
  return (
    <section className="journey-progress" aria-labelledby="journey-progress-title">
      <div className="journey-progress-head">
        <div>
          <div className="eyebrow">YOUR NEXT ACTIONS</div>
          <h2 id="journey-progress-title">Turn opportunities into an application plan</h2>
          <p>Track your workspace preparation from profile to document checklist. This is not an eligibility or award prediction.</p>
        </div>
        <div className="journey-progress-count" aria-label={`${completed} of ${steps.length} steps complete`}>
          <strong>{percent}%</strong>
          <span>{completed} of {steps.length} steps</span>
        </div>
      </div>
      <div className="journey-progress-track" role="progressbar" aria-label="Workspace preparation progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
        <span style={{ width: `${percent}%` }}/>
      </div>
      <ol className="journey-progress-steps">
        {steps.map((step, index) => (
          <li key={step.id} className={step.complete ? "journey-step complete" : "journey-step"}>
            <span className="journey-step-index" aria-hidden="true">{step.complete ? "✓" : index + 1}</span>
            <div className="journey-step-copy">
              <strong>{step.title}</strong>
              <span>{step.detail}</span>
            </div>
            <button type="button" onClick={() => props.onNavigate(step.action)}>{step.actionLabel}</button>
          </li>
        ))}
      </ol>
      {next && <p className="journey-next-action"><strong>Suggested next step:</strong> {next.title}</p>}
      {!next && <p className="journey-next-action"><strong>Workspace checklist complete.</strong> Verify every scheme's current rules and submission requirements with its official provider.</p>}
    </section>
  );
}
