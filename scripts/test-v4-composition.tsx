import React from "react";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { HomePage } from "../src/components/pages/HomePage";
import { PageShell } from "../src/components/layout/PageShell";
import { WikiNavigation } from "../src/components/layout/WikiNavigation";
import { ModuleRenderer } from "../src/components/content/ModuleRenderer";
import { AssetMedia } from "../src/components/media/AssetMedia";
import { showcaseThemes } from "./fixtures/v4-showcase-themes";
import { theme as placeholderTheme } from "../src/data/theme";
import { themeStyle } from "../src/lib/theme";
import { assemblyRecipes } from "./fixtures/v4-assembly-examples";
import { homeVariants } from "../src/types/theme";
import { guideModuleTypes } from "../src/types/modules";
import { primaryNavigation } from "../src/data/navigation";
import { makeShowcaseHome, showcaseCases } from "./fixtures/v4-showcase";
import { assetManifest } from "../src/data/assets";
import type { AssetManifest } from "../src/types/assets";

for (const variant of ["split-panel", "media-hero", "guide-portal", "visual-cover", "reference-desk"] as const) assert.ok(homeVariants.includes(variant));
for (const recipe of Object.values(assemblyRecipes)) for (const section of recipe.sections) for (const type of section.preferred) assert.ok(guideModuleTypes.includes(type));
for (const entry of showcaseCases) {
  const page = makeShowcaseHome(entry), theme = showcaseThemes[entry.id];
  // Preserve every content module, exactly once; supplementary copy stays accessible.
  const html = renderToStaticMarkup(<PageShell locale={page.locale} currentUrl={page.url} themeConfig={theme}><HomePage page={page} themeConfig={theme} recentPages={[]} /></PageShell>);
  assert.ok(!html.includes("skin-"));
  for (const guideModule of page.modules) assert.equal((html.match(new RegExp(`id="${guideModule.id}"`, "g")) ?? []).length, 1);
  assert.ok(html.indexOf('id="guide-library"') < html.indexOf('class="home-summary"'));
  assert.ok(html.includes('class="home-supplementary"') && html.includes(page.quickAnswer));
  assert.equal(html.includes('class="wiki-sidebar"'), theme.navigation === "wiki-sidebar");
}
const originalChildren = primaryNavigation[0].children;
primaryNavigation[0].children = [{ href: "/guides", labels: { "en-US": "Nested guide" } }];
try {
  const html = renderToStaticMarkup(<WikiNavigation locale="en-US" currentUrl="/guides" />);
  assert.ok(html.includes('aria-current="page"') && html.includes("Nested guide"));
} finally { primaryNavigation[0].children = originalChildren; }
const modules = renderToStaticMarkup(<ModuleRenderer modules={[
  { id: "facts", type: "fact-panel", heading: "At a glance", facts: [{ label: "Related guide", value: "Guide", href: "/guides" }] },
  { id: "path", type: "progression", heading: "Learning path", stages: [{ title: "Start", href: "/guides", description: "Follow the first guide" }] },
  { id: "featured", type: "featured-guides", heading: "Featured", lead: { title: "Lead guide", href: "/guides" }, supporting: [] },
]} />);
assert.ok(modules.includes("<dl") && modules.includes("<ol") && modules.includes("Lead guide"));
const absent = renderToStaticMarkup(<AssetMedia assetId="unavailable-example" />);
assert.ok(absent.includes("asset-fallback") && !absent.includes("<img"));
const assets = assetManifest as AssetManifest;
assets["missing-local-test"] = { id: "missing-local-test", src: "/absent-image.jpg", sourceUrl: "https://example.com/image.jpg", sourcePage: "https://example.com", alt: "Example", width: 100, height: 100, credit: "Example", usage: "test", pageIds: [], fallback: "hide" };
try {
  const html = renderToStaticMarkup(<AssetMedia assetId="missing-local-test" />);
  assert.ok(html.includes('/absent-image.jpg'));
} finally { delete assets["missing-local-test"]; }
function luminance(hex: string) { const c = hex.slice(1).match(/../g)!.map(v => { const n = parseInt(v,16)/255; return n <= .04045 ? n/12.92 : ((n+.055)/1.055)**2.4; }); return .2126*c[0]+.7152*c[1]+.0722*c[2]; }
function contrast(a:string,b:string) { const x=luminance(a), y=luminance(b); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); }
for (const [name, preset] of Object.entries(showcaseThemes)) for (const background of [preset.tokens.pageBg,preset.tokens.surface1,preset.tokens.surface2]) for (const foreground of [preset.tokens.textPrimary,preset.tokens.textMuted,preset.tokens.textLink]) assert.ok(contrast(foreground,background) >= 4.5, `${name}: unreadable ${foreground} on ${background}`);

// Regression: no preset name, demo font or task recipe is required by production.
assert.ok(!existsSync("src/data/theme-presets.ts") && !existsSync("src/data/assemblies.ts"));
assert.ok(!readFileSync("src/app/globals.css", "utf8").includes("fonts.css"));
const customTheme = structuredClone(placeholderTheme);
customTheme.tokens.pageBg = "#123456";
customTheme.tokens.accentPrimary = "#654321";
customTheme.typography.headingFamily = "My Game Heading, serif";
customTheme.typography.bodyFamily = "My Game Body, sans-serif";
const style = themeStyle(customTheme);
assert.equal(style["--page-bg"], "#123456");
assert.equal(style["--accent-primary"], "#654321");
assert.equal(style["--font-heading"], "My Game Heading, serif");
assert.equal(style["--font-body"], "My Game Body, sans-serif");
const customPage = makeShowcaseHome(showcaseCases[0]);
customPage.modules = [customPage.modules[2], customPage.modules[0]];
const customHtml = renderToStaticMarkup(<PageShell locale="en-US" themeConfig={customTheme}><HomePage page={customPage} themeConfig={customTheme} recentPages={[]} /></PageShell>);
assert.ok(customHtml.includes("--page-bg:#123456") && customHtml.includes("My Game Heading"));
assert.ok(customHtml.indexOf('id="next-steps"') < customHtml.indexOf('id="guide-library"'));
assert.ok(!customHtml.includes('id="featured-help"'));

console.log("V4 composition passed: unique module placement, retained supplementary content, recursive navigation, optional media, caller-defined colors/fonts and independently ordered modules.");
