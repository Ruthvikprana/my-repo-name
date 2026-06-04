import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string().min(1).max(4000),
});

const BodySchema = z.object({
  messages: z.array(MessageSchema).min(1).max(40),
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

export const Route = createFileRoute("/api/public/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) {
          return Response.json({ error: "LOVABLE_API_KEY not configured" }, { status: 500 });
        }

        let json: unknown;
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
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...parsed.data.messages,
            ],
            temperature: 0.6,
          }),
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
        const content: string = data?.choices?.[0]?.message?.content ?? "";
        return Response.json({ content });
      },
    },
  },
});
