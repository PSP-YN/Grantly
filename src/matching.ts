import type { EligibilityRule, Scholarship } from "./data";

export type StudentProfile = {
  course: string;
  year: string;
  state: string;
  income: string;
  category: string;
  academicBand: string;
  studyMode: string;
  otherScholarship: string;
  classXiiRegion: string;
  applicationRoute: string;
};

export type RuleResult = {
  label: string;
  state: "met" | "not-met" | "unknown";
};

export type EligibilityAssessment = {
  status: "Profile checks align" | "Potential mismatch" | "More details needed" | "Official review required";
  met: number;
  failed: number;
  unknown: number;
  total: number;
  results: RuleResult[];
};

const incomeUpperBound: Record<string, number> = {
  "Below ₹1 lakh": 100000,
  "₹1–2.5 lakh": 250000,
  "₹2.5–4.5 lakh": 450000,
  "₹4.5–5 lakh": 500000,
  "₹5–8 lakh": 800000,
  "Above ₹8 lakh": Number.POSITIVE_INFINITY
};

function isKnown(value: unknown): value is string {
  return typeof value === "string" && value.trim() !== "" && !["Not specified", "Prefer not to say", "Not sure"].includes(value);
}

function evaluate(rule: EligibilityRule, profile: StudentProfile): RuleResult["state"] {
  const raw = profile[rule.field];
  if (!isKnown(raw)) return "unknown";
  if (rule.operator === "incomeAtMost") {
    const upper = incomeUpperBound[raw];
    if (upper === undefined) return "unknown";
    return typeof rule.value === "number" && upper <= rule.value ? "met" : "not-met";
  }
  if (rule.operator === "routeMatchesYear") {
    if (raw === "Fresh applicant") return profile.year === "1st year" ? "met" : "not-met";
    if (raw === "Renewal applicant (previously selected)") return ["2nd year", "3rd year", "4th year", "5th year", "Postgraduate"].includes(profile.year) ? "met" : "not-met";
    return "unknown";
  }
  const expected = rule.value as string[];
  if (rule.operator === "oneOf") return expected.includes(raw) ? "met" : "not-met";
  if (rule.operator === "containsAny") {
    const value = raw.toLocaleLowerCase();
    return expected.some(term => value.includes(term)) ? "met" : "not-met";
  }
  return "unknown";
}

export function assessEligibility(scholarship: Scholarship, profile: StudentProfile): EligibilityAssessment {
  if (!scholarship.rules.length) {
    return { status: "Official review required", met: 0, failed: 0, unknown: 0, total: 0, results: [] };
  }
  const results = scholarship.rules.map(rule => ({ label: rule.label, state: evaluate(rule, profile) }));
  const met = results.filter(item => item.state === "met").length;
  const failed = results.filter(item => item.state === "not-met").length;
  const unknown = results.filter(item => item.state === "unknown").length;
  return {
    status: failed ? "Potential mismatch" : unknown ? "More details needed" : "Profile checks align",
    met,
    failed,
    unknown,
    total: results.length,
    results
  };
}

export function getIncomeCeiling(profileIncome: string): number | null {
  return incomeUpperBound[profileIncome] ?? null;
}
