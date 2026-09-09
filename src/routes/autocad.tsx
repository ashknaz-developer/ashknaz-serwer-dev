import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/autocad")({
  component: Page,
  head: () => ({
    meta: [
      { title: "AutoCAD Drafting & 3D Spatial Modeling | Ashknaz Serwer" },
      { name: "description", content: "Precision 2D blueprints, MEP schematics, architectural planning, and photorealistic 3D visualization built for permitting." },
      { property: "og:title", content: "AutoCAD Drafting & 3D Spatial Modeling | Ashknaz Serwer" },
      { property: "og:description", content: "Precision 2D blueprints, MEP schematics, architectural planning, and photorealistic 3D visualization built for permitting." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={9}>
      <div className="flex flex-col w-full">
      {/* Subtle Ambient Top Halo */}
      <div className="relative w-full max-w-7xl mx-auto px-gutter-md sm:px-gutter-xl pt-6 pb-20">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-primary-container/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      {/* Section 1: Presentation Header / Meta Strip */}
      <header className="flex flex-col gap-6 mb-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high shadow-sm">
      <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_10px_rgba(0,242,170,0.8)] animate-pulse"></span>
      <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-primary">SLIDE 09 / 09 • CAD &amp; SPATIAL ENGINEERING • ASHKNAZ SERWER</span>
      </div>
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container shadow-sm">
      <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
      <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-on-surface-variant">SUB-MILLIMETER PRECISION • BIM &amp; CAD COMPLIANCE</span>
      </div>
      </div>
      <div className="flex flex-col gap-3 max-w-5xl">
      <h1 className="font-display-xl text-display-xl text-on-surface tracking-tight">
                AutoCAD Drafting, Architectural Planning &amp; <span className="text-primary">3D Spatial Modeling</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
                Technical 2D floor plans, elevation blueprints, MEP spatial schematics, and photorealistic 3D architectural visualizations engineered for immediate contractor execution and council permitting.
              </p>
      </div>
      </header>
      {/* Section 2: 3-Pillar Capability Grid + Live CAD Workstation Telemetry */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch mb-24">
      {/* Left Column: 3 Architectural Pillars */}
      <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
      {/* Pillar 01 */}
      <div className="group p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-[0.08em] px-2.5 py-1 rounded bg-surface-container-lowest">MODULE 01</span>
      <span className="material-symbols-outlined text-primary text-[22px]">architecture</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Precision 2D AutoCAD Drafting &amp; Blueprints
                </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Architectural floor plans, structural cross-sections, HVAC, electrical, and plumbing schematics drafted to exact council specifications with zero dimensional drift.
                </p>
      <div className="flex flex-wrap gap-2 pt-1">
      <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant">2D Floor Plans</span>
      <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant">MEP Schematics</span>
      <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant">Permit Ready</span>
      </div>
      </div>
      {/* Pillar 02 */}
      <div className="group p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge text-secondary uppercase tracking-[0.08em] px-2.5 py-1 rounded bg-surface-container-lowest">MODULE 02</span>
      <span className="material-symbols-outlined text-secondary text-[22px]">view_in_ar</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                  3D Spatial Modeling &amp; Interior Visuals
                </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Blender &amp; SketchUp Pro spatial volume generation, PBR physical material texturing, real-world photometric daylighting, and photorealistic 4K perspective renders.
                </p>
      <div className="flex flex-wrap gap-2 pt-1">
      <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant">Photorealistic Lighting</span>
      <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant">4K Walkthroughs</span>
      <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant">BIM Integration</span>
      </div>
      </div>
      {/* Pillar 03 */}
      <div className="group p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge text-tertiary uppercase tracking-[0.08em] px-2.5 py-1 rounded bg-surface-container-lowest">MODULE 03</span>
      <span className="material-symbols-outlined text-tertiary text-[22px]">fact_check</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-tertiary transition-colors">
                  Project Estimation &amp; Execution Compliance
                </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Detailed Bill of Materials (BOM), structural load compliance tracking, precision CNC cut files, and multi-format handoffs (.DWG, .DXF, .STEP, .IFC).
                </p>
      <div className="flex flex-wrap gap-2 pt-1">
      <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant">Automated BOM</span>
      <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant">Zoning Clearance</span>
      <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant">CNC/DXF Export</span>
      </div>
      </div>
      </div>
      {/* Right Column: Live Workstation CAD Environment Mockup */}
      <div className="lg:col-span-7 flex flex-col">
      <div className="relative w-full h-full rounded-2xl bg-surface-container-lowest shadow-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
      {/* Ambient Glow Node inside Workstation */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
      {/* App Window Title Bar */}
      <div className="w-full flex items-center justify-between pb-4 mb-4 bg-surface-container-low px-4 py-2.5 rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-error"></div>
      <div className="w-3 h-3 rounded-full bg-surface-bright"></div>
      <div className="w-3 h-3 rounded-full bg-primary-container"></div>
      <span className="ml-2 font-label-badge text-label-badge text-on-surface tracking-wide truncate">
                      AutoCAD 2025 Architecture • Master_Commercial_FloorPlan.dwg [SCALE 1:50]
                    </span>
      </div>
      <div className="hidden sm:flex items-center gap-3">
      <span className="px-2 py-0.5 rounded bg-surface-container font-label-badge text-label-badge text-primary">LIVE VIEWPORT</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">EPSG:7855</span>
      </div>
      </div>
      {/* Main Blueprint Workspace Canvas with Vector CAD Lines */}
      <div className="relative w-full flex-1 min-h-[360px] bg-surface rounded-xl overflow-hidden shadow-inner flex flex-col justify-between p-4">
      {/* CAD Blueprint Background Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
      <pattern height="40" id="cad-grid" patternUnits="userSpaceOnUse" width="40">
      <path className="text-on-surface-variant" d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <path className="text-primary" d="M 200 0 L 0 0 0 200" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </pattern>
      </defs>
      <rect fill="url(#cad-grid)" height="100%" width="100%" />
      </svg>
      {/* Vector Architectural Floor Plan Schematics */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
      {/* Top Telemetry Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-high/90 backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
      <span className="font-label-md text-label-md text-primary font-bold">GRID ACCURACY: 0.002mm</span>
      </div>
      <div className="flex items-center gap-4 text-on-surface-variant font-label-badge text-label-badge bg-surface-container-high/80 px-3 py-1.5 rounded">
      <span>X: 142.854m</span>
      <span>Y: 089.412m</span>
      <span className="text-secondary">Z: +12.400m LVL 3</span>
      </div>
      </div>
      {/* Center Interactive-Look Blueprint Layout */}
      <div className="my-auto py-4 relative flex items-center justify-center">
      <svg className="w-full max-w-lg h-56 drop-shadow-[0_0_18px_rgba(0,242,170,0.25)]" fill="none" viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Structural Shell */}
      <rect className="text-primary-container" height="200" rx="4" stroke="currentColor" strokeDasharray="4 2" strokeWidth="2.5" width="460" x="20" y="20" />
      {/* Internal Load-Bearing Walls */}
      <path className="text-primary" d="M180 20 V140 H340 V20" stroke="currentColor" strokeWidth="3" />
      <path className="text-primary" d="M180 140 H60 V220" stroke="currentColor" strokeWidth="3" />
      <path className="text-primary" d="M340 140 H440 V220" stroke="currentColor" strokeWidth="3" />
      {/* Secondary Partitions & Office Cells */}
      <line className="text-secondary" stroke="currentColor" strokeWidth="1.5" x={true}1="180" x={true}2="340" y={true}1="80" y={true}2="80" />
      <line className="text-secondary" stroke="currentColor" strokeWidth="1.5" x={true}1="260" x={true}2="260" y={true}1="20" y={true}2="80" />
      {/* HVAC Duct Flow Paths */}
      <path className="text-tertiary-fixed-dim" d="M40 50 Q260 30 460 50" stroke="currentColor" strokeDasharray="6 3" strokeWidth="1" />
      <path className="text-tertiary-fixed-dim" d="M40 180 Q260 210 460 180" stroke="currentColor" strokeDasharray="6 3" strokeWidth="1" />
      {/* Dimension Annotations & Ticks */}
      <line className="text-outline" stroke="currentColor" strokeWidth="1" x={true}1="20" x={true}2="480" y={true}1="10" y={true}2="10" />
      <line className="text-outline" stroke="currentColor" strokeWidth="1.5" x={true}1="20" x={true}2="20" y={true}1="6" y={true}2="14" />
      <line className="text-outline" stroke="currentColor" strokeWidth="1.5" x={true}1="480" x={true}2="480" y={true}1="6" y={true}2="14" />
      <text className="text-primary font-label-badge text-[10px]" fill="currentColor" textAnchor="middle" x="250" y="9">SPAN: 24,500 mm</text>
      {/* Left Dimension */}
      <line className="text-outline" stroke="currentColor" strokeWidth="1" x={true}1="10" x={true}2="10" y={true}1="20" y={true}2="220" />
      <line className="text-outline" stroke="currentColor" strokeWidth="1.5" x={true}1="6" x={true}2="14" y={true}1="20" y={true}2="20" />
      <line className="text-outline" stroke="currentColor" strokeWidth="1.5" x={true}1="6" x={true}2="14" y={true}1="220" y={true}2="220" />
      <text className="text-primary font-label-badge text-[10px]" fill="currentColor" textAnchor="middle" transform="rotate(-90 8 125)" x="8" y="125">DEPTH: 10,800 mm</text>
      {/* Workstation Pod Markers */}
      <rect className="text-surface-bright" fill="currentColor" height="20" rx="2" width="30" x="80" y="45" />
      <rect className="text-surface-bright" fill="currentColor" height="20" rx="2" width="30" x="120" y="45" />
      <rect className="text-surface-bright" fill="currentColor" height="20" rx="2" width="30" x="80" y="75" />
      <rect className="text-surface-bright" fill="currentColor" height="20" rx="2" width="30" x="120" y="75" />
      <rect className="text-surface-bright" fill="currentColor" height="20" rx="2" width="30" x="360" y="45" />
      <rect className="text-surface-bright" fill="currentColor" height="20" rx="2" width="30" x="400" y="45" />
      {/* Conference Circular Pod */}
      <circle className="text-primary-container" cx="260" cy="110" r="18" stroke="currentColor" strokeWidth="1.5" />
      <circle className="text-primary-container" cx="260" cy="110" fill="currentColor" r="4" />
      {/* Live Target Crosshairs */}
      <circle className="text-error animate-pulse" cx="340" cy="140" r="9" stroke="currentColor" strokeWidth="1" />
      <line className="text-error" stroke="currentColor" strokeWidth="1" x={true}1="340" x={true}2="340" y={true}1="126" y={true}2="154" />
      <line className="text-error" stroke="currentColor" strokeWidth="1" x={true}1="326" x={true}2="354" y={true}1="140" y={true}2="140" />
      </svg>
      {/* Floating Isometric Picture-in-Picture 3D Preview */}
      <div className="absolute bottom-2 right-2 w-48 h-32 rounded-xl bg-surface-container-high/90 backdrop-blur-md p-2 shadow-2xl overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-[9px] uppercase tracking-wider text-secondary">3D RENDER SHADER</span>
      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
      </div>
      <div className="w-full h-20 rounded bg-cover bg-center" data-alt="Photorealistic 3D architectural interior visualization of a modern high-end office boardroom with recessed linear ceiling lights, timber acoustic wall panels, deep slate navy executive desk, matte black chairs, and floor-to-ceiling panoramic glass windows overlooking a city skyline." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAejVnz7ZuOmW6TD0bNqlgfD8kECDJlwKhaBCZKkWSq_Au3XEdMrS4y1SBc3JingVZIKiKJ8sfJui1sBbjy7BBSX_WcLHFwwWaJOJNGtqQyhYRwZtpYwgZ4Prtk2ilzqz7LmI3nDZQu_eS1o0rr3V-RYZbIyguqNmVoEVzpeWzZWM69pxoQo9FFtAZPXSKy8S7bvNJpXlQXH2mLBcassZV2nU4vsbKDUi1yKVy_6ZhJoFfH1SWh-1Sq')"}}></div>
      </div>
      </div>
      {/* Layer Manager Palette Footer Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 bg-surface-container-high/60 backdrop-blur-sm px-4 py-2 rounded-lg">
      <div className="flex items-center gap-3">
      <span className="font-label-badge text-label-badge uppercase text-on-surface-variant">ACTIVE LAYERS:</span>
      <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
      <span className="font-label-badge text-[10px] text-on-surface">A-WALL</span>
      </div>
      <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
      <span className="font-label-badge text-[10px] text-on-surface">M-HVAC</span>
      </div>
      <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed"></span>
      <span className="font-label-badge text-[10px] text-on-surface">E-POWR</span>
      </div>
      <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
      <span className="font-label-badge text-[10px] text-on-surface">F-FF&amp;E</span>
      </div>
      </div>
      <div className="font-label-badge text-label-badge text-primary-fixed-dim font-mono">
                        128,490 POLYS • 0.0ms SYNC
                      </div>
      </div>
      </div>
      </div>
      {/* Bottom Status Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-2">
      <div className="flex items-center gap-4 text-on-surface-variant">
      <span className="flex items-center gap-1.5 font-label-md text-label-md">
      <span className="material-symbols-outlined text-primary text-[18px]">rule</span>
                      AutoCAD Architecture Certified
                    </span>
      <span className="hidden md:flex items-center gap-1.5 font-label-md text-label-md">
      <span className="material-symbols-outlined text-secondary text-[18px]">layers</span>
                      IFC4 Architectural Model Valid
                    </span>
      </div>
      <div className="inline-flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-[0.08em]">READY FOR PERMIT SUBMISSION</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section 3: Tech Frameworks & Software Suite Ecosystem */}
      <section className="flex flex-col gap-6 mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-primary">ENGINEERING STACK</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">CAD, BIM &amp; Spatial Engineering Ecosystem</h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                Zero-compromise interoperability across enterprise drafting tools, 3D polygon renderers, and fabrication machine codes.
              </p>
      </div>
      {/* Grid of Software Badges & Core Capabilities */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {/* AutoCAD */}
      <div className="p-5 rounded-xl bg-surface-container flex flex-col items-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-colors">
      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-inner">
      <span className="material-symbols-outlined text-[28px]">design_services</span>
      </div>
      <span className="font-headline-sm text-[16px] text-on-surface font-bold">AutoCAD 2025</span>
      <span className="font-label-badge text-[10px] uppercase text-primary tracking-wider">Drafting &amp; MEP</span>
      </div>
      {/* Autodesk Revit */}
      <div className="p-5 rounded-xl bg-surface-container flex flex-col items-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-colors">
      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-inner">
      <span className="material-symbols-outlined text-[28px]">domain</span>
      </div>
      <span className="font-headline-sm text-[16px] text-on-surface font-bold">Autodesk Revit</span>
      <span className="font-label-badge text-[10px] uppercase text-secondary tracking-wider">BIM LOD 350</span>
      </div>
      {/* Blender 3D */}
      <div className="p-5 rounded-xl bg-surface-container flex flex-col items-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-colors">
      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-tertiary-fixed shadow-inner">
      <span className="material-symbols-outlined text-[28px]">token</span>
      </div>
      <span className="font-headline-sm text-[16px] text-on-surface font-bold">Blender 3D</span>
      <span className="font-label-badge text-[10px] uppercase text-tertiary-fixed tracking-wider">Photoreal Cycles</span>
      </div>
      {/* SketchUp Pro */}
      <div className="p-5 rounded-xl bg-surface-container flex flex-col items-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-colors">
      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-fixed shadow-inner">
      <span className="material-symbols-outlined text-[28px]">cloud_upload</span>
      </div>
      <span className="font-headline-sm text-[16px] text-on-surface font-bold">SketchUp Pro</span>
      <span className="font-label-badge text-[10px] uppercase text-primary-fixed tracking-wider">Spatial Volumes</span>
      </div>
      {/* V-Ray / Lumion */}
      <div className="p-5 rounded-xl bg-surface-container flex flex-col items-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-colors">
      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary-fixed shadow-inner">
      <span className="material-symbols-outlined text-[28px]">light_mode</span>
      </div>
      <span className="font-headline-sm text-[16px] text-on-surface font-bold">V-Ray &amp; Lumion</span>
      <span className="font-label-badge text-[10px] uppercase text-secondary-fixed tracking-wider">Cinematic Video</span>
      </div>
      {/* CNC / Fabrication */}
      <div className="p-5 rounded-xl bg-surface-container flex flex-col items-center text-center gap-2 shadow-sm hover:bg-surface-container-high transition-colors">
      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-inner">
      <span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
      </div>
      <span className="font-headline-sm text-[16px] text-on-surface font-bold">CNC / G-Code</span>
      <span className="font-label-badge text-[10px] uppercase text-primary-container tracking-wider">DXF / STEP Ready</span>
      </div>
      </div>
      {/* Precision Quality Guarantee Banner */}
      <div className="w-full p-5 rounded-xl bg-surface-container-high shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
      <span className="material-symbols-outlined text-[22px]">verified</span>
      </div>
      <div>
      <span className="font-headline-sm text-[17px] text-on-surface font-bold">100% Dimension Accuracy &amp; Layered Integrity Guarantee</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Zero floating geometry, standardized title blocks, fully tagged layers, and pristine scale factor lock.</p>
      </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
      <span className="px-3 py-1.5 rounded-full bg-surface-container font-label-badge text-label-badge text-primary uppercase tracking-[0.08em]">.DWG</span>
      <span className="px-3 py-1.5 rounded-full bg-surface-container font-label-badge text-label-badge text-primary uppercase tracking-[0.08em]">.DXF</span>
      <span className="px-3 py-1.5 rounded-full bg-surface-container font-label-badge text-label-badge text-primary uppercase tracking-[0.08em]">.STEP</span>
      <span className="px-3 py-1.5 rounded-full bg-surface-container font-label-badge text-label-badge text-primary uppercase tracking-[0.08em]">PDF VECTOR</span>
      </div>
      </div>
      </section>
      {/* Section 4: Demonstrated Real Project Case Study (Dual Hardware Mockup) */}
      <section className="flex flex-col gap-8 rounded-2xl bg-surface-container p-6 sm:p-10 shadow-xl relative overflow-hidden">
      {/* Ambient Glow Behind Case Study */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6">
      <div className="flex flex-col gap-2 max-w-3xl">
      <div className="flex items-center gap-2">
      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-badge text-label-badge uppercase tracking-[0.08em]">
                    FEATURED ARCHITECTURAL &amp; INTERIOR CASE STUDY
                  </span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">SYDNEY, NSW</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Akord Projects Commercial Coworking &amp; Corporate Interior Blueprint
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Delivered end-to-end permit documentation, mechanical HVAC integration schematics, and high-fidelity 3D spatial simulations for a 14,000 sq ft dual-level creative technology hub.
                </p>
      </div>
      {/* 3 Executive Metrics */}
      <div className="grid grid-cols-3 gap-4 shrink-0 bg-surface-container-lowest p-4 rounded-xl shadow-inner">
      <div className="flex flex-col">
      <span className="font-metric-display text-[32px] sm:text-metric-display text-primary leading-none">100%</span>
      <span className="font-label-md text-[11px] text-on-surface-variant mt-1">Permit First-Pass</span>
      </div>
      <div className="flex flex-col">
      <span className="font-metric-display text-[32px] sm:text-metric-display text-secondary leading-none">48h</span>
      <span className="font-label-md text-[11px] text-on-surface-variant mt-1">Revision Velocity</span>
      </div>
      <div className="flex flex-col">
      <span className="font-metric-display text-[32px] sm:text-metric-display text-tertiary leading-none">0</span>
      <span className="font-label-md text-[11px] text-on-surface-variant mt-1">On-Site Clashes</span>
      </div>
      </div>
      </div>
      {/* Dual Hardware Showcase Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
      {/* Primary Laptop Screen (7 cols) */}
      <div className="lg:col-span-8 flex flex-col">
      {/* Laptop Body Mockup Shell */}
      <div className="w-full bg-surface-container-lowest rounded-2xl p-3 sm:p-4 shadow-2xl">
      {/* Screen Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-surface-container rounded-t-lg mb-2">
      <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-surface-bright"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-surface-bright"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-surface-bright"></span>
      <span className="ml-2 font-label-badge text-[11px] text-on-surface font-mono">Akord_Sydney_L3_FinalPermit_Package.pdf</span>
      </div>
      <span className="font-label-badge text-[10px] text-primary uppercase">CERTIFIED ARCHITECTURAL SHEET A-102</span>
      </div>
      {/* Screen Content with Image Placeholder */}
      <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden bg-surface flex items-center justify-center">
      <img className="w-full h-full object-cover" data-alt="High-contrast technical architectural AutoCAD blueprint sheet for Akord Projects commercial office floor plan. Neon mint and cyan architectural dimension strings, precise wall sections, workstation desks, fire exit routes, and detailed mechanical HVAC spatial ducting laid out across a deep midnight slate grid with official engineering stamps." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmt6bIUzMrejH1XkkMzpX-pwUPlGH1-p_Rt0iE-ehnuAbAYzQMcmsVtcR9itVOhqxszkJFcMqDLriLB_0jA6TjEK6XiDEIXrK8qNXf7qroHIKCK14exu3Q2KH4Ve6Tiwh8CGEQij5PUN1NfJwGw7MsXd_oIPUrzpAjUK_gWK_7Tl-HSUn6va0V0Lo2tiClbUL_YtMqbJQbIV-4smo-LIcD6EA88juNAZFZoE50uNuxRN4LEd2H7KGJ" />
      {/* Floating Dimension Callout Chip */}
      <div className="absolute top-4 left-4 bg-surface-container-high/90 backdrop-blur-md px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-2.5">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      <div className="flex flex-col">
      <span className="font-label-badge text-[10px] text-primary uppercase font-bold">HVAC / CEILING COORDINATION</span>
      <span className="font-label-md text-[11px] text-on-surface font-mono">Clearance: 3,250mm to soffit</span>
      </div>
      </div>
      <div className="absolute bottom-4 right-4 bg-surface-container-high/90 backdrop-blur-md px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-2.5">
      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
      <span className="font-label-badge text-label-badge text-on-surface uppercase">BCA CLASS 5 COMPLIANT</span>
      </div>
      </div>
      {/* Laptop Base Hinge Hint */}
      <div className="w-32 h-1.5 bg-surface-bright mx-auto mt-3 rounded-full"></div>
      </div>
      </div>
      {/* Secondary Mobile/Tablet Field Inspector Mockup (4 cols) */}
      <div className="lg:col-span-4 flex flex-col">
      {/* Mobile Shell Mockup */}
      <div className="w-full max-w-xs mx-auto bg-surface-container-lowest rounded-[32px] p-3 shadow-2xl">
      {/* Screen Interior */}
      <div className="w-full rounded-[24px] bg-surface overflow-hidden flex flex-col">
      {/* Mobile Notch / Top Status */}
      <div className="flex items-center justify-between px-5 pt-3 pb-2 bg-surface-container-low">
      <span className="font-label-badge text-[10px] text-on-surface">09:41</span>
      <div className="w-16 h-3.5 bg-surface-container-highest rounded-full"></div>
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px] text-primary">wifi</span>
      <span className="material-symbols-outlined text-[12px] text-primary">battery_full</span>
      </div>
      </div>
      {/* App Header Inside Mobile */}
      <div className="px-4 py-3 bg-surface-container flex items-center justify-between">
      <div>
      <span className="font-label-badge text-[9px] uppercase tracking-wider text-primary">FIELD BIM INSPECT</span>
      <h4 className="font-headline-sm text-[14px] text-on-surface font-bold">Akord On-Site Sync</h4>
      </div>
      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
      </div>
      {/* Mobile 3D Model Viewport Image Placeholder */}
      <div className="relative w-full h-56 bg-surface-container-high">
      <img className="w-full h-full object-cover" data-alt="High-detail 3D spatial interior walkthrough render of an Australian commercial coworking lounge space on a mobile contractor app screen. Sleek ergonomic furniture pods, polished concrete architectural flooring, custom timber slatted dividers, and electric neon mint accent light fixtures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6QBcJ1jiFSmvE4hTGa8WP-gou7HkmVpFAXf_HBDpn7Vk0T0eWZU4qq79AsOewF73q8N-HAcM_rC9vccEmB9oYp8GJrfF0fi_GE2Qpmze1B5TzPcvT8Bjt3qdwsl9y--GythcBSFbNgwDuCe4EvVT0dK2MXIECdozBN7Tze3e_UhxvHKa2MvBkTWmagY87AVu-X_llxT04HBiloKKS0-rl3cK2uJmCv2PzM5K_xOkaegJDc0wvxCT9" />
      <div className="absolute bottom-2 left-2 bg-surface-container-lowest/85 backdrop-blur-sm px-2 py-1 rounded font-label-badge text-[9px] text-primary">
                        FPS: 60 • LOD 350
                      </div>
      </div>
      {/* Interactive Field Checklist Snippet inside Mobile */}
      <div className="p-4 flex flex-col gap-2.5 bg-surface-container-low">
      <span className="font-label-badge text-[10px] uppercase text-on-surface-variant font-bold">CONTRACTOR VERIFICATION</span>
      <div className="flex items-center justify-between p-2 rounded bg-surface-container text-on-surface">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
      <span className="font-body-sm text-[12px]">Fire Egress Widths</span>
      </div>
      <span className="font-label-badge text-[10px] text-primary font-mono">1,850mm</span>
      </div>
      <div className="flex items-center justify-between p-2 rounded bg-surface-container text-on-surface">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
      <span className="font-body-sm text-[12px]">Main Distribution Frame</span>
      </div>
      <span className="font-label-badge text-[10px] text-secondary font-mono">ROOM 3B</span>
      </div>
      <div className="flex items-center justify-between p-2 rounded bg-surface-container text-on-surface">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
      <span className="font-body-sm text-[12px]">Acoustic Drywall Specs</span>
      </div>
      <span className="font-label-badge text-[10px] text-primary font-mono">Rw 52 dB</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Case Study Summary Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 bg-surface-container-high px-6 py-4 rounded-xl">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-[24px]">task_alt</span>
      <span className="font-body-md text-body-md text-on-surface">
      <strong>Execution Status:</strong> 100% Delivered on schedule. Approved by Sydney Municipal Council with zero modifications requested.
                </span>
      </div>
      <div className="flex items-center gap-3">
      <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_20px_-4px_rgba(0,242,170,0.35)] hover:shadow-[0_0_30px_0px_rgba(0,242,170,0.5)] transition-all" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
      <span>Commission CAD Drafting</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      </div>
      </div>
      </section>
      {/* Slide Meta Footer Band */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 text-on-surface-variant">
      <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center font-bold text-primary text-[13px]">
                AS
              </div>
      <span className="font-label-md text-label-md">Ashknaz Serwer • Engineering &amp; Spatial Architecture Practice</span>
      </div>
      <div className="flex items-center gap-6 font-label-badge text-label-badge uppercase tracking-[0.08em]">
      <span className="text-primary">SLIDE 09 / 09 COMPLETED</span>
      <span className="text-on-surface">GLOBAL CLIENT RETENTION: 98.4%</span>
      </div>
      </div>
      </div>
      </div>
    </DeckLayout>
  );
}
