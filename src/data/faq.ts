import type { FAQItem } from "@/types/content";

// Onimusha: Way of the Sword — V3 FAQ items. Each FAQ id referenced from a
// page module is registered here so getFaqsForPage can resolve it. FAQ ids
// mirror the content-package and V3 Site Plan.

export const faqItems: FAQItem[] = [
  // Homepage
  {
    id: "onimusha-way-of-the-sword-release-date",
    question: "When does Onimusha: Way of the Sword release?",
    answer:
      "Onimusha: Way of the Sword releases September 3, 2026 on Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store. The date was advanced from the originally announced September 25, 2026.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-availability",
    question: "Is there a demo for Onimusha: Way of the Sword?",
    answer:
      "Yes. A free demo is live on Steam, PlayStation 5, Xbox, and the Epic Games Store. It covers the Kiyomizu-dera Temple area, includes a Sasaki Ganryu boss fight, and an expanded demo adds a new area with another \"fearsome boss.\"",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-reward",
    question: "What reward do you get for playing the demo?",
    answer:
      "Players who keep the demo save receive the Kubi Akari charm, which carries into the full game.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-price",
    question: "How much does Onimusha: Way of the Sword cost?",
    answer:
      "The Standard Edition is $69.99, the Deluxe Edition is $79.99, and the Premium Deluxe Edition is $89.99 on the Steam store page. Region-specific pricing outside US dollars is not announced as of 2026-09-02.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-pre-order-bonuses",
    question: "What are the pre-order bonuses?",
    answer:
      "Pre-orders include the Sealed Curse sword appearance and the Lion Dog charm, regardless of which edition is purchased.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // release-platforms
  {
    id: "onimusha-way-of-the-sword-release-final-date",
    question: "When is the Onimusha: Way of the Sword release date?",
    answer:
      "Onimusha: Way of the Sword releases September 3, 2026. The date was advanced from the original September 25, 2026 announcement, first to September 4 and then to the final September 3, 2026 launch.",
    pageIds: ["fixed-release-platforms-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-platforms",
    question: "On which platforms is Onimusha: Way of the Sword available?",
    answer:
      "The game launches on Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2, and the Epic Games Store.",
    pageIds: ["fixed-release-platforms-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-release-date-moved",
    question: "Did the Onimusha: Way of the Sword release date move?",
    answer:
      "Yes. Capcom advanced the date twice, from September 25, 2026 to September 4, 2026, and then to the final September 3, 2026 launch.",
    pageIds: ["fixed-release-platforms-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-switch-2-version",
    question: "Is there a Nintendo Switch 2 version of Onimusha: Way of the Sword?",
    answer:
      "Yes. Nintendo Switch 2 is one of the five confirmed launch platforms, and the Switch 2 version page covers the platform-specific details.",
    pageIds: ["fixed-release-platforms-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // system-requirements
  {
    id: "onimusha-way-of-the-sword-min-specs",
    question: "What are the minimum system requirements for Onimusha: Way of the Sword?",
    answer:
      "The Steam store page lists a minimum PC configuration for Onimusha: Way of the Sword. Use that listing as the authoritative reference; third-party recaps may be out of date.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-same-specs",
    question: "Does the demo have the same system requirements as the full game?",
    answer:
      "Yes. The Steam demo runs on the same engine as the full game, so its published system requirements are a useful baseline for the full release.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-steam-deck-verified",
    question: "Is Onimusha: Way of the Sword Steam Deck verified?",
    answer:
      "Steam Deck verification status has not been publicly confirmed as of 2026-09-02. Check the Steam store page closer to launch for the official verdict.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-ray-tracing-dlss",
    question: "Does Onimusha: Way of the Sword support ray tracing or DLSS?",
    answer:
      "Ray tracing, DLSS, FSR, and XeSS behavior is not announced as of 2026-09-02. Treat any third-party claim about these features as unverified until Capcom confirms.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-pc-release-date",
    question: "When does Onimusha: Way of the Sword release on PC?",
    answer:
      "The PC release on Steam and the Epic Games Store is scheduled for September 3, 2026. The release status page tracks the full release-date advancement timeline.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // demo
  {
    id: "onimusha-way-of-the-sword-demo-exists",
    question: "Is there a demo for Onimusha: Way of the Sword?",
    answer:
      "Yes. The demo is available on Steam, PlayStation 5, Xbox, and the Epic Games Store ahead of the September 3, 2026 release.",
    pageIds: ["fixed-demo-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-content",
    question: "What content does the Onimusha: Way of the Sword demo include?",
    answer:
      "The demo opens in the Kiyomizu-dera Temple area and culminates in a Sasaki Ganryu boss fight. An expanded demo adds a new area and another \"fearsome boss.\"",
    pageIds: ["fixed-demo-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-length",
    question: "How long is the Onimusha: Way of the Sword demo?",
    answer:
      "Each demo session runs about thirty minutes, primarily because the Sasaki Ganryu fight is the central skill check and benefits from repeated retries.",
    pageIds: ["fixed-demo-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-save-reward",
    question: "What reward do you get for keeping the demo save?",
    answer:
      "Players who keep the demo save receive the Kubi Akari charm in the full game. The charm is delivered automatically once the full game detects the retained save.",
    pageIds: ["fixed-demo-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-cross-platform",
    question: "Does the demo carry over between platforms?",
    answer:
      "No. Demo saves are storefront-specific. A Steam demo save stays on Steam, a PS5 demo save stays on PlayStation, an Xbox demo save stays on Xbox, and an Epic demo save stays on Epic.",
    pageIds: ["fixed-demo-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-same-content",
    question: "Is the demo the same on every platform?",
    answer:
      "The demo covers the same Kiyomizu-dera Temple area and Sasaki Ganryu boss on every storefront, and the expanded demo's new area plus \"fearsome boss\" is also shared across storefronts.",
    pageIds: ["fixed-demo-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // editions-pricing
  {
    id: "onimusha-way-of-the-sword-editions-list",
    question: "What editions does Onimusha: Way of the Sword have?",
    answer:
      "The game has three editions: Standard at $69.99, Deluxe at $79.99, and Premium Deluxe at $89.99 on the Steam store page.",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-deluxe-contents",
    question: "What is included in the Deluxe Edition?",
    answer:
      "The Deluxe Edition is digital-only and includes the Deluxe Kit cosmetics plus extra charms, on top of the base game. It is priced at $79.99.",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-premium-deluxe-contents",
    question: "What is included in the Premium Deluxe Edition?",
    answer:
      "The Premium Deluxe Edition is digital-only and adds ally outfits and a digital soundtrack on top of the Deluxe Edition content. It is priced at $89.99.",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-pre-order-bonus-edition",
    question: "Are pre-order bonuses the same for every edition?",
    answer:
      "Yes. Every pre-order, regardless of edition, includes the Sealed Curse sword appearance and the Lion Dog charm.",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-standard-physical",
    question: "Is the Standard Edition available physically?",
    answer:
      "Yes. The Standard Edition has both a physical SKU and a digital SKU. The Deluxe and Premium Deluxe editions are digital-only.",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-region-pricing",
    question: "Will there be region-specific pricing outside US dollars?",
    answer:
      "Region-specific pricing outside US dollars is not announced as of 2026-09-02. Check your local storefront for converted pricing closer to launch day.",
    pageIds: ["fixed-editions-pricing-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // switch-2-version
  {
    id: "onimusha-way-of-the-sword-switch-2-launch",
    question: "Is Onimusha Way of the Sword on Switch 2?",
    answer:
      "Yes. Nintendo Switch 2 is one of the five launch platforms on 2026-09-03, alongside Steam, PlayStation 5, Xbox Series X|S, and Epic Games Store.",
    pageIds: ["fixed-switch-2-version-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-switch-2-demo",
    question: "Does Onimusha Way of the Sword have a Switch 2 demo?",
    answer:
      "Yes. The cross-store demo, including the expanded demo with a second \"fearsome boss,\" is available on the Switch 2 eShop with the same Kiyomizu-dera Temple opening and Sasaki Ganryu fight as other platforms.",
    pageIds: ["fixed-switch-2-version-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-switch-2-parity",
    question: "Will the Switch 2 version run at the same quality as PS5?",
    answer:
      "Not announced as of 2026-09-02. Capcom has published the Switch 2 release as part of the multi-platform launch but has not released a frame-rate target, resolution target, or parity guarantee against PlayStation 5 or Xbox Series X|S.",
    pageIds: ["fixed-switch-2-version-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-switch-2-exclusive",
    question: "Are there Switch 2-exclusive bonuses?",
    answer:
      "Not announced as of 2026-09-02. The Sealed Curse sword pre-order appearance and the Lion Dog charm are shared across editions, not Switch 2-exclusive.",
    pageIds: ["fixed-switch-2-version-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // length
  {
    id: "onimusha-way-of-the-sword-main-story-length",
    question: "How long is Onimusha Way of the Sword's main story?",
    answer:
      "The main story is delivered across a chapter-based campaign. Exact main-story hours are not announced as of 2026-09-02, so any third-party number should be treated as unverified until Capcom publishes a number or community trackers aggregate one.",
    pageIds: ["fixed-length-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-new-game-plus-length",
    question: "Does New Game+ add playtime?",
    answer:
      "Yes. The New Game+ Carnage Difficulty loop is the largest length-extending lever. It carries unlocks, upgrades, outfits, and tutorials but does not carry story progress, materials, or save points, so each Carnage run still requires rebuilding consumables and finding new save shrines.",
    pageIds: ["fixed-length-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-difficulty-length",
    question: "Do difficulty settings change playtime?",
    answer:
      "Yes. Easier difficulty presets shorten encounters because mistakes are cheaper, while harder presets such as Oni lengthen boss fights because Issen timing windows are tighter. The difficulty ladder is described in detail on the difficulty page.",
    pageIds: ["fixed-length-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-length-effect",
    question: "Does the demo affect main-story length?",
    answer:
      "Not directly. The Kubi Akari charm reward from the demo is a save-retain mechanic that lets players carry their demo save into the full game. It does not shorten or extend the chapter campaign, but it lets players skip a save-point tutorial loop at the start of the campaign.",
    pageIds: ["fixed-length-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // difficulty-settings
  {
    id: "onimusha-way-of-the-sword-difficulty-options",
    question: "What difficulty options does Onimusha Way of the Sword have?",
    answer:
      "The game ships with four named presets — Light, Normal, Hard, and Oni — plus a separate New Game+ mode called Carnage Difficulty that unlocks after the first ending.",
    pageIds: ["fixed-difficulty-settings-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-hardest-difficulty",
    question: "What is the hardest difficulty in Onimusha Way of the Sword?",
    answer:
      "Among the four first-run presets, Oni is the hardest. Carnage Difficulty is a separate New Game+ mode that unlocks after clearing the campaign and adds a higher-tier enemy layer on top of the carried-over unlocks.",
    pageIds: ["fixed-combat-mechanics-en-us", "fixed-difficulty-settings-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-change-difficulty-mid-game",
    question: "Can I change difficulty mid-game?",
    answer:
      "The full game's preset ladder is selectable from Chapter 1. The demo's preset selection is more limited because the demo is a single slice rather than a full campaign.",
    pageIds: ["fixed-difficulty-settings-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-carnage-difficulty-save",
    question: "Does Carnage Difficulty carry over my save?",
    answer:
      "Carnage Difficulty carries unlocks, upgrades, outfits, and tutorials from the first run. It does not carry story progress, materials, or save points, so each Carnage run still requires rebuilding consumables and finding new save shrines.",
    pageIds: ["fixed-combat-mechanics-en-us", "fixed-difficulty-settings-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // combat-mechanics
  {
    id: "onimusha-way-of-the-sword-oni-gauntlet",
    question: "What is the Oni Gauntlet in Onimusha Way of the Sword?",
    answer:
      "The Oni Gauntlet is a perfect-timing parry and counter system that lets Musashi interrupt enemy attacks. It is a risk-reward mechanic because a successful parry opens a heavy counter while a failed parry costs Musashi more than a normal block.",
    pageIds: ["fixed-combat-mechanics-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-issen-named-counter",
    question: "What is Issen in Onimusha Way of the Sword?",
    answer:
      "Issen is the named counter technique inside the Oni Gauntlet system. It lands as a high-payoff response to specific enemy telegraphs and can be chained for combo bonuses. Timing details are covered on the Issen guide page.",
    pageIds: ["fixed-combat-mechanics-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-oni-awakening",
    question: "What is Oni Awakening?",
    answer:
      "Oni Awakening is Musashi's transformation state, a temporary buffed-offense shift that activates at story beats. It amplifies Musashi's existing sword play and Issen counters rather than introducing a separate combat identity.",
    pageIds: ["fixed-combat-mechanics-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-oni-awakening-replace",
    question: "Does Oni Awakening replace sword play or the Oni Gauntlet?",
    answer:
      "No. Oni Awakening is a buff layer that sits on top of sword play, the Oni Gauntlet, and Issen. Musashi keeps using the same combat systems while the transformation buff is active.",
    pageIds: ["fixed-combat-mechanics-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // issen-guide
  {
    id: "onimusha-way-of-the-sword-issen",
    question: "What is Issen in Onimusha Way of the Sword?",
    answer:
      "Issen is the named counter technique inside the Oni Gauntlet parry system. It is a high-payoff counter that lands when Musashi parries a committed enemy attack and converts the parry into a heavy follow-up strike.",
    pageIds: ["fixed-combat-mechanics-en-us", "fixed-issen-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-issen-timing",
    question: "How do I time Issen?",
    answer:
      "Issen timing requires reading the difference between a normal enemy attack and a committed attack. Only committed attacks open the Issen window, and the cue is the brief telegraph pause or visual flash before the committed strike. Exact frame-data windows are not announced as of 2026-09-02.",
    pageIds: ["fixed-issen-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-chain-issen",
    question: "Can I chain Issen for combos?",
    answer:
      "Yes. Chain Issen sequences build when Musashi lands an Issen, reads the next committed attack during the stagger, and lands another Issen. The combo counter climbs during the chain and resets if Musashi misses an Issen attempt.",
    pageIds: ["fixed-issen-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-issen-demo-practice",
    question: "Should I practice Issen in the demo?",
    answer:
      "Yes. The cross-store demo's Kiyomizu-dera Temple and Sasaki Ganryu fight are designed as Issen training, and the expanded demo's second boss adds a different committed-attack pattern. The Kubi Akari charm carries the demo save into the full game as a reward.",
    pageIds: ["fixed-issen-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-issen-difficulty",
    question: "Does Issen change with difficulty?",
    answer:
      "Yes. Light and Normal difficulty widen the parry window, which makes Issen easier to land. Hard and Oni difficulty narrow the window, which makes Issen higher-stakes per attempt.",
    pageIds: ["fixed-issen-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // bosses
  {
    id: "onimusha-way-of-the-sword-how-many-bosses",
    question: "How many bosses does Onimusha Way of the Sword have?",
    answer:
      "The confirmed Onimusha Way of the Sword boss roster counts Sasaki Ganryu, the Genma siblings Ifuu and Burai, Genma Musashi, and an expanded-demo boss. Any total number of bosses beyond that roster is not announced as of 2026-09-02.",
    pageIds: ["fixed-bosses-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-first-boss",
    question: "Who is the first boss in Onimusha Way of the Sword?",
    answer:
      "Sasaki Ganryu is the first boss players encounter, as both the Kiyomizu-dera Temple demo fight and the early-game rival duel. He functions as the first Issen-timing training encounter.",
    pageIds: ["fixed-bosses-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-demo-secret-boss",
    question: "Is there a secret boss in the Onimusha Way of the Sword demo?",
    answer:
      "The expanded demo adds another \"fearsome boss\" beyond the Sasaki Ganryu duel, but the boss has not been named publicly and no secret-fight criteria have been published as of 2026-09-02.",
    pageIds: ["fixed-bosses-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-issen-every-boss",
    question: "Can you Issen every boss in Onimusha Way of the Sword?",
    answer:
      "The Issen counter is the named counter technique that works against every Genma encounter Capcom has shown, including Sasaki Ganryu, the Genma siblings, Genma Musashi, and the expanded-demo boss. Exact frame data windows remain not announced as of 2026-09-02.",
    pageIds: ["fixed-issen-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // characters
  {
    id: "onimusha-way-of-the-sword-main-character",
    question: "Who is the main character in Onimusha Way of the Sword?",
    answer:
      "The main character is Miyamoto Musashi, the real historical swordsman who Capcom uses as the fixed protagonist. There is no playable-character select, no avatar system, and no party to switch between; Musashi is the only playable character.",
    pageIds: ["fixed-characters-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-character-creation",
    question: "Is there character creation in Onimusha Way of the Sword?",
    answer:
      "No. There is no character creation or character customization system. Musashi's appearance, name, and abilities are all locked to the design shown in the Capcom Spotlight 4th character trailer.",
    pageIds: ["fixed-characters-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-female-characters",
    question: "Are there female characters in Onimusha Way of the Sword?",
    answer:
      "Capcom has not published a roster with confirmed female character roles as of 2026-09-02. The launch-window press coverage names Musashi, Sasaki Ganryu, Ifuu, Burai, and Genma Musashi; any other named roles are not announced.",
    pageIds: ["fixed-characters-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-returning-characters",
    question: "Are there returning characters from older Onimusha games?",
    answer:
      "Capcom has not announced any returning franchise characters as part of the Way of the Sword cast. The Genma faction and Oni Gauntlet name are shared with the prior series, but no specific returning character from Onimusha: Warlords, Onimusha 2: Samurai's Destiny, Onimusha 3: Demon Siege, Onimusha: Dawn of Dreams, Onimusha Tactics, or Onimusha: Blade Warriors has been confirmed for this entry.",
    pageIds: ["fixed-characters-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-musashi-voice-actor",
    question: "Who voices Musashi in Onimusha Way of the Sword?",
    answer:
      "Specific Musashi voice-actor credits for English and Japanese have not been published as of 2026-09-02. Capcom has confirmed the Musashi role but has not named the voice actor publicly.",
    pageIds: ["fixed-characters-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // items-equipment
  {
    id: "onimusha-way-of-the-sword-decorated-sword-where",
    question: "Where do I use the Decorated Sword in Onimusha Way of the Sword?",
    answer:
      "The Decorated Sword is a chapter key item used at a specific moment inside the chapter where you find it. It is not a combat weapon, and it is not carried across chapters. Exact use-point locations per chapter are not announced as of 2026-09-02.",
    pageIds: ["fixed-items-equipment-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-missable-armor",
    question: "Are there missable armor sets in Onimusha Way of the Sword?",
    answer:
      "Yes. Armor sets unlock as named chapter rewards, and the chapter-by-chapter unlock pacing means missing a chapter's reward step also misses that chapter's armor. New Game+ Carnage Difficulty lets you carry the armor you already unlocked into a second run.",
    pageIds: ["fixed-items-equipment-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-consumables-new-game-plus",
    question: "Do consumables carry into New Game+?",
    answer:
      "No. The New Game+ Carnage Difficulty mode carries unlocks, upgrades, outfits, and tutorials, but it does not carry story progress, materials, or save points. Consumable gear resets with the new run.",
    pageIds: ["fixed-items-equipment-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-decorated-sword-equip",
    question: "Is the Decorated Sword a weapon I can equip?",
    answer:
      "No. The Decorated Sword is treated as a chapter key item in the Steam Community hub, not as an equippable weapon. It does not change Oni Gauntlet or Issen damage and does not appear in Musashi's combat loadout.",
    pageIds: ["fixed-items-equipment-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // trophies-achievements
  {
    id: "onimusha-way-of-the-sword-steam-achievements",
    question: "Does Onimusha Way of the Sword have Steam achievements?",
    answer:
      "Yes. The Steam store page for AppID 2638890 lists Steam achievements as a confirmed feature. The full list was not publicly published as of 2026-09-02, but the achievement system is confirmed for the 2026-09-03 launch.",
    pageIds: ["fixed-trophies-achievements-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-achievement-list-public",
    question: "When does the Onimusha Way of the Sword Steam achievement list go public?",
    answer:
      "The achievement list becomes visible in the Steam client once the game ships on 2026-09-03. Capcom has not pre-published the list before launch, so the public list is the post-launch state, not the pre-launch one.",
    pageIds: ["fixed-trophies-achievements-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-achievements-new-game-plus",
    question: "Are achievements tied to New Game+ Carnage Difficulty?",
    answer:
      "Yes. New Game+ Carnage Difficulty is one of the six category buckets the achievement list is expected to cover. Carnage Difficulty carries unlocks, upgrades, outfits, and tutorials but not story progress, materials, or save points, so achievement triggers that depend on those do not roll over.",
    pageIds: ["fixed-trophies-achievements-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-trophies-parity",
    question: "Do trophies work the same on PS5 and Xbox?",
    answer:
      "The Steam achievements ship on PC. PS5 trophies and Xbox achievements use the platform-native systems, and any cross-platform parity claim beyond the Steam list is not announced as of 2026-09-02.",
    pageIds: ["fixed-trophies-achievements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // reviews-press
  {
    id: "onimusha-way-of-the-sword-review-embargo",
    question: "When does the Onimusha Way of the Sword review embargo lift?",
    answer:
      "The review embargo lifts on launch day, 2026-09-03. Until that point, specific numeric review scores are not announced as of 2026-09-02.",
    pageIds: ["about", "fixed-reviews-press-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-reviews-outlets",
    question: "Which outlets have published Onimusha Way of the Sword reviews?",
    answer:
      "HowToShark, GameSpot, WorthPlaying, RPG Site, Dengeki PlayStation, and Push Square have launch-window press coverage linked from their outlets as of 2026-09-02; numeric scores are not extracted here because the embargo has not lifted.",
    pageIds: ["fixed-reviews-press-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "onimusha-way-of-the-sword-metacritic-score",
    question: "Is there an Onimusha Way of the Sword Metacritic score yet?",
    answer:
      "No. The Metacritic aggregate score is not announced as of 2026-09-02; the page will be updated once the embargo lifts on 2026-09-03.",
    pageIds: ["fixed-reviews-press-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
];