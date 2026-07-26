import { AGENT_CRAWL_ROUTES } from "@/lib/agent-crawl-routes";

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const MAX_CHARS_PER_ROUTE = 14_000;
const FETCH_TIMEOUT_MS = 12_000;

type CrawlCache = {
  content: string;
  fetchedAt: number;
};

declare global {
  // eslint-disable-next-line no-var
  var __agentLiveCrawlCache: CrawlCache | undefined;
}

/** Base URL for crawling — current deployment on Vercel, or production default. */
export function getAgentCrawlBaseUrl(): string {
  const explicit = process.env.SITE_CRAWL_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const publicSite = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (publicSite) return publicSite.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "https://www.ycnangelayang.com";
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

/** Strip HTML to readable prose — prefers `<main>`, drops chrome. */
export function htmlToAgentText(html: string): string {
  let chunk = html;
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch?.[1]) chunk = mainMatch[1];

  chunk = chunk
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");

  return decodeHtmlEntities(chunk).trim();
}

async function fetchRouteText(
  baseUrl: string,
  route: string,
): Promise<{ route: string; text: string } | null> {
  const url = `${baseUrl}${route}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "text/html",
        "User-Agent": "AngelaPortfolioAgent/1.0 (internal knowledge crawl)",
      },
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      console.warn(`Agent crawl failed (${response.status}): ${url}`);
      return null;
    }

    const html = await response.text();
    let text = htmlToAgentText(html);
    if (text.length > MAX_CHARS_PER_ROUTE) {
      text = `${text.slice(0, MAX_CHARS_PER_ROUTE)}\n[…truncated]`;
    }

    return { route, text };
  } catch (error) {
    console.warn(`Agent crawl error for ${url}:`, error);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/** Crawl all portfolio routes and return merged markdown-ish sections. */
export async function crawlLiveSiteKnowledge(baseUrl?: string): Promise<string> {
  const base = baseUrl ?? getAgentCrawlBaseUrl();
  const results = await Promise.all(
    AGENT_CRAWL_ROUTES.map((route) => fetchRouteText(base, route)),
  );

  const sections = results
    .filter((entry): entry is { route: string; text: string } =>
      Boolean(entry?.text?.trim()),
    )
    .map(
      ({ route, text }) =>
        `### Live page: ${route}\n\nURL: ${base}${route}\n\n${text}`,
    );

  if (sections.length === 0) {
    return "";
  }

  return [
    `## Live rendered site (${base})`,
    `Crawled ${sections.length} routes at ${new Date().toISOString()}`,
    "",
    sections.join("\n\n---\n\n"),
  ].join("\n");
}

/** Cached live crawl for /api/ask — refreshes hourly. */
export async function getCachedLiveSiteKnowledge(): Promise<string> {
  const now = Date.now();
  const cached = globalThis.__agentLiveCrawlCache;
  if (cached && now - cached.fetchedAt < CACHE_TTL_MS) {
    return cached.content;
  }

  const content = await crawlLiveSiteKnowledge();
  if (content) {
    globalThis.__agentLiveCrawlCache = { content, fetchedAt: now };
  }
  return content;
}
