"use client";
import { useState } from "react";
const options=["Website / Laravel","AI-assisted Web App","SQA / Testing","SEO","Digital Marketing","E-Commerce","Agency Collaboration"];
export default function ProjectIntent(){
 const [selected,setSelected]=useState("Website / Laravel");
 return <div className="intent-box"><div className="label">What do you want to build?</div><div className="intent-options">{options.map(x=><button key={x} className={selected===x?"active":""} onClick={()=>setSelected(x)}>{x}</button>)}</div><a className="intent-cta" data-cursor="EMAIL" href={`mailto:omithassan.st@gmail.com?subject=${encodeURIComponent(selected+" project inquiry")}`}>Start with {selected} ↗</a></div>
}
