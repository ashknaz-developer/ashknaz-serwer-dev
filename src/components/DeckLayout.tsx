import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Github,
  Instagram,
  Laptop,
  Linkedin,
  Menu,
  MessageCircle,
  Moon,
  PhoneCall,
  Sun,
  Youtube,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { AiAssistant } from "@/components/AiAssistant";
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
import { LINKS } from "@/lib/assistant-knowledge";
import { cn } from "@/lib/utils";

export const DECK_PAGES = [
  { to: "/", label: "Overview" },
  { to: "/full-stack-web", label: "Full-Stack & Web" },
  { to: "/mobile-apps", label: "Mobile Apps" },
  { to: "/ai-3d-interactive", label: "AI & 3D Interactive" },
  { to: "/digital-marketing", label: "Digital Marketing" },
  { to: "/uiux-creative", label: "UI/UX & Creative Canva Portfolio" },
  { to: "/cloud-devops", label: "Cloud & DevOps" },
  { to: "/ecommerce", label: "E-Commerce & Smart Khata OS" },
  { to: "/autocad", label: "AutoCAD & 3D" },
  { to: "/video-vfx", label: "Video & VFX" },
] as const;

const TOTAL = DECK_PAGES.length;
const pad = (n: number) => String(n).padStart(2, "0");
type ThemePreference = "dark" | "light" | "system";

const THEME_OPTIONS = [
  { value: "dark", label: "Dark", icon: Moon },
  { value: "light", label: "Light", icon: Sun },
  { value: "system", label: "System", icon: Laptop },
] as const;

const SOCIAL_LINKS = [
  { label: "WhatsApp", href: LINKS.whatsapp, icon: MessageCircle },
  { label: "Instagram", href: LINKS.instagram, icon: Instagram },
  { label: "LinkedIn", href: LINKS.linkedin, icon: Linkedin },
  { label: "GitHub", href: LINKS.github, icon: Github },
  { label: "YouTube", href: LINKS.youtube, icon: Youtube },
  { label: "Facebook", href: LINKS.facebook, icon: Facebook },
] as const;

