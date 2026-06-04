import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { z } from "zod";
const appCss = "/assets/styles-oRZ45nT9.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ruthvik" },
      { name: "description", content: "AI Frontier Forge builds futuristic, high-converting personal brand websites for AI experts." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Ruthvik" },
      { property: "og:description", content: "AI Frontier Forge builds futuristic, high-converting personal brand websites for AI experts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Ruthvik" },
      { name: "twitter:description", content: "AI Frontier Forge builds futuristic, high-converting personal brand websites for AI experts." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc1b6314-0f89-49da-8880-1b8902fc9dc8/id-preview-8e991f48--3957ea65-adfa-4b5e-9bd9-409328306026.lovable.app-1780166781886.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc1b6314-0f89-49da-8880-1b8902fc9dc8/id-preview-8e991f48--3957ea65-adfa-4b5e-9bd9-409328306026.lovable.app-1780166781886.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter = () => import("./index-CY14WnEc.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Ruthvik — AI Generalist, GenAI Strategist & Automation Architect"
    }, {
      name: "description",
      content: "Ruthvik builds intelligent AI systems, autonomous agents, and GenAI ecosystems for startups, enterprises, and creators. Build your AI future."
    }, {
      property: "og:title",
      content: "Ruthvik — Building the Future with AI Systems"
    }, {
      property: "og:description",
      content: "AI Generalist · GenAI Strategist · Automation Architect. Build your AI system."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const MessageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string().min(1).max(4e3)
});
const BodySchema = z.object({
  messages: z.array(MessageSchema).min(1).max(40)
});
const SYSTEM_PROMPT = `You are Ruthvik's AI concierge — a sharp, warm, futuristic assistant on his personal website.

Your job:
1. Greet briefly, ask what the visitor is trying to build or solve with AI.
2. Qualify the lead by gathering, in a natural conversation (never as a form dump):
   - Full name
   - Work email
   - Company / project name (optional but ask once)
   - Project type (e.g. AI agents, automation, dashboards, consulting)
   - Timeline (e.g. ASAP, 1–3 months, exploring)
   - Budget range (optional; ask gently once)
3. Stay concise: max 2 short paragraphs per reply. Ask ONE question at a time.
4. Position Ruthvik as a premium AI Generalist / Automation Architect when relevant.
5. When you have at minimum a name, valid-looking email, and project description, append on a final line, exactly:
   [[LEAD_READY]]{"name":"...","email":"...","company":"...","projectType":"...","timeline":"...","budget":"...","summary":"one-sentence brief"}
   Use empty string for unknown optional fields. Do not output the marker before you actually have name + email + project description.
6. After the marker, add a short closing line like "I'll hand this off to Ruthvik — tap below to confirm and send."

Tone: confident, futuristic, minimal. No emoji. No markdown headings.`;
const Route = createFileRoute("/api/public/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) {
          return Response.json({ error: "LOVABLE_API_KEY not configured" }, { status: 500 });
        }
        let json;
        try {
          json = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }
        const parsed = BodySchema.safeParse(json);
        if (!parsed.success) {
          return Response.json({ error: parsed.error.issues[0].message }, { status: 400 });
        }
        const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...parsed.data.messages
            ],
            temperature: 0.6
          })
        });
        if (res.status === 429) {
          return Response.json({ error: "Too many requests. Try again in a moment." }, { status: 429 });
        }
        if (res.status === 402) {
          return Response.json({ error: "AI credits exhausted. Please contact support." }, { status: 402 });
        }
        if (!res.ok) {
          const text = await res.text();
          return Response.json({ error: `AI gateway error: ${res.status} ${text.slice(0, 200)}` }, { status: 502 });
        }
        const data = await res.json();
        const content = data?.choices?.[0]?.message?.content ?? "";
        return Response.json({ content });
      }
    }
  }
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const ApiPublicChatRoute = Route.update({
  id: "/api/public/chat",
  path: "/api/public/chat",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ApiPublicChatRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
