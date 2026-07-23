import {
  buildPortfolioAgentSystemPrompt,
  parseAgentResponse,
} from "@/lib/portfolio-agent-knowledge";

export const runtime = "nodejs";

type HistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

type AskRequestBody = {
  question?: string;
  history?: HistoryMessage[];
};

const ANTHROPIC_MODEL = "claude-sonnet-5";

export async function POST(request: Request) {
  let body: AskRequestBody;
  try {
    body = (await request.json()) as AskRequestBody;
  } catch {
    return new Response("Invalid JSON body.", { status: 400 });
  }

  const question = body.question?.trim();
  if (!question) {
    return new Response("Question is required.", { status: 400 });
  }

  const history = (body.history ?? []).filter(
    (message) =>
      (message.role === "user" || message.role === "assistant") &&
      typeof message.content === "string" &&
      message.content.trim().length > 0,
  );

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    const fallback = parseAgentResponse(
      `I'm not fully connected yet—the site owner needs to add an \`ANTHROPIC_API_KEY\` environment variable. In the meantime, you can browse Angela's [selected work](/case-studies/e-invoice-app) or read her [about page](/about).

###FOLLOWUPS###
- What government-scale work has Angela done?
- Tell me about the MINA AI marketplace project
- What's Angela's design process like?`,
    );
    return Response.json(fallback);
  }

  const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 1200,
      system: buildPortfolioAgentSystemPrompt(),
      messages: [
        ...history.map((message) => ({
          role: message.role,
          content: message.content,
        })),
        { role: "user", content: question },
      ],
    }),
  });

  if (!anthropicResponse.ok) {
    const errorText = await anthropicResponse.text();
    console.error("Anthropic API error:", anthropicResponse.status, errorText);
    return new Response("Unable to generate a response right now.", {
      status: 502,
    });
  }

  const data = (await anthropicResponse.json()) as {
    content?: Array<{ type: string; text?: string }>;
  };

  const text =
    data.content
      ?.filter((block) => block.type === "text" && block.text)
      .map((block) => block.text)
      .join("\n")
      .trim() ?? "";

  return Response.json(parseAgentResponse(text));
}
