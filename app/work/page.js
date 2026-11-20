import SiteCard from "../../components/SiteCard";
import Link from "next/link";
import { websites, sqa, sqaScope, products, marketingWork, designWork, workCredit } from "../data/profile";

export const metadata = { title: "Work — Websites, SQA, Products & Design", description: "Live websites Omit Hassan Akash built, sites he tested (manual and automation), products in development, marketing clients and PandaStation-25 design work." };

export default function Page(){return <>
<section className="page-hero"><div className="container"><div className="label">Omit Hassan Akash / Work</div><h1>Grow. Build.<br/>Test.</h1><p>Live websites I built, sites I tested, products in progress and brands I market. Every link is real.</p></div></section>

<section className="section" id="web"><div className="container"><div className="label">01 / Website Development</div><h2 className="title reveal kinetic scrub-title">Websites I <em>built.</em></h2>
<div className="shot-grid">{websites.map(w=><SiteCard key={w.slug} site={w} tags={w.stack}/>)}</div>
<div className="content-note">Built with AI-assisted development: I plan the site, make the product decisions, review and fix the code, and deploy it.</div></div></section>

<section className="section" id="sqa"><div className="container"><div className="label">02 / Software Quality Assurance</div><h2 className="title reveal kinetic scrub-title">Sites I <em>tested.</em></h2>
<div className="stack-tags sqa-scope">{sqaScope.map(t=><span key={t}>{t}</span>)}</div>
<div className="shot-grid three">{sqa.map(s=><SiteCard key={s.slug} site={s} label="Manual & Automation Testing"/>)}</div>
<div className="content-note">I tested functionality on these sites, found bugs and issues, and reported them directly to the developers for fixing.</div></div></section>

<section className="section" id="products"><div className="container"><div className="label">03 / Products & Apps</div><h2 className="title reveal kinetic scrub-title">Products I'm <em>building.</em></h2>
<div className="site-grid three-col">{products.map(p=><article className="site-card reveal" key={p.name}>
  <div className="site-top"><span className="label">{p.type}</span><span className="status-chip">{p.status}</span></div>
  <h3>{p.name}</h3><p>{p.short}</p>
  {p.stack.length>0&&<div className="stack-tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div>}
</article>)}</div></div></section>

<section className="section" id="marketing"><div className="container"><div className="label">04 / Marketing & Ads</div><h2 className="title reveal kinetic scrub-title">Brands I <em>grow.</em></h2>
<div className="achievement-list">{marketingWork.map(([name,industry,desc],i)=><div className="achievement-row work-row reveal" key={name}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{name}</h3><small>{industry}</small><p>{desc}</p></div></div>)}</div>
<div className="content-note">Marketing work only. These are not websites I developed, unless listed above.</div></div></section>

<section className="section" id="design"><div className="container"><div className="label">05 / Design Work</div><h2 className="title reveal kinetic scrub-title">Designs that <em>stop</em> the scroll.</h2>
<div className="ps-grid">{designWork.map(w=><Link key={w.slug} href={`/pandastation-25#${w.slug}`} data-cursor="OPEN"><img src={`/work/${w.slug}/01.webp`} alt={`${w.name} design`} loading="lazy" width="560" height="560"/></Link>)}</div>
<div className="section-link"><Link href="/pandastation-25">{workCredit} — see all ↗</Link></div></div></section>
</>}
