"use client";
import {useEffect,useRef,useState} from "react";
const files={hover:"/sfx/hover.mp3",click:"/sfx/click.mp3",whoosh:"/sfx/whoosh.mp3",impact:"/sfx/impact.mp3",enable:"/sfx/enable.mp3",ambient:"/sfx/ambient.mp3",move:"/sfx/move.mp3",scroll:"/sfx/scroll.mp3"};

export default function SoundSystem(){
 const [enabled,setEnabled]=useState(false);
 const on=useRef(false),sounds=useRef({});
 const hoverCD=useRef(0),moveCD=useRef(0),scrollCD=useRef(0);
 const last=useRef({x:0,y:0,t:0});

 useEffect(()=>{
   Object.entries(files).forEach(([k,src])=>{
     const a=new Audio(src); a.preload="auto";
     a.volume=k==="ambient"?.28:k==="move"?.30:k==="scroll"?.32:k==="hover"?.48:k==="click"?.46:k==="whoosh"?.62:k==="impact"?.72:.78;
     if(k==="ambient")a.loop=true;
     sounds.current[k]=a;
   });
   return()=>Object.values(sounds.current).forEach(a=>{try{a.pause()}catch{}});
 },[]);

 const play=(k,v,rate=1)=>{
   if(!on.current&&k!=="enable")return;
   const b=sounds.current[k]; if(!b)return;
   try{const a=b.cloneNode();a.volume=Math.max(0,Math.min(1,v??b.volume));a.playbackRate=rate;a.play().catch(()=>{});}catch{}
 };

 const enable=async()=>{
   on.current=true;setEnabled(true);
   const c=sounds.current.enable;
   if(c){try{c.currentTime=0;c.volume=.78;await c.play()}catch{}}
   const amb=sounds.current.ambient;
   if(amb){try{amb.currentTime=0;amb.volume=.26;await amb.play()}catch{}}
 };
 const disable=()=>{on.current=false;setEnabled(false);const a=sounds.current.ambient;if(a){a.pause();a.currentTime=0}};

 useEffect(()=>{
   const over=e=>{
     if(!on.current||!e.target.closest("a,button,[data-cursor]"))return;
     const n=performance.now();if(n-hoverCD.current<110)return;
     hoverCD.current=n;play("hover",.46,1);
   };

   const move=e=>{
     if(!on.current)return;
     const n=performance.now(),p=last.current;
     const dt=Math.max(16,n-p.t),dist=Math.hypot(e.clientX-p.x,e.clientY-p.y),vel=dist/dt;
     last.current={x:e.clientX,y:e.clientY,t:n};
     if(vel<.18||n-moveCD.current<75)return;
     moveCD.current=n;
     play("move",Math.min(.40,.15+vel*.09),Math.min(1.4,.92+vel*.16));
   };

   const wheel=e=>{
     if(!on.current)return;
     const n=performance.now();if(n-scrollCD.current<140)return;
     scrollCD.current=n;
     const q=Math.min(1,Math.abs(e.deltaY)/450);
     play("scroll",.22+q*.16,1+q*.08);
   };

   const click=e=>{
     if(!on.current||e.target.closest(".sound-toggle"))return;
     if(e.target.closest(".morph-project,[data-cursor='VIEW']"))return play("impact",.72,.98);
     if(e.target.closest(".menu-trigger"))return play("whoosh",.62,1);
     if(e.target.closest("a[href^='/']"))return play("whoosh",.56,1.02);
     if(e.target.closest("button,a"))play("click",.44,1);
   };

   document.addEventListener("pointerover",over);
   document.addEventListener("pointermove",move,{passive:true});
   window.addEventListener("wheel",wheel,{passive:true});
   document.addEventListener("click",click,true);
   return()=>{
     document.removeEventListener("pointerover",over);
     document.removeEventListener("pointermove",move);
     window.removeEventListener("wheel",wheel);
     document.removeEventListener("click",click,true);
   };
 },[]);

 return <button className={"sound-toggle "+(enabled?"on":"")} onClick={()=>on.current?disable():enable()} aria-pressed={enabled}>
   <span className="sound-bars"><i/><i/><i/></span><b>{enabled?"SOUND ON":"SOUND OFF"}</b>
 </button>
}
