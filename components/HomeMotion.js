"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeMotion({children}){
 const ref=useRef(null);
 useLayoutEffect(()=>{
   gsap.registerPlugin(ScrollTrigger);
   let onRevealRef=()=>{};
   const ctx=gsap.context(()=>{
     // Hero entrance waits for the cinematic intro (first visit per session)
     let pending=false; try{pending=!sessionStorage.getItem("introSeen")}catch{}
     const heroIn=()=>{
       gsap.fromTo(".hero .eyebrow",{y:22,opacity:0,letterSpacing:".4em"},{y:0,opacity:1,letterSpacing:".18em",duration:.9,ease:"power3.out"});
       gsap.fromTo(".hero-word",{yPercent:120,rotate:4,opacity:0,filter:"blur(12px)"},{yPercent:0,rotate:0,opacity:1,filter:"blur(0px)",stagger:.1,duration:1.1,ease:"power4.out"});
       gsap.fromTo(".hero-hook",{y:24,opacity:0,clipPath:"inset(0 100% 0 0)"},{y:0,opacity:1,clipPath:"inset(0 0% 0 0)",duration:1,ease:"power3.out",delay:.35});
       gsap.fromTo(".hero-copy",{y:35,opacity:0},{y:0,opacity:1,duration:.8,delay:.5,ease:"power3.out"});
     };
     if(pending){gsap.set(".hero-word,.hero-hook,.hero-copy",{opacity:0});onRevealRef=onReveal;window.addEventListener("intro:reveal",onReveal,{once:true});}
     else heroIn();
     function onReveal(){ctx.add(heroIn);}
     // hero-media reveal is handled by GlobalMotion (.photo-reveal)
     gsap.to(".hero-orb",{x:90,y:-60,rotate:180,scale:1.15,duration:7,repeat:-1,yoyo:true,ease:"sine.inOut"});
     gsap.to(".hero-media",{yPercent:12,scale:.94,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
     gsap.to(".marquee-track",{xPercent:-35,ease:"none",scrollTrigger:{trigger:".marquee",start:"top bottom",end:"bottom top",scrub:1.2}});
     // .reveal is handled by GlobalMotion; a second from() here left elements stuck hidden
     gsap.utils.toArray(".card").forEach(card=>{
       card.addEventListener("mousemove",e=>{
         const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
         gsap.to(card,{rotateY:x*6,rotateX:-y*6,transformPerspective:900,duration:.35});
       });
       card.addEventListener("mouseleave",()=>gsap.to(card,{rotateX:0,rotateY:0,duration:.45}));
     });
     const track=document.querySelector(".projects-track");
     if(track){
       const dist=()=>Math.max(0,track.scrollWidth-window.innerWidth);
       gsap.to(track,{x:()=>-dist(),ease:"none",scrollTrigger:{trigger:".projects-pin",pin:true,scrub:1.1,start:"top top",end:()=>"+="+dist(),invalidateOnRefresh:true}});
     }
     gsap.from(".quote",{xPercent:-12,scrollTrigger:{trigger:".quote",start:"top bottom",end:"center center",scrub:1}});
   },ref);
   return ()=>{window.removeEventListener("intro:reveal",onRevealRef);ctx.revert();};
 },[]);
 return <div ref={ref}>{children}</div>
}
