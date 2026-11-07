export type Budget = { tuition:number; housing:number; food:number; books:number; transport:number; other:number; existingAid:number; scholarship:number };\nexport const FUNDING_PLANNER_STORAGE_KEY="grantly:funding-planner:v1";\nexport const DEFAULT_BUDGET:Budget={tuition:0,housing:0,food:0,books:0,transport:0,other:0,existingAid:0,scholarship:0};\nexport function normalizeBudget(value:unknown):Budget{\n  const input=value&&typeof value==="object"?value as Partial<Budget>:{};\n  return Object.fromEntries(Object.keys(DEFAULT_BUDGET).map(key=>{const raw=input[key as keyof Budget];return [key,typeof raw==="number"&&Number.isFinite(raw)?Math.max(0,Math.min(raw,1_000_000_000)):0];})) as Budget;\n}
export function calculateFundingGap(budget: Budget) {
  const cost = budget.tuition + budget.housing + budget.food + budget.books + budget.transport + budget.other;
  const support = budget.existingAid + budget.scholarship;
  return { cost, support, gap: Math.max(0, cost - support), surplus: Math.max(0, support - cost), coverage: cost === 0 ? 0 : Math.min(100, Math.round((support / cost) * 100)) };
}
