# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

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
