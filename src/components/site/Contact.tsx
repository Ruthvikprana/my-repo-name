import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Linkedin, Twitter, Calendar, Send, Bot } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Tell me a bit more").max(1000),
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    function onPrefill(e: Event) {
      const lead = (e as CustomEvent).detail as {
        name?: string; email?: string; company?: string;
        projectType?: string; timeline?: string; budget?: string; summary?: string;
      };
      const parts = [
        lead.summary,
        lead.projectType && `Project: ${lead.projectType}`,
        lead.company && `Company: ${lead.company}`,
        lead.timeline && `Timeline: ${lead.timeline}`,
        lead.budget && `Budget: ${lead.budget}`,
      ].filter(Boolean);
      setForm({
        name: lead.name || "",
        email: lead.email || "",
        message: parts.join("\n"),
      });
    }
    window.addEventListener("ruthvik:prefill-contact", onPrefill);
    return () => window.removeEventListener("ruthvik:prefill-contact", onPrefill);
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    trackEvent("contact_form_submitted", {
      name: form.name,
      email: form.email,
    });
    toast.success("Message received. I'll reply within 24h.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Contact</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient">
              Let's design your AI system.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Drop a message or book a strategy call — replies within one business day.
            </p>

            <div className="mt-10 space-y-3">
              {[
                { icon: Mail, label: "n.ruthvik@outlook.com", href: "mailto:n.ruthvik@outlook.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ruthvik-n-03251466/" },
                { icon: Twitter, label: "@ruthvik", href: "#" },
                { icon: Calendar, label: "Book on Calendly", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-4 glass rounded-2xl p-4 hover:shadow-glow transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient">
                    <c.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">{c.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 glass-strong rounded-2xl p-5 flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient shrink-0">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm">AI Assistant online</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Ask anything about my services, process, or stack. I'll route it to me.
                </p>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 shadow-float space-y-4"
          >
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="mt-2 w-full rounded-xl bg-white/60 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="mt-2 w-full rounded-xl bg-white/60 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Project</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="mt-2 w-full rounded-xl bg-white/60 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="What are you building?"
              />
            </div>
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all"
            >
              Send message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
