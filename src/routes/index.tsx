import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Portfolio from "@/components/site/Portfolio";
import Ecosystem from "@/components/site/Ecosystem";
import Testimonials from "@/components/site/Testimonials";
import Team from "@/components/site/Team";
import Insights from "@/components/site/Insights";
import CTASection from "@/components/site/CTASection";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import ScrollProgress from "@/components/site/ScrollProgress";
import ChatWidget from "@/components/site/ChatWidget";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruthvik — AI Generalist, GenAI Strategist & Automation Architect" },
      {
        name: "description",
        content:
          "Ruthvik builds intelligent AI systems, autonomous agents, and GenAI ecosystems for startups, enterprises, and creators. Build your AI future.",
      },
      { property: "og:title", content: "Ruthvik — Building the Future with AI Systems" },
      { property: "og:description", content: "AI Generalist · GenAI Strategist · Automation Architect. Build your AI system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Ecosystem />
      <Team />
      <Testimonials />
      <Insights />
      <CTASection />
      <Contact />
      <Footer />
      <ChatWidget />
      <Toaster position="top-center" />
    </main>
  );
}
