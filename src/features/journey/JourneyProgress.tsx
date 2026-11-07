import type { AppRecord } from "../workspace/store";
import type { Scholarship } from "../../data";

import { buildJourneySteps } from "./journeyProgress";

export default function JourneyProgress(props: {
  profileCompletion: number;
  savedCount: number;
  applications: AppRecord[];
  scholarships: Scholarship[];
  onNavigate: (destination: "Profile" | "Saved" | "Applications") => void;
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
