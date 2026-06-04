import { motion } from "framer-motion";
import {
  Bot, Workflow, Brain, Cog, BarChart3, Globe, GraduationCap,
  MessageSquareCode, Layers, Wand2, Boxes, LineChart, Cpu,
} from "lucide-react";

const services = [
  { icon: Workflow, title: "AI Automation Systems", desc: "End-to-end automation pipelines that replace repetitive ops." },
  { icon: Brain, title: "AI Consulting", desc: "Strategy sessions to identify high-leverage AI opportunities." },
  { icon: Wand2, title: "GenAI Workflows", desc: "Custom generative pipelines for content, research, and ops." },
  { icon: Bot, title: "AI Agents", desc: "Autonomous agents that act, decide, and complete tasks." },
  { icon: Cog, title: "Business Process Automation", desc: "Re-engineer workflows with intelligent orchestration." },
  { icon: Layers, title: "AI Strategy", desc: "Roadmaps that align AI with business outcomes." },
  { icon: MessageSquareCode, title: "AI Content Systems", desc: "Scale brand storytelling with intelligent content engines." },
  { icon: Boxes, title: "AI Tool Integration", desc: "Connect your stack with LLMs, vector DBs, and APIs." },
  { icon: Cpu, title: "Prompt Engineering", desc: "Production-grade prompts and evaluation systems." },
  { icon: GraduationCap, title: "Training & Workshops", desc: "Upskill your team on the modern AI stack." },
  { icon: BarChart3, title: "AI Dashboards", desc: "Real-time intelligence panels for decision making." },
  { icon: Globe, title: "AI-Powered Websites", desc: "Conversion-focused sites with embedded intelligence." },
  { icon: LineChart, title: "Operations Optimization", desc: "Continuous improvement through AI observability." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Services</div>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient">
            A full-stack AI partner.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From discovery to deployment, I architect, build, and scale intelligent systems
            that compound value over time.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-7 overflow-hidden hover:shadow-glow transition-all"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 glow-orb opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-gradient shadow-glow mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="relative font-display font-semibold text-lg">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="relative mt-5 inline-flex items-center text-xs font-medium text-accent opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
                Explore →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
