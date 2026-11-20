"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
const items=[["01","About","/about"],["02","Experience","/experience"],["03","Entrepreneurship","/entrepreneurship"],["04","Capabilities","/services"],["05","Work","/work"],["06","Case Studies","/case-studies"],["07","PandaStation-25","/pandastation-25"],["08","Achievements","/achievements"],["09","Contact","/contact"]];
export default function FullscreenMenu(){
 const [open,setOpen]=useState(false), panel=useRef(null);
 useEffect(()=>{if(!panel.current)return; if(open){document.body.style.overflow="hidden";gsap.set(panel.current,{display:"block"});gsap.fromTo(panel.current,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0% 0% 0% 0%)",duration:.75,ease:"power4.inOut"});gsap.fromTo(".menu-row",{y:60,opacity:0},{y:0,opacity:1,stagger:.055,duration:.7,ease:"power4.out",delay:.22});}else{document.body.style.overflow="";if(getComputedStyle(panel.current).display!=="none")gsap.to(panel.current,{clipPath:"inset(0 0 100% 0)",duration:.55,ease:"power4.inOut",onComplete:()=>gsap.set(panel.current,{display:"none"})});}return()=>{document.body.style.overflow=""}},[open]);
 return <><button className="menu-trigger" onClick={()=>setOpen(v=>!v)} aria-expanded={open}><span>{open?"Close":"Menu"}</span><i className={open?"open":""}/></button><div ref={panel} className="full-menu" style={{display:"none"}}><div className="container full-menu-inner"><div className="full-menu-top"><div className="logo">OMIT<b>.</b></div><span>Navigate / Explore</span></div><div className="full-menu-list">{items.map(([n,label,href])=><Link key={href} href={href} className="menu-row" data-cursor="OPEN" onClick={()=>setOpen(false)}><span>{n}</span><strong>{label}</strong><em>↗</em></Link>)}</div></div></div></>;
}
