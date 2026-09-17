import { Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import robotAvatar from "@/assets/ashknaz-cyber-robot.png";
import { Button } from "@/components/ui/button";
import {
  answerQuestion,
  SUGGESTION_CHIPS,
  WELCOME_MESSAGE,
  type AssistantAction,
} from "@/lib/assistant-knowledge";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
  actions?: AssistantAction[];
};

let counter = 0;
const nextId = () => `m${++counter}`;

function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
            chunk.startsWith("**") && chunk.endsWith("**") ? (
              <strong key={i} className="font-bold text-on-surface">
                {chunk.slice(2, -2)}
              </strong>
            ) : (
              <span key={i}>{chunk}</span>
            ),
          )}
        </span>
      ))}
    </>
  );
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: nextId(), role: "assistant", text: WELCOME_MESSAGE },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    const reply = answerQuestion(trimmed);
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: "user", text: trimmed },
      { id: nextId(), role: "assistant", text: reply.text, ...(reply.actions ? { actions: reply.actions } : {}) },
    ]);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="fixed bottom-24 right-3 z-[60] flex flex-col items-end gap-1 sm:bottom-28 sm:right-6">
        {!open && (
          <span className="rounded-full border border-outline-variant bg-surface-container-lowest/95 px-2.5 py-1 font-label-badge text-[10px] font-bold text-primary shadow-lg backdrop-blur-xl">
            AI Copilot Online
          </span>
        )}
        <div className="relative">
          <span className="ai-robot-ring pointer-events-none absolute inset-0 rounded-full border-2 border-primary" />
          <Button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close AI assistant" : "Open Ashknaz AI Assistant"}
            className="ai-robot-float relative h-16 w-16 overflow-hidden rounded-full border border-primary/70 bg-surface-container-lowest p-0 text-on-surface shadow-[0_0_30px_-4px_rgba(0,242,170,0.7)] hover:opacity-95 sm:h-20 sm:w-20"
          >
            <img src={robotAvatar} alt="Ashknaz AI cyber robot" width={1024} height={1024} className="h-full w-full object-contain" />
            {open && <span className="absolute inset-0 flex items-center justify-center bg-surface-container-lowest/75"><X aria-hidden="true" /></span>}
          </Button>
          <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-surface-container-lowest bg-primary-container shadow-[0_0_10px_rgba(0,242,170,0.9)]" aria-hidden="true" />
        </div>
      </div>

      {open && (
        <section
          aria-label="Ashknaz AI Assistant"
          className="fixed bottom-44 right-2 z-[60] flex max-h-[min(36rem,calc(100dvh-12rem))] w-[min(calc(100vw-1rem),24rem)] flex-col overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest text-on-surface shadow-[0_18px_60px_-12px_rgba(0,0,0,0.55)] sm:bottom-52 sm:right-6"
        >
          <header className="border-b border-outline-variant px-5 py-4">
            <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Ashknaz AI Assistant</h2>
            <p className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-primary-fixed-dim">
              🟢 Online | Senior AI &amp; Design Copilot
            </p>
          </header>

          <div className="flex flex-wrap gap-1.5 border-b border-outline-variant px-4 py-3">
            {SUGGESTION_CHIPS.map((chip) => (
              <Button
                key={chip.label}
                type="button"
                variant="ghost"
                onClick={() => ask(chip.query)}
                className="h-auto whitespace-normal rounded-full bg-surface-container px-3 py-1.5 text-left font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary"
              >
                {chip.label}
              </Button>
            ))}
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[88%] font-body-sm text-body-sm leading-relaxed",
                    message.role === "user"
                      ? "rounded-2xl rounded-br-sm bg-primary-container px-4 py-2.5 font-semibold text-on-primary-container"
                      : "text-on-surface-variant",
                  )}
                >
                  <RichText text={message.text} />
                  {message.actions && message.actions.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.actions.map((action) => (
                        <a
                          key={action.href + action.label}
                          href={action.href}
                          target={action.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noreferrer"
                          className="inline-flex min-h-9 items-center rounded-full border border-outline-variant bg-surface-container px-3 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              ask(input);
            }}
            className="flex items-center gap-2 border-t border-outline-variant px-3 py-3"
          >
            <label className="sr-only" htmlFor="assistant-input">
              Ask about Ashknaz Serwer
            </label>
            <input
              id="assistant-input"
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about stack, design, or hiring…"
              className="min-h-10 flex-1 rounded-full bg-surface-container px-4 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
            <Button
              type="submit"
              size="icon"
              aria-label="Send question"
              className="h-10 w-10 shrink-0 rounded-full bg-primary-container text-on-primary-container hover:opacity-90"
            >
              <Send aria-hidden="true" />
            </Button>
          </form>
        </section>
      )}
    </>
  );
}
