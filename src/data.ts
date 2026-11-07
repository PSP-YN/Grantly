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
