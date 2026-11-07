export const FUNDING_INTELLIGENCE_STORAGE_KEY = "grantly:funding-intelligence:v1";

export type FundingInputs = {
  tuition: number;
  housing: number;
  food: number;
  books: number;
  transport: number;
  otherCosts: number;
  institutionalAid: number;
  governmentGrants: number;
  workIncome: number;
  savings: number;
  awardedScholarships: number;
  proposedScholarship: number;
  annualInterestRate: number;
  repaymentYears: number;
};

export const DEFAULT_FUNDING_INPUTS: FundingInputs = {
  tuition: 0, housing: 0, food: 0, books: 0, transport: 0, otherCosts: 0,
  institutionalAid: 0, governmentGrants: 0, workIncome: 0, savings: 0,
  awardedScholarships: 0, proposedScholarship: 0, annualInterestRate: 10, repaymentYears: 5
};

export function normalizeFundingInputs(value: unknown): FundingInputs {
  const record = value && typeof value === "object" ? value as Partial<FundingInputs> : {};
  const keys = Object.keys(DEFAULT_FUNDING_INPUTS) as (keyof FundingInputs)[];
  const normalized = Object.fromEntries(keys.map(key => {
    const candidate = record[key];
    const fallback = DEFAULT_FUNDING_INPUTS[key];
    const number = typeof candidate === "number" && Number.isFinite(candidate) ? Math.max(0, candidate) : fallback;
    return [key, number];
  })) as FundingInputs;
  normalized.annualInterestRate = Math.min(100, normalized.annualInterestRate);
  normalized.repaymentYears = Math.min(40, Math.max(1, normalized.repaymentYears));
  return normalized;
}

export type FundingSnapshot = {
  annualCost: number;
  confirmedSupport: number;
  projectedSupport: number;
  currentGap: number;
  projectedGap: number;
  projectedSurplus: number;
  currentCoveragePercent: number;
  projectedCoveragePercent: number;
  monthlyEmi: number;
  totalRepayment: number;
  totalInterest: number;
};

const nonNegative = (value: number) => Number.isFinite(value) ? Math.max(0, value) : 0;

export function calculateFundingSnapshot(input: FundingInputs): FundingSnapshot {
  const annualCost = [
    input.tuition, input.housing, input.food, input.books, input.transport, input.otherCosts
  ].reduce((sum, value) => sum + nonNegative(value), 0);
  const confirmedSupport = [
    input.institutionalAid, input.governmentGrants, input.workIncome,
    input.savings, input.awardedScholarships
  ].reduce((sum, value) => sum + nonNegative(value), 0);
  const projectedSupport = confirmedSupport + nonNegative(input.proposedScholarship);
  const currentGap = Math.max(0, annualCost - confirmedSupport);
  const projectedGap = Math.max(0, annualCost - projectedSupport);
  const projectedSurplus = Math.max(0, projectedSupport - annualCost);
  const currentCoveragePercent = annualCost > 0 ? Math.min(100, confirmedSupport / annualCost * 100) : 0;
  const projectedCoveragePercent = annualCost > 0 ? Math.min(100, projectedSupport / annualCost * 100) : 0;

  const principal = projectedGap;
  const months = Math.max(1, Math.round(Math.min(40, nonNegative(input.repaymentYears || 1)) * 12));
  const monthlyRate = Math.min(100, nonNegative(input.annualInterestRate)) / 1200;
  const monthlyEmi = principal === 0 ? 0 : monthlyRate === 0
    ? principal / months
    : principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalRepayment = monthlyEmi * months;

  return {
    annualCost,
    confirmedSupport,
    projectedSupport,
    currentGap,
    projectedGap,
    projectedSurplus,
    currentCoveragePercent,
    projectedCoveragePercent,
    monthlyEmi,
    totalRepayment,
    totalInterest: Math.max(0, totalRepayment - principal)
  };
}

export type NarrativeReview = {
  words: number;
  sentences: number;
  averageWordsPerSentence: number;
  firstPersonReferences: number;
  cliches: string[];
  readability: number | null;
  suggestions: string[];
};

const clichePhrases = [
  "since the dawn of time",
  "in today's fast-paced world",
  "always been my dream",
  "i am writing to express my interest",
  "passionate about making a difference",
  "webster defines"
];

function estimateSyllables(word: string): number {
  const normalized = word.toLocaleLowerCase().replace(/[^a-z]/g, "");
  if (!normalized) return 0;
  if (normalized.length <= 3) return 1;
  const groups = normalized.match(/[aeiouy]+/g);
  let count = groups?.length ?? 1;
  if (normalized.endsWith("e") && count > 1) count -= 1;
  return Math.max(1, count);
}

/**
 * Provides transparent, local writing diagnostics. It does not infer authorship,
 * detect AI-generated text, or judge whether a student's story is truthful.
 */
export function reviewNarrative(text: string): NarrativeReview {
  const trimmed = text.trim();
  if (!trimmed) {
    return {
      words: 0, sentences: 0, averageWordsPerSentence: 0,
      firstPersonReferences: 0, cliches: [], readability: null,
      suggestions: ["Start with a specific moment, decision or experience from your own life."]
    };
  }

  const tokens = trimmed.match(/[\p{L}\p{N}’'-]+/gu) ?? [];
  const sentencesList = trimmed.split(/[.!?]+/).map(item => item.trim()).filter(Boolean);
  const sentences = Math.max(1, sentencesList.length);
  const averageWordsPerSentence = tokens.length / sentences;
  const lower = trimmed.toLocaleLowerCase();
  const firstPersonReferences = (lower.match(/\b(i|me|my|mine|we|our|us)\b/g) ?? []).length;
  const cliches = clichePhrases.filter(phrase => lower.includes(phrase));
  const englishWords = tokens.filter(word => /^[a-z]+$/i.test(word));
  const syllables = englishWords.reduce((sum, word) => sum + estimateSyllables(word), 0);
  const readability = englishWords.length > 0
    ? Math.max(0, Math.min(100, Math.round(206.835 - 1.015 * (englishWords.length / sentences) - 84.6 * (syllables / englishWords.length))))
    : null;

  const suggestions: string[] = [];
  if (averageWordsPerSentence > 24) suggestions.push("Break up long sentences so each one communicates one main idea.");
  if (firstPersonReferences === 0) suggestions.push("Consider using first-person detail to make your own role and decisions clear.");
  if (cliches.length) suggestions.push("Replace generic phrases with a concrete event, action and result.");
  if (tokens.length < 120) suggestions.push("Add specific evidence: what you did, what changed and what you learned.");
  if (!suggestions.length) suggestions.push("Review every claim for accuracy and make sure the examples are genuinely yours.");

  return {
    words: tokens.length,
    sentences,
    averageWordsPerSentence: Math.round(averageWordsPerSentence * 10) / 10,
    firstPersonReferences,
    cliches,
    readability,
    suggestions
  };
}
