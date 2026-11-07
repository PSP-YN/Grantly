import { describe, expect, it } from "vitest";
import { scholarships } from "./catalog";
import { assessEligibility, type StudentProfile } from "./matching";

const profile: StudentProfile = {
  course: "B.E. Computer Science",
  year: "1st year",
  state: "Karnataka",
  income: "₹2.5–4.5 lakh",
  category: "General",
  academicBand: "Above 80th percentile",
  studyMode: "Regular / full-time",
  otherScholarship: "No",
  classXiiRegion: "Other region",
  applicationRoute: "Fresh applicant"
};

describe("transparent eligibility engine", () => {
  it("marks all encoded CSSS checks as aligned when each supplied value satisfies the rule", () => {
    const csss = scholarships.find(item => item.id === "csss")!;
    const result = assessEligibility(csss, profile);
    expect(result.status).toBe("Profile checks align");
    expect(result.met).toBe(5);
    expect(result.unknown).toBe(0);
  });

  it("flags income, study mode and concurrent scholarship conflicts", () => {
    const csss = scholarships.find(item => item.id === "csss")!;
    const result = assessEligibility(csss, {
      ...profile,
      income: "Above ₹8 lakh",
      studyMode: "Distance / correspondence",
      otherScholarship: "Yes"
    });
    expect(result.status).toBe("Potential mismatch");
    expect(result.failed).toBe(3);
  });

  it("does not infer eligibility from missing information", () => {
    const csss = scholarships.find(item => item.id === "csss")!;
    const result = assessEligibility(csss, { ...profile, income: "Not specified", studyMode: "Not specified" });
    expect(result.status).toBe("More details needed");
    expect(result.unknown).toBe(2);
  });


  it("flags a fresh CSSS applicant who is not in first-year undergraduate study", () => {
    const csss = scholarships.find(item => item.id === "csss")!;
    const result = assessEligibility(csss, { ...profile, year: "2nd year" });
    expect(result.status).toBe("Potential mismatch");
    expect(result.results.find(item => item.label.includes("Fresh applicants"))?.state).toBe("not-met");
  });

  it("requires official review for schemes with incomplete or multi-route criteria", () => {
    const pragati = scholarships.find(item => item.id === "pragati")!;
    const inspire = scholarships.find(item => item.id === "inspire")!;
    expect(assessEligibility(pragati, profile).status).toBe("Official review required");
    expect(assessEligibility(inspire, profile).status).toBe("Official review required");
  });
});
