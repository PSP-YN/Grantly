import { scholarships } from "../../data";
import type { StudentProfile } from "../../matching";
import { normalizeBudget, type Budget } from "../funding-planner/calculations";
import { normalizeEssayDraft, type EssayDraft } from "../essay/draft";\nimport { normalizeFundingInputs, type FundingInputs } from "../intelligence/analysis";

export type Stage = "Interested"|"Preparing"|"Submitted"|"Under review"|"Awarded";
export type Profile = StudentProfile;
export type AppRecord = {id:string;stage:Stage;updated:string;completedDocuments:string[]};
export type Store = {saved:string[];applications:AppRecord[];profile:Profile};
export const STORE_KEY="grantly:workspace:v1";
const LEGACY_STORE_KEY="fundnavi:workspace:v1";
const stages:Stage[]=["Interested","Preparing","Submitted","Under review","Awarded"];
const scholarshipById=new Map(scholarships.map(item=>[item.id,item]));
function clean(value:string):string{return value.replace(/[<>]/g,"").trim().slice(0,120);}
export const defaultProfile:Profile={course:"",year:"Not specified",state:"",income:"Not specified",category:"Not specified",academicBand:"Not sure",studyMode:"Not specified",otherScholarship:"Not specified",classXiiRegion:"Not specified",applicationRoute:"Not specified"};
export const defaultStore:Store={saved:[],applications:[],profile:defaultProfile};

function readProfile(candidate:unknown):Profile {
  const p=candidate&&typeof candidate==="object"?candidate as Partial<Profile>:{};
  const field=(key:keyof Profile,fallback:string)=>typeof p[key]==="string"?clean(p[key] as string):fallback;
  return {
    course:field("course",defaultProfile.course),year:field("year",defaultProfile.year),
    state:field("state",defaultProfile.state),income:field("income",defaultProfile.income),
    category:field("category",defaultProfile.category),academicBand:field("academicBand",defaultProfile.academicBand),
    studyMode:field("studyMode",defaultProfile.studyMode),otherScholarship:field("otherScholarship",defaultProfile.otherScholarship),
    classXiiRegion:field("classXiiRegion",defaultProfile.classXiiRegion),applicationRoute:field("applicationRoute",defaultProfile.applicationRoute)
  };
}

export function normalizeStore(value:unknown):Store {
  if(!value||typeof value!=="object") return defaultStore;
  const parsed=value as Partial<Store>;
  const saved=Array.isArray(parsed.saved)?[...new Set(parsed.saved.filter((id):id is string=>typeof id==="string"&&scholarshipById.has(id)))]:[];
  const applications=Array.isArray(parsed.applications)?parsed.applications.flatMap(raw=>{
    if(!raw||typeof raw!=="object")return [];
    const item=raw as Partial<AppRecord>;
    if(typeof item.id!=="string"||!scholarshipById.has(item.id)||!stages.includes(item.stage as Stage))return [];
    const allowedDocs=scholarshipById.get(item.id)?.documents??[];
    const completedDocuments=Array.isArray(item.completedDocuments)?[...new Set(item.completedDocuments.filter((doc):doc is string=>typeof doc==="string"&&allowedDocs.includes(doc)))]:[];
    return [{id:item.id,stage:item.stage as Stage,updated:typeof item.updated==="string"?clean(item.updated):"Today",completedDocuments}];
  }):[];
  return {saved,applications,profile:readProfile(parsed.profile)};
}

export type WorkspaceImport={store:Store;fundingPlanner?:Budget;essayWorkspace?:EssayDraft;fundingIntelligence?:FundingInputs};
export function parseWorkspaceExport(raw:string):WorkspaceImport {
  const parsed:unknown=JSON.parse(raw);
  if(!parsed||typeof parsed!=="object")throw new Error("Invalid Grantly workspace file.");
  const record=parsed as {product?:unknown;workspace?:unknown;fundingPlanner?:unknown;essayWorkspace?:unknown;fundingIntelligence?:unknown};
  if(record.product!=="Grantly"||!record.workspace||typeof record.workspace!=="object")throw new Error("This file is not a Grantly workspace export.");
  return {store:normalizeStore(record.workspace),...(Object.prototype.hasOwnProperty.call(record,"fundingPlanner")?{fundingPlanner:normalizeBudget(record.fundingPlanner)}:{}),...(Object.prototype.hasOwnProperty.call(record,"essayWorkspace")?{essayWorkspace:normalizeEssayDraft(record.essayWorkspace)}:{}),...(Object.prototype.hasOwnProperty.call(record,"fundingIntelligence")?{fundingIntelligence:normalizeFundingInputs(record.fundingIntelligence)}:{})};
}

export function loadStore():Store {
  try {
    const raw=localStorage.getItem(STORE_KEY)??localStorage.getItem(LEGACY_STORE_KEY);
    return raw?normalizeStore(JSON.parse(raw)):defaultStore;
  } catch { return defaultStore; }
}
