import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: `${site.gameName} Guide Hub`,
  seoTitle: `${site.gameName} Guide Hub | Wiki, Guides, Release Date, FAQ`,
  metaDescription:
    "A clean guide hub template with wiki notes, starter guides, release information, FAQs, and trust pages for a game攻略站 launch.",
  summary:
    "Start here for the wiki index, guide categories, launch information, and frequently asked questions.",
  hero: {
    eyebrow: "Unofficial guide hub",
    subtitle: site.tagline,
    ctas: [
      { label: "Open Wiki", href: "/wiki" },
      { label: "Browse Guides", href: "/guides" },
    ],
  },
  quickAnswer:
    "This homepage acts as the central guide hub for the selected game, linking users to wiki notes, guides, release information, and FAQs.",
  keyFacts: [
    { label: "Site type", value: "Unofficial guide hub" },
    { label: "Start here", value: "Guides and reference index" },
    { label: "Coverage", value: "Game basics and confirmed availability" },
  ],
  modules: [
    {
      id: "find-help", type: "guide-index", heading: "Find your next answer", columns: 1,
      groups: [
        { title: "Start playing", items: [
          { label: "Beginner guides", description: "Learn the basics and choose your next step.", href: "/guides" },
          { label: "Quick answers", description: "Find help with a specific question.", href: "/faq" },
        ] },
        { title: "Look something up", items: [
          { label: "Wiki and reference", description: "Browse game systems and reference topics.", href: "/wiki" },
          { label: "Release and platforms", description: "Check confirmed availability information.", href: "/release-date" },
        ] },
      ],
    },
    {
      id: "featured", type: "featured-guides", heading: "Start with the essentials",
      lead: { title: "Beginner guides", href: "/guides", description: "A clear place to start, with links to the next useful answer." },
      supporting: [
        { title: "Reference index", href: "/wiki", description: "Go directly to the game topic you need." },
        { title: "Frequently asked questions", href: "/faq", description: "Short answers and further reading." },
      ],
    },
  ],
  faqIds: ["what-is-this-site", "is-official"],
  relatedPageIds: ["wiki", "guides", "release-date", "faq"],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-06-18",
};
