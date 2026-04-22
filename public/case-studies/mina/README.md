# MINA Parenting Copilot — images

This case study page expects these images in this folder:

| File | Used for |
|------|----------|
| `flow-3.png` | **Hero + core solution flow** (Pass It On → suggested items → AI listing) |
| `flow-3-alt.png` | AI safety & control flow (preview, explicit confirmation, reversibility messaging) |
| `flow-1.png` | Copilot context flow (ask about an item) |
| `flow-2.png` | Optional copilot follow-up flow (keep only if page doesn’t feel crowded) |

## How to add them

Copy your exported images into `public/case-studies/mina/` and rename them exactly to the filenames above.

Source files you provided:

- `Flow 3- Declutter needs-f0d20c23-37ea-483e-b266-815028cb36ce.png` → `flow-3.png`
- `Flow 3- Declutter needs-67c9f5e0-5037-4d39-9800-daf1ddf7853a.png` → `flow-3-alt.png`
- `Flow 1 - Ask about an item-e3844ce8-e84c-4cf8-9ab9-0a399d364127.png` → `flow-1.png`
- `Flow 2- Ask follow up question-ad30c7a3-da4f-417e-b08a-afc135abb5c7.png` → `flow-2.png`

Once those files exist, the page at `/case-studies/ai-marketplace` will render them automatically.

## Prototype video

| File | Used for |
|------|----------|
| `mina-ai-prototype.mp4` | Core experience: one photo → AI item detection → listing draft (autoplay on case study) |
| `mina-ai-prototype.webm` | Optional smaller source for Chrome/Firefox; add with e.g. `ffmpeg -i mina-ai-prototype.mp4 -c:v libvpx-vp9 -crf 32 -an mina-ai-prototype.webm` |

