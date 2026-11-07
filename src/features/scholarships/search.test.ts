import { describe, expect, it } from "vitest";
import { filterScholarships } from "./search";
import type { Scholarship } from "../../data";
import type { StudentProfile } from "../../matching";

const base: Scholarship = {
  id:"a",name:"Alpha",provider:"Provider A",amount:"₹10,000",amountValue:10000,deadline:"2026-12-01",
  category:"Merit-based",level:"UG",region:"India",description:"Computer science scholarship",
  eligibility:["UG student"],tags:["engineering"],source:"https://example.org",sourceLabel:"Source",
  lastVerified:"2026-01-01",verificationNote:"Official source",initials:"A",tone:"blue",rules:[],documents:[]
};
const profile: StudentProfile = {course:"",year:"Not specified",state:"",income:"Not specified",category:"Not specified",academicBand:"Not sure",studyMode:"Not specified",otherScholarship:"Not specified",classXiiRegion:"Not specified",applicationRoute:"Not specified"};
const list = [base,{...base,id:"b",name:"Beta",provider:"Provider B",amountValue:20000,category:"Need-based",description:"Medical education",tags:["health"]}];

describe("filterScholarships",()=>{
 it("searches across description, tag and category",()=>{
  expect(filterScholarships({scholarships:list,savedIds:[],applicationIds:[],scope:"Discover",category:"All",query:"medical",sort:"name",profile}).map(s=>s.id)).toEqual(["b"]);
  expect(filterScholarships({scholarships:list,savedIds:[],applicationIds:[],scope:"Discover",category:"All",query:"ENGINEERING",sort:"name",profile}).map(s=>s.id)).toEqual(["a"]);\n  expect(filterScholarships({scholarships:list,savedIds:[],applicationIds:[],scope:"Discover",category:"All",query:"Alpha engineering",sort:"name",profile}).map(s=>s.id)).toEqual(["a"]);
 });
 it("restricts saved and application scopes",()=>{
  expect(filterScholarships({scholarships:list,savedIds:["b"],applicationIds:["a"],scope:"Saved",category:"All",query:"",sort:"name",profile}).map(s=>s.id)).toEqual(["b"]);
  expect(filterScholarships({scholarships:list,savedIds:["b"],applicationIds:["a"],scope:"Applications",category:"All",query:"",sort:"name",profile}).map(s=>s.id)).toEqual(["a"]);
 });

 it("prioritizes upcoming deadlines and keeps expired dates after them",()=>{
  const today=new Date();const upcoming=new Date(today);upcoming.setUTCDate(upcoming.getUTCDate()+20);const expired=new Date(today);expired.setUTCDate(expired.getUTCDate()-5);
  const iso=(date:Date)=>date.toISOString().slice(0,10);
  const records=[{...base,id:"expired",name:"Expired",deadline:iso(expired)},{...base,id:"upcoming",name:"Upcoming",deadline:iso(upcoming)},{...base,id:"unknown",name:"Unknown",deadline:"Check official portal"}];
  expect(filterScholarships({scholarships:records,savedIds:[],applicationIds:[],scope:"Discover",category:"All",query:"",sort:"deadline",profile}).map(s=>s.id)).toEqual(["upcoming","expired","unknown"]);
 });

 it("sorts numeric award values descending without treating missing values as known",()=>{
  expect(filterScholarships({scholarships:list,savedIds:[],applicationIds:[],scope:"Discover",category:"All",query:"",sort:"amount",profile}).map(s=>s.id)).toEqual(["b","a"]);
 });
});
