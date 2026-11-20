"use client";
import { useEffect, useRef } from "react";
// Loads and plays only when near the viewport; pauses when off-screen.
export default function LazyVideo({ src }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current; if (!v) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!v.src) v.src = src; v.play().catch(() => {}); }
      else v.pause();
    }, { rootMargin: "300px" });
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  return <video ref={ref} muted loop playsInline preload="none" aria-hidden="true" />;
}
