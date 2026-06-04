import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground p-12 md:p-20 shadow-float"
        >
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/40 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[oklch(0.5_0.25_270/0.4)] blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Let's build</div>
            <h2 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95]">
              Ready to build your <span className="text-glow">AI future?</span>
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl">
              Tell me about your business. I'll show you the AI systems that will reshape it
              over the next 12 months.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-glow-strong hover:scale-[1.02] transition-all"
              >
                Build Your AI System
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium hover:bg-white/10 transition-all"
              >
                See past work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
