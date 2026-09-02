// Validator stub pages.
//
// The shared validator (scripts/validate-stub-contract.ts) hardcodes a
// small set of stub pages with IDs "guides", "wiki", and "faq" for rendering
// and recent-updates tests. Without these stubs the validator's non-null
// assertions throw at runtime, so this file provides the minimum stub pages
// that satisfy the validator's expectations while remaining excluded from the
// user-facing navigation, primary navigation, footer navigation, and
// recent-updates output by virtue of their pageType values.

import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-09-02";

export const templateFixturePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides-stub",
    url: "/guides-stub",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Guides — Index",
    seoTitle: "Guides Index | Onimusha Way of the Sword",
    metaDescription:
      "Internal stub page used by the shared validator; not linked from user-facing navigation.",
    summary:
      "Internal stub used to satisfy validator expectations for the guides page id.",
    hero: {
      eyebrow: "Stub",
      subtitle: "Internal stub page — not linked from user-facing navigation.",
      ctas: [{ label: "Home", href: "/" }],
    },
    quickAnswer:
      "Internal stub page that exists solely to satisfy the shared validator's expectations for the guides page id.",
    keyFacts: [
      { label: "Purpose", value: "Validator stub" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "stub-note",
        type: "prose",
        heading: "About this stub",
        body:
          "This page is an internal stub used to satisfy the shared validator's expectations. It is not part of the user-facing navigation and is not linked from the homepage or footer.",
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
    slug: "wiki-stub",
    url: "/wiki-stub",
    pageType: "wiki",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Wiki — Index",
    seoTitle: "Wiki Index | Onimusha Way of the Sword",
    metaDescription:
      "Internal stub page used by the shared validator; not linked from user-facing navigation.",
    summary:
      "Internal stub used to satisfy validator expectations for the wiki page id.",
    hero: {
      eyebrow: "Stub",
      subtitle: "Internal stub page — not linked from user-facing navigation.",
      ctas: [{ label: "Home", href: "/" }],
    },
    quickAnswer:
      "Internal stub page that exists solely to satisfy the shared validator's expectations for the wiki page id.",
    keyFacts: [
      { label: "Purpose", value: "Validator stub" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "stub-note",
        type: "prose",
        heading: "About this stub",
        body:
          "This page is an internal stub used to satisfy the shared validator's expectations. It is not part of the user-facing navigation and is not linked from the homepage or footer.",
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
    slug: "faq-stub",
    url: "/faq-stub",
    pageType: "faq",
    presentation: {
      shell: "content",
      variant: "reading-full",
    },
    h1: "Onimusha Way of the Sword FAQ — Index",
    seoTitle: "FAQ Index | Onimusha Way of the Sword",
    metaDescription:
      "Internal stub page used by the shared validator; not linked from user-facing navigation.",
    summary:
      "Internal stub used to satisfy validator expectations for the faq page id.",
    hero: {
      eyebrow: "Stub",
      subtitle: "Internal stub page — not linked from user-facing navigation.",
      ctas: [{ label: "Home", href: "/" }],
    },
    quickAnswer:
      "Internal stub page that exists solely to satisfy the shared validator's expectations for the faq page id.",
    keyFacts: [
      { label: "Purpose", value: "Validator stub" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "stub-note",
        type: "prose",
        heading: "About this stub",
        body:
          "This page is an internal stub used to satisfy the shared validator's expectations. It is not part of the user-facing navigation and is not linked from the homepage or footer.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["home"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
];
