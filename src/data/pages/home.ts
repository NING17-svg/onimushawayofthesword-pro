import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-09-02";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Onimusha Way of the Sword — Launch Hub",
  seoTitle:
    "Onimusha Way of the Sword — Release, Demo, and Editions",
  metaDescription:
    "Onimusha Way of the Sword launches September 3, 2026 on PC, PS5, Xbox Series X|S, Switch 2, and Epic. Learn about the demo, editions, combat, and bosses.",
  summary:
    "Launch-week US English hub for Capcom's Onimusha: Way of the Sword (Steam AppID 2638890): September 3, 2026 release, demo on Steam / PS5 / Xbox / Epic, three editions, Oni Gauntlet and Issen combat, Genma boss lineup, and Musashi Miyamoto protagonist.",
  hero: {
    eyebrow: "Onimusha: Way of the Sword launch hub",
    subtitle:
      "Capcom returns to the dormant Onimusha franchise on September 3, 2026 with a multi-platform launch on Steam (AppID 2638890), PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store. Miyamoto Musashi is the fixed protagonist, the Oni Gauntlet risk-reward parry and counter plus the Issen named counter are the central combat systems, and the confirmed Genma boss lineup includes Sasaki Ganryu, the siblings Ifuu and Burai, and Genma Musashi. Every fact on this site is sourced to the Steam store page, the Steam Community hub, SteamDB, the Capcom Spotlight trailer, and the launch-window reviews as of 2026-09-02.",
    ctas: [
      { label: "Release & Platforms", href: "/release" },
      { label: "Combat Mechanics", href: "/combat" },
      { label: "Bosses", href: "/bosses" },
    ],
  },
  quickAnswer:
    "Onimusha: Way of the Sword is Capcom's return to the dormant Onimusha franchise, launching September 3, 2026 across Steam (AppID 2638890), PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store. A free demo is live on Steam, PS5, Xbox, and Epic, and three editions are available for pre-order. The game stars Miyamoto Musashi and centers on sword combat with the Oni Gauntlet parry system, Issen counters, and Oni Awakening transformation. The confirmed boss lineup includes Sasaki Ganryu, the Genma siblings Ifuu and Burai, and Genma Musashi.",
  keyFacts: [
    { label: "Developer / publisher", value: "Capcom" },
    { label: "Release date", value: "September 3, 2026 (advanced from September 25, 2026)" },
    { label: "Platforms", value: "Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, Epic Games Store" },
    { label: "Steam AppID", value: "2638890" },
    { label: "Editions", value: "Standard $69.99 / Deluxe $79.99 / Premium Deluxe $89.99" },
    { label: "Demo", value: "Steam, PlayStation 5, Xbox, Epic Games Store" },
    { label: "Protagonist", value: "Miyamoto Musashi (Oni Awakening transformation)" },
    { label: "Signature combat", value: "Oni Gauntlet parry and Issen named counter" },
  ],
  modules: [
    {
      id: "home-release",
      type: "prose",
      heading: "Release Status and Platforms for Onimusha Way of the Sword",
      body:
        "Capcom self-develops and self-publishes Onimusha: Way of the Sword, marking the franchise's first mainline entry in roughly twenty years. The Steam store page lists a release date of September 3, 2026, advanced twice from the originally announced September 25, 2026 slot. The current launch covers Steam (AppID 2638890), PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store, all on the same day.\n\nThe Standard Edition is listed at $69.99 on the Steam store page, with a Deluxe Edition at $79.99 and a Premium Deluxe Edition at $89.99. Region-specific pricing outside US dollars is not announced as of 2026-09-02. A separate [release status page](/release/) tracks the full release-date advancement timeline, and the [editions page](/editions/) walks through what each tier includes.",
    },
    {
      id: "home-demo",
      type: "prose",
      heading: "Demo Content and Kubi Akari Reward",
      body:
        "A free demo is publicly available on Steam, PlayStation 5, Xbox, and the Epic Games Store ahead of launch. The demo opens in the Kiyomizu-dera Temple area and culminates in a boss fight against Sasaki Ganryu, the rival confirmed for the full game. An expanded demo later added a new area and another \"fearsome boss\" to the rotation, with each demo session lasting about thirty minutes.\n\nIf you keep the demo save, the Kubi Akari charm carries into the full game. That makes the demo a natural preview of the core combat loop, including Oni Gauntlet timing and Issen counters, before the September 3 release. The full [demo guide](/demo/) covers cross-store availability and what changes between the demo and the full release.",
    },
    {
      id: "home-editions",
      type: "prose",
      heading: "Editions and Pre-Order Bonuses",
      body:
        "The Standard Edition is offered in both physical and digital formats at $69.99 on the Steam store page. The Deluxe Edition at $79.99 is digital-only and bundles the Deluxe Kit cosmetics plus extra charms. The Premium Deluxe Edition at $89.99 is also digital-only and adds ally outfits along with a digital soundtrack on top of the Deluxe content.\n\nEvery pre-order, regardless of edition, includes the Sealed Curse sword appearance and the Lion Dog charm. The Sealed Curse is a cosmetic sword skin, while the Lion Dog charm is a usable equipment item carried into Musashi's loadout. The [editions and pricing page](/editions/) lists what each tier contains and how the pre-order bonuses interact with upgrades.",
    },
    {
      id: "home-combat",
      type: "prose",
      heading: "Combat Entry Point: Oni Gauntlet and Issen",
      body:
        "The core combat system is built around sword play layered with the Oni Gauntlet, a risk-reward perfect-timing parry and counter mechanic. Successful parries open up Issen, the named counter technique that converts a blocked attack into a punishing riposte. Mistime either window and Musashi takes heavy damage, which is why the mechanic is often described as a \"do or die\" timing test rather than a passive block.\n\nMusashi also has access to the Oni Awakening transformation during play. Awakening changes his stance, offense, and Oni Gauntlet behavior, giving players a second tempo layer during long games. The [combat mechanics page](/combat/) covers the system at a foundation level, and the [Issen guide](/issen/) breaks down timing rules and chain-Issen applications.",
    },
    {
      id: "home-bosses",
      type: "prose",
      heading: "Confirmed Genma Boss Lineup",
      body:
        "The Genma return as the central enemy faction, and four boss encounters have been confirmed by Capcom and launch-window outlets as of 2026-09-02. Sasaki Ganryu appears both as Musashi's rival in the story and as the demo's signature boss fight. The siblings Ifuu and Burai are confirmed Genma bosses, and Genma Musashi (Demon Musashi) is presented as a notable boss tied to Musashi's own Oni Awakening arc.\n\nBeyond this confirmed roster, additional hidden bosses, exact boss HP values, and damage scaling numbers are not announced as of 2026-09-02. The [bosses page](/bosses/) compiles each confirmed encounter with its supporting source tier.",
    },
    {
      id: "home-characters",
      type: "prose",
      heading: "Miyamoto Musashi as Protagonist",
      body:
        "Miyamoto Musashi is the single fixed protagonist of Onimusha: Way of the Sword. He is portrayed as a swordsman caught up in the Genma conflict, and his Oni Awakening transformation is the narrative bridge between his human sword style and the Oni Gauntlet system. There is no character creation or customization system; Musashi is a complete, written lead rather than a blank slate.\n\nThe Genma cast around him includes Sasaki Ganryu as his direct rival and the siblings Ifuu and Burai as recurring antagonists. Specific full voice-cast credits beyond what Capcom and launch-window reviews have already named are not announced as of 2026-09-02. The [characters page](/characters/) expands the confirmed cast and what each role brings to the story.",
    },
    {
      id: "home-fact-boundary",
      type: "callout",
      tone: "caution",
      title: "Fact boundary — 2026-09-02",
      body:
        "Every hard launch fact on this site is dated to the 2026-09-02 research pass and sourced to the Steam store page for AppID 2638890, the Steam Community hub, SteamDB, the Capcom Spotlight Game Overview Trailer, the Capcom release-date advancement announcement, and the launch-window reviews from HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot. Region-specific pricing beyond US dollars, Nintendo Switch 2 exclusive content, Nintendo Switch 2 performance parity against PlayStation 5 or Xbox Series X|S, detailed GPU and CPU tier recommendations, exact completionist hours, boss HP values, hidden bosses, hidden armor sets, the full Steam achievement list prior to release, specific numeric review scores until the embargo lifts, exact frame-data windows for Issen timing, and exact per-level death counts are not announced as of 2026-09-02 and are labeled with dated status statements rather than guessed from neighboring facts.",
    },
  ],
  faqIds: [
    "onimusha-way-of-the-sword-release-date",
    "onimusha-way-of-the-sword-demo-availability",
    "onimusha-way-of-the-sword-demo-reward",
    "onimusha-way-of-the-sword-price",
    "onimusha-way-of-the-sword-pre-order-bonuses",
  ],
  relatedPageIds: [
    "fixed-release-platforms-en-us",
    "fixed-system-requirements-en-us",
    "fixed-demo-en-us",
    "fixed-editions-pricing-en-us",
    "fixed-switch-2-version-en-us",
    "fixed-length-en-us",
    "fixed-difficulty-settings-en-us",
    "fixed-combat-mechanics-en-us",
    "fixed-issen-guide-en-us",
    "fixed-bosses-en-us",
    "fixed-characters-en-us",
    "fixed-items-equipment-en-us",
    "fixed-trophies-achievements-en-us",
    "fixed-reviews-press-en-us",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: LAST_REVIEWED,
};