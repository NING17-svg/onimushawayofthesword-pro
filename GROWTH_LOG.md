# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-10 - Full-game walkthrough, final boss, and ending path published

- Task: Replace the demo-only framing on `/bosses`, `/length`, `/characters`, and `/demo` with the post-launch Way of the Sword arc content, and add a dedicated `/walkthrough` hub tying the 22-chapter arc, Clash at Rendaino point-of-no-return pre-cleanup checklist, three-phase Minamoto no Yoshitsune final boss, Dokyo post-credits return, and True Ending condition (third-party documented, not first-party confirmed) to one place.
- Files changed: `src/data/pages/fixed-pages.ts`, `src/data/pages/home.ts`, `src/data/navigation.ts`, `src/data/faq.ts`, `CONTENT_INDEX.md`, `GROWTH_LOG.md`.
- URLs affected: new `/walkthrough` page; updated `/bosses` (full 11-boss roster with per-boss strategy anchors and trophies), `/length` (~20-25h main story, ~33h completionist, ~33h plus Carnage Difficulty replay), `/characters` (full post-launch cast), `/demo` (expanded demo second boss explicitly named as Byakue).
- Content added on `/walkthrough`: 22-chapter Way of the Sword arc overview sourced to timesaver.gg and vandal's 'el-camino-de-la-espada' guide; four-phase chapter flow (early, mid, late, final mission) without inventing chapter names; boss progression table mapping every named encounter to its trophy and arc phase; Clash at Rendaino as the practical point of no return with a pre-cleanup checklist covering the 9 Silver collectible categories (Mysteries, Chance Encounters, Lion Dogs, Oni Armaments, Hozuki Pouches, Charms, skills, equipment, 50 Issen attacks); three-phase Minamoto no Yoshitsune final boss anchored to the 'Truly, Thank You' Silver trophy; Dokyo post-credits return anchored to the 'End This Madness' trophy and allthings.how third-party guide; Standard Ending vs Post-Credits Dokyo Return vs True Ending comparison; True Ending condition explicitly flagged as third-party documented, not first-party confirmed; Carnage Difficulty replay integration; sources section listing timesaver.gg, vandal, PowerPyx, allthings.how, pixelnitro, and tposegaming; fact boundary dated 2026-09-10.
- Content added on `/bosses`: expanded roster from 4 named encounters to 11 named encounters (Sasaki Ganryu demo + recurring + Arashiyama return; Daidara; Rasho-gan; Ifuu and Burai individuals + duo; Greater Nue; Benkei bridge + Rendaino return; Shuten Doji; Byakue expanded demo; Dokyo post-credits; Minamoto no Yoshitsune three-phase); per-boss strategy anchor column in the roster table linking to `/sasaki-ganryu`, `/byakue`, `/walkthrough`, and `/trophies`; per-boss prose modules for each new encounter with trophy mapping and third-party-documented flags for unconfirmed per-boss tactics.
- Content added on `/length`: replaced 'not announced as of 2026-09-02' framing on main-story and completionist hours with third-party-documented ranges (~20-25h main story, ~33h completionist, ~33h plus Carnage Difficulty replay); added full 100% range as a separate module; explicit 22-chapter Way of the Sword arc framing tying length to the Clash at Rendaino final mission and the three-phase Minamoto no Yoshitsune fight; final-mission and post-credits content key facts; updated fact boundary to 2026-09-10.
- Content added on `/characters`: full post-launch cast (Musashi, Sasaki Ganryu, Daidara, Rasho-gan, Ifuu and Burai, Greater Nue, Benkei, Burai, Shuten Doji, Byakue, Dokyo, Genma Musashi, Minamoto no Yoshitsune); per-character prose modules for each new encounter with trophy mapping and arc-phase anchor; supporting cast and voice cast sections updated with 2026-09-10 fact-boundary language.
- Content added on `/demo`: the 'expanded demo: new area and another fearsome boss' module now names Byakue (Hundred Defilements) explicitly and links to the dedicated Byakue page.
- FAQ additions: 7 new FAQ entries for `/walkthrough` (chapter count, Clash at Rendaino, Yoshitsune phases, Dokyo post-credits, True Ending, post-credits content, final boss) and 2 new entries for `/bosses` (final boss, full boss list). Updated `/demo`'s secret-boss FAQ to name Byakue explicitly.
- Navigation: added `/walkthrough` as a 5th primary nav entry labelled 'Walkthrough'.
- Internal linking: `/home`, `/bosses`, `/length`, `/characters`, and `/demo` now link to `/walkthrough`; `/walkthrough` reciprocally links to `/bosses`, `/length`, `/trophies`, `/characters`, `/carnage-difficulty`, `/demo`, and `/`.
- Verification: `npm run verify` after the change; typecheck, lint, template validation, content validation, IndexNow validation, build, and rendered SEO validation all required to pass before publish. The True Ending condition is third-party documented and is sourced to pixelnitro.com; the 22-chapter count and the ~20-25h / ~33h ranges are sourced to timesaver.gg and are also third-party documented.

### 2026-09-09 - Launch-window reviews and post-launch trophy roadmap published

