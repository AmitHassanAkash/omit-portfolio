import { designWork, alsoWorkedWith, workCredit } from "../data/profile";

export const metadata = { title: "PandaStation-25 — Design & Campaign Work", description: "Social media, ad, event and branding work for Huukum, Layer3, Utrade, Mubdi, Dhaka Revengers, Noor Beauty Salon, TickiFly and Nazel." };

export default function Page(){return <>
<section className="page-hero"><div className="container"><div className="label">{workCredit}</div><h1>Building<br/>PandaStation-25</h1><p>My creative and digital agency. Ideas meet algorithms: branding, content, ads, SEO and websites. Below is a selection of real client work.</p><a className="project-link card-link" href="https://pandastation-25.com" target="_blank" rel="noopener noreferrer">pandastation-25.com ↗</a></div></section>

<section className="section"><div className="container"><div className="label">01 / Case Studies</div><h2 className="title reveal kinetic scrub-title">Closer <em>looks.</em></h2>
<div className="ps-cases">
<figure className="reveal"><img src="/work/tickifly-case.webp" alt="TickiFly Travels case study" loading="lazy" width="1200" height="800"/><figcaption><h3>TickiFly Travels</h3><p>Branding and campaign communication for a travel brand.</p></figcaption></figure>
<figure className="reveal"><img src="/work/huukum-case.webp" alt="Huukum case study" loading="lazy" width="1200" height="900"/><figcaption><h3>Huukum</h3><p>Relatable campaign creative to promote an on-demand app.</p></figcaption></figure>
</div></div></section>

<section className="section"><div className="container"><div className="label">02 / Client Work</div><h2 className="title reveal kinetic scrub-title">Selected <em>work.</em></h2>
<div className="ps-gallery">{designWork.map(w=><div className="ps-client reveal" id={w.slug} key={w.slug}>
<div className="ps-client-head"><h3>{w.name}</h3><span>{w.industry} · {w.type}</span></div>
<div className="ps-grid">{["01","02","03","04"].map(n=><a key={n} href={`/work/${w.slug}/${n}.webp`} target="_blank" rel="noopener noreferrer" data-cursor="OPEN"><img src={`/work/${w.slug}/${n}.webp`} alt={`${w.name} — design ${n}`} loading="lazy" width="560" height="560"/></a>)}</div>
</div>)}</div>
<div className="label" style={{marginTop:90}}>Also worked with</div>
<div className="also-list">{alsoWorkedWith.map(x=><span key={x}>{x}</span>)}</div>
</div></section>
</>}
