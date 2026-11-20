import HomeMotion from "../components/HomeMotion";
import AnimatedMetric from "../components/AnimatedMetric";
import SiteCard from "../components/SiteCard";
import LazyVideo from "../components/LazyVideo";
import Link from "next/link";
import { profile, websites, pillars, sqa, sqaScope, designWork, workCredit } from "./data/profile";


export default function Home(){
return <HomeMotion>
<section className="hero"><div className="container hero-grid">
<div><div className="eyebrow">{profile.positioning}</div>
<h1 className="hero-title"><span className="hero-word">Omit</span><br/><span className="hero-word"><em>Hassan</em></span> <span className="hero-word">Akash</span></h1>
<p className="hero-hook">{profile.hook}</p>
<p className="hero-copy">{profile.summary}</p></div>
<div className="hero-media has-photo photo-reveal"><img className="real-hero-photo parallax-img" src="/hero-omit.webp" alt="Omit Hassan Akash portrait" fetchPriority="high" width="1500" height="2000"/></div>
</div></section>

<div className="marquee"><div className="marquee-track">{[..."Meta Ads|SEO|Next.js|Laravel|Manual Testing|Automation Testing|AI Workflows|Content|Debate|Meta Ads|SEO|Next.js|Laravel|Manual Testing|Automation Testing|AI Workflows|Content|Debate".split("|")].map((x,i)=><span key={i}>{x}</span>)}</div></div>

<section className="section"><div className="container"><div className="label">01 / What I do</div>
<h2 className="title reveal kinetic scrub-title">Grow. Build. <em>Test.</em></h2>
<div className="pillar-wrap">
<div className="pillar-grid">{pillars.map((p,i)=><article className="pillar reveal" key={p.key}><span className="pillar-n">0{i+1}</span><h3>{p.key}</h3><p>{p.line}</p><div className="pillar-proof">{p.proof.map(([t,h])=><Link key={t} href={h}>{t} ↗</Link>)}</div></article>)}</div>
<Link href="/pandastation-25" className="work-collage photo-reveal" aria-label="See PandaStation-25 design work">{["huukum/01","layer3/03","mubdi/02","utrade/02"].map(x=><img key={x} src={`/work/${x}.webp`} alt="" loading="lazy" width="560" height="560"/>)}<span>{workCredit} ↗</span></Link>
</div>
<div className="metric-grid">{profile.stats.map(([n,l])=><div className="metric reveal" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
</div></section>

<section className="section"><div className="container"><div className="label">02 / Build</div><h2 className="title reveal kinetic scrub-title">Websites I <em>built.</em></h2>
<div className="shot-grid">{websites.map(w=><SiteCard key={w.slug} site={w} tags={w.stack}/>)}</div>
<div className="section-link"><Link href="/work">All work, products & clients ↗</Link></div></div></section>

<section className="section"><div className="container"><div className="label">03 / Test</div><h2 className="title reveal kinetic scrub-title">Sites I <em>tested.</em></h2>
<div className="stack-tags sqa-scope">{sqaScope.map(t=><span key={t}>{t}</span>)}</div>
<div className="shot-grid three">{sqa.map(s=><SiteCard key={s.slug} site={s} label="SQA / Manual & Automation"/>)}</div></div></section>

<section className="section"><div className="container"><div className="label">04 / Now</div><h2 className="title reveal kinetic scrub-title">Where I <em>work</em> now.</h2>
<div className="cards">{profile.current.map(x=><article className="card reveal" key={x.company}><div className="label">{x.period}</div><h3>{x.company}</h3><p className="role-line">{x.role}</p><p>{x.description}</p>{x.url&&<a className="project-link card-link" href={x.url} target="_blank" rel="noopener noreferrer">{x.url.replace(/^https?:\/\/(www\.)?/,"")} ↗</a>}</article>)}</div></div></section>

<section className="impact-section"><div className="container"><div className="label">05 / Grow</div><h2 className="title kinetic scrub-title">Proof over <em>claims.</em></h2><div className="impact-grid"><AnimatedMetric value="5" suffix="+" label="Years in digital marketing"/><AnimatedMetric value="40" suffix="+" label="Clients onboarded in 2024"/><AnimatedMetric value="25" suffix="%" label="Average email open rate at Chaldal campaigns"/><AnimatedMetric value="10" suffix="%" label="Sales uplift during seasonal email campaign periods"/></div></div></section>



<section className="identity-band">
  <div className="identity-media photo-reveal">
    <LazyVideo src="/omit-showreel.mp4"/>
    <div className="identity-shade"/>
    <div className="container identity-copy">
      <div className="label">06 / Moving Portrait</div>
      <h2 className="kinetic scrub-title">One person.<br/><em>No handoffs.</em></h2>
      <p>The ad, the website and the bug report, from the same desk.</p>
    </div>
  </div>
</section>

<section className="projects-pin"><div className="projects-track">
<article className="project-panel showcase-intro"><div><div className="label">07 / Design Work</div><h3>Work that people <em>stop</em> for.</h3><p>Selected social, ad and branding work for clients of my agency.</p><p className="role-line">{workCredit}</p><Link className="project-link" href="/pandastation-25">See all work ↗</Link></div></article>
{designWork.map((w,i)=><article className="project-panel" key={w.slug}><div className="project-visual work-visual"><img className="wv-main" src={`/work/${w.slug}/01.webp`} alt={`${w.name} design`} loading="lazy"/><div className="wv-side">{["02","03"].map(n=><img key={n} src={`/work/${w.slug}/${n}.webp`} alt="" loading="lazy"/>)}</div></div><div><div className="label">{String(i+1).padStart(2,"0")} / {w.type}</div><h3>{w.name}</h3><p>{w.industry}</p><Link className="project-link" href={`/pandastation-25#${w.slug}`}>View work ↗</Link></div></article>)}
</div></section>

<section className="section"><div className="container"><div className="label">08 / Journey</div><h2 className="title reveal kinetic scrub-title">Experience with <em>evidence.</em></h2>
<div className="timeline"><div className="tcol">{profile.experience.slice(0,2).map(x=><div className="titem reveal" key={x.company}><small>{x.period}</small><h4>{x.company}</h4><p className="role-line">{x.role}</p></div>)}</div><div className="tcol">{profile.experience.slice(2).map(x=><div className="titem reveal" key={x.company}><small>{x.period}</small><h4>{x.company}</h4><p className="role-line">{x.role}</p></div>)}</div></div>
<div className="section-link"><Link href="/experience">View full experience ↗</Link></div></div></section>

<section className="quote">From the first <em>ad</em> to the last <em>bug.</em></section>
<section className="contact"><div className="container"><div className="label">09 / Contact</div><h2 className="reveal kinetic scrub-title">Let's build<br/><em>something useful.</em></h2><p className="hero-copy">{profile.email} · {profile.phone}</p><div className="social-links">{profile.links.map(([l,u])=><a key={u} href={u} target="_blank" rel="noopener noreferrer">{l} ↗</a>)}</div></div></section>
</HomeMotion>
}
