# CRM SPA Model Comparison

> *How do different AI models interpret the same prompt? Let's find out.*

## Highlights

- Same prompt, 12 different AI models, 12 unique CRM implementations
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
| GPT 5.4 | OpenAI | `gtp-54/` |
| GLM-5.1 | z.ai | `glm-51/` |
| Qwen 3.6 Plus | Alibaba Cloud | `qwen-36-plus/` |
| Kimi K2.5 | Moonshot AI | `kimi-k25/` |
| Claude Opus 4.6 | Anthropic | `opus-46/` |
| MiniMax M2.7 | MiniMax | `minimax-27/` |
| Claude Opus 4.5 | Anthropic | `opus-45/` |
| GLM-4.7 | z.ai | `glm-47/` |
| Mistral Coder | Mistral AI | `mistral-coder/` |
| DeepSeek R3 | DeepSeek | `deepseek-r3/` |
| Kimi K2 | Moonshot AI | `kimi-k2/` |
| GPT OSS 120B | OpenAI | `gpt-oss-120b/` |

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

### 2. Create the directory

Use a short, lowercase directory name based on the model name and version:

```
model-version/
  index.html
```

Examples: `opus-46/`, `kimi-k25/`, `gpt-oss-120b/`

### 3. Add the entry to `index.html`

Add a new `<a>` card inside the `<div class="grid gap-4">` section of the root `index.html`. Follow the existing pattern:

```html
<a href="./your-model/" class="group flex items-center justify-between p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-COLOR-500/50 hover:bg-zinc-900/80 transition-all">
  <div class="flex items-center gap-4">
    <div class="w-10 h-10 rounded-lg bg-COLOR-500/20 flex items-center justify-center text-COLOR-400">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    </div>
    <div>
      <span class="font-semibold text-zinc-100 group-hover:text-COLOR-400 transition-colors">Model Name</span>
      <p class="text-sm text-zinc-500">Company Name</p>
    </div>
  </div>
  <svg class="w-5 h-5 text-zinc-600 group-hover:text-COLOR-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
</a>
```

Replace `COLOR` with a Tailwind color (e.g., `violet`, `cyan`, `emerald`) that isn't already in use. Add your entry **at the top** of the grid (newest first).

### 4. Open a Pull Request

```bash
git checkout -b add-model-name
git add your-model/ index.html
git commit -m "Add Model Name (Company) CRM result"
git push origin add-model-name
```

Then open a PR with:
- The model name and company
- A screenshot of the CRM (optional but appreciated)

## Feedback

Found a bug or have an idea? [Open an issue](https://github.com/alonronin/crmapp/issues) or start a [discussion](https://github.com/alonronin/crmapp/discussions).

Contributions of any kind are welcome!
