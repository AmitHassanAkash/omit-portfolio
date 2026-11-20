"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
const services=[
 {n:"01",title:"Digital Marketing",desc:"Campaign planning, Meta Ads, Google Ads, YouTube Ads, retargeting, conversion tracking and funnel optimization.",visual:"campaign"},
 {n:"02",title:"SEO & Search",desc:"On-page, off-page and technical SEO, Search Console, content optimization and search visibility.",visual:"search"},
 {n:"03",title:"Web Development",desc:"AI-assisted Next.js and Laravel websites for e-commerce, companies and agencies — with local payments like bKash and Nagad.",visual:"code"},
 {n:"04",title:"Software QA",desc:"Manual and automation testing of live websites, bug identification and direct reporting to developers.",visual:"search"},
 {n:"05",title:"Content & Brand",desc:"Content strategy, copywriting, brand messaging, short-form video strategy and storytelling.",visual:"content"},
 {n:"06",title:"CRM & Automation",desc:"Email marketing, lead nurturing, workflow automation and customer-journey thinking.",visual:"flow"},
];
export default function ServiceExplorer(){
 const [active,setActive]=useState(0), panel=useRef(null);
 useEffect(()=>{gsap.fromTo(panel.current,{opacity:0,y:20,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0)",duration:.5,ease:"power3.out"});},[active]);
 const s=services[active];
 return <div className="service-explorer"><div className="service-tabs">{services.map((x,i)=><button key={x.title} onClick={()=>setActive(i)} className={i===active?"active":""}><span>{x.n}</span><strong>{x.title}</strong></button>)}</div>
 <div ref={panel} className={"service-stage visual-"+s.visual} data-cursor="EXPLORE"><div className="service-stage-art"><i/><i/><i/><i/><i/></div><div className="service-stage-copy"><div className="label">{s.n} / Capability</div><h3>{s.title}</h3><p>{s.desc}</p></div></div></div>
}
