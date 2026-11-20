"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function CustomCursor(){
 const dot=useRef(null), ring=useRef(null);
 useEffect(()=>{
   if(matchMedia("(pointer: coarse)").matches) return;
   const move=e=>{
     gsap.to(dot.current,{x:e.clientX-4,y:e.clientY-4,duration:.08});
     gsap.to(ring.current,{x:e.clientX-22,y:e.clientY-22,duration:.35,ease:"power3.out"});
   };
   addEventListener("pointermove",move);
   const targets=[...document.querySelectorAll("a,button,.card,.project-panel,.visual-story-card")];
   const enter=()=>gsap.to(ring.current,{scale:1.65,borderColor:"#ff2d7a",duration:.2});
   const leave=()=>gsap.to(ring.current,{scale:1,borderColor:"rgba(255,255,255,.7)",duration:.2});
   targets.forEach(t=>{t.addEventListener("mouseenter",enter);t.addEventListener("mouseleave",leave)});
   return ()=>{removeEventListener("pointermove",move);targets.forEach(t=>{t.removeEventListener("mouseenter",enter);t.removeEventListener("mouseleave",leave)})}
 },[]);
 return <><div ref={dot} className="cursor-dot"/><div ref={ring} className="cursor-ring"/></>;
}
