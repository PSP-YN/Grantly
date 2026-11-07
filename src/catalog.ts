import { categories as baseCategories, scholarships as baseScholarships, type Scholarship } from "./data";
import { scholarshipSupplemental } from "./dataSupplement";

const existingIds = new Set(baseScholarships.map(item => item.id));
const uniqueSupplemental = scholarshipSupplemental.filter(item => !existingIds.has(item.id));
baseScholarships.push(...uniqueSupplemental);

export const scholarships = baseScholarships;
export const categories = [...baseCategories, "State scheme", "Private foundation", "Fellowship", "Overseas study"];
export const scholarshipCount = scholarships.length;
export type { Scholarship };

const csssRecord = scholarships.find(item => item.id === "csss");
if (csssRecord) {
  csssRecord.deadline = "NSP student page reports 31 Oct 2026 renewal close; catalogue listing reports 30 Nov 2026 — verify directly (conflicting date snapshots)";
  csssRecord.verificationNote = "The Ministry FAQ supports the 80th-percentile, regular-course, ₹4.5 lakh income and no-concurrent-scholarship conditions. NSP's student announcement reports 31 Oct 2026 for renewal while the scheme catalogue has displayed 30 Nov 2026; this conflict is unresolved. Treat the deadline as unconfirmed and check the live scheme specification. Fresh application status is not confirmed.";
}
