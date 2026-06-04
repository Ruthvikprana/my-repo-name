import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";

type Msg = { role: "user" | "assistant"; content: string };
type Lead = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  timeline?: string;
  budget?: string;
  summary?: string;
};

const LEAD_RE = /\[\[LEAD_READY\]\](\{[\s\S]*?\})/;

function parseLead(text: string): { clean: string; lead: Lead | null } {
  const m = text.match(LEAD_RE);
  if (!m) return { clean: text, lead: null };
  try {
    const lead = JSON.parse(m[1]) as Lead;
    const clean = text.replace(LEAD_RE, "").trim();
    return { clean, lead };
  } catch {
    return { clean: text, lead: null };
  }
}

const INTRO: Msg = {
  role: "assistant",
  content:
    "Hi — I'm Ruthvik's AI concierge. Tell me what you're building or where AI could give you an edge, and I'll line things up for him.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INTRO]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [lead, setLead] = useState<Lead | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  async function send() {
    const text = input.trim();
    if (!text || sending) return;
    if (text.length > 1000) {
      toast.error("Message too long (max 1000 chars).");
      return;
    }
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setSending(true);
    try {
      const res = await fetch("/api/public/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");

      const { clean, lead: parsedLead } = parseLead(data.content || "");
      setMessages((m) => [...m, { role: "assistant", content: clean || "…" }]);
      if (parsedLead) {
        setLead(parsedLead);
        trackEvent("chat_lead_qualified", {
          name: parsedLead.name,
          projectType: parsedLead.projectType,
          budget: parsedLead.budget,
          timeline: parsedLead.timeline,
        });
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      toast.error(msg);
      setMessages((m) => [...m, { role: "assistant", content: "Sorry — I hit a snag. Try again?" }]);
    } finally {
      setSending(false);
    }
  }

  function handOff() {
    if (!lead) return;
    trackEvent("chat_send_to_ruthvik_clicked", {
      name: lead.name,
      projectType: lead.projectType,
    });
    // Emit prefill event for the contact form
    window.dispatchEvent(new CustomEvent("ruthvik:prefill-contact", { detail: lead }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    toast.success("Brief sent to the contact form — review and hit send.");
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => {
          const willOpen = !open;
          setOpen(willOpen);
          if (willOpen) trackEvent("chat_widget_opened");
        }}
        aria-label="Open AI assistant"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent-gradient shadow-glow-strong hover:scale-110 transition-transform"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <Bot className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="absolute inset-0 rounded-full bg-accent/40 blur-xl -z-10 animate-pulse-glow" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[78vh] flex flex-col glass-strong rounded-3xl shadow-float overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-4 border-b border-border/60 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient shadow-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-semibold text-sm">Ruthvik · AI Concierge</div>
                <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Online · qualifies in &lt;2 min
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollerRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-white/70 border border-border/60 text-foreground rounded-bl-md"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none prose-p:my-1 prose-p:leading-relaxed">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <span className="whitespace-pre-wrap">{m.content}</span>
                    )}
                  </div>
                </div>
              ))}
              {sending && (
                <div className="flex justify-start">
                  <div className="bg-white/70 border border-border/60 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {lead && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl p-4 bg-accent-gradient text-white shadow-glow"
                >
                  <div className="text-xs uppercase tracking-[0.18em] opacity-80">Brief captured</div>
                  <div className="font-display font-semibold mt-1 text-sm">
                    {lead.name} · {lead.projectType || "AI project"}
                  </div>
                  {lead.summary && <p className="text-xs mt-1 opacity-90">{lead.summary}</p>}
                  <button
                    onClick={handOff}
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary px-4 py-2.5 text-sm font-semibold hover:scale-[1.01] transition-transform"
                  >
                    Send to Ruthvik
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="p-3 border-t border-border/60 flex items-end gap-2 bg-white/40"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                rows={1}
                maxLength={1000}
                placeholder="Tell me about your project…"
                className="flex-1 resize-none rounded-xl bg-white/80 border border-border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent max-h-32"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                className="h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow-strong transition-all"
                aria-label="Send"
              >
                {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
