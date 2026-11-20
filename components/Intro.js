"use client";
/*
  Cinematic intro (home page, once per browser session).
  Light dot -> name scrambles in -> portrait assembles from particles (sampled from the
  real hero photo) -> GROW · BUILD · TEST -> the portrait lands exactly on the hero photo
  and the overlay dissolves into the homepage. Plays after the sound gate closes.
*/
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const NAME = "OMIT HASSAN AKASH";
const TAG = "GROW · BUILD · TEST";
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+<>/";
const SEEN = "introSeen";

const seen = () => { try { return !!sessionStorage.getItem(SEEN); } catch { return false; } };
const markSeen = () => { try { sessionStorage.setItem(SEEN, "1"); } catch {} };
const fire = (n) => window.dispatchEvent(new Event(n));

export default function Intro() {
  const path = usePathname();
  const [active, setActive] = useState(path === "/");
  const root = useRef(null), bg = useRef(null), cam = useRef(null), cvs = useRef(null), frame = useRef(null),
    photo = useRef(null), nameEl = useRef(null), tagEl = useRef(null), dot = useRef(null), skipBtn = useRef(null);
  const api = useRef({});

  useEffect(() => {
    if (path !== "/" || seen()) { setActive(false); return; }
    setActive(true);
  }, [path]);

  useEffect(() => {
    if (!active) return;
    let raf = 0, tl = null, finished = false, revealed = false, sound = false;
    const sfx = (k, v) => { if (!sound) return; try { const a = new Audio(`/sfx/${k}.mp3`); a.volume = v; a.play().catch(() => {}); } catch {} };

    const reveal = () => { if (revealed) return; revealed = true; fire("intro:reveal"); };
    const finish = () => {
      if (finished) return; finished = true;
      cancelAnimationFrame(raf); tl && tl.kill();
      reveal(); markSeen(); fire("intro:done"); setActive(false);
    };
    const skip = () => {
      if (finished) return;
      tl && tl.kill(); cancelAnimationFrame(raf); reveal();
      gsap.to(root.current, { opacity: 0, duration: .45, ease: "power2.out", onComplete: finish });
    };
    api.current.skip = skip;

    const run = async () => {
      const W = innerWidth, H = innerHeight, mobile = W < 900;
      const media = document.querySelector(".hero-media"), heroImg = media && media.querySelector("img");
      const title = document.querySelector(".hero-title");
      if (!media || !heroImg) return finish();
      try { await (heroImg.decode ? heroImg.decode() : Promise.resolve()); } catch {}
      if (!heroImg.naturalWidth) return finish();

      // --- geometry: where the hero photo really is, and where the intro shows it
      const mR = media.getBoundingClientRect(), iR = heroImg.getBoundingClientRect();
      const rel = { l: (iR.left - mR.left) / mR.width, t: (iR.top - mR.top) / mR.height, w: iR.width / mR.width, h: iR.height / mR.height };
      const fits = mR.top >= 50 && mR.bottom <= H - 8 && mR.right <= W;
      let S;
      if (fits) S = { x: mR.left, y: mR.top, w: mR.width, h: mR.height };
      else { const ar = mR.width / mR.height; const h = Math.min(H * .5, (W * .78) / ar), w = h * ar; S = { x: (W - w) / 2, y: H * .12, w, h }; }

      Object.assign(frame.current.style, { left: S.x + "px", top: S.y + "px", width: S.w + "px", height: S.h + "px" });
      Object.assign(photo.current.style, { left: rel.l * 100 + "%", top: rel.t * 100 + "%", width: rel.w * 100 + "%", height: rel.h * 100 + "%" });
      cam.current.style.transformOrigin = `${S.x + S.w / 2}px ${S.y + S.h / 2}px`;

      // name + tag placement: over the hero title on desktop, under the portrait on mobile
      const n = nameEl.current, tg = tagEl.current;
      if (!mobile && title) {
        const tR = title.getBoundingClientRect(), colW = Math.min(tR.width + 40, S.x - tR.left - 40);
        const fs = Math.min(92, colW / (NAME.length * .64));
        Object.assign(n.style, { left: tR.left + "px", top: (tR.top + tR.height / 2 - fs * .6) + "px", fontSize: fs + "px", textAlign: "left" });
        Object.assign(tg.style, { left: tR.left + 4 + "px", top: (tR.top + tR.height / 2 + fs * .75) + "px", textAlign: "left" });
      } else {
        const fs = Math.min(40, (W * .9) / (NAME.length * .64));
        Object.assign(n.style, { left: "5vw", width: "90vw", top: (S.y + S.h + 26) + "px", fontSize: fs + "px", textAlign: "center" });
        Object.assign(tg.style, { left: "5vw", width: "90vw", top: (S.y + S.h + 34 + fs * 1.1) + "px", textAlign: "center" });
      }
      const chars = [...n.querySelectorAll("span")];
      const charBoxes = chars.map(c => c.getBoundingClientRect());

      // --- sample the real photo into particles
      const sw = Math.round(S.w), sh = Math.round(S.h);
      const off = document.createElement("canvas"); off.width = sw; off.height = sh;
      const oc = off.getContext("2d", { willReadFrequently: true });
      const bx = rel.l * sw, by = rel.t * sh, bw = rel.w * sw, bh = rel.h * sh;
      const nw = heroImg.naturalWidth, nh = heroImg.naturalHeight, sc = Math.max(bw / nw, bh / nh);
      const dw = nw * sc, dh = nh * sc;
      oc.filter = "saturate(.78) contrast(1.08)";
      oc.drawImage(heroImg, bx + (bw - dw) * .5, by + (bh - dh) * .18, dw, dh);
      const px = oc.getImageData(0, 0, sw, sh).data;
      const step = mobile ? 4 : 4, P = [];
      const cx = S.x + S.w / 2, cy = S.y + S.h / 2, R = Math.max(W, H);
      for (let y = 0; y < sh; y += step) for (let x = 0; x < sw; x += step) {
        if (Math.random() > .9) continue;
        const i = (y * sw + x) * 4, a = Math.random() * Math.PI * 2, r = R * (.35 + Math.random() * .8);
        const tx = S.x + x, ty = S.y + y;
        const d = Math.hypot(tx - cx, ty - cy) / Math.hypot(S.w, S.h);
        P.push({ tx, ty, sx: cx + Math.cos(a) * r, sy: cy + Math.sin(a) * r * .8, r: px[i], g: px[i + 1], b: px[i + 2], d: .1 + d * .55 + Math.random() * .35 });
      }
      const dust = Array.from({ length: mobile ? 40 : 80 }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: -.08 - Math.random() * .25, a: .08 + Math.random() * .3 }));

      // --- canvas (CSS pixels; particles read as fine dust)
      const c = cvs.current; c.width = W; c.height = H;
      const ctx = c.getContext("2d"), img = ctx.createImageData(W, H), buf = new Uint32Array(img.data.buffer);
      const put = (x, y, r, g, b, al, s) => {
        x |= 0; y |= 0; const A = (al * 255) | 0; if (A <= 0) return;
        const v = (A << 24) | (b << 16) | (g << 8) | r;
        for (let yy = 0; yy < s; yy++) { const row = (y + yy) * W; if (y + yy < 0 || y + yy >= H) continue;
          for (let xx = 0; xx < s; xx++) { const X = x + xx; if (X >= 0 && X < W) buf[row + X] = v; } }
      };

      const T0 = 2.0;            // particles start
      const DUR = 1.25;          // each particle's flight
      const clock = { t: 0 };
      let lastShown = -1;
      const tick = () => {
        const t = clock.t;
        buf.fill(0);
        for (const p of dust) { p.x += p.vx; p.y += p.vy; if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; } put(p.x, p.y, 235, 230, 240, p.a, 1); }
        if (t > T0) {
          const tc = t - T0;
          for (const p of P) {
            const q = Math.min(1, Math.max(0, (tc - p.d) / DUR)); if (q <= 0) continue;
            const e = 1 - Math.pow(1 - q, 3), sz = q < 1 ? 2 : 3;
            put(p.sx + (p.tx - p.sx) * e, p.sy + (p.ty - p.sy) * e, p.r, p.g, p.b, Math.min(1, q * 1.6), sz);
          }
        }
        ctx.putImageData(img, 0, 0);
        // name scramble + dot travel
        for (let i = 0; i < chars.length; i++) {
          const s0 = .85 + i * .062, ch = NAME[i];
          if (ch === " ") continue;
          if (t < s0) { chars[i].style.opacity = 0; continue; }
          chars[i].style.opacity = 1;
          chars[i].textContent = t < s0 + .3 ? GLYPHS[(Math.random() * GLYPHS.length) | 0] : ch;
          if (i > lastShown) lastShown = i;
        }
        if (lastShown >= 0 && t < 2.1) { const b = charBoxes[lastShown]; gsap.set(dot.current, { x: b.right + 10, y: b.top + b.height * .78 }); }
        raf = requestAnimationFrame(tick);
      };

      // --- master timeline
      gsap.set(dot.current, { x: W / 2, y: H / 2, opacity: 0, scale: .2 });
      gsap.set([n, tg], { opacity: 1 }); gsap.set(chars, { opacity: 0 }); gsap.set(tg, { opacity: 0, letterSpacing: "1.1em" });
      gsap.set(photo.current, { opacity: 0 }); gsap.set(cam.current, { scale: mobile ? 1.05 : 1.07 });
      gsap.set(skipBtn.current, { opacity: 0 });

      const END = fits ? 5.4 : 5.6;
      tl = gsap.timeline({ onComplete: finish });
      tl.to(clock, { t: END, duration: END, ease: "none" }, 0)
        .to(skipBtn.current, { opacity: 1, duration: .5 }, .3)
        .to(dot.current, { opacity: 1, scale: 1, duration: .45, ease: "back.out(2)" }, .05)
        .to(dot.current, { scale: 1.6, duration: .25, yoyo: true, repeat: 1, ease: "sine.inOut" }, .45)
        .to(dot.current, { x: () => charBoxes[0].left - 8, y: () => charBoxes[0].top + charBoxes[0].height * .78, duration: .32, ease: "power3.in" }, .55)
        .call(() => sfx("whoosh", .5), null, .8)
        .to(dot.current, { opacity: 0, scale: .2, duration: .3 }, 2.05)
        .to(cam.current, { scale: 1, duration: 2.1, ease: "power2.out" }, T0)
        .call(() => sfx("impact", .55), null, 3.55)
        .to(photo.current, { opacity: 1, duration: .55, ease: "power2.inOut" }, 3.5)
        .to(cvs.current, { opacity: 0, duration: .5 }, 3.85)
        .to(tg, { opacity: 1, letterSpacing: mobile ? ".32em" : ".42em", duration: .8, ease: "power3.out" }, 3.35)
        // dissolve into the homepage
        .call(reveal, null, 4.25)
        .call(() => sfx("whoosh", .35), null, 4.25)
        .to([n, tg], { opacity: 0, y: -14, filter: "blur(8px)", duration: .5, ease: "power2.in" }, 4.25)
        .to(bg.current, { opacity: 0, duration: .75, ease: "power2.inOut" }, 4.3)
        .to(frame.current, { left: () => media.getBoundingClientRect().left, top: () => media.getBoundingClientRect().top, width: () => media.getBoundingClientRect().width, height: () => media.getBoundingClientRect().height, duration: fits ? .01 : .9, ease: "power3.inOut" }, 4.3)
        .to(skipBtn.current, { opacity: 0, duration: .3 }, 4.3)
        .fromTo(".site-header", { opacity: 0, y: -18 }, { opacity: 1, y: 0, duration: .7, ease: "power3.out", immediateRender: false }, 4.55)
        .to(photo.current, { opacity: 0, duration: .35 }, END - .35);
      tick();
    };

    const start = (e) => { sound = !!(e && e.detail && e.detail.sound); requestAnimationFrame(() => run().catch(finish)); };
    if (window.__gateClosed) start({ detail: { sound: window.__gateSound } });
    else window.addEventListener("gate:closed", start, { once: true });
    return () => { window.removeEventListener("gate:closed", start); cancelAnimationFrame(raf); tl && tl.kill(); };
  }, [active]);

  if (!active) return null;
  return (
    <div ref={root} className="intro">
      <div ref={bg} className="intro-bg" aria-hidden="true"><span className="intro-light" /></div>
      <div ref={cam} className="intro-cam" aria-hidden="true">
        <div ref={frame} className="intro-frame"><img ref={photo} src="/hero-omit.webp" alt="" className="intro-photo" /></div>
        <canvas ref={cvs} className="intro-canvas" />
      </div>
      <div ref={nameEl} className="intro-name" aria-label="Omit Hassan Akash">{[...NAME].map((ch, i) => <span key={i}>{ch === " " ? " " : ch}</span>)}</div>
      <div ref={tagEl} className="intro-tag">{TAG}</div>
      <span ref={dot} className="intro-dot" />
      <button ref={skipBtn} className="intro-skip" onClick={() => api.current.skip && api.current.skip()}>Skip intro →</button>
    </div>
  );
}
