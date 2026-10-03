import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { AnswerSummary } from "../src/components/content/AnswerSummary";
import { ModuleRenderer } from "../src/components/content/ModuleRenderer";
import { PageContents } from "../src/components/content/PageContents";
import { WikiNavigation } from "../src/components/layout/WikiNavigation";
import { assetManifest } from "../src/data/assets";
import { primaryNavigation } from "../src/data/navigation";
import type { AssetManifest } from "../src/types/assets";
import type { PageContent } from "../src/types/content";
import type { GuideModule } from "../src/types/modules";

const assets = assetManifest as AssetManifest;
const fixtureAssetId = "v4-component-route-fixture";
assets[fixtureAssetId] = {
  id: fixtureAssetId,
  src: "/test-route-image.png",
  sourceUrl: "https://example.com/route-image.png",
  sourcePage: "https://example.com/route",
  alt: "A route planning board",
  width: 640,
  height: 360,
  credit: "Example Studio",
  usage: "Focused component verification",
  pageIds: [],
  fallback: "surface",
};

function testPage(modules: GuideModule[], id: string): PageContent {
  return {
    id,
    translationKey: id,
    locale: "en-US",
    routeKind: "fixed",
    slug: id,
    url: `/${id}`,
    pageType: "guides",
    presentation: { shell: "content" },
    h1: id,
    seoTitle: id,
    metaDescription: id,
    summary: id,
    hero: { subtitle: id, ctas: [] },
    quickAnswer: "A short answer.",
    keyFacts: [],
    modules,
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-01",
  };
}

const datasets: Array<{ id: string; modules: GuideModule[]; stageTitles: string[] }> = [
  {
    id: "weather-station-route",
    stageTitles: [
      "Survey the ridge",
      "Check the instruments",
      "Calibrate the sensor",
      "Record the pressure",
      "Compare the readings",
      "Publish the forecast",
    ],
    modules: [
      {
        id: "forecast-route",
        type: "progression",
        heading: "Station workflow",
        stages: [
          { title: "Survey the ridge", href: "/ridge", assetId: fixtureAssetId },
          {
            title: "Check the instruments",
            href: "/instruments",
            visual: <span data-route-marker="instrument">Instrument marker</span>,
          },
          { title: "Calibrate the sensor", href: "/calibrate" },
          { title: "Record the pressure", href: "/pressure" },
          { title: "Compare the readings", href: "/readings" },
          { title: "Publish the forecast", href: "/forecast" },
        ],
      },
      {
        id: "sensor-checks",
        type: "steps",
        heading: "Check a sensor",
        items: [
          {
            title: "Inspect the casing",
            body: "First paragraph.\n\nSecond paragraph.\n\n- Check the seal\n- Confirm the serial number",
            doneCondition: "Both checks are recorded.",
          },
        ],
      },
      {
        id: "field-notes",
        type: "prose",
        heading: "Field notes",
        body: "Record the first observation.\n\nAdd the comparison below.\n\n- Morning reading\n- Evening reading",
      },
    ],
  },
  {
    id: "market-workshop-route",
    stageTitles: ["Gather stock", "Prepare a listing"],
    modules: [
      {
        id: "market-route",
        type: "progression",
        heading: "A two-part sales route",
        stages: [
          { title: "Gather stock", href: "/stock", label: "Before opening" },
          { title: "Prepare a listing", href: "/listings", caption: "Publish when ready." },
        ],
      },
      {
        id: "guide-library",
        type: "guide-index",
        heading: "Browse by task",
        groups: [
          {
            title: "Shop operations",
            items: [
              { label: "Stock guide", href: "/stock", description: "Track available goods." },
              { label: "Listing guide", href: "/listings" },
            ],
          },
          { title: "Planning", items: [{ label: "Capacity guide", href: "/capacity" }] },
        ],
      },
    ],
  },
];

try {
  for (const dataset of datasets) {
    const modulesHtml = renderToStaticMarkup(<ModuleRenderer modules={dataset.modules} />);
    const routeCount = (modulesHtml.match(/class="v4-progression__stage"/g) ?? []).length;
    assert.equal(routeCount, dataset.stageTitles.length, `${dataset.id}: route length changed`);
    for (const title of dataset.stageTitles) assert.ok(modulesHtml.includes(title), `${dataset.id}: missing ${title}`);
    assert.ok(!/how to fish|island/i.test(modulesHtml), `${dataset.id}: contains source-game wording`);

    const page = testPage(dataset.modules, dataset.id);
    const contentsHtml = renderToStaticMarkup(<PageContents page={page} collapsible />);
    assert.ok(contentsHtml.includes('<details class="page-contents">'), `${dataset.id}: contents should support collapse`);
    const targets = [...contentsHtml.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
    assert.deepEqual(targets, dataset.modules.map((module) => module.id), `${dataset.id}: wrong contents links`);
    for (const target of targets) assert.ok(modulesHtml.includes(`id="${target}"`), `${dataset.id}: missing anchor ${target}`);
    if (dataset.modules.some((module) => module.type === "guide-index")) {
      assert.ok(modulesHtml.includes("Shop operations") && modulesHtml.includes("Planning"));
      assert.ok(modulesHtml.includes('href="/stock"') && modulesHtml.includes('href="/capacity"'));
    }
  }

  const firstModules = renderToStaticMarkup(<ModuleRenderer modules={datasets[0].modules} />);
  assert.ok(firstModules.includes('src="/test-route-image.png"'), "registered progression image is optional media");
  assert.ok(firstModules.includes('data-route-marker="instrument"'), "caller visual node must pass through");
  assert.ok(/<p>First paragraph\.<\/p>[\s\S]*?<p>Second paragraph\.<\/p>/.test(firstModules));
  assert.ok(firstModules.includes("<ul>"));
  assert.ok(firstModules.includes("Check the seal") && firstModules.includes("Confirm the serial number"));
  assert.ok(firstModules.includes("<ol class=\"step-list\">"));
  assert.ok(firstModules.includes("Inspect the casing"));

  const answerHtml = renderToStaticMarkup(
    <AnswerSummary
      answer="The short answer comes first."
      context={"This is the first supporting paragraph.\n\nThis is the second paragraph.\n\n- Compare the options\n- Confirm the result"}
      locale="en-US"
    />,
  );
  assert.ok(answerHtml.includes("<details class=\"quick-answer__context\">"));
  assert.ok(answerHtml.includes("<summary>More context</summary>"));
  assert.ok(answerHtml.includes("The short answer comes first."));
  assert.ok(answerHtml.includes("This is the first supporting paragraph.") && answerHtml.includes("This is the second paragraph."));
  assert.ok(/<ul>[\s\S]*?<li>Compare the options<\/li>[\s\S]*?<li>Confirm the result<\/li>[\s\S]*?<\/ul>/.test(answerHtml));

  const originalChildren = primaryNavigation[0].children;
  primaryNavigation[0].children = [{ href: "/workflows", labels: { "en-US": "Workshop workflow" } }];
  try {
    const navigationHtml = renderToStaticMarkup(
      <WikiNavigation locale="en-US" currentUrl="/workflows" />,
    );
    assert.ok(navigationHtml.includes("Workshop workflow"));
    assert.ok(navigationHtml.includes('aria-current="page"'));
  } finally {
    primaryNavigation[0].children = originalChildren;
  }
} finally {
  delete assets[fixtureAssetId];
}

console.log("V4 reusable component checks passed: two unrelated routes, optional registered/custom visuals, grouped navigation, retained Markdown/steps, and valid contents anchors.");
