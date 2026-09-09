import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/ai-3d-interactive")({
  component: Page,
  head: () => ({
    meta: [
      { title: "AI, Data Science & Interactive 3D | Ashknaz Serwer" },
      { name: "description", content: "RAG agents, LLM orchestration, predictive analytics pipelines, and GPU-accelerated WebGL and Three.js digital experiences." },
      { property: "og:title", content: "AI, Data Science & Interactive 3D | Ashknaz Serwer" },
      { property: "og:description", content: "RAG agents, LLM orchestration, predictive analytics pipelines, and GPU-accelerated WebGL and Three.js digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={4}>
      <div className="flex flex-col w-full relative">
      {/* Radial Atmospheric Glows */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-10 w-[30rem] h-[30rem] bg-secondary-container/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="max-w-7xl mx-auto w-full px-gutter-md md:px-gutter-xl flex flex-col gap-12">
      {/* Executive Deck Header Block */}
      <div className="flex flex-col gap-6 pt-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_12px_rgba(0,242,170,0.8)]"></div>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-[0.08em]">
                  • SLIDE 04 / 06 • ADVANCED INTELLIGENCE &amp; 3D • ASHKNAZ SERWER EXECUTIVE DECK
                </span>
      </div>
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-high shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-[0.08em]">99.4% Model Precision • Real-time Neural Inference</span>
      </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="max-w-3xl flex flex-col gap-3">
      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  AI, Data Science &amp; Interactive 3D Solutions
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Architecting bespoke Retrieval-Augmented Generation (RAG) agents, predictive data analytics pipelines, and GPU-accelerated immersive WebGL/Three.js digital experiences.
                </p>
      </div>
      <div className="flex items-center gap-3 self-start lg:self-auto">
      <div className="px-3.5 py-2 rounded-lg bg-surface-container-low flex items-center gap-2 shadow-sm">
      <span className="material-symbols-outlined text-primary-container text-[18px]">memory</span>
      <span className="font-label-md text-label-md text-on-surface font-semibold">FastAPI Async Core</span>
      </div>
      <div className="px-3.5 py-2 rounded-lg bg-surface-container-low flex items-center gap-2 shadow-sm">
      <span className="material-symbols-outlined text-secondary text-[18px]">view_in_ar</span>
      <span className="font-label-md text-label-md text-on-surface font-semibold">60 FPS WebGL</span>
      </div>
      </div>
      </div>
      </div>
      {/* Main Two-Column Slide Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: 3 Core Offering Cards */}
      <div className="lg:col-span-5 flex flex-col gap-4">
      {/* Card 01: AI Agents & RAG */}
      <div className="group p-6 rounded-2xl bg-surface-container-low transition-all duration-300 hover:bg-surface-container shadow-md">
      <div className="flex items-start justify-between gap-3 mb-3">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container shadow-[0_0_16px_rgba(0,242,170,0.15)] group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>neurology</span>
      </div>
      <div>
      <span className="font-label-badge text-label-badge text-primary uppercase">01 / ARCHITECTURE</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface leading-snug">AI Agents &amp; RAG Architecture</h2>
      </div>
      </div>
      <span className="shrink-0 px-2.5 py-1 rounded-md bg-primary-container/10 font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-[0.08em]">
                    +85% Ops Efficiency
                  </span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  Custom LLM orchestration using OpenAI API, FastAPI, FAISS vector embeddings, and LangChain pipelines with robust hallucination mitigation and enterprise knowledge ingestion.
                </p>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-md text-label-md text-on-surface">FAISS Vector DB</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-md text-label-md text-on-surface">FastAPI Core</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-md text-label-md text-on-surface">Multi-Turn Memory</span>
      </div>
      </div>
      {/* Card 02: Data Science & Predictive */}
      <div className="group p-6 rounded-2xl bg-surface-container-low transition-all duration-300 hover:bg-surface-container shadow-md">
      <div className="flex items-start justify-between gap-3 mb-3">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shadow-[0_0_16px_rgba(123,208,255,0.15)] group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>analytics</span>
      </div>
      <div>
      <span className="font-label-badge text-label-badge text-secondary uppercase">02 / TELEMETRY</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Data Science &amp; Predictive Telemetry</h2>
      </div>
      </div>
      <span className="shrink-0 px-2.5 py-1 rounded-md bg-secondary-container/10 font-label-badge text-label-badge text-secondary uppercase tracking-[0.08em]">
                    Automated ML Models
                  </span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  End-to-end data pipelines using Python, Pandas, NumPy, and Matplotlib. Clean feature engineering, customer churn prediction, and real-time operational dashboard feeds.
                </p>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-md text-label-md text-on-surface">Pandas / NumPy</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-md text-label-md text-on-surface">Predictive Analytics</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-md text-label-md text-on-surface">Jupyter Workflows</span>
      </div>
      </div>
      {/* Card 03: 3D & WebGL Experiences */}
      <div className="group p-6 rounded-2xl bg-surface-container-low transition-all duration-300 hover:bg-surface-container shadow-md">
      <div className="flex items-start justify-between gap-3 mb-3">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary-fixed-dim shadow-[0_0_16px_rgba(0,242,170,0.15)] group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>deployed_code</span>
      </div>
      <div>
      <span className="font-label-badge text-label-badge text-primary uppercase">03 / SPATIAL WEB</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Interactive 3D &amp; WebGL Experiences</h2>
      </div>
      </div>
      <span className="shrink-0 px-2.5 py-1 rounded-md bg-tertiary-container/10 font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-[0.08em]">
                    60 FPS WebGL Engine
                  </span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  Immersive spatial web experiences engineered with Three.js and Blender. Interactive 3D product visualizers, fluid shaders, and low-latency canvas rendering.
                </p>
      <div className="flex flex-wrap gap-2">
      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-md text-label-md text-on-surface">Three.js Scene Graph</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-md text-label-md text-on-surface">Blender Assets</span>
      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-md text-label-md text-on-surface">GLSL Shaders</span>
      </div>
      </div>
      </div>
      {/* Right Column: Realistic Desktop + Overlapping Mobile Hardware Mockup */}
      <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
      {/* Desktop Browser Chrome Mockup */}
      <div className="w-full rounded-2xl bg-surface-container-low overflow-hidden shadow-2xl transition-all">
      {/* Mockup Title Bar */}
      <div className="h-11 px-4 bg-surface-container flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block"></span>
      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block"></span>
      <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block"></span>
      </div>
      <div className="flex-1 max-w-sm px-4 py-1 rounded-md bg-surface-container-lowest text-center truncate">
      <span className="font-label-md text-label-md text-on-surface-variant/80 font-mono tracking-tight">ai-core.ashknaz-serwer.internal/v4</span>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-[16px]">lock</span>
      <span className="material-symbols-outlined text-[16px]">refresh</span>
      </div>
      </div>
      {/* Mockup Dashboard Canvas */}
      <div className="p-6 bg-surface-container-lowest flex flex-col gap-6">
      {/* Dashboard Top Stat Gauges */}
      <div className="grid grid-cols-3 gap-3">
      <div className="p-3.5 rounded-xl bg-surface-container flex flex-col gap-1 shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Inference Latency</span>
      <div className="flex items-baseline gap-1">
      <span className="font-headline-md text-headline-md text-primary-container font-extrabold">&lt;16.4</span>
      <span className="font-label-md text-label-md text-primary">ms</span>
      </div>
      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-1">
      <div className="h-full bg-primary-container rounded-full w-4/5 shadow-[0_0_8px_rgba(0,242,170,0.8)]"></div>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex flex-col gap-1 shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Token Throughput</span>
      <div className="flex items-baseline gap-1">
      <span className="font-headline-md text-headline-md text-secondary font-extrabold">1,480</span>
      <span className="font-label-md text-label-md text-secondary-fixed">tok/s</span>
      </div>
      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-1">
      <div className="h-full bg-secondary rounded-full w-3/4 shadow-[0_0_8px_rgba(123,208,255,0.8)]"></div>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex flex-col gap-1 shadow-sm">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Vector Similarity</span>
      <div className="flex items-baseline gap-1">
      <span className="font-headline-md text-headline-md text-primary font-extrabold">0.984</span>
      <span className="font-label-md text-label-md text-primary-fixed-dim">cosθ</span>
      </div>
      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-1">
      <div className="h-full bg-primary-container rounded-full w-[94%]"></div>
      </div>
      </div>
      </div>
      {/* Neural Graph & 3D Vector Visualizer Panel */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Inline Neural Graph SVG */}
      <div className="md:col-span-3 p-4 rounded-xl bg-surface-container flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      <span className="font-label-md text-label-md text-on-surface font-semibold">Multi-Head Vector Spatial Map</span>
      </div>
      <span className="font-label-badge text-label-badge text-primary uppercase">Active Cluster #8</span>
      </div>
      {/* Neural Graph Vector Art */}
      <div className="h-36 w-full relative flex items-center justify-center">
      <svg className="w-full h-full" fill="none" viewBox="0 0 340 130">
      {/* Connections */}
      <path d="M 40,65 Q 110,25 170,55" opacity="0.6" stroke="#00f2aa" strokeDasharray="3 3" strokeWidth="1.5" />
      <path d="M 40,65 Q 120,110 170,75" opacity="0.4" stroke="#7bd0ff" strokeWidth="1" />
      <path d="M 170,55 Q 230,20 300,45" opacity="0.8" stroke="#00f2aa" strokeWidth="1.5" />
      <path d="M 170,75 Q 240,110 300,85" opacity="0.7" stroke="#7bd0ff" strokeDasharray="2 2" strokeWidth="1.5" />
      <path d="M 170,55 L 170,75" opacity="0.5" stroke="#30f1ae" strokeWidth="1" />
      <path d="M 110,35 L 230,95" opacity="0.3" stroke="#7bd0ff" strokeWidth="0.75" />
      {/* Nodes */}
      <circle cx="40" cy="65" fill="#161c27" r="7" stroke="#00f2aa" strokeWidth="2.5" />
      <circle cx="40" cy="65" fill="#00f2aa" r="3" />
      <circle cx="110" cy="35" fill="#7bd0ff" opacity="0.8" r="4" />
      <circle cx="120" cy="95" fill="#00f2aa" opacity="0.6" r="4" />
      <circle cx="170" cy="55" fill="#161c27" r="8" stroke="#00f2aa" strokeWidth="2.5" />
      <circle cx="170" cy="55" fill="#00f2aa" r="4" />
      <circle cx="170" cy="75" fill="#161c27" r="6" stroke="#7bd0ff" strokeWidth="2" />
      <circle cx="170" cy="75" fill="#7bd0ff" r="2.5" />
      <circle cx="230" cy="95" fill="#30f1ae" opacity="0.8" r="4" />
      <circle cx="240" cy="30" fill="#7bd0ff" opacity="0.7" r="4" />
      <circle cx="300" cy="45" fill="#161c27" r="7" stroke="#00f2aa" strokeWidth="2.5" />
      <circle cx="300" cy="45" fill="#00f2aa" r="3" />
      <circle cx="300" cy="85" fill="#161c27" r="6" stroke="#7bd0ff" strokeWidth="2" />
      <circle cx="300" cy="85" fill="#7bd0ff" r="2.5" />
      {/* Ambient Glow Halo */}
      <circle cx="170" cy="55" fill="#00f2aa" opacity="0.1" r="22" />
      </svg>
      </div>
      <div className="flex items-center justify-between pt-2">
      <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">k-NN = 16 | metric = L2 Euclidean</span>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim">Sync: Live</span>
      </div>
      </div>
      {/* Real-time Sparkline & Vector Load */}
      <div className="md:col-span-2 p-4 rounded-xl bg-surface-container flex flex-col justify-between">
      <div className="flex flex-col gap-1">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Embedding Load</span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">128.4k Embeds/hr</span>
      </div>
      {/* Sparkline SVG Chart */}
      <div className="h-16 w-full py-1">
      <svg className="w-full h-full" fill="none" viewBox="0 0 160 50">
      <path d="M 0,38 Q 20,42 40,25 T 80,18 T 120,30 T 160,8" fill="none" stroke="#00f2aa" strokeWidth="2" />
      <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#00f2aa" stopOpacity="0.3" />
      <stop offset="100%" stopColor="#00f2aa" stopOpacity="0" />
      </linearGradient>
      <path d="M 0,38 Q 20,42 40,25 T 80,18 T 120,30 T 160,8 L 160,50 L 0,50 Z" fill="url(#chartGrad)" />
      </svg>
      </div>
      <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
      <span>P99 &lt; 22ms</span>
      <span className="text-primary font-bold">0 Dropouts</span>
      </div>
      </div>
      </div>
      {/* Agent Execution Status Table */}
      <div className="rounded-xl bg-surface-container p-3.5 flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md font-semibold text-on-surface">Orchestration Pipeline Status</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">FastAPI Background Tasks</span>
      </div>
      <div className="grid grid-cols-3 gap-2 font-body-sm text-body-sm">
      <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
      <span className="text-on-surface">RAG Ingester</span>
      <span className="text-primary font-semibold">Running</span>
      </div>
      <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
      <span className="text-on-surface">FAISS Re-Index</span>
      <span className="text-secondary font-semibold">Idle</span>
      </div>
      <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
      <span className="text-on-surface">Guardrails Net</span>
      <span className="text-primary font-semibold">Passing</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Sleek Vertical Smartphone Overlap (Mockup) */}
      <div className="hidden sm:flex flex-col absolute -bottom-8 -right-4 w-64 rounded-3xl bg-surface-container-low p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md">
      {/* Phone Speaker Notch */}
      <div className="w-16 h-1 rounded-full bg-surface-container-highest mx-auto mb-2"></div>
      <div className="rounded-2xl bg-surface-container-lowest p-3 flex flex-col gap-2.5">
      {/* Mobile App Header */}
      <div className="flex items-center justify-between pb-1">
      <div className="flex items-center gap-1.5">
      <div className="w-2 h-2 rounded-full bg-primary-container"></div>
      <span className="font-label-badge text-label-badge text-on-surface uppercase font-bold">Serwer Agent AI</span>
      </div>
      <span className="font-label-badge text-label-badge text-primary">Live</span>
      </div>
      {/* Chat Bubble: User */}
      <div className="self-end bg-surface-container-high px-3 py-1.5 rounded-xl rounded-br-xs max-w-[85%]">
      <p className="font-body-sm text-body-sm text-on-surface">Run RAG query on Q3 pipeline telemetry.</p>
      </div>
      {/* Chat Bubble: AI Response with structured JSON snippet */}
      <div className="self-start bg-surface-container p-2.5 rounded-xl rounded-tl-xs max-w-[95%] flex flex-col gap-1.5">
      <div className="flex items-center gap-1 text-primary">
      <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
      <span className="font-label-badge text-label-badge uppercase">Synthesizing Context</span>
      </div>
      <div className="rounded-md bg-surface-container-lowest p-2 font-mono text-[10px] text-on-surface-variant leading-tight">
      <span className="text-primary">"churn_delta":</span> -18.2%,<br />
      <span className="text-secondary">"confidence":</span> 0.994,<br />
      <span className="text-tertiary">"status":</span> "verified"
                    </div>
      </div>
      {/* Action Chips */}
      <div className="flex gap-1.5 pt-1">
      <span className="px-2 py-0.5 rounded-full bg-surface-container-high font-label-badge text-label-badge text-primary-fixed-dim">
                      Deploy RAG
                    </span>
      <span className="px-2 py-0.5 rounded-full bg-surface-container-high font-label-badge text-label-badge text-secondary-fixed-dim">
                      Benchmark
                    </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Frameworks & Technologies Grid Section */}
      <div className="flex flex-col gap-6 pt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary-container text-[18px]">hub</span>
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-[0.08em]">
                  • ARTIFICIAL INTELLIGENCE &amp; 3D ECOSYSTEM
                </span>
      </div>
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-[0.08em]">
                ENTERPRISE INTELLIGENCE &amp; GRAPHICS BENCHMARKS
              </span>
      </div>
      {/* 8 Sleek Technology Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Python */}
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 hover:bg-surface-container transition-all group">
      <div className="flex items-center justify-between mb-1">
      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Python</span>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[18px]">terminal</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">FastAPI &amp; Async IO High Concurrency</span>
      </div>
      {/* OpenAI API */}
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 hover:bg-surface-container transition-all group">
      <div className="flex items-center justify-between mb-1">
      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">OpenAI API</span>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[18px]">psychology</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">GPT-4o &amp; Multimodal Embeddings</span>
      </div>
      {/* FAISS */}
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 hover:bg-surface-container transition-all group">
      <div className="flex items-center justify-between mb-1">
      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">FAISS</span>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[18px]">dataset</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Vector Indexing &amp; Real-time Retrieval</span>
      </div>
      {/* Pandas / NumPy */}
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 hover:bg-surface-container transition-all group">
      <div className="flex items-center justify-between mb-1">
      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Pandas / NumPy</span>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[18px]">table_chart</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Data Manipulation &amp; Math Acceleration</span>
      </div>
      {/* Three.js */}
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 hover:bg-surface-container transition-all group">
      <div className="flex items-center justify-between mb-1">
      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Three.js</span>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[18px]">view_in_ar</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">GPU WebGL Scene Graph &amp; Shaders</span>
      </div>
      {/* Blender */}
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 hover:bg-surface-container transition-all group">
      <div className="flex items-center justify-between mb-1">
      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Blender</span>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[18px]">3d_rotation</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">3D Modeling, UV Unwrapping &amp; Rigging</span>
      </div>
      {/* Matplotlib / Seaborn */}
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 hover:bg-surface-container transition-all group">
      <div className="flex items-center justify-between mb-1">
      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Matplotlib</span>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[18px]">insights</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Statistical &amp; Telemetry Visualizations</span>
      </div>
      {/* Jupyter / PyTorch */}
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 hover:bg-surface-container transition-all group">
      <div className="flex items-center justify-between mb-1">
      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">PyTorch</span>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[18px]">science</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Model Experimentation &amp; Fine-tuning</span>
      </div>
      </div>
      </div>
      {/* Bottom Value Banner */}
      <div className="rounded-2xl bg-surface-container-low p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
      {/* Glow Accent Line inside bottom container */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-60"></div>
      <div className="flex items-center gap-5 max-w-3xl">
      <div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0 shadow-[0_0_20px_rgba(0,242,170,0.2)]">
      <span className="material-symbols-outlined text-[26px]">verified_user</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-label-badge text-label-badge text-primary uppercase">Executive Deployment Protocol</span>
      <p className="font-body-md text-body-md text-on-surface font-medium leading-normal">
                  Enterprise AI Deployment Guarantee: Zero Data Leakage, SOC-2 Compliant Vector Safeguards &amp; Sub-50ms Response Latency.
                </p>
      </div>
      </div>
      <div className="flex items-center gap-6 shrink-0 w-full lg:w-auto justify-between lg:justify-end">
      <div className="flex flex-col items-start lg:items-end">
      <span className="font-metric-display text-metric-display text-on-surface tracking-tight leading-none">100K+</span>
      <span className="font-label-md text-label-md text-primary-fixed-dim">Vectors Ingested</span>
      </div>
      <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_24px_-4px_rgba(0,242,170,0.4)] hover:shadow-[0_0_36px_0px_rgba(0,242,170,0.6)] transition-all transform hover:-translate-y-0.5" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
      <span>Architect AI Solution</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      </div>
      </div>
      </div>
      </div>

    </DeckLayout>
  );
}
