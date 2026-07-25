# Ask Angela — knowledge sources

The homepage agent does **not** use a database. On each `npm run build`, `scripts/build-agent-knowledge.mjs` rebuilds `lib/generated/agent-knowledge.ts` from:

1. **Resume PDFs** in `source-resumes/`
   - `ux-design-resume.pdf` — product/UX resume
   - `marketing-design-cv.pdf` — marketing & design CV

2. **Site copy** — text extracted from case study, research, and about TSX files

3. **Structured metadata** — `lib/case-study-aside-meta.ts`, `lib/about-experience.ts`, `lib/marketing-work.ts`

## Updating resumes

Replace the PDF(s) in `source-resumes/`, then run:

```bash
npm run build:agent-knowledge
```

Or deploy — `prebuild` runs this automatically.
