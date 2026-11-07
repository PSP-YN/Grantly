export type RuleField = "state" | "course" | "year" | "income" | "academicBand" | "category" | "studyMode" | "otherScholarship" | "classXiiRegion" | "applicationRoute";
export type EligibilityRule = {
  field: RuleField;
  operator: "containsAny" | "oneOf" | "incomeAtMost" | "routeMatchesYear";
  value: string[] | number;
  label: string;
};
export type Scholarship = {
  id: string;
  name: string;
  provider: string;
  amount: string;
  amountValue: number;
  deadline: string;
  category: string;
  level: string;
  region: string;
  description: string;
  eligibility: string[];
  tags: string[];
  source: string;
  sourceLabel: string;
  lastVerified: string;
  verificationNote: string;
  initials: string;
  tone: string;
  rules: EligibilityRule[];
  documents: string[];
};
export const scholarships: Scholarship[] = [
  {
    id: "csss",
    name: "PM-USP Central Sector Scholarship (CSSS)",
    provider: "Department of Higher Education · Government of India",
    amount: "₹12,000 / year (first 3 UG years); ₹20,000 / year for technical courses in 4th / 5th year and at PG level",
    amountValue: 20000,
    deadline: "Renewal applications close 30 Nov 2026; fresh window not listed as open",
    category: "Merit-based",
    level: "Undergraduate",
    region: "All India",
    description: "Merit-based support for eligible students pursuing regular higher education after Class XII.",
    eligibility: ["Fresh: Class XII passed in the last academic year and admission to first-year regular UG", "Renewal: applicant must have been selected for CSSS previously and meet renewal marks / attendance rules", "Family income up to ₹4.5 lakh and no concurrent scholarship / fee reimbursement", "A post-Class XII study gap and diploma courses are not eligible"],
    tags: ["Merit", "Undergraduate", "National Scholarship Portal"],
    source: "https://scholarships.gov.in/Students",
    sourceLabel: "National Scholarship Portal",
    lastVerified: "2026-11-07",
    verificationNote: "The Ministry FAQ states the 80th-percentile, regular-course, ₹4.5 lakh income and no-concurrent-scholarship conditions. NSP lists the 2026–27 renewal window through 30 November; a fresh application window is not listed as open. Confirm live status on NSP.",
    initials: "MoE",
    tone: "sage",
    rules: [
      { field: "academicBand", operator: "oneOf", value: ["Above 80th percentile"], label: "Class XII result above the 80th percentile in the relevant board stream" },
      { field: "income", operator: "incomeAtMost", value: 450000, label: "Annual family income within the scheme ceiling" },
      { field: "applicationRoute", operator: "routeMatchesYear", value: ["Fresh applicant", "Renewal applicant (previously selected)"], label: "Fresh applicants must be in first-year UG; renewal applicants must have received CSSS previously" },
      { field: "studyMode", operator: "oneOf", value: ["Regular / full-time"], label: "Regular (not distance / correspondence) course" },
      { field: "otherScholarship", operator: "oneOf", value: ["No"], label: "Not receiving another scholarship or fee reimbursement" }
    ],
    documents: ["Class XII marksheet", "Current institution admission / bonafide certificate", "Family income certificate", "Bank account details", "Aadhaar / OTR details, as required by NSP"]
  },
  {
    id: "inspire",
    name: "INSPIRE Scholarship for Higher Education (SHE)",
    provider: "Department of Science & Technology · Government of India",
    amount: "₹80,000 / year (scheme-stated value)",
    amountValue: 80000,
    deadline: "Check INSPIRE notice board",
    category: "Science & research",
    level: "Undergraduate / Integrated science",
    region: "All India",
    description: "Scholarship and mentorship support for meritorious students entering eligible basic and natural science degree programmes.",
    eligibility: ["Top 1% in Class XII or another listed qualifying route", "Eligible basic / natural science degree", "Age and same-year admission conditions apply"],
    tags: ["Science", "Research", "Merit"],
    source: "https://www.online-inspire.gov.in/Account/FAQ",
    sourceLabel: "Official INSPIRE FAQ",
    lastVerified: "2026-11-07",
    verificationNote: "The official FAQ describes the SHE award value and several alternative eligibility routes. The app intentionally leaves automated matching disabled because age, course exclusions, year-of-entry and alternative qualification routes need a complete review.",
    initials: "DST",
    tone: "blue",
    rules: [],
    documents: ["Class XII marksheet", "Class X certificate / date-of-birth proof", "Institution endorsement certificate", "Qualifying rank proof, if applicable", "Current admission proof"]
  },
  {
    id: "pragati",
    name: "AICTE Pragati Scholarship",
    provider: "All India Council for Technical Education",
    amount: "See current AICTE scheme guidelines",
    amountValue: 0,
    deadline: "Check AICTE / NSP notices",
    category: "Technical education",
    level: "Technical degree / diploma",
    region: "All India",
    description: "Financial assistance scheme for eligible girl students enrolled in approved technical education programmes.",
    eligibility: ["Girl student condition applies", "AICTE-approved technical institution and programme", "Family-income and intake conditions apply"],
    tags: ["Engineering", "Technical", "Women in STEM"],
    source: "https://www.aicte-india.org/",
    sourceLabel: "AICTE official website",
    lastVerified: "2026-11-07",
    verificationNote: "This record links to the regulator. Confirm the current scheme notice, approved institution list, intake and application dates before relying on it.",
    initials: "AI",
    tone: "rose",
    rules: [],
    documents: ["Admission proof", "Institution verification / AICTE details", "Family income certificate", "Previous academic marksheets", "Bank details and identity proof"]
  },
  {
    id: "saksham",
    name: "AICTE Saksham Scholarship",
    provider: "All India Council for Technical Education",
    amount: "See current AICTE scheme guidelines",
    amountValue: 0,
    deadline: "Check AICTE / NSP notices",
    category: "Technical education",
    level: "Technical degree / diploma",
    region: "All India",
    description: "Financial assistance for eligible students with benchmark disabilities pursuing approved technical education.",
    eligibility: ["Benchmark disability criteria apply", "AICTE-approved technical programme", "Family-income and admission conditions apply"],
    tags: ["Engineering", "Accessibility", "Technical"],
    source: "https://www.aicte-india.org/",
    sourceLabel: "AICTE official website",
    lastVerified: "2026-11-07",
    verificationNote: "This record links to the regulator. Confirm the current scheme notice, disability documentation requirements, approved institution and dates.",
    initials: "AI",
    tone: "teal",
    rules: [],
    documents: ["Disability certificate, as specified by the scheme", "Admission proof", "Institution verification", "Family income certificate", "Previous academic marksheets"]
  },
  {
    id: "top-class-sc",
    name: "Top Class Education for SC Students",
    provider: "Department of Social Justice & Empowerment · Government of India",
    amount: "See current scheme guidelines",
    amountValue: 0,
    deadline: "Student applications close 30 Nov 2026 (NSP AY 2026–27)",
    category: "Need-based",
    level: "Higher education",
    region: "Eligible institutions across India",
    description: "Central support for eligible SC students admitted to institutions covered by the scheme.",
    eligibility: ["SC category condition applies", "Admission to an institution included in the scheme list", "Family-income and renewal conditions apply"],
    tags: ["SC students", "Higher education", "Government"],
    source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal scheme catalogue",
    lastVerified: "2026-11-07",
    verificationNote: "NSP lists AY 2026–27 student applications through 30 November 2026. Institution coverage, income ceiling, benefits and renewal rules must be checked in the current specification.",
    initials: "SJ",
    tone: "gold",
    rules: [],
    documents: ["Caste certificate", "Admission proof from an eligible institution", "Family income certificate", "Previous academic records", "Bank details and identity proof"]
  },
  {
    id: "top-class-st",
    name: "National Fellowship & Scholarship for Higher Education of ST Students",
    provider: "Ministry of Tribal Affairs · Government of India",
    amount: "See current scheme guidelines",
    amountValue: 0,
    deadline: "Student applications close 30 Nov 2026 (NSP AY 2026–27)",
    category: "Need-based",
    level: "Higher education",
    region: "Eligible institutions across India",
    description: "Scholarship support for eligible ST students pursuing higher education at institutions covered by the scheme.",
    eligibility: ["ST category condition applies", "Admission and institution-list conditions apply", "Family-income and renewal rules apply"],
    tags: ["ST students", "Higher education", "Government"],
    source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal scheme catalogue",
    lastVerified: "2026-11-07",
    verificationNote: "NSP lists AY 2026–27 student applications through 30 November 2026. Confirm institution coverage, current benefits and eligibility in the official specification.",
    initials: "TA",
    tone: "violet",
    rules: [],
    documents: ["ST certificate", "Admission proof", "Family income certificate", "Previous academic records", "Bank details and identity proof"]
  },
  {
    id: "ishan-uday",
    name: "Ishan Uday Special Scholarship Scheme",
    provider: "University Grants Commission · Government of India",
    amount: "₹80,000 / year (UGC scheme page)",
    amountValue: 80000,
    deadline: "NSP lists student applications through 30 Nov 2026",
    category: "Need-based",
    level: "First-year undergraduate",
    region: "North Eastern Region domicile",
    description: "Financial assistance for eligible students from the North Eastern Region entering a regular undergraduate degree.",
    eligibility: ["Class XII passed from a school in the North Eastern Region", "First-year regular UG degree at an eligible institution", "Parental income below ₹4.5 lakh per year", "NER domicile and institution conditions apply"],
    tags: ["North East", "Undergraduate", "UGC"],
    source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal — AY 2026–27",
    lastVerified: "2026-11-07",
    verificationNote: "NSP lists the scheme in the AY 2026–27 catalogue with student applications through 30 November 2026. UGC confirms the domicile, Class XII region, first-year regular UG and income conditions. The app intentionally requires manual review because institution accreditation, prior-degree and other exclusions are not fully captured.",
    initials: "UGC",
    tone: "teal",
    rules: [],
    documents: ["North Eastern Region domicile certificate", "Class XII marksheet", "First-year admission proof", "Family income certificate", "Institution details and bank account information"]
  },
  {
    id: "pm-yasasvi-college",
    name: "PM YASASVI — Top Class Education in College",
    provider: "Department of Social Justice & Empowerment · Government of India",
    amount: "See current scheme guidelines",
    amountValue: 0,
    deadline: "NSP lists student applications through 30 Nov 2026",
    category: "Need-based",
    level: "Undergraduate / college",
    region: "Eligible institutions across India",
    description: "Central support for eligible OBC, EBC and DNT students enrolled in institutions covered by the scheme.",
    eligibility: ["OBC, EBC or DNT category conditions apply", "Institution and course must be covered by the current scheme list", "Family-income, admission and renewal conditions apply"],
    tags: ["OBC", "EBC", "DNT", "Government"],
    source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal — AY 2026–27",
    lastVerified: "2026-11-07",
    verificationNote: "NSP lists the college scheme in AY 2026–27 and shows the student application window through 30 November 2026. Category, institution list, income ceiling, benefit and renewal conditions must be checked in the current scheme specification.",
    initials: "YAS",
    tone: "gold",
    rules: [],
    documents: ["Category certificate", "Admission proof from an eligible institution", "Family income certificate", "Previous academic records", "Bank account details"]
  },
];
export const categories = ["All", "Merit-based", "Need-based", "Technical education", "Science & research"];
