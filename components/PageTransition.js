"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageTransition(){
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef(null);

  useEffect(()=>{
    const el=ref.current;
    gsap.set(el,{scaleY:1,transformOrigin:"top"});
    gsap.to(el,{scaleY:0,duration:.72,ease:"power4.inOut",transformOrigin:"top"});
  },[pathname]);

  useEffect(()=>{
    const onClick=(e)=>{
      const a=e.target.closest("a");
      if(!a) return;
      const href=a.getAttribute("href");
      if(!href || !href.startsWith("/") || href.startsWith("//") || href===pathname) return;
      if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target==="_blank") return;
      e.preventDefault();
      const el=ref.current;
      gsap.set(el,{transformOrigin:"bottom",scaleY:0});
      gsap.to(el,{scaleY:1,duration:.55,ease:"power4.inOut",onComplete:()=>router.push(href)});
    };
    document.addEventListener("click",onClick,true);
    return ()=>document.removeEventListener("click",onClick,true);
  },[pathname,router]);

  return <div ref={ref} className="page-transition"><span className="transition-mark">O.</span></div>;
}
