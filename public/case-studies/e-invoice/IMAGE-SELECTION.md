# e-Invoice case study — image selection guide

Curated set for **strongest visual impact**, **key decision points**, and **final solution** without overcrowding.

---

## Summary: use these 8 assets

| # | Section | Copy source file as | Caption | Why |
|---|---------|--------------------|--------|-----|
| 1 | Hero | `hero.png` | (no caption; headline does the work) | **mockup on figma** — best first impression, shows final product |
| 2 | Problem | `user-journey-map.png` | "User journey map: pain points and touchpoints that drove the redesign focus." | **user journey map** — clear problem framing, scannable |
| 3 | Process (Research) | `research-elderly.png` | "Research with elderly users (銀髮族) to understand accessibility and trust barriers." | **20250321_1330（銀髮族2位）** — one strong research moment; represents 30+ sessions |
| 4 | Process (Style) | `style-guide.png` | "Visual direction: professional, practical, and trustworthy—aligned with government and citizen expectations." | **Group 14** — single style board; key design decision |
| 5 | Process (Flows) | `page-flow.png` | "Page flow and navigation structure that simplified login and core tasks." | **page flow** — key decision, easy to scan |
| 6 | Solution | `final-1.png` | "Primary login path: clear language and one confident flow." | **Screenshot 11.03.47** (or main login) — in device mockup |
| 7 | Solution | `final-2.png` | "Biometric and alternative login options for returning users." | **Screenshot 11.03.56** (or biometric) — in device mockup |
| 8 | Impact | `task-completion.png` | "Task completion and validation results that informed the 68% → 92% outcome." | **task completion 1** — evidence for impact |

---

## Solution gallery (additional screens)

To avoid a “two phone” Solution layout, this case study uses a larger journey gallery:
one main image + multiple thumbnails.

| Save as | Source (in your assets folder) | Screen intent |
|---------|-----------------------------------|----------------|
| `solution-1.png` | `iPhone_14_Pro-1-bb2e5b87-c1c6-4446-a20f-fd1550243aed.png` | Alternative entry (safe options) |
| `solution-2.png` | `iPhone_14_Pro-4-9aa8352a-4a57-424d-9fa0-c7241c4f1dd4.png` | Scan & start claim |
| `solution-3.png` | `iPhone_14_Pro-8-f8640022-0471-48f7-b807-b44e88469f1b.png` | Invoice ledger (eligibility) |
| `solution-4.png` | `iPhone_14_Pro-5-26710bc7-6c7a-4b71-9683-65c9a8287ab9.png` | Rewards list (next step is obvious) |
| `solution-5.png` | `iPhone_14_Pro-8fbef38c-7cc8-4a15-9e4e-c3ec35a09e79.png` | Waiting/unopened state (confidence preserved) |
| `solution-6.png` | `iPhone_14_Pro-9-19aad630-ffea-40a6-acde-8b7ae0b71a48.png` | Controls & features (user agency) |
| `solution-7.png` | `iPhone_14_Pro-6-bc6dbafb-a24a-408a-915d-a4631b6960d8.png` | Transparency/insights (readable value) |

---

## Per-image notes (section, caption, keep / remove)

### Hero
- **mockup on figma** → **Keep.** Use as `hero.png`. Strongest single visual for “what we built.”

### Problem
- **user journey map** → **Keep.** `user-journey-map.png`. Best single artifact for problem framing.
- **functional map** → **Skip.** Supports process but adds clutter; journey map is enough.
- **Personas (Mei-Ling, David, Sara, user list 1)** → **Skip in layout.** Refer in copy only; one journey map keeps problem section clear.

### Process
- **Group 14 (Professional and Practical)** → **Keep.** `style-guide.png`. One style board is enough.
- **Group 13 (Modern Minimal), Group 11 (Friendly Life)** → **Remove.** One direction (Professional) tells the story and avoids crowding.
- **page flow** → **Keep.** `page-flow.png`. Key flow decision.
- **Research photos (年輕族, 銀髮族, 視障, 聽障, wheelchair, meetings)** → **Keep one.** Use 銀髮族 as `research-elderly.png` to represent diverse research and accessibility.
- **prototype testing (Excel matrix)** → **Replace.** Don’t use raw Excel. Use **task completion 1** in Impact as the validation visual; optionally add a 1–2 sentence summary in copy.

### Solution
- **Screenshot 11.03.47, 11.03.56, 11.04.03** → **Keep 2–3.** Use as `final-1.png`, `final-2.png` (and optional `final-3.png`). Present inside **device mockups** (see below).
- **mockup on figma** → Already used as hero; no need to repeat.

### Impact
- **task completion 1** → **Keep.** `task-completion.png`. Supports 68% → 92% and validation.
- **user feedback 1** → **Skip.** Impact is clearer with one metric visual (task completion).

---

## How to present UI screens (device mockups, background, layout)

1. **Device mockups**  
   - Put every final UI screenshot inside a phone frame (e.g. rounded rectangle with notch or bar).  
   - Use one consistent frame style (e.g. iPhone 15 or generic smartphone).  
   - The case study layout uses a CSS “device” wrapper so you only need to drop in the screen image.

2. **Background styling**  
   - Place device mockups on a **subtle gradient or tint** (e.g. zinc-900 → zinc-950), not pure white.  
   - Optional: very soft brand tint (e.g. navy/gold from style guide) so it feels governmental and premium.

3. **Layout composition**  
   - **Hero:** One large hero image (app mockup or key screen), full width.  
   - **Solution:** one large journey image + a row/grid of thumbnails with short labels.  
   - **Whitespace:** One main visual per subsection; avoid more than two images side by side except in Solution.  
   - **Annotations:** Optional small labels (e.g. “Primary path”, “Biometric”) next to or below each screen.

4. **What to avoid**  
   - Raw Excel or long tables; use one summary visual (e.g. task completion) + short copy.  
   - More than one style board; one (Professional and Practical) is enough.  
   - More than one research photo; one (e.g. 銀髮族) represents “diverse, inclusive research” without clutter.

---

## File copy checklist

Copy from your images folder into `public/case-studies/e-invoice/`:

| Your file | Save as |
|-----------|---------|
| mockup on figma-e1800af2-6da3-4be4-9c53-4fb7425d09b7.png | hero.png |
| user journey map-cbedf41b-9378-4dcc-99be-2e4ee2cad7a6.png | user-journey-map.png |
| 20250321_1330（銀髮族2位） copy-d6c63335-8fb2-490e-ad2b-bf760280821c.png | research-elderly.png |
| Group 14-0901b3da-41c1-427b-9319-f1739881b20f.png | style-guide.png |
| page flow-114cfffc-d550-47c7-90ed-08fcc02fce9c.png | page-flow.png |
| Screenshot 2025-12-31 at 11.03.47 AM-e807f24e-42e9-4731-87e8-2ab57f2e520e.png | final-1.png |
| Screenshot 2025-12-31 at 11.03.56 AM-d61007e6-078c-4b6d-9c48-647d765fc1af.png | final-2.png |
| task completion 1-74b10846-f0af-4a29-a578-708d6455311e.png | task-completion.png |

Optional third screen:  
Screenshot 2025-12-31 at 11.04.03 AM-45111c22-ae0b-49e7-9df7-59aed22b3a78.png → final-3.png
