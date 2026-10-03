# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Onimusha Way of the Sword guides | Find the right guide for the current play situation | Release status / Browse guides | Hub | Guide directory groups 20 fixed guides into Combat, Bosses, Progression, Collectibles, Reference and Overview clusters. |
| `/guides` | `src/data/pages/site-pages.ts` | Hub | Onimusha Way of the Sword guides index | Browse guides by cluster | Home / Wiki | Hub | Cluster-anchored landing page; no walkthrough duplication. |
| `/onimusha-way-of-the-sword/` | `src/data/pages/fixed-pages.ts` | Guide | what is Onimusha Way of the Sword | Confirm game basics | Release status / Combat guide | Supporting hub | 2026 standalone soft-reboot; Capcom-published; Musashi as protagonist. |
| `/onimusha-way-of-the-sword-release-date/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword release date | Check release timing per platform | Home / System requirements | Supporting hub | Must stay aligned to official Capcom product page and Steam store. |
| `/onimusha-way-of-the-sword-system-requirements/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword PC specs | Confirm PC minimum / recommended specs | Platform performance / Release status | Supporting hub | PC minimum: i5-8400 / GTX 1660 / 16 GB / 50 GB SSD with DLSS 4.5 / FSR 3.1. |
| `/onimusha-way-of-the-sword-combat-guide/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword combat Issen Parry | Master Issen / Parry / Deflect timing | Oni Gauntlet / Boss hubs | Supporting hub | Issen window ~6 frames at 60 FPS; visual cue: enemy weapon glowing white. |
| `/oni-gauntlet/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Oni Gauntlet tier unlock | Unlock Oni Gauntlet tier abilities | Combat guide / Weapons | Supporting hub | Tier unlocks tied to specific chapter milestones. |
| `/bosses/` | `src/data/pages/fixed-pages.ts` | Hub | Onimusha Way of the Sword bosses | Find chapter-boss order | Combat guide / Sasaki Ganryu | Hub | Chapter-boss hub; routes to Ganryu / Shuten Doji / Yoshitsune. |
| `/bosses/sasaki-ganryu/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword Sasaki Ganryu boss | Defeat Sasaki Ganryu at Kiyomizu-dera | Bosses hub / Combat guide | Detail | First chapter boss; Tsuba weakness part. |
| `/bosses/shuten-doji/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword Shuten Doji boss | Defeat Shuten Doji | Bosses hub / Combat guide | Detail | Back-crystal weakness; high stance break window. |
| `/bosses/yoshitsune/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword Yoshitsune final boss | Defeat Yoshitsune in three-phase plan | Endings / Bosses hub | Detail | Three-phase Issen plan; required for ending scene. |
| `/onimusha-way-of-the-sword-weapons/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword weapons tier upgrades | Pick weapon tier per chapter | Oni Gauntlet / Oni Armaments | Supporting hub | Tier upgrade costs cross-referenced against chapter unlocks. |
| `/oni-armaments/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Oni Armaments | Browse blue-soul armament roster | Combat guide / Weapons | Supporting hub | Blue-soul armaments; per-armament unlock path. |
| `/onimusha-way-of-the-sword-difficulty/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword difficulty Carnage | Decide Story / Action / Carnage | Endings / Trophy guide | Supporting hub | Carnage pick is irreversible in same playthrough. |
| `/onimusha-way-of-the-sword-endings/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword ending point of no return | Identify single ending and point of no return | Difficulty / Yoshitsune | Supporting hub | One fixed ending + post-credits Okuni scene; "The Clash at Rendaino" is point of no return. |
| `/onimusha-way-of-the-sword-characters/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword characters | Identify main cast and supporting roster | Story / Endings | Supporting hub | Story roster; Musashi as protagonist. |
| `/onimusha-way-of-the-sword-collectibles/` | `src/data/pages/fixed-pages.ts` | Hub | Onimusha Way of the Sword collectibles | Browse 274 collectibles | Genma Notes / Trophies | Hub | 274 collectibles; categories cover charms, Genma Notes, weapons, armaments. |
| `/onimusha-way-of-the-sword-genma-notes-locations/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword Genma Notes locations | Find all 23 Genma Notes | Collectibles hub / Trophy guide | Detail | 23 lore notes; per-chapter locations. |
| `/onimusha-way-of-the-sword-trophy-guide/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword trophy platinum roadmap | Unlock all 52 trophies and platinum | Difficulty / Collectibles | Supporting hub | 52-trophy list; Carnage-specific trophies persist to NG+. |
| `/onimusha-way-of-the-sword-demo-reward/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword demo reward | Redeem the Kubi Akari charm reward | Home / Trophies | Supporting hub | Demo / Switch 2 extended demo reward; Byakue unlock via 10 Issen counters. |
| `/onimusha-way-of-the-sword-platform-performance/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword platform performance | Compare PS5 / Xbox / PC / Switch 2 performance | System requirements / Review scores | Supporting hub | Cross-platform performance comparison; SSD-mandatory on PC. |
| `/onimusha-way-of-the-sword-review/` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword review scores | Check Famitsu / Metacritic / IGN / GameSpot / OpenCritic scores | Home / About | Supporting hub | Famitsu Cross Review 34/40; cross-publisher aggregate scores. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Onimusha Way of the Sword guide | Trust and editorial policy | Contact | Trust | Unofficial Capcom fan guide; verified facts only. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Onimusha Way of the Sword guide | Corrections and source updates | About | Trust | support@onimushawayofthesword.pro via Cloudflare Email Routing. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured; no accounts, no comments, no payments. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Unofficial fan site; Capcom trademark notice. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Overview and release: `/onimusha-way-of-the-sword/`, `/onimusha-way-of-the-sword-release-date/`, `/onimusha-way-of-the-sword-system-requirements/`, `/onimusha-way-of-the-sword-platform-performance/`, `/onimusha-way-of-the-sword-review/`
- Combat and progression: `/onimusha-way-of-the-sword-combat-guide/`, `/oni-gauntlet/`, `/onimusha-way-of-the-sword-weapons/`, `/oni-armaments/`, `/onimusha-way-of-the-sword-difficulty/`, `/onimusha-way-of-the-sword-endings/`, `/onimusha-way-of-the-sword-trophy-guide/`
- Bosses: `/bosses/`, `/bosses/sasaki-ganryu/`, `/bosses/shuten-doji/`, `/bosses/yoshitsune/`
- Collectibles and lore: `/onimusha-way-of-the-sword-collectibles/`, `/onimusha-way-of-the-sword-genma-notes-locations/`, `/onimusha-way-of-the-sword-characters/`, `/onimusha-way-of-the-sword-demo-reward/`
- Trust and legal: `/`, `/guides`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages (Combat, Bosses, Endings, Trophies).
- Bosses hub and Sasaki Ganryu / Shuten Doji / Yoshitsune pages link back to Combat guide.
- Combat guide and Oni Gauntlet link to Weapons and Oni Armaments.
- Difficulty page links to Endings and Trophy guide.
- Endings page links to Difficulty and Yoshitsune.
- Collectibles hub links to Genma Notes and Trophy guide.
- About, Contact, Privacy Policy and Terms form the trust ring around the site footer.

## Open Questions

- Replace with launch-mode unknowns about post-launch updates. None currently.