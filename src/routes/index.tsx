import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Ashknaz Serwer • Digital Growth & Engineering Portfolio" },
      { name: "description", content: "Senior full-stack engineering and growth strategy: scalable web platforms, cloud apps, and immersive experiences that drive measurable revenue." },
      { property: "og:title", content: "Ashknaz Serwer • Digital Growth & Engineering Portfolio" },
      { property: "og:description", content: "Senior full-stack engineering and growth strategy: scalable web platforms, cloud apps, and immersive experiences that drive measurable revenue." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={1}>
      <div className="flex flex-col w-full">
      <div className="relative w-full max-w-7xl mx-auto px-gutter-md md:px-gutter-xl flex flex-col gap-14 py-6">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary-container/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-[520px] -left-20 w-[420px] h-[420px] bg-secondary-container/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      {/* UPPER DECK: EXECUTIVE HERO & ARCHITECTURE OVERVIEW */}
      <section className="relative w-full bg-surface-container-low rounded-3xl p-gutter-lg md:p-gutter-2xl overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
      {/* Slide Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-gutter-sm pb-gutter-lg">
      <div className="flex items-center gap-gutter-sm">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary font-label-badge text-label-badge uppercase tracking-[0.08em]">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
                  EXECUTIVE PORTFOLIO • SLIDE 01
                </span>
      <span className="font-label-badge text-label-badge uppercase text-on-surface-variant tracking-[0.08em] hidden sm:inline">STRATEGY • FULL-STACK ARCHITECTURE</span>
      </div>
      <div className="flex items-center gap-gutter-sm">
      <div className="text-right hidden md:flex flex-col">
      <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-[0.1em]">Ashknaz Serwer</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">Digital Growth &amp; Engineering Strategist</span>
      </div>
      <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center font-headline-sm text-primary font-bold shadow-[0_0_18px_rgba(0,242,170,0.25)]">
                  AS
                </div>
      </div>
      </div>
      {/* Main Two-Column Slide Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center pt-2">
      {/* Left Column: Core Value Proposition & Headings */}
      <div className="lg:col-span-7 flex flex-col gap-gutter-md">
      <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-[0.08em]">
      <span className="material-symbols-outlined text-[16px] text-primary-container">hub</span>
                  Creative Mind • Design with Purpose • Turning Ideas into Reality
                </div>
      <h1 className="font-headline-lg text-headline-lg md:font-display-xl md:text-display-xl text-on-surface tracking-tight leading-[1.08]">
                  Software Solutions &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">Digital Growth</span> That Drive Measurable Results.
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-1">
                  Bridging senior-level full-stack engineering with high-converting brand strategy. I architect performant web platforms, modern cloud applications, and immersive experiences designed to scale revenue.
                </p>
      {/* Core Capability Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter-sm pt-4">
      <div className="p-gutter-md rounded-2xl bg-surface-container/60 hover:bg-surface-container transition-colors group">
      <div className="w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[20px]">terminal</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface text-[16px] leading-tight mb-1">Full-Stack Scale</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">React, Next.js, Node.js, and hardened cloud backends.</p>
      </div>
      <div className="p-gutter-md rounded-2xl bg-surface-container/60 hover:bg-surface-container transition-colors group">
      <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary mb-3 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[20px]">insights</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface text-[16px] leading-tight mb-1">Conversion UX</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">Telemetry-driven UI/UX optimized for enterprise ARR.</p>
      </div>
      <div className="p-gutter-md rounded-2xl bg-surface-container/60 hover:bg-surface-container transition-colors group">
      <div className="w-8 h-8 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary mb-3 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[20px]">neurology</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface text-[16px] leading-tight mb-1">AI &amp; Interactive</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">Custom LLM workflows, Three.js &amp; 3D visualization.</p>
      </div>
      </div>
      {/* Hero Action Pill Matrix */}
      <div className="flex flex-wrap items-center gap-gutter-sm pt-3">
      <a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_24px_rgba(0,242,170,0.35)] hover:shadow-[0_0_36px_rgba(0,242,170,0.55)] transition-all" href="mailto:nazashk630@gmail.com">
      <span>Initiate Collaboration</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md">
      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
      <span className="text-on-surface-variant">Available for Q2/Q3 2025 Contracts</span>
      </div>
      </div>
      </div>
      {/* Right Column: Cyberpunk Portal Visual Showcase Card */}
      <div className="lg:col-span-5 flex flex-col justify-center items-center">
      <div className="relative w-full aspect-square max-w-[430px] rounded-3xl p-3 bg-gradient-to-b from-surface-container-high via-surface-container to-surface-container-low shadow-2xl flex flex-col justify-between overflow-hidden">
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      {/* Card HUD Header */}
      <div className="relative z-10 flex items-center justify-between px-3 pt-2">
      <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/80 text-[10px] font-label-badge uppercase tracking-[0.08em] text-primary">PORTAL // SYSTEM ACTIVE</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">SYS_ID: 88-ALPHA</span>
      </div>
      {/* Center Visual Portal Illustration */}
      <div className="relative z-10 my-auto flex items-center justify-center py-4">
      <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Concentric Atmospheric Rings */}
      <div className="absolute inset-0 rounded-full bg-primary-container/5 animate-pulse"></div>
      <div className="absolute inset-4 rounded-full bg-surface-container-lowest/90 shadow-[inset_0_0_30px_rgba(0,242,170,0.2)]"></div>
      <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-surface-container-high to-surface-container flex items-center justify-center shadow-[0_0_40px_rgba(0,242,170,0.15)]"></div>
      {/* Animated Orbiting Graphic Nodes via SVG */}
      <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 256 256">
      <circle className="text-primary/20" cx="128" cy="128" r="105" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1.5" />
      <circle className="text-secondary/30" cx="128" cy="128" r="78" stroke="currentColor" strokeDasharray="6 6" strokeWidth="1.5" />
      <circle className="text-primary-container" cx="128" cy="128" r="48" stroke="currentColor" strokeWidth="2" />
      <circle className="text-primary-container shadow-lg" cx="128" cy="23" fill="currentColor" r="4" />
      <circle className="text-secondary" cx="215" cy="165" fill="currentColor" r="5" />
      <circle className="text-tertiary-container" cx="65" cy="190" fill="currentColor" r="3.5" />
      </svg>
      {/* Holographic Floating Terminal Centerpiece */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center p-4">
      <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest/90 flex items-center justify-center text-primary-container shadow-[0_0_28px_rgba(0,242,170,0.4)] mb-2">
      <span className="material-symbols-outlined text-[30px]">memory</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-[18px]">CYBER CORE</span>
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-[0.1em]">Engine v4.8</span>
      </div>
      </div>
      </div>
      {/* Card Bottom Telemetry Pill Overlay */}
      <div className="relative z-10 grid grid-cols-2 gap-2 p-2 bg-surface-container-lowest/80 backdrop-blur-md rounded-2xl">
      <div className="flex flex-col px-2 py-1">
      <span className="font-label-badge text-label-badge uppercase text-on-surface-variant text-[10px]">UPTIME SLA</span>
      <span className="font-headline-sm text-headline-sm text-primary text-[15px] font-bold">99.98%</span>
      </div>
      <div className="flex flex-col px-2 py-1 text-right">
      <span className="font-label-badge text-label-badge uppercase text-on-surface-variant text-[10px]">LATENCY</span>
      <span className="font-headline-sm text-headline-sm text-secondary text-[15px] font-bold">&lt; 85ms</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* LOWER DECK: PROVEN TRACK RECORD & STRATEGIST PROFILE */}
      <section className="relative w-full bg-surface-container-low rounded-3xl p-gutter-lg md:p-gutter-2xl overflow-hidden shadow-2xl">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
      {/* Section Label & Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md pb-gutter-lg">
      <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_10px_rgba(0,242,170,0.8)]"></span>
      <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-primary">IMPACT TELEMETRY</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Proven Track Record &amp; Client Success
                </h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Quantitative benchmarks from tier-one international engagements across fintech, enterprise SaaS, and direct-to-consumer ecosystems.
              </p>
      </div>
      {/* Prominent Metric Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-md">
      {/* Metric 1 */}
      <div className="relative rounded-2xl bg-surface-container p-gutter-lg flex flex-col justify-between overflow-hidden group hover:bg-surface-container-high transition-colors">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/10 rounded-full blur-2xl group-hover:bg-primary-container/20 transition-all"></div>
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge uppercase text-primary tracking-[0.08em]">GLOBAL REACH</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">public</span>
      </div>
      <div className="py-6">
      <div className="font-metric-display text-metric-display text-primary font-black tracking-tight">
                    50+
                  </div>
      <p className="font-body-md text-body-md text-on-surface font-semibold pt-1">
                    Successful Projects Delivered Globally
                  </p>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
      <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
      <span>USA, UK, MENA &amp; APAC clientele</span>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="relative rounded-2xl bg-surface-container p-gutter-lg flex flex-col justify-between overflow-hidden group hover:bg-surface-container-high transition-colors">
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge uppercase text-secondary tracking-[0.08em]">CLIENT TRUST</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">sentiment_satisfied</span>
      </div>
      <div className="py-6">
      <div className="font-metric-display text-metric-display text-secondary font-black tracking-tight">
                    98%
                  </div>
      <p className="font-body-md text-body-md text-on-surface font-semibold pt-1">
                    Client Satisfaction &amp; Retention Rate
                  </p>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
      <span className="material-symbols-outlined text-secondary text-[16px]">repeat</span>
      <span>Multi-quarter engineering retainers</span>
      </div>
      </div>
      {/* Metric 3 (Mint Highlight Card) */}
      <div className="relative rounded-2xl bg-gradient-to-br from-surface-container via-surface-container to-surface-container-high p-gutter-lg flex flex-col justify-between overflow-hidden shadow-[0_0_30px_rgba(0,242,170,0.12)]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl"></div>
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge uppercase text-primary tracking-[0.08em]">BUSINESS IMPACT</span>
      <div className="w-7 h-7 rounded-full bg-primary-container/15 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[16px]">trending_up</span>
      </div>
      </div>
      <div className="py-6">
      <div className="font-metric-display text-metric-display text-primary-container font-black tracking-tight">
                    45%
                  </div>
      <p className="font-body-md text-body-md text-on-surface font-semibold pt-1">
                    Avg Conversion Rate Lift
                  </p>
      </div>
      <div className="flex items-center gap-2 text-primary font-label-md text-label-md">
      <span className="material-symbols-outlined text-[16px]">speed</span>
      <span>Full-funnel UX &amp; technical performance</span>
      </div>
      </div>
      </div>
      {/* Bottom Profile Banner & Contact Pills */}
      <div className="mt-gutter-xl pt-gutter-lg rounded-2xl bg-surface-container/70 p-gutter-md md:p-gutter-lg flex flex-col lg:flex-row items-center justify-between gap-gutter-lg">
      {/* Bio Capsule */}
      <div className="flex items-center gap-gutter-md">
      <div className="relative shrink-0">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-surface-container-highest to-surface-container-high flex items-center justify-center text-primary font-headline-md font-bold shadow-lg">
                    AS
                  </div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary-container ring-4 ring-surface-container"></div>
      </div>
      <div className="flex flex-col">
      <div className="flex items-center gap-2">
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Ashknaz Serwer</h3>
      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-badge text-label-badge text-[10px]">EXECUTIVE LEAD</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5 pt-0.5">
      <span className="material-symbols-outlined text-[15px] text-primary">location_on</span>
                    Lahore, Pakistan • Full-Stack Developer &amp; Creative Strategist
                  </p>
      </div>
      </div>
      {/* Contact Action Pills */}
      <div className="flex flex-wrap items-center gap-gutter-sm justify-center lg:justify-end w-full lg:w-auto">
      {/* WhatsApp / Phone Pill */}
      <a className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-md font-label-md transition-colors shadow-sm group" href="tel:+923191585468">
      <div className="w-6 h-6 rounded-full bg-primary-container/15 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[14px]">call</span>
      </div>
      <span className="font-semibold">+92 319 1585468</span>
      </a>
      {/* Email Pill */}
      <a className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-md font-label-md transition-colors shadow-sm group" href="mailto:nazashk630@gmail.com">
      <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[14px]">mail</span>
      </div>
      <span className="font-semibold">nazashk630@gmail.com</span>
      </a>
      {/* Direct Meeting Pill */}
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-[0_0_18px_rgba(0,242,170,0.3)] hover:shadow-[0_0_28px_rgba(0,242,170,0.5)] transition-all" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
      <span>Book Consultation</span>
      <span className="material-symbols-outlined text-[16px]">calendar_month</span>
      </a>
      </div>
      </div>
      </section>
      </div>
      </div>
    </DeckLayout>
  );
}
