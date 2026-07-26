"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  PORTFOLIO_AGENT_STARTER_PROMPTS,
  parseAgentResponse,
} from "@/lib/portfolio-agent-knowledge";

type AgentMessage = {
  role: "user" | "assistant";
  content: string;
};

function SendArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M4 9h9M9.5 5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 3l10 10M13 3L3 13"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
      />
    </svg>
  );
}

const AGENT_LINK_CLASS =
  "text-zinc-400 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition hover:text-zinc-200 hover:decoration-zinc-400";

function renderAgentLink(label: string, href: string, key: number) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        key={key}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={AGENT_LINK_CLASS}
      >
        {label}
      </a>
    );
  }
  return (
    <Link key={key} href={href} className={AGENT_LINK_CLASS}>
      {label}
    </Link>
  );
}

function renderInlineMarkdown(text: string, keyPrefix = "inline"): ReactNode {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let partIndex = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <span key={`${keyPrefix}-t-${partIndex++}`}>
          {text.slice(lastIndex, match.index)}
        </span>,
      );
    }

    if (match[2]) {
      nodes.push(
        <strong
          key={`${keyPrefix}-b-${partIndex++}`}
          className="font-medium text-zinc-100"
        >
          {match[2]}
        </strong>,
      );
    } else if (match[3] && match[4]) {
      nodes.push(renderAgentLink(match[3], match[4], partIndex++));
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(
      <span key={`${keyPrefix}-t-${partIndex++}`}>{text.slice(lastIndex)}</span>,
    );
  }

  return nodes.length > 0 ? nodes : text;
}

function stripMarkdownHeading(line: string): string {
  return line
    .replace(/^#{1,3}\s+/, "")
    .replace(/^\*\*(.+)\*\*$/, "$1")
    .trim();
}

function isSectionHeadingLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed || /^[-*•]\s+/.test(trimmed)) return false;
  if (/^#{1,3}\s+/.test(trimmed)) return true;
  if (/^\*\*[^*]+\*\*$/.test(trimmed)) return true;
  if (
    /^[\p{Extended_Pictographic}\u2600-\u27BF]/u.test(trimmed) &&
    trimmed.length < 72 &&
    !trimmed.includes(". ")
  ) {
    return true;
  }
  return false;
}

function parseBlock(block: string) {
  const lines = block.split("\n").filter((line) => line.trim() !== "");
  if (lines.length === 0) return { heading: null as string | null, bodyLines: [] as string[] };

  if (isSectionHeadingLine(lines[0])) {
    return {
      heading: stripMarkdownHeading(lines[0]),
      bodyLines: lines.slice(1),
    };
  }

  return { heading: null, bodyLines: lines };
}

