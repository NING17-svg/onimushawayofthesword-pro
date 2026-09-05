# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Onimusha Way of the Sword launch hub | Find the best entry point | Release & Platforms / Combat / Bosses | Hub | Replace with the configured game's main hub intent. |
| `/release` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword release date | Check release timing and platforms | System Requirements / Demo Guide / Switch 2 | Supporting hub | Must stay tied to official or store sources. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword system requirements | Check minimum and recommended PC specs | Release Status / Demo Guide / Switch 2 | Supporting hub | Steam store page is the authoritative source. |
| `/demo` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword demo | Find demo availability, content, and reward | Release Status / Bosses / Editions | Supporting hub | Cross-links to Sasaki Ganryu and Byakue dedicated pages. |
| `/editions` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword editions | Compare Standard, Deluxe, Premium Deluxe tiers | Release Status / Demo Guide / Characters | Supporting hub | Tiered pricing plus pre-order bonuses. |
| `/switch-2` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword Switch 2 version | Confirm Switch 2 launch status and demo | Release Status / Demo Guide / System Requirements | Supporting hub | Performance parity is not announced. |
| `/length` | `src/data/pages/fixed-pages.ts` | Guide | How long is Onimusha Way of the Sword | Estimate main-story and completionist playtime | Combat / Difficulty / Demo | Supporting hub | Cross-links to Carnage Difficulty page. |
| `/difficulty` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword difficulty settings | Pick Light, Normal, Hard, or Oni preset | Release Status / Combat / Issen | Supporting hub | Cross-links to Carnage Difficulty page. |
| `/combat` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword combat mechanics | Learn sword play, Oni Gauntlet, Issen, Awakening | Issen / Bosses / Demo | Supporting hub | Cross-links to Defensive Lanes page. |
| `/issen` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword Issen guide | Time the named counter after a clean parry | Combat / Bosses / Demo | Supporting hub | Cross-links to Defensive Lanes page. |
| `/bosses` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword bosses | Confirm the Genma roster and the demo boss | Combat / Issen / Demo | Supporting hub | Cross-links to Sasaki Ganryu and Byakue dedicated pages. |
| `/characters` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword characters | Identify Musashi, Ganryu, Ifuu, Burai, Genma Musashi | Bosses / Combat / Release | Supporting hub | No character creation. |
| `/items` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword items and equipment | Confirm charm loadout and armor sets | Demo Guide / Editions / Combat | Supporting hub | Kubi Akari demo charm and Lion Dog pre-order charm. |
| `/trophies` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword trophies | Track PS5, Xbox, and Steam achievement lists | Release Status / Items / Reviews | Supporting hub | Capcom publishes full list at launch. |
| `/reviews` | `src/data/pages/fixed-pages.ts` | Guide | Onimusha Way of the Sword reviews | Read launch-window press coverage | Release Status / Trophies / Home | Supporting hub | Numeric scores embargoed as of 2026-09-02. |
| `/sasaki-ganryu` | `src/data/pages/fixed-pages.ts` | Guide | Sasaki Ganryu demo boss move list | Match named attacks to counter windows | Demo Guide / Bosses / Issen | Cluster hub | Three-hit poke, Blade Barrage, stomp-and-slash, grab, helm-breaker. |
| `/byakue` | `src/data/pages/fixed-pages.ts` | Guide | Byakue second boss and Special Challenge | Identify the expanded demo boss and unlock | Demo Guide / Sasaki Ganryu / Issen | Cluster hub | Paper seals blood mechanic, stand-ground counter, 10-Issen unlock. |
| `/defensive-lanes` | `src/data/pages/fixed-pages.ts` | Guide | Oni Gauntlet defensive lanes | Pick Parry Main / Deflect Main / Dodge Main / Issen Focus | Combat / Issen / Sasaki Ganryu | Cluster hub | Red-glow telegraph and late 1-2 frame parry commit. |
| `/carnage-difficulty` | `src/data/pages/fixed-pages.ts` | Guide | Carnage Difficulty New Game+ carry-over | Confirm what carries and what resets | Difficulty / Length / Items | Cluster hub | Four carry categories, three reset categories, charm loadout anchor. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Onimusha Way of the Sword Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Onimusha Way of the Sword Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release`, `/editions`, `/switch-2`, `/system-requirements`, `/trophies`, `/reviews`
- Combat and mechanics: `/combat`, `/issen`, `/defensive-lanes`, `/difficulty`, `/carnage-difficulty`
- Characters and bosses: `/characters`, `/bosses`, `/sasaki-ganryu`, `/byakue`
- Demo and playtime: `/demo`, `/length`, `/items`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages: `/release`, `/combat`, `/bosses`, `/demo`, `/difficulty`.
- Demo guide should link to the Sasaki Ganryu and Byakue dedicated boss pages, plus `/bosses` and `/issen`.
- Bosses page should link to `/sasaki-ganryu`, `/byakue`, `/combat`, and `/issen`.
- Combat mechanics page should link to `/defensive-lanes`, `/issen`, and `/difficulty`.
- Issen guide should link to `/defensive-lanes`, `/sasaki-ganryu`, and `/byakue`.
- Difficulty settings page should link to `/carnage-difficulty` and `/length`.
- Length page should link to `/carnage-difficulty` and `/difficulty`.

## Open Questions

- Sasaki Ganryu exact frame-data windows per preset and per-boss HP scaling numbers are not announced as of 2026-09-05.
- Byakue exact HP scaling, exact paper seal durability, and the full Special Challenge difficulty tuning beyond 'harder than the standard expanded demo boss' are not announced as of 2026-09-05.
- Oni Gauntlet exact frame-data windows per preset, exact per-lane damage numbers, and exact red-glow attack coverage per boss are not announced as of 2026-09-05.
- Carnage Difficulty exact per-category item counts, exact save shrine distribution in the New Game+ run, and any post-launch Carnage Difficulty tuning patches are not announced as of 2026-09-05.
