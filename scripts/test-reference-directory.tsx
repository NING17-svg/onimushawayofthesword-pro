import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import {
  defaultReferenceDirectoryLabels,
  ReferenceDirectory,
} from "../src/components/content/ReferenceDirectory";
import { assetManifest } from "../src/data/assets";
import {
  filterReferenceItems,
  isSameReferencePageHref,
  referenceAnchor,
  referenceAnchors,
} from "../src/lib/reference-directory";
import type { AssetManifest } from "../src/types/assets";
import type { EntityGridModule } from "../src/types/modules";

const fixtureAssetId = "reference-directory-test-image";
const assets = assetManifest as AssetManifest;
assets[fixtureAssetId] = {
  id: fixtureAssetId,
  src: "/reference-directory-test.png",
  sourceUrl: "https://example.org/reference-image.png",
  sourcePage: "https://example.org/reference-page",
  alt: "Example field marker",
  width: 640,
  height: 360,
  credit: "Example source",
  usage: "Reference directory component test",
  pageIds: [],
  fallback: "surface",
};

const facilities: EntityGridModule = {
  id: "coastal-facilities",
  type: "entity-grid",
  heading: "Coastal facilities",
  items: [
    {
      title: "Breakwater Gate",
      summary: "Protects the outer coast.",
      badge: "Coastal",
      href: "/guides/tides",
    },
    {
      title: "Signal Tower",
      summary: "Reports coastal traffic.",
      badge: "Navigation",
      assetId: fixtureAssetId,
      href: "/guides/signals",
    },
    {
      title: "Local Entry",
      summary: "A reference within this directory.",
      badge: "Coastal",
      href: "/coastal-facilities/",
    },
    {
      title: "Query Link",
      summary: "A destination with a query string.",
      badge: "Navigation",
      href: "/coastal-facilities?view=map",
    },
    {
      title: "Hash Link",
      summary: "A destination with a fragment.",
      href: "/coastal-facilities#details",
    },
    {
      title: "External Guide",
      summary: "An outside reference.",
      badge: "Navigation",
      href: "https://outside.example/reference",
    },
    {
      title: "Untagged Record",
      summary: "This source item has no badge.",
    },
  ],
};

const statuses: EntityGridModule = {
  id: "case-statuses",
  type: "entity-grid",
  heading: "Case statuses",
  items: [
    {
      title: "対応中",
      summary: "A case is being reviewed.",
      badge: "進行",
      href: "/case-statuses",
    },
    {
      title: "対応中",
      summary: "The same name appears a second time.",
      badge: "保留",
    },
    {
      title: "待ち",
      summary: "This source item has no label.",
    },
  ],
};

const emptyDirectory: EntityGridModule = {
  id: "empty-directory",
  type: "entity-grid",
  heading: "Empty reference",
  items: [],
};

const idCollisionDirectory: EntityGridModule = {
  id: "a",
  type: "entity-grid",
  heading: "Reference Heading",
  items: [
    {
      title: "Reference Search",
      summary: "This title resembles the search control ID.",
    },
    {
      title: "Reference Heading",
      summary: "This title resembles the heading ID.",
    },
  ],
};

const localizedLabels = {
  searchLabel: "Buscar referencia",
  searchPlaceholder: "Nombre o detalle",
  badgeFilterLabel: "Filtrar por etiqueta",
  allBadgesLabel: "Todas",
  unbadgedLabel: "Sin etiqueta",
  entryCount: "{total} registros",
  entryCountOne: "{total} registro",
  resultCount: "{visible}/{total} resultados",
  entryLinkLabel: "Anclar {title}",
  pageLinkLabel: "Abrir {title}",
  emptyLabel: "No hay entradas.",
  noResultsLabel: "Sin coincidencias.",
  clearFiltersLabel: "Limpiar búsqueda y filtros",
};

