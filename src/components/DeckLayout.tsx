import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const DECK_PAGES = [
  { to: "/", label: "Overview" },
  { to: "/full-stack-web", label: "Full-Stack & Web" },
  { to: "/mobile-apps", label: "Mobile Apps" },
  { to: "/ai-3d-interactive", label: "AI & 3D Interactive" },
  { to: "/digital-marketing", label: "Digital Marketing" },
  { to: "/uiux-creative", label: "UI/UX & Creative" },
  { to: "/cloud-devops", label: "Cloud & DevOps" },
  { to: "/ecommerce", label: "E-Commerce" },
  { to: "/autocad", label: "AutoCAD & 3D" },
  { to: "/video-vfx", label: "Video & VFX" },
];

const TOTAL = DECK_PAGES.length;
const pad = (n: number) => String(n).padStart(2, "0");

export function DeckLayout({ slide, children }: { slide: number; children: ReactNode }) {
  const prev = DECK_PAGES[(slide - 2 + TOTAL) % TOTAL]!;
  const next = DECK_PAGES[slide % TOTAL]!;

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 w-full px-gutter-md md:px-gutter-xl flex items-center justify-between gap-gutter-md">
          <div className="flex items-center gap-gutter-md shrink-0">
            <Link to="/" className="flex items-center gap-gutter-sm group">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-headline-sm text-headline-sm font-bold shadow-[0_0_24px_-4px_rgba(0,242,170,0.2)] group-hover:shadow-[0_0_24px_-4px_rgba(0,242,170,0.45)] transition-all">
                AS
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
                  Ashknaz Serwer
                </span>
                <span className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-primary-fixed-dim">
                  Digital Engineering
                </span>
              </div>
            </Link>
          </div>
          <nav className="hidden xl:flex items-center gap-gutter-xs p-1 rounded-full bg-surface-container-low">
            {DECK_PAGES.map((p, i) => {
              const active = i === slide - 1;
              return (
                <Link
                  key={p.to}
                  to={p.to}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "px-3 py-2 rounded-full transition-colors bg-surface-container-high text-primary font-semibold font-label-md text-label-md"
                      : "px-3 py-2 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
                  }
                >
                  {p.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-gutter-md shrink-0">
            <a
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-[0_0_24px_-4px_rgba(0,242,170,0.35)] hover:shadow-[0_0_36px_0px_rgba(0,242,170,0.5)] transition-all"
              href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry"
            >
              Schedule Strategy Call
            </a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-20 pb-28 bg-surface">{children}</main>

      <aside className="fixed bottom-6 left-0 right-0 z-40 px-gutter-md pointer-events-none flex justify-center">
        <div className="pointer-events-auto max-w-4xl w-full bg-surface-container-low/90 backdrop-blur-xl rounded-full px-gutter-lg py-3 flex items-center justify-between gap-gutter-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-gutter-sm shrink-0">
            <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_12px_rgba(0,242,170,0.8)]"></div>
            <span className="font-label-badge text-label-badge uppercase text-on-surface-variant tracking-[0.08em] hidden md:inline">
              Ashknaz Serwer • Digital Growth &amp; Engineering
            </span>
            <span className="font-label-badge text-label-badge uppercase text-on-surface-variant tracking-[0.08em] md:hidden">
              AS Digital Deck
            </span>
          </div>
          <div className="flex items-center gap-gutter-md flex-1 max-w-xs mx-auto">
            <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
              <div
                className="h-full bg-primary-container rounded-full shadow-[0_0_12px_rgba(0,242,170,0.6)] transition-all"
                style={{ width: `${(slide / TOTAL) * 100}%` }}
              ></div>
            </div>
            <span className="font-label-md text-label-md font-semibold text-primary shrink-0">
              {pad(slide)} / {pad(TOTAL)}
            </span>
          </div>
          <div className="flex items-center gap-gutter-xs shrink-0">
            <Link
              to={prev.to}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </Link>
            <Link
              to={next.to}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </Link>
          </div>
        </div>
      </aside>

      <footer className="w-full bg-surface-container-lowest py-12 pb-24">
        <div className="max-w-7xl mx-auto px-gutter-xl flex flex-col md:flex-row items-center justify-between gap-gutter-md text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Ashknaz Serwer Digital
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Executive Technology Architecture &amp; High-Impact Product Engineering.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-gutter-lg">
            <Link
              to="/"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Overview
            </Link>
            <Link
              to="/ecommerce"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Case Studies
            </Link>
            <a
              href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Schedule Strategy Call
            </a>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 Ashknaz Serwer. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
