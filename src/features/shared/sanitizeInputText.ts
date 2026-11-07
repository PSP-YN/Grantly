export function sanitizeInputText(value:string,maxLength=120):string{return value.replace(/[<>]/g,"").trim().slice(0,maxLength);}