- Task: Replace the pre-launch 'embargoed as of 2026-09-02' / 'not announced as of 2026-09-02' positions on `/reviews` and `/trophies` with confirmed launch-window numeric scores and the post-launch PowerPyx trophy roadmap.
- Files changed: `src/data/pages/fixed-pages.ts`, `src/data/faq.ts`, `CONTENT_INDEX.md`, `GROWTH_LOG.md`.
- URLs affected: `/reviews`, `/trophies`.
- Content added on `/reviews`: launch-window numeric scores (IGN 10/10, GameGrin 9/10, Push Square 9/10 PS5, Nintendo Life 9/10 Switch 2, Creative Bloq 8/10, Game Informer 8/10 PC, GameSpew 8/10); CGMagazine, HowToShark, and Dengeki PlayStation editorial coverage; embargo lift dates 2026-08-31 / 2026-09-01; launch date 2026-09-04; retired citation URLs flagged for Push Square, WorthPlaying, RPG Site, and GameSpot until they resolve; post-launch Metacritic and OpenCritic aggregator evidence; Steam news feed link for rolling post-launch reception.
- Content added on `/trophies`: full 52-trophy breakdown (1 Platinum 'Peerless', 2 Gold 'True Onimusha' and 'Glutton for Punishment', 9 Silver, 40 Bronze, 0 online); 6.5/10 difficulty rating; 60-70 hours to Platinum; 5-step roadmap (first playthrough on Action through 'The Clash At Rendaino' -> collectible cleanup before the final mission -> complete the game and unlock Carnage Difficulty -> Carnage New Game+ -> Boss Rematch on all difficulties in Emma's Hall Practice Grounds); named conditions for all 13 boss trophies (Sasaki Ganryu, Daidara, Rasho-gan, Ifuu, Greater Nue, Benkei, Burai, Shuten Doji, Ifuu/Burai duo, Sasaki Ganryu at Arashiyama, Dokyo, Benkei at Rendaino, Minamoto no Yoshitsune); Silver collectible categories (Mysteries, Chance Encounters, Lion Dogs, Oni Armaments, Hozuki Pouches, Charms, skills, equipment, 50 Issen attacks); Bronze categories (boss defeats, story beats, combat milestones).
- Verification: `npm run verify` after the change; typecheck, lint, template validation, content validation, IndexNow validation, build, and rendered SEO validation all required to pass before publish.

### 2026-09-05 - Sasaki Ganryu, Byakue, Oni Gauntlet defensive lanes, Carnage Difficulty cluster added

- Task: Add four launch-week cluster deep-dive pages sourced to the public player guides.
- Files changed: `src/data/pages/fixed-pages.ts`, `src/data/faq.ts`, `CONTENT_INDEX.md`, `GROWTH_LOG.md`.
- URLs affected: `/sasaki-ganryu` (new), `/byakue` (new), `/defensive-lanes` (new), `/carnage-difficulty` (new). Existing `/demo`, `/bosses`, `/combat`, `/issen`, `/difficulty`, and `/length` pages gained cross-link references to the new cluster pages.
- Content added: Sasaki Ganryu's named attack patterns (three-hit poke combo with red-glow stamina-drain finisher, Blade Barrage stance-break clash, stomp-and-slash, grab at roughly 50% HP, helm-breaker overhead) with the dedicated counter window for each, plus the Break Issen vulnerability after Force/Stagger depletion and the Yellow Soul healing discipline; Byakue (Hundred Defilements) identity as the expanded demo's white-furred axe-wielding Genma, the paper seals blood mechanic (more blood drawn = stronger Byakue), the stand-ground + side-step counter pattern, and the 10-Issen Special Challenge unlock that gates a harder Byakue fight; the four defensive lanes (Parry Main, Deflect Main, Dodge Main, Issen Focus), the red-glow stamina-drain telegraph on heavy finishers, the late 1-2 frame parry commit on heavily telegraphed attacks, and the Issen-reserved-for-telegraphed-attacks discipline; Carnage Difficulty New Game+ carry-over split (unlocks, upgrades, outfits, tutorials/drills carry; story progress, materials, save points reset) anchored to specific charm loadout items (Kubi Akari demo charm, Lion Dog pre-order charm, Deluxe Edition charm bundle) with the unlock trigger after the first ending.
- Verification: `npm run verify` after the change; typecheck, lint, template validation, content validation, IndexNow validation, build, and rendered SEO validation all required to pass before publish.

### 2026-09-02 - Adsterra integration applied

- Task: Populate `src/data/ads.ts` with the six fixed Adsterra unit codes (Native Banner, 728x90, 468x60, 320x50, 160x600, Smartlink) for the live Onimusha: Way of the Sword site.
- Files changed: `src/data/ads.ts`, `GROWTH_LOG.md`.
- URLs affected: No URL or layout change; the fixed ad containers now carry their real Adsterra payloads.
- Verification: `npm run verify` after the replacement; local validator reconciles registry, target ads.ts, and the private `~/.local/share/adsterra-integrator/runs/onimushawayofthesword-pro/{config.json,adsterra-codes.json}` evidence before enabling the registry state.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
