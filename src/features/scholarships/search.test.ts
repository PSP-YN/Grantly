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
  expect(filterScholarships({scholarships:list,savedIds:[],applicationIds:[],scope:"Discover",category:"All",query:"ENGINEERING",sort:"name",profile}).map(s=>s.id)).toEqual(["a"]);
 });
 it("restricts saved and application scopes",()=>{
  expect(filterScholarships({scholarships:list,savedIds:["b"],applicationIds:["a"],scope:"Saved",category:"All",query:"",sort:"name",profile}).map(s=>s.id)).toEqual(["b"]);
  expect(filterScholarships({scholarships:list,savedIds:["b"],applicationIds:["a"],scope:"Applications",category:"All",query:"",sort:"name",profile}).map(s=>s.id)).toEqual(["a"]);
 });
 it("sorts numeric award values descending without treating missing values as known",()=>{
  expect(filterScholarships({scholarships:list,savedIds:[],applicationIds:[],scope:"Discover",category:"All",query:"",sort:"amount",profile}).map(s=>s.id)).toEqual(["b","a"]);
 });
});
