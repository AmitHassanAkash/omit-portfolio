"use client";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GlobalMotion(){
  const pathname = usePathname();

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(()=>{
      // Every page enters with a strong editorial reveal.
      gsap.fromTo(".page-hero .label, .hero .eyebrow",
        {y:22, opacity:0},
        {y:0, opacity:1, duration:.55, ease:"power3.out", stagger:.06}
      );

      gsap.fromTo(".page-hero h1",
        {y:100, skewY:5, opacity:0, filter:"blur(14px)", clipPath:"inset(0 0 100% 0)"},
        {y:0, skewY:0, opacity:1, filter:"blur(0px)", clipPath:"inset(0% 0% 0% 0%)", duration:1.05, ease:"power4.out", delay:.08}
      );

      gsap.fromTo(".page-hero p",
        {y:35, opacity:0},
        {y:0, opacity:1, duration:.7, ease:"power3.out", delay:.28}
      );

      // Important headings across all inner pages.
      gsap.utils.toArray(".title, .kinetic, .experience-block h2, .capability-card h2, .achievement-row h3").forEach((el,i)=>{
        gsap.fromTo(el,
          {y:70, xPercent:i%2===0?-3:3, skewY:2.5, opacity:0, filter:"blur(8px)"},
          {y:0, xPercent:0, skewY:0, opacity:1, filter:"blur(0px)", duration:.95, ease:"power4.out",
           scrollTrigger:{trigger:el,start:"top 88%",toggleActions:"play none none reverse"}}
        );
        const em = el.querySelector("em");
        if(em){
          gsap.fromTo(em,{x:28,opacity:.15},{x:0,opacity:1,duration:1.05,ease:"power4.out",
            scrollTrigger:{trigger:el,start:"top 88%",toggleActions:"play none none reverse"}});
        }
      });

      // Generic section choreography: works on every route.
      gsap.utils.toArray(
        ".reveal:not(.shot-card):not(.pillar), .card, .experience-block, .capability-card, .metric, .achievement-row, .titem, .contact-details > *, .long-copy p, .content-note, .section-link"
      ).forEach((el,i)=>{
        gsap.fromTo(el,
          {y:70, opacity:0, scale:.97, filter:"blur(6px)"},
          {y:0, opacity:1, scale:1, filter:"blur(0px)", duration:1, delay:(i%4)*.06, ease:"power4.out",
           scrollTrigger:{trigger:el,start:"top 91%",toggleActions:"play none none reverse"}}
        );
      });

      // Design work and screenshot grids: items cascade in one by one.
      ScrollTrigger.batch(".ps-grid > a, .work-collage img, .shot-card, .pillar, .stack-tags span",{
        start:"top 92%",
        onEnter:els=>gsap.fromTo(els,{y:60,opacity:0,rotateX:-12,scale:.94,transformPerspective:900},{y:0,opacity:1,rotateX:0,scale:1,duration:.9,stagger:.08,ease:"power4.out",overwrite:true}),
        onLeaveBack:els=>gsap.to(els,{opacity:0,y:40,duration:.4,stagger:.03,overwrite:true})
      });
      gsap.set(".ps-grid > a, .work-collage img, .shot-card, .pillar, .stack-tags span",{opacity:0});

      // Big headings: masked rise.
      gsap.utils.toArray(".ps-client-head h3, .shot-meta h3").forEach(el=>{
        gsap.fromTo(el,{clipPath:"inset(0 0 100% 0)",y:30},{clipPath:"inset(0 0 0% 0)",y:0,duration:.9,ease:"power4.out",
          scrollTrigger:{trigger:el,start:"top 92%",toggleActions:"play none none reverse"}});
      });

      // Lists animate line-by-line.
      gsap.utils.toArray(".experience-block li, .capability-card li").forEach((el,i)=>{
        gsap.fromTo(el,{x:-18,opacity:0},{x:0,opacity:1,duration:.55,ease:"power3.out",
          scrollTrigger:{trigger:el,start:"top 94%",toggleActions:"play none none reverse"}});
      });

      // Photo mask + controlled parallax. No gallery-style motion.
      gsap.utils.toArray(".photo-reveal").forEach((el,i)=>{
        gsap.fromTo(el,
          {clipPath:i%2 ? "inset(0 100% 0 0)" : "inset(100% 0 0 0)", scale:1.05},
          {clipPath:"inset(0% 0% 0% 0%)", scale:1, duration:1.25, ease:"power4.inOut",
           scrollTrigger:{trigger:el,start:"top 86%",toggleActions:"play none none reverse"}}
        );
      });

      gsap.utils.toArray(".parallax-img").forEach(img=>{
        gsap.fromTo(img,{yPercent:-7,scale:1.07},{yPercent:7,scale:1.02,ease:"none",
          scrollTrigger:{trigger:img.parentElement,start:"top bottom",end:"bottom top",scrub:1}});
      });

      // Scrub important titles as the user scrolls.
      gsap.utils.toArray(".scrub-title").forEach((el,i)=>{
        gsap.fromTo(el,{xPercent:i%2?8:-8,opacity:.45},{xPercent:0,opacity:1,ease:"none",
          scrollTrigger:{trigger:el,start:"top bottom",end:"center 55%",scrub:1}});
      });

      // Numbers feel alive instead of static.
      gsap.utils.toArray(".metric strong").forEach(el=>{
        gsap.fromTo(el,{y:35,opacity:0,scale:.82},{y:0,opacity:1,scale:1,duration:.9,ease:"back.out(1.7)",
          scrollTrigger:{trigger:el,start:"top 90%",toggleActions:"play none none reverse"}});
      });

      // Cards react to the mouse globally.
      if(window.matchMedia("(pointer:fine)").matches){
        document.querySelectorAll(".card, .capability-card, .project-panel, .shot-card, .site-card, .ps-grid > a, .video-card, .pillar").forEach(card=>{
          const move=(e)=>{
            const r=card.getBoundingClientRect();
            const x=(e.clientX-r.left)/r.width-.5;
            const y=(e.clientY-r.top)/r.height-.5;
            gsap.to(card,{rotateY:x*4.5,rotateX:-y*4.5,transformPerspective:1100,duration:.35,ease:"power2.out"});
          };
          const leave=()=>gsap.to(card,{rotateX:0,rotateY:0,duration:.5,ease:"power3.out"});
          card.addEventListener("pointermove",move);
          card.addEventListener("pointerleave",leave);
        });
      }

      // Page sections receive subtle depth as they pass.
      gsap.utils.toArray(".section").forEach(section=>{
        gsap.fromTo(section,{backgroundPosition:"50% 0%"},{backgroundPosition:"50% 100%",ease:"none",
          scrollTrigger:{trigger:section,start:"top bottom",end:"bottom top",scrub:.7}});
      });

      ScrollTrigger.refresh();
    });

    return ()=>{
      ctx.revert();
      ScrollTrigger.getAll().forEach(t=>t.kill());
    };
  },[pathname]);

  return null;
}
