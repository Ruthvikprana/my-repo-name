import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Ruthvik rewired our operations with an AI stack we didn't know was possible. Game-changing.",
    name: "Aarav Mehta",
    role: "Founder, NovaStack",
  },
  {
    quote: "From strategy to agents in production in 6 weeks. The most senior AI mind I've worked with.",
    name: "Priya Singh",
    role: "Head of Growth, Lumen",
  },
  {
    quote: "Every workflow he touched became 3× faster and 10× smarter. A true systems architect.",
    name: "Daniel Cho",
    role: "COO, Hexalabs",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Testimonials</div>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient">
            What partners say.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass-strong rounded-3xl p-8 shadow-card hover:shadow-glow transition-all"
            >
              <Quote className="h-6 w-6 text-accent mb-4" />
              <blockquote className="font-display text-lg leading-snug tracking-tight">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