function renderBodyLines(lines: string[], keyPrefix: string) {
  const isList = lines.every((line) => /^[-*•]\s+/.test(line.trim()));

  if (isList) {
    return (
      <ul className="space-y-1.5">
        {lines.map((line, itemIndex) => {
          const item = line.replace(/^[-*•]\s+/, "").trim();
          return (
            <li
              key={`${keyPrefix}-li-${itemIndex}`}
              className="flex gap-2 text-sm leading-snug text-zinc-300 sm:text-[15px] sm:leading-snug"
            >
              <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-zinc-600" aria-hidden />
              <span>{renderInlineMarkdown(item, `${keyPrefix}-li-${itemIndex}`)}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="space-y-2">
      {lines.map((line, lineIndex) => (
        <p
          key={`${keyPrefix}-p-${lineIndex}`}
          className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]"
        >
          {renderInlineMarkdown(line, `${keyPrefix}-p-${lineIndex}`)}
        </p>
      ))}
    </div>
  );
}

function AgentMessageBody({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/).filter((block) => block.trim());

  return (
    <div className="space-y-0">
      {blocks.map((block, blockIndex) => {
        const { heading, bodyLines } = parseBlock(block.trim());
        const hasSectionDivider = blockIndex > 0;

        return (
          <section
            key={blockIndex}
            className={
              hasSectionDivider
                ? "mt-4 border-t border-zinc-800/90 pt-4"
                : undefined
            }
          >
            {heading ? (
              <h3 className="mb-2.5 text-[13px] font-medium leading-snug tracking-tight text-zinc-100 sm:text-sm">
                {renderInlineMarkdown(heading, `h-${blockIndex}`)}
              </h3>
            ) : null}
            {bodyLines.length > 0
              ? renderBodyLines(bodyLines, `b-${blockIndex}`)
              : null}
          </section>
        );
      })}
    </div>
  );
}

function AskInputForm({
  value,
  onChange,
  onSubmit,
  disabled,
  placeholder,
  ariaLabel,
  showPrompts = false,
  prompts = [],
  onPromptClick,
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  placeholder?: string;
  ariaLabel: string;
  showPrompts?: boolean;
  prompts?: readonly string[];
  onPromptClick?: (prompt: string) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const node = textareaRef.current;
    if (!node) return;
    node.style.height = "auto";
    node.style.height = `${node.scrollHeight}px`;
  }, [value]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!value.trim() || disabled) return;
    onSubmit();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2.5 rounded-3xl border border-zinc-700/80 bg-zinc-900/50 px-4 pb-3 pt-3.5 transition-colors focus-within:border-zinc-500"
    >
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              handleSubmit(event);
            }
          }}
          placeholder={placeholder}
          aria-label={ariaLabel}
          className="min-w-0 flex-1 resize-none overflow-hidden bg-transparent px-1 py-1 text-base leading-normal text-zinc-100 outline-none placeholder:text-zinc-500"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          aria-label="Send question"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-zinc-200 transition-colors hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <SendArrowIcon />
        </button>
      </div>

      {showPrompts && prompts.length > 0 ? (
        <ul className="-mb-0.5 flex items-center gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {prompts.map((prompt) => (
            <li key={prompt} className="shrink-0">
              <button
                type="button"
                onClick={() => onPromptClick?.(prompt)}
                className="whitespace-nowrap rounded-full border border-zinc-700 px-3.5 py-1.5 text-[13px] text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
              >
                {prompt}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </form>
  );
}

export function HomePortfolioAgent() {
  const panelTitleId = useId();
  const [mounted, setMounted] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [panelDraft, setPanelDraft] = useState("");
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [followups, setFollowups] = useState<string[]>([
    ...PORTFOLIO_AGENT_STARTER_PROMPTS,
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (panelOpen) scrollToBottom();
  }, [messages, loading, panelOpen, scrollToBottom]);

  useEffect(() => {
    if (!panelOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setPanelOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [panelOpen]);

  useEffect(() => {
    document.body.style.overflow = panelOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [panelOpen]);

  const askQuestion = useCallback(
    async (question: string) => {
      const trimmed = question.trim();
      if (!trimmed || loading) return;

      setPanelOpen(true);
      setError(null);
      setLoading(true);
      setDraft("");
      setPanelDraft("");

      const nextMessages: AgentMessage[] = [
        ...messages,
        { role: "user", content: trimmed },
      ];
      setMessages(nextMessages);

      try {
        const response = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: trimmed,
            history: messages,
          }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = (await response.json()) as {
          answer?: string;
          followups?: string[];
        };

        const parsed =
          data.answer !== undefined
            ? { answer: data.answer, followups: data.followups ?? [] }
            : parseAgentResponse(JSON.stringify(data));

        setMessages([
          ...nextMessages,
          { role: "assistant", content: parsed.answer },
        ]);
        setFollowups(
          parsed.followups.length > 0
            ? parsed.followups
            : [...PORTFOLIO_AGENT_STARTER_PROMPTS],
        );
      } catch {
        setError("Something went wrong. Try again in a moment.");
        setMessages(nextMessages);
      } finally {
        setLoading(false);
      }
    },
    [loading, messages],
  );

  return (
    <>
      <section aria-label="Ask Angela" className="mb-8 sm:mb-10">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
          Ask Angela
        </p>
        <AskInputForm
          value={draft}
          onChange={setDraft}
          onSubmit={() => askQuestion(draft)}
          disabled={loading}
          placeholder="Ask anything about Angela's work…"
          ariaLabel="Ask Angela"
          showPrompts
          prompts={PORTFOLIO_AGENT_STARTER_PROMPTS}
          onPromptClick={askQuestion}
        />
      </section>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {panelOpen ? (
                <>
                  <motion.button
                    key="agent-backdrop"
                    type="button"
                    aria-label="Close chat panel"
                    className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-[1px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setPanelOpen(false)}
                  />

                  <motion.aside
                    key="agent-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={panelTitleId}
                    className="fixed inset-y-0 left-0 z-[90] flex w-full max-w-md flex-col border-r border-zinc-800 bg-zinc-950 shadow-2xl sm:max-w-lg"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", stiffness: 380, damping: 36 }}
                  >
              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3.5 sm:px-6">
                <span
                  id={panelTitleId}
                  className="font-sans text-lg font-medium tracking-tight text-zinc-100"
                >
                  Ask Angela
                </span>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setPanelOpen(false)}
                  className="grid h-8 w-8 place-items-center text-zinc-500 transition-colors hover:text-zinc-200"
                >
                  <CloseIcon />
                </button>
              </div>

              <div
                ref={scrollRef}
                className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6"
              >
                {messages.length === 0 && !loading ? (
                  <p className="text-sm leading-relaxed text-zinc-500">
                    Explore Angela&apos;s work, process, and experience through
                    her case studies and background.
                  </p>
                ) : null}

                <div className="space-y-6">
                  {messages.map((message, index) => (
                    <div key={`${message.role}-${index}`}>
                      {message.role === "user" ? (
                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
                          <p className="text-sm font-medium leading-relaxed text-zinc-100 sm:text-[15px]">
                            {message.content}
                          </p>
                        </div>
                      ) : (
                        <AgentMessageBody content={message.content} />
                      )}
                    </div>
                  ))}

                  {loading ? (
                    <p className="text-sm text-zinc-500" aria-live="polite">
                      Thinking…
                    </p>
                  ) : null}

                  {error ? (
                    <p className="text-sm text-red-400" role="alert">
                      {error}
                    </p>
                  ) : null}
                </div>

                {!loading && followups.length > 0 ? (
                  <div className="mt-8 border-t border-zinc-800 pt-5">
                    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                      Ask a follow-up…
                    </p>
                    <ul className="flex flex-col gap-2">
                      {followups.map((prompt) => (
                        <li key={prompt}>
                          <button
                            type="button"
                            onClick={() => askQuestion(prompt)}
                            className="w-full rounded-full border border-zinc-700 px-3.5 py-2 text-left text-[13px] text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
                          >
                            {prompt}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="border-t border-zinc-800 px-5 py-4 sm:px-6">
                <AskInputForm
                  value={panelDraft}
                  onChange={setPanelDraft}
                  onSubmit={() => askQuestion(panelDraft)}
                  disabled={loading}
                  placeholder="Ask anything about Angela's work…"
                  ariaLabel="Ask Angela follow-up"
                />
              </div>
                  </motion.aside>
                </>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}
