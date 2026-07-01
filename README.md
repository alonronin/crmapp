# CRM SPA Model Comparison

> *How do different AI models interpret the same prompt? Let's find out.*

## Highlights

- Same prompt, 13 different AI models, 13 unique CRM implementations
- Each result is a **single HTML file** -- no build tools, no dependencies
- Side-by-side comparison of how models approach UI, architecture, and design
- Live demo hosted on Vercel

## Overview

A benchmark that compares how different AI models respond to the exact same prompt:

> "Write a single SPA with React, React-DOM and TailwindCSS of a SaaS app for a basic general CRM in a single HTML file"

Each model produces a fully functional CRM application in a single `index.html` file using React 18, React-DOM, and TailwindCSS via CDN. The results reveal how each model interprets requirements differently -- from layout choices and color palettes to feature depth and code organization.

### Models

| Model | Company | Directory |
|-------|---------|-----------|
| GPT 5.4 | OpenAI | `models/gtp-54/` |
| GLM-5.1 | z.ai | `models/glm-51/` |
| Qwen 3.6 Plus | Alibaba Cloud | `models/qwen-36-plus/` |
| Kimi K2.5 | Moonshot AI | `models/kimi-k25/` |
| Claude Opus 4.6 | Anthropic | `models/opus-46/` |
| MiniMax M2.7 | MiniMax | `models/minimax-27/` |
| Claude Opus 4.5 | Anthropic | `models/opus-45/` |
| GLM-4.7 | z.ai | `models/glm-47/` |
| Mistral Coder | Mistral AI | `models/mistral-coder/` |
| DeepSeek R3 | DeepSeek | `models/deepseek-r3/` |
| Kimi K2 | Moonshot AI | `models/kimi-k2/` |
| GPT OSS 120B | OpenAI | `models/gpt-oss-120b/` |
| Mimo 2.5 Pro | Xiaomi | `models/mimo-25-pro/` |

Each model directory contains an `index.html` (the CRM output) and a `meta.json` with model metadata.

### Author

Created by [Alon Valadji](https://github.com/alonronin).

## Usage

Browse the comparison at the live site or run it locally:

```bash
git clone https://github.com/alonronin/crmapp.git
cd crmapp
# open index.html in your browser, or serve with any static server:
npx serve .
```

Click any model card on the landing page to view its CRM implementation.

## Contributing

Want to add a new model's result? Here's how:

### 1. Generate the CRM

Send the following prompt to your model of choice:

> "Write a single SPA with React, React-DOM and TailwindCSS of a SaaS app for a basic general CRM in a single HTML file"

Save the output as `index.html`.

### 2. Scaffold the model

```bash
bun run add
```

This will prompt you for model name, company, and accent color, then create the directory with a `meta.json`.

Alternatively, create it manually:

```
models/your-model/
  index.html    # the CRM output
  meta.json     # model metadata
```

`meta.json` format:
```json
{
  "model": "Model Name",
  "company": "Company",
  "color": "violet",
  "addedDate": "2026-04-06"
}
```

Available colors: `violet`, `cyan`, `emerald`, `orange`, `pink`, `amber`, `rose`, `indigo`, `teal`, `sky`, `yellow`, `lime`, `red`, `blue`, `fuchsia`, `green`, `purple`

### 3. Regenerate the landing page

```bash
bun run generate
```

This reads all `models/*/meta.json` files and rebuilds `index.html` automatically.

### 4. Open a Pull Request

```bash
git checkout -b add-model-name
git add models/your-model/ index.html
git commit -m "Add Model Name (Company) CRM result"
git push origin add-model-name
```

Then open a PR with:
- The model name and company
- A screenshot of the CRM (optional but appreciated)

## Feedback

Found a bug or have an idea? [Open an issue](https://github.com/alonronin/crmapp/issues) or start a [discussion](https://github.com/alonronin/crmapp/discussions).

Contributions of any kind are welcome!
