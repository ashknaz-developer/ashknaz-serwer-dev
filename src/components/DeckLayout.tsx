import { Link } from "@tanstack/react-router";
import { Laptop, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

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
type ThemePreference = "dark" | "light" | "system";

const THEME_OPTIONS: Array<{
  value: ThemePreference;
  label: string;
  icon: typeof Moon;
}> = [
  { value: "dark", label: "Dark", icon: Moon },
  { value: "light", label: "Light", icon: Sun },
  { value: "system", label: "System", icon: Laptop },
];

export function DeckLayout({ slide, children }: { slide: number; children: ReactNode }) {
  const prev = DECK_PAGES[(slide - 2 + TOTAL) % TOTAL]!;
  const next = DECK_PAGES[slide % TOTAL]!;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<ThemePreference>("dark");
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark" || savedTheme === "light" || savedTheme === "system") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const resolvedTheme = theme === "system" ? (media.matches ? "dark" : "light") : theme;
      document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
      document.documentElement.dataset["theme"] = resolvedTheme;
      document.documentElement.style.colorScheme = resolvedTheme;
    };

    applyTheme();
    window.localStorage.setItem("portfolio-theme", theme);
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [theme]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    activeLinkRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [slide]);

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
          <nav
            aria-label="Portfolio sections"
            className="deck-nav hidden xl:flex items-center gap-0.5 p-1 rounded-full bg-surface-container-low overflow-x-auto max-w-[54vw]"
          >
            {DECK_PAGES.map((p, i) => {
              const active = i === slide - 1;
              return (
                <Link
                  key={p.to}
                  ref={active ? activeLinkRef : undefined}
                  to={p.to}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "px-2.5 py-2 rounded-full whitespace-nowrap transition-colors bg-surface-container-high text-primary font-semibold font-label-md text-label-md"
                      : "px-2.5 py-2 rounded-full whitespace-nowrap font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
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
            <div className="hidden xl:flex w-8 h-8 rounded-full bg-primary items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
            <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="xl:hidden rounded-full text-on-surface hover:bg-surface-container-high hover:text-primary"
                >
                  <Menu aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[min(88vw,22rem)] overflow-y-auto border-outline-variant bg-surface-container-lowest p-0 text-on-surface">
                <SheetHeader className="border-b border-outline-variant px-6 pb-5 pt-7 text-left">
                  <SheetTitle className="font-headline-sm text-headline-sm text-on-surface">
                    Ashknaz Serwer
                  </SheetTitle>
                  <SheetDescription className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-primary-fixed-dim">
                    Digital Engineering
                  </SheetDescription>
                </SheetHeader>

                <nav aria-label="Mobile portfolio sections" className="flex flex-col gap-1 px-4 py-5">
                  {DECK_PAGES.map((page, index) => {
                    const active = index === slide - 1;
                    return (
                      <SheetClose asChild key={page.to}>
                        <Link
                          to={page.to}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setDrawerOpen(false)}
                          className={cn(
                            "flex min-h-11 items-center justify-between rounded-lg px-4 font-label-lg text-label-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                            active
                              ? "bg-surface-container-high text-primary font-bold"
                              : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
                          )}
                        >
                          <span>{page.label}</span>
                          <span className="font-label-badge text-label-badge text-outline" aria-hidden="true">
                            {pad(index + 1)}
                          </span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                <div className="border-t border-outline-variant px-6 py-5">
                  <p className="mb-3 font-label-badge text-label-badge uppercase tracking-[0.08em] text-on-surface-variant">
                    Theme settings
                  </p>
                  <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-container p-1" role="group" aria-label="Theme preference">
                    {THEME_OPTIONS.map((option) => {
                      const Icon = option.icon;
                      const selected = theme === option.value;
                      return (
                        <Button
                          key={option.value}
                          type="button"
                          variant="ghost"
                          aria-pressed={selected}
                          onClick={() => setTheme(option.value)}
                          className={cn(
                            "h-12 flex-col gap-1 rounded-md px-2 font-label-md text-label-md",
                            selected
                              ? "bg-surface-container-high text-primary"
                              : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface",
                          )}
                        >
                          <Icon aria-hidden="true" />
                          {option.label}
                        </Button>
                      );
                    })}
                  </div>
                  <a
                    href="mailto:nazashk630@gmail.com?subject=Strategic%20Engineering%20Inquiry"
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary-container px-5 font-label-lg text-label-lg font-bold text-on-primary-container transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Schedule Strategy Call
                  </a>
                </div>
              </SheetContent>
            </Sheet>
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
