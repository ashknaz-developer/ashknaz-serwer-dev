import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/cloud-devops")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Cloud Solutions, DevOps & Cybersecurity | Ashknaz Serwer" },
      { name: "description", content: "Multi-cloud orchestration, automated CI/CD pipelines, and zero-trust security engineering with 99.999% SLA reliability." },
      { property: "og:title", content: "Cloud Solutions, DevOps & Cybersecurity | Ashknaz Serwer" },
      { property: "og:description", content: "Multi-cloud orchestration, automated CI/CD pipelines, and zero-trust security engineering with 99.999% SLA reliability." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={7}>
      <div className="flex flex-col w-full">
      {/* SLIDE CONTAINER */}
      <section className="relative w-full max-w-[1440px] mx-auto px-gutter-md sm:px-gutter-xl py-6 flex flex-col gap-10">
      {/* AMBIENT ILLUMINATION MINT GLOWS */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[140px] -z-10"></div>
      <div className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[160px] -z-10"></div>
      {/* 1. SLIDE HEADER BAR & META */}
      <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-0 pb-1">
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface">
      <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,242,170,0.8)]"></span>
      <span className="font-label-badge text-label-badge tracking-[0.08em] text-primary-fixed-dim uppercase">
                  Slide 07 / 09 • Cloud &amp; Cybersecurity Architecture • Ashknaz Serwer
                </span>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low text-secondary">
      <span className="material-symbols-outlined text-[15px] text-secondary">verified_user</span>
      <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-on-surface-variant font-bold">
                  SOC-2 Compliant • 99.999% SLA Tier
                </span>
      </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="flex flex-col gap-2 max-w-3xl">
      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">
                  Cloud Solutions, DevOps &amp; Cybersecurity Engineering
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Resilient multi-cloud orchestration, automated CI/CD deployment pipelines, and zero-trust perimeter defense configured for uninterrupted enterprise velocity.
                </p>
      </div>
      {/* QUICK RUNTIME KPIS */}
      <div className="flex items-center gap-4 shrink-0">
      <div className="bg-surface-container-low rounded-xl px-4 py-2.5 flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Fleet Health</span>
      <span className="font-headline-sm text-headline-sm text-primary font-bold flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[18px] text-primary-container">shield</span>
                    100.0% Nominal
                  </span>
      </div>
      <div className="bg-surface-container-low rounded-xl px-4 py-2.5 flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase">Failover Window</span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">&lt; 3.2s RTO</span>
      </div>
      </div>
      </div>
      </div>
      {/* 2. UPPER: 3-PILLAR CAPABILITY GRID + LIVE CONSOLE MOCKUP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* 3 Capabilities (Left Column) */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-4">
      {/* Pillar 01 */}
      <div className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group">
      <div className="flex items-start justify-between gap-3 mb-2">
      <div className="flex items-center gap-2.5">
      <span className="w-6 h-6 rounded bg-surface-container-high text-primary font-headline-sm text-label-md flex items-center justify-center font-bold">01</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Multi-Cloud &amp; Distributed DBs
                    </h3>
      </div>
      <span className="material-symbols-outlined text-primary-container text-[20px]">cloud_sync</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-3">
                  Vendor-agnostic infrastructure across AWS, Azure, and GCP. High-availability clustering for PostgreSQL, Redis caches, and MongoDB shards with sub-second replication sync.
                </p>
      <div className="flex flex-wrap gap-1.5">
      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-md text-label-md text-primary">AWS EKS</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-md text-label-md text-on-surface-variant">PostgreSQL HA</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-md text-label-md text-on-surface-variant">Redis Sentinel</span>
      </div>
      </div>
      {/* Pillar 02 */}
      <div className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group">
      <div className="flex items-start justify-between gap-3 mb-2">
      <div className="flex items-center gap-2.5">
      <span className="w-6 h-6 rounded bg-surface-container-high text-primary font-headline-sm text-label-md flex items-center justify-center font-bold">02</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Automated DevOps &amp; GitOps
                    </h3>
      </div>
      <span className="material-symbols-outlined text-primary-container text-[20px]">terminal</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-3">
                  Immutable Docker container builds, automated Kubernetes ingress traffic steering, blue-green zero-downtime rollouts, and GitHub Actions parallel regression test matrices.
                </p>
      <div className="flex flex-wrap gap-1.5">
      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-md text-label-md text-primary">Kubernetes</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-md text-label-md text-on-surface-variant">ArgoCD</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-md text-label-md text-on-surface-variant">Terraform HCL</span>
      </div>
      </div>
      {/* Pillar 03 */}
      <div className="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group">
      <div className="flex items-start justify-between gap-3 mb-2">
      <div className="flex items-center gap-2.5">
      <span className="w-6 h-6 rounded bg-surface-container-high text-primary font-headline-sm text-label-md flex items-center justify-center font-bold">03</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                      Zero-Trust Cybersecurity &amp; SecOps
                    </h3>
      </div>
      <span className="material-symbols-outlined text-primary-container text-[20px]">encrypted</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-3">
                  Fortinet &amp; Cisco granular micro-segmentation, mutual TLS, automated dependency vulnerability scanners, IAM least-privilege matrix, and real-time SIEM log analysis.
                </p>
      <div className="flex flex-wrap gap-1.5">
      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-md text-label-md text-primary">mTLS Strict</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-md text-label-md text-on-surface-variant">WAF Layer 7</span>
      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label-md text-label-md text-on-surface-variant">SOC-2 Type II</span>
      </div>
      </div>
      </div>
      {/* Right Column: Realistic Terminal/Cloud Console Mockup */}
      <div className="lg:col-span-7 flex flex-col rounded-2xl bg-surface-container-lowest overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Window Chrome / Title Bar */}
      <div className="h-10 px-4 bg-surface-container flex items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-error"></span>
      <span className="w-3 h-3 rounded-full bg-surface-bright"></span>
      <span className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_6px_rgba(0,242,170,0.6)]"></span>
      <span className="font-label-md text-label-md text-on-surface-variant ml-2 hidden sm:inline">bash — production-cluster-k8s-us</span>
      </div>
      <div className="px-3 py-0.5 rounded-full bg-surface-container-lowest font-label-md text-label-md text-primary-fixed-dim flex items-center gap-1.5">
      <span className="material-symbols-outlined text-[13px]">lock</span>
      <span className="truncate max-w-[200px] sm:max-w-xs">ops-cloud.ashknaz-serwer.internal/cluster</span>
      </div>
      <div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[16px]">sync</span>
      <span className="font-label-badge text-label-badge text-primary-container">LIVE</span>
      </div>
      </div>
      {/* Telemetry HUD Body */}
      <div className="p-5 sm:p-6 flex flex-col gap-5 flex-1 bg-gradient-to-b from-surface-container-low to-surface-container-lowest">
      {/* Top Row Metrics Cards inside console */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-3 rounded-lg bg-surface-container flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant">Active Pods</span>
      <span className="font-headline-sm text-headline-sm text-primary font-bold">48 / 48</span>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim">All nodes healthy</span>
      </div>
      <div className="p-3 rounded-lg bg-surface-container flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant">Edge Latency</span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">&lt; 18 ms</span>
      <span className="font-label-badge text-label-badge text-secondary">Cloudflare Tier-1</span>
      </div>
      <div className="p-3 rounded-lg bg-surface-container flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant">Threat Shield</span>
      <span className="font-headline-sm text-headline-sm text-primary-container font-bold">0 Breaches</span>
      <span className="font-label-badge text-label-badge text-on-surface-variant">1,842 blocked/hr</span>
      </div>
      <div className="p-3 rounded-lg bg-surface-container flex flex-col">
      <span className="font-label-md text-label-md text-on-surface-variant">Rollout Status</span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">v4.9.2</span>
      <span className="font-label-badge text-label-badge text-primary-fixed">Sync Complete</span>
      </div>
      </div>
      {/* Live Network Flow & Pod Matrix Visualizer */}
      <div className="p-4 rounded-xl bg-surface-container flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px] text-primary-container">dns</span>
      <span className="font-label-lg text-label-lg text-on-surface font-bold">Cluster Region Telemetry: Global Grid</span>
      </div>
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Auto-Rebalance: ON</span>
      </div>
      {/* SVG Latency Sparkline Graph */}
      <div className="w-full h-24 relative overflow-hidden rounded-lg bg-surface-container-lowest p-2 flex flex-col justify-end">
      <svg className="w-full h-16" preserveAspectRatio="none" viewBox="0 0 500 100">
      <defs>
      <lineargradient id="mintGrad" x={true}1="0" x={true}2="0" y={true}1="0" y={true}2="1">
      <stop offset="0%" stopColor="#00f2aa" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#00f2aa" stopOpacity="0.0" />
      </lineargradient>
      </defs>
      <path d="M0 75 Q 35 30, 70 50 T 140 35 T 210 60 T 280 20 T 350 45 T 420 25 T 500 30 L 500 100 L 0 100 Z" fill="url(#mintGrad)" />
      <path d="M0 75 Q 35 30, 70 50 T 140 35 T 210 60 T 280 20 T 350 45 T 420 25 T 500 30" fill="none" stroke="#00f2aa" strokeWidth="2.5" />
      {/* Reference threshold line */}
      <line stroke="#3b4a41" strokeDasharray="4" strokeWidth="1" x={true}1="0" x={true}2="500" y={true}1="50" y={true}2="50" />
      </svg>
      <div className="absolute top-2 left-3 flex items-center gap-3">
      <span className="font-label-md text-label-md text-primary-fixed-dim">HTTP Ingress: 28,490 req/s</span>
      <span className="font-label-md text-label-md text-on-surface-variant">p99: 31ms</span>
      </div>
      </div>
      {/* Cluster Node Grid Status Matrix */}
      <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5 pt-1">
      {/* Generate 12 dynamic visual cluster nodes */}
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 01: 100% OK">N1</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 02: 100% OK">N2</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 03: 100% OK">N3</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 04: 100% OK">N4</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 05: 100% OK">N5</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 06: 100% OK">N6</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 07: 100% OK">N7</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 08: 100% OK">N8</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 09: 100% OK">N9</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 10: 100% OK">N10</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 11: 100% OK">N11</div>
      <div className="h-6 rounded bg-primary-container/20 flex items-center justify-center text-primary-container font-label-badge text-label-badge font-bold" title="Node 12: 100% OK">N12</div>
      </div>
      </div>
      {/* Streaming DevOps Terminal Output Log */}
      <div className="p-3.5 rounded-xl bg-surface-container-lowest font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1 overflow-x-auto shadow-inner">
      <div className="flex items-center justify-between text-on-surface-variant pb-1 border-b-0">
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary">Automated Pipeline Feed</span>
      <span className="font-label-badge text-label-badge text-primary-fixed-dim">Build #3928: PASSED</span>
      </div>
      <div className="text-primary-fixed font-mono text-xs truncate">
                    &gt; [08:44:12] GitHub-Actions runner executed: terraform apply -auto-approve (12 resources modified)
                  </div>
      <div className="text-on-surface font-mono text-xs truncate">
                    &gt; [08:44:19] Docker image sha256:7e98a1 pushed to AWS ECR &amp; replicated to EU-Central-1
                  </div>
      <div className="text-primary-container font-mono text-xs truncate flex items-center gap-1">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
                    &gt; [08:44:23] Blue-Green shift: 100% of live ingress routes mapped to v4.9.2. Zero dropped requests.
                  </div>
      </div>
      </div>
      </div>
      </div>
      {/* 3. MIDDLE: TECH FRAMEWORKS & TOOLING GRID */}
      <div className="flex flex-col gap-4 rounded-2xl bg-surface-container-low p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
      <span className="material-symbols-outlined text-primary text-[22px]">memory</span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Cloud &amp; DevOps Infrastructure Ecosystem • Production Grade
                </h3>
      </div>
      <span className="font-label-badge text-label-badge text-primary-fixed uppercase tracking-wider bg-surface-container px-3 py-1 rounded-full">
                Strict Security Standard
              </span>
      </div>
      {/* Tech Badges Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">cloud</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Amazon Web Services</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">EKS, S3, RDS, Lambda</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[20px]">hub</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Google Cloud (GCP)</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">GKE, BigQuery, PubSub</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed-dim">
      <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Microsoft Azure</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">AKS, Active Directory</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary-fixed-dim">
      <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Docker &amp; Containers</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">Multi-stage optimization</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined text-[20px]">token</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kubernetes (K8s)</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">Helm, Istio Service Mesh</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-[20px]">fast_forward</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">CI/CD Pipelines</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">GitHub Actions &amp; Jenkins</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[20px]">database</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">PostgreSQL HA</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">Patroni, WAL replication</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed-dim">
      <span className="material-symbols-outlined text-[20px]">storage</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Redis Clustering</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">In-memory caching mesh</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary-fixed-dim">
      <span className="material-symbols-outlined text-[20px]">schema</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">MongoDB Shards</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">Global geographic sync</span>
      </div>
      </div>
      <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors">
      <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined text-[20px]">security</span>
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Fortinet / Cisco</span>
      <span className="font-label-md text-label-md text-on-surface-variant truncate">VPC firewalls, Zero-Trust</span>
      </div>
      </div>
      </div>
      {/* Micro Guarantee Banner */}
      <div className="mt-1 px-4 py-3 rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Zero-Downtime Migration Protocol &amp; Automated Multi-Region Snapshotting
                </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-right">
                Point-in-time state recovery with automated encrypted backups executed every 15 minutes to air-gapped cold storage.
              </p>
      </div>
      </div>
      {/* 4. BOTTOM: DEMONSTRATED REAL PROJECT CASE STUDY WITH DUAL HARDWARE MOCKUP */}
      <div className="rounded-2xl bg-surface-container-low p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden">
      {/* Top Title & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-0 pb-2">
      <div className="flex flex-col gap-1">
      <div className="inline-flex items-center gap-2">
      <span className="px-2.5 py-0.5 rounded bg-primary-container/10 text-primary-container font-label-badge text-label-badge uppercase font-bold tracking-wider">
                    Demonstrated Infrastructure Case Study
                  </span>
      <span className="font-label-md text-label-md text-on-surface-variant">Client Reference: Tier-1 Enterprise</span>
      </div>
      <h2 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                  Enterprise Cloud Management &amp; Microservices Orchestration
                </h2>
      <span className="font-body-md text-body-md text-primary-fixed-dim">
                  Ashton Global Logistics &amp; Real-Time Cross-Border Telemetry Nodes
                </span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
      <a className="px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
      <span>Read Architecture Whitepaper</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* Description & Story Summary */}
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
              Designed, provisioned, and continuously scaled an elastic multi-region Kubernetes cluster handling 14,000+ real-time IoT fleet vehicle telemetry beacons per second. Implemented auto-healing node groups, zero-trust boundary segmentation, and a unified administrative terminal for global dispatch operations.
            </p>
      {/* DUAL MOCKUPS + METRICS ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
      {/* Dual Hardware Mockup Showcase (Col 7) */}
      <div className="lg:col-span-8 flex flex-col md:flex-row items-end gap-5 justify-center relative">
      {/* Mockup A: Desktop Laptop Screen Mockup (Telemetry curves) */}
      <div className="w-full md:w-[70%] rounded-xl bg-surface-container-lowest p-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col">
      {/* Laptop Top Bar */}
      <div className="h-6 bg-surface-container px-3 rounded-t-lg flex items-center justify-between text-on-surface-variant">
      <div className="flex items-center gap-1.5">
      <div className="w-2 h-2 rounded-full bg-error"></div>
      <div className="w-2 h-2 rounded-full bg-surface-bright"></div>
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      <span className="font-label-badge text-label-badge text-on-surface-variant">ashton-logistics.cloud/telemetry/nodes</span>
      <span className="material-symbols-outlined text-[12px]">fullscreen</span>
      </div>
      {/* Laptop Internal Display Content */}
      <div className="p-4 bg-surface rounded-b-lg flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <div>
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Core Node Cluster</span>
      <div className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2">
      <span>US-East-1 &amp; EU-West-2</span>
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      </div>
      </div>
      <div className="text-right">
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Gateway Latency</span>
      <div className="font-headline-sm text-headline-sm text-primary font-bold">64 ms</div>
      </div>
      </div>
      {/* Real-time CPU/RAM Utilization SVG Chart */}
      <div className="rounded bg-surface-container-low p-3 flex flex-col gap-2">
      <div className="flex justify-between items-center text-xs font-label-md">
      <span className="text-on-surface flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span> CPU Load (Avg: 23.4%)
                        </span>
      <span className="text-secondary flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> RAM In-Use (31.2 GB / 64 GB)
                        </span>
      </div>
      <svg className="w-full h-20" preserveAspectRatio="none" viewBox="0 0 400 80">
      {/* CPU path in mint */}
      <path d="M0 60 Q 50 20, 100 45 T 200 30 T 300 50 T 400 25" fill="none" stroke="#00f2aa" strokeWidth="2.5" />
      {/* RAM path in cyan */}
      <path d="M0 40 Q 60 55, 120 35 T 240 45 T 320 20 T 400 35" fill="none" stroke="#7bd0ff" strokeDasharray="3" strokeWidth="2" />
      </svg>
      </div>
      {/* Node Health Micro List */}
      <div className="grid grid-cols-3 gap-2 text-center">
      <div className="p-1.5 rounded bg-surface-container">
      <span className="block font-label-badge text-label-badge text-on-surface-variant">Fleet Packets</span>
      <span className="font-label-lg text-label-lg text-on-surface font-bold">14.2k/s</span>
      </div>
      <div className="p-1.5 rounded bg-surface-container">
      <span className="block font-label-badge text-label-badge text-on-surface-variant">Dropped</span>
      <span className="font-label-lg text-label-lg text-primary font-bold">0.000%</span>
      </div>
      <div className="p-1.5 rounded bg-surface-container">
      <span className="block font-label-badge text-label-badge text-on-surface-variant">Auto-Healed</span>
      <span className="font-label-lg text-label-lg text-on-surface font-bold">4 Nodes</span>
      </div>
      </div>
      </div>
      </div>
      {/* Mockup B: Overlapping Mobile Admin Screen ("DevOps Pocket Console") */}
      <div className="w-64 -mt-6 md:-mt-0 md:-ml-12 shrink-0 rounded-2xl bg-surface-container-lowest p-2 shadow-[0_25px_50px_rgba(0,0,0,0.8)] z-10">
      {/* Mobile Speaker & Notch */}
      <div className="h-3 w-16 bg-surface-container-highest rounded-full mx-auto mb-1.5"></div>
      <div className="p-3.5 bg-surface rounded-xl flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge uppercase text-primary tracking-wider">DevOps Mobile</span>
      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
      </div>
      <div className="p-2.5 rounded-lg bg-surface-container-high flex items-center justify-between">
      <div>
      <span className="block font-label-badge text-label-badge text-on-surface-variant">Fleet Cluster</span>
      <span className="font-label-md text-label-md font-bold text-on-surface">100% HEALTHY</span>
      </div>
      <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
      </div>
      {/* Quick Action Toggle */}
      <div className="p-2 rounded-lg bg-surface-container flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface">Instant Rollback</span>
      <div className="w-8 h-4 rounded-full bg-surface-container-highest relative flex items-center px-0.5">
      <div className="w-3 h-3 rounded-full bg-primary shadow-sm"></div>
      </div>
      </div>
      {/* Alert Feed item */}
      <div className="p-2 rounded-lg bg-surface-container-high/60 flex items-start gap-2">
      <span className="material-symbols-outlined text-primary text-[16px] shrink-0">notifications_active</span>
      <div className="flex flex-col">
      <span className="font-label-badge text-label-badge text-on-surface font-bold">Auto-Scale Triggered</span>
      <span className="font-label-md text-label-md text-on-surface-variant">+6 pods US-East</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Side: Key Proven Metrics (Col 4) */}
      <div className="lg:col-span-4 flex flex-col gap-4">
      <div className="p-5 rounded-xl bg-surface-container flex flex-col">
      <span className="font-label-badge text-label-badge text-primary-container uppercase tracking-wider">Uptime Reliability</span>
      <div className="font-metric-display text-metric-display text-primary font-extrabold tracking-tight">
                    99.99%
                  </div>
      <span className="font-label-md text-label-md text-on-surface font-semibold">Strict Enterprise Service SLA</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Zero unscheduled downtime recorded throughout 18 months of intensive peak holiday freight transport cycles.
                  </p>
      </div>
      <div className="p-5 rounded-xl bg-surface-container flex flex-col">
      <span className="font-label-badge text-label-badge text-secondary uppercase tracking-wider">Pipeline Agility</span>
      <div className="font-metric-display text-metric-display text-on-surface font-extrabold tracking-tight">
                    +60%
                  </div>
      <span className="font-label-md text-label-md text-on-surface font-semibold">Dev Release Velocity Surge</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Automated build and test suite dropped sprint deployment overhead from 4 hours to 8.5 minutes end-to-end.
                  </p>
      </div>
      <div className="p-5 rounded-xl bg-surface-container flex flex-col">
      <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-wider">Edge Dispatch Response</span>
      <div className="font-metric-display text-metric-display text-primary-container font-extrabold tracking-tight">
                    &lt;100ms
                  </div>
      <span className="font-label-md text-label-md text-on-surface font-semibold">Global API Gateway Response</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Geo-routed Anycast networking ensures drivers and automated trucks sync updates with near-zero latency worldwide.
                  </p>
      </div>
      </div>
      </div>
      </div>
      {/* 5. SLIDE FOOTER BAR / ASHKNAZ SERWER BRAND CREDITS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 pb-2 text-on-surface-variant">
      <div className="flex items-center gap-3">
      <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,242,170,0.8)]"></span>
      <span className="font-label-badge text-label-badge text-on-surface font-bold uppercase tracking-[0.08em]">
                Ashknaz Serwer Executive Deck • Confidential
              </span>
      </div>
      <div className="flex items-center gap-6">
      <span className="font-label-md text-label-md text-on-surface-variant">
                Section: <span className="text-primary font-semibold">Core Technical Infrastructure</span>
      </span>
      <span className="font-label-badge text-label-badge px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-mono">
                SLIDE 07 OF 09
              </span>
      </div>
      </div>
      </section>
      {/* Interactive Terminal Feed Micro-Script */}
      <script>
          (function() {
            // Periodic subtle HUD indicator ping
            const nodes = document.querySelectorAll('[title^="Node"]');
            if (nodes.length > 0) {
              setInterval(() => {
                const randomIndex = Math.floor(Math.random() * nodes.length);
                const target = nodes[randomIndex];
                target.classList.add('bg-primary-container/40');
                setTimeout(() => {
                  target.classList.remove('bg-primary-container/40');
                }, 600);
              }, 1200);
            }
          })();
        </script>
      </div>
    </DeckLayout>
  );
}
