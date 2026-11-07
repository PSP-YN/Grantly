export type Budget = { tuition:number; housing:number; food:number; books:number; transport:number; other:number; existingAid:number; scholarship:number };
export function calculateFundingGap(budget: Budget) {
  const cost = budget.tuition + budget.housing + budget.food + budget.books + budget.transport + budget.other;
  const support = budget.existingAid + budget.scholarship;
  return { cost, support, gap: Math.max(0, cost - support), surplus: Math.max(0, support - cost), coverage: cost === 0 ? 0 : Math.min(100, Math.round((support / cost) * 100)) };
}
