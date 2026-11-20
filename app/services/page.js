import { profile } from "../data/profile";
import ServiceExplorer from "../../components/ServiceExplorer";
import MotionDivider from "../../components/MotionDivider";
export const metadata = { title: "Capabilities", description: "Digital marketing, SEO, Meta and Google ads, AI-assisted web development, software QA and content." };
export default function Page(){return <>
<section className="page-hero"><div className="container"><div className="label">Omit Hassan Akash / Capabilities</div><h1>Capabilities</h1><p>A multidisciplinary working stack built around marketing, search, content, e-commerce and web development.</p></div></section>
<MotionDivider text="Strategy / Execution / Technology"/>
<section className="section"><div className="container"><div className="label">01 / Interactive Capability Explorer</div><h2 className="title kinetic scrub-title">What I can <em>execute.</em></h2><ServiceExplorer/></div></section>
<section className="section"><div className="container"><div className="capability-grid">{profile.capabilities.map(([title,items],i)=><article className="capability-card reveal" data-cursor="OPEN" key={title}><div className="label">0{i+1}</div><h2>{title}</h2><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></div></section>
</>}
