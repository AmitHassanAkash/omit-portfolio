import Link from "next/link";
export const metadata = { title: "Entrepreneurship", description: "PandaStation-25, Hello Uttara, VortexUp Digital and other ventures by Omit Hassan Akash." };

const ventures = [
  { label: "Present", name: "PandaStation-25", role: "Founder & CEO", text: "A creative and digital agency focused on branding, content, paid ads, SEO, websites and analytics. My role spans positioning, client strategy, creative direction, digital systems and business growth.", internal: "/pandastation-25", internalLabel: "Founder story", url: "https://pandastation-25.com" },
  { label: "Pre-launch", name: "Hello Uttara", role: "Founder", text: "A neighbourhood platform for Uttara, starting with pure cow milk, seasonal fruits, home tutors and hospital escort for elderly family members, with home-repair services planned later. Currently running a mystery pre-launch campaign with early-access registration. Tagline: “Your Neighbourhood, Our Responsibility.”", url: "https://hellouttara.com" },
  { label: "Previous Venture / 2024 — 2025", name: "VortexUp Digital", role: "Co-Founder / Marketing Manager & Copywriter", text: "Worked across client onboarding, 360° campaigns, copywriting, landing-page content and brand storytelling. During 2024, I onboarded 40+ clients across multiple industries." },
  { label: "In planning", name: "Youth Network for Harmony", role: "Co-founder (planned)", text: "A planned Bangladesh youth organization working on justice, climate justice, rural development and women's empowerment." },
  { label: "Media", name: "Talk with Akash", role: "Creator", text: "My own Facebook page for Bangla reels and commentary on technology, business and society, including long-form work on scams in Bangladesh.", url: "https://www.facebook.com/talkakash" }
];

export default function Page(){return <>
<section className="page-hero"><div className="container"><div className="label">Omit Hassan Akash / Entrepreneurship</div><h1>Building, learning,<br/>starting again.</h1><p>My entrepreneurial work reflects the same intersection as my career: marketing, technology, client work and business building — mostly for the Bangladeshi market.</p></div></section>
<section className="section"><div className="container"><div className="cards">{ventures.map(v=><article className="card reveal" key={v.name}><div className="label">{v.label}</div><h3>{v.name}</h3><p className="role-line">{v.role}</p><p>{v.text}</p>
{v.internal&&<Link className="project-link card-link" href={v.internal}>{v.internalLabel} ↗</Link>}{" "}
{v.url&&<a className="project-link card-link" style={{marginLeft:v.internal?18:0}} href={v.url} target="_blank" rel="noopener noreferrer">{v.url.replace(/^https?:\/\/(www\.)?/,"")} ↗</a>}
</article>)}</div></div></section>
</>}
