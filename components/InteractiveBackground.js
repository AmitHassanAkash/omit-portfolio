"use client";
import { useEffect, useRef } from "react";

export default function InteractiveBackground(){
  const canvasRef = useRef(null);
  useEffect(()=>{
    const touch = matchMedia("(pointer: coarse)").matches;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    const pointer = {x: innerWidth/2, y: innerHeight/2, tx: innerWidth/2, ty: innerHeight/2};
    const particles = Array.from({length: touch ? 18 : 44}, (_,i)=>({
      x: Math.random()*innerWidth,
      y: Math.random()*innerHeight,
      vx:(Math.random()-.5)*.35,
      vy:(Math.random()-.5)*.35,
      r:Math.random()*1.8+.5
    }));
    const resize=()=>{
      const dpr=Math.min(devicePixelRatio||1,2);
      canvas.width=innerWidth*dpr; canvas.height=innerHeight*dpr;
      canvas.style.width=innerWidth+"px"; canvas.style.height=innerHeight+"px";
      ctx.setTransform(dpr,0,0,dpr,0,0);
    };
    resize();
    const move=e=>{ pointer.tx=e.clientX; pointer.ty=e.clientY; };
    addEventListener("resize",resize);
    addEventListener("pointermove",move,{passive:true});

    function draw(){
      pointer.x += (pointer.tx-pointer.x)*.08;
      pointer.y += (pointer.ty-pointer.y)*.08;
      ctx.clearRect(0,0,innerWidth,innerHeight);

      const g=ctx.createRadialGradient(pointer.x,pointer.y,0,pointer.x,pointer.y,180);
      g.addColorStop(0,"rgba(255,45,122,.18)");
      g.addColorStop(.45,"rgba(255,45,122,.06)");
      g.addColorStop(1,"rgba(255,45,122,0)");
      ctx.fillStyle=g; ctx.fillRect(pointer.x-180,pointer.y-180,360,360);

      particles.forEach(p=>{
        const dx=pointer.x-p.x, dy=pointer.y-p.y, dist=Math.hypot(dx,dy)||1;
        if(dist<160){ p.vx -= dx/dist*.012; p.vy -= dy/dist*.012; }
        p.x+=p.vx; p.y+=p.vy; p.vx*=.995; p.vy*=.995;
        if(p.x<0)p.x=innerWidth; if(p.x>innerWidth)p.x=0;
        if(p.y<0)p.y=innerHeight; if(p.y>innerHeight)p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(255,255,255,.42)"; ctx.fill();
      });
      raf=requestAnimationFrame(draw);
    }
    const vis=()=>{ cancelAnimationFrame(raf); if(!document.hidden) draw(); };
    document.addEventListener("visibilitychange",vis);
    draw();
    return ()=>{ cancelAnimationFrame(raf); document.removeEventListener("visibilitychange",vis); removeEventListener("resize",resize); removeEventListener("pointermove",move); };
  },[]);
  return <canvas ref={canvasRef} className="interactive-bg" aria-hidden="true"/>;
}
