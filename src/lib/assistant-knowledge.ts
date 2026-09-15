export type AssistantAction = { label: string; href: string };

export type AssistantAnswer = {
  id: string;
  keywords: string[];
  text: string;
  actions?: AssistantAction[];
};

export const LINKS = {
  whatsapp:
    "https://wa.me/923191585468?text=Hello%20Ashknaz!%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  instagram: "https://www.instagram.com/naz_ashk?stkn=cXhuM3B0ejR2Y2c2",
  linkedin: "https://www.linkedin.com/in/ashk-naz-615479289",
  facebook: "https://www.facebook.com/share/15ASQaAeqB/",
  youtube: "https://youtube.com/@ashknaz_serwer?feature=shared",
  github: "https://github.com/ashknaz-developer",
  smartKhata: "https://github.com/ashknaz-developer/smart-innovation-khata",
  canva: "https://ashknazserwer777.my.canva.site/graphic-designing-",
  email: "mailto:nazashk630@gmail.com",
};

export const WELCOME_MESSAGE =
  "Assalam-o-Alaikum & Welcome! I am Ashknaz Serwer's Virtual AI Copilot. I can answer your questions about his Full-Stack Development, Mobile Apps, Agentic AI Systems, 10-Year Graphic Design Portfolio, or connect you directly with him on WhatsApp!";

export const SUGGESTION_CHIPS: Array<{ label: string; query: string }> = [
  { label: "💼 Services & Stack", query: "What services and tech stack does he offer?" },
  { label: "🚀 Smart Khata OS", query: "What is the Smart Innovation Khata project?" },
  { label: "🎨 Canva Design (10 Yrs)", query: "Tell me about his graphic design and Canva work" },
  { label: "💬 Direct WhatsApp Chat", query: "How can I hire Ashknaz or discuss a project?" },
  { label: "👨‍👩‍👧 Family Credit & FinTech", query: "Tell me about family credit and Raast fintech" },
  { label: "📍 Contact & Address", query: "What are his contact details and social links?" },
];

const HIRE_ACTIONS: AssistantAction[] = [
  { label: "💬 Chat on WhatsApp", href: LINKS.whatsapp },
  { label: "📧 Email", href: LINKS.email },
];

