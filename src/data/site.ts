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
  name: "Onimusha: Way of the Sword Guide",
  brandMark: "OW",
  gameName: "Onimusha: Way of the Sword",
  domain: "onimushawayofthesword.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://onimushawayofthesword.pro").replace(/\/$/, ""),
  description:
    "An unofficial Onimusha: Way of the Sword launch hub (Capcom, Steam AppID 2638890) covering the September 3, 2026 multi-platform release, demo, editions, Oni Gauntlet and Issen combat, Genma boss lineup, and Musashi Miyamoto protagonist for launch-week players.",
  tagline:
    "Capcom's return to the Onimusha franchise — release, demo, editions, Oni Gauntlet and Issen combat, Genma bosses, and Musashi Miyamoto on launch day.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Onimusha: Way of the Sword Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Onimusha: Way of the Sword Steam store page (AppID 2638890)",
      href: "https://store.steampowered.com/app/2638890",
      description:
        "Official Steam listing with the September 3, 2026 release date, multi-platform launch on Steam / PlayStation 5 / Xbox Series X|S / Nintendo Switch 2 / Epic Games Store, three editions at $69.99 / $79.99 / $89.99, demo availability, and Steam achievements confirmation.",
    },
    {
      label: "Onimusha: Way of the Sword Steam Community hub (AppID 2638890)",
      href: "https://steamcommunity.com/app/2638890",
      description:
        "Community hub for Steam Discussions, announcements, the expanded demo with a second \"fearsome boss,\" the Kubi Akari charm carry-over reward, Sealed Curse sword and Lion Dog charm pre-order bonuses, and the New Game+ Carnage Difficulty loop.",
    },
    {
      label: "SteamDB listing for Onimusha: Way of the Sword (AppID 2638890)",
      href: "https://steamdb.info/app/2638890/",
      description:
        "Wiki / reference cross-check confirming Steam AppID 2638890 metadata, platform scope, demo depot, and discovery reference for the launch-week research pass.",
    },
    {
      label: "Capcom Spotlight Game Overview Trailer",
      href: "https://www.youtube.com/@capcomchannel",
      description:
        "Official Capcom Spotlight trailer that frames Onimusha: Way of the Sword as Capcom's return to the dormant Onimusha franchise and introduces the multi-platform launch context.",
    },
    {
      label: "Capcom release-date advancement announcement",
      href: "https://www.capcom-games.com/onimusha-way-of-the-sword/en-us/",
      description:
        "Official Capcom announcement that the release date advanced from the original September 25, 2026 window, first to September 4 and then to the final September 3, 2026 launch.",
    },
    {
      label: "HowToShark launch-window review",
      href: "https://howtoshark.com/onimusha-way-of-the-sword-review",
      description:
        "Launch-window review framing Oni Gauntlet risk-reward combat, the demo entry point, multi-platform release context, and the Switch 2 launch position.",
    },
    {
      label: "Dengeki PlayStation launch-window review",
      href: "https://dengekiplaystation.com/review/onimusha-way-of-the-sword/",
      description:
        "Launch-window review covering Genma faction context and confirming the Genma siblings Ifuu and Burai as paired duelist bosses.",
    },
    {
      label: "RPG Site launch-window review",
      href: "https://www.rpgsite.net/review/onimusha-way-of-the-sword",
      description:
        "Launch-window review framing Issen as the named counter technique inside the Oni Gauntlet system and highlighting the Genma Musashi notable encounter.",
    },
    {
      label: "Push Square launch-window review",
      href: "https://www.pushsquare.com/reviews/onimusha-way-of-the-sword",
      description:
        "Launch-window review covering the multi-platform launch context with a PlayStation 5 focus, useful for players comparing PS5 and Switch 2 versions.",
    },
    {
      label: "WorthPlaying launch-window review",
      href: "https://worthplaying.com/article/2025/reviews/onimusha-way-of-the-sword-review/",
      description:
        "Launch-window review framing the Oni Gauntlet as a risk-reward parry and counter system, the Oni preset as the hardest difficulty, and chain Issen as the highest-tempo combat moment.",
    },
    {
      label: "GameSpot launch-window review",
      href: "https://www.gamespot.com/reviews/onimusha-way-of-the-sword-review/",
      description:
        "Launch-window review covering the Sasaki Ganryu demo duel as the first Issen training encounter and the Genma encounter framing for launch-week readers.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide for Onimusha: Way of the Sword. Current-game facts are sourced from the official Steam Store page (AppID 2638890), the Steam Community hub, SteamDB, the Capcom Spotlight Game Overview Trailer, the Capcom release-date advancement announcement, and the launch-window reviews from HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot as of 2026-09-02. Details not announced by Capcom are labeled with dated status statements rather than guessed from neighboring facts.",
};