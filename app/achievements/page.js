import { profile } from "../data/profile";
export const metadata = { title: "Achievements", description: "ATN Bangla Debate champion, leadership in PUNAB national debate festival, and professional milestones." };
export default function Page(){return <>
<section className="page-hero"><div className="container"><div className="label">Omit Hassan Akash / Achievements</div><h1>Achievements</h1><p>Professional milestones, leadership and competitive debate achievements that reflect communication, preparation and performance under pressure.</p></div></section>
<section className="section"><div className="container"><figure className="page-photo photo-reveal"><img src="/omit-formal.webp" alt="Omit Hassan Akash at Bangladesh Television" loading="lazy"/></figure><div className="metric-grid">{profile.stats.map(([n,l])=><div className="metric reveal" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
<div className="label" style={{marginTop:90}}>01 / Leadership & Voice</div>
<div className="lead-grid" style={{marginTop:24}}>{profile.leadership.map(([name,role,desc])=><article className="site-card reveal" key={name}><span className="label">{role}</span><h3>{name}</h3><p>{desc}</p></article>)}</div>
<div className="label" style={{marginTop:90}}>02 / Debate</div>
<div className="achievement-list" style={{marginTop:24}}>{profile.achievements.map((a,i)=><div className="achievement-row reveal" key={a}><span>{String(i+1).padStart(2,"0")}</span><h3>{a}</h3></div>)}</div></div></section>
</>}
