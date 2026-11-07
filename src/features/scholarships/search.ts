import type { Scholarship } from "../../data";
import { assessEligibility, type StudentProfile } from "../../matching";

export type ScholarshipSort = "match" | "amount" | "name" | "deadline";
export type ScholarshipScope = "Discover" | "Saved" | "Applications";

const matchRank: Record<ReturnType<typeof assessEligibility>["status"], number> = {
  "Profile checks align": 0,
  "More details needed": 1,
  "Official review required": 2,
  "Potential mismatch": 3
};

function searchableText(s: Scholarship): string {
  return [
    s.name, s.provider, s.description, s.category, s.level, s.region, s.amount,
    s.deadline, s.sourceLabel, s.verificationNote, ...s.tags, ...s.eligibility
  ].join(" ").normalize("NFKC").toLocaleLowerCase();
}

export function filterScholarships(input: {
  scholarships: Scholarship[];
  savedIds: string[];
  applicationIds: string[];
  scope: ScholarshipScope;
  category: string;
  query: string;
  sort: ScholarshipSort;
  profile: StudentProfile;
}): Scholarship[] {
  const saved = new Set(input.savedIds);
  const applications = new Set(input.applicationIds);
  const term = input.query.trim().normalize("NFKC").toLocaleLowerCase();
  const filtered = input.scholarships.filter(s => {
    if (input.scope === "Saved" && !saved.has(s.id)) return false;
    if (input.scope === "Applications" && !applications.has(s.id)) return false;
    if (input.category !== "All" && s.category !== input.category) return false;
    return !term || searchableText(s).includes(term);
  });
  return filtered.sort((a, b) => {
    if (input.sort === "amount") return b.amountValue - a.amountValue || a.name.localeCompare(b.name);
    if (input.sort === "name") return a.name.localeCompare(b.name);
    if (input.sort === "deadline") return a.deadline.localeCompare(b.deadline) || a.name.localeCompare(b.name);
    return matchRank[assessEligibility(a, input.profile).status] - matchRank[assessEligibility(b, input.profile).status] || a.name.localeCompare(b.name);
  });
}
