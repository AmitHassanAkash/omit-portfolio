
# V8.5 Balanced Cinematic Sound

Built from the full V8.3 working website package.

Audible sound now exists for:
- normal mouse movement
- hover
- scroll
- click
- menu/page transition
- project open
- ambient background

The sound palette remains cinematic and avoids game-like tones.

# V9 — Live Work & Full Profile

Added on top of V8.5:
- Work page: live websites with links (Livix Furniture, Euro Bangla Apparel, PandaStation-25, Hello Uttara), Sadhan Mukherjee portfolio (link pending), products (SocialHub Pro, BashaBari, Debate Tab System) and marketing clients.
- Home: "Sites you can visit" section, real projects in the project slider, MAP Technology CMO role, LinkedIn/Facebook links.
- Entrepreneurship: Hello Uttara, Youth Network for Harmony (planned), Talk with Akash.
- Achievements: leadership (PUNAB national debate festival, Motion & Rebuttal, Talk with Akash).
- Case study: Livix Furniture store. Capabilities: Next.js, React Native, Node.js, AI tools.
- All site data lives in app/data/profile.js (websites, products, marketingWork, leadership, links).

Run: npm install && npm run dev

# V10 — Grow / Build / Test
- New positioning: Marketing Technologist · Web Builder · SQA. Hook: "From the first ad to the last bug." 5+ years (since 2021).
- Home rebuilt around three pillars, with photos and less text.
- Website Development (5 sites) and Software Quality Assurance (3 sites) sections; Sadhan portfolio removed.
- Screenshot cards: drop images into public/sites/ named livix, eurobangla, pandastation, hellouttara, maptechnology, corposhop, techdistri, projuktibd (.jpg/.png/.webp). Without an image, a clean browser mockup shows.
- Videos section (Livix AI store, Motion & Rebuttal Ep. 1).
- Fixed: hero photo and some sections stayed hidden (HomeMotion and GlobalMotion both animated the same elements).
- Compressed photos and showreel (site ~17MB → ~6MB of media).

# V11 — Design Work & Optimization
- PandaStation-25 design work (8 clients × 4 designs + 2 case studies) on Home (horizontal showcase + collage), Work and /pandastation-25.
- Removed videos section and personal photos from work areas.
- Speed: all images WebP, sounds MP3 (1.1MB → 176KB), showreel loads only when in view, background canvas off on touch / reduced motion and paused in hidden tabs.
- SEO: per-page titles & descriptions, Open Graph image (public/og.jpg), sitemap.xml, robots.txt, Person JSON-LD.
- SET YOUR DOMAIN: app/data/profile.js → SITE_URL (or env NEXT_PUBLIC_SITE_URL).
- Accessibility: reduced-motion support, visible keyboard focus.

# V12 — Cinematic Intro & Animation Upgrade
- components/Intro.js: ~5.5s intro after the sound gate (home page, once per session). Light dot → name scramble → portrait assembles from particles sampled from the real hero photo → GROW · BUILD · TEST → portrait lands on the hero photo and the screen dissolves into the homepage. "Skip intro" button. If sound was chosen, whoosh/impact play.
- To replay the intro: open a new tab, or run sessionStorage.removeItem('introSeen') in the console.
- All animations always on again (reduced-motion switches removed). Stronger reveals, cascading design grids, 3D hover tilt, website screenshots scroll inside the browser frame on hover, lighter particle background on touch devices.
