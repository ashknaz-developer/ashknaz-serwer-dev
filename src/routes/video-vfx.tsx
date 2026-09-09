import { createFileRoute } from "@tanstack/react-router";
import { DeckLayout } from "@/components/DeckLayout";

export const Route = createFileRoute("/video-vfx")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Video Editing, VFX & 3D Animation | Ashknaz Serwer" },
      { name: "description", content: "Broadcast-grade editing, motion graphics, 3D CGI product commercials, and high-retention short-form content in 4K 60fps." },
      { property: "og:title", content: "Video Editing, VFX & 3D Animation | Ashknaz Serwer" },
      { property: "og:description", content: "Broadcast-grade editing, motion graphics, 3D CGI product commercials, and high-retention short-form content in 4K 60fps." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return (
    <DeckLayout slide={10}>
      <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden px-gutter-md sm:px-gutter-xl py-gutter-lg sm:py-gutter-2xl max-w-7xl mx-auto space-y-16">
      {/* Atmospheric Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[650px] h-[650px] bg-primary-container/5 rounded-full blur-[140px] -z-10"></div>
      <div className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="pointer-events-none absolute -bottom-48 left-1/3 w-[600px] h-[600px] bg-primary-fixed/5 rounded-full blur-[160px] -z-10"></div>
      {/* TOP HEADER / DECK STRIP */}
      <div className="w-full bg-surface-container-low/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
      <div className="flex items-center gap-3 flex-wrap">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/10 text-primary-container font-label-badge text-label-badge tracking-[0.08em] uppercase">
      <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                SLIDE 10 / 10 • VIDEO EDITING, VFX &amp; 3D ANIMATION • ASHKNAZ SERWER
              </span>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-badge text-label-badge uppercase">
      <span className="material-symbols-outlined text-[14px] text-primary-fixed-dim">movie_filter</span>
                Production Grade Studio
              </span>
      </div>
      <div className="flex items-center gap-4 flex-wrap text-right">
      <div className="flex items-center gap-2 text-on-surface-variant font-label-badge text-label-badge uppercase tracking-wider">
      <span className="text-secondary font-bold">CINEMATIC 4K 60FPS</span>
      <span className="text-surface-bright">•</span>
      <span className="text-primary-fixed-dim font-bold">PREMIERE PRO &amp; AFTER EFFECTS CERTIFIED</span>
      <span className="text-surface-bright">•</span>
      <span className="text-primary-container font-bold">100M+ COMBINED CLIENT VIEWS</span>
      </div>
      </div>
      </div>
      {/* MAIN HERO TITLE BANNER */}
      <div className="space-y-4 max-w-4xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary-fixed-dim font-label-badge text-label-badge uppercase tracking-widest">
      <span className="material-symbols-outlined text-[15px]">videocam</span>
              Cinematic Post-Production Suite
            </div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight sm:leading-none">
              High-Impact Video Editing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-secondary">Motion Graphics</span> &amp; 3D Cinematic Visuals
            </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Broadcast-grade video editing, high-retention social media reels, 3D CGI product commercials, and kinetic typography engineered for explosive viral reach and client conversion.
            </p>
      </div>
      {/* TOP SECTION: 3 CORE PILLARS (LEFT) & NLE TIMELINE STUDIO (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left: 3 Core Production Pillars */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-5">
      {/* Module 01 */}
      <div className="group bg-surface-container-low p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_-5px_rgba(0,242,170,0.15)] transition-all flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge text-primary-container font-bold uppercase tracking-widest">MODULE 01 • SHORT-FORM MASTERY</span>
      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined text-[18px]">smartphone</span>
      </div>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                  High-Retention Short-Form &amp; Viral Reels
                </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Fast-paced micro-editing, kinetic dynamic subtitles, precision audio sound design, micro-SFX swooshes, and psychological meme B-roll pacing calibrated specifically for TikTok, Instagram Reels, and YouTube Shorts.
                </p>
      <div className="flex flex-wrap gap-2 pt-1">
      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-primary-container font-label-badge text-label-badge uppercase font-semibold">60% Retention Lift</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-badge text-label-badge uppercase">Kinetic Captions</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-badge text-label-badge uppercase">Sound Design</span>
      </div>
      </div>
      {/* Module 02 */}
      <div className="group bg-surface-container-low p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_-5px_rgba(0,242,170,0.15)] transition-all flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-widest">MODULE 02 • BROADCAST &amp; YOUTUBE</span>
      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[18px]">live_tv</span>
      </div>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors">
                  Long-Form YouTube &amp; Corporate Commercials
                </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Multi-camera sync, cinematic color grading in DaVinci Resolve Studio (LUT crafting &amp; Lumetri curves), narrative story pacing, curated 4K archival footage integration, and dynamic brand sponsor bumpers.
                </p>
      <div className="flex flex-wrap gap-2 pt-1">
      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-secondary font-label-badge text-label-badge uppercase font-semibold">4K Color Grading</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-badge text-label-badge uppercase">YouTube Mastered</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-badge text-label-badge uppercase">Audio Mastering</span>
      </div>
      </div>
      {/* Module 03 */}
      <div className="group bg-surface-container-low p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_-5px_rgba(0,242,170,0.15)] transition-all flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <span className="font-label-badge text-label-badge text-tertiary-fixed-dim font-bold uppercase tracking-widest">MODULE 03 • 3D CGI &amp; KINETIC VFX</span>
      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary-fixed-dim">
      <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
      </div>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-tertiary-fixed-dim transition-colors">
                  Motion Graphics, VFX &amp; 3D CGI Animation
                </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  After Effects kinetic logo stingers, app UI walkthrough animations, Blender 3D photorealistic glass/metal material simulations, particle dynamics, and futuristic cyber HUD overlays for premium technology products.
                </p>
      <div className="flex flex-wrap gap-2 pt-1">
      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-tertiary-fixed-dim font-label-badge text-label-badge uppercase font-semibold">Blender 3D VFX</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-badge text-label-badge uppercase">After Effects Kinetic</span>
      <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-badge text-label-badge uppercase">Lottie / Alpha MP4</span>
      </div>
      </div>
      </div>
      {/* Right: Interactive PC Video Editing Studio NLE Timeline Mockup */}
      <div className="lg:col-span-7 flex flex-col bg-surface-container-lowest rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden justify-between">
      {/* NLE Application Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 bg-surface-container-low/60 -mx-4 -mt-4 px-5 py-3 rounded-t-3xl">
      <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5">
      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
      <span className="px-2 py-0.5 rounded bg-[#9999ff]/20 text-[#c2c2ff] font-bold text-[10px]">Pr</span>
      <span className="truncate font-semibold max-w-[240px] sm:max-w-xs text-on-surface">Lumina_Commercial_V3_Master.prproj [4K DCI 60fps]</span>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <span className="font-mono text-primary-container font-bold text-label-md bg-surface-container-highest px-3 py-1 rounded-md tracking-wider">
                    00:01:24:18
                  </span>
      <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary-container/10 text-primary-container font-label-badge text-label-badge uppercase font-bold">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                    RTX 4090 ACCELERATED
                  </span>
      </div>
      </div>
      {/* Viewport & Scopes Window */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-4">
      {/* Main Preview Monitor (9 cols) */}
      <div className="sm:col-span-8 relative aspect-video bg-surface-container rounded-xl overflow-hidden shadow-inner flex items-center justify-center group">
      <img className="w-full h-full object-cover" data-alt="A cinematic 3D cybernetic holographic product render with emerald neon glow, floating in a dark moody studio setting with reflective metallic textures and anamorphic teal lens flare, shot on Arri Alexa Mini 4K cinema quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgFj6ewOG1qK3saBTRaTFWXAFtTIWBL3U8lzXx7GvKVHytSa7LnHjeYI14GWlqVG0-odPBgo6vM19yTR1hJrM8qwCP6usnD0YX1x050vt13kcnqHp600hPqSxlfkQ9peG_MeVw0w8Xm-O0KKhg8xuG5s2G97_60qoxfJPq9wt3kJC9VI1tda7OGDABgGtJhbNT_RG7vo0AOnMHi5nPE-4XLl2gQUPQLzXk1_p-47cKcxKD1rAHT5hN" />
      {/* Monitor Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-2 left-2 flex items-center gap-2 bg-surface-container-lowest/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-on-surface">
      <span className="text-error font-bold flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span> REC
                    </span>
      <span>4096x2160 DCI</span>
      <span className="text-primary-container font-semibold">60.00 fps</span>
      </div>
      {/* Center Safe Area Crosshair */}
      <div className="absolute inset-6 border border-white/10 pointer-events-none rounded flex items-center justify-center">
      <div className="w-4 h-4 border-t border-l border-primary-container/40"></div>
      </div>
      {/* Playhead controls overlay */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-on-surface">
      <div className="flex items-center gap-2">
      <button className="w-7 h-7 rounded bg-surface-container-highest/80 flex items-center justify-center hover:text-primary-container transition-colors" type="button">
      <span className="material-symbols-outlined text-[16px]">play_arrow</span>
      </button>
      <button className="w-7 h-7 rounded bg-surface-container-highest/80 flex items-center justify-center hover:text-primary-container transition-colors" type="button">
      <span className="material-symbols-outlined text-[16px]">fast_forward</span>
      </button>
      <span className="font-mono text-[11px] text-on-surface-variant ml-2">Fit • 100% Full Res</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-bold text-[10px] tracking-wider">OUTPUT MASTER</span>
      </div>
      </div>
      {/* Color Grading Scopes & Histogram (4 cols) */}
      <div className="sm:col-span-4 bg-surface-container p-3 rounded-xl flex flex-col justify-between gap-2 font-mono text-[10px]">
      <div className="flex items-center justify-between border-b border-surface-container-highest/60 pb-1.5">
      <span className="text-primary-fixed-dim font-bold">LUMETRI SCOPES</span>
      <span className="text-on-surface-variant">RGB PARADE</span>
      </div>
      {/* Waveform SVG Simulation */}
      <div className="w-full h-24 bg-surface-container-lowest rounded p-1 flex items-end justify-around relative overflow-hidden">
      <div className="absolute top-1 right-2 text-[9px] text-on-surface-variant">100 IRE</div>
      <div className="absolute top-1/2 right-2 text-[9px] text-on-surface-variant">50 IRE</div>
      <div className="absolute bottom-1 right-2 text-[9px] text-on-surface-variant">0 IRE</div>
      {/* Red Channel Waveform */}
      <svg className="w-1/3 h-full overflow-visible text-[#ff5f56]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 80">
      <path d="M0,60 Q10,20 20,45 T40,15" fill="none" opacity="0.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0,70 Q15,40 25,60 T40,30" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="1" />
      </svg>
      {/* Green Channel Waveform */}
      <svg className="w-1/3 h-full overflow-visible text-[#00f2aa]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 80">
      <path d="M0,75 Q8,15 20,35 T40,10" fill="none" opacity="0.9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0,65 Q12,30 22,50 T40,25" fill="none" opacity="0.6" stroke="currentColor" strokeWidth="1" />
      </svg>
      {/* Blue Channel Waveform */}
      <svg className="w-1/3 h-full overflow-visible text-[#7bd0ff]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 80">
      <path d="M0,50 Q10,25 20,40 T40,20" fill="none" opacity="0.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0,80 Q14,35 26,55 T40,35" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="1" />
      </svg>
      </div>
      {/* Scope telemetry */}
      <div className="space-y-1 text-on-surface-variant text-[10px]">
      <div className="flex justify-between">
      <span>Color Primaries:</span>
      <span className="text-on-surface">Rec.709 D65</span>
      </div>
      <div className="flex justify-between">
      <span>Target Dynamic:</span>
      <span className="text-primary-container">Wide HDR 10-Bit</span>
      </div>
      <div className="flex justify-between">
      <span>True Peak Level:</span>
      <span className="text-on-surface">-1.2 dBTP</span>
      </div>
      </div>
      </div>
      </div>
      {/* Detailed Multi-Track NLE Timeline */}
      <div className="bg-surface-container p-3.5 rounded-2xl flex flex-col gap-2 relative">
      {/* Timeline Ruler Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-variant border-b border-surface-container-highest/60 pb-1.5">
      <div className="flex items-center gap-3">
      <span className="text-primary font-bold">TIMELINE: SEQUENCE 01</span>
      <span>Zoom: 140%</span>
      </div>
      <div className="flex items-center gap-6">
      <span>00:00:00:00</span>
      <span>00:00:45:00</span>
      <span className="text-primary-container font-bold">00:01:24:18</span>
      <span>00:02:00:00</span>
      </div>
      </div>
      {/* Video Tracks Container */}
      <div className="space-y-1.5 relative pt-1">
      {/* Simulated Vertical Playhead Scrub Indicator */}
      <div className="absolute top-0 bottom-0 left-[58%] w-0.5 bg-primary-container shadow-[0_0_12px_#00f2aa] z-20 pointer-events-none flex flex-col items-center">
      <div className="w-2.5 h-2.5 bg-primary-container rotate-45 -mt-1 shadow-md"></div>
      </div>
      {/* V4 Track: Kinetic Captions & Motion Graphics */}
      <div className="flex items-center gap-2">
      <span className="w-7 text-[10px] font-mono text-on-surface-variant font-bold">V4</span>
      <div className="flex-1 h-7 bg-surface-container-lowest rounded flex items-center px-1 gap-1 relative overflow-hidden">
      <div className="h-5 w-24 bg-tertiary-fixed-dim/30 rounded px-2 flex items-center text-[10px] text-tertiary font-medium truncate">
                        Titler_Hook_01
                      </div>
      <div className="h-5 w-44 bg-primary-container/25 rounded px-2 flex items-center text-[10px] text-primary font-bold truncate">
                        Kinetic_Captions_Sync
                      </div>
      <div className="h-5 w-32 bg-secondary/25 rounded px-2 flex items-center text-[10px] text-secondary font-medium truncate">
                        CyberHUD_Overlay.aep
                      </div>
      </div>
      </div>
      {/* V3 Track: 3D CGI Overlay */}
      <div className="flex items-center gap-2">
      <span className="w-7 text-[10px] font-mono text-on-surface-variant font-bold">V3</span>
      <div className="flex-1 h-7 bg-surface-container-lowest rounded flex items-center px-1 gap-1 relative overflow-hidden">
      <div className="w-16"></div>
      <div className="h-5 w-52 bg-secondary-container/40 rounded px-2 flex items-center text-[10px] text-secondary-fixed font-bold truncate">
                        Blender3D_Bottle_Exploded.mov
                      </div>
      <div className="h-5 w-28 bg-primary-container/20 rounded px-2 flex items-center text-[10px] text-primary font-medium truncate">
                        Particle_VFX.exr
                      </div>
      </div>
      </div>
      {/* V2 Track: B-Roll Cinematic */}
      <div className="flex items-center gap-2">
      <span className="w-7 text-[10px] font-mono text-on-surface-variant font-bold">V2</span>
      <div className="flex-1 h-7 bg-surface-container-lowest rounded flex items-center px-1 gap-1 relative overflow-hidden">
      <div className="h-5 w-36 bg-surface-container-highest rounded px-2 flex items-center text-[10px] text-on-surface truncate">
                        Macro_Apparel_Texture.mp4
                      </div>
      <div className="h-5 w-40 bg-surface-container-highest rounded px-2 flex items-center text-[10px] text-on-surface truncate">
                        Athlete_Sprint_4K60.mov
                      </div>
      <div className="h-5 w-36 bg-surface-container-highest rounded px-2 flex items-center text-[10px] text-on-surface truncate">
                        Neon_City_Broll.mov
                      </div>
      </div>
      </div>
      {/* V1 Track: A-Roll 4K Raw Master */}
      <div className="flex items-center gap-2">
      <span className="w-7 text-[10px] font-mono text-primary-container font-bold">V1</span>
      <div className="flex-1 h-8 bg-surface-container-lowest rounded flex items-center px-1 gap-1 relative overflow-hidden">
      <div className="h-6 w-1/2 bg-primary-container/30 rounded px-2 flex items-center justify-between text-[11px] text-primary-container font-semibold truncate">
      <span>A-Roll_LeadActor_Take04_ArriRaw.mov</span>
      <span className="text-[9px] bg-primary-container/40 px-1 rounded">LUT: ARRI_709</span>
      </div>
      <div className="h-6 w-1/2 bg-primary-container/30 rounded px-2 flex items-center justify-between text-[11px] text-primary-container font-semibold truncate">
      <span>A-Roll_LeadActor_Take05_ArriRaw.mov</span>
      <span className="text-[9px] bg-primary-container/40 px-1 rounded">LUT: ARRI_709</span>
      </div>
      </div>
      </div>
      </div>
      {/* Divider */}
      <div className="h-px bg-surface-container-highest/60 my-0.5"></div>
      {/* Audio Tracks Container with Waveform SVG */}
      <div className="space-y-1.5">
      {/* A1 Track: Voiceover Normalization -14 LUFS */}
      <div className="flex items-center gap-2">
      <span className="w-7 text-[10px] font-mono text-[#7bd0ff] font-bold">A1</span>
      <div className="flex-1 h-6 bg-[#002f42]/40 rounded flex items-center px-2 justify-between relative overflow-hidden">
      <div className="flex items-center gap-2 z-10 text-[10px] text-secondary font-mono">
      <span>VO_Studio_Master_DeNoised.wav</span>
      <span className="text-[9px] bg-secondary-container/50 px-1 rounded text-white">-14 LUFS Normalized</span>
      </div>
      {/* Mini Waveform Visualizer */}
      <svg className="absolute inset-0 w-full h-full text-secondary opacity-30 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 300 20">
      <path d="M0,10 Q10,2 20,10 T40,10 T60,1 T80,10 T100,18 T120,10 T140,3 T160,10 T180,17 T200,10 T220,2 T240,10 T260,18 T280,10 T300,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      </div>
      </div>
      {/* A2 Track: Foley & SFX Swoosh */}
      <div className="flex items-center gap-2">
      <span className="w-7 text-[10px] font-mono text-tertiary font-bold">A2</span>
      <div className="flex-1 h-6 bg-surface-container-lowest rounded flex items-center px-1 gap-2 relative overflow-hidden">
      <div className="h-4 w-14 bg-tertiary-container/30 rounded px-1 flex items-center text-[9px] text-tertiary font-mono">Swoosh_01</div>
      <div className="h-4 w-12 bg-tertiary-container/30 rounded px-1 flex items-center text-[9px] text-tertiary font-mono">Impact_Deep</div>
      <div className="h-4 w-16 bg-tertiary-container/30 rounded px-1 flex items-center text-[9px] text-tertiary font-mono">Cyber_Glitch</div>
      <div className="h-4 w-14 bg-tertiary-container/30 rounded px-1 flex items-center text-[9px] text-tertiary font-mono">Riser_Sub</div>
      </div>
      </div>
      {/* A3 Track: Ambient Cinematic Soundtrack */}
      <div className="flex items-center gap-2">
      <span className="w-7 text-[10px] font-mono text-primary-container font-bold">A3</span>
      <div className="flex-1 h-6 bg-primary-container/10 rounded flex items-center px-2 justify-between relative overflow-hidden">
      <span className="z-10 text-[10px] text-primary-container font-mono">Cinematic_Synthesizer_Score_Stereo.wav (Licensed Universal)</span>
      {/* Audio Waveform */}
      <svg className="absolute inset-0 w-full h-full text-primary-container opacity-25 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 300 20">
      <path d="M0,10 Q15,4 30,10 T60,10 T90,2 T120,10 T150,18 T180,10 T210,3 T240,10 T270,17 T300,10" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      </div>
      </div>
      </div>
      {/* Bottom Master Status Pill */}
      <div className="mt-2 pt-2 border-t border-surface-container-highest/60 flex flex-wrap items-center justify-between text-[11px] font-mono text-on-surface-variant">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
      <span className="text-primary">Color Space: Rec.709 Mastered • Bitrate: 85 Mbps ProRes 422HQ</span>
      </div>
      <span className="text-secondary font-semibold">Lossless Audio 48kHz 24-Bit Linear PCM</span>
      </div>
      </div>
      </div>
      </div>
      {/* MIDDLE SECTION: PRODUCTION SOFTWARE & POST-PRODUCTION ECOSYSTEM */}
      <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <span className="font-label-badge text-label-badge text-primary-container tracking-widest uppercase font-bold">INDUSTRY-STANDARD STACK</span>
      <h2 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
                  Production Software &amp; Post-Production Ecosystem
                </h2>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Hardware-accelerated workstation pipeline ensuring pixel-perfect color grading, frame-accurate motion design, and rapid iterative client collaboration.
              </p>
      </div>
      {/* 8-Tool Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Tool 1 */}
      <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm hover:bg-surface-container-high transition-colors flex flex-col gap-2">
      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shadow-sm">
      <span className="font-bold text-sm font-mono">Pr</span>
      </div>
      <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Adobe Premiere Pro</h4>
      <p className="font-body-sm text-[12px] text-on-surface-variant">NLE Video Editing, Multi-Cam Synchronization &amp; Rapid Assembly</p>
      </div>
      {/* Tool 2 */}
      <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm hover:bg-surface-container-high transition-colors flex flex-col gap-2">
      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-[#c2c2ff] shadow-sm">
      <span className="font-bold text-sm font-mono">Ae</span>
      </div>
      <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Adobe After Effects</h4>
      <p className="font-body-sm text-[12px] text-on-surface-variant">Kinetic Typography, Motion VFX, Compositing &amp; Tracking</p>
      </div>
      {/* Tool 3 */}
      <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm hover:bg-surface-container-high transition-colors flex flex-col gap-2">
      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary shadow-sm">
      <span className="material-symbols-outlined text-[22px]">palette</span>
      </div>
      <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">DaVinci Resolve</h4>
      <p className="font-body-sm text-[12px] text-on-surface-variant">Studio Color Grading, Lumetri Curves &amp; HDR Film Tone Delivery</p>
      </div>
      {/* Tool 4 */}
      <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm hover:bg-surface-container-high transition-colors flex flex-col gap-2">
      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-[#ff9800] shadow-sm">
      <span className="material-symbols-outlined text-[22px]">view_in_ar</span>
      </div>
      <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Blender 3D</h4>
      <p className="font-body-sm text-[12px] text-on-surface-variant">Photorealistic CGI, Physics Particles &amp; Product Renders</p>
      </div>
      {/* Tool 5 */}
      <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm hover:bg-surface-container-high transition-colors flex flex-col gap-2">
      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shadow-sm">
      <span className="font-bold text-sm font-mono">Au</span>
      </div>
      <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Adobe Audition</h4>
      <p className="font-body-sm text-[12px] text-on-surface-variant">Audio Mastering, Noise Reduction, Dynamic EQ &amp; -14 LUFS Normalization</p>
      </div>
      {/* Tool 6 */}
      <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm hover:bg-surface-container-high transition-colors flex flex-col gap-2">
      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary-fixed-dim shadow-sm">
      <span className="material-symbols-outlined text-[22px]">deployed_code</span>
      </div>
      <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Cinema 4D</h4>
      <p className="font-body-sm text-[12px] text-on-surface-variant">3D Motion Graphics, MoGraph Simulations &amp; Octane Shaders</p>
      </div>
      {/* Tool 7 */}
      <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm hover:bg-surface-container-high transition-colors flex flex-col gap-2">
      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shadow-sm">
      <span className="material-symbols-outlined text-[22px]">draw</span>
      </div>
      <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Photoshop &amp; Illustrator</h4>
      <p className="font-body-sm text-[12px] text-on-surface-variant">Vector Asset Prep, Clean Alpha Cutouts &amp; Storyboard Design</p>
      </div>
      {/* Tool 8 */}
      <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm hover:bg-surface-container-high transition-colors flex flex-col gap-2">
      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-[#ff3366] shadow-sm">
      <span className="material-symbols-outlined text-[22px]">cloud_sync</span>
      </div>
      <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Frame.io</h4>
      <p className="font-body-sm text-[12px] text-on-surface-variant">Real-Time Client Frame-By-Frame Review &amp; Rapid Approval Workflow</p>
      </div>
      </div>
      {/* Turnaround Guarantee Banner */}
      <div className="w-full bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
      <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
      <span className="material-symbols-outlined text-[20px]">verified</span>
      </div>
      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                  Turnaround Standard: <span className="text-primary-container font-bold">24h–48h Rush Available</span> • Unlimited Revisions Until 100% Satisfaction • 4K UHD Master Delivery
                </span>
      </div>
      <span className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-widest px-3 py-1 rounded-full bg-surface-container-highest shrink-0">
                PRORES 422HQ &amp; H.265 MASTERS
              </span>
      </div>
      </div>
      {/* BOTTOM SECTION: FEATURED PROJECT CASE STUDY */}
      <div className="bg-surface-container-low rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10">
      {/* Case Study Header & Context */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-8 space-y-3">
      <div className="flex items-center gap-2">
      <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-badge text-label-badge uppercase font-bold tracking-widest">
                    CASE STUDY 01 • GLOBAL PRODUCT LAUNCH
                  </span>
      <span className="text-on-surface-variant text-[12px]">• Omnichannel Campaign</span>
      </div>
      <h3 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight leading-tight">
                  Nexus Energy &amp; Aura Cyberwear — Viral Omnichannel Commercial &amp; 3D Motion Campaign
                </h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                  Delivered an end-to-end 3D motion package and 12 high-retention viral video ad creatives, achieving 4.8M impressions, 68% average watch duration, and a 4.2x ROAS boost for a global performance apparel brand.
                </p>
      </div>
      {/* Key Metrics Box (4 cols) */}
      <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-2xl flex flex-col justify-between gap-5 shadow-lg">
      <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-wider font-bold">CAMPAIGN ROI BENCHMARKS</span>
      <div className="grid grid-cols-3 gap-2 text-center">
      <div className="flex flex-col items-center">
      <span className="font-metric-display text-[32px] sm:text-[38px] text-primary-container font-extrabold leading-none">4.8M+</span>
      <span className="font-label-md text-[11px] text-on-surface-variant mt-1">Organic &amp; Paid Views</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="font-metric-display text-[32px] sm:text-[38px] text-white font-extrabold leading-none">68.4%</span>
      <span className="font-label-md text-[11px] text-on-surface-variant mt-1">Avg Watch Completion</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="font-metric-display text-[32px] sm:text-[38px] text-secondary font-extrabold leading-none">4.2x</span>
      <span className="font-label-md text-[11px] text-on-surface-variant mt-1">Direct ROAS Conversion</span>
      </div>
      </div>
      </div>
      </div>
      {/* Dual Mockup Display (Desktop YouTube Player + Mobile 9:16 Viral Reel) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Left Mockup: PC Desktop / Laptop Editing Console 4K YouTube Player (7 cols) */}
      <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-col gap-3">
      {/* Mockup Window Bar */}
      <div className="flex items-center justify-between px-2 text-[12px] text-on-surface-variant">
      <div className="flex items-center gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></div>
      </div>
      <span className="font-mono text-[11px] text-on-surface truncate">YouTube 4K Premiere • Nexus_Aura_Commercial_Official_4K.mp4</span>
      <span className="material-symbols-outlined text-[16px]">aspect_ratio</span>
      </div>
      {/* Video Display Viewport */}
      <div className="relative aspect-video w-full bg-surface-container rounded-xl overflow-hidden shadow-inner group">
      <img className="w-full h-full object-cover" data-alt="An ultra-high-end futuristic cinematic commercial frame of an athlete wearing glowing cyberwear in a neon-lit rain-slicked Tokyo street, moody emerald lighting, dramatic motion blur, photorealistic octane render quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0GGQ2bT8uL4uugxedd671RptC7qNlACz-TPbDcsYfPCArqmR4PSs5IKK6uzUQ6-wV296OF9w-ugc89Q8MA3abH7-lyYZjXDlmh_Q63iqCFSG8_ZBiTazBp6zwrbmJUExw1fRh2HeAY3uBTEocMlKgSEB5nqD4IchTKMgSqKekRGZj16XjxBysw4UM9g0Vbiq00j9TfksmtB7putPfRLGHiSVStf37lmndGbvxCRkShdTQDX3ynZoa" />
      {/* YouTube Overlay Player Interface */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent flex flex-col justify-end p-4">
      {/* Scrubbing Timeline with Chapter Markers */}
      <div className="w-full space-y-1">
      <div className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden flex items-center">
      <div className="h-full bg-primary-container w-[65%] rounded-full shadow-[0_0_10px_#00f2aa]"></div>
      {/* Chapter tick markers */}
      <div className="absolute left-[20%] top-0 bottom-0 w-0.5 bg-surface-container-lowest"></div>
      <div className="absolute left-[45%] top-0 bottom-0 w-0.5 bg-surface-container-lowest"></div>
      <div className="absolute left-[75%] top-0 bottom-0 w-0.5 bg-surface-container-lowest"></div>
      </div>
      <div className="flex items-center justify-between text-[11px] font-mono text-on-surface pt-1">
      <div className="flex items-center gap-2">
      <span className="text-primary-container font-bold">02:18</span>
      <span className="text-on-surface-variant">/ 03:32</span>
      <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface">Chapter 3: Product Reveal</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="px-1.5 py-0.5 rounded bg-error text-white text-[9px] font-bold">4K 60</span>
      <span className="material-symbols-outlined text-[16px]">settings</span>
      <span className="material-symbols-outlined text-[16px]">fullscreen</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Video Metadata Sub-bar */}
      <div className="flex items-center justify-between px-2 pt-1 text-on-surface-variant text-[12px]">
      <div className="flex items-center gap-2">
      <span className="font-bold text-on-surface">Nexus Brand Global</span>
      <span className="material-symbols-outlined text-[14px] text-primary-container">check_circle</span>
      <span className="text-on-surface-variant">• 1.4M views • Master Color Rec.709</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex items-center gap-1 font-semibold text-primary-container">
      <span className="material-symbols-outlined text-[16px]">thumb_up</span> 84.2K
                    </span>
      <span className="flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">share</span> Share
                    </span>
      </div>
      </div>
      </div>
      {/* Right Mockup: Smartphone 9:16 Viral TikTok / Instagram Reel (5 cols) */}
      <div className="lg:col-span-5 flex justify-center">
      <div className="w-full max-w-[320px] bg-surface-container-lowest rounded-[2.5rem] p-3 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative">
      {/* Phone Speaker / Dynamic Island Notch */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-surface-container-highest rounded-full z-30 flex items-center justify-end px-2">
      <div className="w-2.5 h-2.5 rounded-full bg-surface-container"></div>
      </div>
      {/* Vertical Screen Container (9:16 aspect ratio) */}
      <div className="relative w-full aspect-[9/16] bg-surface rounded-[2rem] overflow-hidden flex flex-col justify-between p-4">
      <img className="absolute inset-0 w-full h-full object-cover" data-alt="A dynamic vertical phone wallpaper view of an athletic model wearing dark techwear jacket with glowing mint neon accents leaping mid-air against a dark cybernetic backdrop, high fashion photography, ultra sharp, viral TikTok aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDqKC02ziQs8FK5o0aiHS0MZW0qG-p_lQMXEWCwqnnIo_HVFrMA5t5xtIOWZewOmEnyIvB_yVE2kt9LBK5eJKsUxyv66y_h_1cEJyzMQG6BGzW98dh3BZSFxhDD2Q1sIgkPdCmZzFG5G6gMryfF7PCXfLhKiohae834BQtRze8bzljn8g8rO20F92XEsmAaOY_aaKHzphX3Je5Rpd2ZFBMYjH5KsvMmkvpcJoi7JF_fRDJvOryYEN_" />
      {/* Gradient Overlay for Readable Text */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/50 via-transparent to-surface-container-lowest/90 pointer-events-none"></div>
      {/* Top Status in Reel */}
      <div className="relative z-10 flex items-center justify-between text-white text-[11px] pt-4 font-mono">
      <span className="font-bold">Reels</span>
      <span className="material-symbols-outlined text-[18px]">photo_camera</span>
      </div>
      {/* Center Kinetic Subtitle / Dynamic Caption Box */}
      <div className="relative z-10 self-center text-center my-auto">
      <div className="inline-block px-3 py-1.5 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md shadow-xl transform -rotate-1">
      <span className="font-headline-sm text-headline-sm font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-secondary tracking-tight drop-shadow-[0_0_12px_#00f2aa]">
                          AURA X-1: DEFY GRAVITY
                        </span>
      </div>
      <p className="text-[11px] text-white/90 font-mono mt-1 drop-shadow">⚡ Engineered with Liquid Graphite Shell</p>
      </div>
      {/* Bottom Content & Floating Engagement Sidebar */}
      <div className="relative z-10 flex items-end justify-between gap-2">
      {/* Reel Details & CTA Button */}
      <div className="space-y-2 max-w-[200px]">
      <div className="flex items-center gap-1.5">
      <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold text-[10px]">AS</div>
      <span className="text-[12px] font-bold text-white">@ashknaz.creative</span>
      </div>
      <p className="text-[11px] text-white/80 line-clamp-2 leading-tight">
                          The wait is over. The future of athletic biomechanics is here. #Techwear #CGI #VFX #AfterEffects
                        </p>
      {/* Sound wave animation pill */}
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-surface-container-highest/60 backdrop-blur-sm text-[10px] text-primary-container font-mono">
      <span className="material-symbols-outlined text-[12px] animate-spin">graphic_eq</span>
      <span className="truncate">Original Sound • Nexus Audio Core</span>
      </div>
      {/* In-Video Shop Now CTA */}
      <div className="pt-1">
      <a className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-badge text-label-badge uppercase font-bold shadow-[0_0_15px_#00f2aa]" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
                            Shop Now <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* Right Side Floating Engagement Column */}
      <div className="flex flex-col items-center gap-4 text-white pb-2">
      <div className="flex flex-col items-center">
      <div className="w-9 h-9 rounded-full bg-surface-container-highest/60 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
      </div>
      <span className="text-[10px] font-bold mt-0.5">248K</span>
      </div>
      <div className="flex flex-col items-center">
      <div className="w-9 h-9 rounded-full bg-surface-container-highest/60 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
      </div>
      <span className="text-[10px] font-bold mt-0.5">3.4K</span>
      </div>
      <div className="flex flex-col items-center">
      <div className="w-9 h-9 rounded-full bg-surface-container-highest/60 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-[18px]">share</span>
      </div>
      <span className="text-[10px] font-bold mt-0.5">14.2K</span>
      </div>
      <div className="w-7 h-7 rounded-full bg-surface-container-highest/80 flex items-center justify-center animate-spin">
      <span className="material-symbols-outlined text-[14px]">album</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* BOTTOM BANNER BAR & CTA */}
      <div className="w-full bg-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary-container shadow-[0_0_20px_rgba(0,242,170,0.25)]">
      <span className="material-symbols-outlined text-[28px]">smart_display</span>
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Ashknaz Serwer • Post-Production, VFX &amp; Motion Design Practice</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Ready to elevate your brand video, viral reels, and 3D product launches to cinematic industry standard.</span>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
      <a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_28px_rgba(0,242,170,0.45)] hover:shadow-[0_0_36px_0px_rgba(0,242,170,0.6)] hover:-translate-y-0.5 transition-all" href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry">
      <span>Commission Video Production</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* SLIDE FOOTER METADATA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-on-surface-variant font-label-badge text-label-badge uppercase tracking-widest pt-2 pb-6 border-t border-surface-container-high">
      <span>ASHKNAZ SERWER • EXECUTIVE SHOWCASE DECK</span>
      <span className="text-primary-container font-bold">SLIDE 10 / 10 COMPLETED • 100% COMMERCIAL AUDIO &amp; VIDEO RIGHTS</span>
      <span>SAN FRANCISCO / REMOTE WORLDWIDE</span>
      </div>
      </div>
      </div>
    </DeckLayout>
  );
}
