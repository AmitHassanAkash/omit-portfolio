"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function ScrollProgress(){
  const bar=useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const st=ScrollTrigger.create({start:0,end:"max",onUpdate:self=>gsap.set(bar.current,{scaleX:self.progress})});
    return ()=>st.kill();
  },[]);
  return <div className="scroll-progress"><span ref={bar}/></div>;
}
