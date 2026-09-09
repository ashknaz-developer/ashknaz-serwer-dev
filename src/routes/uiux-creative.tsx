import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/uiux-creative")({
  component: Page,
  head: () => ({
    meta: [
      { title: "UI/UX, Brand Identity & Motion Design | Ashknaz Serwer" },
      { name: "description", content: "Conversion-engineered design systems, brand identity, WCAG-compliant interfaces, and high-impact commercial video production." },
      { property: "og:title", content: "UI/UX, Brand Identity & Motion Design | Ashknaz Serwer" },
      { property: "og:description", content: "Conversion-engineered design systems, brand identity, WCAG-compliant interfaces, and high-impact commercial video production." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={6}>
      <div className="flex flex-col w-full relative overflow-hidden">
      {/* Atmospheric Mint & Slate Ambient Gradients */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-container/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full bg-secondary-container/5 blur-[140px] pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto w-full px-gutter-md sm:px-gutter-xl py-6 flex flex-col gap-12">
      {/* Top Meta Deck Header */}
      <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary-fixed-dim font-label-badge text-label-badge uppercase tracking-[0.08em] shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
      <span>• SLIDE 06 / 06 • CREATIVE &amp; MEDIA ARCHITECTURE • ASHKNAZ SERWER EXECUTIVE DECK</span>
      </div>
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md shadow-sm">
      <span className="material-symbols-outlined text-[16px] text-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
      <span>Figma &amp; Adobe Master Suite • 100% Pixel Precision</span>
      </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="max-w-3xl flex flex-col gap-2">
      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">UI/UX, Brand Identity &amp; Cinematic Motion</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Transforming brand positioning through human-centered user experiences, conversion-engineered design systems, and high-impact commercial video production.</p>
      </div>
      <div className="flex items-center gap-4 bg-surface-container-low px-5 py-3 rounded-xl shrink-0">
      <div className="flex flex-col">
      <span className="font-label-badge text-label-badge uppercase text-primary-fixed-dim">Velocity Standard</span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Sub-48h Sprints</span>
      </div>
      <div className="w-px h-8 bg-surface-container-highest"></div>
      <div className="flex flex-col">
      <span className="font-label-badge text-label-badge uppercase text-primary-fixed-dim">Satisfaction</span>
      <span className="font-headline-sm text-headline-sm text-primary font-bold">100% Guaranteed</span>
      </div>
      </div>
      </div>
      </div>
      {/* Main Deck Presentation Area: Two Columns (Left Services, Right Device Mockups) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: 3 Core Offerings */}
      <div className="lg:col-span-5 flex flex-col gap-4">
      {/* Card 01: Conversion-Engineered UI/UX */}
      <div className="group relative bg-surface-container-low rounded-xl p-6 transition-all duration-300 hover:bg-surface-container hover:shadow-[0_0_24px_-4px_rgba(0,242,170,0.25)] flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-badge text-label-badge uppercase tracking-[0.08em]">Enterprise Design Systems</span>
      <span className="font-metric-display text-[14px] leading-tight text-on-surface-variant font-bold">01</span>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined text-[20px]">layers</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">Conversion-Engineered UI/UX</h3>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Comprehensive Figma design systems, wireframing, high-fidelity clickable prototypes, WCAG accessibility compliance, and micro-interaction states that elevate product credibility.
                </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-md text-label-md">Figma Components</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-md text-label-md">Adobe XD</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-md text-label-md">Design Tokens &amp; Audits</span>
      </div>
      </div>
      {/* Card 02: Brand Identity & Graphic Design */}
      <div className="group relative bg-surface-container-low rounded-xl p-6 transition-all duration-300 hover:bg-surface-container hover:shadow-[0_0_24px_-4px_rgba(0,242,170,0.25)] flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-secondary-fixed-dim font-label-badge text-label-badge uppercase tracking-[0.08em]">Omnichannel Brand Kits</span>
      <span className="font-metric-display text-[14px] leading-tight text-on-surface-variant font-bold">02</span>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[20px]">palette</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors">Brand Identity &amp; Graphic Design</h3>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Distinctive logo design, typography hierarchies, vector illustrations, commercial print collateral, and digital marketing banners built in Adobe Illustrator and Photoshop.
                </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-md text-label-md">Illustrator Vectors</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-md text-label-md">Photoshop Retouching</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-md text-label-md">Brand Styleguides</span>
      </div>
      </div>
      {/* Card 03: Video Editing & Motion Graphics */}
      <div className="group relative bg-surface-container-low rounded-xl p-6 transition-all duration-300 hover:bg-surface-container hover:shadow-[0_0_24px_-4px_rgba(0,242,170,0.25)] flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-tertiary-fixed font-label-badge text-label-badge uppercase tracking-[0.08em]">Viral Retention Edits</span>
      <span className="font-metric-display text-[14px] leading-tight text-on-surface-variant font-bold">03</span>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary-container">
      <span className="material-symbols-outlined text-[20px]">movie</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-tertiary transition-colors">Video Editing &amp; Motion Graphics</h3>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  High-retention commercial video edits, kinetic typography, dynamic 3D transitions, and social ad reels engineered with Premiere Pro and After Effects for maximum viewer retention.
                </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-md text-label-md">After Effects VFX</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-md text-label-md">Premiere Pro 4K</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-md text-label-md">Audio Mastering</span>
      </div>
      </div>
      </div>
      {/* Right Column: Interactive Hardware Canvas Showcase (Desktop Figma Studio + Mobile Phone Overlay) */}
      <div className="lg:col-span-7 relative flex flex-col">
      {/* Desktop Window Frame */}
      <div className="w-full bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Window Header Titlebar */}
      <div className="h-10 bg-surface-container px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-error/70"></div>
      <div className="w-3 h-3 rounded-full bg-secondary/70"></div>
      <div className="w-3 h-3 rounded-full bg-primary-container/80"></div>
      </div>
      <div className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface-variant font-label-badge text-label-badge flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[13px] text-primary-container">lock</span>
      <span>creative.ashknaz.studio/deck/canvas</span>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-[16px]">share</span>
      <span className="material-symbols-outlined text-[16px]">aspect_ratio</span>
      </div>
      </div>
      {/* Figma-style Canvas Workspace */}
      <div className="p-5 flex flex-col gap-4 bg-surface-container-lowest/80 min-h-[440px]">
      {/* Canvas Toolbar & Artboard Meta */}
      <div className="flex items-center justify-between pb-3 bg-surface-container/40 p-2.5 rounded-lg">
      <div className="flex items-center gap-3">
      <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-badge text-label-badge uppercase font-bold">Active Artboard</span>
      <span className="font-label-md text-label-md text-on-surface font-semibold">AURA_Luxury_ECommerce_v4.2</span>
      </div>
      <div className="flex items-center gap-2 font-label-badge text-label-badge text-on-surface-variant">
      <span className="px-2 py-0.5 rounded bg-surface-container-high">Scale: 100%</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-high">Grid: 8pt Soft</span>
      </div>
      </div>
      {/* Visual Workspace Grid: UI Boards & Swatches */}
      <div className="grid grid-cols-12 gap-4">
      {/* Left Mini Canvas Panel: Swatches & Typo Hierarchy */}
      <div className="col-span-12 sm:col-span-5 flex flex-col gap-3">
      {/* Color Palette Card */}
      <div className="bg-surface-container-low p-3.5 rounded-xl flex flex-col gap-2.5">
      <span className="font-label-badge text-label-badge uppercase text-on-surface-variant">Design System • Swatches</span>
      <div className="grid grid-cols-4 gap-2">
      <div className="flex flex-col items-center gap-1">
      <div className="w-full h-8 rounded-lg bg-primary-container shadow-[0_0_12px_rgba(0,242,170,0.5)]"></div>
      <span className="font-label-badge text-[10px] text-on-surface-variant">#00F2AA</span>
      </div>
      <div className="flex flex-col items-center gap-1">
      <div className="w-full h-8 rounded-lg bg-surface-container-lowest"></div>
      <span className="font-label-badge text-[10px] text-on-surface-variant">#080E19</span>
      </div>
      <div className="flex flex-col items-center gap-1">
      <div className="w-full h-8 rounded-lg bg-surface-container-high"></div>
      <span className="font-label-badge text-[10px] text-on-surface-variant">#242A36</span>
      </div>
      <div className="flex flex-col items-center gap-1">
      <div className="w-full h-8 rounded-lg bg-secondary"></div>
      <span className="font-label-badge text-[10px] text-on-surface-variant">#7BD0FF</span>
      </div>
      </div>
      </div>
      {/* Typography System Specimen */}
      <div className="bg-surface-container-low p-3.5 rounded-xl flex flex-col gap-1.5">
      <span className="font-label-badge text-label-badge uppercase text-on-surface-variant">Typographic Rhythm</span>
      <div className="flex flex-col">
      <span className="font-headline-sm text-[16px] text-on-surface font-bold">Plus Jakarta Display</span>
      <span className="font-label-md text-label-md text-primary-fixed-dim">Inter Micro Tight UI Body</span>
      <div className="flex items-center gap-2 mt-1">
      <span className="h-1.5 w-12 rounded-full bg-primary-container"></span>
      <span className="h-1.5 w-6 rounded-full bg-secondary"></span>
      <span className="h-1.5 w-16 rounded-full bg-surface-container-highest"></span>
      </div>
      </div>
      </div>
      {/* Motion Waveform Preview */}
      <div className="bg-surface-container-low p-3 rounded-xl flex flex-col gap-2">
      <div className="flex items-center justify-between text-on-surface-variant font-label-badge text-label-badge uppercase">
      <span>Keyframe Timeline</span>
      <span className="text-primary font-bold">60.00 FPS</span>
      </div>
      <div className="h-10 w-full bg-surface-container rounded-lg p-1.5 flex items-center gap-1 overflow-hidden">
      <div className="h-full w-1 bg-primary-container rounded-full"></div>
      <div className="h-2/3 w-1 bg-primary/70 rounded-full"></div>
      <div className="h-4/5 w-1 bg-primary-container rounded-full"></div>
      <div className="h-1/2 w-1 bg-primary/40 rounded-full"></div>
      <div className="h-3/4 w-1 bg-primary-container rounded-full"></div>
      <div className="h-full w-1 bg-secondary rounded-full"></div>
      <div className="h-2/3 w-1 bg-secondary rounded-full"></div>
      <div className="h-1/3 w-1 bg-surface-container-highest rounded-full"></div>
      <div className="h-4/5 w-1 bg-primary-container rounded-full"></div>
      <div className="h-full w-1 bg-primary-container rounded-full"></div>
      <div className="h-1/2 w-1 bg-surface-container-highest rounded-full"></div>
      <div className="h-3/4 w-1 bg-primary-container rounded-full"></div>
      <div className="h-full w-1 bg-primary-container rounded-full"></div>
      <div className="h-2/3 w-1 bg-secondary rounded-full"></div>
      </div>
      </div>
      </div>
      {/* Right Canvas Visual: Interactive High-Gloss Sneaker eCommerce Showcase Board */}
      <div className="col-span-12 sm:col-span-7 bg-surface-container-low rounded-xl p-4 flex flex-col gap-3 relative">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      <span className="font-label-badge text-label-badge text-on-surface font-semibold">Artboard • Checkout Prototype</span>
      </div>
      <span className="font-label-badge text-label-badge text-on-surface-variant">390 x 844 px</span>
      </div>
      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg bg-surface-container">
      <img className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" data-alt="Editorial commercial product photography of an ultra-futuristic aerodynamic luxury sneaker hovering against a midnight deep slate-navy gradient background with sharp electric cyan and mint rim lighting, reflections, high detail studio shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8HyxYuGfTNIhEm4pXepgndtwuAadZXUH6WzmfhytvpfeExN0m5Hu22U7KeCX63k4lKtBKgBeAeSyLnZCGB0Y8syDVulCkaN55iEcUrAB1BDc6Xz__NTK1ln0IQOgy1ukI4O6fnk2DoT7gvTZ-Bb66qOQulAuntukwtaIlzCRbYwqayFSLr6Uh6aiI67E7163W72ClgoEfTvaBbl0uRrS8TFDM2TqGH8bz0fltFeS74KcWIJfCWFt3" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface-container-low/90 backdrop-blur-md text-primary font-label-badge text-label-badge">
                          99.8% UX Score
                        </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
      <div className="flex flex-col">
      <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase">AERO-01 Cyber Runner</span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">$340.00 USD</span>
      </div>
      <div className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-[0_0_16px_rgba(0,242,170,0.4)]">
                            View Wireframe
                          </div>
      </div>
      </div>
      <div className="flex items-center justify-between pt-1">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[14px]">touch_app</span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">14 Interactive Micro-Triggers</span>
      </div>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase">Status: Approved</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Sleek Overlapping Smartphone Mockup */}
      <div className="hidden sm:block absolute -bottom-10 -right-6 w-64 bg-surface-container-highest p-2.5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform duration-300">
      <div className="w-full bg-surface-container-lowest rounded-[2rem] overflow-hidden p-3.5 flex flex-col gap-3">
      {/* Mobile Status Bar */}
      <div className="flex items-center justify-between text-on-surface text-[10px] font-label-badge px-1">
      <span>9:41</span>
      <div className="w-14 h-3.5 bg-surface-container-high rounded-full mx-auto"></div>
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-[11px]">signal_cellular_4_bar</span>
      <span className="material-symbols-outlined text-[11px]">wifi</span>
      <span className="material-symbols-outlined text-[11px]">battery_full</span>
      </div>
      </div>
      {/* Mobile App Header */}
      <div className="flex items-center justify-between pt-1">
      <div className="flex items-center gap-1.5">
      <div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined text-[15px]">diamond</span>
      </div>
      <span className="font-label-badge text-label-badge font-bold text-on-surface">VALOIS APPAREL</span>
      </div>
      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">shopping_bag</span>
      </div>
      {/* Mobile Hero Sneaker Feature */}
      <div className="relative w-full h-40 rounded-xl overflow-hidden bg-surface-container-low">
      <img className="w-full h-full object-cover" data-alt="Close up detail shot of futuristic high-performance luxury sneaker with luminescent mint sole and textured carbon-fiber mesh in a dark slate studio setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFWs_xQFgf1txXNcfMowob7AYdD2UbwoIsri3eIoThhGH8W3XEc95pqtUTltK7iLyJpM4CPkihhQyD48U9TOF26Pnpk2Zh2YVr9KIeHFEKbiriFM_S41Y_MgTgFtHCuiSnVg2HnjZDNqSJap3g0Ig4LIyIipaH36eU3fSCKlHBgiGnn_1_S99Tuyv_MzKQkbLGK03NfJXw3Afu9bT6RkchDO_L7DkPEbGwUH3c6hZkN9GxyGXiTIB3" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-badge text-[9px] font-bold">
                      NEW DROP
                    </div>
      <div className="absolute bottom-2 left-2">
      <p className="font-headline-sm text-[13px] leading-tight text-on-surface font-bold">Apex Carbon V3</p>
      <p className="font-label-badge text-[10px] text-primary-fixed-dim">$420 • In Stock</p>
      </div>
      </div>
      {/* Mobile Action Button */}
      <button className="w-full py-2 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md font-bold text-center flex items-center justify-center gap-1.5 shadow-[0_0_16px_rgba(0,242,170,0.4)]" type="button">
      <span>Instant Buy • Apple Pay</span>
      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* Creative Software & Production Ecosystem Grid */}
      <div className="flex flex-col gap-6 pt-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div className="flex items-center gap-2.5">
      <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,242,170,0.8)]"></span>
      <h2 className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-on-surface">Creative Software &amp; Production Ecosystem</h2>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">INDUSTRY-STANDARD TOOLS FOR PREMIUM COMMERCIAL ASSETS</span>
      </div>
      {/* 8 Sleek Technology Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
      {/* Figma */}
      <div className="bg-surface-container-low hover:bg-surface-container p-4 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-200 group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[22px]">draw</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface">Figma</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Design Systems &amp; Prototypes</span>
      </div>
      {/* Photoshop */}
      <div className="bg-surface-container-low hover:bg-surface-container p-4 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-200 group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[22px]">photo_camera</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface">Adobe Ps</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Retouching &amp; Compositing</span>
      </div>
      {/* Illustrator */}
      <div className="bg-surface-container-low hover:bg-surface-container p-4 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-200 group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-fixed-dim group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[22px]">polyline</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface">Adobe Ai</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Vector Branding &amp; Marks</span>
      </div>
      {/* Premiere Pro */}
      <div className="bg-surface-container-low hover:bg-surface-container p-4 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-200 group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[22px]">video_settings</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface">Premiere Pr</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Cinematic Video Assembly</span>
      </div>
      {/* After Effects */}
      <div className="bg-surface-container-low hover:bg-surface-container p-4 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-200 group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary-container group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[22px]">animation</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface">After Effects</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Motion Graphics &amp; VFX</span>
      </div>
      {/* InDesign */}
      <div className="bg-surface-container-low hover:bg-surface-container p-4 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-200 group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[22px]">menu_book</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface">InDesign</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Pitch Decks &amp; Editorial</span>
      </div>
      {/* Canva Pro */}
      <div className="bg-surface-container-low hover:bg-surface-container p-4 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-200 group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary-fixed group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[22px]">dashboard_customize</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface">Canva Pro</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Social Collateral Kits</span>
      </div>
      {/* Blender 3D */}
      <div className="bg-surface-container-low hover:bg-surface-container p-4 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-200 group">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[22px]">view_in_ar</span>
      </div>
      <span className="font-label-lg text-label-lg font-bold text-on-surface">Blender 3D</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Spatial 3D &amp; Motion</span>
      </div>
      </div>
      </div>
      {/* Bottom Value Banner with Mint Glowing Container */}
      <div className="w-full rounded-2xl bg-surface-container-low p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_0_36px_-6px_rgba(0,242,170,0.25)] relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
      {/* Left Guarantee Info */}
      <div className="flex items-center gap-4 max-w-2xl">
      <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container shrink-0 shadow-[0_0_20px_rgba(0,242,170,0.3)]">
      <span className="material-symbols-outlined text-[26px]">palette</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Full Production Turnaround Guarantee</span>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Fast-track 48h sprint cycles for UI kits, marketing assets, and ad campaigns with unlimited refinement.
                </p>
      </div>
      </div>
      {/* Right Stat & Call to Action Button */}
      <div className="flex flex-wrap items-center gap-6 shrink-0">
      <div className="flex flex-col text-right">
      <span className="font-metric-display text-metric-display text-primary-container font-extrabold tracking-tight">100+</span>
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Creative Assets Delivered</span>
      </div>
      <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_24px_-4px_rgba(0,242,170,0.45)] hover:shadow-[0_0_36px_0px_rgba(0,242,170,0.65)] hover:-translate-y-0.5 transition-all" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
      <span>Initiate Creative Project</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* Presentation Deck Navigation & Footnote Indicator */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 pb-6 text-on-surface-variant">
      <div className="flex items-center gap-2 font-label-badge text-label-badge uppercase tracking-[0.08em]">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      <span>ASHKNAZ SERWER • DIGITAL GROWTH &amp; ENGINEERING</span>
      </div>
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
      <div className="w-24 h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
      <div className="h-full w-full bg-primary-container rounded-full shadow-[0_0_10px_rgba(0,242,170,0.7)]"></div>
      </div>
      <span className="font-label-md text-label-md font-semibold text-primary">06 / 06</span>
      </div>
      <div className="flex items-center gap-1">
      <button aria-label="Previous slide" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" type="button">
      <span className="material-symbols-outlined text-[16px]">chevron_left</span>
      </button>
      <button aria-label="Next slide" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" type="button">
      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
    </DeckLayout>
  );
}
