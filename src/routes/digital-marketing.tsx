import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/digital-marketing")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Digital Marketing & Growth Engine | Ashknaz Serwer" },
      { name: "description", content: "SEO and analytics engineering, paid performance media, and precision funnel architecture that scales revenue deterministically." },
      { property: "og:title", content: "Digital Marketing & Growth Engine | Ashknaz Serwer" },
      { property: "og:description", content: "SEO and analytics engineering, paid performance media, and precision funnel architecture that scales revenue deterministically." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={5}>
      <div className="flex flex-col w-full">
      {/* Radial Ambient Atmospheric Glows */}
      <div className="relative w-full max-w-7xl mx-auto px-gutter-md md:px-gutter-xl pt-6 pb-20 overflow-hidden">
      <div className="absolute top-12 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary-container/10 via-secondary-container/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-primary-container/8 via-primary-fixed-dim/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      {/* SECTION 1: Slide Title & Deck Metadata */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md mb-12">
      <div className="flex flex-col gap-2">
      <div className="flex items-center gap-gutter-sm">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-fixed-dim font-label-badge text-label-badge uppercase tracking-[0.08em] shadow-[0_0_12px_rgba(0,242,170,0.15)]">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                  Slide 05 / 06 • Growth &amp; Portfolio
                </span>
      <span className="font-label-badge text-label-badge text-outline uppercase tracking-[0.08em]">Ashknaz Serwer Executive Deck</span>
      </div>
      <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                Digital Marketing &amp; <span className="text-primary-container">Growth Engine</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Surgical acquisition architecture, technical performance loops, and precision funnel engineering that scale revenue deterministically.
              </p>
      </div>
      {/* Quick Action Deck Pill */}
      <div className="flex items-center gap-gutter-sm shrink-0">
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-container-highest transition-all shadow-md font-label-lg text-label-lg" download="" href="#">
      <span className="material-symbols-outlined text-[18px] text-primary-container">file_download</span>
                Download Executive Deck
              </a>
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_24px_-4px_rgba(0,242,170,0.4)] hover:shadow-[0_0_36px_0px_rgba(0,242,170,0.6)] transition-all" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
      <span>Let's Build Together</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* UPPER SECTION: Split View (Growth Pillars vs Interactive Dashboard Mockup) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch mb-20">
      {/* Left 3 Pillar Cards (6 cols) */}
      <div className="lg:col-span-6 flex flex-col gap-gutter-md justify-between">
      {/* Pillar 01 */}
      <div className="group relative rounded-xl bg-surface-container-low p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-gutter-md">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-high text-primary-container shrink-0 shadow-inner group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[24px]">query_stats</span>
      </div>
      <div className="flex flex-col flex-1 min-w-0">
      <div className="flex items-center justify-between gap-2 mb-1">
      <div className="flex items-center gap-2">
      <span className="font-label-badge text-label-badge text-primary-fixed-dim bg-primary-container/10 px-2 py-0.5 rounded">01</span>
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">SEO &amp; Data Analytics Engine</h3>
      </div>
      <span className="font-label-badge text-label-badge text-secondary font-semibold">+312% YoY</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-3">
                      In-depth programmatic keyword targeting, high-velocity Core Web Vitals remediation, schema graphs, and bespoke multi-touch attribution models.
                    </p>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-badge text-label-badge">SERP Clustering</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-badge text-label-badge">Technical Crawl Audits</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-badge text-label-badge">GA4 / Looker Pipelines</span>
      </div>
      </div>
      </div>
      </div>
      {/* Pillar 02 */}
      <div className="group relative rounded-xl bg-surface-container-low p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-gutter-md">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-high text-secondary shrink-0 shadow-inner group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[24px]">ads_click</span>
      </div>
      <div className="flex flex-col flex-1 min-w-0">
      <div className="flex items-center justify-between gap-2 mb-1">
      <div className="flex items-center gap-2">
      <span className="font-label-badge text-label-badge text-secondary bg-secondary-container/15 px-2 py-0.5 rounded">02</span>
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">Paid Ads &amp; Performance Marketing</h3>
      </div>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim font-semibold">4.8x Blended ROAS</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-3">
                      High-ROI Meta Ads infrastructure, TikTok UGC performance scaling, and Google Search/PMax bidding strategies tuned with custom conversion APIs.
                    </p>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-badge text-label-badge">Custom CAPI Engines</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-badge text-label-badge">LTV/CAC Algorithmic Bidding</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-badge text-label-badge">Creative Iteration Loops</span>
      </div>
      </div>
      </div>
      </div>
      {/* Pillar 03 */}
      <div className="group relative rounded-xl bg-surface-container-low p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-gutter-md">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface-container-high text-tertiary-container shrink-0 shadow-inner group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[24px]">shopping_cart_checkout</span>
      </div>
      <div className="flex flex-col flex-1 min-w-0">
      <div className="flex items-center justify-between gap-2 mb-1">
      <div className="flex items-center gap-2">
      <span className="font-label-badge text-label-badge text-tertiary-fixed-dim bg-tertiary-container/15 px-2 py-0.5 rounded">03</span>
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">E-Commerce Conversion Rate Optimization</h3>
      </div>
      <span className="font-label-badge text-label-badge text-tertiary-fixed-dim font-semibold">+45% Checkout Lift</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-3">
                      Liquid theme tuning, headless Shopify architecture, micro-friction reduction across 1-click checkouts, and behavioral retention flows.
                    </p>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-badge text-label-badge">Headless Shopify Plus</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-badge text-label-badge">Cart Friction Audit</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-badge text-label-badge">Klaviyo Retention SMS</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right 6 Cols: Interactive Analytics Dashboard Mockup */}
      <div className="lg:col-span-6 rounded-2xl bg-surface-container-low p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
      {/* Atmospheric Top Highlight Line */}
      <div className="absolute -top-24 right-0 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
      {/* Dashboard Header */}
      <div className="flex items-center justify-between pb-6 mb-6">
      <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-error"></div>
      <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
      <div className="w-3 h-3 rounded-full bg-primary-container"></div>
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant ml-2">Console • Live Revenue &amp; ROAS Feed</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge font-semibold">Q3 Aggregated Metrics</span>
      </div>
      </div>
      {/* Metric KPI Cards Matrix */}
      <div className="grid grid-cols-3 gap-3 mb-6">
      <div className="rounded-xl bg-surface-container-high p-4 flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant mb-1">Total Pipeline Rev</span>
      <span className="font-metric-display text-metric-display text-primary-container leading-none font-bold">$1.84M</span>
      <div className="flex items-center gap-1 mt-2 text-primary-fixed-dim font-label-badge text-label-badge">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
      <span>+68.4% vs prev</span>
      </div>
      </div>
      <div className="rounded-xl bg-surface-container-high p-4 flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant mb-1">Blended ROAS</span>
      <span className="font-metric-display text-metric-display text-secondary leading-none font-bold">5.2x</span>
      <div className="flex items-center gap-1 mt-2 text-secondary-fixed-dim font-label-badge text-label-badge">
      <span className="material-symbols-outlined text-[14px]">verified</span>
      <span>Meta &amp; Google PPC</span>
      </div>
      </div>
      <div className="rounded-xl bg-surface-container-high p-4 flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant mb-1">Click-Through (CTR)</span>
      <span className="font-metric-display text-metric-display text-on-surface leading-none font-bold">4.82%</span>
      <div className="flex items-center gap-1 mt-2 text-primary-fixed-dim font-label-badge text-label-badge">
      <span className="material-symbols-outlined text-[14px]">touch_app</span>
      <span>Top decile niche</span>
      </div>
      </div>
      </div>
      {/* Rising Graph Visualization (Inline High-Performance SVG) */}
      <div className="rounded-xl bg-surface-container p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,242,170,0.8)]"></span>
      <span className="font-label-md text-label-md font-semibold text-on-surface">Revenue Velocity vs Paid Media Spend</span>
      </div>
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Weekly Interval</span>
      </div>
      {/* SVG Chart with Grid & Area Fill */}
      <div className="w-full h-44 relative">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 160">
      <defs>
      <lineargradient id="primaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#00F2AA" stopOpacity="0.32" />
      <stop offset="90%" stopColor="#00F2AA" stopOpacity="0.0" />
      </lineargradient>
      <lineargradient id="secondaryLineGrad" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stopColor="#7BD0FF" />
      <stop offset="100%" stopColor="#00F2AA" />
      </lineargradient>
      </defs>
      {/* Horizontal Guideline Tracks */}
      <line stroke="#2F3541" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="540" y1="20" y2="20" />
      <line stroke="#2F3541" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="540" y1="65" y2="65" />
      <line stroke="#2F3541" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="540" y1="110" y2="110" />
      <line stroke="#2F3541" strokeWidth="1" x1="0" x2="540" y1="150" y2="150" />
      {/* Lower Secondary Line (Cost Basis) */}
      <path d="M0,135 Q90,130 180,122 T360,95 T540,78" fill="none" stroke="#7BD0FF" strokeOpacity="0.5" strokeWidth="2" />
      {/* Revenue Filled Area & Upper Spline Curve */}
      <path d="M0,140 Q80,125 150,95 T300,60 T420,38 T540,14 L540,150 L0,150 Z" fill="url(#primaryAreaGrad)" />
      <path d="M0,140 Q80,125 150,95 T300,60 T420,38 T540,14" fill="none" stroke="url(#secondaryLineGrad)" strokeLinecap="round" strokeWidth="3.5" />
      {/* Data Indicator Nodes */}
      <circle cx="150" cy="95" fill="#0D131F" r="4" stroke="#00F2AA" strokeWidth="2" />
      <circle cx="300" cy="60" fill="#0D131F" r="4" stroke="#00F2AA" strokeWidth="2" />
      <circle cx="420" cy="38" fill="#0D131F" r="4" stroke="#00F2AA" strokeWidth="2" />
      <circle className="animate-ping" cx="540" cy="14" fill="#00F2AA" opacity="0.6" r="6" />
      <circle cx="540" cy="14" fill="#00F2AA" r="5" />
      </svg>
      </div>
      {/* Bottom Axis Legend */}
      <div className="flex items-center justify-between text-on-surface-variant font-label-badge text-label-badge pt-2">
      <span>Week 01 (Campaign Kickoff)</span>
      <span>Week 04</span>
      <span>Week 08</span>
      <span className="text-primary-container font-bold">Week 12 (Target Surpassed)</span>
      </div>
      </div>
      {/* Dashboard Micro-Footer Status */}
      <div className="mt-5 pt-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px] text-primary-container">bolt</span>
      <span className="font-body-sm text-body-sm text-on-surface font-semibold">Active Pipeline: Meta Ads CAPI + Google Performance Max</span>
      </div>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim bg-primary-container/10 px-2.5 py-1 rounded-full">
                  Real-Time Tracking 99.8% Sync
                </span>
      </div>
      </div>
      </div>
      {/* LOWER SECTION: Featured Real Project Case Studies */}
      <div className="flex flex-col gap-gutter-md">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-sm pb-2">
      <div>
      <span className="font-label-badge text-label-badge text-primary-container uppercase tracking-[0.08em]">Demonstrated Proven Impact</span>
      <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                  Featured Case Studies &amp; Architectures
                </h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Deep enterprise case studies mirroring Ashknaz Serwer's verified engineering, AI development, and commercial e-commerce execution.
              </p>
      </div>
      {/* 3 Case Study Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
      {/* Case Study 01: AI Chatbot with RAG */}
      <div className="rounded-2xl bg-surface-container-low p-6 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_36px_-6px_rgba(0,242,170,0.25)] transition-all duration-300">
      <div className="flex flex-col">
      {/* Mockup Photo Window */}
      <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative bg-surface-container-high">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Futuristic dark-mode user interface of an enterprise AI Chatbot with RAG retrieval vector database nodes, clean glowing cyan neon lines, neural network connections, high contrast deep midnight navy background, sleek minimal technical dashboard display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjgzV_9sYyoF54Lzc-wieiETSDNJPMPkjWmNeJov0zbtp5mcqOhcH8aUS2LuPjx98wsACH5nYWMh0I9kLXACnaxvnk8tU16kaPo5-cq34IYDjE6Geaap_ajYAqVC8vApNMP9oTZhmVJ-lFeb9BUPtzNCb0jUYkxMVyEyIAFOdhRI4UmTp2A2e3szNv0sbdFtoTKuN2C8AmhsW5Ssd4jI7-k1IYDYErtUJov0WQI23bAAv9Z0Uxybd" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-dim/80 backdrop-blur-md text-primary font-label-badge text-label-badge uppercase font-bold tracking-wider">
                      Case Study #01 • AI Engine
                    </div>
      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/85 backdrop-blur-sm text-on-surface text-label-badge font-mono">
                      Latency &lt; 240ms
                    </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
      <span className="px-2 py-0.5 rounded bg-primary-container/15 text-primary-fixed-dim font-label-badge text-label-badge font-semibold uppercase">Python / FastAPI</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-badge text-label-badge font-semibold uppercase">FAISS / OpenAI</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                    Enterprise AI Chatbot with RAG Architecture
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Engineered a context-aware document intelligence system ingesting 100K+ enterprise knowledge bases via FAISS vector clustering and OpenAI embeddings. Delivered exact-source multi-turn query handling with hallucination mitigation guardrails.
                  </p>
      </div>
      <div className="pt-4 bg-surface-container/60 -mx-6 -mb-6 p-6 rounded-b-2xl">
      <div className="flex items-center justify-between">
      <div className="flex flex-col">
      <span className="font-label-badge text-label-badge text-outline uppercase">Retrieval Accuracy</span>
      <span className="font-headline-sm text-headline-sm font-bold text-primary">99.4% Validated</span>
      </div>
      <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors shadow-md" href="#">
      <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
      </a>
      </div>
      </div>
      </div>
      {/* Case Study 02: Care Companion & E-Commerce Platform */}
      <div className="rounded-2xl bg-surface-container-low p-6 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_36px_-6px_rgba(0,166,224,0.25)] transition-all duration-300">
      <div className="flex flex-col">
      {/* Mockup Photo Window */}
      <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative bg-surface-container-high">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Care companion healthcare mobile app mockup and e-commerce shopping experience display, glowing cyan and mint UI accents, responsive device display showing patient monitoring metrics and streamlined health product checkout on dark slate backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsN7gu5RKAU3Ocx_gYdi1HMH_mBYQbr4juVWX49FHw3TOtNMjYqSb0PQwiteLjHHGwI009ckKPJFvsMLAjprd0euyibS53r0uLBuGiCSLs4ahzh08HNTtQhFaEY4SC62e4ccufoCajMbT1SfxrHt2y2OyRPh2-nCVuiEP5Edlj0QRNtaqDVuK7RRRJ_x0fzJlBtX3fXdchI-WNcI-qNRuB1Jcud8zvHmQvjMMrfAcRMskqHLheYpJk" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-dim/80 backdrop-blur-md text-secondary font-label-badge text-label-badge uppercase font-bold tracking-wider">
                      Case Study #02 • E-Commerce
                    </div>
      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/85 backdrop-blur-sm text-secondary-fixed-dim text-label-badge font-mono">
                      +45% Conversion Lift
                    </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
      <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-badge text-label-badge font-semibold uppercase">Shopify Plus</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-badge text-label-badge font-semibold uppercase">Next.js / Custom Cart</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors">
                    Care Companion &amp; High-Conversion Store
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Complete rebuild of patient companion onboarding and integrated medical wellness store. Eliminated checkout bottlenecks, introduced subscription reordering algorithms, and unlocked a 3x surge in monthly recurring basket transactions.
                  </p>
      </div>
      <div className="pt-4 bg-surface-container/60 -mx-6 -mb-6 p-6 rounded-b-2xl">
      <div className="flex items-center justify-between">
      <div className="flex flex-col">
      <span className="font-label-badge text-label-badge text-outline uppercase">Customer Engagement</span>
      <span className="font-headline-sm text-headline-sm font-bold text-secondary">3x Retention Boost</span>
      </div>
      <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:bg-secondary group-hover:text-on-secondary transition-colors shadow-md" href="#">
      <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
      </a>
      </div>
      </div>
      </div>
      {/* Case Study 03: Brand Identity & Video Production (Packages Mall / Corporate) */}
      <div className="rounded-2xl bg-surface-container-low p-6 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_36px_-6px_rgba(48,241,174,0.25)] transition-all duration-300">
      <div className="flex flex-col">
      {/* Mockup Photo Window */}
      <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative bg-surface-container-high">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Premium brand identity style guide and cinematic video production suite showcase, typography specimen cards, 3D motion graphics rendering in Premiere Pro and After Effects timeline, high-end commercial advertising aesthetic with emerald and teal highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPrn691IsemakKkFpzPPQTrlb7yUJiMPLLQYi22ICyWRhB1jJ-FVOnzHwWRYikst_LlmSwTuGva5drItNrdkkGSLV6Yz9cTJyDzkIrvCFcw3H7A1Oakw7gEafqbbxxBojIHESB5fDiYn3RNVpFxApgeKN-fuKqCzY2air9qYnQP9H3d5jOL02nV89-ZHXenSeoxjSvgSaECP9qSROktQg-5iI99lGKP6peWKywNLjjXFoo4NYTmCGn" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-dim/80 backdrop-blur-md text-tertiary-fixed-dim font-label-badge text-label-badge uppercase font-bold tracking-wider">
                      Case Study #03 • Creative
                    </div>
      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/85 backdrop-blur-sm text-tertiary-fixed-dim text-label-badge font-mono">
                      12M+ Organic Views
                    </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
      <span className="px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary-fixed-dim font-label-badge text-label-badge font-semibold uppercase">After Effects</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-badge text-label-badge font-semibold uppercase">Figma Design System</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2 group-hover:text-tertiary-container transition-colors">
                    Brand Identity &amp; Cinematic Production Kit
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Directed and produced end-to-end commercial brand assets, video launch trailers, and dynamic social content engines for high-footfall retail and tech clients including Packages Mall omnichannel promo campaigns.
                  </p>
      </div>
      <div className="pt-4 bg-surface-container/60 -mx-6 -mb-6 p-6 rounded-b-2xl">
      <div className="flex items-center justify-between">
      <div className="flex flex-col">
      <span className="font-label-badge text-label-badge text-outline uppercase">Omnichannel Reach</span>
      <span className="font-headline-sm text-headline-sm font-bold text-tertiary">4.9/5 Brand Score</span>
      </div>
      <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:bg-tertiary-container group-hover:text-on-tertiary transition-colors shadow-md" href="#">
      <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* LOWER SECTION CALL-TO-ACTION BANNER */}
      <div className="mt-16 rounded-2xl bg-surface-container-low p-8 md:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-gutter-lg relative z-10">
      <div className="flex flex-col max-w-2xl text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary-fixed-dim">Next Phase Deployment Ready</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-2">
                  Have a project requiring <span className="text-primary-container">algorithmic scale</span> or technical execution?
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  From technical RAG AI agents to omni-channel acquisition architectures, let's architect a solution that generates tangible enterprise value.
                </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-gutter-sm shrink-0 w-full sm:w-auto">
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-on-surface hover:text-primary transition-all font-label-lg text-label-lg font-semibold shadow-md" download="" href="#">
      <span className="material-symbols-outlined text-[20px] text-primary-container">description</span>
                  Download Executive Deck
                </a>
      <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_28px_rgba(0,242,170,0.4)] hover:shadow-[0_0_40px_rgba(0,242,170,0.65)] hover:-translate-y-0.5 transition-all" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
      <span>Let's Build Together</span>
      <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
    </DeckLayout>
  );
}