export function DeckLayout({ slide, children }: { slide: number; children: ReactNode }) {
  const prev = DECK_PAGES[(slide - 2 + TOTAL) % TOTAL];
  const next = DECK_PAGES[slide % TOTAL];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<ThemePreference>("dark");

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

  const themeOption = THEME_OPTIONS.find((option) => option.value === theme) ?? THEME_OPTIONS[0];
  const ThemeIcon = themeOption.icon;
  const cycleTheme = () => {
    const currentIndex = THEME_OPTIONS.findIndex((option) => option.value === theme);
    setTheme(THEME_OPTIONS[(currentIndex + 1) % THEME_OPTIONS.length].value);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-surface text-on-surface">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/60 bg-surface/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-2 px-3 sm:h-20 sm:px-gutter-xl">
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-gutter-md" aria-label="ASHKNAZ AI LABS home">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container text-sm font-bold text-primary shadow-[0_0_24px_-4px_rgba(0,242,170,0.25)] sm:h-10 sm:w-10">
              AS
            </span>
            <span className="min-w-0">
              <span className="block truncate font-headline-sm text-sm font-bold text-on-surface sm:text-headline-sm">
                ASHKNAZ AI LABS
              </span>
              <span className="hidden truncate font-label-badge text-label-badge uppercase text-primary-fixed-dim sm:block">
                Ashknaz Serwer | Digital Engineering
              </span>
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={cycleTheme}
              aria-label={`Theme: ${themeOption.label}. Change theme`}
              title={`Theme: ${themeOption.label}`}
              className="h-10 rounded-full border border-outline-variant bg-surface-container-low px-3 text-on-surface hover:bg-surface-container-high hover:text-primary sm:px-4"
            >
              <ThemeIcon className="theme-control-icon" aria-hidden="true" />
              <span className="hidden md:inline">{themeOption.label}</span>
            </Button>
            <Button asChild className="h-10 rounded-full bg-primary-container px-3 font-bold text-on-primary-container shadow-[0_0_24px_-6px_rgba(0,242,170,0.5)] hover:opacity-90 sm:px-5">
              <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="Schedule a strategy call on WhatsApp">
                <PhoneCall aria-hidden="true" />
                <span className="hidden lg:inline">Schedule Strategy Call</span>
              </a>
            </Button>

            <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  aria-label="Open executive navigation menu"
                  className="h-10 rounded-full border border-outline-variant bg-surface-container-low px-3 text-on-surface hover:bg-surface-container-high hover:text-primary sm:px-4"
                >
                  <Menu aria-hidden="true" />
                  <span className="hidden md:inline">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="flex w-[min(92vw,25rem)] flex-col overflow-hidden border-outline-variant bg-surface-container-lowest p-0 text-on-surface">
                <SheetHeader className="shrink-0 border-b border-outline-variant px-6 pb-5 pt-7 text-left">
                  <div className="flex items-center gap-3 pr-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container-high font-bold text-primary">AS</div>
                    <div className="min-w-0">
                      <SheetTitle className="truncate font-headline-sm text-headline-sm text-on-surface">Ashknaz Serwer</SheetTitle>
                      <SheetDescription className="truncate font-label-badge text-label-badge uppercase text-primary-fixed-dim">Founder • ASHKNAZ AI LABS</SheetDescription>
                    </div>
                  </div>
                </SheetHeader>

                <nav aria-label="Portfolio sections" className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
                  {DECK_PAGES.map((page, index) => {
                    const active = index === slide - 1;
                    return (
                      <SheetClose asChild key={page.to}>
                        <Link
                          to={page.to}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setDrawerOpen(false)}
                          className={cn(
                            "flex min-h-11 items-center gap-3 rounded-lg px-3 font-label-lg text-label-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                            active ? "bg-surface-container-high font-bold text-primary" : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
                          )}
                        >
                          <span className="w-7 shrink-0 font-label-badge text-label-badge text-outline" aria-hidden="true">{pad(index + 1)}</span>
                          <span className="min-w-0">{page.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                <div className="shrink-0 border-t border-outline-variant bg-surface-container-low px-5 py-4">
                  <p className="mb-2 font-label-badge text-label-badge uppercase text-on-surface-variant">Theme Settings</p>
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
                          className={cn("h-11 rounded-md px-2 text-xs", selected ? "bg-surface-container-high text-primary" : "text-on-surface-variant hover:text-on-surface")}
                        >
                          <Icon aria-hidden="true" />
                          <span>{option.label}</span>
                        </Button>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-1" aria-label="Social links">
                    {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                      <Button key={label} asChild variant="ghost" size="icon" className="rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-primary">
                        <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon aria-hidden="true" /></a>
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="min-w-0 w-full max-w-full overflow-x-hidden bg-surface pb-28 pt-16 sm:pt-20">{children}</main>

      <AiAssistant />

      <aside className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 sm:bottom-6 sm:px-gutter-md" aria-label="Portfolio slide controls">
        <div className="pointer-events-auto flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border border-outline-variant/60 bg-surface-container-low/95 px-3 py-2.5 shadow-lg backdrop-blur-xl sm:gap-gutter-md sm:px-gutter-lg sm:py-3">
          <div className="flex shrink-0 items-center gap-gutter-sm">
            <span className="h-2 w-2 rounded-full bg-primary-container shadow-[0_0_12px_rgba(0,242,170,0.8)]" />
            <span className="hidden font-label-badge text-label-badge uppercase text-on-surface-variant md:inline">ASHKNAZ AI LABS</span>
          </div>
          <div className="mx-auto flex max-w-xs flex-1 items-center gap-2 sm:gap-gutter-md">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
              <div className="h-full rounded-full bg-primary-container transition-[width]" style={{ width: `${(slide / TOTAL) * 100}%` }} />
            </div>
            <span className="shrink-0 font-label-md text-label-md font-semibold text-primary">{pad(slide)} / {pad(TOTAL)}</span>
          </div>
          <div className="flex shrink-0 items-center gap-gutter-xs">
            <Link to={prev.to} aria-label="Previous slide" className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </Link>
            <Link to={next.to} aria-label="Next slide" className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </Link>
          </div>
        </div>
      </aside>

      <footer className="w-full max-w-full overflow-hidden bg-surface-container-lowest py-12 pb-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-gutter-md text-center md:flex-row md:px-gutter-xl md:text-left">
          <div className="flex flex-col gap-1">
            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">ASHKNAZ AI LABS</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Founded by Ashknaz Serwer • AI, Digital Engineering &amp; Creative Design.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <Button key={label} asChild variant="ghost" size="icon" className="rounded-full text-on-surface-variant hover:text-primary">
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon aria-hidden="true" /></a>
              </Button>
            ))}
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">© 2026 ASHKNAZ AI LABS</span>
        </div>
      </footer>
    </div>
  );
}