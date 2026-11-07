import type { Scholarship } from "./data";

// Reviewed 7 Nov 2026. Every entry links to a primary provider source.
// No profile match is generated until its full rules have been independently reviewed.
export const scholarshipSupplemental: Scholarship[] = [
  {
    id:"ugc-savitri-single-girl-fellowship",name:"UGC Savitribai Jyotirao Phule Fellowship for Single Girl Child",
    provider:"University Grants Commission",amount:"JRF ₹37,000/month for 2 years; SRF ₹42,000/month thereafter (UGC scheme page)",amountValue:0,
    deadline:"Check current UGC fellowship call and award notice",category:"Fellowship",level:"PhD / research",
    region:"All India",description:"Research fellowship supporting eligible single girl children pursuing a PhD at recognized institutions.",
    eligibility:["Single girl child condition applies","Registered PhD at a recognized university / college / institute","Selection, slots, age and other conditions depend on current UGC notice"],
    tags:["UGC","PhD","Research","Single girl child"],source:"https://www.ugc.gov.in/Fellowship/stu_Fellowship3/stu_Fellowship3",sourceLabel:"UGC — Savitribai Jyotirao Phule Fellowship",
    lastVerified:"2026-11-07",verificationNote:"UGC's scheme page describes JRF/SRF support and eligibility. Verify current call, slot availability, application procedure and all criteria before applying.",
    initials:"UGC",tone:"sage",rules:[],documents:["PhD registration / admission proof","Single girl child documentation as specified by UGC","Academic records","Current UGC application documents"]
  },
  {
    id:"ugc-net-jrf",name:"UGC Junior Research Fellowship (NET-JRF)",
    provider:"University Grants Commission / National Testing Agency",amount:"JRF ₹37,000/month for 2 years; SRF ₹42,000/month thereafter (UGC scheme page)",amountValue:0,
    deadline:"Award is linked to NET-JRF result and current UGC award rules",category:"Fellowship",level:"PhD / research",
    region:"All India",description:"Research fellowship for candidates who qualify the relevant UGC-NET JRF / joint test and pursue research within the prescribed period.",
    eligibility:["Qualifying UGC-NET JRF or applicable joint test","Research / PhD registration at an eligible institution within the stipulated period","Current subject, age, award validity and institutional rules apply"],
    tags:["UGC","NET-JRF","PhD","Research"],source:"https://www.ugc.gov.in/Fellowship/stu_Fellowship1",sourceLabel:"UGC — Junior Research Fellowship",
    lastVerified:"2026-11-07",verificationNote:"UGC's fellowship page describes JRF/SRF rates and qualifying test conditions. Award eligibility, validity and joining rules are controlled by the current UGC/NTA notice; this record is not an application.",
    initials:"UGC",tone:"sage",rules:[],documents:["UGC-NET JRF award letter","Research / PhD registration proof","Institution joining and verification documents","Current UGC fellowship paperwork"]
  },
  {
    id:"karnataka-raitha-vidya-nidhi",name:"Karnataka Mukhyamantri Raitha Vidya Nidhi",
    provider:"Government of Karnataka — Department of Agriculture",amount:"Course-dependent annual support; check current SSP guidelines",amountValue:0,
    deadline:"Check current Karnataka SSP / Agriculture Department notice",category:"State scheme",level:"Post-SSLC / higher education",
    region:"Karnataka",description:"Education assistance for eligible children of farmer families and, under current extensions, eligible agricultural labourer families.",
    eligibility:["Karnataka farmer / eligible agricultural labourer family criteria","SSLC completion and recognized post-matric study conditions","FRUITS ID, landholder / family linkage and other rules may apply"],
    tags:["Karnataka","Farmer family","SSP","Agriculture"],source:"https://ssp.postmatric.karnataka.gov.in/homepage.aspx",sourceLabel:"Karnataka State Scholarship Portal",
    lastVerified:"2026-11-07",verificationNote:"Karnataka government district/department sources describe Raitha Vidya Nidhi support for farmers' children. Benefit amounts and eligibility depend on the current SSP/Agriculture notification; confirm FRUITS and family conditions.",
    initials:"KA",tone:"sage",rules:[],documents:["Karnataka domicile / student details","FRUITS ID and farmer-family verification as required","SSLC / qualifying marksheet","Admission proof","Bank details requested by SSP"]
  },
  {
    id:"karnataka-labour-welfare-education",name:"Karnataka Labour Welfare Board Education Assistance",
    provider:"Government of Karnataka — Labour Welfare Board",amount:"Check current board scholarship / education assistance notice",amountValue:0,
    deadline:"Check current Labour Welfare Board application cycle",category:"State scheme",level:"School / post-matric / higher education",
    region:"Karnataka",description:"Education assistance for eligible children of covered workers under the Karnataka Labour Welfare Board.",
    eligibility:["Parent / guardian must fall within covered worker and contribution rules","Student level, marks, income and application dates depend on the current notification","Fresh and renewal rules may differ"],
    tags:["Karnataka","Labour welfare","Worker family"],source:"https://klwb.karnataka.gov.in/",sourceLabel:"Karnataka Labour Welfare Board",
    lastVerified:"2026-11-07",verificationNote:"The Board's official portal is the source for worker coverage, benefit, income/marks criteria and application window. Grantly does not infer eligibility without current scheme criteria.",
    initials:"KL",tone:"sage",rules:[],documents:["Worker / board membership or contribution proof","Student marksheet","Admission proof","Family details and income documents as required","Bank details"]
  },
  {
    id:"karnataka-minority-scholarships",name:"Karnataka Minority Welfare Scholarships (SSP / GOKDOM)",
    provider:"Government of Karnataka — Directorate of Minorities",amount:"Scheme-specific support; verify current notice",amountValue:0,
    deadline:"Check GOKDOM and SSP current application windows",category:"State scheme",level:"Pre-matric / post-matric / professional education",
    region:"Karnataka",description:"A directory entry for Karnataka minority-welfare scholarship routes, including department and SSP programmes.",
    eligibility:["Notified minority-community and Karnataka domicile requirements","Course, marks, income, NSP/SSP registration and institution rules vary by scheme","Separate programme rules and deadlines apply"],
    tags:["Karnataka","Minority welfare","GOKDOM","SSP"],source:"https://gokdom.karnataka.gov.in/",sourceLabel:"Karnataka Directorate of Minorities",
    lastVerified:"2026-11-07",verificationNote:"This is a gateway record, not one universal award. Check GOKDOM and SSP for the specific programme, eligibility, amount, deadline and whether a separate NSP application is required.",
    initials:"GOK",tone:"sage",rules:[],documents:["Karnataka domicile proof","Minority-community documentation as required","Academic marksheets","Income certificate","Admission proof","Bank details"]
  },
  {
    id:"karnataka-construction-worker-scholarship",name:"Karnataka Construction Workers’ Children Education Assistance",
    provider:"Government of Karnataka — Building and Other Construction Workers Welfare Board",amount:"Check current Board notification",amountValue:0,
    deadline:"Check current Karnataka construction workers welfare board call",category:"State scheme",level:"School / higher education",
    region:"Karnataka",description:"Education assistance for eligible children of registered construction workers under the state welfare board.",
    eligibility:["Parent must satisfy registered construction-worker / board beneficiary criteria","Student level, renewal, marks and assistance amount vary by notification","Check the official board for current application route"],
    tags:["Karnataka","Construction worker family","Welfare board"],source:"https://karbwwb.karnataka.gov.in/",sourceLabel:"Karnataka Building and Other Construction Workers Welfare Board",
    lastVerified:"2026-11-07",verificationNote:"A state welfare-board gateway listing. Confirm registration, contribution, student-level and current benefit conditions directly with the board; no eligibility score is generated.",
    initials:"KA",tone:"sage",rules:[],documents:["Worker registration / welfare board beneficiary proof","Student academic records","Admission proof","Family / income documents if required","Bank details"]
  },
  {
    id:"pmcares-children-scholarship",name:"PM CARES for Children — Education Support",
    provider:"Ministry of Women and Child Development — Government of India",amount:"₹20,000/year for eligible school beneficiaries (Classes I–XII; official FAQ)",amountValue:20000,
    deadline:"Check PM CARES for Children portal and current beneficiary instructions",category:"Need-based",level:"School / higher education",
    region:"All India",description:"Education and welfare support within the PM CARES for Children programme for eligible registered beneficiaries.",
    eligibility:["Only children meeting the PM CARES for Children beneficiary definition","Registration / verification and age or education-stage conditions apply","Not a general scholarship open to all students"],
    tags:["PM CARES","Child welfare","Education support"],source:"https://www.spniwcd.wcd.gov.in/pm-cares-for-children-scheme/faqs",sourceLabel:"Ministry of Women & Child Development — PM CARES FAQ",
    lastVerified:"2026-11-07",verificationNote:"The official MWCD FAQ describes ₹20,000/year support (monthly allowance plus academic allowance) for eligible registered PM CARES for Children beneficiaries in Classes I–XII. This is not a general scholarship. Confirm current beneficiary status and process with authorities.",
    initials:"PM",tone:"sage",rules:[],documents:["PM CARES beneficiary registration / confirmation","Current school / college enrollment proof","Documents requested by the official beneficiary process"]
  },
  {
    id:"vidyadhan-sdf",name:"Vidyadhan Scholarship — Sarojini Damodaran Foundation",
    provider:"Sarojini Damodaran Foundation",amount:"State / programme-specific award; check current call",amountValue:0,
    deadline:"Check Vidyadhan state and class-specific application calendar",category:"Private foundation",level:"Class 11 / 12 and selected higher education pathways",
    region:"Selected states and regions across India",description:"Merit and financial-need scholarship programmes for eligible students progressing from school into higher education.",
    eligibility:["Class, state and qualifying marks depend on programme","Financial need and academic performance may be assessed","Application calls are region-specific; not every state is open each cycle"],
    tags:["Vidyadhan","Sarojini Damodaran Foundation","Merit","Need-based"],source:"https://www.vidyadhan.org/",sourceLabel:"Vidyadhan official scholarship portal",
    lastVerified:"2026-11-07",verificationNote:"The foundation publishes separate state/programme calls. Check the official site for current eligible states, qualifying exam, application date and renewal requirements.",
    initials:"VDF",tone:"gold",rules:[],documents:["Qualifying examination marksheet","Income / financial-need proof if requested","Student and parent details","Admission / enrollment proof","Current call-specific documents"]
  },
  {
    id:"sitaram-jindal-scholarship",name:"Sitaram Jindal Foundation Scholarship",
    provider:"Sitaram Jindal Foundation",amount:"Course / category-specific amount; check foundation rules",amountValue:0,
    deadline:"Foundation FAQ states no fixed deadline; verify current application terms",category:"Private foundation",level:"Class 11 / 12 / ITI / diploma / undergraduate / postgraduate",
    region:"All India",description:"Private foundation scholarship for eligible students across several education levels and course types.",
    eligibility:["Course and academic performance conditions vary by category","Age and family-income rules apply","Institution, year of study and repeat-application restrictions apply"],
    tags:["Sitaram Jindal Foundation","Private scholarship","Merit-cum-means"],source:"https://app.sitaramjindalfoundation.org/Student/FAQ",sourceLabel:"Sitaram Jindal Foundation official FAQ",
    lastVerified:"2026-11-07",verificationNote:"The foundation's current FAQ and application terms should be read before applying. Award amounts and category thresholds vary; Grantly does not promise selection.",
    initials:"SJF",tone:"gold",rules:[],documents:["Academic marksheets","Course / admission proof","Income proof as specified","Age and student details","Foundation-specific application documents"]
  },
  {
    id:"northsouth-foundation-scholarship",name:"NorthSouth Foundation India Scholarship",
    provider:"NorthSouth Foundation",amount:"Course-dependent total award; current guideline lists course-wise support",amountValue:0,
    deadline:"AY 2026–27 online registration listed through 31 Oct 2026; check next call / renewal",category:"Private foundation",level:"Engineering / diploma / medicine / selected undergraduate courses",
    region:"Selected chapters across India",description:"Merit and financial-need scholarship for selected undergraduate engineering, medical, diploma and other eligible courses.",
    eligibility:["Course and rank criteria vary by scholarship type","Academic marks and family income ceilings apply","Chapter, college and approved branch rules apply"],
    tags:["NorthSouth Foundation","Merit","Need-based","Engineering","Medical"],source:"https://www.northsouth.org/india-impact/india-scholarships/",sourceLabel:"NorthSouth Foundation official scholarship page",
    lastVerified:"2026-11-07",verificationNote:"Official 2026–27 guidelines list course-specific eligibility and an application deadline of 31 October 2026. Treat this cycle as closed unless the foundation posts an extension; check next call and renewal.",
    initials:"NSF",tone:"gold",rules:[],documents:["Qualifying exam marks and rank proof","Admission proof for approved course / institution","Family income proof","Chapter-specific application and attestation"]
  },
  {
    id:"tata-capital-pankh",name:"Tata Capital Pankh Scholarship",
    provider:"Tata Capital",amount:"Course / programme-specific tuition support; current notice governs",amountValue:0,
    deadline:"Check current Tata Capital Pankh application portal",category:"Private foundation",level:"Senior secondary / diploma / undergraduate / postgraduate",
    region:"All India",description:"Education support for academically strong students from economically challenged backgrounds, with targeted inclusion programmes.",
    eligibility:["Course, marks and family-income criteria vary by programme","Some categories may prioritize women and marginalized groups","Current cycle, exclusions and document requirements must be checked"],
    tags:["Tata Capital","Pankh","Merit-cum-means","Private scholarship"],source:"https://www.tatacapital.com/sustainability/education.html",sourceLabel:"Tata Capital — Education / Pankh",
    lastVerified:"2026-11-07",verificationNote:"Tata Capital describes Pankh as a recurring education-support programme. Confirm the current application cycle, course coverage, income limit and reimbursement terms from the official portal.",
    initials:"TC",tone:"gold",rules:[],documents:["Academic marksheet","Admission and fee proof","Income proof","Student and guardian details","Current programme application documents"]
  },
  {
    id:"ongc-merit-scholarship",name:"ONGC Foundation Scholarship",
    provider:"ONGC Foundation",amount:"Check current ONGC Foundation scholarship notification",amountValue:0,
    deadline:"Check current ONGC scholarship application portal",category:"Private foundation",level:"Undergraduate / professional courses",
    region:"All India",description:"Scholarship opportunities administered by ONGC Foundation for eligible student groups and academic programmes.",
    eligibility:["Category, course, marks and income requirements depend on current scheme notice","Selection and renewal criteria are programme-specific","Do not rely on previous-year eligibility without checking current call"],
    tags:["ONGC Foundation","Merit","Need-based","Professional education"],source:"https://www.ongcscholar.org/",sourceLabel:"ONGC Foundation official scholarship portal",
    lastVerified:"2026-11-07",verificationNote:"The ONGC Foundation application portal is the primary source for current scholarships and eligibility. Confirm current scheme name, open/closed status, benefit and deadlines.",
    initials:"ONGC",tone:"gold",rules:[],documents:["Academic marksheets","Admission proof","Category / income documents as required","Bank details and current ONGC application form"]
  },
  {
    id:"indianoil-scholarship",name:"IndianOil Academic Scholarship",
    provider:"Indian Oil Corporation Limited",amount:"Check current IndianOil scholarship guidelines",amountValue:0,
    deadline:"Check IndianOil scholarship portal for current call",category:"Private foundation",level:"Class 11 / ITI / undergraduate / engineering / medical (scheme dependent)",
    region:"All India",description:"Scholarship programmes administered by IndianOil for eligible students under current academic-year guidelines.",
    eligibility:["Current scheme may define class, course, marks and income limits","Fresh / renewal and category requirements depend on current notification","Do not assume every historic IndianOil scholarship is currently active"],
    tags:["IndianOil","Corporate scholarship","Merit-cum-means"],source:"https://iocl.com/Scholarships",sourceLabel:"IndianOil official scholarship page",
    lastVerified:"2026-11-07",verificationNote:"IndianOil's official scholarship page is the source of truth. Confirm whether a programme is accepting applications and the current criteria before listing it as open.",
    initials:"IO",tone:"gold",rules:[],documents:["Academic marksheets","Admission proof","Income certificate if required","Bank details","Current IndianOil scheme-specific documents"]
  },
  {
    id:"aditya-birla-scholarship",name:"Aditya Birla Scholarships Programme",
    provider:"Aditya Birla Group",amount:"Check current programme award details",amountValue:0,
    deadline:"Institution-nomination / programme cycle; check current official notice",category:"Private foundation",level:"Selected undergraduate / professional programmes",
    region:"Selected institutions across India",description:"Merit-focused scholarship programme for students at a defined set of participating institutions.",
    eligibility:["Institution and course eligibility is restricted to current participating list","Academic performance, selection and renewal conditions apply","Not a general scholarship open to all colleges"],
    tags:["Aditya Birla Group","Merit","Institution-specific"],source:"https://www.adityabirlascholars.net/",sourceLabel:"Aditya Birla Scholars official portal",
    lastVerified:"2026-11-07",verificationNote:"This programme is institution-restricted and may involve nomination. Confirm the participating institution list, nomination process and current cycle; do not treat all Indian students as eligible.",
    initials:"AB",tone:"gold",rules:[],documents:["Enrollment proof at a participating institution","Academic marksheets","Nomination / selection documents","Current programme application requirements"]
  },
  {
    id:"siemens-scholarship-program",name:"Siemens Scholarship Program",
    provider:"Siemens India — Corporate Citizenship",amount:"Tuition reimbursement and educational allowances; check current programme terms",amountValue:0,
    deadline:"Siemens states 2026–27 applications are closed; check next cycle",category:"Private foundation",level:"First-year engineering at eligible government colleges",
    region:"All India — participating government engineering colleges",description:"Four-year support and industry-readiness programme for selected economically disadvantaged engineering students.",
    eligibility:["First-year students at eligible government engineering colleges (IITs excluded per current Siemens programme page)","Specified engineering branches, age, marks and income criteria apply","Selection, renewal and institution requirements apply"],
    tags:["Siemens","Engineering","Girls in STEM","Industry mentoring"],source:"https://www.siemens.com/en-gb/company/sustainability/corporate-citizenship-india/scholarship-program/",sourceLabel:"Siemens Scholarship Program official page",
    lastVerified:"2026-11-07",verificationNote:"The Siemens official page states that 2026–27 applications are closed and describes programme eligibility. Treat as next-cycle preparation only; verify current official terms when applications reopen.",
    initials:"S",tone:"gold",rules:[],documents:["First-year government engineering college enrollment proof","SSC / HSC marksheets","Family income proof","Branch / age documentation","Current Siemens application documents"]
  },

  {
    id:"lic-golden-jubilee-2026",name:"LIC Golden Jubilee Scholarship Scheme 2026",
    provider:"LIC Golden Jubilee Foundation — Life Insurance Corporation of India",
    amount:"₹50,000/year for medicine; ₹40,000/year engineering; ₹20,000/year other eligible UG/diploma/vocational; ₹15,000/year special Class X girl-child category",
    amountValue:50000,
    deadline:"2026 application window closed; check LIC for the next cycle",
    category:"Private foundation",level:"Class XI / Undergraduate / Diploma / ITI",
    region:"All India",description:"Merit and need-based education support for eligible students entering higher education or vocational courses under LIC's 2026 scholarship call.",
    eligibility:["Minimum qualifying marks and first-year admission conditions apply","Family income limit and any permitted relaxation are defined by the current LIC scheme document","General and special girl-child categories have different qualifying levels and courses","The 2026 application window has closed"],
    tags:["LIC","Merit","Need-based","Class 10","Class 12","Undergraduate","Diploma"],
    source:"https://web.licindia.in/en/web/guest/golden-jubilee-foundation",
    sourceLabel:"LIC Golden Jubilee Foundation — official 2026 scheme page",
    lastVerified:"2026-11-07",
    verificationNote:"LIC's official Golden Jubilee Foundation page lists the 2026 scheme and related instructions. The application window is closed as of this review; verify the next cycle, income limit, qualifying year and award details against the current official PDF. No automated eligibility match is provided.",
    initials:"LIC",tone:"gold",rules:[],
    documents:["Class X / XII / diploma qualifying marksheet","Current first-year admission proof","Family income certificate","Course and institution details","Bank and identity documents requested by LIC"]
  },
  {
    id:"national-overseas-st-students",name:"National Overseas Scholarship for ST Students",
    provider:"Ministry of Tribal Affairs — Government of India",
    amount:"Tuition, maintenance, travel and related allowances under current scheme guidelines",
    amountValue:0,
    deadline:"Selection year 2026–27 applications closed; check the next official call",
    category:"Overseas study",level:"Master's / PhD / Postdoctoral study abroad",
    region:"All India — eligible ST and PVTG applicants",
    description:"Central Sector support for selected eligible Scheduled Tribe and Particularly Vulnerable Tribal Group students pursuing postgraduate, doctoral or postdoctoral study abroad.",
    eligibility:["Scheduled Tribe / PVTG category eligibility applies","Family income ceiling, age limits, eligible course and foreign university requirements apply","Selection and admission timelines are defined by the Ministry's current guidelines","Selection year 2026–27 application window has closed"],
    tags:["ST","PVTG","Overseas study","Master's","PhD","Postdoctoral","Government of India"],
    source:"https://overseas.tribal.gov.in/",
    sourceLabel:"Ministry of Tribal Affairs — National Overseas Scholarship portal",
    lastVerified:"2026-11-07",
    verificationNote:"The Ministry portal and scheme page describe 20 annual awards, the ₹6 lakh family income ceiling, age/course rules and overseas study scope. The 2026–27 call closed in July 2026. Confirm the next call, eligibility and approved university list on the official portal; no automated eligibility match is provided.",
    initials:"MoTA",tone:"sage",rules:[],
    documents:["ST / PVTG certificate","Family income certificate","Qualifying academic marksheets","Foreign university admission / offer as required","Passport and current Ministry application documents"]
  },
];
