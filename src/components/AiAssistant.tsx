import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      <Button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close AI assistant" : "Open Ashknaz AI Assistant"}
        className="fixed bottom-24 right-5 z-[60] h-14 w-14 rounded-full bg-primary-container p-0 text-on-primary-container shadow-[0_0_28px_-4px_rgba(0,242,170,0.5)] hover:opacity-90 md:bottom-28 md:right-8"
      >
        {open ? <X aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
      </Button>

      {open && (
        <section
          aria-label="Ashknaz AI Assistant"
          className="fixed bottom-40 right-3 z-[60] flex max-h-[min(78vh,36rem)] w-[min(94vw,24rem)] flex-col overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest text-on-surface shadow-[0_18px_60px_-12px_rgba(0,0,0,0.55)] md:bottom-44 md:right-8"
        >
          <header className="border-b border-outline-variant px-5 py-4">
            <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Ashknaz AI Assistant</h2>
            <p className="font-label-badge text-label-badge uppercase tracking-[0.08em] text-primary-fixed-dim">
              🟢 Online | Senior AI &amp; Design Copilot
            </p>
          </header>

          <div className="flex flex-wrap gap-1.5 border-b border-outline-variant px-4 py-3">
            {SUGGESTION_CHIPS.map((chip) => (
              <button
                key={chip.label}
                type="button"
                onClick={() => ask(chip.query)}
                className="rounded-full bg-surface-container px-3 py-1.5 font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {chip.label}
              </button>
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
