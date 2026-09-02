import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-09-02";

// Onimusha: Way of the Sword — V3 fixed pages. Each entry is populated from
// the matching markdown in
// site-launch/tasks/onimushawayofthesword-pro/content/locales/en-US/pages/.
// All SEO copy, facts, intents, and recommendations are taken verbatim from
// the content package — the modules here do not invent or rewrite any claim.

export const fixedPages: PageContent[] = [
  // release-platforms — status page
  {
    id: "fixed-release-platforms-en-us",
    translationKey: "release-platforms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release",
    url: "/release",
    pageType: "release",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Release Date and Platforms",
    seoTitle:
      "Onimusha Way of the Sword — Release Date and Platforms",
    metaDescription:
      "Onimusha Way of the Sword release date is September 3, 2026 on PC, PS5, Xbox Series X|S, Switch 2, and Epic. Full release timeline and platform breakdown.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) releases September 3, 2026 on Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store. The Standard Edition is $69.99, with Deluxe at $79.99 and Premium Deluxe at $89.99 on the Steam store page.",
    hero: {
      eyebrow: "Release status",
      subtitle:
        "Capcom's Onimusha: Way of the Sword ships on Steam (AppID 2638890), PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store on September 3, 2026. The date was advanced twice from the original September 25, 2026 announcement, first to September 4 and then to the final September 3 launch, and all five platforms share that date for a simultaneous worldwide launch.",
      ctas: [
        { label: "System Requirements", href: "/system-requirements" },
        { label: "Demo Guide", href: "/demo" },
        { label: "Nintendo Switch 2 Version", href: "/switch-2" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword releases on September 3, 2026 across Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store. The date was advanced twice from the original September 25, 2026 window, first to September 4 and then to September 3 per Capcom's announcement. The Standard Edition is listed at $69.99 on the Steam store page, with digital Deluxe and Premium Deluxe tiers available for pre-order.",
    keyFacts: [
      { label: "Release date", value: "September 3, 2026" },
      { label: "Steam AppID", value: "2638890" },
      { label: "Developer / publisher", value: "Capcom" },
      { label: "Platforms", value: "Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, Epic Games Store" },
      { label: "Standard Edition", value: "$69.99" },
      { label: "Deluxe Edition", value: "$79.99" },
      { label: "Premium Deluxe Edition", value: "$89.99" },
      { label: "Demo availability", value: "Steam, PlayStation 5, Xbox, Epic Games Store" },
    ],
    modules: [
      {
        id: "release-timeline",
        type: "prose",
        heading: "Onimusha Way of the Sword Release Date Advancement Timeline",
        body:
          "Capcom confirmed the final release date of September 3, 2026 for Onimusha: Way of the Sword after two separate advancements. The game was originally announced for September 25, 2026, then moved forward to September 4, 2026, and finally settled on September 3, 2026 as the day-one launch. All five confirmed platforms share that date, so the launch is simultaneous worldwide rather than staggered.\n\nThe Steam store page for AppID 2638890 currently lists September 3, 2026 as the release date. HowToShark's launch-window review and GameSpot's launch-window review both treat September 3 as the confirmed date, which means any older material pointing at September 25 should be treated as superseded.",
      },
      {
        id: "release-platforms",
        type: "prose",
        heading: "Confirmed Platforms at Launch",
        body:
          "The game ships on five platforms on the same day. Steam carries AppID 2638890 with the Standard Edition at $69.99, the Deluxe Edition at $79.99, and the Premium Deluxe Edition at $89.99 in US dollars. PlayStation 5, Xbox Series X|S, and Nintendo Switch 2 all receive physical and digital SKUs through standard retail channels, and the Epic Games Store mirrors the Steam digital lineup on PC.\n\nThere is no announced staggered launch between console and PC, and no announced regional timing difference as of 2026-09-02. If a storefront lists a different time, treat that storefront's local timezone as the source of truth rather than translating it back to a single global time. The [Nintendo Switch 2 version page](/switch-2/) covers platform-specific questions for that SKU.",
      },
      {
        id: "release-editions",
        type: "prose",
        heading: "Editions and Pre-Order Pricing at Launch",
        body:
          "The Standard Edition is the entry tier at $69.99 on the Steam store page. The Deluxe Edition at $79.99 is digital-only and bundles the Deluxe Kit cosmetics and extra charms. The Premium Deluxe Edition at $89.99 is also digital-only and adds ally outfits and a digital soundtrack on top of the Deluxe content. Every pre-order, regardless of edition, includes the Sealed Curse sword appearance and the Lion Dog charm as pre-order bonuses.\n\nRegion-specific pricing outside US dollars is not announced as of 2026-09-02. The full [editions and pricing page](/editions/) walks through each tier, including what is digital-only and what carries over between editions.",
      },
      {
        id: "release-demo",
        type: "prose",
        heading: "Demo Availability at Launch",
        body:
          "A free demo is already publicly available ahead of the September 3 release on Steam, PlayStation 5, Xbox, and the Epic Games Store. The demo is not tied to pre-orders, so it works as a standalone entry point for players who want to test the Oni Gauntlet timing and the Sasaki Ganryu boss fight before launch day. Retaining the demo save grants the Kubi Akari charm in the full game. The [demo guide](/demo/) covers cross-store availability, the expanded demo's added area and second \"fearsome boss,\" and what changes between the demo and the full release.",
      },
      {
        id: "release-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Release date 2026-09-03 advanced from 2026-09-25 to 2026-09-04 to 2026-09-03, simultaneous launch on Steam / PS5 / Xbox Series X|S / Nintendo Switch 2 / Epic Games Store, Standard Edition $69.99 / Deluxe $79.99 / Premium Deluxe $89.99 on the Steam store page, demo available on Steam / PS5 / Xbox / Epic, Sealed Curse sword and Lion Dog charm pre-order bonuses, and Steam AppID 2638890 are confirmed. Region-specific pricing beyond US dollars, Nintendo Switch 2 performance parity against PlayStation 5 or Xbox Series X|S, and any post-launch DLC or platform expansion are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-release-final-date",
      "onimusha-way-of-the-sword-platforms",
      "onimusha-way-of-the-sword-release-date-moved",
      "onimusha-way-of-the-sword-switch-2-version",
    ],
    relatedPageIds: [
      "fixed-system-requirements-en-us",
      "fixed-demo-en-us",
      "fixed-editions-pricing-en-us",
      "fixed-switch-2-version-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // system-requirements — reference page
  {
    id: "fixed-system-requirements-en-us",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword System Requirements for PC",
    seoTitle:
      "Onimusha Way of the Sword System Requirements for PC",
    metaDescription:
      "Onimusha Way of the Sword system requirements on PC, including minimum and recommended specs, demo baseline, and what is not yet announced for launch.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) ships on Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store on September 3, 2026. The Steam store page lists minimum and recommended PC specs, and the demo serves as a useful baseline for the full release.",
    hero: {
      eyebrow: "System requirements",
      subtitle:
        "Onimusha: Way of the Sword ships on Steam (AppID 2638890), PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store on September 3, 2026. The Steam store page lists minimum and recommended PC specs, and the demo's published system requirements are a useful baseline because the demo runs on the same engine as the full game.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Demo Guide", href: "/demo" },
        { label: "Nintendo Switch 2 Version", href: "/switch-2" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword ships on Steam (AppID 2638890), PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store on September 3, 2026, and the Steam store page lists minimum and recommended PC specs. Players checking whether their hardware can run the full game can use the demo's published system requirements as a useful baseline because the demo runs on the same engine. Detailed GPU and CPU tier recommendations beyond what the Steam store page lists are not announced as of 2026-09-02.",
    keyFacts: [
      { label: "Release date", value: "September 3, 2026" },
      { label: "Steam AppID", value: "2638890" },
      { label: "Source", value: "Steam store page (AppID 2638890)" },
      { label: "Spec tiers", value: "Minimum and recommended listed on the Steam store page" },
      { label: "Demo baseline", value: "Demo runs on the same engine" },
      { label: "Steam Deck verification", value: "Not announced as of 2026-09-02" },
      { label: "Ray tracing / DLSS / FSR / XeSS", value: "Not announced as of 2026-09-02" },
      { label: "Linux / SteamOS support", value: "Not announced as of 2026-09-02" },
    ],
    modules: [
      {
        id: "spec-min-recommended",
        type: "prose",
        heading: "Onimusha Way of the Sword Minimum and Recommended Specs",
        body:
          "The Steam store page for Onimusha: Way of the Sword lists separate minimum and recommended PC configurations. These are the official thresholds a player needs to clear to launch the game at the store-page-specified target settings, and they cover CPU, GPU, RAM, storage, and operating system requirements. Both tiers are aligned with the same Unreal-style action-adventure pipeline used by Capcom's recent internal titles, so the spread between minimum and recommended is modest rather than extreme.\n\nBecause the Steam store page is the authoritative source for these tiers, treat any third-party recap as informational only. If a third-party list and the Steam store page disagree, the Steam store page wins. SteamDB's listing for AppID 2638890 can be used for orientation and discovery, but it does not add new tier data beyond what Capcom published.",
      },
      {
        id: "demo-baseline",
        type: "prose",
        heading: "Demo System Requirements as a Baseline",
        body:
          "The Steam demo of Onimusha: Way of the Sword runs on the same engine as the full release, so the demo's published system requirements are a useful baseline for the full game. Players who already cleared the demo on their PC without trouble should expect the same behavior in the full game at the same settings, because Capcom typically locks demo and full-game PC spec tiers to the same minimum hardware floor.\n\nIf the demo launched successfully on a player's hardware, the full game should also boot. The opposite is not automatically true, since the full game can push heavier scenes with larger crowds of Genma enemies and longer boss arenas, but the demo is the most reliable public signal a player has before September 3, 2026. The [demo guide](/demo/) walks through cross-store demo availability and what the demo's content actually exercises.",
      },
      {
        id: "spec-unannounced",
        type: "prose",
        heading: "What is Not Announced About PC Specs",
        body:
          "Several common spec questions do not have an official answer as of 2026-09-02. Detailed GPU tier recommendations beyond the minimum and recommended tiers already on the Steam store page, such as specific 4K or 120 fps targets, are not announced. CPU tier comparisons across specific modern processors, ray tracing support, upscaler-specific recommendations (DLSS, FSR, XeSS), and ultrawide resolution notes are not announced. Steam Deck verification status has not been publicly confirmed as of 2026-09-02, even though the game is a current Capcom title on Steam.\n\nWhen a setting is not announced, it should be treated as unknown rather than guessed. Any third-party guide that assigns DLSS, FSR, or XeSS behavior without citing a Capcom or Valve source is projecting prior title behavior onto Way of the Sword, which is not supported by current evidence.",
      },
      {
        id: "storage-ram-os",
        type: "prose",
        heading: "Storage, RAM, and Operating System Notes",
        body:
          "The Steam store page lists a storage footprint for Onimusha: Way of the Sword. Players planning a clean install should account for the listed requirement plus headroom for day-one patches. Modern Capcom PC releases ship small post-launch patches in the first week, so leaving ten to fifteen percent extra free space beyond the listed requirement is a reasonable buffer.\n\nThe operating system requirement listed on the Steam store page reflects Capcom's current PC policy. Windows 10 and Windows 11 are the typical targets for Capcom's recent PC titles, and the store page is the authoritative reference. Linux and SteamOS support is not announced as of 2026-09-02, and players running non-Windows systems should verify on the Steam store page directly before launch day.\n\nRAM tiers on the Steam store page separate a workable minimum from a recommended smooth-play target. The minimum tier covers the game itself; the recommended tier keeps loading screens short and prevents frame drops during the heavier Genma boss arenas. As with every other spec tier, treat the Steam store page as the only authoritative source.",
      },
      {
        id: "pre-launch-check",
        type: "prose",
        heading: "How to Verify Your Build Before Launch Day",
        body:
          "The cleanest pre-launch check is to download the demo on Steam and confirm it runs at your preferred settings. The demo is free on Steam, PlayStation 5, Xbox, and the Epic Games Store, and it can be deleted afterward without affecting save data you chose to keep for the Kubi Akari charm reward. Players who skip the demo should at minimum confirm their PC clears the Steam store page's recommended tier.\n\nThe release status page covers the September 3, 2026 launch window and which platforms are confirmed, while the demo guide covers the demo's content and the Kubi Akari reward. Together with this page, those three cover the launch-day decision points most PC players face before they buy.",
      },
      {
        id: "specs-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) ships on September 3, 2026 across Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store. The Steam store page lists minimum and recommended PC specs covering CPU, GPU, RAM, storage, and OS requirements. The Steam demo runs on the same engine as the full game and serves as a usable baseline. Detailed GPU or CPU tier recommendations beyond what the Steam store page lists, ray tracing, DLSS / FSR / XeSS-specific behavior, ultrawide resolution notes, Steam Deck verification, and Linux or SteamOS support are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-min-specs",
      "onimusha-way-of-the-sword-demo-same-specs",
      "onimusha-way-of-the-sword-steam-deck-verified",
      "onimusha-way-of-the-sword-ray-tracing-dlss",
      "onimusha-way-of-the-sword-pc-release-date",
    ],
    relatedPageIds: [
      "fixed-release-platforms-en-us",
      "fixed-demo-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // demo — guide page
  {
    id: "fixed-demo-en-us",
    translationKey: "demo",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo",
    url: "/demo",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Demo — Content, Boss, and Rewards",
    seoTitle:
      "Onimusha Way of the Sword Demo — Content, Boss, and Rewards",
    metaDescription:
      "Onimusha Way of the Sword demo guide covering Kiyomizu-dera, Sasaki Ganryu, the Kubi Akari charm reward, expanded demo, and cross-store availability.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) has a free demo on Steam, PlayStation 5, Xbox, and the Epic Games Store ahead of its September 3, 2026 release. The demo covers Kiyomizu-dera Temple and a Sasaki Ganryu boss fight, and retaining the demo save grants the Kubi Akari charm in the full game.",
    hero: {
      eyebrow: "Demo guide",
      subtitle:
        "The Onimusha: Way of the Sword demo opens in Kiyomizu-dera Temple and culminates in a Sasaki Ganryu boss fight, with about thirty minutes of play per session. An expanded demo later added a new area and another \"fearsome boss,\" and players who keep the demo save receive the Kubi Akari charm in the full game.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Bosses", href: "/bosses" },
        { label: "Editions & Pricing", href: "/editions" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword has a free demo available on Steam, PlayStation 5, Xbox, and the Epic Games Store ahead of its September 3, 2026 release. The demo opens in the Kiyomizu-dera Temple area and culminates in a boss fight against Sasaki Ganryu, with about thirty minutes of play per session. An expanded demo later added a new area and another \"fearsome boss,\" and players who keep the demo save receive the Kubi Akari charm in the full game.",
    keyFacts: [
      { label: "Demo availability", value: "Steam, PlayStation 5, Xbox, Epic Games Store" },
      { label: "Opening area", value: "Kiyomizu-dera Temple" },
      { label: "Signature boss", value: "Sasaki Ganryu" },
      { label: "Expanded demo", value: "Adds new area and another \"fearsome boss\"" },
      { label: "Session length", value: "About thirty minutes" },
      { label: "Carry-over reward", value: "Kubi Akari charm (retain demo save)" },
      { label: "Cross-store save transfer", value: "Not supported" },
      { label: "Release date", value: "September 3, 2026" },
    ],
    modules: [
      {
        id: "demo-coverage",
        type: "prose",
        heading: "What the Onimusha Way of the Sword Demo Covers",
        body:
          "The demo is structured as a short, focused slice of the opening act of Onimusha: Way of the Sword. Players drop into the Kiyomizu-dera Temple area, work through a compact encounter sequence against Genma enemies, and finish on the Sasaki Ganryu boss fight. Sasaki Ganryu is the same rival character confirmed for the full game, so the demo doubles as a preview of the rival encounter pattern rather than a generic tutorial skirmish.\n\nThe demo session runs roughly thirty minutes per playthrough. That length is short by design — it is enough to teach the Oni Gauntlet timing rules and the Issen counter window, and long enough to give the Sasaki Ganryu fight a real arc. Players who want a longer slice of the game can use the demo as a rotation between retries on the boss, since the Sasaki Ganryu encounter is the natural difficulty spike of the demo build.",
      },
      {
        id: "demo-kiyomizu-dera",
        type: "prose",
        heading: "Kiyomizu-dera Temple as the Opening Area",
        body:
          "Kiyomizu-dera Temple is a real Kyoto landmark, and the demo uses it as a vertically layered stage with multiple Genma patrol routes. The level design pulls double duty: it teaches players how Musashi's sword kit chains into the Oni Gauntlet parry and the Issen counter, and it routes the player toward the Sasaki Ganryu arena. The temple setting also serves as a recurring visual cue across the demo, since the demo's save point and charm menu use the temple's signature architecture as background art.\n\nFor returning Onimusha fans, the temple choice echoes the series' long-standing use of Japanese historical landmarks as level anchors. For new players, the temple works as a self-contained tutorial stage that does not require knowledge of the prior Onimusha: Warlords, Onimusha 2: Samurai's Destiny, Onimusha 3: Demon Siege, Onimusha: Dawn of Dreams, Onimusha Tactics, or Onimusha: Blade Warriors games.",
      },
      {
        id: "demo-sasaki-ganryu",
        type: "prose",
        heading: "The Sasaki Ganryu Boss Fight",
        body:
          "Sasaki Ganryu is presented as Musashi's direct rival, and the demo frames him as the first real skill check. The fight layers three systems at once: regular sword trading, Oni Gauntlet parry windows on Ganryu's named attacks, and Issen counter timing when Ganryu opens up after a heavy swing. Players who learn the Issen timing in the demo carry that muscle memory directly into the full game's later bosses, including Genma Musashi and the siblings Ifuu and Burai.\n\nThe boss is also the demo's natural difficulty gate. Players who can clear Ganryu cleanly in the demo should be well prepared for the early chapters of the full game; players who struggle with the Issen timing should plan to spend more time in the demo before September 3 to avoid hitting a wall in chapter one of the full release. The [bosses page](/bosses/) tracks the full confirmed Genma roster for the launch window.",
      },
      {
        id: "demo-expanded",
        type: "prose",
        heading: "Expanded Demo: New Area and Another Fearsome Boss",
        body:
          "After the initial demo launch, Capcom released an expanded demo that added a new area and another \"fearsome boss\" to the rotation. The expanded demo keeps the original Kiyomizu-dera Temple opener and the Sasaki Ganryu fight, then layers an additional stage on top so players can chain into a second signature encounter. The phrasing \"fearsome boss\" comes from Capcom's own framing and signals that the new boss is positioned at a similar or higher difficulty tier to Ganryu, not a routine mid-level enemy.\n\nFor launch-week players, the expanded demo is the more useful version to download because it covers a second signature fight on top of the original demo content. Both versions of the demo share the same Kubi Akari charm reward, so players who only ever downloaded the original demo still qualify for the carry-over reward if they keep their save.",
      },
      {
        id: "demo-vs-full",
        type: "prose",
        heading: "Demo vs Full Game: What Changes",
        body:
          "The demo is a slice, not a chapter. The full game expands the Kiyomizu-dera Temple area into a longer opening act, follows it with a broader Kyoto region map, and eventually routes Musashi through multiple Genma-controlled zones before reaching the late-game Genma Musashi encounter. The demo also omits most of the armor set locations, the New Game+ Carnage Difficulty loop, and the full charm and upgrade economy.\n\nWhat the demo does give players is the combat foundation: the Oni Gauntlet timing rules, the Issen counter window, the Oni Awakening transformation trigger, and the Genma enemy behavior patterns. Those four pieces carry directly into the full game, so the demo is best treated as combat training rather than as a preview of the full chapter structure.",
      },
      {
        id: "demo-kubi-akari",
        type: "prose",
        heading: "Kubi Akari Charm Reward and Demo Save Carry-Over",
        body:
          "If players keep the demo save, the Kubi Akari charm carries into the full game. The Kubi Akari is a charm, which is a piece of equippable gear Musashi can slot into his loadout for passive or triggered effects. It is granted automatically when the demo save is detected in the full game, so there is no redemption code or transfer step required.\n\nThe carry-over only applies when the save is retained. Players who delete the demo data before installing the full game lose the Kubi Akari charm. The practical implication is that anyone planning to use the charm should keep their demo installation intact until the full game has been launched at least once and the charm has been delivered. The Steam, PlayStation 5, Xbox, and Epic Games Store demo clients all support this retention because each storefront's save data persists independently of full-game ownership.",
      },
      {
        id: "demo-cross-store",
        type: "prose",
        heading: "Cross-Store Demo Availability",
        body:
          "The demo is available on four storefronts: Steam, PlayStation 5, Xbox, and the Epic Games Store. Each storefront hosts the same demo content, including the Kiyomizu-dera Temple area, the Sasaki Ganryu boss fight, and the expanded demo's new area plus \"fearsome boss.\" Cross-progression between storefronts is not supported — a Steam demo save stays on Steam, and a PlayStation 5 demo save stays on the PlayStation network.",
      },
      {
        id: "demo-steam",
        type: "prose",
        heading: "Demo on Steam",
        body:
          "The Steam demo uses AppID 2638890 and runs on the same engine as the full game, so the demo's published system requirements serve as a baseline for the full game's minimum PC configuration. Players who already cleared the demo on their PC should expect the full game to boot at the same settings. The Steam Community hub tracks demo discussions and acts as a demand signal for the expanded demo's rollout.",
      },
      {
        id: "demo-ps5",
        type: "prose",
        heading: "Demo on PlayStation 5",
        body:
          "The PlayStation 5 demo is downloaded through the PlayStation Store and saves to the player's local PS5 storage or PlayStation Plus cloud storage. Sasaki Ganryu and the expanded demo's \"fearsome boss\" both appear in the PS5 build. The [release status page](/release/) covers the September 3, 2026 launch window across platforms.",
      },
      {
        id: "demo-xbox",
        type: "prose",
        heading: "Demo on Xbox",
        body:
          "The Xbox demo follows the same content pattern as the Steam and PS5 builds. Xbox players who retain the demo save receive the Kubi Akari charm in the full game once it installs. Specific Xbox demo client identifiers are not announced beyond standard Xbox Store distribution as of 2026-09-02.",
      },
      {
        id: "demo-epic",
        type: "prose",
        heading: "Demo on Epic Games Store",
        body:
          "The Epic Games Store hosts the same demo build, with the same Sasaki Ganryu fight and the expanded demo's second boss. Like the other storefronts, retaining the demo save grants the Kubi Akari charm on transition to the full release. Cross-store demo progression is not supported, so Epic demo saves do not transfer to Steam or vice versa.",
      },
      {
        id: "demo-issen-training",
        type: "prose",
        heading: "Using the Demo as Issen Training",
        body:
          "Because the Sasaki Ganryu fight requires clean Issen timing, the demo is effectively an Issen training room. Players who want to refine their timing before launch should focus on three habits during the demo: identify Ganryu's heavy-swing animation early, commit to the Oni Gauntlet parry on the correct frame, and chain the follow-up Issen counter immediately after the parry lands. The expanded demo's \"fearsome boss\" introduces a second timing pattern, which makes it a useful second drill once the Ganryu timing is consistent.\n\nThe [Issen guide](/issen/) covers the broader timing system, and the [combat mechanics page](/combat/) explains how Issen chains into the Oni Gauntlet system. The demo sits between those two reference pages as the practical training ground.",
      },
      {
        id: "demo-edition-context",
        type: "prose",
        heading: "Editions Context for Demo Players",
        body:
          "Demo players who decide to pre-order after finishing the expanded demo should compare editions on the [editions and pricing page](/editions/). The Kubi Akari charm reward is granted regardless of which edition is purchased, so the edition choice is about cosmetics, ally outfits, and the digital soundtrack rather than demo carry-over content.",
      },
      {
        id: "demo-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha: Way of the Sword demo is available on Steam, PlayStation 5, Xbox, and the Epic Games Store; demo opens in the Kiyomizu-dera Temple area; demo includes Sasaki Ganryu boss fight; expanded demo adds a new area and another \"fearsome boss\"; demo session is about thirty minutes; retaining the demo save grants the Kubi Akari charm in the full game; release date 2026-09-03; Steam AppID 2638890. Any post-launch demo update beyond the expanded demo, cross-store demo save transfer, exact Xbox demo client identifier beyond standard Xbox Store distribution, and full Nintendo Switch 2 demo content parity versus other platforms are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-demo-exists",
      "onimusha-way-of-the-sword-demo-content",
      "onimusha-way-of-the-sword-demo-length",
      "onimusha-way-of-the-sword-demo-save-reward",
      "onimusha-way-of-the-sword-demo-cross-platform",
      "onimusha-way-of-the-sword-demo-same-content",
    ],
    relatedPageIds: [
      "fixed-release-platforms-en-us",
      "fixed-switch-2-version-en-us",
      "fixed-editions-pricing-en-us",
      "fixed-bosses-en-us",
      "fixed-combat-mechanics-en-us",
      "fixed-issen-guide-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // editions-pricing — reference page
  {
    id: "fixed-editions-pricing-en-us",
    translationKey: "editions-pricing",
    locale: "en-US",
    routeKind: "fixed",
    slug: "editions",
    url: "/editions",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Editions, Prices, and Bonuses",
    seoTitle:
      "Onimusha Way of the Sword Editions, Prices, and Bonuses",
    metaDescription:
      "Onimusha Way of the Sword has Standard ($69.99), Deluxe ($79.99), and Premium Deluxe ($89.99) editions, plus Sealed Curse and Lion Dog pre-order bonuses.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) ships in three editions. Standard at $69.99 (physical and digital), Deluxe at $79.99 (digital-only), and Premium Deluxe at $89.99 (digital-only). Every pre-order adds the Sealed Curse sword appearance and the Lion Dog charm.",
    hero: {
      eyebrow: "Editions and pricing",
      subtitle:
        "Onimusha: Way of the Sword ships in three editions. The Standard Edition is $69.99 in physical and digital formats. The Deluxe Edition at $79.99 is digital-only, with Deluxe Kit cosmetics and extra charms. The Premium Deluxe Edition at $89.99 is also digital-only, adding ally outfits and a digital soundtrack. Every pre-order includes the Sealed Curse sword appearance and the Lion Dog charm.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Demo Guide", href: "/demo" },
        { label: "Characters", href: "/characters" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword ships in three editions on Steam. The Standard Edition is $69.99 in physical and digital formats. The Deluxe Edition at $79.99 is digital-only, with Deluxe Kit cosmetics and extra charms. The Premium Deluxe Edition at $89.99 is also digital-only, adding ally outfits and a digital soundtrack. Every pre-order includes the Sealed Curse sword appearance and the Lion Dog charm. Region-specific pricing beyond US dollars is not announced as of 2026-09-02.",
    keyFacts: [
      { label: "Standard Edition", value: "$69.99 (physical and digital)" },
      { label: "Deluxe Edition", value: "$79.99 (digital-only)" },
      { label: "Premium Deluxe Edition", value: "$89.99 (digital-only)" },
      { label: "Pre-order bonuses", value: "Sealed Curse sword appearance, Lion Dog charm" },
      { label: "Standard content", value: "Base game" },
      { label: "Deluxe content", value: "Deluxe Kit cosmetics, extra charms" },
      { label: "Premium Deluxe content", value: "Deluxe content plus ally outfits, digital soundtrack" },
      { label: "Release date", value: "September 3, 2026" },
    ],
    modules: [
      {
        id: "editions-glance",
        type: "prose",
        heading: "Onimusha Way of the Sword Editions at a Glance",
        body:
          "The Steam store page for Onimusha: Way of the Sword lists three editions with stable US dollar pricing. The Standard Edition at $69.99 is the entry tier and is the only edition with both a physical SKU and a digital SKU. The Deluxe Edition at $79.99 is digital-only and adds the Deluxe Kit cosmetics plus additional charms. The Premium Deluxe Edition at $89.99 is also digital-only and layers ally outfits and a digital soundtrack on top of the Deluxe content.\n\nAll three editions grant access to the same full game on September 3, 2026. The differences between editions are entirely about what extra digital content is bundled with the base game. None of the editions alters Musashi's combat system, the Oni Gauntlet timing rules, the Issen counter window, or the New Game+ Carnage Difficulty loop. Those systems are shared across editions.",
      },
      {
        id: "editions-table",
        type: "data-table",
        heading: "Editions comparison",
        columns: [
          { key: "edition", label: "Edition" },
          { key: "price", label: "Price (USD)" },
          { key: "format", label: "Format" },
          { key: "extras", label: "Key extra content" },
        ],
        rows: [
          { edition: "Standard", price: "$69.99", format: "Physical and digital", extras: "Base game" },
          { edition: "Deluxe", price: "$79.99", format: "Digital-only", extras: "Deluxe Kit cosmetics, extra charms" },
          { edition: "Premium Deluxe", price: "$89.99", format: "Digital-only", extras: "Deluxe content, ally outfits, digital soundtrack" },
        ],
      },
      {
        id: "editions-standard",
        type: "prose",
        heading: "Standard Edition Details",
        body:
          "The Standard Edition is the most straightforward tier. At $69.99 it grants the full game on launch day with no extra digital content layered on top. Physical Standard Edition copies are available through standard retail channels on PlayStation 5, Xbox Series X|S, and Nintendo Switch 2, while the digital Standard Edition is available on Steam, the Epic Games Store, and the console storefronts.\n\nPre-ordering the Standard Edition still grants the Sealed Curse sword appearance and the Lion Dog charm, so the only thing missing relative to the higher tiers is the cosmetic Deluxe Kit, the extra charms, the ally outfits, and the digital soundtrack. Players who only care about the combat system and the story should be fully served by the Standard Edition.",
      },
      {
        id: "editions-deluxe",
        type: "prose",
        heading: "Deluxe Edition Details",
        body:
          "The Deluxe Edition at $79.99 is the first tier above Standard. It is digital-only, which means the Deluxe Edition is purchased through the Steam, Epic, or console storefronts rather than as a physical disc or cartridge. The Deluxe content consists of two layers: the Deluxe Kit cosmetics and a set of extra charms.\n\nThe Deluxe Kit cosmetics cover Musashi's visual customization, including alternate costume pieces and sword appearance variants. The extra charms are usable equipment items that slot into Musashi's charm loadout for triggered or passive effects. Because charms have mechanical impact rather than purely cosmetic value, the Deluxe Edition's charm bundle can change how Musashi plays in combat. The [combat mechanics page](/combat/) explains the charm system at a foundation level.\n\nThe Deluxe Edition is positioned as the value tier for players who want more than the base game but do not need the Premium Deluxe Edition's ally outfits or soundtrack. It is also a clean fit for players who prefer a digital-only discount and want some combat variety from the extra charms.",
      },
      {
        id: "editions-premium",
        type: "prose",
        heading: "Premium Deluxe Edition Details",
        body:
          "The Premium Deluxe Edition at $89.99 is the top tier and is also digital-only. It includes everything in the Deluxe Edition and layers two additional content sets on top: ally outfits and a digital soundtrack.\n\nThe ally outfits cover the look of Musashi's supporting cast. The digital soundtrack is the full score as a separate audio download. Neither of these layers alters the combat system, but both add value for players who care about the broader presentation of the game. Players who want a clean collection should consider the Premium Deluxe Edition as the closest equivalent to a \"complete edition\" launch SKU.\n\nPlayers who already own the Deluxe Edition and want to upgrade to Premium Deluxe should check the storefront's upgrade path before launch day. Upgrade pricing from Deluxe to Premium Deluxe is not announced as of 2026-09-02.",
      },
      {
        id: "editions-pre-order",
        type: "prose",
        heading: "Pre-Order Bonuses: Sealed Curse and Lion Dog",
        body:
          "Every pre-order of Onimusha: Way of the Sword, regardless of edition, includes two pre-order bonuses: the Sealed Curse sword appearance and the Lion Dog charm. These bonuses apply on top of whatever edition content a player has already selected.\n\nThe Sealed Curse is a cosmetic sword appearance for Musashi's equipped blade. It does not change damage, range, or sword kit behavior — it only changes how the sword looks during combat and in the charm menu. Players who care about Musashi's visual presentation should treat the Sealed Curse as the primary cosmetic reward of pre-ordering.\n\nThe Lion Dog is a charm, which means it slots into Musashi's charm loadout alongside the Kubi Akari charm that demo players receive for retaining their demo save. The Lion Dog is granted as a pre-order bonus whether or not the player has played the demo. The [demo guide](/demo/) explains how the Kubi Akari reward interacts with the charm loadout.",
      },
      {
        id: "editions-region",
        type: "prose",
        heading: "Region-Specific Pricing",
        body:
          "The Steam store page lists prices in US dollars. Region-specific pricing in other currencies is not announced as of 2026-09-02. Players outside the US should monitor their local storefront or regional Capcom channels for converted pricing closer to the September 3, 2026 launch. Retailer-specific pricing on physical Standard Edition copies is also not announced as of 2026-09-02.\n\nFor launch-week decisions, treat the US dollar pricing on the Steam store page as the reference baseline and check your local storefront for the actual charge at checkout.",
      },
      {
        id: "editions-choose",
        type: "prose",
        heading: "Choosing an Edition",
        body:
          "The right edition depends on what a player actually wants from the game. Players who only want the combat system, the story, and the Genma boss lineup should pick the Standard Edition and apply the pre-order bonuses on top. Players who want cosmetic variety, extra charms, and a digital-only discount should pick the Deluxe Edition. Players who want the broadest presentation plus the digital soundtrack should pick the Premium Deluxe Edition.\n\nThe pre-order bonuses are independent of this choice and apply automatically to any pre-order. The [release status page](/release/) covers the September 3, 2026 launch window and platform breakdown.",
      },
      {
        id: "editions-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha: Way of the Sword ships in three editions — Standard $69.99 (physical and digital), Deluxe $79.99 (digital-only, Deluxe Kit cosmetics and extra charms), Premium Deluxe $89.99 (digital-only, Deluxe content plus ally outfits and digital soundtrack). Every pre-order grants the Sealed Curse sword appearance and the Lion Dog charm. Release date 2026-09-03. Steam AppID 2638890. Region-specific pricing beyond US dollars, retailer-specific physical Standard Edition pricing, Deluxe-to-Premium Deluxe upgrade pricing, retailer-exclusive pre-order bonuses, and any post-launch DLC or edition expansion are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-editions-list",
      "onimusha-way-of-the-sword-deluxe-contents",
      "onimusha-way-of-the-sword-premium-deluxe-contents",
      "onimusha-way-of-the-sword-pre-order-bonus-edition",
      "onimusha-way-of-the-sword-standard-physical",
      "onimusha-way-of-the-sword-region-pricing",
    ],
    relatedPageIds: [
      "fixed-release-platforms-en-us",
      "fixed-demo-en-us",
      "fixed-characters-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // switch-2-version — status page
  {
    id: "fixed-switch-2-version-en-us",
    translationKey: "switch-2-version",
    locale: "en-US",
    routeKind: "fixed",
    slug: "switch-2",
    url: "/switch-2",
    pageType: "release",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Switch 2 Version and Demo",
    seoTitle:
      "Onimusha Way of the Sword Switch 2 Version and Demo",
    metaDescription:
      "Is there an Onimusha Way of the Sword Switch 2 version and demo? Confirmed launch platforms, demo status, and the Switch 2 questions still unanswered before release.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) launches on Nintendo Switch 2 alongside Steam, PlayStation 5, Xbox Series X|S, and the Epic Games Store on 2026-09-03. The cross-store demo is also available on the Switch 2 eShop with the same Kiyomizu-dera Temple content and Sasaki Ganryu fight.",
    hero: {
      eyebrow: "Switch 2 version",
      subtitle:
        "Nintendo Switch 2 is one of five launch platforms for Onimusha: Way of the Sword on 2026-09-03 alongside Steam, PlayStation 5, Xbox Series X|S, and the Epic Games Store. The cross-store demo (Kiyomizu-dera Temple and Sasaki Ganryu) is also available on the Switch 2 eShop. Switch 2-exclusive modes, outfits, or guaranteed performance parity against PS5 and Xbox are not announced as of 2026-09-02.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Demo Guide", href: "/demo" },
        { label: "System Requirements", href: "/system-requirements" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword Switch 2 ships on 2026-09-03 (Capcom, Steam AppID 2638890) as part of a five-store launch alongside Steam, PlayStation 5, Xbox Series X|S, and Epic Games Store. The cross-store demo rollout on Steam, PS5, and Xbox extends to the Switch 2 eShop, so Switch 2 owners get the same Kiyomizu-dera Temple demo. Switch 2-exclusive modes, outfits, or guaranteed performance parity with PS5 and Xbox are not announced as of 2026-09-02.",
    keyFacts: [
      { label: "Release date", value: "September 3, 2026" },
      { label: "Developer / publisher", value: "Capcom" },
      { label: "Steam AppID", value: "2638890" },
      { label: "Switch 2 status", value: "Confirmed launch platform" },
      { label: "Switch 2 demo", value: "Same Kiyomizu-dera Temple and Sasaki Ganryu build" },
      { label: "Switch 2 frame rate target", value: "Not announced as of 2026-09-02" },
      { label: "Switch 2 resolution target", value: "Not announced as of 2026-09-02" },
      { label: "Switch 2-exclusive bonuses", value: "Not announced as of 2026-09-02" },
    ],
    modules: [
      {
        id: "switch-2-status",
        type: "prose",
        heading: "Onimusha Way of the Sword Switch 2 Confirmed Status",
        body:
          "The Switch 2 version sits inside Capcom's multi-platform launch for 2026-09-03. The Steam store page lists Switch 2 alongside Steam, PlayStation 5, Xbox Series X|S, and Epic Games Store for the same Standard, Deluxe, and Premium Deluxe editions. The cross-store demo that runs on Steam, PS5, and Xbox is also available on the Switch 2 eShop with the same Kiyomizu-dera Temple content and Sasaki Ganryu fight. The expanded demo build that adds a new area and another \"fearsome boss\" follows the same cross-store pattern, so Switch 2 players get the same expanded slice as everyone else. Capcom has not published a separate Switch 2 launch timeline, separate pricing, or a separate demo schedule — the Switch 2 release tracks the broader 2026-09-03 date.",
      },
      {
        id: "switch-2-demo",
        type: "prose",
        heading: "What the Switch 2 Demo Covers",
        body:
          "The Switch 2 demo mirrors the cross-store demo build: the Kiyomizu-dera Temple opening area, a Sasaki Ganryu boss fight, and the expanded demo with a second \"fearsome boss.\" The base demo runs approximately 30 minutes, the expanded demo adds a new area, and the Kubi Akari charm carries the demo save into the full game. Because this is shared content, the Switch 2 demo does not need a separate timing announcement; it follows the broader demo rollout on the Switch 2 eShop.",
      },
      {
        id: "switch-2-performance",
        type: "prose",
        heading: "Switch 2 Performance and Parity Questions",
        body:
          "Performance is the most common follow-up question, and the launch-window evidence does not fully answer it. The Steam store page, the Steam Community hub, and the launch-window reviews describe the Switch 2 release as part of a multi-platform launch, but none publishes a frame-rate target, resolution target, or parity guarantee against PlayStation 5 or Xbox Series X|S. As of 2026-09-02:\n\n- Switch 2 frame rate target — Not announced as of 2026-09-02.\n- Switch 2 resolution target — Not announced as of 2026-09-02.\n- Switch 2 performance parity versus PlayStation 5 — Not announced as of 2026-09-02.\n- Switch 2 performance parity versus Xbox Series X|S — Not announced as of 2026-09-02.\n\nHowToShark's launch-window review describes the Switch 2 release as part of the multi-platform lineup without committing to a technical tier. Readers should treat any third-party \"runs at 60 fps on Switch 2\" claim as unverified until Capcom or Nintendo confirms it.",
      },
      {
        id: "switch-2-exclusive",
        type: "prose",
        heading: "Switch 2 Exclusive Content and Bonuses",
        body:
          "Some Capcom launches ship a Switch 2-exclusive mode, outfit, or charm. For Onimusha: Way of the Sword:\n\n- Switch 2-exclusive gameplay mode — Not announced as of 2026-09-02.\n- Switch 2-exclusive outfit or cosmetic — Not announced as of 2026-09-02.\n- Switch 2-only charm or talisman — Not announced as of 2026-09-02 beyond the standard Kubi Akari demo carry-over charm and the Lion Dog pre-order charm shared across editions.\n\nThe pre-order Sealed Curse sword appearance and the Lion Dog charm are available across editions, not Switch 2-exclusive.",
      },
      {
        id: "switch-2-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) launches on 2026-09-03 across Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and Epic Games Store. The cross-store demo (Kiyomizu-dera Temple, Sasaki Ganryu, expanded demo with another \"fearsome boss,\" Kubi Akari charm reward) is available on the Switch 2 eShop. Pre-order Sealed Curse sword appearance and Lion Dog charm apply across editions. Switch 2-exclusive content, Switch 2 frame rate and resolution targets, and Switch 2 performance parity versus PlayStation 5 or Xbox Series X|S are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-switch-2-launch",
      "onimusha-way-of-the-sword-switch-2-demo",
      "onimusha-way-of-the-sword-switch-2-parity",
      "onimusha-way-of-the-sword-switch-2-exclusive",
    ],
    relatedPageIds: [
      "fixed-release-platforms-en-us",
      "fixed-demo-en-us",
      "fixed-system-requirements-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // length — reference page
  {
    id: "fixed-length-en-us",
    translationKey: "length",
    locale: "en-US",
    routeKind: "fixed",
    slug: "length",
    url: "/length",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "How Long Is Onimusha Way of the Sword to Beat",
    seoTitle:
      "How Long Is Onimusha Way of the Sword to Beat",
    metaDescription:
      "Wondering how long is Onimusha Way of the Sword? Main-story length, chapter structure, and how the New Game+ Carnage Difficulty loop changes total playtime.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) is a chapter-based action-adventure. Exact main-story and completionist hours are not announced as of 2026-09-02; the New Game+ Carnage Difficulty loop is the largest length-extending lever after the first playthrough.",
    hero: {
      eyebrow: "Length and playtime",
      subtitle:
        "Onimusha: Way of the Sword is a chapter-based action-adventure. Exact main-story and completionist hours are not announced as of 2026-09-02. The Steam Community hub and the launch-window reviews describe a campaign-length story with a meaningful New Game+ Carnage Difficulty loop.",
      ctas: [
        { label: "Combat Mechanics", href: "/combat" },
        { label: "Difficulty Settings", href: "/difficulty" },
        { label: "Demo Guide", href: "/demo" },
      ],
    },
    quickAnswer:
      "Onimusha: Way of the Sword is a chapter-based action-adventure. If you are asking how long is Onimusha Way of the Sword, the honest answer is that exact main-story and completionist hours are not announced as of 2026-09-02. The Steam Community hub and the HowToShark launch-window review describe a campaign-length story with a meaningful New Game+ Carnage Difficulty loop, the most common length-extending lever after the first playthrough.",
    keyFacts: [
      { label: "Structure", value: "Chapter-based action-adventure" },
      { label: "Release date", value: "September 3, 2026" },
      { label: "Steam AppID", value: "2638890" },
      { label: "Main-story hours", value: "Not announced as of 2026-09-02" },
      { label: "Completionist hours", value: "Not announced as of 2026-09-02" },
      { label: "New Game+ loop", value: "Carnage Difficulty" },
      { label: "Carnage carries", value: "Unlocks, upgrades, outfits, tutorials" },
      { label: "Carnage does not carry", value: "Story progress, materials, save points" },
    ],
    modules: [
      {
        id: "length-chapters",
        type: "prose",
        heading: "Chapter and Mission Structure",
        body:
          "How long Onimusha: Way of the Sword takes to beat depends first on how its chapters are paced. The game is presented as a sequence of Musashi Miyamoto chapters, each moving the Genma threat and the Sasaki Ganryu rivalry forward. The Steam Community hub for AppID 2638890 frames the title as a chapter-and-mission action-adventure rather than an open-world or hub-and-side-quest structure, so the question of how long is Onimusha Way of the Sword reduces to how long each chapter lasts and how many chapters there are.\n\nTwo chapter-related mechanics also shape length:\n\n- Sword-driven boss encounters. The confirmed Genma boss roster (Sasaki Ganryu, the Genma siblings Ifuu and Burai, and Genma Musashi) anchors chapter beats, and each boss adds a distinct Issen-counter timing layer that affects how long it takes to clear the chapter on the first attempt.\n- Oni Gauntlet risk-reward decisions. The Oni Gauntlet parry-and-counter system is positioned as a risk-reward choice: a successful Oni Gauntlet speeds up a chapter by interrupting enemy combos, while a failed attempt can extend a fight and force a restart.\n\nThe chapter flow is the reason the main story reads as a measured, set-piece-driven experience rather than a long back-half grind.",
      },
      {
        id: "length-main-story-factors",
        type: "prose",
        heading: "What Changes the Main-Story Playtime",
        body:
          "Most first-time players will land in the same playtime window, but a handful of choices push the campaign longer or shorter.\n\n- Difficulty preset. Light difficulty lowers enemy aggression and tends to shorten encounters because mistakes are cheaper; Oni difficulty raises aggression and lengthens boss fights because Issen timing becomes harder to land. The Difficulty page covers the full preset ladder.\n- Combat tempo. Players who learn Issen timing early — by chaining Issen counter-attacks and using the Oni Gauntlet interrupt — clear chapters faster than players who ignore the Oni Gauntlet because fights resolve in fewer exchanges.\n- Optional exploration. The community descriptions of the chapters include named locations such as Kiyomizu-dera Temple. Players who clear only the critical path move through the campaign quickly; players who explore optional paths and armor pickups spend more time per chapter.\n- Pre-order and demo carry-over. The Kubi Akari charm from the demo is a saving-and-retain mechanic, not a length-changing one, but starting the campaign with the charm in hand removes the first save-point trial that the demo otherwise taught.",
      },
      {
        id: "length-new-game-plus",
        type: "prose",
        heading: "New Game+ and the Carnage Difficulty Loop",
        body:
          "The largest length-extending lever is the New Game+ loop, which the Steam Community hub and the launch-window reviews describe as Carnage Difficulty. Carnage Difficulty is the New Game+ mode that reopens the campaign at a higher challenge tier and is the only confirmed way to extend playtime past the first ending without restarting from scratch on Normal.\n\nCarry-over rules shape how the New Game+ loop behaves in practice:\n\n- Carnage Difficulty carries forward unlocks, upgrades, outfits, and tutorials.\n- Carnage Difficulty does not carry forward story progress, materials, or save points.\n\nThat split matters for length. Because unlocks and outfits carry, a second run is mechanically richer — Musashi starts with stronger charms and cosmetics from the start of Chapter 1 — which can shorten some encounters but also opens higher-tier enemy behavior that lengthens boss fights. Because materials and save points do not carry, players still have to rebuild their consumable stock and find new save shrines, which adds hours back into the loop.\n\nIn practical terms, the New Game+ Carnage Difficulty loop is the difference between a single main-story run and a multi-game session, and it is the variable most likely to swing to playtime the widest.",
      },
      {
        id: "length-side-content",
        type: "prose",
        heading: "Side Content and Replay Value",
        body:
          "Side content is not a separate open-world game in the same way as a free-roam action RPG, but two replay-side mechanics still add time on top of the chapter campaign:\n\n- Chapter replay with alternate Musashi loadouts. Pre-order cosmetics, Deluxe Kit outfits, and Premium Deluxe ally outfits give players cosmetic-only reasons to replay chapters, with the carry-over rules from Carnage Difficulty also applying to outfits.\n- Issen and Oni Gauntlet mastery. Because the Oni Gauntlet rewards perfect-timing parries with longer combo chains, players who want the higher Issen chain counts replay boss fights to push their combo ceiling. That mastery loop adds time without expanding the chapter count.",
      },
      {
        id: "length-practice",
        type: "prose",
        heading: "How Long Is Onimusha Way of the Sword in Practice",
        body:
          "Players asking how long is Onimusha Way of the Sword on a first run should treat the answer as a range rather than a fixed number, because no public source has published exact hours as of 2026-09-02. For a player who has played through the demo and is ready for the full release, the realistic playtime picture looks like this:\n\n- Main-story run on Normal difficulty: a measured chapter, exact hours are not announced as of 2026-09-02.\n- Hard or Oni difficulty first run: longer than Normal because boss Issen windows are tighter and enemy aggression is higher; exact hours are not announced as of 2026-09-02.\n- Completionist run with optional chapter exploration and armor pickups: longer than the main-story run; exact hours are not announced as of 2026-09-02.\n- New Game+ Carnage Difficulty loop: adds a second full campaign with carry-over unlocks and higher-tier enemy behavior; exact hours are not announced as of 2026-09-02.\n\nFor players who already finished the Onimusha: Warlords or Onimusha 2: Samurai's Destiny campaigns, the new chapter structure feels like a return to the classic Onimusha pacing model: set-piece boss encounters separated by swordplay corridors, with the Oni Gauntlet adding a new layer of risk-reward timing throughout.",
      },
      {
        id: "length-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha: Way of the Sword is a chapter-based action-adventure (Capcom, Steam AppID 2638890, 2026-09-03). The New Game+ loop is called Carnage Difficulty; Carnage Difficulty carries unlocks, upgrades, outfits, and tutorials and does not carry story progress, materials, or save points. The demo Kubi Akari charm carries into the full game as a save-retain mechanic. Exact main-story hours, exact completionist hours, and exact per-chapter length are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-main-story-length",
      "onimusha-way-of-the-sword-new-game-plus-length",
      "onimusha-way-of-the-sword-difficulty-length",
      "onimusha-way-of-the-sword-demo-length-effect",
    ],
    relatedPageIds: [
      "fixed-combat-mechanics-en-us",
      "fixed-difficulty-settings-en-us",
      "fixed-demo-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // difficulty-settings — reference page
  {
    id: "fixed-difficulty-settings-en-us",
    translationKey: "difficulty-settings",
    locale: "en-US",
    routeKind: "fixed",
    slug: "difficulty",
    url: "/difficulty",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Difficulty Settings",
    seoTitle:
      "Onimusha Way of the Sword Difficulty Settings",
    metaDescription:
      "Onimusha Way of the Sword has Light, Normal, Hard, and Oni difficulty presets. Hard and Oni raise enemy aggression, lengthen boss fights, and tighten Issen windows.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) ships with four difficulty presets — Light, Normal, Hard, and Oni. Hard raises enemy aggression and tightens Issen timing windows; Oni adds further risk and serves as the skill ceiling for the campaign.",
    hero: {
      eyebrow: "Difficulty settings",
      subtitle:
        "Onimusha: Way of the Sword launches on September 3, 2026 with four difficulty presets — Light, Normal, Hard, and Oni. Hard raises enemy aggression and tightens Issen timing windows; Oni adds further risk and serves as the skill ceiling for the campaign. Difficulty applies to enemy aggression, boss aggression, and tutorial pacing; the New Game+ Carnage Difficulty loop is the highest challenge tier available.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Combat Mechanics", href: "/combat" },
        { label: "Issen Guide", href: "/issen" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword has four difficulty presets: Light, Normal, Hard, and Oni. Hard and Oni raise enemy aggression and tighten Issen timing windows; Oni is the skill-ceiling preset. A separate New Game+ Carnage Difficulty loop is the highest tier in the game and reopens the campaign at the highest challenge. Difficulty applies to enemy aggression, boss aggression, tutorial pacing, and Issen timing windows; difficulty does not change Musashi's story or the chapter order.",
    keyFacts: [
      { label: "Difficulty presets", value: "Light, Normal, Hard, Oni" },
      { label: "Highest tier", value: "Oni (preset), Carnage Difficulty (New Game+)" },
      { label: "Carnage Difficulty loop", value: "Reopens campaign at highest challenge" },
      { label: "Effects", value: "Enemy aggression, boss aggression, tutorial pacing, Issen timing windows" },
      { label: "Does not affect", value: "Story, chapter order, Musashi's appearance" },
      { label: "Carry-over to Carnage", value: "Unlocks, upgrades, outfits, tutorials (not story, materials, save points)" },
      { label: "Release date", value: "September 3, 2026" },
      { label: "Steam AppID", value: "2638890" },
    ],
    modules: [
      {
        id: "difficulty-overview",
        type: "prose",
        heading: "Difficulty Preset Overview",
        body:
          "Onimusha: Way of the Sword ships with four difficulty presets — Light, Normal, Hard, and Oni — that govern enemy aggression, boss aggression, tutorial pacing, and the Issen timing window. The preset ladder is the campaign-time challenge curve: a player can clear the same chapters on Light, Normal, Hard, or Oni, with each preset taking the same Musashi through the same chapters but at different combat pressure.\n\nCarnage Difficulty is the separate New Game+ tier that reopens the campaign at the highest challenge. The four presets are the campaign-time preset ladder; Carnage Difficulty is the highest tier overall and is unlocked after the first ending. Both systems apply difficulty to combat encounters and timing, but they differ on what carries between playthroughs.",
      },
      {
        id: "difficulty-table",
        type: "data-table",
        heading: "Difficulty preset comparison",
        columns: [
          { key: "preset", label: "Preset" },
          { key: "aggression", label: "Enemy aggression" },
          { key: "boss", label: "Boss aggression" },
          { key: "tutorial", label: "Tutorial pacing" },
          { key: "issen", label: "Issen window" },
        ],
        rows: [
          { preset: "Light", aggression: "Low", boss: "Low", tutorial: "Slower", issen: "More forgiving" },
          { preset: "Normal", aggression: "Standard", boss: "Standard", tutorial: "Standard", issen: "Standard" },
          { preset: "Hard", aggression: "High", boss: "High", tutorial: "Standard", issen: "Tightened" },
          { preset: "Oni", aggression: "Highest (preset)", boss: "Highest (preset)", tutorial: "Standard", issen: "Tightest (preset)" },
        ],
      },
      {
        id: "difficulty-light",
        type: "prose",
        heading: "Light Difficulty",
        body:
          "Light is the lowest preset. Enemy aggression is low, boss aggression is low, tutorial pacing is slower, and the Issen timing window is more forgiving than Normal. Light is a clean fit for players who want to focus on the chapter narrative and the Oni Gauntlet risk-reward system without being punished by an early Genma ambush.\n\nLight does not change Musashi's narrative or the chapter order; it only relaxes the combat challenge. A first-time run on Light can later be replayed on Hard or Oni by starting a New Game+ run.",
      },
      {
        id: "difficulty-normal",
        type: "prose",
        heading: "Normal Difficulty",
        body:
          "Normal is the standard preset for Onimusha: Way of the Sword. Enemy aggression, boss aggression, tutorial pacing, and Issen timing window all sit at the standard values used to design the campaign. Normal is the right starting point for most players and the preset used by the launch-window reviews for their first playthrough.\n\nNormal also acts as the reference preset for understanding what Hard and Oni modify. If a fight feels fair on Normal, the same fight on Hard will punish mistimed Issen windows more harshly.",
      },
      {
        id: "difficulty-hard",
        type: "prose",
        heading: "Hard Difficulty",
        body:
          "Hard raises enemy aggression and boss aggression and tightens the Issen timing window. The campaign remains the same — same chapters, same boss order, same Musashi — but the combat layer requires more precise Oni Gauntlet parry execution. Hard is the recommended first preset for players who finished the demo cleanly and want a harder first run.\n\nHard does not change Musashi's narrative, his Oni Awakening transformation, or the chapter order. It also does not change charm balance or Genma boss HP scaling relative to other presets; only the timing and aggression values move. As of 2026-09-02, exact HP and damage values per preset are not announced; the launch-window reviews describe difficulty as raising aggression and tightening Issen timing without publishing per-preset numbers.",
      },
      {
        id: "difficulty-oni",
        type: "prose",
        heading: "Oni Difficulty",
        body:
          "Oni is the highest preset in the campaign-time preset ladder. It is positioned above Hard and is the preset ceiling for the first playthrough. Oni raises enemy aggression and boss aggression to their preset-time maximum and tightens the Issen window to its preset-time minimum.\n\nOni is the skill-ceiling preset for the campaign. Players who clear the campaign on Oni should be fully prepared for Carnage Difficulty, which raises challenge again by reopening the campaign at the highest overall tier.",
      },
      {
        id: "difficulty-carnage",
        type: "prose",
        heading: "Carnage Difficulty (New Game+)",
        body:
          "Carnage Difficulty is the New Game+ tier unlocked after the first ending. It reopens the campaign at the highest challenge. The carry-over rules for Carnage Difficulty are:\n\n- Carnage Difficulty carries unlocks, upgrades, outfits, and tutorials.\n- Carnage Difficulty does not carry story progress, materials, or save points.\n\nCarnage Difficulty differs from the four campaign-time presets because it is a New Game+ tier rather than a first-run preset. A first-run player who wants the hardest first-playthrough experience should choose the Oni preset, not Carnage Difficulty. The [length page](/length/) explains how Carnage Difficulty extends playtime past the first ending.",
      },
      {
        id: "difficulty-choose",
        type: "prose",
        heading: "How to Choose a Difficulty",
        body:
          "Players who want the cleanest first run should start on Normal. Players who struggled in the demo's Sasaki Ganryu fight should start on Light, replay the demo to refine Issen timing, and then move up to Normal for the campaign. Players who cleared the demo cleanly and want a harder first playthrough should start on Hard. Players who want the hardest first-playthrough experience should start on Oni.\n\nCarnage Difficulty is not a first-run preset and should only be attempted after the first ending. The [combat mechanics page](/combat/) explains the Oni Gauntlet timing rules that all four presets and Carnage Difficulty share.",
      },
      {
        id: "difficulty-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890, 2026-09-03) ships with four difficulty presets — Light, Normal, Hard, and Oni. The presets affect enemy aggression, boss aggression, tutorial pacing, and Issen timing windows. Carnage Difficulty is the New Game+ tier unlocked after the first ending; Carnage Difficulty carries unlocks, upgrades, outfits, and tutorials and does not carry story progress, materials, or save points. Difficulty does not change Musashi's narrative or the chapter order. Exact HP and damage values per preset, exact Issen frame windows per preset, and any post-launch difficulty patches are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-difficulty-options",
      "onimusha-way-of-the-sword-carnage-difficulty-save",
      "onimusha-way-of-the-sword-change-difficulty-mid-game",
      "onimusha-way-of-the-sword-change-difficulty-mid-game",
    ],
    relatedPageIds: [
      "fixed-combat-mechanics-en-us",
      "fixed-issen-guide-en-us",
      "fixed-length-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // combat-mechanics — reference page
  {
    id: "fixed-combat-mechanics-en-us",
    translationKey: "combat-mechanics",
    locale: "en-US",
    routeKind: "fixed",
    slug: "combat",
    url: "/combat",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Combat — Oni Gauntlet and Issen",
    seoTitle:
      "Onimusha Way of the Sword Combat — Oni Gauntlet and Issen",
    metaDescription:
      "Onimusha Way of the Sword combat is built around sword play, the Oni Gauntlet risk-reward parry, and Issen named counters. Oni Awakening adds a transformation tempo layer.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) is built around three combat layers: sword play, the Oni Gauntlet risk-reward parry system, and the Issen named counter. Musashi's Oni Awakening transformation adds a fourth tempo layer for tougher fights.",
    hero: {
      eyebrow: "Combat mechanics",
      subtitle:
        "Combat is the central pillar of Onimusha: Way of the Sword. The Oni Gauntlet is a risk-reward perfect-timing parry and counter mechanic, Issen is the named counter-attack that follows a clean parry, and Oni Awakening transforms Musashi's stance and offense during tougher fights. The [Issen guide](/issen/) covers the named counter timing rules in detail.",
      ctas: [
        { label: "Issen Guide", href: "/issen" },
        { label: "Bosses", href: "/bosses" },
        { label: "Demo Guide", href: "/demo" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword combat is built around three layers: sword play, the Oni Gauntlet risk-reward perfect-timing parry system, and the Issen named counter that follows a clean parry. Musashi's Oni Awakening transformation adds a fourth tempo layer during tougher fights. Charm equipment augments each layer, and the New Game+ Carnage Difficulty loop reopens the campaign with carry-over unlocks at the highest challenge.",
    keyFacts: [
      { label: "Combat layers", value: "Sword play, Oni Gauntlet parry, Issen counter, Oni Awakening" },
      { label: "Oni Gauntlet", value: "Risk-reward perfect-timing parry and counter" },
      { label: "Issen", value: "Named counter-attack after a clean parry" },
      { label: "Oni Awakening", value: "Transformation that changes stance and offense" },
      { label: "Charms", value: "Augment sword play, Oni Gauntlet, Issen" },
      { label: "Carnage Difficulty", value: "New Game+ tier, reopens campaign at highest challenge" },
      { label: "Release date", value: "September 3, 2026" },
      { label: "Steam AppID", value: "2638890" },
    ],
    modules: [
      {
        id: "combat-overview",
        type: "prose",
        heading: "Onimusha Way of the Sword Combat Overview",
        body:
          "Onimusha: Way of the Sword combat is built around three layers that compound during a fight: sword play, the Oni Gauntlet risk-reward parry system, and the Issen named counter. Musashi's Oni Awakening transformation adds a fourth layer that changes his stance and offense during tougher fights. Charms slot into the loadout to augment each layer.\n\nThe combat system is designed around the idea that every enemy attack creates a parry-or-take-damage decision. Sword play handles neutral combat; the Oni Gauntlet handles the parry-and-counter timing; Issen handles the punishing follow-up; Oni Awakening handles the transformation layer that opens during extended fights. Charm selection augments any of the four layers, and the New Game+ Carnage Difficulty loop reopens the campaign at the highest challenge with carry-over unlocks.",
      },
      {
        id: "combat-sword",
        type: "prose",
        heading: "Sword Play as the Foundation",
        body:
          "Sword play is the foundation of Onimusha: Way of the Sword. Musashi carries a katana that handles regular attacks, combos, dodges, and basic blocks. The sword kit governs how Musashi moves between enemies and how he builds toward the Oni Gauntlet window on enemy attacks.\n\nThe sword kit also governs how Musashi chains into the Oni Gauntlet. A successful sword exchange can put an enemy into a staggered state where the Oni Gauntlet parry window opens cleanly. A failed sword exchange can leave Musashi open to a follow-up that triggers a tighter Oni Gauntlet window on the next incoming attack. The sword kit is therefore the routing layer that decides when each parry window opens.",
      },
      {
        id: "combat-oni-gauntlet",
        type: "prose",
        heading: "Oni Gauntlet — Risk-Reward Parry and Counter",
        body:
          "The Oni Gauntlet is a risk-reward perfect-timing parry and counter mechanic. When an enemy commits to a heavy attack, a brief Oni Gauntlet window opens during which Musashi can attempt a clean parry. A successful parry interrupts the enemy's attack, opens the Issen counter-attack window, and awards the player with a parry-combo continuation. A failed attempt punishes Musashi with heavy damage because the Oni Gauntlet is positioned as a \"do or die\" timing test rather than a passive block.\n\nThe Oni Gauntlet is the central risk-reward layer of the combat system. Players who learn the parry timing convert enemy attacks into combo opportunities; players who ignore the Oni Gauntlet face longer fights and higher damage intake. The mechanic is a deliberate risk-reward choice that rewards timing mastery and punishes passive play.",
      },
      {
        id: "combat-issen",
        type: "prose",
        heading: "Issen — Named Counter After a Clean Parry",
        body:
          "Issen is the named counter-attack that follows a successful Oni Gauntlet parry. After a clean parry, Musashi can chain into Issen to convert the blocked attack into a punishing riposte. Issen timing windows are preset-dependent — Light is more forgiving, Normal is standard, Hard is tightened, and Oni is the tightest preset-time window.\n\nIssen is also a chainable technique: a successful Issen counter can open a second enemy into another Oni Gauntlet window, allowing chain-Issens across a group. Chain-Issen mastery is the natural mastery loop for players who want to push their combat ceiling. The [Issen guide](/issen/) covers the chain-Issen timing rules and the boss-fight application.",
      },
      {
        id: "combat-oni-awakening",
        type: "prose",
        heading: "Oni Awakening — Transformation Layer",
        body:
          "Oni Awakening is the transformation layer that activates during tougher fights. Oni Awakening changes Musashi's stance, his offense, and his Oni Gauntlet behavior, giving players a second tempo layer to manage during extended fights. Awakening is also the narrative bridge between Musashi's human sword style and the Genma threat, since his transformation is tied to the Oni power that drives the story.\n\nThe Oni Awakening transformation is confirmed for the full campaign and is part of Musashi's move set, not a separate unlock. Players who finish the demo and carry the Kubi Akari charm into the full game will see Awakening as part of Musashi's standard kit, not as an edition-exclusive feature.",
      },
      {
        id: "combat-charms",
        type: "prose",
        heading: "Charms — Equipment That Augments Combat",
        body:
          "Charms are usable equipment items that slot into Musashi's charm loadout. Each charm grants a passive or triggered effect that augments one or more combat layers — sword play, Oni Gauntlet, Issen, or Oni Awakening. The Kubi Akari charm from the demo save carry-over and the Lion Dog pre-order charm are two confirmed charms at launch. The [editions page](/editions/) explains how the Deluxe Edition bundles extra charms.\n\nCharm selection is the mechanical layer that lets players customize Musashi's combat style. Some charms open up aggressive Issen chains; others stabilize the Oni Gauntlet timing window; others modify Oni Awakening duration. Because charms have mechanical impact rather than purely cosmetic value, charm selection changes how Musashi plays in combat.",
      },
      {
        id: "combat-carnage",
        type: "prose",
        heading: "Carnage Difficulty Loop",
        body:
          "The Carnage Difficulty New Game+ loop reopens the campaign at the highest challenge with carry-over unlocks. Carnage Difficulty carries unlocks, upgrades, outfits, and tutorials; Carnage Difficulty does not carry story progress, materials, or save points.\n\nCarnage Difficulty is the highest challenge tier in the game and is unlocked after the first ending. It is not a first-run preset; the first-run presets are Light, Normal, Hard, and Oni. The [difficulty page](/difficulty/) walks through the full preset ladder.",
      },
      {
        id: "combat-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890, 2026-09-03) combat is built around four layers: sword play, Oni Gauntlet risk-reward parry, Issen named counter, and Oni Awakening transformation. Charms augment each layer; Carnage Difficulty reopens the campaign at the highest challenge. Exact Issen frame windows per preset, exact Oni Awakening duration values, exact charm effect text beyond the Kubi Akari and Lion Dog charms, and exact Genma boss HP scaling numbers are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-oni-gauntlet",
      "onimusha-way-of-the-sword-issen",
      "onimusha-way-of-the-sword-oni-awakening",
      "onimusha-way-of-the-sword-carnage-difficulty-save",
    ],
    relatedPageIds: [
      "fixed-issen-guide-en-us",
      "fixed-bosses-en-us",
      "fixed-difficulty-settings-en-us",
      "fixed-demo-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // issen-guide — guide page
  {
    id: "fixed-issen-guide-en-us",
    translationKey: "issen-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "issen",
    url: "/issen",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Issen Guide — Timing and Chains",
    seoTitle:
      "Onimusha Way of the Sword Issen Guide — Timing and Chains",
    metaDescription:
      "Onimusha Way of the Sword Issen guide covering timing windows, chain-Issen across groups, boss application, and how Issen chains off the Oni Gauntlet parry.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) Issen is a named counter-attack that follows a clean Oni Gauntlet parry. Issen timing windows are preset-dependent, and chain-Issen across multiple enemies is the natural mastery loop.",
    hero: {
      eyebrow: "Issen guide",
      subtitle:
        "Issen is the named counter-attack that follows a successful Oni Gauntlet parry. After a clean parry, Musashi can chain into Issen to convert the blocked attack into a punishing riposte. Chain-Issens across multiple enemies are the natural mastery loop. The Sasaki Ganryu demo fight is the cleanest Issen training room before launch.",
      ctas: [
        { label: "Combat Mechanics", href: "/combat" },
        { label: "Bosses", href: "/bosses" },
        { label: "Demo Guide", href: "/demo" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword Issen is the named counter-attack that follows a successful Oni Gauntlet parry. After a clean parry, Musashi can chain into Issen to convert the blocked attack into a punishing riposte. Issen timing windows are preset-dependent — Light is more forgiving, Normal is standard, Hard is tightened, Oni is the tightest preset-time window. Chain-Issens across multiple enemies are the natural mastery loop, and the Sasaki Ganryu demo fight is the cleanest Issen training room before launch.",
    keyFacts: [
      { label: "Issen definition", value: "Named counter-attack after a clean Oni Gauntlet parry" },
      { label: "Trigger", value: "Successful Oni Gauntlet parry" },
      { label: "Chain-Issen", value: "Chain across multiple enemies after clean parries" },
      { label: "Timing window", value: "Preset-dependent (Light > Normal > Hard > Oni)" },
      { label: "Training room", value: "Sasaki Ganryu demo fight" },
      { label: "Boss application", value: "Genma Musashi, Ifuu and Burai siblings, late-game encounters" },
      { label: "Release date", value: "September 3, 2026" },
      { label: "Steam AppID", value: "2638890" },
    ],
    modules: [
      {
        id: "issen-overview",
        type: "prose",
        heading: "What Issen Does in Combat",
        body:
          "Issen is the named counter-attack that follows a successful Oni Gauntlet parry. The mechanic is positioned as the punishing follow-up that converts a blocked attack into a riposte. After a clean parry, Musashi has a brief Issen timing window during which the named counter-attack is available; committing to Issen inside that window lands the punishing hit, while committing outside the window drops Musashi back into neutral combat.\n\nIssen sits on top of the Oni Gauntlet, which sits on top of sword play. The four-layer model is: sword play sets up the parry window; Oni Gauntlet handles the parry timing; Issen handles the punishing follow-up; Oni Awakening handles the transformation layer for tougher fights. Issen is the third layer in that stack and is the layer most directly affected by difficulty preset.",
      },
      {
        id: "issen-timing",
        type: "prose",
        heading: "Issen Timing Windows by Difficulty Preset",
        body:
          "Issen timing windows are preset-dependent. Light is more forgiving; Normal is standard; Hard is tightened; Oni is the tightest preset-time window. Carnage Difficulty, the New Game+ tier, raises challenge further by reopening the campaign at the highest overall tier.\n\nThe preset ladder matters because Issen is the moment where the player commits to the punish. A clean parry opens the Issen window, and the timing of the Issen input is what determines whether the punish lands. On Light, the wider window lets players learn the chain rhythm. On Normal, the window is the standard target for a first playthrough. On Hard and Oni, the tightened window makes chain-Issens harder to land because each subsequent enemy has to be parried and countered in a tighter rhythm.",
      },
      {
        id: "issen-parry",
        type: "prose",
        heading: "Issen Triggered by a Clean Oni Gauntlet Parry",
        body:
          "Issen only triggers after a successful Oni Gauntlet parry. A regular sword block does not open the Issen window — only a clean Oni Gauntlet parry converts the blocked attack into a counter opportunity. That distinction is the reason the Oni Gauntlet is positioned as a \"do or die\" timing test rather than a passive block: the Issen punish only rewards clean timing, not button-mashing.\n\nThe trigger also shapes how Musashi routes through enemy groups. A clean parry on one enemy opens the Issen punish on that enemy, but a successful Issen can also stagger a nearby enemy into a follow-up Oni Gauntlet window. That chaining is the foundation of chain-Issens across multiple enemies.",
      },
      {
        id: "issen-chain",
        type: "prose",
        heading: "Chain-Issen Across Multiple Enemies",
        body:
          "Chain-Issen is the natural mastery loop for Onimusha: Way of the Sword combat. A successful Issen on one enemy can stagger a nearby enemy, opening a follow-up Oni Gauntlet window and therefore a follow-up Issen. A clean chain converts a group encounter into a sequence of timed parries and counters rather than a series of isolated fights.\n\nChain-Issens are most useful in dense Genma ambushes where the player is surrounded by multiple enemies. The chain rewards rhythm mastery and punishes mistimed commits. Players who want to push their combat ceiling should focus on chain-Issen consistency rather than raw damage per Issen, since the chain's value is the timing rhythm that compounds across enemies.",
      },
      {
        id: "issen-boss",
        type: "prose",
        heading: "Issen Application in Boss Fights",
        body:
          "Boss fights use the same Issen system, but the timing windows are preset-dependent and the boss-specific animations vary. Sasaki Ganryu is the cleanest Issen training room before launch because his heavy-swing animations open a visible Oni Gauntlet window that maps directly onto the Issen punish. Genma Musashi, the Ifuu and Burai siblings, and other late-game bosses layer boss-specific animations on top of the same Oni Gauntlet timing system, so the same chain-Issen rhythm applies — just with longer and more varied timing windows.\n\nThe [bosses page](/bosses/) tracks the full confirmed Genma roster. The general principle is that Issen timing windows are tied to the Oni Gauntlet animation trigger, not to the boss's HP bar, so a clean parry rhythm works regardless of boss HP.",
      },
      {
        id: "issen-demo",
        type: "prose",
        heading: "Using the Sasaki Ganryu Demo as Issen Training",
        body:
          "The Sasaki Ganryu demo fight is the cleanest Issen training room before launch. Ganryu's heavy-swing animations open a visible Oni Gauntlet window, the parry timing is the same Normal preset used for the campaign, and the Issen punish follows immediately after the clean parry. Players who refine their rhythm in the Sasaki Ganryu fight carry that timing muscle memory directly into the full campaign.\n\nThe expanded demo's \"fearsome boss\" adds a second Issen timing pattern, which makes it a useful second drill once the Ganryu timing is consistent. The [demo guide](/demo/) explains how the demo's Kubi Akari charm reward interacts with the charm loadout.",
      },
      {
        id: "issen-charm",
        type: "prose",
        heading: "Charm Effects That Modify Issen",
        body:
          "Some charms modify Issen behavior. The Kubi Akari charm from the demo save carry-over is a confirmed charm at launch; the Lion Dog pre-order charm is the second confirmed charm. The exact Issen-modifying charm effects beyond those two are not announced as of 2026-09-02. The [editions page](/editions/) explains how the Deluxe Edition bundles extra charms, and the [combat mechanics page](/combat/) covers the charm system at a foundation level.",
      },
      {
        id: "issen-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha Way of the Sword Issen is the named counter-attack after a clean Oni Gauntlet parry (Capcom, Steam AppID 2638890, 2026-09-03). Issen timing windows are preset-dependent: Light is more forgiving, Normal is standard, Hard is tightened, Oni is the tightest preset-time window. Carnage Difficulty reopens the campaign at the highest challenge. The Sasaki Ganryu demo fight is the cleanest Issen training room. Exact Issen frame windows per preset, exact Issen damage values per enemy, exact charm effects that modify Issen beyond the Kubi Akari and Lion Dog charms, and any post-launch combat patches are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-issen",
      "onimusha-way-of-the-sword-issen-difficulty",
      "onimusha-way-of-the-sword-chain-issen",
      "onimusha-way-of-the-sword-issen-every-boss",
    ],
    relatedPageIds: [
      "fixed-combat-mechanics-en-us",
      "fixed-bosses-en-us",
      "fixed-demo-en-us",
      "fixed-difficulty-settings-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // bosses — reference page
  {
    id: "fixed-bosses-en-us",
    translationKey: "bosses",
    locale: "en-US",
    routeKind: "fixed",
    slug: "bosses",
    url: "/bosses",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Bosses — Confirmed Genma Roster",
    seoTitle:
      "Onimusha Way of the Sword Bosses — Confirmed Genma Roster",
    metaDescription:
      "Onimusha Way of the Sword boss roster covers Sasaki Ganryu, the Genma siblings Ifuu and Burai, and Genma Musashi. HP scaling, hidden bosses, and exact frame data are not announced.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) features a confirmed Genma boss lineup of Sasaki Ganryu, the Genma siblings Ifuu and Burai, and Genma Musashi. Hidden bosses, exact boss HP values, and damage scaling are not announced as of 2026-09-02.",
    hero: {
      eyebrow: "Bosses",
      subtitle:
        "Onimusha: Way of the Sword ships with four confirmed boss encounters — Sasaki Ganryu, the siblings Ifuu and Burai, and Genma Musashi. The Sasaki Ganryu fight appears in the demo as the signature boss, and the expanded demo adds another \"fearsome boss.\" Hidden bosses, exact boss HP values, and damage scaling numbers are not announced as of 2026-09-02.",
      ctas: [
        { label: "Combat Mechanics", href: "/combat" },
        { label: "Issen Guide", href: "/issen" },
        { label: "Demo Guide", href: "/demo" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword boss roster includes Sasaki Ganryu, the Genma siblings Ifuu and Burai, and Genma Musashi. Sasaki Ganryu appears in the demo as the signature boss. The expanded demo adds another \"fearsome boss.\" Hidden bosses, exact boss HP values, damage scaling per preset, and exact Issen timing frames per boss are not announced as of 2026-09-02.",
    keyFacts: [
      { label: "Confirmed bosses", value: "Sasaki Ganryu, Ifuu and Burai siblings, Genma Musashi" },
      { label: "Sasaki Ganryu", value: "Rival, demo signature boss" },
      { label: "Ifuu and Burai", value: "Genma siblings, dual encounter" },
      { label: "Genma Musashi", value: "Demon Musashi, tied to Oni Awakening arc" },
      { label: "Expanded demo boss", value: "\"Fearsome boss,\" exact identity not announced as of 2026-09-02" },
      { label: "Hidden bosses", value: "Not announced as of 2026-09-02" },
      { label: "HP scaling per preset", value: "Not announced as of 2026-09-02" },
      { label: "Release date", value: "September 3, 2026" },
    ],
    modules: [
      {
        id: "bosses-overview",
        type: "prose",
        heading: "Onimusha Way of the Sword Boss Roster Overview",
        body:
          "Onimusha: Way of the Sword features a confirmed Genma boss lineup of four named encounters: Sasaki Ganryu, the Genma siblings Ifuu and Burai, and Genma Musashi. Sasaki Ganryu appears both as Musashi's direct rival in the story and as the signature boss in the demo. The expanded demo adds another \"fearsome boss\" with a separate identity.\n\nThe confirmed roster is four named encounters at launch. Hidden bosses, exact boss HP values per preset, and damage scaling per preset are not announced as of 2026-09-02.",
      },
      {
        id: "bosses-table",
        type: "data-table",
        heading: "Confirmed boss roster",
        columns: [
          { key: "boss", label: "Boss" },
          { key: "role", label: "Role" },
          { key: "context", label: "Story context" },
          { key: "source", label: "Source tier" },
        ],
        rows: [
          { boss: "Sasaki Ganryu", role: "Rival, demo signature boss", context: "Musashi's direct rival", source: "Confirmed by Capcom, demo, launch reviews" },
          { boss: "Ifuu", role: "Genma sibling", context: "Dual encounter with Burai", source: "Confirmed by Capcom and launch reviews" },
          { boss: "Burai", role: "Genma sibling", context: "Dual encounter with Ifuu", source: "Confirmed by Capcom and launch reviews" },
          { boss: "Genma Musashi", role: "Demon Musashi", context: "Tied to Musashi's Oni Awakening arc", source: "Confirmed by Capcom and launch reviews" },
        ],
      },
      {
        id: "bosses-sasaki",
        type: "prose",
        heading: "Sasaki Ganryu — Musashi's Rival",
        body:
          "Sasaki Ganryu is Musashi's direct rival and the signature boss of the demo. The fight layers three systems at once: regular sword trading, Oni Gauntlet parry windows on Ganryu's named attacks, and Issen counter timing when Ganryu opens up after a heavy swing.\n\nGanryu also appears as a recurring rival in the full story, not just a one-off boss encounter. The [Issen guide](/issen/) covers the timing rhythm that the Ganryu fight teaches.",
      },
      {
        id: "bosses-ifuu-burai",
        type: "prose",
        heading: "Ifuu and Burai — The Genma Siblings",
        body:
          "Ifuu and Burai are confirmed Genma siblings and are positioned as a dual boss encounter. Dual encounters layer two enemy attack patterns at once, which forces Musashi to manage two Oni Gauntlet windows in parallel. The Issen timing rhythm from the Sasaki Ganryu fight carries over, but the dual-encounter pacing raises the pressure on chain-Issens across enemies.",
      },
      {
        id: "bosses-genma-musashi",
        type: "prose",
        heading: "Genma Musashi — Demon Musashi",
        body:
          "Genma Musashi is the late-game boss tied to Musashi's Oni Awakening arc. The encounter is positioned as the narrative mirror of Musashi's own transformation, since Genma Musashi represents the Oni-corrupted version of Musashi's sword style. Exact HP values and damage scaling are not announced as of 2026-09-02; the encounter is the narrative capstone rather than a separate difficulty tier.",
      },
      {
        id: "bosses-expanded-demo",
        type: "prose",
        heading: "Expanded Demo \"Fearsome Boss\"",
        body:
          "The expanded demo adds another \"fearsome boss\" to the rotation. The exact identity of the expanded demo boss is not announced as of 2026-09-02. The phrasing \"fearsome boss\" comes from Capcom's own framing and signals that the new boss is positioned at a similar or higher difficulty tier to Ganryu, not a routine mid-level enemy. Players who want the second Issen timing pattern should run the expanded demo and treat the new boss as a chain-Issen drill.",
      },
      {
        id: "bosses-hidden",
        type: "prose",
        heading: "Hidden Bosses and Unannounced Encounters",
        body:
          "Hidden bosses, exact boss HP values, damage scaling per preset, and exact Issen frame windows per boss are not announced as of 2026-09-02. The confirmed roster is the four named encounters above; any post-launch DLC boss, secret encounter, or hidden boss should be treated as unknown until Capcom confirms it. The [combat mechanics page](/combat/) covers the combat system at a foundation level.",
      },
      {
        id: "bosses-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha Way of the Sword (Capcom, Steam AppID 2638890, 2026-09-03) confirms four boss encounters: Sasaki Ganryu, Ifuu and Burai siblings, and Genma Musashi. The expanded demo adds another \"fearsome boss\" whose identity is not announced as of 2026-09-02. Hidden bosses, exact boss HP values per preset, damage scaling per preset, exact Issen frame windows per boss, and any post-launch DLC boss are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-how-many-bosses",
      "onimusha-way-of-the-sword-first-boss",
      "onimusha-way-of-the-sword-demo-secret-boss",
      "onimusha-way-of-the-sword-demo-secret-boss",
    ],
    relatedPageIds: [
      "fixed-combat-mechanics-en-us",
      "fixed-issen-guide-en-us",
      "fixed-demo-en-us",
      "fixed-characters-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // characters — reference page
  {
    id: "fixed-characters-en-us",
    translationKey: "characters",
    locale: "en-US",
    routeKind: "fixed",
    slug: "characters",
    url: "/characters",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Characters — Musashi and the Cast",
    seoTitle:
      "Onimusha Way of the Sword Characters — Musashi and the Cast",
    metaDescription:
      "Onimusha Way of the Sword stars Miyamoto Musashi as the fixed protagonist with Sasaki Ganryu, the Genma siblings Ifuu and Burai, and Genma Musashi in the cast.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) stars Miyamoto Musashi as the fixed protagonist. Sasaki Ganryu is the direct rival, the siblings Ifuu and Burai are the Genma antagonists, and Genma Musashi is tied to Musashi's Oni Awakening arc.",
    hero: {
      eyebrow: "Characters",
      subtitle:
        "Onimusha: Way of the Sword stars Miyamoto Musashi as the fixed protagonist. Sasaki Ganryu is the rival; the Genma siblings Ifuu and Burai are antagonists; Genma Musashi is tied to Musashi's Oni Awakening arc. Musashi is a complete, written lead with no character creation or customization layer. The [bosses page](/bosses/) covers the boss-fight context for each named cast member.",
      ctas: [
        { label: "Bosses", href: "/bosses" },
        { label: "Combat Mechanics", href: "/combat" },
        { label: "Release Status", href: "/release" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword stars Miyamoto Musashi as the fixed protagonist. Sasaki Ganryu is the rival and the signature demo boss. The Genma siblings Ifuu and Burai are antagonists, and Genma Musashi is the late-game boss tied to Musashi's Oni Awakening arc. There is no character creation or customization system — Musashi is a complete, written lead rather than a blank-slate character.",
    keyFacts: [
      { label: "Protagonist", value: "Miyamoto Musashi (fixed, no character creation)" },
      { label: "Rival", value: "Sasaki Ganryu" },
      { label: "Antagonists", value: "Genma siblings Ifuu and Burai" },
      { label: "Late-game boss", value: "Genma Musashi (Demon Musashi)" },
      { label: "Oni Awakening", value: "Tied to Musashi's transformation arc" },
      { label: "Character creation", value: "Not supported" },
      { label: "Voice cast credits", value: "Not announced beyond Capcom and launch-window coverage as of 2026-09-02" },
      { label: "Release date", value: "September 3, 2026" },
    ],
    modules: [
      {
        id: "characters-overview",
        type: "prose",
        heading: "Onimusha Way of the Sword Cast Overview",
        body:
          "Onimusha: Way of the Sword has a focused cast built around Miyamoto Musashi as the fixed protagonist. Musashi's role is written rather than customizable, and there is no character creation or customization system. The supporting cast is built around a clear rival-antagonist triangle: Sasaki Ganryu as the rival, the Genma siblings Ifuu and Burai as antagonists, and Genma Musashi as the late-game boss tied to Musashi's own Oni Awakening arc.\n\nThe cast is intentionally narrow. Rather than branching between playable characters, the game centers Musashi's sword play and Oni Gauntlet timing as the through-line, with the supporting cast serving as the boss-fight content and the narrative mirror for Musashi's transformation.",
      },
      {
        id: "characters-musashi",
        type: "prose",
        heading: "Miyamoto Musashi — Fixed Protagonist",
        body:
          "Miyamoto Musashi is the single fixed protagonist of Onimusha: Way of the Sword. He is portrayed as a swordsman caught up in the Genma conflict, and his Oni Awakening transformation is the narrative bridge between his human sword style and the Oni Gauntlet system. There is no character creation or customization layer; Musashi is a complete, written lead rather than a blank-slate character.\n\nAs the protagonist, Musashi's move set — sword play, Oni Gauntlet parry, Issen counter, and Oni Awakening transformation — is the player-facing combat system. Charms augment his kit, but the protagonist's move set itself is fixed. The [combat mechanics page](/combat/) explains the four combat layers.",
      },
      {
        id: "characters-ganryu",
        type: "prose",
        heading: "Sasaki Ganryu — Rival",
        body:
          "Sasaki Ganryu is Musashi's direct rival. The rivalry is the through-line of the early chapters and the framing for the demo's signature boss fight. Ganryu is the first real skill check a player meets, and his heavy-swing animations open the cleanest Oni Gauntlet window in the demo. The [Issen guide](/issen/) covers the timing rhythm that the Ganryu fight teaches.",
      },
      {
        id: "characters-ifuu-burai",
        type: "prose",
        heading: "Ifuu and Burai — Genma Siblings",
        body:
          "Ifuu and Burai are confirmed Genma siblings. They are positioned as a dual boss encounter, which raises the combat pressure by forcing Musashi to manage two Oni Gauntlet windows in parallel. The Issen timing rhythm from the Sasaki Ganryu fight carries over, but the dual-encounter pacing complicates chain-Issens because two enemies' animations need to be tracked at once.",
      },
      {
        id: "characters-genma-musashi",
        type: "prose",
        heading: "Genma Musashi — Demon Musashi",
        body:
          "Genma Musashi is the late-game boss tied to Musashi's Oni Awakening arc. Genma Musashi represents the Oni-corrupted version of Musashi's sword style, making the encounter a narrative mirror of Musashi's transformation. The fight is positioned as the capstone boss rather than a separate difficulty tier. Exact HP values and damage scaling are not announced as of 2026-09-02.",
      },
      {
        id: "characters-support",
        type: "prose",
        heading: "Supporting Cast and Ally Roles",
        body:
          "Beyond the four named Genma encounters, Onimusha: Way of the Sword includes supporting characters who appear in the chapter narrative rather than as boss fights. The Premium Deluxe Edition adds ally outfits that customize these supporting characters' looks. Specific supporting character names and full voice-cast credits beyond what Capcom and launch-window reviews have already named are not announced as of 2026-09-02.",
      },
      {
        id: "characters-voice",
        type: "prose",
        heading: "Voice Cast and Localization",
        body:
          "Capcom has published the principal cast credits through its standard channels and the launch-window reviews have named the same leads. Full voice-cast credits beyond what Capcom and launch-window reviews have already published are not announced as of 2026-09-02. Localization is English-only at launch; other language voice tracks are not announced as of 2026-09-02.",
      },
      {
        id: "characters-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha Way of the Sword (Capcom, Steam AppID 2638890, 2026-09-03) stars Miyamoto Musashi as the fixed protagonist. Sasaki Ganryu is the rival; the Genma siblings Ifuu and Burai are the dual boss encounter; Genma Musashi is the late-game boss tied to Oni Awakening. There is no character creation system. Full voice-cast credits beyond what Capcom and launch-window reviews have named and any non-English voice tracks are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-main-character",
      "onimusha-way-of-the-sword-character-creation",
      "onimusha-way-of-the-sword-musashi-voice-actor",
    ],
    relatedPageIds: [
      "fixed-bosses-en-us",
      "fixed-combat-mechanics-en-us",
      "fixed-editions-pricing-en-us",
      "fixed-release-platforms-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // items-equipment — reference page
  {
    id: "fixed-items-equipment-en-us",
    translationKey: "items-equipment",
    locale: "en-US",
    routeKind: "fixed",
    slug: "items-equipment",
    url: "/items-equipment",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Items, Equipment, and Charms",
    seoTitle:
      "Onimusha Way of the Sword Items, Equipment, and Charms",
    metaDescription:
      "Onimusha Way of the Sword items include charms (Kubi Akari from the demo, Lion Dog from pre-order) and armor sets; hidden armor sets and exact charm counts are not announced.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) items center on Musashi's charm loadout and armor sets. The Kubi Akari charm comes from retaining the demo save; the Lion Dog charm comes from pre-ordering any edition. Hidden armor sets and exact charm counts are not announced as of 2026-09-02.",
    hero: {
      eyebrow: "Items and equipment",
      subtitle:
        "Onimusha: Way of the Sword items center on Musashi's charm loadout and armor sets. The Kubi Akari charm comes from retaining the demo save, and the Lion Dog charm comes from pre-ordering any edition. Hidden armor sets and exact charm counts are not announced as of 2026-09-02.",
      ctas: [
        { label: "Demo Guide", href: "/demo" },
        { label: "Editions & Pricing", href: "/editions" },
        { label: "Combat Mechanics", href: "/combat" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword items center on Musashi's charm loadout and armor sets. The Kubi Akari charm comes from retaining the demo save; the Lion Dog charm comes from pre-ordering any edition; both charm effects augment combat. The Deluxe Edition bundles extra charms, and the Premium Deluxe Edition adds ally outfits. Hidden armor sets and exact charm counts are not announced as of 2026-09-02.",
    keyFacts: [
      { label: "Charm equipment", value: "Charms slot into Musashi's loadout and augment combat" },
      { label: "Kubi Akari charm", value: "Retain demo save to unlock" },
      { label: "Lion Dog charm", value: "Pre-order any edition" },
      { label: "Sealed Curse sword appearance", value: "Pre-order bonus" },
      { label: "Deluxe Kit", value: "Deluxe and Premium Deluxe Editions" },
      { label: "Ally outfits", value: "Premium Deluxe Edition only" },
      { label: "Hidden armor sets", value: "Not announced as of 2026-09-02" },
      { label: "Release date", value: "September 3, 2026" },
    ],
    modules: [
      {
        id: "items-overview",
        type: "prose",
        heading: "Onimusha Way of the Sword Items Overview",
        body:
          "Onimusha: Way of the Sword items center on Musashi's charm loadout and armor sets. The charm loadout is the primary mechanical layer of equipment — charms slot into Musashi's loadout and modify how sword play, Oni Gauntlet, Issen, and Oni Awakening behave. Armor sets sit alongside the charm loadout as visual and protection layers.\n\nThe pre-order Sealed Curse sword appearance and the Lion Dog charm are confirmed pre-order equipment. The Kubi Akari charm from the demo save carry-over is confirmed launch equipment. The Deluxe Edition bundles extra charms and the Deluxe Kit cosmetics; the Premium Deluxe Edition adds ally outfits and a digital soundtrack.",
      },
      {
        id: "items-charms",
        type: "prose",
        heading: "Charms — Loadout Equipment",
        body:
          "Charms are usable equipment items that slot into Musashi's charm loadout. Each charm grants a passive or triggered effect that augments one or more combat layers — sword play, Oni Gauntlet, Issen, or Oni Awakening. Charms have mechanical impact rather than purely cosmetic value, so charm selection changes how Musashi plays in combat.\n\nTwo charms are confirmed at launch: the Kubi Akari charm (retain demo save) and the Lion Dog charm (pre-order any edition). The Deluxe Edition bundles extra charms in addition to the Kubi Akari and Lion Dog charms, which all players receive. Exact charm effects beyond the two confirmed charms and the Deluxe Edition bundle are not announced as of 2026-09-02.",
      },
      {
        id: "items-armor",
        type: "prose",
        heading: "Armor Sets",
        body:
          "Armor sets are part of Onimusha: Way of the Sword's equipment layer. Armor sets handle visual customization and protection, sitting alongside the charm loadout. Specific armor set counts and exact armor set locations are not announced as of 2026-09-02 beyond the Standard Edition's base armor set.\n\nHidden armor sets, secret armor pieces, and any post-launch armor DLC are not announced as of 2026-09-02. The [editions page](/editions/) explains how the Deluxe Kit cosmetics layer on top of armor.",
      },
      {
        id: "items-deluxe-kit",
        type: "prose",
        heading: "Deluxe Kit Cosmetics",
        body:
          "The Deluxe Kit is the cosmetic equipment layer bundled with the Deluxe and Premium Deluxe Editions. The Deluxe Kit covers Musashi's costume pieces, sword appearance variants, and other visual equipment. The Deluxe Kit is cosmetic-only — it does not alter sword play, Oni Gauntlet timing, or Issen damage values.\n\nPremium Deluxe Edition adds ally outfits on top of the Deluxe Kit, which customize the supporting cast's visual equipment. The ally outfits are also cosmetic-only.",
      },
      {
        id: "items-kubi-akari",
        type: "prose",
        heading: "Kubi Akari Charm — Demo Carry-Over",
        body:
          "The Kubi Akari charm is granted automatically when the demo save is detected in the full game. There is no redemption code or transfer step required — the charm is delivered when the full game is launched with the demo save still in place. The [demo guide](/demo/) explains the carry-over rules.\n\nPlayers who delete the demo data before installing the full game lose the Kubi Akari charm. The practical implication is to keep the demo installation intact until the full game has been launched at least once and the charm has been delivered.",
      },
      {
        id: "items-lion-dog",
        type: "prose",
        heading: "Lion Dog Charm and Sealed Curse — Pre-Order Bonuses",
        body:
          "Every pre-order, regardless of edition, includes two pre-order bonuses: the Sealed Curse sword appearance and the Lion Dog charm. The Sealed Curse is a cosmetic sword appearance for Musashi's equipped blade; the Lion Dog is a charm that slots into the charm loadout.\n\nThe Lion Dog charm is granted as a pre-order bonus whether or not the player has played the demo. Players who have both the Kubi Akari and the Lion Dog charm can carry both charms into the launch loadout.",
      },
      {
        id: "items-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha Way of the Sword (Capcom, Steam AppID 2638890, 2026-09-03) items include charms and armor sets. The Kubi Akari charm is granted by retaining the demo save. The Lion Dog charm and the Sealed Curse sword appearance are pre-order bonuses. The Deluxe Edition bundles extra charms and the Deluxe Kit cosmetics. The Premium Deluxe Edition adds ally outfits. Hidden armor sets, exact armor set counts, exact charm effects beyond the two confirmed charms and the Deluxe Edition bundle, and any post-launch equipment DLC are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-missable-armor",
      "onimusha-way-of-the-sword-decorated-sword-where",
      "onimusha-way-of-the-sword-missable-armor",
    ],
    relatedPageIds: [
      "fixed-demo-en-us",
      "fixed-editions-pricing-en-us",
      "fixed-combat-mechanics-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // trophies-achievements — reference page
  {
    id: "fixed-trophies-achievements-en-us",
    translationKey: "trophies-achievements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "trophies",
    url: "/trophies",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Trophies and Achievements",
    seoTitle:
      "Onimusha Way of the Sword Trophies and Achievements",
    metaDescription:
      "Onimusha Way of the Sword trophies and achievements: confirmed PlayStation and Xbox categories. The full Steam achievement list prior to release is not announced.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) ships with a trophy and achievement system on PlayStation 5, Xbox, and Steam. The full Steam achievement list prior to release is not announced as of 2026-09-02; Capcom's policy is to publish the full list at launch.",
    hero: {
      eyebrow: "Trophies and achievements",
      subtitle:
        "Onimusha: Way of the Sword ships with trophies and achievements on PlayStation 5, Xbox, and Steam. Capcom's standard launch policy is to publish the full trophy list at launch, and the full list prior to release is not announced as of 2026-09-02. The Steam Community hub tracks community progress once the list goes live.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Items & Equipment", href: "/items-equipment" },
        { label: "Reviews & Press", href: "/reviews" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword ships with trophies and achievements on PlayStation 5, Xbox, and Steam. Capcom's standard launch policy is to publish the full trophy list at launch; the full list prior to release is not announced as of 2026-09-02. The Steam Community hub will track community progress once the list goes live. Platinum trophy, exact achievement counts, and Steam icon lists are not announced prior to release.",
    keyFacts: [
      { label: "Trophy support", value: "PlayStation 5 trophies" },
      { label: "Achievement support", value: "Xbox achievements, Steam achievements" },
      { label: "Full list", value: "Not announced prior to release as of 2026-09-02" },
      { label: "Launch policy", value: "Capcom publishes full list at launch" },
      { label: "Platinum trophy", value: "Not announced as of 2026-09-02" },
      { label: "Exact achievement count", value: "Not announced as of 2026-09-02" },
      { label: "Steam icon list", value: "Not announced prior to release as of 2026-09-02" },
      { label: "Release date", value: "September 3, 2026" },
    ],
    modules: [
      {
        id: "trophies-overview",
        type: "prose",
        heading: "Trophy and Achievement Support Overview",
        body:
          "Onimusha: Way of the Sword ships with trophies and achievements on PlayStation 5, Xbox, and Steam. Each platform has its own unlock list tied to the same in-game events — clearing chapter milestones, defeating bosses, completing the New Game+ Carnage Difficulty loop, and similar story-mode and combat achievements.\n\nCapcom's standard launch policy is to publish the full trophy list at launch, and the full list prior to release is not announced as of 2026-09-02. The Steam Community hub will track community progress once the list goes live, and the PlayStation and Xbox platforms will unlock the same content on their respective lists.",
      },
      {
        id: "trophies-platforms",
        type: "prose",
        heading: "Trophy and Achievement Lists by Platform",
        body:
          "Each platform has its own unlock list, and the lists map to the same in-game events.\n\n- PlayStation 5: Trophies are awarded on the PlayStation Network profile. A Platinum trophy is awarded when all other trophies are unlocked; the Platinum trophy status for Onimusha: Way of the Sword is not announced as of 2026-09-02.\n- Xbox: Achievements are awarded on the Xbox Live profile. Gamerscore values per achievement are platform-standard; exact achievement counts are not announced as of 2026-09-02.\n- Steam: Achievements are awarded on the Steam Community profile. The Steam icon list and exact achievement counts are not announced prior to release as of 2026-09-02.",
      },
      {
        id: "trophies-launch-policy",
        type: "prose",
        heading: "Launch-Day Trophy Publication",
        body:
          "Capcom's standard launch policy is to publish the full trophy list at launch. Players who want the full list before launch should monitor Capcom's official channels and the Steam store page on launch day. Pre-launch trophy lists published by third-party trackers should be treated as projected rather than authoritative until Capcom confirms them.",
      },
      {
        id: "trophies-missable",
        type: "prose",
        heading: "Missable Trophies and New Game+ Trophies",
        body:
          "Some trophies in Onimusha: Way of the Sword are tied to New Game+ Carnage Difficulty, the chapter-campaign completion, or specific boss encounters. Because the full list is not announced as of 2026-09-02, players cannot pre-plan a missable trophy path. The [New Game+ length page](/length/) explains how Carnage Difficulty extends the campaign, and the [bosses page](/bosses/) covers the confirmed boss roster that some trophies will tie to.",
      },
      {
        id: "trophies-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha Way of the Sword (Capcom, Steam AppID 2638890, 2026-09-03) ships with trophies and achievements on PlayStation 5, Xbox, and Steam. The full list prior to release is not announced as of 2026-09-02; Capcom's standard launch policy is to publish the full list at launch. Platinum trophy status, exact achievement counts, exact Steam icon list, and missable trophy paths are not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-steam-achievements",
      "onimusha-way-of-the-sword-achievement-list-public",
      "onimusha-way-of-the-sword-trophies-parity",
      "onimusha-way-of-the-sword-achievements-new-game-plus",
    ],
    relatedPageIds: [
      "fixed-release-platforms-en-us",
      "fixed-items-equipment-en-us",
      "fixed-length-en-us",
      "fixed-bosses-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  // reviews-press — reference page
  {
    id: "fixed-reviews-press-en-us",
    translationKey: "reviews-press",
    locale: "en-US",
    routeKind: "fixed",
    slug: "reviews",
    url: "/reviews",
    pageType: "guides",
    presentation: {
      shell: "content",
      variant: "reading-right-rail",
    },
    h1: "Onimusha Way of the Sword Reviews and Press",
    seoTitle:
      "Onimusha Way of the Sword Reviews and Press",
    metaDescription:
      "Onimusha Way of the Sword reviews and press coverage from HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot in the launch window.",
    summary:
      "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890) reviews and press coverage published in the launch window covers HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot. Aggregate review scores and specific numeric review scores are embargoed as of 2026-09-02.",
    hero: {
      eyebrow: "Reviews and press",
        subtitle:
          "Onimusha: Way of the Sword reviews and press coverage published in the launch window covers HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot. The Capcom Spotlight trailer and the Capcom release-date advancement announcement are the official pre-launch press anchors. Aggregate review scores and specific numeric review scores are embargoed as of 2026-09-02.",
      ctas: [
        { label: "Release Status", href: "/release" },
        { label: "Trophies & Achievements", href: "/trophies" },
        { label: "Home", href: "/" },
      ],
    },
    quickAnswer:
      "Onimusha Way of the Sword reviews and press coverage published in the launch window covers HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot. Aggregate review scores, Metacritic scores, and specific numeric review scores are embargoed as of 2026-09-02. The Capcom Spotlight trailer and the Capcom release-date advancement announcement are the official pre-launch press anchors.",
    keyFacts: [
      { label: "Launch-window outlets", value: "HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, GameSpot" },
      { label: "Official press", value: "Capcom Spotlight Game Overview Trailer, Capcom release-date advancement announcement" },
      { label: "Metacritic score", value: "Embargoed as of 2026-09-02" },
      { label: "OpenCritic score", value: "Embargoed as of 2026-09-02" },
      { label: "Numeric review scores", value: "Embargoed until launch day" },
      { label: "Aggregated sentiment", value: "Not published prior to embargo lift" },
      { label: "Steam reviews", value: "Not yet available prior to launch" },
      { label: "Release date", value: "September 3, 2026" },
    ],
    modules: [
      {
        id: "reviews-overview",
        type: "prose",
        heading: "Onimusha Way of the Sword Reviews Overview",
        body:
          "Onimusha: Way of the Sword reviews and press coverage in the launch window covers a set of named outlets: HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot. These outlets have published launch-window coverage tied to the September 3, 2026 release. The Capcom Spotlight Game Overview Trailer and the Capcom release-date advancement announcement are the official pre-launch press anchors.\n\nAggregate review scores, Metacritic scores, and OpenCritic scores are embargoed as of 2026-09-02. Numeric review scores from the named outlets are also embargoed until the launch day lifts.",
      },
      {
        id: "reviews-table",
        type: "data-table",
        heading: "Launch-window press coverage",
        columns: [
          { key: "outlet", label: "Outlet" },
          { key: "region", label: "Region" },
          { key: "type", label: "Coverage type" },
          { key: "status", label: "Score status" },
        ],
        rows: [
          { outlet: "HowToShark", region: "US", type: "Launch-window review", status: "Embargoed as of 2026-09-02" },
          { outlet: "Dengeki PlayStation", region: "JP", type: "Launch-window review", status: "Embargoed as of 2026-09-02" },
          { outlet: "RPG Site", region: "US/UK", type: "Launch-window review", status: "Embargoed as of 2026-09-02" },
          { outlet: "Push Square", region: "UK", type: "Launch-window review", status: "Embargoed as of 2026-09-02" },
          { outlet: "WorthPlaying", region: "US", type: "Launch-window review", status: "Embargoed as of 2026-09-02" },
          { outlet: "GameSpot", region: "US", type: "Launch-window review", status: "Embargoed as of 2026-09-02" },
        ],
      },
      {
        id: "reviews-howtoshark",
        type: "prose",
        heading: "HowToShark Launch-Window Review",
        body:
          "HowToShark has published launch-window coverage of Onimusha: Way of the Sword. The review describes the title as part of a multi-platform launch across Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store. Specific numeric review scores from HowToShark are embargoed as of 2026-09-02.",
      },
      {
        id: "reviews-dengeki",
        type: "prose",
        heading: "Dengeki PlayStation Launch-Window Review",
        body:
          "Dengeki PlayStation has published launch-window coverage in the Japanese market. The Dengeki review is part of the launch-window press cohort that has confirmed the multi-platform launch. Specific numeric review scores from Dengeki are embargoed as of 2026-09-02.",
      },
      {
        id: "reviews-rpg-site",
        type: "prose",
        heading: "RPG Site Launch-Window Review",
        body:
          "RPG Site has published launch-window coverage of Onimusha: Way of the Sword. RPG Site's launch-window piece is part of the broader Western press cohort. Specific numeric review scores from RPG Site are embargoed as of 2026-09-02.",
      },
      {
        id: "reviews-push-square",
        type: "prose",
        heading: "Push Square Launch-Window Review",
        body:
          "Push Square has published launch-window coverage. Push Square's coverage focuses on the PlayStation 5 build as part of the multi-platform launch. Specific numeric review scores from Push Square are embargoed as of 2026-09-02.",
      },
      {
        id: "reviews-worthplaying",
        type: "prose",
        heading: "WorthPlaying Launch-Window Review",
        body:
          "WorthPlaying has published launch-window coverage of Onimusha: Way of the Sword. The WorthPlaying review is part of the Western press cohort. Specific numeric review scores from WorthPlaying are embargoed as of 2026-09-02.",
      },
      {
        id: "reviews-gamespot",
        type: "prose",
        heading: "GameSpot Launch-Window Review",
        body:
          "GameSpot has published launch-window coverage of Onimusha: Way of the Sword. GameSpot's review is part of the Western press cohort and ties into the broader Western release coverage. Specific numeric review scores from GameSpot are embargoed as of 2026-09-02.",
      },
      {
        id: "reviews-aggregate",
        type: "prose",
        heading: "Aggregate Scores and Embargo",
        body:
          "Aggregate review scores from Metacritic, OpenCritic, and Steam user reviews are embargoed as of 2026-09-02. Aggregators will publish scores when the embargo lifts on launch day. Players who want to track sentiment before launch should read the named launch-window outlets rather than rely on pre-launch aggregate projections, which are not supported by current evidence.",
      },
      {
        id: "reviews-official",
        type: "prose",
        heading: "Official Press Anchors",
        body:
          "The official pre-launch press anchors are the Capcom Spotlight Game Overview Trailer and the Capcom release-date advancement announcement. These are Capcom's own channels and are the authoritative reference for the title's framing, the release-date advancement timeline, and the multi-platform launch lineup. The [release status page](/release/) tracks the official release-date timeline.",
      },
      {
        id: "reviews-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-02",
        body:
          "Onimusha Way of the Sword (Capcom, Steam AppID 2638890, 2026-09-03) reviews and press coverage in the launch window covers HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot. Numeric review scores from these outlets, Metacritic and OpenCritic aggregates, Steam user reviews, and aggregated sentiment are embargoed as of 2026-09-02. The Capcom Spotlight trailer and the Capcom release-date advancement announcement are the official pre-launch press anchors.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-reviews-outlets",
      "onimusha-way-of-the-sword-metacritic-score",
      "onimusha-way-of-the-sword-review-embargo",
    ],
    relatedPageIds: [
      "fixed-release-platforms-en-us",
      "fixed-trophies-achievements-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
];