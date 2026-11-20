import { profile } from "../data/profile";
import ProjectIntent from "../../components/ProjectIntent";
import MotionDivider from "../../components/MotionDivider";
export const metadata = { title: "Contact", description: "Work with Omit Hassan Akash on marketing, websites, SQA or agency projects." };
export default function Page(){return <>
<section className="page-hero"><div className="container"><div className="label">Omit Hassan Akash / Contact</div><h1>Let's build<br/>something useful.</h1><p>For digital marketing, SEO, web development, e-commerce, business collaborations and agency work.</p></div></section>
<MotionDivider text="Choose / Connect / Build"/>
<section className="section"><div className="container"><ProjectIntent/><div className="contact-details"><a data-cursor="EMAIL" href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong></a><a data-cursor="CALL" href={`tel:${profile.phone.replace(/\s/g,"")}`}><span>Phone</span><strong>{profile.phone}</strong></a><div><span>Based in</span><strong>{profile.location}</strong></div>{profile.links.map(([l,u])=><a key={u} data-cursor="OPEN" href={u} target="_blank" rel="noopener noreferrer"><span>{l}</span><strong>{u.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"")}</strong></a>)}</div></div></section>
</>}
