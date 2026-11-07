import { useMemo, useState } from "react";
import { Download, FileText, ShieldCheck } from "lucide-react";

type EssayDraft = { prompt: string; motivation: string; experience: string; impact: string; goals: string; draft: string; limit: number };
const key = "grantly:essay-workspace:v1";
const empty: EssayDraft = { prompt: "", motivation: "", experience: "", impact: "", goals: "", draft: "", limit: 500 };
function load(): EssayDraft {
  try {
    const value = JSON.parse(localStorage.getItem(key) ?? "null") as Partial<EssayDraft> | null;
    if (!value) return empty;
    return { ...empty, ...value, limit: typeof value.limit === "number" && value.limit >= 1 && value.limit <= 10000 ? Math.round(value.limit) : 500 };
  } catch { return empty; }
}
export const countWords = (text: string) => text.trim() ? text.trim().split(/\s+/).length : 0;

export default function EssayWorkspace() {
  const [draft, setDraft] = useState<EssayDraft>(load);
  const count = useMemo(() => countWords(draft.draft), [draft.draft]);
  const update = (field: keyof EssayDraft, value: string | number) => {
    const next = { ...draft, [field]: value };
    setDraft(next);
    try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* Keep the current editing session usable. */ }
  };
  const download = () => {
    const content = [
      "Grantly — Scholarship Statement Draft",
      "",
      "Scholarship prompt:", draft.prompt,
      "",
      "Motivation:", draft.motivation,
      "",
      "Experience / turning point:", draft.experience,
      "",
      "Impact / contribution:", draft.impact,
      "",
      "Future goals:", draft.goals,
      "",
      "Essay draft:", draft.draft
    ].join("\n");
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = "grantly-statement-draft.txt"; link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return <section className="essay-workspace" aria-labelledby="essay-workspace-title">
    <div className="essay-intro">
      <div className="essay-icon"><FileText size={22}/></div>
      <div><h2 id="essay-workspace-title">Scholarship statement workspace</h2><p>Build a thoughtful personal statement from your own experiences. Grantly provides structure—not fabricated stories or AI-written claims.</p></div>
    </div>
    <div className="essay-privacy"><ShieldCheck size={16}/><span>Your writing is saved in this browser only. Avoid entering identity numbers, account credentials or sensitive personal details.</span></div>
    <label className="essay-field"><span>Scholarship prompt or question</span><textarea rows={2} value={draft.prompt} onChange={e=>update("prompt",e.target.value)} placeholder="Paste the official essay question here."/></label>
    <div className="essay-scaffold">
      <label className="essay-field"><span>1. Motivation</span><textarea rows={3} value={draft.motivation} onChange={e=>update("motivation",e.target.value)} placeholder="Why this course, field or opportunity matters to you."/></label>
      <label className="essay-field"><span>2. Experience or turning point</span><textarea rows={3} value={draft.experience} onChange={e=>update("experience",e.target.value)} placeholder="A real challenge, project, responsibility or learning experience."/></label>
      <label className="essay-field"><span>3. Impact and contribution</span><textarea rows={3} value={draft.impact} onChange={e=>update("impact",e.target.value)} placeholder="What you have contributed or hope to contribute."/></label>
      <label className="essay-field"><span>4. Future goals</span><textarea rows={3} value={draft.goals} onChange={e=>update("goals",e.target.value)} placeholder="Connect your goals to the opportunity and its stated purpose."/></label>
    </div>
    <div className="essay-editor">
      <div className="essay-editor-head"><label htmlFor="grantly-essay-draft">Your statement draft</label><div className={count>draft.limit?"essay-count over":"essay-count"} aria-live="polite">{count} / {draft.limit} words</div></div>
      <textarea id="grantly-essay-draft" rows={12} value={draft.draft} onChange={e=>update("draft",e.target.value)} placeholder="Write in your own voice. Use the outline above to organize, then edit for clarity and evidence."/>
      <div className="essay-editor-actions"><label>Word limit <input type="number" min={1} max={10000} value={draft.limit} onChange={e=>update("limit",Math.max(1,Math.min(10000,Number(e.target.value)||1)))}/></label><button className="outline-button" onClick={download}><Download size={15}/> Export draft</button></div>
      {count>draft.limit&&<p className="essay-warning" role="status">This draft is {count-draft.limit} words over your selected limit. Review the official instructions before submitting.</p>}
    </div>
  </section>;
}
