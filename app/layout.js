import "./globals.css";
import Header from "../components/Header";
import SmoothScroll from "../components/SmoothScroll";
import PageTransition from "../components/PageTransition";
import InteractiveBackground from "../components/InteractiveBackground";
import CustomCursor from "../components/CustomCursor";
import GlobalMotion from "../components/GlobalMotion";
import ScrollProgress from "../components/ScrollProgress";
import CursorLabel from "../components/CursorLabel";
import SoundSystem from "../components/SoundSystem";
import SoundIntro from "../components/SoundIntro";
import Intro from "../components/Intro";

import { profile, SITE_URL } from "./data/profile";

const desc="Omit Hassan Akash — Marketing Technologist, web builder and SQA from Dhaka. From the first ad to the last bug.";
export const metadata={
  metadataBase:new URL(SITE_URL),
  title:{default:"Omit Hassan Akash — Marketing Technologist · Web Builder · SQA",template:"%s · Omit Hassan Akash"},
  description:desc,
  alternates:{canonical:"/"},
  openGraph:{type:"website",url:SITE_URL,siteName:"Omit Hassan Akash",title:"Omit Hassan Akash — From the first ad to the last bug.",description:desc,images:[{url:"/og.jpg",width:1200,height:630}]},
  twitter:{card:"summary_large_image",title:"Omit Hassan Akash",description:desc,images:["/og.jpg"]},
  robots:{index:true,follow:true}
};
const jsonLd={"@context":"https://schema.org","@type":"Person",name:"Omit Hassan Akash",alternateName:"MD Omit Hassan",jobTitle:"Marketing Technologist",url:SITE_URL,image:SITE_URL+"/hero-omit.webp",email:"mailto:"+profile.email,address:{"@type":"PostalAddress",addressLocality:"Dhaka",addressCountry:"BD"},alumniOf:"Green University of Bangladesh",worksFor:[{"@type":"Organization",name:"MAP Technology and Services",url:"https://maptechnology.net"},{"@type":"Organization",name:"PandaStation-25",url:"https://pandastation-25.com"}],sameAs:profile.links.map(([,u])=>u),knowsAbout:["Digital marketing","SEO","Meta Ads","Web development","Software quality assurance"]};

export default function RootLayout({children}){
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:"try{if(sessionStorage.getItem('introSeen'))document.documentElement.classList.add('intro-seen')}catch(e){}"}}/></head><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <InteractiveBackground/><div className="noise"/><CustomCursor/><CursorLabel/><ScrollProgress/><GlobalMotion/><SoundSystem/><SoundIntro/><Intro/>
    <SmoothScroll/>
    <PageTransition/>
    <Header/>
    {children}
    <footer className="footer"><div className="container">© 2026 Omit Hassan Akash — Grow / Build / Test</div></footer>
  </body></html>
}
