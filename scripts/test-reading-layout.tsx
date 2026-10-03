import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { RichText } from "../src/components/content/RichText";
import { ModuleRenderer } from "../src/components/content/ModuleRenderer";
import { PageContents } from "../src/components/content/PageContents";
import { getAllPages } from "../src/lib/content";
import { Header } from "../src/components/layout/Header";
import { primaryNavigation } from "../src/data/navigation";
import type { GuideModule } from "../src/types/modules";
import readingSamples from "./fixtures/v4-reading-samples.json";

// Reproduce the old failure: Markdown paragraph/list/link structure became one p.
const text = "First paragraph.\n\nSecond paragraph with [equipment](/equipment).\n\n- Prepare supplies\n- Check the reward\n\n1. Open the menu\n2. Choose the item";
const oldHtml = renderToStaticMarkup(<p>{text}</p>);
assert.equal((oldHtml.match(/<p>/g) || []).length, 1);
assert.ok(!oldHtml.includes("<ul>") && !oldHtml.includes('href="/equipment"'));
const html = renderToStaticMarkup(<RichText text={text} />);
assert.equal((html.match(/<p>/g) || []).length, 2);
assert.ok(html.includes("<ul>") && html.includes("<ol>"));
assert.ok(html.includes('href="/equipment"'));
const unsafe = renderToStaticMarkup(<RichText text={'[bad](javascript:alert(1))\n\n<script>alert(1)</script>'} />);
assert.ok(!unsafe.includes("javascript:") && !unsafe.includes("<script"));
const table = renderToStaticMarkup(<RichText text={'| Item | Source |\n| --- | --- |\n| Ore | Mine |'} />);
assert.ok(table.includes('class="table-scroll"') && table.includes("<table") && table.includes("<td>Mine</td>"));
const heading = renderToStaticMarkup(<RichText text={'# Nested title\n\n## Another title'} />);
assert.ok(!heading.includes("<h1") && !heading.includes("<h2"));

// Representative answer shapes: level/puzzle, combat/build, reference, production, troubleshooting, state.
const scenarios: Array<{ shape: string; modules: GuideModule[]; expected: string[] }> = [
  { shape: "level", modules: [{ id: "route", type: "steps", heading: "Level route", items: [{ title: "Reach the switch", body: "Use the lower path.\n\n- Avoid the hazard\n- Return to the door", doneCondition: "Door opens" }] }], expected: ["<ol", "<ul>", "Door opens"] },
  { shape: "combat", modules: [{ id: "choice", type: "comparison", heading: "Choose preparation", options: [{ name: "Solo", summary: "Prioritize survival" }, { name: "Group", summary: "Assign roles" }] }, { id: "phases", type: "data-table", heading: "Phase response", columns: [{ key: "action", label: "Action" }], rows: [{ action: "[Equipment](/equipment)" }] }], expected: ["Solo", "Group", '<a href="/equipment"', "<table"] },
  { shape: "reference", modules: [{ id: "items", type: "entity-grid", heading: "Items", items: [{ title: "Reward", summary: "Where to get it", href: "/reward" }] }], expected: ['href="/reward"'] },
  { shape: "production", modules: [{ id: "recipes", type: "recipes", heading: "Production chain", items: [{ name: "Process", inputs: ["Input"], output: "Output" }] }], expected: ["Input", "Output"] },
  { shape: "troubleshooting", modules: [{ id: "fix", type: "steps", heading: "Fix connection", items: [{ title: "Match versions", body: "Check all players use the same version." }] }], expected: ["<ol", "Match versions"] },
  { shape: "state", modules: [{ id: "status", type: "callout", tone: "unknown", title: "Current status", body: "Not confirmed.\n\n[Official source](https://example.com)" }], expected: ["Not confirmed", 'href="https://example.com"'] },
];
for (const scenario of scenarios) {
  const output = renderToStaticMarkup(<ModuleRenderer modules={scenario.modules} />);
  for (const expected of scenario.expected) assert.ok(output.includes(expected), `${scenario.shape}: missing ${expected}`);
}
// Real Writer excerpts from seven launched games; test presentation, not game facts.
for (const sample of readingSamples) {
  const output = renderToStaticMarkup(<RichText text={sample.markdown} />);
  for (const expected of sample.expected) assert.ok(output.includes(expected), `${sample.source}: missing ${expected}`);
  const sourceParagraphs = sample.markdown.split(/\n\s*\n/).filter((unit) => /^[A-Za-z]/.test(unit));
  assert.ok((output.match(/<p>/g) || []).length >= sourceParagraphs.length, `${sample.source}: paragraphs collapsed`);
}
const originalChildren = primaryNavigation[0].children;
primaryNavigation[0].children = [{ href: "/guides", labels: { "en-US": "Beginner route" } }];
try {
  const navigation = renderToStaticMarkup(<Header locale="en-US" />);
  assert.ok(navigation.includes('class="nav-group"') && navigation.includes('href="/guides"') && navigation.includes("Beginner route"));
} finally { primaryNavigation[0].children = originalChildren; }
for (const page of getAllPages()) {
  const path = page.url === "/" ? "index.html" : `${page.url.replace(/^\//, "")}/index.html`;
  const directoryPath = join(process.cwd(), "out", path);
  const filePath = join(process.cwd(), "out", `${page.url.replace(/^\//, "")}.html`);
  const output = readFileSync(existsSync(directoryPath) ? directoryPath : filePath, "utf8");
  for (const guideModule of page.modules) {
    const textUnits = guideModule.type === "prose" || guideModule.type === "callout" ? [guideModule.body] : guideModule.type === "steps" ? guideModule.items.map((item) => item.body) : [];
    for (const body of textUnits) {
      const expected = renderToStaticMarkup(<RichText text={body} />);
      assert.ok(output.includes(expected), `${page.url} / ${guideModule.id}: Markdown structure missing in built HTML`);
    }
  }
  const contents = renderToStaticMarkup(<PageContents page={page} collapsible />);
  for (const match of contents.matchAll(/href="#([^"]+)"/g)) assert.ok(output.includes(`id="${match[1]}"`), `${page.url}: broken contents target ${match[1]}`);
  if (page.routeKind === "home") {
    const firstModule = page.modules[0];
    const moduleOffset = output.indexOf(`id="${firstModule.id}"`);
    assert.ok(moduleOffset >= 0 && moduleOffset < output.indexOf('class="home-summary"'), `${page.url}: entry module must precede background summary`);
  }
}
console.log(`Reading validation passed: Markdown preservation, ${scenarios.length} demand compositions, ${readingSamples.length} real Writer excerpts and built pages/contents targets.`);
