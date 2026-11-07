import { scholarships } from "../../data";
import type { StudentProfile } from "../../matching";
export type Stage = "Interested"|"Preparing"|"Submitted"|"Under review"|"Awarded";
export type Profile = StudentProfile;
export type AppRecord = {id:string;stage:Stage;updated:string;completedDocuments:string[]};
export type Store = {saved:string[];applications:AppRecord[];profile:Profile};
export const STORE_KEY="grantly:workspace:v1";
function clean(value:string):string{return value.replace(/[<>]/g,"").trim().slice(0,120);}
export const defaultProfile:Profile={course:"",year:"Not specified",state:"",income:"Not specified",category:"Not specified",academicBand:"Not sure",studyMode:"Not specified",otherScholarship:"Not specified",classXiiRegion:"Not specified",applicationRoute:"Not specified"};
export const defaultStore:Store={saved:[],applications:[],profile:defaultProfile};
export function loadStore():Store{
 try{
  const raw=localStorage.getItem(STORE_KEY)??localStorage.getItem("fundnavi:workspace:v1");if(!raw)return defaultStore;
  const parsed=JSON.parse(raw) as Partial<Store>;
  const ids=new Set(scholarships.map(item=>item.id));
  const stages:Stage[]=["Interested","Preparing","Submitted","Under review","Awarded"];
  const saved=Array.isArray(parsed.saved)?[...new Set(parsed.saved.filter((id):id is string=>typeof id==="string"&&ids.has(id)))]:defaultStore.saved;
  const applications=Array.isArray(parsed.applications)?parsed.applications.filter((item):item is AppRecord=>!!item&&typeof item.id==="string"&&ids.has(item.id)&&stages.includes(item.stage as Stage)).map(item=>({id:item.id,stage:item.stage,updated:"Today",completedDocuments:Array.isArray(item.completedDocuments)?item.completedDocuments.filter((doc):doc is string=>typeof doc==="string"&&(scholarships.find(s=>s.id===item.id)?.documents.includes(doc) ?? false)):[]})):[...defaultStore.applications];
  const candidate=parsed.profile&&typeof parsed.profile==="object"?parsed.profile as Partial<Profile>:{};
  const profile:Profile={course:typeof candidate.course==="string"?clean(candidate.course):defaultProfile.course,year:typeof candidate.year==="string"?clean(candidate.year):defaultProfile.year,state:typeof candidate.state==="string"?clean(candidate.state):defaultProfile.state,income:typeof candidate.income==="string"?clean(candidate.income):defaultProfile.income,category:typeof candidate.category==="string"?clean(candidate.category):defaultProfile.category,academicBand:typeof candidate.academicBand==="string"?clean(candidate.academicBand):defaultProfile.academicBand,studyMode:typeof candidate.studyMode==="string"?clean(candidate.studyMode):defaultProfile.studyMode,otherScholarship:typeof candidate.otherScholarship==="string"?clean(candidate.otherScholarship):defaultProfile.otherScholarship,classXiiRegion:typeof candidate.classXiiRegion==="string"?clean(candidate.classXiiRegion):defaultProfile.classXiiRegion,applicationRoute:typeof candidate.applicationRoute==="string"?clean(candidate.applicationRoute):defaultProfile.applicationRoute};
  return{saved,applications,profile};
 }catch{return defaultStore;}
}
