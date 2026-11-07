import { useEffect, useRef } from "react";
export function useDialogFocus(){
 const ref=useRef<HTMLElement|null>(null);
 useEffect(()=>{
  const node=ref.current;if(!node)return;
  const previous=document.activeElement as HTMLElement|null;
  const getFocusable=()=>Array.from(node.querySelectorAll<HTMLElement>('button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')).filter(el=>!el.hasAttribute("disabled")&&el.offsetParent!==null);
  getFocusable()[0]?.focus();
  const onKey=(event:KeyboardEvent)=>{if(event.key!=="Tab")return;const items=getFocusable();if(!items.length)return;const first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}};
  node.addEventListener("keydown",onKey);return()=>{node.removeEventListener("keydown",onKey);previous?.focus();};
 },[]);
 return ref;
}
