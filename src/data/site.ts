import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Onimusha: Way of the Sword",
  brandMark: "OWS",
  gameName: "Onimusha: Way of the Sword",
  domain: "onimushawayofthesword.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://onimushawayofthesword.pro").replace(/\/$/, ""),
  description:
    "Unofficial fan guide for Onimusha: Way of the Sword (Capcom, 2026): combat basics, Issen timing, Oni Gauntlet tiers, bosses, weapons, collectibles, trophy roadmap and platform performance.",
  tagline: "Combat, bosses, Oni Gauntlet tiers and collectibles for Onimusha: Way of the Sword (Capcom, 2026).",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this guide and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "Onimusha: Way of the Sword fan guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Onimusha: Way of the Sword on Steam",
      href: "https://store.steampowered.com/app/2638890",
      description: "Capcom Steam store page (AppID 2638890): release, system requirements, RE Engine.",
    },
    {
      label: "Official Capcom product page",
      href: "https://www.onimusha.capcom.com/us/game",
      description: "Capcom publisher confirmation for Onimusha: Way of the Sword.",
    },
  ],
  disclaimer:
    "Unofficial fan guide; not affiliated with Capcom. Game facts verified against the Steam store page, Capcom product page, news.xbox.com combat guide, PowerPyx trophy roadmap; in-game details may vary by patch.",
};