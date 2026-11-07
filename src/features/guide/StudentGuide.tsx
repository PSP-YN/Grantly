import { AlertTriangle, ArrowRight, BookOpenText, CalendarDays, CheckCircle2, ExternalLink, FileText, GraduationCap, ShieldCheck } from "lucide-react";
import StateScholarshipPortalDirectory from "./StateScholarshipPortalDirectory";

const portals=[
 {name:"National Scholarship Portal (NSP)",description:"Central and participating state schemes; OTR, applications and scheme specifications.",url:"https://scholarships.gov.in/"},
 {name:"NSP — All Scholarships",description:"Current scheme catalogue and application windows.",url:"https://scholarships.gov.in/All-Scholarships"},
 {name:"Karnataka State Scholarship Portal (SSP)",description:"Karnataka department-specific scholarship applications and verification.",url:"https://ssp.postmatric.karnataka.gov.in/homepage.aspx"},
 {name:"AICTE",description:"Technical education scholarship guidelines and institution approval information.",url:"https://www.aicte-india.org/"},
 {name:"University Grants Commission (UGC)",description:"Higher-education scholarship and fellowship information.",url:"https://www.ugc.gov.in/"},
 {name:"National Overseas Scholarship",description:"Official overseas scholarship scheme information and application notices.",url:"https://nosmsje.gov.in/"}
];

const steps=[
 {number:"01",title:"Complete only the profile details you need",text:"Add your course, study year, state and academic details to make the search more relevant. Income and category information are optional. Never enter Aadhaar numbers, bank passwords, OTPs or document scans in Grantly."},
 {number:"02",title:"Find a scheme and verify its source",text:"Read the scholarship's official eligibility, eligible institution list, course restrictions, award amount, renewal rules and application window. A Grantly profile check is a screening aid—not an approval or award decision."},
 {number:"03",title:"Prepare your application documents",text:"Use the tracker checklist as a reminder. Common documents include marksheets, admission/bonafide proof, income or category certificates where applicable, and bank details. The official scheme checklist always takes precedence."},
 {number:"04",title:"Apply on the official provider portal",text:"Grantly does not submit applications or authenticate you on government portals. Open the official source from the scheme details and complete the form yourself. Save the acknowledgement or application ID in your own secure records."},
 {number:"05",title:"Track progress and deadlines",text:"Add the opportunity to My Applications, update the stage and check off preparation items. Export only explicit future dates to your calendar, then verify each date on the provider's portal."}
];

export default function StudentGuide(){
 return <section className="student-guide" aria-labelledby="student-guide-title">
  <div className="guide-hero">
   <div className="guide-hero-icon"><BookOpenText size={24}/></div>
   <div><div className="eyebrow">STUDENT SUCCESS GUIDE</div><h2 id="student-guide-title">A clearer path from discovery to application.</h2><p>Use this practical workflow to find funding, verify requirements and apply safely. Grantly helps you prepare; the official scholarship provider makes every final decision.</p></div>
  </div>
  <div className="guide-steps">{steps.map(step=><article className="guide-step" key={step.number}><span className="guide-step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
  <div className="guide-notice"><ShieldCheck size={20}/><div><strong>NSP application basics</strong><p>The National Scholarship Portal states that One Time Registration (OTR) is required for NSP applications. Its current announcement also describes merit-based and welfare-based scheme application limits subject to each scheme's eligibility. Read the current portal notice before submitting multiple applications.</p><a href="https://scholarships.gov.in/Students" target="_blank" rel="noreferrer">Read the official NSP student instructions <ExternalLink size={13}/></a></div></div>
  <div className="guide-columns">
   <section className="guide-panel"><div className="guide-panel-title"><FileText size={18}/><h3>Before you submit</h3></div><ul>{["Confirm the current academic year and deadline.","Check that your course and institution are eligible.","Check whether fresh or renewal application applies.","Confirm income, category, domicile and academic rules.","Use the exact documents required by the official scheme.","Save the official acknowledgement after submission."].map(x=><li key={x}><CheckCircle2 size={15}/>{x}</li>)}</ul></section>
   <section className="guide-panel guide-safety"><div className="guide-panel-title"><AlertTriangle size={18}/><h3>Protect yourself from scholarship fraud</h3></div><ul>{["No one can guarantee a scholarship award or selection.","Do not share OTPs, passwords, PINs or remote-access codes.","Do not pay an agent to guarantee eligibility or selection.","Never upload identity documents to an unofficial portal.","Verify the website domain and the scheme's official notice."].map(x=><li key={x}><AlertTriangle size={14}/>{x}</li>)}</ul></section>
  </div>
  <StateScholarshipPortalDirectory/>
  <section className="guide-portals"><div className="guide-panel-title"><GraduationCap size={18}/><h3>Official scholarship portals</h3></div><div className="guide-portal-grid">{portals.map(p=><a className="guide-portal" href={p.url} target="_blank" rel="noreferrer" key={p.url}><div><strong>{p.name}</strong><p>{p.description}</p></div><ExternalLink size={15}/></a>)}</div></section>
  <div className="guide-footer-note"><CalendarDays size={17}/><span>Application dates change. A date shown in Grantly is a source snapshot, not live deadline monitoring. Check the official portal before making travel, financial or application decisions.</span><button className="outline-button" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}>Back to top <ArrowRight size={14}/></button></div>
 </section>;
}
