import CaseStudyExplorer from "../../components/CaseStudyExplorer";
import MotionDivider from "../../components/MotionDivider";
export const metadata = { title: "Case Studies", description: "Livix Furniture store, 40+ client onboarding and Chaldal email campaigns." };
export default function Page(){return <>
<section className="page-hero"><div className="container"><div className="label">Omit Hassan Akash / Case Studies</div><h1>Evidence over<br/>decoration.</h1><p>Case studies should show what changed, what I did and what result followed—not just screenshots.</p></div></section>
<MotionDivider text="Challenge / Role / Execution / Evidence"/>
<section className="section"><div className="container"><div className="label">01 / Interactive Cases</div><h2 className="title kinetic scrub-title">Follow the <em>thinking.</em></h2><CaseStudyExplorer/></div></section>
<section className="section"><div className="container"><div className="content-note">More case studies should be added only when real project screenshots, scope and verified metrics are available.</div></div></section>
</>}
