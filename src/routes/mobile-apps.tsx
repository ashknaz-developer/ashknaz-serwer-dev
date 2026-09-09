import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/mobile-apps")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Mobile App Development Solutions | Ashknaz Serwer" },
      { name: "description", content: "Cross-platform Flutter and React Native apps with cloud backends, 60fps native feel, and 99.8% crash-free production reliability." },
      { property: "og:title", content: "Mobile App Development Solutions | Ashknaz Serwer" },
      { property: "og:description", content: "Cross-platform Flutter and React Native apps with cloud backends, 60fps native feel, and 99.8% crash-free production reliability." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={3}>
      <div className="flex flex-col w-full">
      <div className="relative w-full max-w-7xl mx-auto px-slide-padding-mob md:px-gutter-xl lg:px-gutter-2xl py-6 flex flex-col gap-12 lg:gap-16">
      {/* Atmospheric Ambient Glows (No screen bleed, absolute relative to slide container) */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      {/* Slide Header & Meta Row */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
      <div className="flex flex-col gap-2 max-w-3xl">
      <div className="flex items-center gap-3">
      <span className="px-3 py-1 rounded-full bg-primary-container/15 text-primary-fixed-dim font-label-badge text-label-badge uppercase tracking-[0.08em] shadow-[0_0_16px_rgba(0,242,170,0.25)] flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                  Architecture Deck • Slide 03
                </span>
      <span className="font-label-md text-label-md text-on-surface-variant font-medium">iOS / Android Production Suite</span>
      </div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Mobile App Development Solutions
              </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                Cross-Platform &amp; Native Mobile Experiences Engineered for Scale
              </p>
      </div>
      {/* Quick Status Metric Inset */}
      <div className="flex items-center gap-4 bg-surface-container-low px-5 py-3 rounded-xl shadow-lg shrink-0">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-fixed-dim shadow-inner">
      <span className="material-symbols-outlined text-[24px]">verified</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">Production Metric</span>
      <span className="font-headline-sm text-headline-sm text-primary font-bold">99.8% Crash-Free</span>
      </div>
      </div>
      </section>
      {/* Main Slide Grid: Pillar Cards (Left) vs Hardware Mockups (Right) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left Column: 3 Numbered Interactive Cards */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-4">
      {/* Card 1 */}
      <div className="group relative p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold shadow-[0_0_12px_rgba(0,242,170,0.3)]">
                      01
                    </span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Cross-Platform Flutter &amp; React Native
                    </span>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">devices</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant pl-11">
                  Seamless single-codebase apps for iOS and Android with 60fps native feel, reduced maintenance overhead, and unified platform behavior.
                </p>
      <div className="pl-11 pt-1 flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-badge text-label-badge">Skia Engine</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-badge text-label-badge">Fabric Architecture</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary-fixed-dim font-label-badge text-label-badge">60 FPS</span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="group relative p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold shadow-[0_0_12px_rgba(0,242,170,0.3)]">
                      02
                    </span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Cloud &amp; API Backends
                    </span>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">cloud_sync</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant pl-11">
                  Firebase Auth, Firestore, Cloud Functions, real-time message streams, and robust custom REST &amp; GraphQL integrations with strict schema compliance.
                </p>
      <div className="pl-11 pt-1 flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-badge text-label-badge">OAuth / JWT</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-badge text-label-badge">Firestore Stream</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-badge text-label-badge">Sub-50ms Sync</span>
      </div>
      </div>
      {/* Card 3 */}
      <div className="group relative p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold shadow-[0_0_12px_rgba(0,242,170,0.3)]">
                      03
                    </span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Intuitive Mobile UX/UI
                    </span>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">touch_app</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant pl-11">
                  Engaging haptic gestures, pixel-perfect design, offline support with encrypted local caches, and buttery-smooth layout transitions.
                </p>
      <div className="pl-11 pt-1 flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-badge text-label-badge">Offline-First</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-badge text-label-badge">Haptic Feedback</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary-fixed-dim font-label-badge text-label-badge">WCAG AA</span>
      </div>
      </div>
      </div>
      {/* Right Column: Dual Device Mockup Presentation (Laptop + Smartphone Overlap) */}
      <div className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] lg:min-h-[540px] rounded-2xl bg-surface-container-low p-6 md:p-8 overflow-hidden shadow-2xl">
      {/* Ambient Inner Light */}
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-primary-container/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
      {/* Hardware Stage Frame */}
      <div className="relative w-full h-full flex items-center justify-center">
      {/* Device 1: Laptop Admin Console (Background Base) */}
      <div className="w-full max-w-[540px] -mr-8 md:-mr-12 lg:-mr-16 rounded-xl bg-surface-container-lowest p-2 pb-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
      {/* Laptop Bezel Header */}
      <div className="h-5 px-3 flex items-center justify-between bg-surface-container-highest rounded-t-lg">
      <div className="flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-error"></span>
      <span className="w-2 h-2 rounded-full bg-surface-bright"></span>
      <span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span>
      </div>
      <span className="font-label-badge text-label-badge text-on-surface-variant">admin.commerce-suite.engine/live</span>
      <span className="w-3"></span>
      </div>
      {/* Laptop Screen Content */}
      <div className="w-full h-64 md:h-72 rounded-b-lg overflow-hidden bg-surface-container relative flex flex-col justify-between p-4">
      <div className="flex items-center justify-between pb-3">
      <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-md bg-primary-container/20 flex items-center justify-center text-primary font-bold font-headline-sm">
      <span className="material-symbols-outlined text-[16px]">storefront</span>
      </div>
      <div>
      <h3 className="font-label-lg text-label-lg text-on-surface font-semibold">Merchant Command Center</h3>
      <p className="font-label-badge text-label-badge text-on-surface-variant">Live Telemetry &amp; Node Telemetry</p>
      </div>
      </div>
      <span className="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary-fixed-dim font-label-badge text-label-badge font-bold animate-pulse">99.98% SLA</span>
      </div>
      {/* Admin Dashboard Miniature Chart View */}
      <div className="grid grid-cols-3 gap-3">
      <div className="bg-surface-container-high p-2.5 rounded-lg shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant block">Active Sessions</span>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">148,920</span>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim flex items-center gap-0.5">
      <span className="material-symbols-outlined text-[12px]">trending_up</span> +28.4%
                        </span>
      </div>
      <div className="bg-surface-container-high p-2.5 rounded-lg shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant block">Avg Checkout Time</span>
      <span className="font-headline-sm text-headline-sm font-bold text-primary">1.4s</span>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim flex items-center gap-0.5">
      <span className="material-symbols-outlined text-[12px]">bolt</span> Ultra-fast
                        </span>
      </div>
      <div className="bg-surface-container-high p-2.5 rounded-lg shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant block">App Store Rating</span>
      <span className="font-headline-sm text-headline-sm font-bold text-secondary">4.92 ★</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">12.4k reviews</span>
      </div>
      </div>
      {/* SVG Mini Area Sparkline */}
      <div className="w-full h-24 bg-surface-container-low rounded-lg p-2 flex flex-col justify-between">
      <div className="flex items-center justify-between text-on-surface-variant font-label-badge text-label-badge">
      <span>Transactions / min (Global Clusters)</span>
      <span className="text-primary-fixed-dim">Realtime sync active</span>
      </div>
      <svg className="w-full h-14" preserveAspectRatio="none" viewBox="0 0 400 60">
      <defs>
      <lineargradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#00f2aa" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#00f2aa" stopOpacity="0.0" />
      </lineargradient>
      </defs>
      <path d="M0,45 Q40,15 80,35 T160,20 T240,38 T320,10 T400,22 L400,60 L0,60 Z" fill="url(#areaGrad)" />
      <path d="M0,45 Q40,15 80,35 T160,20 T240,38 T320,10 T400,22" fill="none" stroke="#00f2aa" strokeWidth="2.5" />
      </svg>
      </div>
      <div className="w-full bg-surface-container-highest/60 rounded-full h-1 mt-1 overflow-hidden">
      <div className="bg-primary-container h-full w-4/5"></div>
      </div>
      </div>
      {/* Laptop Base Trackpad Ridge */}
      <div className="w-32 h-1 bg-surface-container-highest mx-auto mt-2 rounded-full"></div>
      </div>
      {/* Device 2: Smartphone Mockup (Foreground Overlap with E-Commerce App Interface) */}
      <div className="relative w-56 md:w-64 -ml-16 md:-ml-24 lg:-ml-28 rounded-[2.5rem] bg-surface-container-lowest p-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.9)] transform rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
      {/* Smartphone Shell & Dynamic Island */}
      <div className="relative w-full h-[450px] md:h-[490px] rounded-[2.2rem] bg-surface-container-lowest overflow-hidden flex flex-col justify-between">
      {/* Screen Background Asset (Generative placeholder) */}
      <div className="absolute inset-0 z-0 bg-surface-container-lowest">
      <img className="w-full h-full object-cover opacity-35" data-alt="High-end sleek mobile commerce app interface dark mode showing luxurious sneakers, vibrant cyan checkout button, crisp product photography with neon lighting accents, dark navy backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC45DwQCibQ0ymSLJcM2ha24iNwKQRQCERA9wR_qyEwMPOx19_-NZzMFVwoVHJFz2YInmPNf7JwiOhPgKzDjdi-UyE2tI6LAlf2m2dMzx-WjRxgzcS_1ZfRd3sPdpW_vxOlkfuRxNbT4zDkzK9DuBBtbgPGjCj7Bs897_4tiXQY-9cGGr3DFaC-LBrXzY5JRSTlhZvFf8u4oW1Vev8-eCGSL31_WrYs3icNWZ0S53Dw3ld4Rmfi1lZK" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-surface-container-lowest/70 to-surface-container-lowest"></div>
      </div>
      {/* Dynamic Island / Speaker Island */}
      <div className="relative z-10 pt-2 flex flex-col items-center">
      <div className="w-20 h-4 bg-surface-container-highest rounded-full flex items-center justify-end px-2">
      <span className="w-2 h-2 rounded-full bg-primary/40"></span>
      </div>
      </div>
      {/* Active Mobile E-Commerce Interface */}
      <div className="relative z-10 px-4 pt-3 flex flex-col gap-3 flex-1">
      {/* Mobile App Header Bar */}
      <div className="flex items-center justify-between text-on-surface">
      <div className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[18px] text-primary">local_mall</span>
      <span className="font-headline-sm text-headline-sm text-on-surface text-sm font-bold">LUMEN</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">search</span>
      <div className="w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-fixed-dim text-xs font-bold">2</div>
      </div>
      </div>
      {/* Product Showcase Mini Hero */}
      <div className="bg-surface-container/90 backdrop-blur-md rounded-xl p-3 shadow-lg flex flex-col gap-2">
      <div className="flex items-center justify-between">
      <span className="px-1.5 py-0.5 rounded bg-primary-container/20 text-primary-fixed-dim font-label-badge text-label-badge font-bold">NEW DROP</span>
      <span className="font-label-md text-label-md text-primary font-bold">$240.00</span>
      </div>
      <div className="w-full h-24 rounded-lg bg-surface-container-high/70 relative overflow-hidden flex items-center justify-center">
      <img className="w-full h-full object-cover" data-alt="Futuristic cyber running shoe in iridescent teal and electric mint glow on dark podium, ultra detailed 3d render" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP6X91QjzPdC6P8_vVjm_nqPJOR9R13r7q6ibmEkaq0pQKf5g7bdNh8mh98dBp2CFbsTZcjAa_xT3irpRqogI2EflUe4XwtOF9wuKnr2DVOxRH8_gSqdOvVpwPcIl7jnb173FekBQ7Ws5Hlb2L38ODy3cJa78bZyjiddqfvCY6mi1BHen0qNr4_witBNlDt771i_Wgo5mddXWp2y4Ze8W8ouWMt-rbdOdJqjCr2gEXGWni06Xb_B5f" />
      <span className="absolute bottom-1 right-2 px-1.5 rounded bg-surface-container-lowest/80 text-[10px] text-primary font-semibold">AR Preview</span>
      </div>
      <div>
      <h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate">AeroFlux Titanium Zero</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Adaptive pneumatic cushioning</p>
      </div>
      </div>
      {/* Mobile Quick Actions / Size Picker */}
      <div className="flex items-center justify-between gap-1 bg-surface-container-low/90 p-1.5 rounded-lg">
      <span className="px-2 py-1 rounded text-xs font-label-md text-on-surface-variant">US 9</span>
      <span className="px-2 py-1 rounded text-xs font-label-md text-on-surface-variant">US 10</span>
      <span className="px-2 py-1 rounded text-xs font-label-md bg-primary-container text-on-primary-container font-bold shadow-sm">US 11</span>
      <span className="px-2 py-1 rounded text-xs font-label-md text-on-surface-variant">US 12</span>
      </div>
      {/* Instant Apple Pay / One-Tap Checkout Button */}
      <button className="w-full py-2.5 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_18px_rgba(0,242,170,0.4)] flex items-center justify-center gap-1.5 hover:shadow-[0_0_24px_rgba(0,242,170,0.6)] transition-all" type="button">
      <span className="material-symbols-outlined text-[16px]">touch_app</span>
      <span>Instant Slide Checkout</span>
      </button>
      </div>
      {/* Home Indicator Bar */}
      <div className="relative z-10 pb-2 flex justify-center">
      <div className="w-24 h-1 bg-on-surface/40 rounded-full"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Lower Section: Frameworks & Technologies */}
      <section className="flex flex-col gap-6 pt-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_#00f2aa]"></div>
      <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                  Mobile Frameworks &amp; Technologies
                </h2>
      </div>
      <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-on-surface-variant">
                Production Architecture Ecosystem
              </span>
      </div>
      {/* Prominent Tech Cards in Electric Cyan/Mint Accent Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
      {/* Tech 1: Flutter */}
      <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center gap-2 group shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary-fixed-dim group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,242,170,0.4)] transition-all">
      <span className="material-symbols-outlined text-[26px]">flutter</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Flutter</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">Multi-Target UI</span>
      </div>
      {/* Tech 2: Dart */}
      <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center gap-2 group shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-secondary-container/15 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,166,224,0.4)] transition-all">
      <span className="material-symbols-outlined text-[26px]">terminal</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-sm font-bold text-on-surface group-hover:text-secondary transition-colors">Dart</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">AOT Compilation</span>
      </div>
      {/* Tech 3: React Native */}
      <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center gap-2 group shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,242,170,0.4)] transition-all">
      <span className="material-symbols-outlined text-[26px]">code_blocks</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-sm font-bold text-on-surface group-hover:text-primary transition-colors">React Native</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">TurboModules</span>
      </div>
      {/* Tech 4: Firebase */}
      <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center gap-2 group shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-tertiary-container/15 flex items-center justify-center text-tertiary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(48,241,174,0.4)] transition-all">
      <span className="material-symbols-outlined text-[26px]">local_fire_department</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-sm font-bold text-on-surface group-hover:text-tertiary transition-colors">Firebase</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">Cloud Functions</span>
      </div>
      {/* Tech 5: REST APIs */}
      <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center gap-2 group shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-secondary-container/15 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,166,224,0.4)] transition-all">
      <span className="material-symbols-outlined text-[26px]">api</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-sm font-bold text-on-surface group-hover:text-secondary transition-colors">REST APIs</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">OpenAPI / JSON</span>
      </div>
      {/* Tech 6: SQLite / Hive */}
      <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center gap-2 group shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary-fixed-dim group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,242,170,0.4)] transition-all">
      <span className="material-symbols-outlined text-[26px]">storage</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-sm font-bold text-on-surface group-hover:text-primary transition-colors">SQLite / Hive</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">Encrypted Storage</span>
      </div>
      {/* Tech 7: Fastlane / Store Deployment */}
      <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center gap-2 group shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-tertiary-container/15 flex items-center justify-center text-tertiary-container group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(48,241,174,0.4)] transition-all">
      <span className="material-symbols-outlined text-[26px]">rocket_launch</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-sm font-bold text-on-surface group-hover:text-tertiary-container transition-colors">Fastlane</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">Store Deployment</span>
      </div>
      </div>
      {/* Bottom Metric Indicator Highlight: Fast Delivery & Store Acceptance */}
      <div className="w-full mt-2 rounded-2xl bg-surface-container-low p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
      <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(0,242,170,0.45)]">
      <span className="material-symbols-outlined text-[32px]">published_with_changes</span>
      </div>
      <div className="flex flex-col">
      <div className="flex items-center gap-2">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">100% App Store Acceptance Guarantee</span>
      <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-badge text-label-badge font-bold">Zero Rejections</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
                    Full adherence to Apple Human Interface Guidelines and Google Material You requirements ensures rapid approval cycles within 48–72 hours.
                  </p>
      </div>
      </div>
      {/* Fast Delivery KPI Pills */}
      <div className="flex items-center gap-4 shrink-0">
      <div className="flex flex-col items-end">
      <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">4.2 Weeks</span>
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">Average MVP Turnaround</span>
      </div>
      <div className="h-10 w-px bg-surface-container-highest"></div>
      <a className="px-5 py-3 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-lg text-label-lg font-bold transition-all flex items-center gap-2 shadow-md" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
      <span>Scope Mobile Project</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      </div>
      </div>
      </section>
      {/* Dedicated Section: Featured Mobile Project Case Study */}
      <section className="flex flex-col gap-8 pt-8 border-t border-outline-variant/30">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex flex-col gap-2 max-w-3xl">
      <div className="flex items-center gap-3">
      <span className="px-3 py-1 rounded-full bg-primary-container/15 text-primary font-label-badge text-label-badge uppercase tracking-[0.08em] shadow-[0_0_16px_rgba(0,242,170,0.25)] flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
      FEATURED MOBILE PROJECT CASE STUDY
      </span>
      <span className="font-label-md text-label-md text-on-surface-variant font-medium">Production Release 2024 / 2025</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
      AeroFlux &amp; Lumen: Omnichannel Cross-Platform E-Commerce Ecosystem
      </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
      An enterprise-grade, high-conversion mobile retail environment pairing a real-time reactive Flutter client with a resilient Node.js / Firebase telemetry backplane.
      </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
      <span className="px-3 py-1.5 rounded-lg bg-surface-container-high text-primary-fixed-dim font-label-badge text-label-badge border border-outline-variant/40 flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[16px]">verified</span> Enterprise Tier
      </span>
      <span className="px-3 py-1.5 rounded-lg bg-surface-container-high text-secondary font-label-badge text-label-badge border border-outline-variant/40 flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[16px]">speed</span> 60fps Native
      </span>
      </div>
      </div>
      {/* Project Impact Specs Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col gap-1.5 shadow-lg relative overflow-hidden group hover:border-primary-container/50 transition-all">
      <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary-container/10 rounded-full blur-xl group-hover:bg-primary-container/20 transition-all"></div>
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">Architecture Scope</span>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">iOS &amp; Android Single Codebase</span>
      <span className="font-body-sm text-body-sm text-primary-fixed-dim flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">flutter</span> Unified Flutter Engine
      </span>
      </div>
      <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col gap-1.5 shadow-lg relative overflow-hidden group hover:border-primary-container/50 transition-all">
      <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary-container/10 rounded-full blur-xl group-hover:bg-primary-container/20 transition-all"></div>
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">Production Stability</span>
      <span className="font-metric-display text-[32px] leading-tight font-extrabold text-primary">99.8%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Crash-Free Sessions across 140k+ users</span>
      </div>
      <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col gap-1.5 shadow-lg relative overflow-hidden group hover:border-primary-container/50 transition-all">
      <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary-container/10 rounded-full blur-xl group-hover:bg-secondary-container/20 transition-all"></div>
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">Checkout Turnaround</span>
      <span className="font-metric-display text-[32px] leading-tight font-extrabold text-secondary">1.4s</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">One-tap slide Apple Pay &amp; Google Pay</span>
      </div>
      <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col gap-1.5 shadow-lg relative overflow-hidden group hover:border-primary-container/50 transition-all">
      <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-tertiary-container/10 rounded-full blur-xl group-hover:bg-tertiary-container/20 transition-all"></div>
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">Commercial Lift</span>
      <span className="font-metric-display text-[32px] leading-tight font-extrabold text-primary-fixed">+45%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Conversion uplift over legacy store</span>
      </div>
      </div>
      {/* Realistic Dual Mockup Showcase Container */}
      <div className="relative w-full rounded-3xl bg-surface-container-low/90 border border-outline-variant/50 p-6 md:p-10 lg:p-12 overflow-hidden shadow-2xl">
      {/* Ambient Lighting Layers */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-24 right-1/4 w-[450px] h-[450px] bg-secondary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
      {/* Left / Center: High-Fidelity PC Laptop Dashboard (Merchant Command Center & Inventory Dispatch) */}
      <div className="lg:col-span-7 flex flex-col gap-3">
      <div className="flex items-center justify-between px-2">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[20px]">laptop_mac</span>
      <span className="font-label-lg text-label-lg font-bold text-on-surface">Merchant Command Center &amp; Inventory Dispatch Portal</span>
      </div>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim bg-primary-container/20 px-2.5 py-0.5 rounded-full font-semibold">Live Node.js Telemetry</span>
      </div>
      {/* Laptop Outer Bezel Frame */}
      <div className="w-full rounded-2xl bg-surface-container-lowest p-2 md:p-3 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-outline-variant/60">
      {/* Top Browser Bar */}
      <div className="h-8 px-4 flex items-center justify-between bg-surface-container-highest rounded-t-xl border-b border-outline-variant/30">
      <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-surface-bright"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim"></span>
      </div>
      <div className="flex items-center gap-2 bg-surface-container-low px-4 py-1 rounded-md text-xs font-mono text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px] text-primary">lock</span>
      <span>https://dispatch.aeroflux-lumen.internal/telemetry/live</span>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-[16px]">refresh</span>
      <span className="material-symbols-outlined text-[16px]">more_vert</span>
      </div>
      </div>
      {/* Laptop Display Canvas */}
      <div className="w-full rounded-b-xl overflow-hidden bg-surface-container p-4 md:p-5 flex flex-col gap-4">
      {/* Command Center Top Stat Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-outline-variant/30">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary font-bold">
      <span className="material-symbols-outlined text-[20px]">hub</span>
      </div>
      <div>
      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">AeroFlux Global Node Mesh</h4>
      <p className="font-label-badge text-label-badge text-on-surface-variant">Firebase Cloud Functions • Sub-50ms sync</p>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
      <span className="font-label-badge text-label-badge text-primary font-mono font-bold">ACTIVE NODES: 24/24</span>
      </div>
      </div>
      {/* Telemetry Metric Row */}
      <div className="grid grid-cols-3 gap-3">
      <div className="bg-surface-container-high/90 p-3 rounded-xl border border-outline-variant/30">
      <span className="font-label-badge text-label-badge text-on-surface-variant block">Realtime Concurrency</span>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">148,920</span>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim flex items-center gap-0.5 mt-0.5">
      <span className="material-symbols-outlined text-[12px]">trending_up</span> +34.2% peak
      </span>
      </div>
      <div className="bg-surface-container-high/90 p-3 rounded-xl border border-outline-variant/30">
      <span className="font-label-badge text-label-badge text-on-surface-variant block">Fulfillment SLA</span>
      <span className="font-headline-sm text-headline-sm font-bold text-primary">99.98%</span>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim flex items-center gap-0.5 mt-0.5">
      <span className="material-symbols-outlined text-[12px]">verified</span> Zero dropped
      </span>
      </div>
      <div className="bg-surface-container-high/90 p-3 rounded-xl border border-outline-variant/30">
      <span className="font-label-badge text-label-badge text-on-surface-variant block">Avg Transaction</span>
      <span className="font-headline-sm text-headline-sm font-bold text-secondary">$184.20</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant mt-0.5 block">12.8k orders / hr</span>
      </div>
      </div>
      {/* Live Order Dispatch Stream List */}
      <div className="flex flex-col gap-2 bg-surface-container-low/90 p-3 rounded-xl border border-outline-variant/30">
      <div className="flex items-center justify-between text-on-surface-variant font-label-badge text-label-badge">
      <span>LIVE DISPATCH PIPELINE</span>
      <span className="text-primary-fixed-dim">Automated Micro-fulfillment</span>
      </div>
      <div className="grid grid-cols-1 divide-y divide-outline-variant/20 text-xs">
      <div className="py-1.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
      <span className="font-mono text-on-surface font-semibold">#ORD-89421</span>
      <span className="text-on-surface-variant">AeroFlux Titanium Zero (US 11)</span>
      </div>
      <span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-primary-container/15 text-primary">Dispatched • 1.2s</span>
      </div>
      <div className="py-1.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
      <span className="font-mono text-on-surface font-semibold">#ORD-89420</span>
      <span className="text-on-surface-variant">Quantum Knit Edition (US 10)</span>
      </div>
      <span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-container/15 text-secondary">Sync Confirmed</span>
      </div>
      </div>
      </div>
      {/* Telemetry Sparkline Graph */}
      <div className="w-full bg-surface-container-low rounded-xl p-3 flex flex-col justify-between border border-outline-variant/30">
      <div className="flex items-center justify-between text-on-surface-variant font-label-badge text-label-badge">
      <span>Transactions / min (Global Multi-Region Edge)</span>
      <span className="text-primary-fixed-dim font-mono">3,480 tx/sec</span>
      </div>
      <svg className="w-full h-12 mt-1" preserveAspectRatio="none" viewBox="0 0 400 50">
      <defs>
      <lineargradient id="caseStudyGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#00f2aa" stopOpacity="0.3" />
      <stop offset="100%" stopColor="#00f2aa" stopOpacity="0.0" />
      </lineargradient>
      </defs>
      <path d="M0,35 Q45,10 90,30 T180,15 T270,32 T360,8 T400,20 L400,50 L0,50 Z" fill="url(#caseStudyGrad)" />
      <path d="M0,35 Q45,10 90,30 T180,15 T270,32 T360,8 T400,20" fill="none" stroke="#00f2aa" strokeWidth="2.5" />
      </svg>
      </div>
      </div>
      </div>
      {/* Laptop Trackpad Stand Base */}
      <div className="w-48 h-1.5 bg-surface-container-highest mx-auto mt-2 rounded-full"></div>
      </div>
      {/* Right: Premium Smartphone Mobile Device Mockup (Flutter Customer-Facing App) */}
      <div className="lg:col-span-5 flex flex-col items-center justify-center">
      <div className="w-full max-w-[320px] rounded-[2.8rem] bg-surface-container-lowest p-3 shadow-[0_35px_80px_rgba(0,0,0,0.95)] border-2 border-outline-variant/60 relative group hover:scale-[1.02] transition-transform duration-500">
      {/* Smartphone Shell */}
      <div className="relative w-full h-[540px] rounded-[2.3rem] bg-surface-container-lowest overflow-hidden flex flex-col justify-between border border-outline-variant/40">
      {/* Background visual imagery */}
      <div className="absolute inset-0 z-0 bg-surface-container-lowest">
      <img className="w-full h-full object-cover opacity-40" data-alt="High-end sleek mobile commerce app interface dark mode showing luxurious sneakers, vibrant cyan checkout button, crisp product photography with neon lighting accents, dark navy backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC45DwQCibQ0ymSLJcM2ha24iNwKQRQCERA9wR_qyEwMPOx19_-NZzMFVwoVHJFz2YInmPNf7JwiOhPgKzDjdi-UyE2tI6LAlf2m2dMzx-WjRxgzcS_1ZfRd3sPdpW_vxOlkfuRxNbT4zDkzK9DuBBtbgPGjCj7Bs897_4tiXQY-9cGGr3DFaC-LBrXzY5JRSTlhZvFf8u4oW1Vev8-eCGSL31_WrYs3icNWZ0S53Dw3ld4Rmfi1lZK" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-surface-container-lowest/70 to-surface-container-lowest"></div>
      </div>
      {/* Smartphone Top Notch / Dynamic Island */}
      <div className="relative z-10 pt-2.5 flex flex-col items-center">
      <div className="w-24 h-4 bg-surface-container-highest rounded-full flex items-center justify-between px-2.5 shadow-inner">
      <span className="w-2 h-2 rounded-full bg-primary/60"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40"></span>
      </div>
      </div>
      {/* App Inner Content */}
      <div className="relative z-10 px-4 pt-3 flex flex-col gap-3 flex-1 justify-between pb-3">
      {/* App Bar */}
      <div className="flex items-center justify-between text-on-surface">
      <div className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[20px] text-primary">local_mall</span>
      <span className="font-headline-sm text-headline-sm text-on-surface text-base font-bold tracking-tight">LUMEN</span>
      <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-bold">FLUTTER</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">search</span>
      <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-xs font-bold shadow-md">1</div>
      </div>
      </div>
      {/* Product Feature Card with AR 3D Badge */}
      <div className="bg-surface-container/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl flex flex-col gap-2.5 border border-outline-variant/40">
      <div className="flex items-center justify-between">
      <span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary-fixed-dim font-label-badge text-label-badge font-bold">OFFICIAL DROP</span>
      <span className="font-headline-sm text-headline-sm text-primary font-bold text-base">$240.00</span>
      </div>
      <div className="w-full h-28 rounded-xl bg-surface-container-high/80 relative overflow-hidden flex items-center justify-center border border-outline-variant/30">
      <img className="w-full h-full object-cover" data-alt="Futuristic cyber running shoe in iridescent teal and electric mint glow on dark podium, ultra detailed 3d render" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP6X91QjzPdC6P8_vVjm_nqPJOR9R13r7q6ibmEkaq0pQKf5g7bdNh8mh98dBp2CFbsTZcjAa_xT3irpRqogI2EflUe4XwtOF9wuKnr2DVOxRH8_gSqdOvVpwPcIl7jnb173FekBQ7Ws5Hlb2L38ODy3cJa78bZyjiddqfvCY6mi1BHen0qNr4_witBNlDt771i_Wgo5mddXWp2y4Ze8W8ouWMt-rbdOdJqjCr2gEXGWni06Xb_B5f" />
      <span className="absolute bottom-1.5 right-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 text-[10px] text-primary font-bold shadow flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">view_in_ar</span> 3D Preview
      </span>
      </div>
      <div>
      <h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate">AeroFlux Titanium Zero</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Adaptive pneumatic cushioning system</p>
      </div>
      {/* Size Selection Strip */}
      <div className="flex items-center justify-between gap-1.5 pt-1">
      <span className="px-2.5 py-1 rounded-lg text-xs font-label-md text-on-surface-variant bg-surface-container-low">US 9</span>
      <span className="px-2.5 py-1 rounded-lg text-xs font-label-md text-on-surface-variant bg-surface-container-low">US 10</span>
      <span className="px-2.5 py-1 rounded-lg text-xs font-label-md bg-primary-container text-on-primary-container font-bold shadow-md">US 11</span>
      <span className="px-2.5 py-1 rounded-lg text-xs font-label-md text-on-surface-variant bg-surface-container-low">US 12</span>
      </div>
      </div>
      {/* Haptic Slide Checkout & Instant Pay */}
      <div className="flex flex-col gap-2">
      <button className="w-full py-3 rounded-2xl bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_24px_rgba(0,242,170,0.45)] flex items-center justify-center gap-2 hover:shadow-[0_0_32px_rgba(0,242,170,0.65)] transition-all" type="button">
      <span className="material-symbols-outlined text-[18px]">touch_app</span>
      <span>Slide to Pay • Apple Pay / Google Pay</span>
      </button>
      <div className="flex items-center justify-center gap-2 text-center text-on-surface-variant font-label-badge text-[10px]">
      <span className="material-symbols-outlined text-[12px] text-primary">lock</span>
      <span>Biometric Encrypted • 1.4s Instant Auth</span>
      </div>
      </div>
      </div>
      {/* Bottom Home Pill */}
      <div className="relative z-10 pb-2 flex justify-center">
      <div className="w-28 h-1 bg-on-surface/40 rounded-full"></div>
      </div>
      </div>
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