export const KNOWLEDGE: AssistantAnswer[] = [
  {
    id: "hire",
    keywords: [
      "hire",
      "hiring",
      "project",
      "freelance",
      "consult",
      "quote",
      "budget",
      "work with",
      "available",
      "collaborate",
    ],
    text: "You can hire Ashknaz directly for freelance projects, enterprise consulting, or full-time development. Click below to start a direct WhatsApp chat or send an email.",
    actions: HIRE_ACTIONS,
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "phone",
      "number",
      "email",
      "address",
      "location",
      "where",
      "social",
      "instagram",
      "linkedin",
      "facebook",
      "youtube",
      "github",
      "whatsapp",
      "lahore",
    ],
    text: "📍 **Location:** Youhanabad, Lahore, Pakistan\n📧 **Email:** nazashk630@gmail.com\n📞 **Phone/WhatsApp:** +92 319 1585468",
    actions: [
      { label: "💬 WhatsApp", href: LINKS.whatsapp },
      { label: "📸 Instagram", href: LINKS.instagram },
      { label: "🔗 LinkedIn", href: LINKS.linkedin },
      { label: "🐙 GitHub", href: LINKS.github },
      { label: "▶️ YouTube", href: LINKS.youtube },
      { label: "📘 Facebook", href: LINKS.facebook },
    ],
  },
  {
    id: "design",
    keywords: [
      "design",
      "designer",
      "canva",
      "graphic",
      "logo",
      "branding",
      "poster",
      "mockup",
      "illustration",
      "ui",
      "ux",
      "creative",
      "digiskills",
      "certificate",
      "certification",
      "talens",
      "nxtr",
    ],
    text: "Ashknaz has 10+ years of graphic design experience and holds certification from DigiSkills / Virtual University of Lahore (Certificate ID: M2XXGWJMK). Past roles: Senior Designer at Talens Institut and Junior Creative at NXTR Studio. He specializes in branding, animated cartoon illustrations, poster design, product mockups, minimal logos, and mobile UI/UX.",
    actions: [{ label: "🎨 Open Canva Portfolio", href: LINKS.canva }],
  },
  {
    id: "khata",
    keywords: [
      "khata",
      "smart innovation",
      "retail os",
      "ledger",
      "supermarket",
      "ecommerce",
      "e-commerce",
      "shop",
      "flagship",
      "22 module",
      "modules",
    ],
    text: "Smart Innovation Khata is an enterprise 22-module retail OS built with FastAPI, React Native, and PostgreSQL. It includes a bilingual AI Copilot, 10,000+ FMCG items, dual shopkeeper-customer sync, 3-way price intelligence (Shop vs Sarkari Nirkhnama vs Mandi), Family Credit Delegation, and Raast QR fintech settlement.",
    actions: [{ label: "🐙 GitHub Repository", href: LINKS.smartKhata }],
  },
  {
    id: "fintech",
    keywords: [
      "family credit",
      "credit",
      "delegation",
      "fintech",
      "raast",
      "qr",
      "payment",
      "state bank",
      "price intelligence",
      "mandi",
      "nirkhnama",
    ],
    text: "Family Credit Delegation lets a household head authorise family members to buy on credit with per-person limits and full audit trails. Settlement uses State Bank of Pakistan compliant Raast QR payments, and pricing is validated against a 3-way engine: Shop rate vs Sarkari Nirkhnama vs Mandi rate.",
    actions: [{ label: "🐙 Smart Khata on GitHub", href: LINKS.smartKhata }],
  },
  {
    id: "fullstack",
    keywords: [
      "full-stack",
      "fullstack",
      "backend",
      "web",
      "api",
      "fastapi",
      "python",
      "next",
      "react 19",
      "typescript",
      "sqlalchemy",
      "pydantic",
      "tailwind",
      "auth",
      "jwt",
      "oauth",
      "architecture",
    ],
    text: "Full-Stack & Web Architecture: Python 3.10+, FastAPI, Next.js, React 19, TypeScript, PostgreSQL, SQLAlchemy ORM, Pydantic V2 and Tailwind CSS. He builds high-concurrency RESTful APIs, clean layered 3-tier architectures, and JWT/OAuth2 authentication.",
  },
  {
    id: "mobile",
    keywords: [
      "mobile",
      "app",
      "android",
      "ios",
      "react native",
      "expo",
      "zustand",
      "navigation",
      "material design",
      "md3",
      "barcode",
      "camera",
      "voice",
      "urdu",
    ],
    text: "Mobile App Development: React Native with Expo SDK 54/57, TypeScript, Zustand, React Navigation 7 and Material Design 3. Cross-platform Android & iOS apps with hardware integration — camera barcode scanning, Expo AV voice recording, and Urdu speech synthesis.",
  },
  {
    id: "ai",
    keywords: [
      "ai",
      "artificial",
      "rag",
      "retrieval",
      "gemini",
      "llm",
      "nlp",
      "agent",
      "agentic",
      "copilot",
      "3d interactive",
      "inventory",
      "chatbot",
    ],
    text: "AI & 3D Interactive Systems: Database-First RAG (Retrieval-Augmented Generation), Gemini prompt architecture, a multi-token Urdu/English NLP parser, and a Voice-to-Inventory AI Hub for hands-free stock operations.",
  },
  {
    id: "marketing",
    keywords: [
      "marketing",
      "seo",
      "social media",
      "brand strategy",
      "campaign",
      "conversion",
      "audience",
      "growth",
      "viral",
      "ads",
    ],
    text: "Digital Marketing & Brand Strategy: conversion rate optimization, viral social media marketing, target audience positioning, and end-to-end visual campaign strategies.",
  },
  {
    id: "cloud",
    keywords: [
      "cloud",
      "devops",
      "docker",
      "database",
      "postgres",
      "postgresql",
      "ci/cd",
      "cicd",
      "linux",
      "server",
      "security",
      "cyber",
      "indexing",
      "acid",
      "deployment",
    ],
    text: "Cloud, DevOps & Database Engineering: PostgreSQL indexing, ACID transaction management, self-healing database schemas, Docker containerization, CI/CD pipelines, and Linux server administration.",
  },
  {
    id: "cad",
    keywords: ["autocad", "cad", "drafting", "architectural", "layout", "technical drawing", "modeling", "spatial"],
    text: "AutoCAD & 3D Drafting: precision technical drawings, architectural layouts, 3D modeling, and engineering drafting for construction and product work.",
  },
  {
    id: "video",
    keywords: ["video", "vfx", "editing", "motion", "animation", "showreel", "promo", "multimedia", "after effects"],
    text: "Video & VFX Multimedia: promotional video editing, animated visual effects, dynamic motion graphics, and commercial showreels.",
  },
  {
    id: "overview",
    keywords: [
      "who",
      "about",
      "overview",
      "profile",
      "experience",
      "summary",
      "background",
      "skills",
      "services",
      "stack",
      "expertise",
      "resume",
      "cv",
    ],
    text: "Ashknaz Serwer is an Elite Full-Stack AI Engineer, Systems Architect, and Certified Graphic Designer based in Youhanabad, Lahore, Pakistan. He bridges enterprise backend scalability with intuitive UI/UX design across 10 domains: full-stack web, mobile apps, AI & 3D interactive, digital marketing, UI/UX & Canva design, cloud & DevOps, e-commerce retail OS, AutoCAD drafting, and video & VFX.",
    actions: [{ label: "💬 Chat on WhatsApp", href: LINKS.whatsapp }],
  },
];

const GREETING = /^(hi|hello|hey|salam|assalam|assalam-o-alaikum|aoa|good (morning|evening|afternoon))\b/i;

export function answerQuestion(input: string): { text: string; actions?: AssistantAction[] } {
  const q = input.toLowerCase().trim();
  if (!q) {
    return { text: "Please type a question about Ashknaz's work, stack, design portfolio or contact details." };
  }
  if (GREETING.test(q)) {
    return {
      text: "Assalam-o-Alaikum! How can I help? Ask me about full-stack development, mobile apps, AI systems, the Smart Khata retail OS, 10 years of Canva design work, or contact details.",
    };
  }

  let best: AssistantAnswer | undefined;
  let bestScore = 0;
  for (const entry of KNOWLEDGE) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (q.includes(keyword)) score += keyword.includes(" ") ? 3 : keyword.length > 4 ? 2 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  if (best && bestScore > 0) {
    return { text: best.text, ...(best.actions ? { actions: best.actions } : {}) };
  }

  return {
    text: "I couldn't match that exactly. I can cover: full-stack & web architecture, mobile apps, AI & RAG systems, digital marketing, UI/UX & Canva design (10+ years), cloud & DevOps, the Smart Khata retail OS, AutoCAD drafting, and video & VFX. Or reach Ashknaz directly:",
    actions: HIRE_ACTIONS,
  };
}
