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
    name: "AICTE Pragati Scholarship — Technical Degree",
    provider: "All India Council for Technical Education",
    amount: "See current AICTE scheme guidelines",
    amountValue: 0,
    deadline: "NSP AY 2026–27 student applications close 30 Nov 2026",
    category: "Technical education",
    level: "Technical degree",
    region: "All India",
    description: "Financial assistance scheme for eligible girl students enrolled in approved technical education programmes.",
    eligibility: ["Girl student condition applies", "AICTE-approved technical institution and programme", "Family-income and intake conditions apply"],
    tags: ["Engineering", "Technical", "Women in STEM"],
    source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal — AY 2026–27",
    lastVerified: "2026-11-07",
    verificationNote: "NSP lists the technical degree scheme for AY 2026–27 with student applications through 30 November 2026. Confirm institution approval, current intake, family-income rules and application requirements in the scheme specification.",
    initials: "AI",
    tone: "rose",
    rules: [],
    documents: ["Admission proof", "Institution verification / AICTE details", "Family income certificate", "Previous academic marksheets", "Bank details and identity proof"]
  },
  {
    id: "saksham",
    name: "AICTE Saksham Scholarship — Technical Degree",
    provider: "All India Council for Technical Education",
    amount: "See current AICTE scheme guidelines",
    amountValue: 0,
    deadline: "NSP AY 2026–27 student applications close 30 Nov 2026",
    category: "Technical education",
    level: "Technical degree",
    region: "All India",
    description: "Financial assistance for eligible students with benchmark disabilities pursuing approved technical education.",
    eligibility: ["Benchmark disability criteria apply", "AICTE-approved technical programme", "Family-income and admission conditions apply"],
    tags: ["Engineering", "Accessibility", "Technical"],
    source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal — AY 2026–27",
    lastVerified: "2026-11-07",
    verificationNote: "NSP lists the technical degree scheme for AY 2026–27 with student applications through 30 November 2026. Confirm disability threshold, institution approval, income and documents in the current scheme specification.",
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


// Supplemental directory entries. Eligibility matching intentionally remains disabled
// until a scheme's full current official criteria have been independently reviewed.
scholarships.push(
  {
    id: "aicte-swanath-degree", name: "AICTE Swanath Scholarship — Technical Degree",
    provider: "All India Council for Technical Education", amount: "Check current AICTE guidelines", amountValue: 0,
    deadline: "Check current NSP scheme notice", category: "Technical education", level: "Technical degree",
    region: "All India", description: "Support for eligible students under the AICTE Swanath scheme pursuing approved technical degree programmes.",
    eligibility: ["Specific eligible beneficiary categories apply", "AICTE-approved technical institution and programme", "Current scheme guidelines define award and documentation"],
    tags: ["AICTE", "Technical", "Welfare", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "Listed in the NSP AY 2026–27 catalogue. Confirm current criteria, institution approval, award value and dates from the scheme specification. No automated eligibility result is provided.",
    initials: "AICTE", tone: "blue", rules: [],
    documents: ["Admission proof", "Institution verification", "Category / beneficiary proof as applicable", "Income certificate if required", "Bank details"]
  },
  {
    id: "aicte-swanath-diploma", name: "AICTE Swanath Scholarship — Technical Diploma",
    provider: "All India Council for Technical Education", amount: "Check current AICTE guidelines", amountValue: 0,
    deadline: "Check current NSP scheme notice", category: "Technical education", level: "Technical diploma",
    region: "All India", description: "Support for eligible students enrolled in approved technical diploma programmes under Swanath.",
    eligibility: ["Scheme-defined beneficiary category", "AICTE-approved diploma institution", "Current scheme specification governs eligibility"],
    tags: ["AICTE", "Diploma", "Welfare", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "Listed in NSP AY 2026–27. Check exact current rules and opening/closing dates on NSP before applying.",
    initials: "AICTE", tone: "blue", rules: [],
    documents: ["Admission proof", "Institution verification", "Beneficiary proof as applicable", "Bank details"]
  },
  {
    id: "pmss-capf", name: "Prime Minister’s Scholarship Scheme — CAPF & Assam Rifles",
    provider: "Ministry of Home Affairs / Welfare and Rehabilitation Board", amount: "Check current scheme guidelines", amountValue: 0,
    deadline: "NSP AY 2026–27 notice: verify current deadline", category: "Merit-based", level: "Professional / higher education",
    region: "All India", description: "Scholarship for eligible wards and widows of CAPF and Assam Rifles personnel under scheme-specific conditions.",
    eligibility: ["Relationship to eligible CAPF / Assam Rifles personnel required", "Course and academic performance restrictions apply", "Fresh and renewal rules differ"],
    tags: ["CAPF", "Defence families", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "NSP AY 2026–27 catalogue lists this programme. Confirm eligible course list, personnel status and current renewal requirements from official guidelines.",
    initials: "PM", tone: "gold", rules: [],
    documents: ["Personnel service / discharge proof", "Relationship proof", "Admission proof", "Previous marksheet", "Bank details"]
  },
  {
    id: "pmss-police-martyred", name: "Prime Minister’s Scholarship Scheme — Wards of Police Personnel Martyred in Terror/Naxal Attacks",
    provider: "Ministry of Home Affairs", amount: "Check current scheme guidelines", amountValue: 0,
    deadline: "Check NSP current notice", category: "Merit-based", level: "Higher education",
    region: "All India", description: "Scholarship for eligible wards of State/UT police personnel martyred in terror or Naxal attacks.",
    eligibility: ["Eligible parent service and martyrdom circumstances required", "Course and academic rules apply", "Official verification is mandatory"],
    tags: ["Police families", "Welfare", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "Listed on NSP AY 2026–27. Confirm current benefit and required police service documentation with the scheme authority.",
    initials: "PM", tone: "gold", rules: [],
    documents: ["Police service / martyrdom certificate", "Relationship proof", "Admission proof", "Academic records", "Bank details"]
  },
  {
    id: "postmatric-disability", name: "Post-Matric Scholarship for Students with Disabilities",
    provider: "Department of Empowerment of Persons with Disabilities", amount: "See current scheme guidelines", amountValue: 0,
    deadline: "Check NSP current notice", category: "Need-based", level: "Post-matric / higher education",
    region: "All India", description: "Support for eligible students with disabilities continuing education after matriculation.",
    eligibility: ["Disability and certification criteria apply", "Course, income and academic conditions apply", "Current scheme notice determines award and renewal"],
    tags: ["Disability", "Accessibility", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "Listed in NSP AY 2026–27 catalogue. Verify current disability threshold, income ceiling and eligible course details before relying on this record.",
    initials: "DEP", tone: "teal", rules: [],
    documents: ["Disability certificate / UDID if specified", "Admission proof", "Income certificate", "Academic records", "Bank details"]
  },
  {
    id: "top-class-disability", name: "Scholarship for Top Class Education for Students with Disabilities",
    provider: "Department of Empowerment of Persons with Disabilities", amount: "See current scheme guidelines", amountValue: 0,
    deadline: "Check NSP current notice", category: "Need-based", level: "Higher education",
    region: "Eligible institutions across India", description: "Support for eligible students with disabilities studying at institutions covered by the current scheme.",
    eligibility: ["Disability documentation required", "Institution and course must be covered", "Income and award rules are scheme-specific"],
    tags: ["Disability", "Higher education", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "Listed in NSP AY 2026–27. Check institution coverage and latest award limits in the official scheme PDF.",
    initials: "DEP", tone: "teal", rules: [],
    documents: ["Disability certificate", "Admission proof", "Institution verification", "Income proof", "Academic records"]
  },
  {
    id: "national-pg-scholarship", name: "National Scholarship for Post Graduate Studies",
    provider: "University Grants Commission", amount: "Check current UGC guidelines", amountValue: 0,
    deadline: "Check NSP current notice", category: "Merit-based", level: "Postgraduate",
    region: "All India", description: "UGC scholarship programme for eligible postgraduate students under current scheme rules.",
    eligibility: ["Fresh postgraduate enrolment and age/course rules apply", "Institution eligibility and exclusions apply", "Scheme guidelines define selection and award"],
    tags: ["UGC", "PG", "Merit", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "NSP lists this scheme for AY 2026–27. Verify current UGC guidelines, age limit, eligible institution and award value.",
    initials: "UGC", tone: "blue", rules: [],
    documents: ["UG admission / degree marksheets", "PG admission proof", "Date-of-birth proof", "Institution verification", "Bank details"]
  },
  {
    id: "nec-merit", name: "NEC Merit Scholarship for Higher Professional Courses",
    provider: "North Eastern Council, Ministry of DoNER", amount: "Check current NEC guidelines", amountValue: 0,
    deadline: "Check NSP current notice", category: "Merit-based", level: "Professional higher education",
    region: "North Eastern Region", description: "Financial support for eligible students from the North Eastern Region pursuing professional courses.",
    eligibility: ["NER domicile and course conditions apply", "Academic merit and income requirements apply", "Fresh/renewal criteria vary"],
    tags: ["North East", "Professional courses", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "NSP AY 2026–27 lists renewal applications. Confirm whether fresh applications are open and review state/course quotas.",
    initials: "NEC", tone: "teal", rules: [],
    documents: ["NER domicile certificate", "Admission proof", "Academic marksheets", "Income certificate", "Bank details"]
  },
  {
    id: "icar-nts-ug", name: "ICAR National Talent Scholarship — Undergraduate",
    provider: "Indian Council of Agricultural Research", amount: "Check current ICAR guidelines", amountValue: 0,
    deadline: "Check ICAR / NSP notice", category: "Science & research", level: "Agriculture undergraduate",
    region: "All India (eligible institutions / region rules)", description: "Scholarship support associated with eligible agricultural undergraduate programmes and ICAR rules.",
    eligibility: ["Eligible agricultural degree and ICAR-recognised institution required", "Admission and regional conditions apply", "Current ICAR notification is authoritative"],
    tags: ["Agriculture", "ICAR", "UG", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "NSP catalogue lists ICAR NTS-UG. Confirm the current ICAR notification, institution and regional eligibility before applying.",
    initials: "ICAR", tone: "sage", rules: [],
    documents: ["Agricultural degree admission proof", "ICAR / institution records", "Academic marksheets", "Domicile if required", "Bank details"]
  },
  {
    id: "icar-pgs", name: "ICAR Post Graduate Scholarship",
    provider: "Indian Council of Agricultural Research", amount: "Check current ICAR guidelines", amountValue: 0,
    deadline: "Check ICAR / NSP notice", category: "Science & research", level: "Agriculture postgraduate",
    region: "All India", description: "Scholarship support for eligible postgraduate agricultural education under ICAR rules.",
    eligibility: ["Eligible postgraduate agriculture programme", "Institution, entrance and academic rules apply", "Current ICAR notification governs selection"],
    tags: ["Agriculture", "ICAR", "PG", "NSP"], source: "https://scholarships.gov.in/All-Scholarships",
    sourceLabel: "National Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "Listed in NSP catalogue. Confirm ICAR programme rules, selection process and current award value.",
    initials: "ICAR", tone: "sage", rules: [],
    documents: ["UG degree / marksheets", "PG admission proof", "ICAR entrance / selection proof if applicable", "Institution verification", "Bank details"]
  },
  {
    id: "azim-premji", name: "Azim Premji Scholarship",
    provider: "Azim Premji Foundation", amount: "See current programme notice", amountValue: 0,
    deadline: "Check official programme notice", category: "Need-based", level: "Undergraduate",
    region: "Eligible states / districts as announced", description: "Education support programme for eligible young women continuing undergraduate education, subject to the current programme's geography and criteria.",
    eligibility: ["Women students and first-year UG conditions may apply", "Geographic eligibility is programme-specific", "Use the latest official application notice"],
    tags: ["Women", "Undergraduate", "Foundation"], source: "https://azimpremjifoundation.org/",
    sourceLabel: "Azim Premji Foundation", lastVerified: "2026-11-07",
    verificationNote: "Programme eligibility and geography vary by cycle. This directory entry is informational; confirm active cycle and eligible states on the official site.",
    initials: "APF", tone: "sage", rules: [],
    documents: ["Class XII marksheet", "UG admission proof", "Residence / state proof", "Income documents if requested", "Bank details"]
  },
  {
    id: "reliance-ug", name: "Reliance Foundation Undergraduate Scholarship",
    provider: "Reliance Foundation", amount: "Up to ₹2 lakh across the degree programme", amountValue: 200000,
    deadline: "2026–27 application cycle: verify status on official portal", category: "Merit-based", level: "First-year undergraduate",
    region: "All India", description: "Merit-cum-means scholarship for eligible first-year undergraduate students across streams.",
    eligibility: ["Resident Indian citizen", "Class XII minimum 60% stated by the current programme", "First-year regular full-time UG in 2026–27", "Household income below ₹15 lakh; aptitude test required"],
    tags: ["Merit-cum-means", "UG", "Private", "All streams"], source: "https://www.scholarships.reliancefoundation.org/UG_Scholarship",
    sourceLabel: "Reliance Foundation official programme", lastVerified: "2026-11-07",
    verificationNote: "The official programme page states up to ₹2 lakh over the degree and eligibility conditions. The application page status can change; check directly before applying.",
    initials: "RF", tone: "gold", rules: [],
    documents: ["Class XII marksheet", "First-year bonafide certificate", "Income proof", "Supporting academic documents", "Aptitude test completion"]
  },
  {
    id: "reliance-pg", name: "Reliance Foundation Postgraduate Scholarship",
    provider: "Reliance Foundation", amount: "Check current programme guidelines", amountValue: 0,
    deadline: "Check official 2026–27 programme notice", category: "Science & research", level: "Postgraduate",
    region: "All India", description: "Scholarship programme for postgraduate students in selected disciplines and areas of study.",
    eligibility: ["Eligible PG programme and discipline required", "Selection includes programme-specific merit and evaluation", "Current notice determines amount and deadlines"],
    tags: ["PG", "STEM", "Research", "Private"], source: "https://scholarships.reliancefoundation.org/",
    sourceLabel: "Reliance Foundation official scholarships", lastVerified: "2026-11-07",
    verificationNote: "Use the current Reliance Foundation postgraduate scholarship programme notice for the exact eligible fields, selection and dates.",
    initials: "RF", tone: "gold", rules: [],
    documents: ["UG marksheets", "PG admission proof", "Statement / application materials as specified", "Identity and income proof if requested"]
  },
  {
    id: "hdfc-ecss", name: "HDFC Bank Parivartan ECSS Scholarship",
    provider: "HDFC Bank", amount: "Check current ECSS cycle guidelines", amountValue: 0,
    deadline: "Check official / programme partner listing", category: "Need-based", level: "School to postgraduate (cycle dependent)",
    region: "All India", description: "Education support for students facing financial or personal hardship under cycle-specific criteria.",
    eligibility: ["Academic performance and financial hardship conditions apply", "Eligible education level varies by programme cycle", "Current application notice controls the benefit and deadline"],
    tags: ["Need-based", "Hardship", "Private"], source: "https://www.hdfcbank.com/",
    sourceLabel: "HDFC Bank official website", lastVerified: "2026-11-07",
    verificationNote: "HDFC ECSS cycles are administered with specific application windows and documents. Confirm the current cycle and official application partner before submitting.",
    initials: "HDFC", tone: "blue", rules: [],
    documents: ["Previous marksheet", "Admission proof", "Income / hardship proof", "Bank details", "Identity documents as requested"]
  },
  {
    id: "kotak-kanya", name: "Kotak Kanya Scholarship",
    provider: "Kotak Education Foundation", amount: "Check current programme guidelines", amountValue: 0,
    deadline: "Check current official programme cycle", category: "Need-based", level: "Undergraduate",
    region: "All India", description: "Support for eligible meritorious girl students pursuing higher education in selected professional courses.",
    eligibility: ["Girl student eligibility", "Class XII merit and household income criteria apply", "Course and institution restrictions are cycle-specific"],
    tags: ["Women", "Merit-cum-means", "Private"], source: "https://www.kotakeducation.org/",
    sourceLabel: "Kotak Education Foundation", lastVerified: "2026-11-07",
    verificationNote: "Check the official Kotak Education Foundation programme notice for current eligibility, award, partner application portal and deadline.",
    initials: "KEF", tone: "rose", rules: [],
    documents: ["Class XII marksheet", "UG admission proof", "Income certificate", "Fee structure", "Bank details"]
  },
  {
    id: "ffe", name: "Foundation for Excellence (FFE) Scholarship",
    provider: "Foundation for Excellence", amount: "See current FFE programme guidelines", amountValue: 0,
    deadline: "Check current FFE application window", category: "Need-based", level: "First-year professional degree",
    region: "All India", description: "Financial assistance for eligible students with financial need pursuing selected professional degree programmes.",
    eligibility: ["Professional course and first-year conditions apply", "Academic merit and family income requirements apply", "Current FFE rules govern selection"],
    tags: ["Engineering", "Medical", "Need-based", "Private"], source: "https://ffe.org/",
    sourceLabel: "Foundation for Excellence", lastVerified: "2026-11-07",
    verificationNote: "Confirm current FFE course coverage, income and application deadlines on the official site. No eligibility match is calculated here.",
    initials: "FFE", tone: "sage", rules: [],
    documents: ["Entrance / admission proof", "Class XII marksheet", "Income proof", "Fee structure", "Bank details"]
  },
  {
    id: "sbi-asha", name: "SBI Foundation Asha Scholarship",
    provider: "SBI Foundation", amount: "Check current programme category and guidelines", amountValue: 0,
    deadline: "Check current SBI Foundation notice", category: "Need-based", level: "School / undergraduate / postgraduate (cycle dependent)",
    region: "India", description: "Education support programme with categories and eligibility that may vary by academic year.",
    eligibility: ["Category, course and income criteria vary by cycle", "Academic merit requirements apply", "Current official programme announcement is authoritative"],
    tags: ["Need-based", "Merit", "Private"], source: "https://www.sbifoundation.in/",
    sourceLabel: "SBI Foundation", lastVerified: "2026-11-07",
    verificationNote: "SBI Asha programme category and eligibility can change by cycle. Confirm the current official application notice and partner portal.",
    initials: "SBI", tone: "blue", rules: [],
    documents: ["Previous marksheet", "Admission proof", "Income certificate", "Fee details", "Bank details"]
  },
  {
    id: "ssp-karnataka", name: "Karnataka State Scholarship Portal (SSP) — Student Schemes Directory",
    provider: "Government of Karnataka", amount: "Varies by department and scheme", amountValue: 0,
    deadline: "Department-specific; check SSP portal", category: "Need-based", level: "Pre-matric / post-matric / higher education",
    region: "Karnataka", description: "State scholarship application and information portal for department-specific Karnataka student schemes.",
    eligibility: ["Domicile and department-specific category rules apply", "Income, course and institution requirements vary", "SSP application and verification rules apply"],
    tags: ["Karnataka", "State government", "SSP", "Post-matric"], source: "https://ssp.postmatric.karnataka.gov.in/homepage.aspx",
    sourceLabel: "Karnataka State Scholarship Portal", lastVerified: "2026-11-07",
    verificationNote: "This is a portal directory record, not one single scholarship. Students must choose their department's active scheme and verify its notice, eligibility and dates.",
    initials: "KAR", tone: "gold", rules: [],
    documents: ["SSP profile / registration requirements", "Caste / category certificate if applicable", "Income certificate", "Admission and fee details", "Aadhaar / bank information as required by SSP"]
  },
  {
    id: "national-overseas-sc", name: "National Overseas Scholarship — SC and Other Eligible Groups",
    provider: "Department of Social Justice & Empowerment", amount: "See current overseas scholarship guidelines", amountValue: 0,
    deadline: "Check official NOS application cycle", category: "Need-based", level: "Master’s / PhD abroad",
    region: "India applicants; overseas study", description: "Government support for eligible candidates from specified groups pursuing higher education abroad.",
    eligibility: ["Eligible social group and course level required", "Admission, income, age and academic rules apply", "Current NOS guidelines control eligibility and award"],
    tags: ["Overseas", "Postgraduate", "PhD", "Government"], source: "https://nosmsje.gov.in/",
    sourceLabel: "National Overseas Scholarship official portal", lastVerified: "2026-11-07",
    verificationNote: "The scheme is highly specific. Check current application round, eligible groups, institution/course rules, and required foreign admission documents on the official portal.",
    initials: "NOS", tone: "blue", rules: [],
    documents: ["Foreign university admission offer", "Academic transcripts", "Income and group certificate", "Passport", "Language / test scores as specified"]
  }
);


// Additional scheme-specific records from the NSP AY 2026–27 listing.
// Source: https://scholarships.gov.in/All-Scholarships (catalogue page reviewed 07 Nov 2026).
// No scheme-specific eligibility matcher is enabled until its complete rules are independently verified.
scholarships.push(
  {
    id:"aicte-pragati-diploma",name:"AICTE Pragati Scholarship — Technical Diploma",
    provider:"All India Council for Technical Education",amount:"See current AICTE scheme specification",amountValue:0,
    deadline:"NSP AY 2026–27 student applications close 30 Nov 2026",category:"Technical education",level:"Technical diploma",
    region:"All India",description:"Scholarship for eligible girl students enrolled in approved technical diploma programmes.",
    eligibility:["Girl-student eligibility applies","AICTE-approved diploma programme and institution","Income, intake and renewal rules are scheme-specific"],
    tags:["AICTE","Diploma","Women in STEM","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists the diploma scheme for AY 2026–27 with student applications through 30 November 2026. Confirm the current AICTE specification and institution approval before applying.",
    initials:"AICTE",tone:"blue",rules:[],documents:["Admission proof","Institution verification","Academic records","Income proof if required","Bank details"]
  },
  {
    id:"aicte-saksham-diploma",name:"AICTE Saksham Scholarship — Technical Diploma",
    provider:"All India Council for Technical Education",amount:"See current AICTE scheme specification",amountValue:0,
    deadline:"NSP AY 2026–27 student applications close 30 Nov 2026",category:"Technical education",level:"Technical diploma",
    region:"All India",description:"Scholarship support for eligible specially-abled students pursuing approved technical diploma programmes.",
    eligibility:["Benchmark disability documentation and threshold apply","AICTE-approved diploma programme and institution","Income, admission and renewal rules apply"],
    tags:["AICTE","Diploma","Disability","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists the diploma scheme for AY 2026–27 with student applications through 30 November 2026. Verify disability documentation, approved institution and current rules from the official specification.",
    initials:"AICTE",tone:"teal",rules:[],documents:["Disability certificate / UDID if specified","Admission proof","Institution verification","Academic records","Bank details"]
  },
  {
    id:"pm-usp-sss-jkl",name:"PM-USP Special Scholarship Scheme for Jammu, Kashmir & Ladakh",
    provider:"Ministry of Education / AICTE",amount:"See current scheme specification",amountValue:0,
    deadline:"NSP AY 2026–27 student applications close 30 Nov 2026",category:"Merit-based",level:"Undergraduate",
    region:"Jammu, Kashmir and Ladakh",description:"Higher-education scholarship for eligible students domiciled in Jammu, Kashmir or Ladakh under the PM-USP special scheme.",
    eligibility:["Domicile and Class XII conditions apply","Eligible course and institution restrictions apply","Income, merit and seat allocation rules apply"],
    tags:["Jammu & Kashmir","Ladakh","PM-USP","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists the AY 2026–27 scheme with applications through 30 November 2026. Verify current domicile, course, institution and admission rules from the official scheme specification.",
    initials:"PM",tone:"gold",rules:[],documents:["Domicile certificate","Class XII marksheet","Admission proof","Income proof","Institution verification"]
  },
  {
    id:"pmss-railways",name:"Prime Minister’s Scholarship Scheme — Ministry of Railways",
    provider:"Ministry of Railways / Railway Board",amount:"See current scheme guidelines",amountValue:0,
    deadline:"NSP AY 2026–27 student applications close 30 Nov 2026",category:"Merit-based",level:"Professional / higher education",
    region:"All India",description:"Scholarship for eligible wards of specified Railway Protection Force / Railway Protection Special Force personnel under current rules.",
    eligibility:["Eligible parent / service status required","Course and academic conditions apply","Fresh and renewal criteria differ"],
    tags:["Railways","Welfare","Merit","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists the Railway Board scheme for AY 2026–27. Verify eligible personnel categories, course rules and required service documents from the current scheme notice.",
    initials:"RB",tone:"blue",rules:[],documents:["Railway service proof","Relationship proof","Admission proof","Academic marksheet","Bank details"]
  },
  {
    id:"pm-yasasvi-school",name:"PM YASASVI — Top Class Education in Schools (OBC, EBC & DNT)",
    provider:"Department of Social Justice & Empowerment",amount:"See current school scheme guidelines",amountValue:0,
    deadline:"NSP AY 2026–27 student applications listed through 15 Nov 2026",category:"Need-based",level:"School education",
    region:"India; state participation / school coverage varies",description:"Support for eligible OBC, EBC and DNT students studying in schools covered by the scheme.",
    eligibility:["OBC, EBC or DNT category criteria apply","School must be covered by the scheme","Income, class and state-level rules apply"],
    tags:["OBC","EBC","DNT","School","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists applications through 15 November 2026. The portal announcement notes that Rajasthan, Keralam and Karnataka applicants were asked to wait for state-specific opening updates. Check the live state/school status before applying.",
    initials:"YAS",tone:"gold",rules:[],documents:["Category certificate","School enrollment proof","Income certificate","Academic records","Bank details"]
  },
  {
    id:"prematric-disability",name:"Pre-Matric Scholarship for Students with Disabilities",
    provider:"Department of Empowerment of Persons with Disabilities",amount:"See current scheme guidelines",amountValue:0,
    deadline:"NSP listing: student applications closed 31 Oct 2026",category:"Need-based",level:"Pre-matric school education",
    region:"All India",description:"Support for eligible students with disabilities studying before matriculation.",
    eligibility:["Disability certification and threshold apply","Class / school and income conditions apply","Current scheme notice governs award and renewal"],
    tags:["Disability","School","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"The NSP AY 2026–27 listing showed the student application closing date as 31 October 2026. This record is retained for discovery and reference; it is marked closed as of the review date. Check for any official extension or next cycle.",
    initials:"DEP",tone:"teal",rules:[],documents:["Disability certificate / UDID if specified","School enrollment proof","Income proof","Academic records","Bank details"]
  },
  {
    id:"beedi-workers-prematric",name:"Education Assistance for Beedi / Cine / IOMC / LSDM Workers’ Wards — Pre-Matric",
    provider:"Ministry of Labour & Employment",amount:"See current ministry scheme guidelines",amountValue:0,
    deadline:"NSP listing: student applications closed 31 Oct 2026",category:"Need-based",level:"Pre-matric school education",
    region:"All India",description:"Education assistance for eligible children of workers in specified beedi, cine, IOMC and LSDM sectors.",
    eligibility:["Parent / guardian must meet covered-worker criteria","School class, income and academic requirements apply","Current ministry rules define eligible sectors and documentation"],
    tags:["Workers’ families","School","Labour","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP showed student applications closed 31 October 2026 for AY 2026–27. This record is retained as a directory entry; confirm any extension or next cycle from the official notice.",
    initials:"MoL",tone:"blue",rules:[],documents:["Worker identity / employment proof","School enrollment proof","Income proof if required","Academic records","Bank details"]
  },
  {
    id:"beedi-workers-postmatric",name:"Education Assistance for Beedi / Cine / IOMC / LSDM Workers’ Wards — Post-Matric",
    provider:"Ministry of Labour & Employment",amount:"See current ministry scheme guidelines",amountValue:0,
    deadline:"NSP listing: student applications closed 31 Oct 2026",category:"Need-based",level:"Post-matric / higher education",
    region:"All India",description:"Education assistance for eligible post-matric students from covered worker families.",
    eligibility:["Parent / guardian must meet covered-worker criteria","Post-matric course and institution rules apply","Income and academic conditions are scheme-specific"],
    tags:["Workers’ families","Post-matric","Labour","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP showed student applications closed 31 October 2026 for AY 2026–27. Check for official extensions and the next application cycle.",
    initials:"MoL",tone:"blue",rules:[],documents:["Worker identity / employment proof","Admission proof","Income proof if required","Academic records","Bank details"]
  },
  {
    id:"national-renewable-energy-fellowship",name:"National Renewable Energy Fellowship Scheme",
    provider:"Ministry of New and Renewable Energy",amount:"See current fellowship guidelines",amountValue:0,
    deadline:"NSP AY 2026–27 student applications close 30 Nov 2026",category:"Science & research",level:"Higher education / research",
    region:"All India",description:"Fellowship support associated with renewable-energy education and research under the ministry’s scheme.",
    eligibility:["Eligible programme / research field required","Institution and academic criteria apply","Current fellowship specification controls selection and award"],
    tags:["Renewable energy","Research","Fellowship","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists this fellowship in AY 2026–27 with student applications through 30 November 2026. Confirm exact programme scope and current rules from the official specification.",
    initials:"MNRE",tone:"sage",rules:[],documents:["Research / course admission proof","Academic transcripts","Institution verification","Statement or research proposal if required"]
  },
  {
    id:"isi-stipend",name:"Stipend Scheme for UG & PG Studies at Indian Statistical Institute, Kolkata",
    provider:"Ministry of Statistics and Programme Implementation / Indian Statistical Institute",amount:"See current ISI stipend policy",amountValue:0,
    deadline:"NSP AY 2026–27 student applications close 30 Nov 2026",category:"Science & research",level:"Undergraduate / postgraduate",
    region:"Indian Statistical Institute, Kolkata (eligible programmes)",description:"Stipend support for students in covered undergraduate and postgraduate programmes at ISI Kolkata.",
    eligibility:["Admission to a covered ISI programme required","Programme and academic continuation rules apply","Current ISI stipend policy is authoritative"],
    tags:["ISI","Statistics","Mathematics","Research","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists this stipend scheme for AY 2026–27 with applications through 30 November 2026. Confirm covered programme, stipend amount and continuation rules with ISI.",
    initials:"ISI",tone:"blue",rules:[],documents:["ISI admission proof","Academic records","Programme enrollment proof","Bank details"]
  },
  {
    id:"icar-nts-pg",name:"ICAR National Talent Scholarship — Postgraduate",
    provider:"Indian Council of Agricultural Research",amount:"See current ICAR guidelines",amountValue:0,
    deadline:"NSP AY 2026–27 student applications close 30 Nov 2026",category:"Science & research",level:"Agriculture postgraduate",
    region:"All India (ICAR programme / region conditions)",description:"ICAR postgraduate talent scholarship for eligible students in covered agricultural programmes.",
    eligibility:["Eligible PG agriculture programme and ICAR institution required","Academic, admission and region rules apply","Current ICAR notification controls"],
    tags:["ICAR","Agriculture","PG","Research","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists ICAR NTS-PG in AY 2026–27 with applications through 30 November 2026. Confirm the current ICAR notification and institution/course eligibility.",
    initials:"ICAR",tone:"sage",rules:[],documents:["UG degree / marksheets","PG admission proof","ICAR selection / institution proof","Bank details"]
  },
  {
    id:"icar-jrf-srf",name:"ICAR Junior & Senior Research Fellowships (JRF / SRF)",
    provider:"Indian Council of Agricultural Research",amount:"See current ICAR fellowship notification",amountValue:0,
    deadline:"NSP AY 2026–27 student applications close 30 Nov 2026",category:"Science & research",level:"Research fellowship",
    region:"All India",description:"ICAR fellowship support for eligible research candidates under the current JRF / SRF scheme rules.",
    eligibility:["Research programme / examination eligibility applies","Academic and institutional conditions apply","Current ICAR fellowship notice controls award and renewal"],
    tags:["ICAR","JRF","SRF","Research","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists ICAR JRF/SRF in AY 2026–27 with applications through 30 November 2026. Confirm fellowship eligibility, selection process, award and continuation rules from ICAR.",
    initials:"ICAR",tone:"sage",rules:[],documents:["Academic transcripts","Research admission / selection proof","Institution verification","Bank details"]
  },
  {
    id:"free-coaching-sc-obc",name:"Free Coaching Scheme for SC / OBC / PM CARES Children",
    provider:"Department of Social Justice & Empowerment",amount:"Coaching support; check current scheme guidelines",amountValue:0,
    deadline:"NSP AY 2026–27 student applications close 30 Nov 2026",category:"Need-based",level:"Competitive exam preparation",
    region:"All India",description:"Support for eligible students in covered groups preparing for specified competitive examinations.",
    eligibility:["SC / OBC / PM CARES beneficiary category rules apply","Covered competitive exam and coaching criteria apply","Current scheme and provider rules define selection"],
    tags:["SC","OBC","PM CARES","Coaching","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP lists this welfare scheme in AY 2026–27 with applications through 30 November 2026. Verify covered exams, group eligibility and coaching provider conditions from the current notice.",
    initials:"SJ",tone:"gold",rules:[],documents:["Category / beneficiary proof","Academic records","Exam preparation / enrollment details","Income proof if required"]
  },
  {
    id:"nmmss",name:"National Means-cum-Merit Scholarship Scheme (NMMSS)",
    provider:"Department of School Education & Literacy · Ministry of Education",amount:"₹12,000 per year (official scheme)",amountValue:12000,
    deadline:"NSP AY 2026–27 listing: student applications through 15 Nov 2026; verify portal status",category:"Merit-based",level:"Class IX–XII",
    region:"India; state/UT selection and school rules apply",description:"Scholarship to support meritorious students from economically weaker sections and help reduce school dropout after Class VIII.",
    eligibility:["Class VIII selection test and state/UT merit selection required","Parental income ceiling and school type rules apply","Continuation through Classes IX–XII depends on academic requirements"],
    tags:["School","Merit","Ministry of Education","NSP"],source:"https://scholarships.gov.in/All-Scholarships",sourceLabel:"National Scholarship Portal — AY 2026–27",
    lastVerified:"2026-11-07",verificationNote:"NSP scheme listing shows applications through 15 November 2026; PIB notices and state timelines can differ. Confirm the student deadline and verification timeline with NSP and the State NMMSS authority. Not for college-level study.",
    initials:"MoE",tone:"blue",rules:[],documents:["Class VIII marksheet / selection proof","School enrollment certificate","Income certificate","State selection / verification records","Bank details"]
  }
);

// Additional central and UGC programmes surfaced from official ministry/UGC sources.
// Eligibility matching stays disabled until the current rules and exceptions are reviewed.
scholarships.push(
  {
    id:"postmatric-sc",name:"Post-Matric Scholarship for SC Students",
    provider:"Department of Social Justice & Empowerment",amount:"See current central / state scheme guidelines",amountValue:0,
    deadline:"Check NSP and your state scholarship portal",category:"Need-based",level:"Post-matric / higher education",
    region:"All India; implementation and portal can be state-specific",description:"Financial assistance for eligible Scheduled Caste students pursuing education after matriculation.",
    eligibility:["SC certificate and applicable income criteria","Course and institution rules apply","Fresh / renewal and state implementation conditions vary"],
    tags:["SC","Post-matric","Government","NSP","State portal"],source:"https://socialjustice.gov.in/schemes",sourceLabel:"Ministry of Social Justice & Empowerment",
    lastVerified:"2026-11-07",verificationNote:"The Ministry lists Post-Matric Scholarship for SC students as an educational scheme. Check the current state/central guidelines and application route; amounts and deadlines are not assumed here.",
    initials:"SJ",tone:"gold",rules:[],documents:["SC certificate","Income certificate","Admission / bonafide proof","Previous marksheets","Fee structure","Bank details"]
  },
  {
    id:"prematric-sc",name:"Pre-Matric Scholarship Scheme for SC Students & Others",
    provider:"Department of Social Justice & Empowerment",amount:"See current scheme guidelines",amountValue:0,
    deadline:"Check NSP / state welfare portal",category:"Need-based",level:"School education",
    region:"India; scheme route and class coverage vary",description:"School-level education support under current pre-matric welfare scholarship rules.",
    eligibility:["SC / scheme-specified beneficiary category","School class and institution rules apply","Income and state implementation conditions apply"],
    tags:["SC","School","Pre-matric","Government"],source:"https://socialjustice.gov.in/schemes",sourceLabel:"Ministry of Social Justice & Empowerment",
    lastVerified:"2026-11-07",verificationNote:"Listed among Ministry educational schemes. Confirm the current class range, eligibility and application portal for your state before relying on this entry.",
    initials:"SJ",tone:"gold",rules:[],documents:["Category certificate","School enrollment proof","Income certificate if required","Academic records","Bank details"]
  },
  {
    id:"prematric-obc",name:"Pre-Matric Scholarship for OBC Students",
    provider:"Department of Social Justice & Empowerment / State Welfare Departments",amount:"See current scheme guidelines",amountValue:0,
    deadline:"Check NSP / state welfare portal",category:"Need-based",level:"School education",
    region:"India; implementation varies by state",description:"Pre-matric education assistance for eligible OBC students under current government scheme rules.",
    eligibility:["OBC certificate and applicable income rules","Class and school eligibility vary by scheme","State implementation and application route may differ"],
    tags:["OBC","School","Pre-matric","Government"],source:"https://socialjustice.gov.in/schemes",sourceLabel:"Ministry of Social Justice & Empowerment",
    lastVerified:"2026-11-07",verificationNote:"The Ministry lists pre-matric OBC scholarship schemes. Check the current central/state guideline, eligible class and portal; this directory record does not imply that every state currently opens the same scheme.",
    initials:"BC",tone:"blue",rules:[],documents:["OBC certificate","School enrollment proof","Income certificate","Academic records","Bank details"]
  },
  {
    id:"national-fellowship-sc",name:"National Fellowship for Scheduled Caste Students (NFSC)",
    provider:"Department of Social Justice & Empowerment",amount:"Fellowship; check current NFSC guidelines",amountValue:0,
    deadline:"Check official fellowship notification",category:"Science & research",level:"PhD / research",
    region:"All India",description:"Fellowship support for eligible SC candidates pursuing research leading to M.Phil./Ph.D. or covered research programmes under current rules.",
    eligibility:["SC category and research admission / selection requirements","UGC / university and fellowship rules apply","Current call and award conditions govern eligibility"],
    tags:["SC","Research","PhD","Fellowship"],source:"https://nsfdc.nic.in/nfsc",sourceLabel:"National Fellowship for SC official information",
    lastVerified:"2026-11-07",verificationNote:"The Ministry lists the National Fellowship for Scheduled Caste Students. Verify the current application/selection route, fellowship conditions and research eligibility at the official source.",
    initials:"NFSC",tone:"blue",rules:[],documents:["SC certificate","Research admission / enrollment proof","Academic transcripts","Research proposal if required","Bank details"]
  },
  {
    id:"national-fellowship-obc",name:"National Fellowship for OBC Students (NF-OBC)",
    provider:"National Backward Classes Finance & Development Corporation / Ministry of Social Justice & Empowerment",amount:"Fellowship; check current NF-OBC guidelines",amountValue:0,
    deadline:"Check official fellowship notification",category:"Science & research",level:"PhD / research",
    region:"All India",description:"Research fellowship support for eligible OBC candidates under the current National Fellowship for OBC students scheme.",
    eligibility:["OBC category and applicable non-creamy-layer criteria","Research admission and academic conditions apply","Current fellowship notification controls selection and award"],
    tags:["OBC","Research","PhD","Fellowship"],source:"https://nbcfdc.gov.in/NF-OBC",sourceLabel:"National Fellowship for OBC official information",
    lastVerified:"2026-11-07",verificationNote:"The Ministry's scheme list links the National Fellowship for OBC students. Verify the current eligibility, call status and fellowship details at the official scheme page.",
    initials:"NFO",tone:"blue",rules:[],documents:["OBC-NCL certificate as required","Research admission proof","Academic transcripts","Research proposal if required","Bank details"]
  },
  {
    id:"pg-indira-single-girl",name:"P.G. Indira Gandhi Scholarship for Single Girl Child",
    provider:"University Grants Commission (UGC)",amount:"₹36,200 per year (UGC scheme page)",amountValue:36200,
    deadline:"Check NSP for the current application cycle",category:"Need-based",level:"First-year postgraduate",
    region:"All India",description:"UGC financial assistance for eligible single girl children pursuing a regular, full-time first-year master's degree.",
    eligibility:["Single girl child under the scheme definition","Regular full-time first-year PG course","Age up to 30 at admission as described by UGC","Recognized university / college; distance mode excluded"],
    tags:["UGC","Women","Single girl child","PG","NSP"],source:"https://www.ugc.gov.in/Scholarships/stu_Scholarship4",sourceLabel:"UGC — P.G. Indira Gandhi Scholarship",
    lastVerified:"2026-11-07",verificationNote:"UGC's scheme page states ₹36,200 per annum, approximately 3,000 slots, two-year tenure and eligibility for single girl child students up to age 30 entering regular first-year PG. Confirm the current call and application route.",
    initials:"UGC",tone:"gold",rules:[],documents:["PG admission proof","Single girl child declaration / documents required by UGC","Date-of-birth proof","Academic records","Bank details"]
  },
  {
    id:"pg-university-rank",name:"UGC P.G. Scholarship for University Rank Holders",
    provider:"University Grants Commission",amount:"Check current UGC guidelines",amountValue:0,
    deadline:"Check NSP for current cycle",category:"Merit-based",level:"Postgraduate",
    region:"All India",description:"Postgraduate scholarship for eligible undergraduate university rank holders under UGC scheme rules.",
    eligibility:["First / second rank criteria under current scheme","Eligible undergraduate programme and PG admission conditions","Age, institution and course restrictions apply"],
    tags:["UGC","Merit","PG","Rank holder"],source:"https://www.ugc.gov.in/Home/student_Corner",sourceLabel:"UGC Student Corner",
    lastVerified:"2026-11-07",verificationNote:"UGC and DBT scheme listings include the PG scholarship for university rank holders. Verify the current rank, course, institution and age criteria in the scheme notice.",
    initials:"UGC",tone:"gold",rules:[],documents:["UG degree / rank certificate","PG admission proof","Institution verification","Date-of-birth proof","Bank details"]
  },
  {
    id:"pg-sc-st-professional",name:"UGC P.G. Scholarship for SC/ST Students in Professional Courses",
    provider:"University Grants Commission",amount:"Check current UGC scheme guidelines",amountValue:0,
    deadline:"Check NSP for current cycle",category:"Need-based",level:"Postgraduate professional courses",
    region:"All India",description:"Scholarship support for eligible SC/ST students pursuing specified postgraduate professional courses.",
    eligibility:["SC/ST category","Eligible PG professional course and institution","Current UGC course and selection conditions apply"],
    tags:["UGC","SC","ST","Professional course","PG"],source:"https://www.ugc.gov.in/Home/student_Corner",sourceLabel:"UGC Student Corner / DBT scheme listing",
    lastVerified:"2026-11-07",verificationNote:"UGC/DBT listings include a PG scholarship for SC/ST candidates pursuing professional courses. Verify current programme coverage, award and application dates on the official scheme page.",
    initials:"UGC",tone:"blue",rules:[],documents:["SC/ST certificate","PG admission proof","Academic transcripts","Institution verification","Bank details"]
  },
  {
    id:"aicte-gate-pg",name:"AICTE PG Scholarship for GATE / GPAT Qualified Students",
    provider:"All India Council for Technical Education",amount:"Check current AICTE PG scholarship guidelines",amountValue:0,
    deadline:"Check AICTE / institute notice for current cycle",category:"Technical education",level:"M.E. / M.Tech. / M.Pharm",
    region:"All India; AICTE-approved institutions and programmes",description:"Postgraduate scholarship for eligible GATE/GPAT-qualified students admitted to covered full-time technical programmes.",
    eligibility:["Valid GATE / GPAT qualification as required","Eligible full-time postgraduate programme","AICTE-approved institution and course","Current AICTE rules and institute verification apply"],
    tags:["AICTE","GATE","GPAT","PG","Technical education"],source:"https://www.aicte-india.org/",sourceLabel:"AICTE official website",
    lastVerified:"2026-11-07",verificationNote:"The DBT central scheme catalogue includes the AICTE PG scholarship for GATE/GPAT-qualified students. Confirm current eligibility, stipend and institute process with AICTE and your institution.",
    initials:"AICTE",tone:"blue",rules:[],documents:["GATE / GPAT scorecard","PG admission proof","Institution verification","Academic records","Bank details"]
  }
);

// State-level programme entries. These records point to official state portals;
// details are deliberately not auto-matched until scheme-specific rules are reviewed.
scholarships.push(
  {
    id:"karnataka-vidyasiri",name:"Karnataka Vidyasiri — Food & Accommodation Scheme",
    provider:"Karnataka Backward Classes Welfare Department",amount:"Check current SSP / BCWD notification",amountValue:0,
    deadline:"Check current Karnataka SSP notice",category:"Need-based",level:"Post-matric / higher education",
    region:"Karnataka",description:"Food and accommodation assistance for eligible Karnataka students who meet the current department criteria and do not receive covered hostel facilities.",
    eligibility:["Karnataka domicile and department/category criteria apply","Course, hostel status, distance and income requirements vary","Current BCWD/SSP notice determines eligibility and benefit"],
    tags:["Karnataka","Vidyasiri","BCWD","Hostel support","SSP"],source:"https://bcwd.karnataka.gov.in/new-page/PostMatric%20Scholarship%20Application/en",sourceLabel:"Karnataka Backward Classes Welfare Department",
    lastVerified:"2026-11-07",verificationNote:"Karnataka department and university pages identify Vidyasiri food/accommodation support. Confirm current income/category/hostel rules and application window on the official SSP / BCWD notice.",
    initials:"KAR",tone:"gold",rules:[],documents:["Karnataka domicile / residence proof","Category certificate if required","Income certificate","College enrollment proof","Hostel / distance proof as required"]
  },
  {
    id:"maharashtra-shahu",name:"Maharashtra Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti",
    provider:"Government of Maharashtra — MahaDBT",amount:"Fee support; check current scheme guidelines",amountValue:0,
    deadline:"Check current MahaDBT academic-year notice",category:"Need-based",level:"Higher education / professional courses",
    region:"Maharashtra",description:"Tuition and examination fee support under Maharashtra's Shahu Maharaj fee scholarship scheme for eligible students.",
    eligibility:["Maharashtra domicile and scheme category conditions","Course, institution, income and admission requirements apply","Fresh/renewal and fee limits vary by department"],
    tags:["Maharashtra","MahaDBT","Fee support","EBC"],source:"https://mahadbt.maharashtra.gov.in/",sourceLabel:"MahaDBT — Government of Maharashtra",
    lastVerified:"2026-11-07",verificationNote:"MahaDBT and the Maharashtra Directorate of Higher Education list Shahu Maharaj fee scholarship variants. Check the exact DHE/DTE scheme card and current eligibility before applying.",
    initials:"MH",tone:"gold",rules:[],documents:["Maharashtra domicile proof","Admission and fee receipt","Income / category documents as required","Academic records","Bank details"]
  },
  {
    id:"maharashtra-punjabrao",name:"Maharashtra Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna",
    provider:"Government of Maharashtra — MahaDBT",amount:"Hostel / maintenance allowance; check current guidelines",amountValue:0,
    deadline:"Check current MahaDBT academic-year notice",category:"Need-based",level:"Higher education / professional courses",
    region:"Maharashtra",description:"Hostel and maintenance assistance for eligible students under Maharashtra's Dr. Punjabrao Deshmukh scheme.",
    eligibility:["Maharashtra domicile and eligible course/institution","Hosteller, income and family/landholder conditions may apply","Current MahaDBT rules determine allowance and exclusions"],
    tags:["Maharashtra","MahaDBT","Hostel","Maintenance"],source:"https://mahadbt.maharashtra.gov.in/",sourceLabel:"MahaDBT — Government of Maharashtra",
    lastVerified:"2026-11-07",verificationNote:"The Maharashtra portal lists Dr. Punjabrao Deshmukh hostel maintenance support. Confirm current eligibility, hosteller criteria and benefit caps from the official scheme notice.",
    initials:"MH",tone:"blue",rules:[],documents:["Domicile proof","Admission proof","Hostel certificate / rent documents","Income / eligibility proof","Bank details"]
  },
  {
    id:"maharashtra-eklavya",name:"Maharashtra Eklavya Scholarship",
    provider:"Directorate of Higher Education, Government of Maharashtra",amount:"Check current MahaDBT scheme guidelines",amountValue:0,
    deadline:"Check current MahaDBT academic-year notice",category:"Merit-based",level:"Postgraduate",
    region:"Maharashtra",description:"Merit scholarship for eligible Maharashtra postgraduate students under current Directorate of Higher Education rules.",
    eligibility:["Maharashtra domicile and postgraduate enrollment","Academic merit and course rules apply","Current DHE scheme notice governs selection"],
    tags:["Maharashtra","MahaDBT","Merit","PG"],source:"https://mahadbt.maharashtra.gov.in/",sourceLabel:"MahaDBT — Government of Maharashtra",
    lastVerified:"2026-11-07",verificationNote:"MahaDBT lists Eklavya Scholarship among Directorate of Higher Education schemes. Verify current marks, course, income and application rules on the official scheme page.",
    initials:"MH",tone:"gold",rules:[],documents:["Domicile proof","UG marksheets","PG admission proof","Income proof if required","Bank details"]
  },
  {
    id:"wb-svmcm",name:"West Bengal Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)",
    provider:"Government of West Bengal — Higher Education Department",amount:"See current SVMCM course-wise rate table",amountValue:0,
    deadline:"Check current SVMCM application window",category:"Merit-based",level:"School / undergraduate / postgraduate / research",
    region:"West Bengal",description:"Merit-cum-means scholarship for eligible students in West Bengal across covered education levels.",
    eligibility:["West Bengal domicile and family-income criteria","Minimum marks vary by level/course","Course, institution and renewal rules vary"],
    tags:["West Bengal","SVMCM","Merit-cum-means","State"],source:"https://svmcm.wbhed.gov.in/",sourceLabel:"SVMCM — West Bengal Higher Education",
    lastVerified:"2026-11-07",verificationNote:"SVMCM is the official West Bengal scholarship portal. Check the current cycle's level-specific marks, income ceiling, amount and deadline.",
    initials:"WB",tone:"gold",rules:[],documents:["West Bengal domicile proof","Academic marksheets","Admission proof","Income certificate","Bank details"]
  },
  {
    id:"wb-aikyashree",name:"West Bengal Aikyashree Minority Scholarship",
    provider:"West Bengal Minorities Development & Finance Corporation (WBMDFC)",amount:"Check current scheme and course-wise guidelines",amountValue:0,
    deadline:"Check current Aikyashree application window",category:"Need-based",level:"School / undergraduate / postgraduate",
    region:"West Bengal",description:"Minority student scholarship programmes administered through Aikyashree, including scheme types determined by current eligibility.",
    eligibility:["Eligible notified minority community","Domicile, income, marks and course requirements differ by sub-scheme","Fresh/renewal and portal rules vary"],
    tags:["West Bengal","Minority","Aikyashree","State"],source:"https://wbmdfcscholarship.in/",sourceLabel:"WBMDFC Aikyashree official portal",
    lastVerified:"2026-11-07",verificationNote:"Aikyashree is the official WBMDFC scholarship portal. Confirm the current sub-scheme (pre/post matric, merit-cum-means or other), income, marks and date before applying.",
    initials:"WB",tone:"blue",rules:[],documents:["Minority certificate / self-declaration as required","Domicile proof","Academic records","Income certificate","Bank details"]
  },
  {
    id:"odisha-medhabruti",name:"Odisha e-Medhabruti Merit Scholarship",
    provider:"Government of Odisha — Higher Education Department",amount:"Check current e-Medhabruti course/category rates",amountValue:0,
    deadline:"Check Odisha State Scholarship Portal for current call",category:"Merit-based",level:"Undergraduate / postgraduate / professional courses",
    region:"Odisha",description:"Merit scholarship programme for eligible Odisha students pursuing covered higher education courses.",
    eligibility:["Odisha domicile and course eligibility","Academic merit and institution requirements apply","Current category/course rules and renewal conditions apply"],
    tags:["Odisha","e-Medhabruti","Merit","State"],source:"https://scholarship.odisha.gov.in/",sourceLabel:"Odisha State Scholarship Portal",
    lastVerified:"2026-11-07",verificationNote:"Odisha's official State Scholarship Portal is the source for e-Medhabruti. Verify current academic-year categories, marks, award value and deadline.",
    initials:"OD",tone:"gold",rules:[],documents:["Odisha domicile proof","Academic marksheets","Admission proof","Income proof if required","Bank details"]
  },
  {
    id:"telangana-epass-pms",name:"Telangana ePASS Post-Matric Scholarship / Fee Reimbursement",
    provider:"Government of Telangana — Social Welfare / Welfare Departments",amount:"Fee reimbursement and maintenance support; check current rules",amountValue:0,
    deadline:"Check current Telangana ePASS timeline",category:"Need-based",level:"Post-matric / higher education",
    region:"Telangana",description:"State post-matric scholarship and fee-reimbursement programmes for eligible students through ePASS.",
    eligibility:["Telangana domicile and welfare category criteria","Course, college approval, income and academic rules vary by scheme","Fresh/renewal verification and fee rules apply"],
    tags:["Telangana","ePASS","Post-matric","Fee reimbursement"],source:"https://telanganaepass.cgg.gov.in/",sourceLabel:"Telangana ePASS official portal",
    lastVerified:"2026-11-07",verificationNote:"The official Telangana ePASS portal lists pre/post-matric services, eligible courses and colleges. Check scheme-specific income, category, attendance and deadline details.",
    initials:"TG",tone:"blue",rules:[],documents:["Telangana residence proof","Category / caste certificate if applicable","Income certificate","College admission and fee details","Bank details"]
  },
  {
    id:"up-postmatric",name:"Uttar Pradesh Post-Matric Scholarship and Fee Reimbursement",
    provider:"Government of Uttar Pradesh — Social Welfare / Backward Classes / Minority Departments",amount:"Check current UP scheme and course-wise guidelines",amountValue:0,
    deadline:"Check current UP Scholarship portal timetable",category:"Need-based",level:"Intermediate / undergraduate / postgraduate / professional",
    region:"Uttar Pradesh; outside-state institution rules may apply",description:"Post-matric scholarship and fee reimbursement for eligible students under UP's department-specific schemes.",
    eligibility:["Scheme-specific SC/ST/OBC/minority/general eligibility","Domicile, institution, income and course rules vary","Fresh/renewal and biometric/verification requirements may apply"],
    tags:["Uttar Pradesh","Post-matric","Fee reimbursement","State"],source:"https://scholarship.up.gov.in/",sourceLabel:"UP Scholarship and Fee Reimbursement official portal",
    lastVerified:"2026-11-07",verificationNote:"UP's official portal publishes separate schedules for pre/post-matric, categories and fresh/renewal. Confirm the current academic-year timetable and applicable department notice.",
    initials:"UP",tone:"gold",rules:[],documents:["UP domicile proof where required","Category certificate","Income certificate","Admission and fee details","Academic records","Bank details"]
  },
  {
    id:"bihar-pms",name:"Bihar Post Matric Scholarship (PMS)",
    provider:"Government of Bihar — Welfare Departments",amount:"Check current Bihar PMS scheme guidelines",amountValue:0,
    deadline:"Check Bihar PMS current application window",category:"Need-based",level:"Post-matric / higher education",
    region:"Bihar",description:"Post-matric education assistance for eligible Bihar students under category-specific welfare schemes.",
    eligibility:["Bihar domicile and category criteria","Income, course, institution and fee rules apply","Fresh/renewal and verification conditions vary"],
    tags:["Bihar","PMS","Post-matric","State"],source:"https://pmsonline.bih.nic.in/",sourceLabel:"Bihar Post Matric Scholarship official portal",
    lastVerified:"2026-11-07",verificationNote:"Bihar PMS is the official post-matric application route for covered categories. Confirm the current cycle, eligible courses, income ceiling and documents from the portal.",
    initials:"BR",tone:"blue",rules:[],documents:["Bihar domicile proof","Category certificate","Income certificate","Admission and fee details","Academic marksheets","Bank details"]
  },
  {
    id:"gujarat-mysy",name:"Gujarat Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
    provider:"Government of Gujarat",amount:"Check current MYSY course-specific benefit guidelines",amountValue:0,
    deadline:"Check current MYSY application cycle",category:"Merit-based",level:"Undergraduate / diploma / professional courses",
    region:"Gujarat",description:"Merit-based financial support for eligible Gujarat students pursuing covered higher education courses.",
    eligibility:["Gujarat domicile and qualifying examination criteria","Course, admission, income and merit requirements apply","Current scheme rules and renewal conditions govern"],
    tags:["Gujarat","MYSY","Merit","State"],source:"https://mysy.guj.nic.in/",sourceLabel:"Gujarat MYSY official portal",
    lastVerified:"2026-11-07",verificationNote:"MYSY is the official Gujarat scheme portal. Check current course-specific eligibility, qualifying marks, income, benefit and deadlines.",
    initials:"GJ",tone:"gold",rules:[],documents:["Gujarat domicile proof","Qualifying exam marksheet","Admission proof","Income certificate","Bank details"]
  },
  {
    id:"kerala-egrantz",name:"Kerala e-Grantz Post-Matric Scholarship Support",
    provider:"Government of Kerala — Scheduled Castes / Scheduled Tribes / Backward Classes Development Departments",amount:"Scheme and course-wise aid; check current e-Grantz notice",amountValue:0,
    deadline:"Check current Kerala e-Grantz application status",category:"Need-based",level:"Post-matric / higher education",
    region:"Kerala",description:"Scholarship and education assistance routed through Kerala e-Grantz for eligible students in covered communities.",
    eligibility:["Kerala residence and department/community criteria","Course, institution, income and fee requirements vary","Current department scheme notice governs"],
    tags:["Kerala","e-Grantz","Post-matric","State"],source:"https://egrantz.kerala.gov.in/",sourceLabel:"Kerala e-Grantz official portal",
    lastVerified:"2026-11-07",verificationNote:"e-Grantz is Kerala's official scholarship/education assistance portal. Check current community, course, institution and deadline details with the responsible department.",
    initials:"KL",tone:"blue",rules:[],documents:["Kerala residence proof","Category certificate if required","Income certificate","Admission proof","Academic records","Bank details"]
  }
);


