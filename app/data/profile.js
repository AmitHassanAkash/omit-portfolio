export const profile = {
  name: "Omit Hassan Akash",
  email: "omithassan.st@gmail.com",
  phone: "+880 1993-702709",
  location: "Uttara, Dhaka",
  positioning: "Marketing Technologist · Web Builder · SQA",
  hook: "From the first ad to the last bug.",
  summary: "5+ years in digital marketing: SEO, paid ads, content and campaigns. Then I started building the websites my campaigns needed, and testing them before launch. Today I lead marketing, build with AI, and ship work for businesses in Bangladesh.",
  links: [
    ["LinkedIn", "https://www.linkedin.com/in/omithassanone/"],
    ["Facebook — Talk with Akash", "https://www.facebook.com/talkakash"]
  ],
  stats: [
    ["5+", "Years in digital marketing"],
    ["40+", "Clients onboarded in 2024"],
    ["25%", "Average email open rate in a Chaldal campaign"],
    ["10%", "Sales uplift during seasonal email campaigns"]
  ],
  current: [
    {
      role: "Chief Marketing Officer",
      company: "MAP Technology and Services",
      period: "Present",
      url: "https://maptechnology.net",
      description: "Leading marketing for a technology and services company, and built its website."
    },
    {
      role: "Founder & CEO",
      company: "PandaStation-25",
      period: "Present",
      url: "https://pandastation-25.com",
      description: "Building a creative and digital agency focused on branding, content, paid media, SEO, websites, analytics and practical AI-enabled workflows."
    },
    {
      role: "Head of IT & Marketing",
      company: "Euro Bangla Apparel",
      period: "Present",
      url: "https://eurobangla-apparel.com",
      description: "Leading technology and marketing initiatives for an apparel and buying-house business, including building and launching its website."
    }
  ],
  experience: [
    {
      company: "Corporate Projukti Limited",
      role: "Digital Marketing Executive",
      period: "Jul 2025 — Jul 2026",
      bullets: [
        "Planned and executed digital marketing campaigns aligned with Microsoft-focused IT solutions.",
        "Managed social media content, client communication and promotional activities.",
        "Supported lead generation, paid advertising and brand visibility across multiple platforms.",
        "Collaborated with cross-functional teams to maintain consistent branding and campaign performance."
      ]
    },
    {
      company: "VortexUp Digital",
      role: "Co-Founder / Marketing Manager & Copywriter",
      period: "2024 — 2025",
      bullets: [
        "Onboarded 40+ clients across multiple industries with measurable growth.",
        "Developed and executed 360° digital campaigns across social, email and SEO.",
        "Crafted ad copy, blog content and landing pages.",
        "Led brand storytelling and content direction."
      ]
    },
    {
      company: "Sohoj Coding",
      role: "Marketing Manager & Specialist",
      period: "2022 — 2023",
      bullets: [
        "Developed brand identity, messaging and tone for aspiring developers, students and professionals.",
        "Created educational content for blogs, YouTube and social media, including coding tutorials, career advice and beginner-focused content."
      ]
    },
    {
      company: "Chaldal.com",
      role: "Marketing Executive",
      period: "2021 — 2022",
      bullets: [
        "Managed content for Chaldal's blog, social media and email newsletters around tips, deals and customer stories.",
        "Ran seasonal email promotions with an average 25% open rate and contributed to a 10% uplift in sales during campaign periods."
      ]
    }
  ],
  capabilities: [
    ["Digital Marketing & Growth", ["360° campaign planning", "Social media strategy & management", "Content strategy & brand messaging", "Conversion rate optimization", "Lead nurturing"]],
    ["SEO & Search", ["On-page SEO", "Off-page SEO", "Technical SEO", "Product SEO & listing optimization", "Google Search Console"]],
    ["Paid Advertising", ["Meta Ads", "Google Ads", "YouTube Ads", "Retargeting & remarketing", "Pixel & conversion tracking", "Audience segmentation", "Budget optimization"]],
    ["Email & Automation", ["Email marketing", "Marketing automation", "Lead nurturing", "Zapier", "Make"]],
    ["E-commerce", ["Shopify management", "WooCommerce management", "ROAS tracking", "Online-store funnel structure"]],
    ["Web & App Development (AI-assisted)", ["Next.js", "React", "Laravel / PHP", "Node.js", "React Native (Expo)", "WordPress", "Hostinger & Namecheap deployment", "bKash / Nagad payment flows", "E-commerce, company & agency websites"]],
    ["Software Quality Assurance", ["Manual testing", "Automation testing", "Bug identification", "Bug reporting to developers"]],
    ["AI Tools & Workflows", ["Claude", "ChatGPT", "Google Gemini & AI Studio", "Grok", "Prompt engineering", "AI-assisted website & app building", "AI content and creative workflows"]],
    ["Content & Creative", ["Copywriting", "Scriptwriting", "Storyboarding", "Short-form video strategy", "Premiere Pro", "After Effects", "Illustrator", "Canva"]],
    ["Analytics & Workflow", ["Google Analytics", "Google Search Console", "Meta Business Suite", "Google Ads Manager", "Trello", "Notion", "MS Office"]]
  ],
  education: [
    ["Green University of Bangladesh", "BSc in Computer Science and Engineering", "2022 — Present"],
    ["Uttara City College", "Higher Secondary Certificate (HSC)", "2020"]
  ],
  leadership: [
    ["PUNAB Debate Forum", "Organizing team — যুক্তিতে বিজয় | জাতীয় বিতর্ক উৎসব ২০২৬", "A national debate festival at ULAB on 18–20 December 2026: 32 university and 32 college teams, 96 adjudicators. Working on sponsorship and partnerships."],
    ["Motion & Rebuttal", "LinkedIn video series", "Short debate-format videos that argue both sides of a question in marketing, AI and technology, then give a verdict."],
    ["Talk with Akash", "Facebook page & content", "My own Bangla content page with reels and commentary on technology, business and society."]
  ],
  achievements: [
    "Champion — ATN Bangla Debate 2025",
    "Runner-Up — ATN Bangla Debate 2024",
    "Champion — ATN Bangla Debate 2023",
    "Champion — Technical Debate 2023",
    "Champion — Dhaka School of Economics Inter University Debate",
    "Champion — GUDC Intra 2024",
    "Runner-Up — Environment Debate 2024",
    "Runner-Up — GUDC Intra 2022",
    "Best Speaker — GUDC 2022"
  ]
};

