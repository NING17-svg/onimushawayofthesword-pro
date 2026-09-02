// Template fixture pages.
//
// The template validator (scripts/validate-template-contract.ts) hardcodes a
// small set of fixture pages with IDs "guides", "wiki", and "faq" for
// rendering and recent-updates tests. Without these fixtures the validator's
// non-null assertions throw at runtime, so this file provides the minimum
// stub pages that satisfy the fixture expectations while remaining excluded
// from the user-facing navigation, primary navigation, footer navigation, and
// recent-updates output by virtue of their pageType values.

import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-09-02";

export const templateFixturePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides-fixture",
    url: "/guides-fixture",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Guides — Fixture",
    seoTitle: "Guides Fixture | Onimusha Way of the Sword",
    metaDescription:
      "Internal fixture page used by the template validator; not linked from user-facing navigation.",
    summary:
      "Template fixture used to satisfy validator fixture expectations for the guides page id.",
    hero: {
      eyebrow: "Fixture",
      subtitle: "Internal fixture page — not linked from user-facing navigation.",
      ctas: [{ label: "Home", href: "/" }],
    },
    quickAnswer:
      "Internal fixture page that exists solely to satisfy the template validator's hardcoded fixture expectations for the guides page id.",
    keyFacts: [
      { label: "Purpose", value: "Validator fixture" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "fixture-note",
        type: "prose",
        heading: "Validator fixture",
        body:
          "This page is an internal fixture used to satisfy the template validator's hardcoded fixture expectations. It is not part of the user-facing navigation and is not linked from the homepage or footer.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["home"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki-fixture",
    url: "/wiki-fixture",
    pageType: "wiki",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Wiki — Fixture",
    seoTitle: "Wiki Fixture | Onimusha Way of the Sword",
    metaDescription:
      "Internal fixture page used by the template validator; not linked from user-facing navigation.",
    summary:
      "Template fixture used to satisfy validator fixture expectations for the wiki page id.",
    hero: {
      eyebrow: "Fixture",
      subtitle: "Internal fixture page — not linked from user-facing navigation.",
      ctas: [{ label: "Home", href: "/" }],
    },
    quickAnswer:
      "Internal fixture page that exists solely to satisfy the template validator's hardcoded fixture expectations for the wiki page id.",
    keyFacts: [
      { label: "Purpose", value: "Validator fixture" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "fixture-note",
        type: "prose",
        heading: "Validator fixture",
        body:
          "This page is an internal fixture used to satisfy the template validator's hardcoded fixture expectations. It is not part of the user-facing navigation and is not linked from the homepage or footer.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["home"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq-fixture",
    url: "/faq-fixture",
    pageType: "faq",
    presentation: {
      shell: "content",
      variant: "reading-full",
    },
    h1: "Onimusha Way of the Sword FAQ — Fixture",
    seoTitle: "FAQ Fixture | Onimusha Way of the Sword",
    metaDescription:
      "Internal fixture page used by the template validator; not linked from user-facing navigation.",
    summary:
      "Template fixture used to satisfy validator fixture expectations for the faq page id.",
    hero: {
      eyebrow: "Fixture",
      subtitle: "Internal fixture page — not linked from user-facing navigation.",
      ctas: [{ label: "Home", href: "/" }],
    },
    quickAnswer:
      "Internal fixture page that exists solely to satisfy the template validator's hardcoded fixture expectations for the faq page id.",
    keyFacts: [
      { label: "Purpose", value: "Validator fixture" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "fixture-note",
        type: "prose",
        heading: "Validator fixture",
        body:
          "This page is an internal fixture used to satisfy the template validator's hardcoded fixture expectations. It is not part of the user-facing navigation and is not linked from the homepage or footer.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["home"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
];