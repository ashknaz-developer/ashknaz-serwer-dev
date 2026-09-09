import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/full-stack-web")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Custom Web & Enterprise Development | Ashknaz Serwer" },
      { name: "description", content: "Bespoke web architectures, full-stack engineering, and performance/SEO tuning built for hyperscale demand and strict SLA guarantees." },
      { property: "og:title", content: "Custom Web & Enterprise Development | Ashknaz Serwer" },
      { property: "og:description", content: "Bespoke web architectures, full-stack engineering, and performance/SEO tuning built for hyperscale demand and strict SLA guarantees." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={2}>
      <div className="flex flex-col w-full">
      <div className="max-w-7xl mx-auto w-full px-gutter-md md:px-gutter-xl flex flex-col gap-gutter-2xl py-8">
      <div className="relative overflow-hidden rounded-xl bg-surface-container p-gutter-lg md:p-gutter-2xl shadow-xl flex flex-col gap-gutter-xl">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-container/5 blur-3xl pointer-events-none"></div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
      <div className="flex flex-col gap-2 max-w-3xl">
      <div className="flex items-center gap-gutter-sm">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-[0.08em]">
                    SLIDE 02 / 06 • CORE CAPABILITY
                  </span>
      <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,242,170,0.8)]"></span>
      </div>
      <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                  Custom Web &amp; Enterprise Development
                </h1>
      <p className="font-body-lg text-body-lg text-primary-fixed-dim font-medium">
                  Transform Your Vision into Scalable Reality
                </p>
      </div>
      <div className="hidden lg:flex items-center gap-3 bg-surface-container-low px-4 py-2 rounded-lg">
      <span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
      <span className="font-label-md text-label-md text-on-surface-variant">Lighthouse Target: <strong className="text-primary font-bold">98-100</strong> across all metrics</span>
      </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
      <div className="lg:col-span-6 flex flex-col gap-gutter-md">
      <div className="group relative rounded-xl bg-surface-container-low p-gutter-lg transition-all duration-300 hover:bg-surface-container-high hover:shadow-[0_0_24px_-8px_rgba(0,242,170,0.3)]">
      <div className="flex items-start gap-gutter-md">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-highest text-primary font-display-xl-mobile text-headline-sm font-extrabold shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                      01
                    </div>
      <div className="flex flex-col gap-1 min-w-0">
      <div className="flex items-center justify-between">
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                          Bespoke Web Architectures
                        </h3>
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">hub</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Tailored, scalable web apps built with high security, zero bloat, and blazing execution speed engineered to withstand hyperscale demand.
                      </p>
      </div>
      </div>
      </div>
      <div className="group relative rounded-xl bg-surface-container-low p-gutter-lg transition-all duration-300 hover:bg-surface-container-high hover:shadow-[0_0_24px_-8px_rgba(0,242,170,0.3)]">
      <div className="flex items-start gap-gutter-md">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-highest text-primary font-display-xl-mobile text-headline-sm font-extrabold shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                      02
                    </div>
      <div className="flex flex-col gap-1 min-w-0">
      <div className="flex items-center justify-between">
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                          Scalable Full-Stack Engineering
                        </h3>
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">terminal</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Event-driven API integrations, Python FastAPI, Node.js distributed backends, and robust normalized database schemas built for strict SLA guarantees.
                      </p>
      </div>
      </div>
      </div>
      <div className="group relative rounded-xl bg-surface-container-low p-gutter-lg transition-all duration-300 hover:bg-surface-container-high hover:shadow-[0_0_24px_-8px_rgba(0,242,170,0.3)]">
      <div className="flex items-start gap-gutter-md">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-highest text-primary font-display-xl-mobile text-headline-sm font-extrabold shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                      03
                    </div>
      <div className="flex flex-col gap-1 min-w-0">
      <div className="flex items-center justify-between">
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                          Performance &amp; SEO Engineered
                        </h3>
      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">speed</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        High Lighthouse score optimization, ultra-responsive fluid layouts, sub-millisecond Core Web Vitals, and programmatic search-engine-ready semantics.
                      </p>
      </div>
      </div>
      </div>
      </div>
      <div className="lg:col-span-6 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="w-full bg-surface-container-lowest rounded-t-xl px-4 py-2.5 flex items-center justify-between shadow-lg border-t border-x border-surface-container-highest/60">
      <div className="flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-full bg-error/70"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed/50"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-primary-container/80"></div>
      </div>
      <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[14px] text-primary">lock</span>
      <span className="font-label-md text-label-md text-on-surface-variant">enterprise.app/console/v3</span>
      </div>
      <div className="flex items-center gap-1.5 text-on-surface-variant">
      <span className="material-symbols-outlined text-[16px]">refresh</span>
      <span className="material-symbols-outlined text-[16px]">dashboard_customize</span>
      </div>
      </div>
      <div className="w-full bg-surface-container-low aspect-[16/10] overflow-hidden relative flex flex-col shadow-2xl border-x border-surface-container-highest/60">
      <img className="w-full h-full object-cover" data-alt="Realistic high-tech enterprise web platform dashboard running on a high-resolution dark mode screen. Displays complex real-time telemetry metrics, interactive code editor panels with syntax highlighting in cyan and mint, streaming API endpoint logs, and data analytics charts in deep navy, dark slate, and glowing mint hues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuqz3lq0k5KWXIyaLr6eOoLxUpiybSPnmSolk4AgFRYL7-ruO8GrGF12IlIW076VekQhS0NUYDba-9G45XM-Io6XvRZYacBChL71Mp84R9Y4R3wVOadnOfIfdwTCw6-Cwjumr82nKA_N78Q9zlmkyijwHFMlVG8TWtTYlH64c4fdSvN4bJyGtLh7CTrK2qYz--rxmxKIWsQ640jL8Cf6qbBt7MLA4RAlpuGR9H-PsL6psOOyo3xfYM" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,242,170,1)] animate-ping"></div>
      <span className="font-label-md text-label-md text-on-surface font-semibold">Production Cluster Active</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-badge text-label-badge">REST + GraphQL</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary-fixed-dim font-label-badge text-label-badge">FastAPI v0.110</span>
      </div>
      </div>
      </div>
      <div className="w-[108%] h-4 bg-surface-container-highest rounded-b-xl shadow-2xl flex items-center justify-center relative -mt-0.5">
      <div className="w-16 h-1 rounded-full bg-surface-bright"></div>
      </div>
      <div className="w-[30%] h-1 bg-surface-container-high rounded-b-lg -mt-0.5 opacity-60"></div>
      </div>
      </div>
      </div>
      </div>
      <div className="rounded-xl bg-surface-container p-gutter-lg md:p-gutter-2xl flex flex-col gap-gutter-lg shadow-xl border border-surface-container-high/60">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-gutter-sm">
      <div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[20px]">layers</span>
      <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-primary">TECH ARCHITECTURE</span>
      </div>
      <h2 className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
                  Frameworks &amp; Technologies
                </h2>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">Production-Tested Standards • Cloud Native</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-gutter-md">
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">code</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">React.js</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">Frontend Core</span>
      </div>
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">forward</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">Next.js</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">SSR / Edge App</span>
      </div>
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">memory</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">Node.js</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">Asynchronous I/O</span>
      </div>
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">terminal</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">Python / FastAPI</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">High-Perf Microservices</span>
      </div>
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">database</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">PostgreSQL</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">Relational Relational</span>
      </div>
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">css</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">TailwindCSS</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">Design Systems</span>
      </div>
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">web</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">WordPress / PHP</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">Headless &amp; Custom</span>
      </div>
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">schema</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">GraphQL</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">Unified Data Layer</span>
      </div>
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">deployed_code</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">Docker</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">Containerization</span>
      </div>
      <div className="group flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_0_20px_-4px_rgba(0,242,170,0.3)]">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-primary text-[26px]">commit</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">Git / GitHub</span>
      <span className="font-label-badge text-label-badge text-outline group-hover:text-on-surface-variant transition-colors">CI/CD Automation</span>
      </div>
      </div>
      <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-gutter-md p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high/40">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[18px]">verified</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                  All deployments feature strict automated security audits, automated Docker pipelines, and end-to-end integration tests.
                </p>
      </div>
      <a className="shrink-0 px-4 py-2 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all flex items-center gap-1.5" href="/ecommerce">
      <span>Explore Architecture Specs</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* FEATURED PROJECT CASE STUDY SHOWCASE */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-surface-container via-surface-container to-surface-container-low p-gutter-lg md:p-gutter-2xl shadow-2xl border border-surface-container-high/70 flex flex-col gap-gutter-xl">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-container/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-secondary-container/5 blur-3xl pointer-events-none"></div>
      {/* Showcase Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter-md border-b border-surface-container-highest/60 pb-6">
      <div className="flex flex-col gap-2 max-w-3xl">
      <div className="flex items-center gap-2">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary-container/15 text-primary font-label-badge text-label-badge uppercase tracking-[0.1em] border border-primary-container/20">
              DEMONSTRATED PROJECT CASE STUDY • FULL-STACK &amp; WEB
            </span>
      <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,242,170,0.8)]"></span>
      </div>
      <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
            Enterprise Cloud Management &amp; B2B Portal
          </h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
            High-throughput multi-tenant infrastructure command center handling millions of daily real-time telemetry events.
          </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
      <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md border border-surface-container-high flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            Live In Production
          </span>
      <a className="px-4 py-2 rounded-lg bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-all font-label-md text-label-md flex items-center gap-1.5" href="#">
      <span>Read Technical Whitepaper</span>
      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
      </a>
      </div>
      </div>
      {/* Dual Device Mockups & Project Details Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter-xl items-center">
      {/* Left Side: Dual Device Mockups (Laptop + Smartphone) */}
      <div className="xl:col-span-7 flex flex-col items-center justify-center relative py-4">
      {/* Ambient glow behind mockups */}
      <div className="absolute inset-0 bg-primary-container/5 rounded-full filter blur-3xl pointer-events-none scale-75"></div>
      <div className="relative w-full max-w-2xl flex items-end justify-center">
      {/* Laptop Mockup */}
      <div className="w-full max-w-[480px] md:max-w-[530px] flex flex-col items-center drop-shadow-2xl z-10">
      {/* Screen Shell */}
      <div className="w-full bg-[#111622] rounded-t-xl p-2.5 sm:p-3 border-t border-x border-surface-bright/40 shadow-2xl">
      {/* Laptop Camera & Mic Bezel */}
      <div className="w-full flex items-center justify-center pb-2">
      <div className="w-2 h-2 rounded-full bg-surface-bright/80 flex items-center justify-center">
      <div className="w-1 h-1 rounded-full bg-secondary/80"></div>
      </div>
      </div>
      {/* Screen Display Area */}
      <div className="w-full bg-surface-container-lowest rounded-lg overflow-hidden border border-surface-container-highest/60 flex flex-col">
      {/* App Browser Top Bar */}
      <div className="bg-surface-container-low px-3 py-1.5 flex items-center justify-between border-b border-surface-container-highest/40">
      <div className="flex items-center gap-1.5">
      <div className="w-2 h-2 rounded-full bg-error/80"></div>
      <div className="w-2 h-2 rounded-full bg-secondary-fixed/60"></div>
      <div className="w-2 h-2 rounded-full bg-primary-container/90"></div>
      </div>
      <div className="flex items-center gap-1 px-3 py-0.5 rounded bg-surface-container-lowest text-[10px] text-on-surface-variant font-mono">
      <span className="text-primary text-[11px] material-symbols-outlined">shield_lock</span>
      <span>cloud.nexus-enterprise.io/ops</span>
      </div>
      <div className="flex items-center gap-1.5 text-on-surface-variant">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
      <span className="text-[9px] font-bold text-primary tracking-wider uppercase">99.99%</span>
      </div>
      </div>
      {/* Dashboard SaaS Content Simulation */}
      <div className="p-3 sm:p-4 bg-surface-container-lowest flex flex-col gap-2.5">
      {/* Top bar metrics */}
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded bg-primary-container/20 text-primary flex items-center justify-center font-bold text-xs">NX</div>
      <span className="text-xs font-bold text-on-surface">Nexus Ops Cloud Engine</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-mono font-medium">Cluster US-East-1</span>
      </div>
      {/* Metric stat boxes */}
      <div className="grid grid-cols-3 gap-2">
      <div className="p-2 rounded bg-surface-container-low/70 border border-surface-container-highest/40 flex flex-col">
      <span className="text-[9px] text-on-surface-variant uppercase font-medium">Throughput</span>
      <span className="text-sm font-bold text-primary font-mono mt-0.5">4.8M req/s</span>
      <span className="text-[8px] text-primary-fixed-dim">↑ 18.4% vs last w</span>
      </div>
      <div className="p-2 rounded bg-surface-container-low/70 border border-surface-container-highest/40 flex flex-col">
      <span className="text-[9px] text-on-surface-variant uppercase font-medium">Avg Latency</span>
      <span className="text-sm font-bold text-secondary font-mono mt-0.5">64ms</span>
      <span className="text-[8px] text-secondary-fixed-dim">Global CDN Edge</span>
      </div>
      <div className="p-2 rounded bg-surface-container-low/70 border border-surface-container-highest/40 flex flex-col">
      <span className="text-[9px] text-on-surface-variant uppercase font-medium">Nodes Health</span>
      <span className="text-sm font-bold text-on-surface font-mono mt-0.5">148 / 148</span>
      <span className="text-[8px] text-primary-fixed-dim">Zero dropped packets</span>
      </div>
      </div>
      {/* Real-time Chart / Wave Graph Simulation */}
      <div className="p-2.5 rounded bg-surface-container-low/50 border border-surface-container-highest/30 flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-[10px] text-on-surface-variant">
      <span className="font-semibold text-on-surface">Live Network Stream Latency</span>
      <div className="flex items-center gap-2">
      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> p99</span>
      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim"></span> p50</span>
      </div>
      </div>
      {/* SVG Sparkline Visual */}
      <div className="h-16 w-full relative flex items-end">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 60">
      <defs>
      <lineargradient id="chartGrad" x={true}1="0" x={true}2="0" y={true}1="0" y={true}2="1">
      <stop offset="0%" stopColor="#00f2aa" stopOpacity="0.3" />
      <stop offset="100%" stopColor="#00f2aa" stopOpacity="0.0" />
      </lineargradient>
      </defs>
      <path d="M0,45 Q30,15 60,35 T120,20 T180,30 T240,10 T300,25 L300,60 L0,60 Z" fill="url(#chartGrad)" />
      <path d="M0,45 Q30,15 60,35 T120,20 T180,30 T240,10 T300,25" fill="none" stroke="#00f2aa" strokeWidth="2" />
      <path d="M0,52 Q40,35 80,45 T160,38 T240,40 T300,32" fill="none" stroke="#7bd0ff" strokeDasharray="3,3" strokeWidth="1.5" />
      </svg>
      </div>
      </div>
      {/* Mini Data Table / Log Stream */}
      <div className="rounded bg-surface-container-low/40 p-2 text-[10px] font-mono flex flex-col gap-1">
      <div className="flex items-center justify-between text-on-surface-variant pb-1 border-b border-surface-container-highest/40 font-sans">
      <span>Microservice Deployment</span>
      <span>Pod Status</span>
      <span>Replica Count</span>
      </div>
      <div className="flex items-center justify-between text-on-surface py-0.5">
      <span className="text-primary truncate">api.gateway.router.v2</span>
      <span className="text-primary-fixed-dim flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Healthy</span>
      <span className="text-on-surface-variant">12 Active</span>
      </div>
      <div className="flex items-center justify-between text-on-surface py-0.5">
      <span className="text-secondary truncate">telemetry.event-ingest</span>
      <span className="text-primary-fixed-dim flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Healthy</span>
      <span className="text-on-surface-variant">24 Active</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Laptop Base / Hinge & Bottom Lip */}
      <div className="w-[110%] h-3.5 bg-gradient-to-b from-[#242b38] to-[#141a24] rounded-b-xl border-t border-surface-bright shadow-2xl flex items-center justify-center relative">
      <div className="w-20 h-1 rounded-full bg-surface-bright/70"></div>
      </div>
      <div className="w-[45%] h-1 bg-surface-container-lowest rounded-b opacity-80"></div>
      </div>
      {/* Smartphone / Mobile Mockup (Side-by-side Overlap) */}
      <div className="w-36 sm:w-44 -ml-12 sm:-ml-16 mb-2 z-20 shrink-0 drop-shadow-2xl hover:translate-y-[-4px] transition-transform duration-300">
      {/* Phone Chassis */}
      <div className="rounded-[2rem] bg-[#0c121e] p-2 border-2 border-surface-bright/50 shadow-2xl shadow-black/80 flex flex-col ring-1 ring-primary/20">
      {/* Phone Screen */}
      <div className="w-full bg-surface-container-lowest rounded-[1.6rem] overflow-hidden border border-surface-container-highest flex flex-col">
      {/* Dynamic Island / Speaker Notch */}
      <div className="pt-1.5 pb-1 flex justify-center items-center bg-surface-container-low">
      <div className="w-12 h-3 rounded-full bg-surface-container-lowest flex items-center justify-end px-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-primary-container/60"></div>
      </div>
      </div>
      {/* Mobile App Screen Content */}
      <div className="p-2.5 bg-surface-container-lowest flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
      <div className="w-4 h-4 rounded bg-primary-container flex items-center justify-center text-[8px] font-bold text-on-primary-container">AS</div>
      <span className="text-[9px] font-bold text-on-surface">Nexus Ops</span>
      </div>
      <span className="material-symbols-outlined text-[14px] text-primary">notifications_active</span>
      </div>
      {/* Quick Status Card */}
      <div className="p-2 rounded-lg bg-surface-container-high/80 border border-primary-container/20 flex flex-col gap-1">
      <div className="flex items-center justify-between">
      <span className="text-[8px] uppercase tracking-wider text-on-surface-variant font-bold">Cloud Status</span>
      <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
      </div>
      <div className="text-xs font-bold text-primary">All Clusters 100% OK</div>
      <div className="text-[8px] text-on-surface-variant">0 security incidents past 30d</div>
      </div>
      {/* Mini graph on phone */}
      <div className="p-1.5 rounded bg-surface-container-low flex flex-col gap-1">
      <span className="text-[8px] font-semibold text-on-surface">Daily Throughput</span>
      <div className="flex items-end gap-1 h-8 px-1 pt-1 justify-between">
      <div className="w-1.5 bg-primary-container/40 rounded-t h-4"></div>
      <div className="w-1.5 bg-primary-container/50 rounded-t h-6"></div>
      <div className="w-1.5 bg-primary-container/70 rounded-t h-5"></div>
      <div className="w-1.5 bg-primary-container/90 rounded-t h-7"></div>
      <div className="w-1.5 bg-primary-container rounded-t h-8"></div>
      </div>
      </div>
      {/* Mobile Quick Action Buttons */}
      <div className="flex gap-1.5 pt-1">
      <div className="flex-1 py-1.5 rounded bg-primary-container text-on-primary-container text-[8px] font-bold text-center">
                        Deploy v3.4
                      </div>
      <div className="px-2 py-1.5 rounded bg-surface-container-high text-on-surface text-[8px] font-bold text-center">
                        Logs
                      </div>
      </div>
      </div>
      {/* Home indicator bar */}
      <div className="py-1 flex justify-center bg-surface-container-lowest">
      <div className="w-10 h-0.5 rounded-full bg-surface-bright"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Side: Project Details Card & Metrics */}
      <div className="xl:col-span-5 flex flex-col gap-gutter-md">
      {/* Problem & Solution Card */}
      <div className="p-gutter-lg rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col gap-3">
      <div className="flex items-center gap-2 text-primary font-semibold text-sm">
      <span className="material-symbols-outlined text-[18px]">psychology</span>
      <span className="uppercase tracking-wider text-label-badge font-bold">Challenge &amp; Objective</span>
      </div>
      <p className="text-body-md text-on-surface">
              Client required a unified real-time dashboard capable of orchestrating hybrid cloud workloads with zero downtime, replacing 4 disconnected legacy systems into one responsive web &amp; mobile control plane.
            </p>
      </div>
      {/* Architecture Deployed */}
      <div className="p-gutter-lg rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col gap-3">
      <div className="flex items-center gap-2 text-secondary-fixed-dim font-semibold text-sm">
      <span className="material-symbols-outlined text-[18px]">developer_board</span>
      <span className="uppercase tracking-wider text-label-badge font-bold">Architecture Deployed</span>
      </div>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-primary font-mono text-xs font-semibold flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>React 18 + TypeScript
              </span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-secondary font-mono text-xs font-semibold flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Node.js Distributed Engine
              </span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-mono text-xs font-semibold flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>PostgreSQL + TimescaleDB
              </span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface-variant font-mono text-xs font-semibold flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>Docker &amp; Kubernetes
              </span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-primary font-mono text-xs font-semibold flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>TailwindCSS Responsive Design
              </span>
      </div>
      </div>
      {/* Business Impact Metric Tiles */}
      <div className="grid grid-cols-3 gap-3">
      <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col">
      <span className="font-metric-display text-2xl font-extrabold text-primary tracking-tight">99.99%</span>
      <span className="text-xs font-medium text-on-surface mt-1">Uptime SLA</span>
      <span className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">Continuous failover architecture</span>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col">
      <span className="font-metric-display text-2xl font-extrabold text-primary-fixed-dim tracking-tight">+60%</span>
      <span className="text-xs font-medium text-on-surface mt-1">Dev Velocity</span>
      <span className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">Automated CI/CD deployment</span>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col">
      <span className="font-metric-display text-2xl font-extrabold text-secondary tracking-tight">&lt;100ms</span>
      <span className="text-xs font-medium text-on-surface mt-1">API Response</span>
      <span className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">Sub-millisecond Edge caching</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
    </DeckLayout>
  );
}
