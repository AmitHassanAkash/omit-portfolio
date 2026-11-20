import fs from "fs";
import path from "path";

const host = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
function shot(slug) {
  for (const ext of ["jpg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "sites", `${slug}.${ext}`))) return `/sites/${slug}.${ext}`;
  }
  return null;
}

// Screenshot if public/sites/<slug>.jpg exists; otherwise a clean browser mockup.
export default function SiteCard({ site, tags, label }) {
  const img = shot(site.slug);
  return (
    <a className="shot-card reveal" href={site.url} target="_blank" rel="noopener noreferrer" data-cursor="VISIT">
      <div className="shot-frame">
        <div className="shot-bar"><i /><i /><i /><span>{host(site.url)}</span></div>
        {img ? <img src={img} alt={`${site.name} website`} loading="lazy" /> :
          <div className="shot-placeholder"><strong>{site.name}</strong><span>{host(site.url)}</span></div>}
      </div>
      <div className="shot-meta">
        <div className="site-top"><span className="label">{label || site.type}</span>{site.status && <span className={"status-chip " + (site.status === "Live" ? "is-live" : "")}>{site.status}</span>}</div>
        <h3>{site.name}</h3>
        {site.short && <p>{site.short}</p>}
        {tags && tags.length > 0 && <div className="stack-tags">{tags.map(t => <span key={t}>{t}</span>)}</div>}
        <span className="project-link">{host(site.url)} ↗</span>
      </div>
    </a>
  );
}
