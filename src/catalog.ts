import { categories as baseCategories, scholarships as baseScholarships, type Scholarship } from "./data";
import { scholarshipSupplemental } from "./dataSupplement";

const existingIds = new Set(baseScholarships.map(item => item.id));
const uniqueSupplemental = scholarshipSupplemental.filter(item => !existingIds.has(item.id));
baseScholarships.push(...uniqueSupplemental);

export const scholarships = baseScholarships;
export const categories = [...baseCategories, "State scheme", "Private foundation", "Fellowship"];
export const scholarshipCount = scholarships.length;
export type { Scholarship };