try {
  const defaultHtml = renderToStaticMarkup(
    <ReferenceDirectory guideModule={facilities} currentUrl="/coastal-facilities" />,
  );
  assert.ok(defaultHtml.includes('id="coastal-facilities"'), "the source module ID remains the section anchor");
  assert.ok(defaultHtml.includes('id="coastal-facilities-breakwater-gate"'));
  assert.ok(defaultHtml.includes("Protects the outer coast."));
  assert.ok(defaultHtml.includes(">Coastal</span>") && defaultHtml.includes(">Navigation</span>"));
  assert.ok(defaultHtml.includes('src="/reference-directory-test.png"'), "registered media remains optional item content");
  assert.ok(defaultHtml.includes("Search this reference") && defaultHtml.includes("Name, label, or detail"));
  assert.ok(defaultHtml.includes('aria-label="Filter by label"'));
  assert.ok(defaultHtml.includes("7 entries") && defaultHtml.includes("7 of 7 shown"));
  assert.equal((defaultHtml.match(/class="v4-reference-entry"/g) ?? []).length, facilities.items.length);
  assert.ok(!/\shidden(?:="")?(?=[\s>])/.test(defaultHtml), "all source entries are visible in server-rendered HTML");

  assert.ok(
    defaultHtml.includes('href="#coastal-facilities-local-entry"'),
    "a plain same-page link becomes a link to its own entry",
  );
  assert.ok(defaultHtml.includes('href="/coastal-facilities?view=map"'), "query links remain unchanged");
  assert.ok(defaultHtml.includes('href="/coastal-facilities#details"'), "hash links remain unchanged");
  assert.ok(defaultHtml.includes('href="https://outside.example/reference"'), "external links remain unchanged");
  assert.ok(defaultHtml.includes('href="/guides/tides"'), "ordinary links to other pages remain unchanged");

  assert.deepEqual(
    filterReferenceItems(facilities.items, "signal").map((item) => item.title),
    ["Signal Tower"],
    "search matches names",
  );
  assert.deepEqual(
    filterReferenceItems(facilities.items, "Navigation", { kind: "all" }).map((item) => item.title),
    ["Signal Tower", "Query Link", "External Guide"],
    "search matches labels",
  );
  assert.deepEqual(
    filterReferenceItems(facilities.items, "reports coastal traffic").map((item) => item.title),
    ["Signal Tower"],
    "search matches summaries",
  );
  assert.deepEqual(
    filterReferenceItems(facilities.items, "", { kind: "exact", value: "Coastal" }).map((item) => item.title),
    ["Breakwater Gate", "Local Entry"],
    "badge filtering uses exact labels",
  );
  assert.deepEqual(
    filterReferenceItems(facilities.items, "", { kind: "exact", value: "coastal" }),
    [],
    "badge filtering is case-sensitive and exact",
  );
  assert.deepEqual(
    filterReferenceItems(facilities.items, "", { kind: "unlabeled" }).map((item) => item.title),
    ["Hash Link", "Untagged Record"],
    "items without badges remain searchable and filterable",
  );

  const statusHtml = renderToStaticMarkup(
    <ReferenceDirectory
      guideModule={statuses}
      currentUrl="/case-statuses"
      labels={localizedLabels}
    />,
  );
  assert.ok(statusHtml.includes("Buscar referencia") && statusHtml.includes("Nombre o detalle"));
  assert.ok(statusHtml.includes('aria-label="Filtrar por etiqueta"'));
  assert.ok(statusHtml.includes("3 registros") && statusHtml.includes("3/3 resultados"));
  assert.ok(statusHtml.includes("Todas") && statusHtml.includes("Sin etiqueta"));
  assert.ok(statusHtml.includes('href="#case-statuses-対応中"'));
  assert.equal((statusHtml.match(/class="v4-reference-entry"/g) ?? []).length, 3);

  const emptyHtml = renderToStaticMarkup(
    <ReferenceDirectory guideModule={emptyDirectory} currentUrl="/empty-directory" />,
  );
  assert.ok(emptyHtml.includes("0 entries") && emptyHtml.includes("0 of 0 shown"));
  assert.ok(emptyHtml.includes("No entries are available."));
  assert.ok(!emptyHtml.includes('class="v4-reference-filters"'), "an empty list has no meaningless badge filter");

  const collisionHtml = renderToStaticMarkup(
    <ReferenceDirectory guideModule={idCollisionDirectory} currentUrl="/a" />,
  );
  const elementIds = [...collisionHtml.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(elementIds).size, elementIds.length, "control IDs do not collide with generated entry anchors");
  assert.ok(collisionHtml.includes('id="a--reference-search"'));
  assert.ok(collisionHtml.includes('id="a--reference-heading"'));

  const duplicateAnchors = referenceAnchors("roster", [
    { title: "A" },
    { title: "A" },
    { title: "A-2" },
    { title: "A" },
  ]);
  assert.deepEqual(duplicateAnchors, ["roster-a", "roster-a-3", "roster-a-2", "roster-a-4"]);
  assert.equal(new Set(duplicateAnchors).size, duplicateAnchors.length, "natural suffix collisions still get unique anchors");

  const unicodeAnchors = referenceAnchors("reference", [
    { title: "青の門" },
    { title: "符号！" },
    { title: "✨" },
    { title: "" },
    { title: "青の門" },
  ]);
  assert.deepEqual(unicodeAnchors, [
    "reference-青の門",
    "reference-符号",
    "reference-u-2728",
    "reference-item",
    "reference-青の門-2",
  ]);
  assert.equal(referenceAnchor("reference", "青の門"), "reference-青の門");

  assert.equal(isSameReferencePageHref("/places/", "/places"), true);
  assert.equal(isSameReferencePageHref("/places?view=map", "/places"), false);
  assert.equal(isSameReferencePageHref("/places#entry", "/places"), false);
  assert.equal(isSameReferencePageHref("https://outside.example/places", "/places"), false);
  assert.equal(isSameReferencePageHref("/places", "/places?view=map"), false);

  assert.deepEqual(
    Object.keys(defaultReferenceDirectoryLabels).sort(),
    Object.keys(localizedLabels).sort(),
    "custom labels replace the complete serializable UI contract",
  );
} finally {
  delete assets[fixtureAssetId];
}

console.log("ReferenceDirectory checks passed: SSR content, labels, optional assets, filters, links, unique Unicode anchors, and DOM IDs.");
