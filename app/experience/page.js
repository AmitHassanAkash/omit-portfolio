import ExperienceTimeline from "../../components/ExperienceTimeline";
import { profile } from "../data/profile";
export const metadata = { title: "Experience", description: "5+ years in digital marketing: Corporate Projukti, VortexUp Digital, Sohoj Coding and Chaldal." };
export default function Page(){return <>
<section className="page-hero"><div className="container"><div className="label">Omit Hassan Akash / Experience</div><h1>Professional<br/>Experience</h1><p>Hands-on experience across digital marketing, content, SEO, email, paid media and brand communication.</p></div></section>
<section className="section"><div className="container"><div className="experience-list">{profile.experience.map((x,i)=><article className="experience-block reveal" key={x.company}><div className="exp-index">0{i+1}</div><div><div className="label">{x.period}</div><h2>{x.company}</h2><h3>{x.role}</h3><ul>{x.bullets.map(b=><li key={b}>{b}</li>)}</ul></div></article>)}</div></div></section>
<section className="section"><div className="container"><div className="label">02 / Interactive Timeline</div><h2 className="title kinetic scrub-title">Explore the <em>journey.</em></h2><ExperienceTimeline/></div></section></>}
