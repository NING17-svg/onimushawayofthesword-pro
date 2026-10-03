import { HubPage } from "../src/components/pages/HubPage";
import { WorkspacePage } from "../src/components/pages/WorkspacePage";
import { AnswerSummary } from "../src/components/content/AnswerSummary";
import React from "react";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { Footer } from "../src/components/layout/Footer";
import { HomePage } from "../src/components/pages/HomePage";
import { PageHero } from "../src/components/pages/PageHero";
import { site } from "../src/data/site";
import { buildEntityPages } from "../src/lib/entities";
import type { PageContent } from "../src/types/content";
import type { DataTableModule } from "../src/types/modules";
import {
  multilingualEntityFixture,
  secondaryLocaleFixture,
} from "./fixtures/v3-template-scenarios";
import {
  hasPlayerAnswerOrEntry,
  moduleHasVisibleContent,
} from "./validate-content";

function page(overrides: Partial<PageContent> = {}): PageContent {
  return {
    id: "public-content-noise-regression",
    translationKey: "public-content-noise-regression",
    locale: "en-US",
    routeKind: "fixed",
    slug: "public-content-noise-regression",
    url: "/public-content-noise-regression",
    pageType: "wiki",
    presentation: { shell: "content" },
    h1: "Copper location",
    seoTitle: "Where to find copper",
    metaDescription: "Find the copper locations and collection steps.",
    summary: "A guide to copper locations.",
    hero: { subtitle: "", ctas: [] },
    quickAnswer: "",
    keyFacts: [],
    modules: [],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-02",
    ...overrides,
  };
}

const shortLookup: DataTableModule = {
  id: "ore-locations",
  type: "data-table",
  heading: "Copper locations",
  columns: [
    { key: "area", label: "Area" },
    { key: "location", label: "Location" },
  ],
  rows: [{ area: "North trail", location: "Behind the waterfall" }],
};
const lookupPage = page({ modules: [shortLookup] });
const entranceHome = page({
  id: "home",
  translationKey: "home",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", supplementary: "expanded" },
  h1: "Game Guide",
  hero: {
    subtitle: "",
    ctas: [{ label: "Browse walkthroughs", href: "/guides" }],
  },
});
const emptyPage = page();

// The prior required-field gate rejected this useful one-table answer solely because
// summary text, quickAnswer, keyFacts, and extra modules were empty.
const priorGateRejectedLookup = Boolean(
  !lookupPage.hero.subtitle ||
    !lookupPage.quickAnswer ||
    !lookupPage.keyFacts.length ||
    !lookupPage.modules.length,
);
assert.equal(priorGateRejectedLookup, true);
assert.equal(hasPlayerAnswerOrEntry(lookupPage), true);
assert.equal(hasPlayerAnswerOrEntry(entranceHome), true);
assert.equal(hasPlayerAnswerOrEntry(emptyPage), false);
assert.equal(moduleHasVisibleContent({ ...shortLookup, rows: [] }), false);

const originalLocales = [...site.locales];
let detail: PageContent | undefined;
try {
  site.locales.push(secondaryLocaleFixture);
  const detailPages = buildEntityPages(multilingualEntityFixture);
  detail = detailPages.find((candidate) => candidate.routeKind === "entity-detail");
} finally {
  site.locales.splice(0, site.locales.length, ...originalLocales);
}
assert.ok(detail, "entity detail page is generated from the approved fact package");
assert.deepEqual(multilingualEntityFixture[0].records[0].sourceUrls, ["https://example.com/alex"]);
assert.equal(multilingualEntityFixture[0].records[0].gameVersionScope, "Current release");
assert.equal(multilingualEntityFixture[0].records[0].remakeStatus, "Confirmed");
assert.equal(detail.keyFacts.length, 0, "entity review/status fields are not promoted into public key facts");
assert.ok(!detail.modules.some((module) => module.id === "entity-sources"));
assert.ok(
  !detail.modules.some(
    (module) =>
      module.type === "data-table" &&
      module.rows.some((row) => Object.values(row).some((value) => /Current release|Confirmed|Game version|Status/.test(value))),
  ),
);

const heroHtml = renderToStaticMarkup(<PageHero page={page()} />);
assert.ok(!heroHtml.includes("page-review"));
assert.ok(!heroHtml.includes("2026-10-02"));
assert.ok(!heroHtml.includes("<p></p>"), "an empty hero subtitle does not create an empty paragraph");

const footerHtml = renderToStaticMarkup(<Footer locale="en-US" />);
assert.ok(!footerHtml.includes(site.disclaimer));

const recentPage = page({
  id: "recent-route",
  slug: "recent-route",
  url: "/recent-route",
  h1: "Recently updated route",
  summary: "A short route guide.",
  lastReviewed: "2026-09-27",
});
const homeHtml = renderToStaticMarkup(
  <HomePage page={entranceHome} recentPages={[recentPage]} />,
);
const visibleHomeHtml = homeHtml.replace(/<script[^>]*>[\s\S]*?<\/script>/g, "");
assert.ok(!visibleHomeHtml.includes("home-facts"), "empty key facts do not create a homepage section");
assert.ok(!visibleHomeHtml.includes("home-entry"), "an empty module list does not create an empty entry block");
assert.ok(!visibleHomeHtml.includes("home-summary"), "an empty quick answer does not create an empty section");
assert.ok(!visibleHomeHtml.includes("page-review"));
assert.ok(!visibleHomeHtml.includes("2026-10-02"));
assert.ok(!visibleHomeHtml.includes("2026-09-27"), "recent update cards do not disclose review dates");
assert.ok(visibleHomeHtml.includes("Browse walkthroughs"), "the homepage retains a useful player entry");

console.log(
  "Public-content noise checks passed: entity provenance remains internal, review/disclaimer copy is hidden, and short answers or entry-only homepages pass without empty sections.",
);

assert.equal(renderToStaticMarkup(<AnswerSummary answer="" locale="en-US" />), "");
assert.ok(!renderToStaticMarkup(<HubPage page={entranceHome} />).includes("hub-summary"));
assert.ok(!renderToStaticMarkup(<WorkspacePage page={entranceHome} />).includes("workspace-fallback"));