// ---------------------------------------------------------------
// Work data. Only real, stated facts. To show a screenshot, drop an
// image at public/sites/<slug>.jpg — the card picks it up automatically.
// ---------------------------------------------------------------

export const pillars = [
  { key: "Grow", line: "Campaigns, SEO and Meta ads that bring real customers.", proof: [["Marketing & Ads", "/work#marketing"], ["40+ clients onboarded", "/case-studies"]] },
  { key: "Build", line: "Websites and products, built with AI, shipped live.", proof: [["5 live websites", "/work#web"], ["Products", "/work#products"]] },
  { key: "Test", line: "Manual and automation testing. Bugs found before customers find them.", proof: [["3 SQA projects", "/work#sqa"]] }
];

export const websites = [
  { slug: "livix", name: "Livix Furniture", url: "https://livixfurniture.com", type: "E-commerce", status: "Live", short: "Furniture store with local payments, order tracking and custom orders.", stack: ["Next.js", "Laravel"] },
  { slug: "eurobangla", name: "Euro Bangla Apparel", url: "https://www.eurobangla-apparel.com", type: "Company website", status: "Live", short: "Corporate site for an apparel and buying-house business.", stack: ["Laravel"] },
  { slug: "pandastation", name: "PandaStation-25", url: "https://pandastation-25.com", type: "Agency website", status: "Live", short: "Website for my own creative and digital agency.", stack: ["PHP"] },
  { slug: "hellouttara", name: "Hello Uttara", url: "https://hellouttara.com", type: "Pre-launch site", status: "Live", short: "Pre-launch page for my neighbourhood services platform in Uttara.", stack: [] },
  { slug: "maptechnology", name: "MAP Technology", url: "https://maptechnology.net", type: "Company website", status: "Live", short: "Website for MAP Technology and Services, where I am CMO.", stack: [] }
];

export const sqa = [
  { slug: "corposhop", name: "CorpoShop", url: "https://corposhop.com" },
  { slug: "techdistri", name: "TechDistri", url: "https://techdistri.com" },
  { slug: "projuktibd", name: "Projukti BD", url: "https://projukti-bd.com" }
];
export const sqaScope = ["Manual testing", "Automation testing", "Bug identification", "Direct reporting to developers"];

export const products = [
  { name: "SocialHub Pro", type: "SaaS platform", status: "Code complete", stack: ["Next.js 15", "Laravel 12", "PostgreSQL"], short: "Social media management, CRM and agency platform for Bangladesh, with AI content in Bangla and English." },
  { name: "BashaBari", type: "Mobile app", status: "In development", stack: ["React Native", "Node.js", "MongoDB"], short: "House-finding app for Bangladesh with Bengali support and real-time chat." },
  { name: "Debate Tab System", type: "Free platform", status: "Planned", stack: [], short: "Free debate tabulation for Bangladesh's debate circuit." }
];

export const marketingWork = [
  ["PANAM Institute of Bangladesh", "Education", "Marketing plan, daily content and Meta ads to Messenger and WhatsApp."],
  ["Sonargaon City", "Real estate", "Content plan, post design and Meta ads, including expatriate buyers."],
  ["Livix Furniture", "Furniture retail", "Facebook ad planning with video and image creatives."],
  ["PandaStation-25", "Agency", "Promo videos, content plan and daily social posts."],
  ["Al Noor Specialised Hospital", "Healthcare", "Grand-opening invitation, envelope and social posts."]
];

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://omit-portfolio.vercel.app"; // change here when you buy a domain

// PandaStation-25 client work. Images live in public/work/<slug>/01-04.webp
export const designWork = [
  { slug: "huukum", name: "Huukum", industry: "On-demand food app", type: "Ad campaign" },
  { slug: "layer3", name: "Layer3", industry: "Internet provider", type: "Social media" },
  { slug: "utrade", name: "Utrade", industry: "Online trading", type: "Social media" },
  { slug: "mubdi", name: "Mubdi Diners", industry: "Restaurant", type: "Social media" },
  { slug: "dhaka-revengers", name: "Dhaka Revengers", industry: "Music events", type: "Event campaign" },
  { slug: "noor-beauty-salon", name: "Noor Beauty Salon", industry: "Beauty & wellness", type: "Social media" },
  { slug: "tickifly", name: "TickiFly", industry: "Travel", type: "Branding" },
  { slug: "nazel", name: "Nazel", industry: "Luggage & packaging", type: "Branding" }
];
export const alsoWorkedWith = ["Bloom Bags BD", "Nazran Motors", "SubZone", "VX Services Ltd", "Akhi Motors", "Credium Group", "Easy Education", "Glotex", "InstaGopher"];
export const workCredit = "PandaStation-25 · Founder & Creative Lead";
