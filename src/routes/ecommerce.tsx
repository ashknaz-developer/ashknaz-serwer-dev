import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/ecommerce")({
  component: Page,
  head: () => ({
    meta: [
      { title: "E-Commerce Management & Affiliate Growth | Ashknaz Serwer" },
      { name: "description", content: "Shopify Plus and WooCommerce optimization, inventory automation, and multi-tier affiliate funnels with $2.4M+ GMV managed." },
      { property: "og:title", content: "E-Commerce Management & Affiliate Growth | Ashknaz Serwer" },
      { property: "og:description", content: "Shopify Plus and WooCommerce optimization, inventory automation, and multi-tier affiliate funnels with $2.4M+ GMV managed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={8}>
      <div className="flex flex-col w-full">
      {/* Slide Deck Architectural Canvas */}
      <div className="relative w-full max-w-[1440px] mx-auto px-gutter-sm sm:px-gutter-md md:px-gutter-xl py-6 flex flex-col gap-16 overflow-hidden">
      {/* Atmospheric Luminous Mint Diffusers */}
      <div className="absolute -top-32 -left-48 w-[640px] h-[640px] rounded-full bg-primary-container/5 blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[40%] -right-48 w-[520px] h-[520px] rounded-full bg-secondary-container/5 blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/3 w-[720px] h-[720px] rounded-full bg-primary-container/4 blur-[160px] pointer-events-none"></div>
      {/* 01: Slide Header Meta & Executive Narrative */}
      <section className="relative z-10 flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high/70 backdrop-blur-md shadow-sm">
      <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_10px_#00f2aa]"></span>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-[0.08em]">Slide 08 / 09 • E-Commerce &amp; Growth Ops • Ashknaz Serwer</span>
      </div>
      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-low shadow-sm">
      <div className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-primary-container text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span>
      <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-on-surface">$2.4M+ GMV MANAGED</span>
      </div>
      <span className="w-1 h-1 rounded-full bg-surface-container-highest"></span>
      <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-primary-container font-bold">+45% AVG REVENUE ACCELERATION</span>
      </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="max-w-4xl space-y-3">
      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight">
                  E-Commerce Management, Affiliate Marketing &amp; Store Operations
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                  End-to-end Shopify Plus &amp; WooCommerce store optimization, product inventory automation pipelines, and high-converting multi-tier affiliate marketing growth funnels designed for rapid enterprise scale.
                </p>
      </div>
      <div className="flex items-center gap-3 self-start lg:self-auto shrink-0">
      <div className="px-3.5 py-2 rounded-xl bg-surface-container-low flex flex-col shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Global Dispatch Time</span>
      <span className="font-headline-sm text-headline-sm font-bold text-primary-container">&lt; 180ms</span>
      </div>
      <div className="px-3.5 py-2 rounded-xl bg-surface-container-low flex flex-col shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Conversion Uplift</span>
      <span className="font-headline-sm text-headline-sm font-bold text-secondary-fixed-dim">3.4x</span>
      </div>
      </div>
      </div>
      </section>
      {/* 02: 3-Pillar Capability Grid + Live Merchant Command Console Mockup */}
      <section className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
      {/* Left: 3 Precision Capability Cards (5 cols) */}
      <div className="xl:col-span-5 flex flex-col gap-4">
      {/* Pillar Card 01 */}
      <div className="p-6 rounded-2xl bg-surface-container-low shadow-md hover:bg-surface-container transition-all group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
      <div className="flex items-start justify-between gap-4 mb-3">
      <span className="font-label-badge text-label-badge px-2.5 py-1 rounded bg-surface-container-highest text-primary-container uppercase font-bold">Pillar 01</span>
      <span className="material-symbols-outlined text-primary-container group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[22px]">shopping_bag</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold group-hover:text-primary transition-colors">
                  High-Conversion E-Commerce Stores
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Enterprise Shopify Plus, custom headless WooCommerce architectures, tailored liquid templates, friction-free 1-click cart flows, and micro-interaction checkout acceleration.
                </p>
      <div className="mt-4 flex flex-wrap gap-2">
      <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">Shopify Plus</span>
      <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">Headless Checkout</span>
      <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">A/B Funnels</span>
      </div>
      </div>
      {/* Pillar Card 02 */}
      <div className="p-6 rounded-2xl bg-surface-container-low shadow-md hover:bg-surface-container transition-all group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
      <div className="flex items-start justify-between gap-4 mb-3">
      <span className="font-label-badge text-label-badge px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed-dim uppercase font-bold">Pillar 02</span>
      <span className="material-symbols-outlined text-secondary-fixed-dim group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[22px]">inventory_2</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold group-hover:text-secondary transition-colors">
                  Product Management &amp; Inventory Logistics
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Automated SKU ingestion pipelines, multi-warehouse ERP synchronization, automated abandoned cart recovery SMS/Email sequences, and predictive customer LTV tuning.
                </p>
      <div className="mt-4 flex flex-wrap gap-2">
      <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">SKU Cataloging</span>
      <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">Real-Time Sync</span>
      <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">LTV Maximizer</span>
      </div>
      </div>
      {/* Pillar Card 03 */}
      <div className="p-6 rounded-2xl bg-surface-container-low shadow-md hover:bg-surface-container transition-all group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
      <div className="flex items-start justify-between gap-4 mb-3">
      <span className="font-label-badge text-label-badge px-2.5 py-1 rounded bg-surface-container-highest text-primary-container uppercase font-bold">Pillar 03</span>
      <span className="material-symbols-outlined text-primary-container group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[22px]">hub</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold group-hover:text-primary transition-colors">
                  Multi-Tier Affiliate Marketing Funnels
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Engineered publisher onboarding portals, multi-touch attribution pixel deployment, automated creator payouts, and gamified affiliate tiering to compound viral referral loops.
                </p>
      <div className="mt-4 flex flex-wrap gap-2">
      <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">Tier Commissions</span>
      <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">Pixel Tracking</span>
      <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">Influencer CRM</span>
      </div>
      </div>
      </div>
      {/* Right: Desktop PC Laptop Command Dashboard Mockup (7 cols) */}
      <div className="xl:col-span-7 flex flex-col gap-3">
      {/* Hardware Laptop Wrapper */}
      <div className="w-full bg-surface-container-highest/60 p-2.5 sm:p-3.5 rounded-3xl shadow-2xl backdrop-blur-md">
      {/* Screen Shell */}
      <div className="w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-inner flex flex-col">
      {/* Window Navigation Bar */}
      <div className="w-full bg-surface-container-low px-4 py-3 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-error/70"></span>
      <span className="w-3 h-3 rounded-full bg-secondary-container/70"></span>
      <span className="w-3 h-3 rounded-full bg-primary-container/70"></span>
      </div>
      <div className="flex-1 max-w-md mx-auto bg-surface-container-lowest/80 px-3 py-1 rounded-lg flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
      <div className="flex items-center gap-2 truncate">
      <span className="material-symbols-outlined text-primary-container text-[14px]">lock</span>
      <span className="text-on-surface truncate">merchant.ashknaz-ecom.global/analytics</span>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant text-[14px]">refresh</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase hidden sm:inline">LIVE SYNC</span>
      </div>
      </div>
      {/* Console Body */}
      <div className="p-4 sm:p-6 flex flex-col gap-6 bg-gradient-to-b from-surface-container-lowest to-surface">
      {/* Console Top Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1 shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Monthly GMV</span>
      <div className="flex items-baseline gap-1">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">$384,920</span>
      </div>
      <span className="font-label-md text-label-md text-primary-container flex items-center gap-0.5">
      <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +32.4% MoM
                        </span>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1 shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Store Conv. Rate</span>
      <div className="flex items-baseline gap-1">
      <span className="font-headline-sm text-headline-sm font-bold text-primary-container">4.82%</span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">Benchmark: 1.90%</span>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1 shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Active Affiliates</span>
      <div className="flex items-baseline gap-1">
      <span className="font-headline-sm text-headline-sm font-bold text-secondary-fixed-dim">240</span>
      <span className="text-on-surface-variant font-label-md text-label-md">partners</span>
      </div>
      <span className="font-label-md text-label-md text-primary-container flex items-center gap-0.5">
      <span className="material-symbols-outlined text-[14px]">trending_up</span> $92k attributed
                        </span>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1 shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Cart Recovery</span>
      <div className="flex items-baseline gap-1">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">31.8%</span>
      </div>
      <span className="font-label-md text-label-md text-secondary-fixed-dim">Klaviyo Automated</span>
      </div>
      </div>
      {/* Main Chart Block + Live Stream Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
      {/* Chart Surface (2 cols) */}
      <div className="lg:col-span-2 p-4 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
      <div className="flex items-center justify-between mb-4">
      <div>
      <h3 className="font-label-lg text-label-lg text-on-surface font-bold">Real-Time Revenue Velocity</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Omnichannel Gross Merchandising vs Previous Period</p>
      </div>
      <span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-primary-container/10 text-primary-container uppercase font-bold">Hourly Ingestion</span>
      </div>
      {/* High Precision Inline SVG Area Sparkline */}
      <div className="w-full h-44 relative flex items-end">
      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 180">
      <defs>
      <lineargradient id="mintGrad" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop offset="0%" stopColor="#00f2aa" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#00f2aa" stopOpacity="0.0" />
      </lineargradient>
      <lineargradient id="strokeMint" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stopColor="#00e29e" />
      <stop offset="50%" stopColor="#00f2aa" />
      <stop offset="100%" stopColor="#c1ffdd" />
      </lineargradient>
      </defs>
      {/* Grid Horizontal Reference Lines */}
      <line stroke="#242a36" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="500" y1="30" y2="30" />
      <line stroke="#242a36" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="500" y1="80" y2="80" />
      <line stroke="#242a36" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="500" y1="130" y2="130" />
      {/* Prior Benchmark Curve */}
      <path d="M0,140 Q60,135 120,110 T240,95 T360,75 T500,60" fill="none" stroke="#3b4a41" strokeDasharray="4 4" strokeWidth="2" />
      {/* Main Neon Mint Trajectory Curve */}
      <path d="M0,150 Q50,140 100,120 T200,90 T300,50 T400,35 T500,15 L500,180 L0,180 Z" fill="url(#mintGrad)" />
      <path d="M0,150 Q50,140 100,120 T200,90 T300,50 T400,35 T500,15" fill="none" stroke="url(#strokeMint)" strokeLinecap="round" strokeWidth="3.5" />
      {/* Target Peak Node */}
      <circle className="animate-pulse shadow-[0_0_12px_#00f2aa]" cx="500" cy="15" fill="#00f2aa" r="5" />
      </svg>
      </div>
      <div className="flex items-center justify-between pt-3 font-label-md text-label-md text-on-surface-variant">
      <span>00:00 (EST)</span>
      <span>06:00</span>
      <span>12:00</span>
      <span>18:00</span>
      <span className="text-primary-container font-semibold">23:59 (Current)</span>
      </div>
      </div>
      {/* Live Sales Stream (1 col) */}
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
      <div>
      <div className="flex items-center justify-between mb-3">
      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Live Order Feed</h4>
      <span className="material-symbols-outlined text-primary-container text-[18px]">bolt</span>
      </div>
      {/* Feed Items */}
      <div className="flex flex-col gap-2.5">
      <div className="p-2 rounded-lg bg-surface-container flex items-center justify-between gap-2 text-on-surface">
      <div className="flex items-center gap-2 truncate">
      <div className="w-7 h-7 rounded-md bg-surface-container-high flex items-center justify-center text-primary-container text-[11px] font-bold">US</div>
      <div className="flex flex-col truncate">
      <span className="font-label-md text-label-md font-semibold truncate">Order #8921 • $249.00</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Ref: @creator_lex</span>
      </div>
      </div>
      <span className="font-label-badge text-label-badge text-primary-container">Just now</span>
      </div>
      <div className="p-2 rounded-lg bg-surface-container flex items-center justify-between gap-2 text-on-surface">
      <div className="flex items-center gap-2 truncate">
      <div className="w-7 h-7 rounded-md bg-surface-container-high flex items-center justify-center text-secondary-fixed-dim text-[11px] font-bold">UK</div>
      <div className="flex flex-col truncate">
      <span className="font-label-md text-label-md font-semibold truncate">Order #8920 • $184.50</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Shopify Headless</span>
      </div>
      </div>
      <span className="font-label-badge text-label-badge text-on-surface-variant">2m ago</span>
      </div>
      <div className="p-2 rounded-lg bg-surface-container flex items-center justify-between gap-2 text-on-surface">
      <div className="flex items-center gap-2 truncate">
      <div className="w-7 h-7 rounded-md bg-surface-container-high flex items-center justify-center text-primary-container text-[11px] font-bold">CA</div>
      <div className="flex flex-col truncate">
      <span className="font-label-md text-label-md font-semibold truncate">Order #8919 • $312.00</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Ref: PostAffiliate</span>
      </div>
      </div>
      <span className="font-label-badge text-label-badge text-on-surface-variant">5m ago</span>
      </div>
      </div>
      </div>
      <div className="pt-3">
      <div className="w-full py-1.5 px-3 rounded-lg bg-primary-container/10 flex items-center justify-between text-primary-container font-label-md text-label-md font-bold">
      <span>Gateway Health: 99.98%</span>
      <span className="material-symbols-outlined text-[16px]">verified</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Laptop Stand Micro Accent */}
      <div className="w-48 h-2.5 mx-auto bg-surface-container-high rounded-b-xl shadow-md"></div>
      </div>
      </section>
      {/* 03: Middle Tech Frameworks & Platform Tooling Ecosystem */}
      <section className="relative z-10 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
      <span className="font-label-badge text-label-badge text-primary-container uppercase tracking-[0.08em] font-bold">Infrastructure Matrix</span>
      <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                  E-Commerce &amp; Affiliate Growth Technology Ecosystem
                </h2>
      </div>
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                Direct API &amp; Webhook Orchestration
              </div>
      </div>
      {/* Platform Grid Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
      {/* Platform 1 */}
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-all group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[24px]">storefront</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md font-bold text-on-surface">Shopify Plus</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Custom Liquid &amp; Flow</span>
      </div>
      </div>
      {/* Platform 2 */}
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-all group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary-fixed-dim group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md font-bold text-on-surface">WooCommerce</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Headless Rest API</span>
      </div>
      </div>
      {/* Platform 3 */}
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-all group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[24px]">code_blocks</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md font-bold text-on-surface">WP Headless</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Next.js / Gatsby Engine</span>
      </div>
      </div>
      {/* Platform 4 */}
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-all group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[24px]">payments</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md font-bold text-on-surface">Stripe &amp; Pay</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">1-Click Checkout</span>
      </div>
      </div>
      {/* Platform 5 */}
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-all group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[24px]">mail</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md font-bold text-on-surface">Klaviyo Flow</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Predictive Recovery</span>
      </div>
      </div>
      {/* Platform 6 */}
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-all group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary-fixed-dim group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[24px]">group_add</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md font-bold text-on-surface">Refersion / PAP</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Multi-Tier Payouts</span>
      </div>
      </div>
      {/* Platform 7 */}
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-all group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[24px]">ads_click</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md font-bold text-on-surface">Google Center</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Automated Feeds</span>
      </div>
      </div>
      {/* Platform 8 */}
      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-all group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary-fixed-dim group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[24px]">share</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md font-bold text-on-surface">TikTok Shop</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Pixel Server CAPI</span>
      </div>
      </div>
      </div>
      {/* Execution Guarantee Banner */}
      <div className="w-full p-4 md:px-8 md:py-4 rounded-2xl bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
      <span className="material-symbols-outlined text-[20px]">speed</span>
      </div>
      <span className="font-body-md text-body-md text-on-surface font-semibold text-center md:text-left">
                  Average Store Turnaround: 2 Weeks • 100% Responsive &amp; High-Speed Performance Scoring (95+ Google PageSpeed).
                </span>
      </div>
      <div className="flex items-center gap-3 shrink-0">
      <span className="font-label-badge text-label-badge text-primary-container px-3 py-1 rounded-full bg-surface-container-lowest uppercase font-bold">Core Web Vitals Pass</span>
      <span className="font-label-badge text-label-badge text-secondary-fixed-dim px-3 py-1 rounded-full bg-surface-container-lowest uppercase font-bold">Zero Downtime Migration</span>
      </div>
      </div>
      </section>
      {/* 04: Bottom Demonstrated Real Project Case Study (Dual Hardware Mockup) */}
      <section className="relative z-10 p-6 md:p-10 rounded-3xl bg-surface-container-low shadow-xl overflow-hidden">
      {/* Ambient Glow Behind Case Study */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
      <div className="space-y-2 max-w-2xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-highest">
      <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span>
      <span className="font-label-badge text-label-badge text-secondary-fixed-dim uppercase tracking-[0.08em] font-bold">Featured E-Commerce Case Study</span>
      </div>
      <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  AeroFlux &amp; Care Companion Omnichannel Retail &amp; Affiliate Scale
                </h3>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Engineered a lightning-fast responsive storefront paired with automated affiliate tracking that drove a 3x increase in repeat customer retention and scaled monthly sales across 4 continents.
                </p>
      </div>
      {/* Case Study Key KPI Pods */}
      <div className="grid grid-cols-3 gap-3 w-full lg:w-auto shrink-0">
      <div className="p-4 rounded-xl bg-surface-container flex flex-col shadow-sm">
      <span className="font-metric-display text-metric-display text-primary-container font-extrabold">+185%</span>
      <span className="font-label-md text-label-md text-on-surface-variant">ROAS Uplift</span>
      </div>
      <div className="p-4 rounded-xl bg-surface-container flex flex-col shadow-sm">
      <span className="font-metric-display text-metric-display text-secondary-fixed-dim font-extrabold">1.4s</span>
      <span className="font-label-md text-label-md text-on-surface-variant">Checkout Turnaround</span>
      </div>
      <div className="p-4 rounded-xl bg-surface-container flex flex-col shadow-sm">
      <span className="font-metric-display text-metric-display text-primary font-extrabold">$184.20</span>
      <span className="font-label-md text-label-md text-on-surface-variant">Average Order Value (AOV)</span>
      </div>
      </div>
      </div>
      {/* Dual Hardware Mockup Presentation: Laptop + Mobile Composite */}
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Laptop Mockup: Merchant Analytics & Inventory Fulfillment Dispatch Console (8 cols) */}
      <div className="lg:col-span-8 bg-surface-container-highest/50 p-3 sm:p-4 rounded-2xl shadow-xl backdrop-blur-md">
      <div className="w-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col">
      {/* Laptop Top Status Bar */}
      <div className="px-4 py-2.5 bg-surface-container-low flex items-center justify-between">
      <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-surface-variant"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-surface-variant"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-surface-variant"></span>
      <span className="font-label-md text-label-md text-on-surface-variant ml-2 font-mono text-[11px]">aeroflux-admin.store/fulfillment</span>
      </div>
      <span className="font-label-badge text-label-badge text-primary-container uppercase px-2 py-0.5 rounded bg-primary-container/10">348 Orders Queued</span>
      </div>
      {/* Laptop Content Frame with Real Image Placeholder */}
      <div className="relative w-full h-80 sm:h-96 overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="High quality UI screenshot of an executive e-commerce inventory fulfillment dispatch console with modern dark navy styling, glowing teal status tags, live shipping routes map, order batches, and real-time inventory tables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA2cGY2xftKAKaW0pXmNVCQPYujh4Drtapem_38-9CrVmt-MY6AJMUEhdyUcH6u0W2EenL8jWjAup9Fldyb_8UOzgPF82ymWwPwhRlOWll1HBIYL68CDFxOUpmtDi_wmACuDkBa5ZZk8UFOStiFEF6vTDPtDYQGNAvVNsXtzH-BB0wgH-s-fspg0F6sMNOwWA-du6Fwp50Po_PGoNbF3VUiq9CK9ZFx2Hz8Ai5gaIYqE6au_vqa6Z0" />
      {/* Floating Overlay Console Panel */}
      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-low/95 backdrop-blur-xl shadow-lg flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
      </div>
      <div>
      <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Auto-Fulfillment Dispatch API</h4>
      <span className="font-body-sm text-body-sm text-on-surface-variant">DHL Express &amp; FedEx Cross-Border Integration</span>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <span className="font-label-badge text-label-badge px-3 py-1 rounded bg-primary-container text-on-primary-container font-bold">100% Automated</span>
      <span className="font-label-badge text-label-badge px-3 py-1 rounded bg-surface-container-highest text-on-surface">99.4% On-Time</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Mobile Phone Mockup: Consumer Shopping Experience (4 cols) */}
      <div className="lg:col-span-4 lg:-ml-6 z-20 flex justify-center">
      {/* Smartphone Hardware Body Frame */}
      <div className="w-72 sm:w-80 bg-surface-container-highest p-3 rounded-[40px] shadow-2xl">
      {/* Screen Inset */}
      <div className="w-full bg-surface-container-lowest rounded-[32px] overflow-hidden flex flex-col shadow-inner">
      {/* Dynamic Island Bar */}
      <div className="w-full pt-3 pb-2 px-6 flex items-center justify-between bg-surface-container-lowest text-on-surface-variant">
      <span className="font-label-md text-label-md font-bold text-on-surface text-[12px]">9:41</span>
      <div className="w-20 h-4 bg-surface-container rounded-full mx-auto"></div>
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-[13px]">signal_cellular_alt</span>
      <span className="material-symbols-outlined text-[13px]">wifi</span>
      <span className="material-symbols-outlined text-[13px]">battery_full</span>
      </div>
      </div>
      {/* Mobile Content Screen with Real Image Placeholder */}
      <div className="relative w-full h-96 overflow-hidden flex flex-col justify-between">
      <img className="w-full h-full object-cover" data-alt="Ultra crisp mobile commerce app interface on an AMOLED dark background displaying luxury high-tech fitness smart clothing product with 3D product previews, 1-tap Apple Pay checkout button in neon teal, customer star ratings, and VIP affiliate member discount badge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLGGnpZk7VnZvzy5bLos-XMvqSM0_-cjNOHj2VOk_jDENsX8lSQqJpIey9c7oTJL88RPS3EMz8Di8l-c9S3u1DgBpqCr_tMNZwnND_3t8y5zsv6mqo4FryIIPpuzMpmeYRWQarK8IDBCUtkcLO0DdxnxmSK6wldE2XGDxVCVs3t2T1_yV9hjk2uEy4pd2wmc3uo0NuiN3M84d2XvpnVCYRMJ_tDwkTI1TiZIOucUZURcIKm3SKJitf" />
      {/* Bottom Sticky High-Conversion 1-Click Purchase Drawer */}
      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/95 to-transparent pt-8 flex flex-col gap-2.5">
      <div className="flex items-center justify-between text-on-surface">
      <span className="font-label-md text-label-md text-on-surface-variant">Affiliate Code Applied:</span>
      <span className="font-label-md text-label-md font-bold text-primary-container">SAVEX20 (-$36.80)</span>
      </div>
      <button className="w-full py-3 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,170,0.4)] hover:shadow-[0_0_28px_rgba(0,242,170,0.6)] transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                          Instant 1-Click Buy • $147.40
                        </button>
      <div className="flex items-center justify-center gap-2 text-on-surface-variant text-[11px] font-label-md text-label-md">
      <span className="material-symbols-outlined text-[14px] text-primary-container">verified_user</span>
      <span>Apple Pay • Stripe Protected • 30-Day Returns</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* 05: Executive Deck Anchor & Consultation Directive */}
      <section className="relative z-10 pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary-container font-headline-sm text-headline-sm font-bold shadow-md">
                AS
              </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">Ashknaz Serwer • Growth &amp; Engineering</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-[0.08em]">Full-Funnel Commerce Architecture • Global Deployment</span>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <a className="px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface hover:text-primary transition-colors font-label-md text-label-md font-semibold shadow-sm" href="/ecommerce">
                Review Live Stores
              </a>
      <a className="px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_24px_-4px_rgba(0,242,170,0.35)] hover:shadow-[0_0_36px_0px_rgba(0,242,170,0.5)] transition-all flex items-center gap-2" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
                Deploy Store Ecosystem
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      </div>
      </section>
      </div>
      </div>
    </DeckLayout>
  );
}
