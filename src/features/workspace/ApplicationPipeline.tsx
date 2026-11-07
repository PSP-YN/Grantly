import { useState } from "react";
import type { AppRecord, Stage } from "./store";
import type { Scholarship } from "../../data";

const STAGES: Stage[] = ["Interested", "Preparing", "Submitted", "Under review", "Awarded"];

export default function ApplicationPipeline(props: {
  applications: AppRecord[];
  scholarships: Scholarship[];
  onStageChange: (id: string, stage: Stage) => void;
}) {
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const byId = new Map(props.scholarships.map(item => [item.id, item]));
  const tracked = props.applications.flatMap(record => {
    const scholarship = byId.get(record.id);
    return scholarship ? [{ record, scholarship }] : [];
  });
  return (
    <section className="application-pipeline" aria-labelledby="pipeline-title">
      <div className="pipeline-heading">
        <div>
          <div className="eyebrow">APPLICATION WORKFLOW</div>
          <h2 id="pipeline-title">Your application pipeline</h2>
          <p>Move each opportunity through the stages you control. A stage update is a personal tracking note, not a provider status.</p>
        </div>
        <span className="pipeline-total">{tracked.length} tracked</span>
      </div>
      <div className="pipeline-columns">
        {STAGES.map(stage => {
          const items = tracked.filter(item => item.record.stage === stage);
          return (
            <section
              className={draggedId ? "pipeline-column drop-ready" : "pipeline-column"}
              key={stage}
              aria-label={`${stage} applications`}
              onDragOver={event => event.preventDefault()}
              onDrop={event => {
                event.preventDefault();
                const id = event.dataTransfer.getData("text/plain") || draggedId;
                if (id) props.onStageChange(id, stage);
                setDraggedId(null);
              }}
            >
              <header className="pipeline-column-head">
                <h3>{stage}</h3>
                <span>{items.length}</span>
              </header>
              {items.length ? items.map(({ record, scholarship }) => {
                const total = scholarship.documents.length;
                const done = record.completedDocuments.filter(document => scholarship.documents.includes(document)).length;
                return (
                  <article className="pipeline-card" key={record.id} draggable
                    onDragStart={event => {
                      event.dataTransfer.setData("text/plain", record.id);
                      event.dataTransfer.effectAllowed = "move";
                      setDraggedId(record.id);
                    }}
                    onDragEnd={() => setDraggedId(null)}
                  >
                    <strong>{scholarship.name}</strong>
                    <span className="pipeline-provider">{scholarship.provider}</span>
                    <span className="pipeline-doc-progress">{total ? `${done}/${total} checklist items complete` : "No document checklist supplied"}</span>
                    <label className="pipeline-stage-control">
                      <span>Move to stage</span>
                      <select aria-label={`Move ${scholarship.name} to stage`} value={record.stage} onChange={event => props.onStageChange(record.id, event.target.value as Stage)}>
                        {STAGES.map(option => <option key={option} value={option}>{option}</option>)}
                      </select>
                    </label>
                  </article>
                );
              }) : <p className="pipeline-empty">No applications in this stage.</p>}
            </section>
          );
        })}
      </div>
      {!tracked.length && <p className="pipeline-empty-state">Your pipeline is empty. Discover a scholarship and choose “Track application” to start managing its progress.</p>}
    </section>
  );
}
