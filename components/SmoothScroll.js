"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll(){
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: .9 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick=(time)=>lenis.raf(time*1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return ()=>{ gsap.ticker.remove(tick); lenis.destroy(); };
  },[]);
  return null;
}
