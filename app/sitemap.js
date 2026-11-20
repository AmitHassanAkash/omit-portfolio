import { SITE_URL } from "./data/profile";
const routes = ["", "/about", "/experience", "/services", "/work", "/case-studies", "/pandastation-25", "/entrepreneurship", "/achievements", "/contact"];
export default function sitemap() {
  return routes.map(r => ({ url: SITE_URL + r, lastModified: new Date(), changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
