import { useMemo, useState } from "react";
import { Calculator, Download, ShieldCheck } from "lucide-react";

type Budget = {
  tuition: number;
  housing: number;
  food: number;
  books: number;
  transport: number;
  other: number;
  existingAid: number;
  scholarship: number;
};

const initialBudget: Budget = {
  tuition: 0, housing: 0, food: 0, books: 0, transport: 0, other: 0,
  existingAid: 0, scholarship: 0
};
const storageKey = "grantly:funding-planner:v1";
const money = (value: number) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: "INR", maximumFractionDigits: 0
}).format(value);

function loadBudget(): Budget {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) ?? "null") as Partial<Budget> | null;
    if (!value || typeof value !== "object") return initialBudget;
    return Object.fromEntries(Object.keys(initialBudget).map(key => {
      const raw = value[key as keyof Budget];
      return [key, typeof raw === "number" && Number.isFinite(raw) ? Math.max(0, Math.min(raw, 1_000_000_000)) : 0];
    })) as Budget;
  } catch {
    return initialBudget;
  }
}

export function calculateFundingGap(budget: Budget) {
  const cost = budget.tuition + budget.housing + budget.food + budget.books + budget.transport + budget.other;
  const support = budget.existingAid + budget.scholarship;
  return { cost, support, gap: Math.max(0, cost - support), surplus: Math.max(0, support - cost), coverage: cost === 0 ? 0 : Math.min(100, Math.round((support / cost) * 100)) };
}

export default function FundingPlanner() {
  const [budget, setBudget] = useState<Budget>(loadBudget);
  const result = useMemo(() => calculateFundingGap(budget), [budget]);
  const fields: {key: keyof Budget; label: string; group: "cost" | "support"}[] = [
    { key: "tuition", label: "Tuition & mandatory fees", group: "cost" },
    { key: "housing", label: "Accommodation", group: "cost" },
    { key: "food", label: "Food & living expenses", group: "cost" },
    { key: "books", label: "Books & supplies", group: "cost" },
    { key: "transport", label: "Transport", group: "cost" },
    { key: "other", label: "Other education costs", group: "cost" },
    { key: "existingAid", label: "Existing grants / fee waivers", group: "support" },
    { key: "scholarship", label: "Scholarship scenario", group: "support" }
  ];
  const update = (key: keyof Budget, raw: string) => {
    const parsed = Number(raw);
    const value = raw === "" ? 0 : Number.isFinite(parsed) ? Math.max(0, Math.min(parsed, 1_000_000_000)) : 0;
    const next = { ...budget, [key]: value };
    setBudget(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* Current session remains usable. */ }
  };
  const exportPlan = () => {
    const data = { product: "Grantly Funding Planner", exportedAt: new Date().toISOString(), currency: "INR", budget, result };
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    const anchor = document.createElement("a");
    anchor.href = url; anchor.download = "grantly-funding-plan.json"; anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return <section className="funding-planner" aria-labelledby="funding-planner-title">
    <div className="planner-intro">
      <div className="planner-icon"><Calculator size={22}/></div>
      <div><h2 id="funding-planner-title">Plan your education funding</h2><p>Estimate costs, compare support and understand the remaining gap before making decisions.</p></div>
    </div>
    <div className="planner-disclaimer"><ShieldCheck size={16}/><span>This is a planning estimate—not an award prediction, financial advice or an official cost-of-attendance calculation. Enter figures from your institution and verify award restrictions.</span></div>
    <div className="planner-grid">
      <div className="planner-fields">
        <h3>Estimated costs & support</h3>
        <p className="planner-help">Use one academic year and INR for every field.</p>
        <div className="planner-input-grid">
          {fields.map(field => <label key={field.key} className={field.group === "support" ? "planner-field support-field" : "planner-field"}>
            <span>{field.label}</span><div className="planner-input-wrap"><span>₹</span><input type="number" min="0" max="1000000000" step="1000" inputMode="decimal" value={budget[field.key] || ""} placeholder="0" onChange={event => update(field.key, event.target.value)} /></div>
          </label>)}
        </div>
        <button className="outline-button planner-export" onClick={exportPlan}><Download size={15}/> Export funding plan</button>
      </div>
      <aside className="planner-results" aria-live="polite">
        <span className="planner-result-label">Estimated uncovered amount</span>
        <strong className="planner-gap">{money(result.gap)}</strong>
        <div className="planner-meter" role="progressbar" aria-label="Estimated cost covered by current and planned support" aria-valuemin={0} aria-valuemax={100} aria-valuenow={result.coverage}><span style={{width: result.coverage + "%"}}/></div>
        <div className="planner-coverage">{result.coverage}% estimated cost covered</div>
        <dl className="planner-breakdown"><div><dt>Total estimated cost</dt><dd>{money(result.cost)}</dd></div><div><dt>Existing + planned support</dt><dd>{money(result.support)}</dd></div></dl>
        {result.surplus > 0 && <p className="planner-surplus">Entered support exceeds the estimated cost by {money(result.surplus)}. Check whether the awards can be combined and used for these expenses.</p>}
        {result.cost === 0 && <p className="planner-empty">Add your annual education costs to calculate a funding gap.</p>}
      </aside>
    </div>
  </section>;
}
