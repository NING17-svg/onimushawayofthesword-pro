import type { PageContent } from "../../src/types/content";
import type { ShowcaseGameId } from "./v4-showcase-themes";
import sourceContent from "./v4-showcase-content.json";
import type { GuideModule } from "../../src/types/modules";

export interface ShowcaseCase { id: ShowcaseGameId; game: string; assetId?: string; context: string; headings: string[] }
export const showcaseCases: ShowcaseCase[] = [
  { id: "rivage", game: "Rivage", assetId: "rivage-scene", context: "Walkthrough and puzzle navigation", headings: ["Walkthrough", "Puzzle help", "Beginner guide"] },
  { id: "how-to-fish", game: "How to Fish", assetId: "how-to-fish-scene", context: "Progression, combat and co-op", headings: ["Island progression", "Weapons and bosses", "Co-op help"] },
  { id: "tears-of-metal", game: "Tears of Metal", context: "Characters and combat reference", headings: ["Hero selection", "Combat guides", "Reference index"] },
  { id: "aion-2", game: "AION 2", context: "Class comparison and character reference", headings: ["Class selection", "Compare playstyles", "Beginner questions"] },
];

function base(id: string, title: string): PageContent {
  return { id, translationKey: id, locale: "en-US", routeKind: "fixed", slug: id, url: `/${id}.html`, pageType: "guides", presentation: { shell: "content" }, h1: title, seoTitle: title, metaDescription: title,
    summary: "Local layout preview using recorded source excerpts.", hero: { subtitle: "", ctas: [] }, quickAnswer: "", keyFacts: [], modules: [], faqIds: [], relatedPageIds: [], schemaTypes: ["Article"], sourceStatus: "internal", lastReviewed: "2026-09-30" };
}

export function makeShowcaseHome(entry: ShowcaseCase): PageContent {
  const detailUrl = `/${entry.id}-detail.html`;
  const introductions: Record<string,string> = {
    rivage: "Stuck in the loop? Find the walkthrough section or puzzle you need, then continue exploring A.R.E.S.",
    "how-to-fish": "Find your next island, prepare for its boss, or get your co-op session started.",
    "tears-of-metal": "Choose a hero and find combat reference notes for your next run.",
    "aion-2": "Compare class playstyles and separate confirmed information from what is still unknown.",
  };
  return { ...base(`showcase-${entry.id}`, entry.game), routeKind: "home", slug: "", url: `/${entry.id}.html`, pageType: "home", presentation: { shell: "home", variant: entry.id === "how-to-fish" ? "visual-cover" : undefined },
    hero: { eyebrow: "Independent game guide", subtitle: introductions[entry.id], assetId: entry.assetId, ctas: [{ label: "Browse guides", href: detailUrl }, { label: "Explore the index", href: "#guide-library" }] },
    quickAnswer: "This local preview demonstrates a reusable homepage composition. Its links open a layout sample; the source excerpts are historical and have not been rechecked as current game advice.",
    keyFacts: [{ label: "Guide focus", value: entry.context }, { label: "Start here", value: entry.headings[0] }],
    modules: [
      { id: "guide-library", type: "guide-index", heading: "Explore the guide", columns: 1, groups: [{ title: "Choose a topic", items: entry.headings.map(label => ({ label, href: detailUrl })) }] },
      { id: "featured-help", type: "featured-guides", heading: "A useful place to start", lead: { title: entry.headings[0], href: detailUrl, description: "Open a focused guide with a direct answer and a clear reading path.", assetId: entry.assetId }, supporting: entry.headings.slice(1).map(title => ({ title, href: detailUrl, description: "Find the information you need for your next decision." })) },
      { id: "next-steps", type: "progression", heading: "Find your next step", stages: entry.headings.map((title, i) => ({ title, href: detailUrl, label: ["Learn", "Choose", "Continue"][i], description: "Go to the guide that matches what you are trying to do." })) },
    ],
  };
}

export function makeShowcaseDetail(entry: ShowcaseCase): { page: PageContent; source: string } {
  const sample = sourceContent[entry.id as keyof typeof sourceContent];
  const modules = sample.modules as GuideModule[];
  const page: PageContent = { ...base(`showcase-${entry.id}-detail`, sample.h1), hero: { eyebrow: entry.game, subtitle: "A focused answer, with readable sections and a persistent guide index.", ctas: [{ label: "Back to the guide", href: `/${entry.id}.html` }] }, quickAnswer: sample.quickAnswer,
    modules, keyFacts: [{ label: "Format", value: entry.context }] };
  return { page, source: sample.source };
}
