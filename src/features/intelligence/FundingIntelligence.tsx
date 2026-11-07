import { useEffect, useMemo, useState } from "react";
import { Activity, AlertTriangle, Calculator, CheckCircle2, ClipboardList, FileText, Gauge, Wallet } from "lucide-react";
import type { Profile, AppRecord, Stage } from "../workspace/store";
import { scholarships } from "../../catalog";
import { calculateFundingSnapshot, reviewNarrative, normalizeFundingInputs, DEFAULT_FUNDING_INPUTS, FUNDING_INTELLIGENCE_STORAGE_KEY, type FundingInputs } from "./analysis";\n\nfunction loadFundingInputs(): FundingInputs {\n  try {\n    const raw = localStorage.getItem(FUNDING_INTELLIGENCE_STORAGE_KEY);\n    return raw ? normalizeFundingInputs(JSON.parse(raw)) : DEFAULT_FUNDING_INPUTS;\n  } catch { return DEFAULT_FUNDING_INPUTS; }\n}

type Props = {
  profile: Profile;
  applications: AppRecord[];
  onStageChange: (id: string, stage: Stage) => void;
};

const money = (value: number) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: "INR", maximumFractionDigits: 0
}).format(Number.isFinite(value) ? value : 0);

function NumberField({ label, value, onChange, suffix }: {
  label: string; value: number; onChange: (value: number) => void; suffix?: string;
}) {
  return <label className="intelligence-field">
    <span>{label}</span>
    <div><input type="number" min="0" step="1000" value={value} onChange={event => onChange(Math.max(0, Number(event.target.value) || 0))}/><small>{suffix ?? "₹ / year"}</small></div>
  </label>;
}

