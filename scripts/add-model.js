import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createInterface } from "node:readline";

const ROOT = join(import.meta.dirname, "..");
const MODELS_DIR = join(ROOT, "models");

const AVAILABLE_COLORS = [
  "violet", "cyan", "emerald", "orange", "pink", "amber",
  "rose", "indigo", "teal", "sky", "yellow", "lime",
  "red", "blue", "fuchsia", "green", "purple",
];

function prompt(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

const rl = createInterface({ input: process.stdin, output: process.stdout });

console.log("\nAdd a new model to CRM SPA Comparison\n");

const model = await prompt(rl, "Model name (e.g. Claude Opus 4.6): ");
const company = await prompt(rl, "Company (e.g. Anthropic): ");
const slug = await prompt(rl, `Directory name (e.g. opus-46) [${model.toLowerCase().replace(/[\s.]+/g, "-")}]: `)
  || model.toLowerCase().replace(/[\s.]+/g, "-");
const color = await prompt(rl, `Color (${AVAILABLE_COLORS.join(", ")}): `);
const addedDate = new Date().toISOString().split("T")[0];

rl.close();

if (!model || !company || !color) {
  console.error("Model name, company, and color are required.");
  process.exit(1);
}

if (!AVAILABLE_COLORS.includes(color)) {
  console.warn(`Warning: "${color}" is not a standard Tailwind color. Proceeding anyway.`);
}

const modelDir = join(MODELS_DIR, slug);
await mkdir(modelDir, { recursive: true });

const meta = { model, company, color, addedDate };
await writeFile(join(modelDir, "meta.json"), JSON.stringify(meta, null, 2) + "\n");

console.log(`\nCreated models/${slug}/meta.json`);
console.log(`\nNext steps:`);
console.log(`  1. Save your model's output to models/${slug}/index.html`);
console.log(`  2. Run: bun run generate`);
