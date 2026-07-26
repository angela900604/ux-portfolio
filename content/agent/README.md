# Ask Angela — knowledge sources

The homepage agent does **not** use a database. Knowledge comes from:

1. **Resume PDFs** in `source-resumes/` (rebuilt each deploy)
   - `ux-design-resume.pdf` — product/UX resume
   - `marketing-design-cv.pdf` — marketing & design CV

2. **Structured metadata** — `lib/case-study-aside-meta.ts`, `lib/about-experience.ts`, `lib/marketing-work.ts`

3. **Live rendered site** — case studies, research pages, and `/about` are crawled from the deployed HTML (not TSX source). Routes are listed in `crawl-routes.json`.
   - **At request time** (`/api/ask`): fetches all routes from the current deployment (or `SITE_CRAWL_URL`), cached for 1 hour.
   - **At build time** (`prebuild`): saves an HTML snapshot as fallback if runtime crawl fails.

## Environment

| Variable | Purpose |
|----------|---------|
| `ANTHROPIC_API_KEY` | Required on Vercel for the agent to answer |
| `SITE_CRAWL_URL` | Optional override for crawl base URL (default: production site, or `VERCEL_URL` on deploy) |

## Updating resumes

Replace the PDF(s) in `source-resumes/`, then run:

```bash
npm run build:agent-knowledge
```

Or deploy — `prebuild` runs this automatically.

## Adding a new case study route

Add the path to `content/agent/crawl-routes.json`, then rebuild/deploy.
