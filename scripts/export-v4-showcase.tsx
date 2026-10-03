import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { copyFileSync, cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { HomePage } from "../src/components/pages/HomePage";
import { ContentPage } from "../src/components/pages/ContentPage";
import { PageShell } from "../src/components/layout/PageShell";
import { showcaseThemes } from "./fixtures/v4-showcase-themes";
import { theme as placeholderTheme } from "../src/data/theme";
import { assetManifest } from "../src/data/assets";
import { primaryNavigation } from "../src/data/navigation";
import { site } from "../src/data/site";
import type { AssetManifest, AssetRecord } from "../src/types/assets";
import assets from "./fixtures/v4-assets.json";
import { showcaseCases, makeShowcaseHome, makeShowcaseDetail } from "./fixtures/v4-showcase";
import readingSamples from "./fixtures/v4-reading-samples.json";
import type { PageContent } from "../src/types/content";

const output = resolve(process.argv[2] ?? "dist/v4-showcase");
mkdirSync(output, { recursive: true });
const cssRoot = resolve("out/_next/static/css");
writeFileSync(join(output, "styles.css"), readdirSync(cssRoot).filter(f => f.endsWith(".css")).map(f => readFileSync(join(cssRoot, f), "utf8")).join("\n"));
cpSync(resolve("scripts/fixtures/v4-fonts"), join(output, "fonts"), { recursive: true });
cpSync(resolve("public/examples"), join(output, "examples"), { recursive: true });
copyFileSync(resolve("scripts/fixtures/v4-preview.css"), join(output, "preview.css"));
copyFileSync(resolve("scripts/fixtures/v4-showcase-content.json"), join(output, "source-excerpts.json"));
for (const asset of assets) (assetManifest as AssetManifest)[asset.id] = asset as AssetRecord;
const originalSite = { ...site };
const originalNavigation = [...primaryNavigation];
const toolbar = '<div class="preview-toolbar"><a href="/index.html">All V4 layouts</a><span>Local template preview · historical source excerpts, not a content audit</span></div>';
function document(title: string, body: string, gameId = "") {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${title}</title><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/preview.css"><style>.preview-toolbar{display:flex;justify-content:space-between;gap:16px;padding:12px 24px;background:#e5eaf0;color:#1d3549;font:13px system-ui}.preview-toolbar a{text-decoration:underline}.site-search{display:none}@media(max-width:600px){.preview-toolbar span{display:none}}</style></head><body class="preview-${gameId}">${toolbar}${body}</body></html>`;
}
for (const entry of showcaseCases) {
  const home = makeShowcaseHome(entry), detail = makeShowcaseDetail(entry);
  site.name = `${entry.game} Guide`; site.gameName = entry.game; site.brandMark = entry.game.slice(0,2).toUpperCase(); site.disclaimer = `Independent ${entry.game} guide. Local design preview.`;
  primaryNavigation.splice(0, primaryNavigation.length, ...entry.headings.map(label => ({ href: detail.page.url, labels: { "en-US": label } })));
  const theme = showcaseThemes[entry.id];
  writeFileSync(join(output, `${entry.id}.html`), document(`${entry.game} · V4 homepage`, renderToStaticMarkup(<PageShell locale="en-US" currentUrl={home.url} themeConfig={theme}><HomePage page={home} themeConfig={theme} recentPages={[]} /></PageShell>), entry.id));
  writeFileSync(join(output, `${entry.id}-detail.html`), document(`${entry.game} · V4 guide`, renderToStaticMarkup(<PageShell locale="en-US" currentUrl={detail.page.url} themeConfig={theme}><ContentPage page={detail.page} themeConfig={theme} /></PageShell>), entry.id));
}
Object.assign(site, originalSite); primaryNavigation.splice(0, primaryNavigation.length, ...originalNavigation);
const extras = readingSamples.filter(s => ["production", "coop", "codes"].includes(s.shape));
for (const sample of extras) {
  const page: PageContent = { ...makeShowcaseDetail(showcaseCases[0]).page, id: `sample-${sample.shape}`, h1: sample.markdown.match(/^## (.+)/)?.[1] ?? sample.shape, hero: { subtitle: "Recorded source excerpt in a reusable reading layout.", ctas: [] }, quickAnswer: "This is a layout check using a historical excerpt, not newly researched advice.", modules: [{ id: "sample", type: "prose", heading: "Guide", body: sample.markdown }], keyFacts: [{ label: "Source", value: sample.source.split('/')[2] }] };
  writeFileSync(join(output, `sample-${sample.shape}.html`), document(page.h1, renderToStaticMarkup(<PageShell locale="en-US" themeConfig={placeholderTheme}><ContentPage page={page} themeConfig={placeholderTheme} /></PageShell>)));
}
const tiles = showcaseCases.map(e => `<section><h2>${e.game}</h2><p>${e.context}</p><a href="/${e.id}.html"><iframe src="/${e.id}.html" title="${e.game} homepage" tabindex="-1" loading="lazy"></iframe></a><div><a href="/${e.id}.html">Homepage</a> <a href="/${e.id}-detail.html">Guide page</a></div></section>`).join("");
writeFileSync(join(output,"index.html"),`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>V4 模板预览</title><style>body{margin:0;background:#e8edf2;color:#21394b;font:16px system-ui}main{max-width:1250px;margin:auto;padding:40px 24px}h1{font-size:40px}p{line-height:1.7;color:#526579}.grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}section{background:white;padding:24px;border:1px solid #cbd7e1}iframe{width:100%;height:340px;border:0;pointer-events:none}a{color:#165782}section div{display:flex;gap:24px;margin-top:20px}@media(max-width:800px){.grid{grid-template-columns:1fr}}</style></head><body><main><h1>V4 攻略模板</h1><p>四个游戏 demo 仅展示配置与组件的用法；配色、字体和组件组合都在实际调用时按游戏决定。以下是本地模板预览，未部署到游戏站；内页使用历史稿件片段，内容准确性不在此次验收范围。</p><div class="grid">${tiles}</div><h2>其他阅读形态</h2><p>${extras.map(s=>`<a href="/sample-${s.shape}.html">${s.shape}</a>`).join(' · ')}</p><p><a href="/source-excerpts.json">查看稿件来源与片段</a></p></main></body></html>`);
console.log(`V4 showcase exported: ${output}; ${showcaseCases.length} homepage/detail pairs and ${extras.length} additional excerpts.`);