export default function FundingIntelligence({ profile, applications, onStageChange }: Props) {
  const [inputs, setInputs] = useState<FundingInputs>(loadFundingInputs);\n  useEffect(() => {\n    try { localStorage.setItem(FUNDING_INTELLIGENCE_STORAGE_KEY, JSON.stringify(inputs)); } catch { /* Keep the in-memory scenario usable when storage is unavailable. */ }\n  }, [inputs]);
  const [draft, setDraft] = useState("");
  const [showInquiry, setShowInquiry] = useState(false);
  const [notice, setNotice] = useState("");

  const awardedValue = useMemo(() => applications
    .filter(item => item.stage === "Awarded")
    .reduce((total, item) => total + (scholarships.find(s => s.id === item.id)?.amountValue ?? 0), 0),
  [applications]);
  const liveInputs = { ...inputs, awardedScholarships: awardedValue };
  const result = calculateFundingSnapshot(liveInputs);
  const review = reviewNarrative(draft);
  const tracked = applications.map(item => ({ ...item, scholarship: scholarships.find(s => s.id === item.id) })).filter(item => item.scholarship);
  const stages: Stage[] = ["Interested", "Preparing", "Submitted", "Under review", "Awarded"];
  const inquiry = [
    "Subject: Request for clarification on external scholarship coordination",
    "",
    "Dear Financial Aid / Student Support Team,",
    "",
    "I am reviewing my education funding for the upcoming academic year and would appreciate written clarification on how an additional external scholarship may interact with my existing support.",
    "",
    "Could you please confirm:",
    "1. Whether the proposed scholarship can be held alongside my current grants or fee support.",
    "2. Whether any award cap, disclosure requirement or adjustment policy applies.",
    "3. Which funding components would be adjusted if total assistance exceeds eligible education costs.",
    "4. Which official policy or scheme notice governs this decision.",
    "",
    "I will provide the relevant award letter and current aid statement if required. I understand that the institution and scholarship provider make the final determination.",
    "",
    "Regards,",
    profile.course ? `Student, ${profile.course}` : "Student"
  ].join("\n");

  const update = (key: keyof FundingInputs, value: number) => setInputs(previous => ({ ...previous, [key]: value }));

  return <div className="intelligence-workspace">
    <section className="intelligence-intro">
      <div><span className="eyebrow">FUNDING DECISION SUPPORT</span><h2>Understand the full cost before you accept an award.</h2><p>Model your annual education costs, confirmed support, a possible new award and the loan amount that may remain. All figures are estimates based on your inputs.</p></div>
      <div className="intelligence-intro-mark"><Gauge size={34}/><span>INR · Scenario model</span></div>
    </section>

    <section className="intelligence-section" aria-labelledby="funding-model-title">
      <div className="intelligence-section-heading"><div><span className="eyebrow">01 / FUNDING STACK</span><h3 id="funding-model-title">Annual cost and support model</h3><p>Enter your actual annual figures. Awarded scholarships in your tracker are included automatically.</p></div><Wallet size={22}/></div>
      <div className="intelligence-grid">
        <div className="intelligence-panel">
          <h4>Education costs</h4>
          <div className="intelligence-fields">
            <NumberField label="Tuition and fees" value={inputs.tuition} onChange={v=>update("tuition",v)}/>
            <NumberField label="Housing" value={inputs.housing} onChange={v=>update("housing",v)}/>
            <NumberField label="Food" value={inputs.food} onChange={v=>update("food",v)}/>
            <NumberField label="Books and supplies" value={inputs.books} onChange={v=>update("books",v)}/>
            <NumberField label="Transport" value={inputs.transport} onChange={v=>update("transport",v)}/>
            <NumberField label="Other eligible costs" value={inputs.otherCosts} onChange={v=>update("otherCosts",v)}/>
          </div>
          <div className="intelligence-total"><span>Estimated annual cost</span><strong>{money(result.annualCost)}</strong></div>
        </div>
        <div className="intelligence-panel">
          <h4>Funding sources</h4>
          <div className="intelligence-fields">
            <NumberField label="Institution / college aid" value={inputs.institutionalAid} onChange={v=>update("institutionalAid",v)}/>
            <NumberField label="Government grants / fee support" value={inputs.governmentGrants} onChange={v=>update("governmentGrants",v)}/>
            <NumberField label="Expected work income" value={inputs.workIncome} onChange={v=>update("workIncome",v)}/>
            <NumberField label="Personal savings" value={inputs.savings} onChange={v=>update("savings",v)}/>
            <NumberField label="Potential new scholarship" value={inputs.proposedScholarship} onChange={v=>update("proposedScholarship",v)}/>
          </div>
          <div className="intelligence-total"><span>Confirmed awards in tracker</span><strong>{money(awardedValue)}</strong></div>
        </div>
      </div>
      <div className="intelligence-results">
        <article><span>Current funding gap</span><strong>{money(result.currentGap)}</strong><small>Before the proposed scholarship</small></article>
        <article><span>Projected funding gap</span><strong>{money(result.projectedGap)}</strong><small>After the proposed scholarship</small></article>
        <article><span>Projected coverage</span><strong>{Math.round(result.projectedCoveragePercent)}%</strong><small>Of entered annual costs</small></article>
        <article><span>Potential surplus</span><strong>{money(result.projectedSurplus)}</strong><small>Not proof that aid can be stacked</small></article>
      </div>
      <div className="intelligence-progress" role="progressbar" aria-label="Projected education cost coverage" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(result.projectedCoveragePercent)}><span style={{width:`${result.projectedCoveragePercent}%`}}/></div>
      {result.projectedSurplus > 0
        ? <div className="intelligence-alert"><AlertTriangle size={18}/><p><strong>Coordination review needed.</strong> Your entered support exceeds entered costs by {money(result.projectedSurplus)}. This is a scenario flag—not a legal conclusion. Check each scheme's stacking, disclosure and eligible-cost rules with the provider and institution.</p></div>
        : <div className="intelligence-note"><CheckCircle2 size={18}/><p>Use the estimate as a planning aid. Confirm whether each award is renewable, stackable, restricted to specific costs or paid directly to the institution.</p></div>}
    </section>

    <section className="intelligence-section" aria-labelledby="loan-model-title">
      <div className="intelligence-section-heading"><div><span className="eyebrow">02 / REPAYMENT SCENARIO</span><h3 id="loan-model-title">Estimate the remaining education loan</h3><p>Illustrative EMI for the projected gap only; it is not a loan offer or financial advice.</p></div><Calculator size={22}/></div>
      <div className="intelligence-fields intelligence-loan-fields">
        <NumberField label="Illustrative annual interest rate (%)" value={inputs.annualInterestRate} suffix="% p.a." onChange={v=>update("annualInterestRate",v)}/>
        <NumberField label="Repayment term (years)" value={inputs.repaymentYears} suffix="years" onChange={v=>update("repaymentYears",Math.max(1,v))}/>
      </div>
      <div className="intelligence-results intelligence-loan-results">
        <article><span>Estimated monthly EMI</span><strong>{money(result.monthlyEmi)}</strong><small>Assumes a reducing-balance loan</small></article>
        <article><span>Total repayment</span><strong>{money(result.totalRepayment)}</strong><small>Across the selected term</small></article>
        <article><span>Estimated interest</span><strong>{money(result.totalInterest)}</strong><small>Excludes fees and rate changes</small></article>
      </div>
    </section>

    <section className="intelligence-section" aria-labelledby="application-pipeline-title">
      <div className="intelligence-section-heading"><div><span className="eyebrow">03 / APPLICATION CONTROL</span><h3 id="application-pipeline-title">Your application pipeline</h3><p>Move tracked opportunities through the stages and see where work is accumulating.</p></div><ClipboardList size={22}/></div>
      <div className="intelligence-stage-grid">
        {stages.map(stage => {
          const items = tracked.filter(item => item.stage === stage);
          return <div className="intelligence-stage" key={stage}><div><strong>{stage}</strong><span>{items.length}</span></div>{items.length ? items.map(item => <label key={item.id}>{item.scholarship?.name}<select aria-label={`Update ${item.scholarship?.name} stage`} value={item.stage} onChange={event=>onStageChange(item.id,event.target.value as Stage)}>{stages.map(option=><option key={option}>{option}</option>)}</select></label>) : <p>No opportunities here yet.</p>}</div>;
        })}
      </div>
    </section>

    <section className="intelligence-section" aria-labelledby="narrative-review-title">
      <div className="intelligence-section-heading"><div><span className="eyebrow">04 / STATEMENT QUALITY</span><h3 id="narrative-review-title">Personal statement review</h3><p>Local writing diagnostics for structure and clarity. No text is uploaded or sent to an AI service.</p></div><FileText size={22}/></div>
      <label className="intelligence-draft-label" htmlFor="narrative-draft">Paste or write a draft</label>
      <textarea id="narrative-draft" className="intelligence-draft" value={draft} onChange={event=>setDraft(event.target.value)} placeholder="Describe a real experience, the action you took, what changed and what you learned…"/>
      <div className="intelligence-results intelligence-writing-results">
        <article><span>Word count</span><strong>{review.words}</strong><small>Whitespace and punctuation aware</small></article>
        <article><span>Sentences</span><strong>{review.sentences}</strong><small>Detected from punctuation</small></article>
        <article><span>Avg. sentence length</span><strong>{review.averageWordsPerSentence}</strong><small>Words per sentence</small></article>
        <article><span>First-person references</span><strong>{review.firstPersonReferences}</strong><small>Not an authenticity score</small></article>
      </div>
      {review.readability !== null && <p className="intelligence-note"><Activity size={17}/><span>Approximate English readability estimate: {review.readability}/100. This formula is not validated for multilingual drafts or as a measure of writing quality.</span></p>}
      <ul className="intelligence-suggestions">{review.suggestions.map(item=><li key={item}>{item}</li>)}</ul>
      {review.cliches.length > 0 && <p className="intelligence-alert"><AlertTriangle size={17}/><span>Generic phrases detected: {review.cliches.join(", ")}. Replace them only if a more specific, truthful example is available.</span></p>}
    </section>

    <section className="intelligence-section intelligence-policy">
      <div className="intelligence-section-heading"><div><span className="eyebrow">05 / PROVIDER COMMUNICATION</span><h3>Ask before accepting overlapping aid</h3><p>Prepare a neutral request for written clarification. Grantly does not interpret scheme law or generate statutory appeals.</p></div><FileText size={22}/></div>
      <button className="outline-button" type="button" onClick={()=>{setShowInquiry(value=>!value);setNotice("");}}>{showInquiry ? "Hide inquiry draft" : "Prepare provider inquiry"}</button>
      {showInquiry && <div className="intelligence-inquiry"><textarea readOnly value={inquiry} aria-label="Provider inquiry draft"/><button className="outline-button" type="button" onClick={()=>{void navigator.clipboard.writeText(inquiry).then(()=>setNotice("Inquiry copied. Review and personalise it before sending."),()=>setNotice("Clipboard access was unavailable. Select and copy the draft manually."));}}>Copy inquiry</button>{notice&&<p role="status">{notice}</p>}</div>}
    </section>
    <p className="intelligence-disclaimer">Planning estimates only. Provider notices, college fee statements and written financial-aid decisions take precedence. Do not enter bank credentials, government identity numbers or sensitive documents into this workspace.</p>
  </div>;
}
