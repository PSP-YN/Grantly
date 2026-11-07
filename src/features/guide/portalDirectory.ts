export type ScholarshipPortal = {
  state: string;
  portal: string;
  url: string;
  routeNote: string;
  alternate?: { name: string; url: string }[];
};

// A starting directory for 28 states and 8 union territories. State portals can
// route students to different department sites; always check the scheme notice.
// NSP is a discovery fallback, not a claim that every scheme is hosted there.
export const scholarshipPortals: ScholarshipPortal[] = [
  { state: "Andaman and Nicobar Islands", portal: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check central and UT notices; verify with the relevant department." },
  { state: "Andhra Pradesh", portal: "Jnanabhumi", url: "https://jnanabhumi.ap.gov.in/", routeNote: "State welfare scholarship and fee-reimbursement route; verify current scheme." },
  { state: "Arunachal Pradesh", portal: "NSP / state department notices", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check NSP and the state education / welfare department for current routes." },
  { state: "Assam", portal: "NSP / Assam department notices", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check central schemes and current Assam department notices." },
  { state: "Bihar", portal: "Post Matric Scholarship (PMS)", url: "https://pmsonline.bih.nic.in/", routeNote: "Post-matric welfare schemes; school schemes may use separate portals.", alternate: [{ name: "Medhasoft", url: "https://medhasoft.bih.nic.in/" }] },
  { state: "Chandigarh", portal: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Verify Chandigarh administration and NSP scheme notices." },
  { state: "Chhattisgarh", portal: "Post Matric Scholarship Portal", url: "https://postmatric-scholarship.cg.nic.in/", routeNote: "Check current post-matric application and verification windows." },
  { state: "Dadra and Nagar Haveli and Daman and Diu", portal: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check NSP and UT education / welfare department notices." },
  { state: "Delhi", portal: "Delhi e-District", url: "https://edistrict.delhigovt.nic.in/", routeNote: "Check Delhi department notices and NSP; scheme route varies." },
  { state: "Goa", portal: "Goa Government / NSP", url: "https://www.goa.gov.in/", routeNote: "Check Directorate of Higher Education and welfare department notices.", alternate: [{ name: "National Scholarship Portal", url: "https://scholarships.gov.in/All-Scholarships" }] },
  { state: "Gujarat", portal: "Digital Gujarat", url: "https://www.digitalgujarat.gov.in/", routeNote: "State scholarship and welfare services; confirm scheme-specific requirements." },
  { state: "Haryana", portal: "Har-Chhatravratti", url: "https://harchhatravratti.highereduhry.ac.in/", routeNote: "State higher-education scholarship portal." },
  { state: "Himachal Pradesh", portal: "HP ePASS", url: "https://hpepass.cgg.gov.in/", routeNote: "State scholarship portal; some programmes also use NSP." },
  { state: "Jammu and Kashmir", portal: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check NSP and current J&K department / PM-USP SSS notices." },
  { state: "Jharkhand", portal: "e-Kalyan", url: "https://ekalyan.cgg.gov.in/", routeNote: "State post-matric scholarship route; verify fresh/renewal cycle." },
  { state: "Karnataka", portal: "State Scholarship Portal (SSP)", url: "https://ssp.postmatric.karnataka.gov.in/homepage.aspx", routeNote: "Department-specific pre-matric and post-matric schemes; verify your department and course." },
  { state: "Kerala", portal: "e-Grantz", url: "https://egrantz.kerala.gov.in/", routeNote: "State scholarship support for eligible groups; check department rules." },
  { state: "Ladakh", portal: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check NSP and UT administration scholarship notices." },
  { state: "Lakshadweep", portal: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check NSP and UT education department notices." },
  { state: "Madhya Pradesh", portal: "MP Scholarship / MPTAAS", url: "https://hescholarship.mp.gov.in/", routeNote: "Portal depends on department and category.", alternate: [{ name: "MPTAAS / Tribal Affairs", url: "https://www.tribal.mp.gov.in/MPTAAS" }] },
  { state: "Maharashtra", portal: "MahaDBT", url: "https://mahadbt.maharashtra.gov.in/", routeNote: "Use the current MahaDBT 2.0 route when the portal directs AY 2026–27 applicants there." },
  { state: "Manipur", portal: "NSP / state department notices", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check NSP and the relevant state welfare / tribal department." },
  { state: "Meghalaya", portal: "NSP / state department notices", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check NSP and current Meghalaya department notices." },
  { state: "Mizoram", portal: "Mizoram Scholarship Board", url: "https://scholarships.mizoram.gov.in/", routeNote: "Check current scheme availability and student eligibility." },
  { state: "Nagaland", portal: "Common Scholarship Portal", url: "https://scholarship.nagaland.gov.in/", routeNote: "State scholarship portal; confirm current application notices." },
  { state: "Odisha", portal: "Odisha State Scholarship Portal", url: "https://scholarship.odisha.gov.in/", routeNote: "State welfare, merit and post-matric schemes; check scheme notice." },
  { state: "Puducherry", portal: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check NSP and Puducherry department notices." },
  { state: "Punjab", portal: "Punjab Scholarship Portal", url: "https://scholarships.punjab.gov.in/", routeNote: "State welfare schemes; some programmes also use NSP." },
  { state: "Rajasthan", portal: "Social Justice and Empowerment (SJE)", url: "https://sje.rajasthan.gov.in/", routeNote: "Check current scholarship notices and SSO-linked application routes." },
  { state: "Sikkim", portal: "Social Welfare Scholarship Portal", url: "https://socialwelfarescholarships.sikkim.gov.in/", routeNote: "Check department, school and higher education scholarship notices." },
  { state: "Tamil Nadu", portal: "Adi Dravidar and Tribal Welfare Scholarship Portal", url: "https://tnadtwscholarship.tn.gov.in/", routeNote: "Multiple department routes exist; verify BC/MBC and minority scheme pages.", alternate: [{ name: "Tamil Nadu Adi Dravidar Welfare", url: "https://tnadw.tn.gov.in/scholarship" }] },
  { state: "Telangana", portal: "TG ePASS", url: "https://telanganaepass.cgg.gov.in/", routeNote: "Pre-matric, post-matric and overseas services; confirm current scheme." },
  { state: "Tripura", portal: "BMS Scholarship Portal", url: "https://bms.tripura.gov.in/", routeNote: "Check BMS and NSP; route varies by scheme." },
  { state: "Uttar Pradesh", portal: "UP Scholarship and Fee Reimbursement", url: "https://scholarship.up.gov.in/", routeNote: "Pre-matric and post-matric schemes; deadlines differ by category and fresh/renewal." },
  { state: "Uttarakhand", portal: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in/All-Scholarships", routeNote: "Check NSP and Uttarakhand Social Welfare department notices." },
  { state: "West Bengal", portal: "Aikyashree / WBMDFC", url: "https://wbmdfcscholarship.in/", routeNote: "Minority scholarship portal; SC/ST/OBC and merit programmes have separate routes.", alternate: [{ name: "OASIS", url: "https://oasis.gov.in/" }, { name: "Swami Vivekananda Merit-cum-Means", url: "https://svmcm.wbhed.gov.in/" }] }
];
