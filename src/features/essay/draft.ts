export type EssayDraft = { prompt:string; motivation:string; experience:string; impact:string; goals:string; draft:string; limit:number };
export const ESSAY_STORAGE_KEY="grantly:essay-workspace:v1";
export const EMPTY_ESSAY_DRAFT:EssayDraft={prompt:"",motivation:"",experience:"",impact:"",goals:"",draft:"",limit:500};
const text=(value:unknown,fallback:string)=>typeof value==="string"?value.slice(0,20000):fallback;
export function normalizeEssayDraft(value:unknown):EssayDraft {
  if(!value||typeof value!=="object")return EMPTY_ESSAY_DRAFT;
  const input=value as Partial<EssayDraft>;
  const limit=typeof input.limit==="number"&&Number.isFinite(input.limit)?Math.max(1,Math.min(10000,Math.round(input.limit))):500;
  return {prompt:text(input.prompt,""),motivation:text(input.motivation,""),experience:text(input.experience,""),impact:text(input.impact,""),goals:text(input.goals,""),draft:text(input.draft,""),limit};
}
