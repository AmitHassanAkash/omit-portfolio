"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function CursorLabel(){
  const ref=useRef(null);
  useEffect(()=>{
    if(matchMedia("(pointer: coarse)").matches) return;
    const el=ref.current;
    const move=e=>gsap.to(el,{x:e.clientX+18,y:e.clientY+18,duration:.18,ease:"power3.out"});
    const enter=e=>{const t=e.target.closest("[data-cursor]"); if(!t)return; el.textContent=t.dataset.cursor; gsap.to(el,{scale:1,opacity:1,duration:.18});};
    const leave=e=>{const t=e.target.closest("[data-cursor]"); if(t)gsap.to(el,{scale:.75,opacity:0,duration:.18});};
    addEventListener("pointermove",move,{passive:true}); document.addEventListener("pointerover",enter); document.addEventListener("pointerout",leave);
    return ()=>{removeEventListener("pointermove",move);document.removeEventListener("pointerover",enter);document.removeEventListener("pointerout",leave)};
  },[]);
  return <div ref={ref} className="cursor-label"/>;
}
