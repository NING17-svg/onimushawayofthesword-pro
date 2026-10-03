# Theme Specification: Onimusha: Way of the Sword

- Site ID: `onimushawayofthesword-pro`
- Domain: `onimushawayofthesword.pro`
- Primary locale: `en-US`
- Launch locales: `en-US`
- Research date: `2026-10-03`
- Theme mode: `dark`
- Template contract: V4 page assembly

## 1. Theme Direction

### Direction

A single shared dark theme — "Edo ink and vermilion steel" — that reads as a Capcom RE-Engine samurai action guide: deep ink-black surfaces, warm bone-white body type, and a vermilion-crimson primary accent that surfaces sword-ready combat CTAs and danger notes across every Combat, Boss, Progression, Collectibles and Reference surface without copying the official marketing layout.

### Visual Keywords

- Edo ink and aged-paper warmth
- Vermilion steel blade accent
- Contemplative cinematic dark
- Sharp 2-px edges, low-elevation shadows
- Subtle vertical-line kanji-stroke decoration
- Right-rail reading with one shared crimson rule
- Composed, low-noise density suitable for combat tables and trophy lists

### Evidence And Rationale

- Onimusha: Way of the Sword is a 2026 Capcom RE-Engine single-player third-person sword-combat action game set in Edo-period Kyoto with Miyamoto Musashi as the protagonist (Capcom official product page https://www.onimusha.capcom.com/us/game; Wikipedia https://en.wikipedia.org/wiki/Onimusha:_Way_of_the_Sword). The visual mood of the official combat trailer is dark, candle-lit, with red-orange torches and lacquered black armour; this theme keeps the same low-key ink atmosphere without copying any marketing layout.
- Issen / Parry / Deflect timing drills, Rikido posture bars and the four-layer defense ladder are reading-heavy answers; dark surfaces with high-contrast warm-white text serve late-night play (PowerPyx roadmap, news.xbox.com Capcom-published combat guide, Onimusha Wiki).
- The Oni Gauntlet tier ladder and 274-item collectible list (11 categories including Power Stones, Oni Stones, Tamahagane, Lion Dogs, Genma Notes) demand clear status colors; jade-green `statusConfirmed`, gold `statusCaution` and rust `statusUnknown` keep dense tables readable (Site Plan Player Content Review).
- The single shared dark theme serves the 20 fixed pages and home directory without per-page forks; one accent (vermilion) keeps every Combat / Boss / Progression surface visually unified.

### Prohibited Directions

- no official or imitated game logo or Capcom wordmark;
- no per-locale theme fork, token set, or shell variant;
- no light-theme or high-saturation neon "sword glow" look that competes with the answer body;
- no Tailwind / shadcn blue-purple default palette, no dense old V3 reading shell;
- no public source-block, version/remake declaration, checked-date stamp or disclaimer modules on any page;
- no decorative screenshot of the official campaign layout as page art.

## 2. Theme Parameters

### Required Configuration

```yaml
mode: dark
tokens:
  pageBg: "#0E0F12"
  surface1: "#16181D"
  surface2: "#1C1F26"
  surface3: "#23272F"
  surfaceInverse: "#F4F2EC"
  textPrimary: "#ECE7D9"
  textMuted: "#A6A39A"
  textInverse: "#1A1815"
  textOnAccentPrimary: "#FFFFFF"
  textLink: "#D9A24A"
  focusRing: "#E07A4C"
  line: "#2E323B"
  lineStrong: "#43464F"
  accentPrimary: "#B23A3A"
  accentSecondary: "#4B5D78"
  accentBright: "#E07A4C"
  statusConfirmed: "#5C8A6A"
  statusCaution: "#C9A24B"
  statusUnknown: "#8E5D3B"
typography:
  headingFamily: "\"Source Serif 4\", \"Noto Serif JP\", Georgia, serif"
  bodyFamily: "\"Inter\", \"Noto Sans JP\", system-ui, -apple-system, sans-serif"
  headingWeight: 700
shape:
  radius: "2px"
  borderWidth: "1px"
  shadow: "0 1px 2px rgba(0, 0, 0, 0.6)"
  hoverLift: "0"
density: comfortable
background:
  mode: gradient
  overlay: 0.08
  position: "top"
variants:
  home: guide-portal
  hub: card-grid
  content: reading-right-rail
  workspace: full-width
decoration:
  motif: lines
  intensity: low
```

### Locale Coverage

Copy `primary_locale` and the ordered `launch_locales` list exactly from the Site Plan. Include exactly one font fallback entry for every launch locale.

```json
{
  "primary_locale": "en-US",
  "launch_locales": [
    "en-US"
  ],
  "single_shared_theme": true,
  "font_fallbacks": {
    "en-US": {
      "heading": "\"Source Serif 4\", \"Noto Serif JP\", Georgia, serif",
      "body": "\"Inter\", \"Noto Sans JP\", system-ui, -apple-system, sans-serif"
    }
  }
}
```

### Typography And Readability Rules

- Heading family `Source Serif 4` carries the Edo-ink authority for game name, page titles, and section headings; `Noto Serif JP` is the locale-safe fallback that covers any future JP character set or borrowed Japanese words (Sasaki Ganryu, Shuten Doji, Dokyo) without leaving visible tofu. Heading weight is 700; never bolder than 800 to keep the combat-table rhythm readable.
- Body family `Inter` runs answer prose, FAQ answers, right-rail metadata, callouts, status tags, and trophy list copy; `Noto Sans JP` covers the same borrowing cases for body sizes. Body never falls below 16 px on reading surfaces and never below 14 px on card metadata.
- Foreground/background pairs use the inverse ladder: `textPrimary` (`#ECE7D9`) on `pageBg` / `surface1` / `surface2` / `surface3`; `textInverse` (`#1A1815`) on `surfaceInverse` (`#F4F2EC`) for inverse-status banners; `textOnAccentPrimary` (`#FFFFFF`) on `accentPrimary` (`#B23A3A`) for primary CTAs and danger notes; `textLink` (`#D9A24A`) on every surface; `focusRing` (`#E07A4C`) renders the focus outline at 2 px solid outside every interactive element. Body text targets at least 4.5:1 contrast and large headings / non-text boundaries at least 3:1.
- Status colors carry meaning across combat tables, trophy lists and Boss pages: `statusConfirmed` (`#5C8A6A`) for cleared bosses and confirmed unlock chapters; `statusCaution` (`#C9A24B`) for irreversible choices (Carnage lock-in, Chapter 22 point-of-no-return); `statusUnknown` (`#8E5D3B`) for planner-flagged facts that still need in-game verification.
- Locale fallbacks are layered behind the shared preferred stacks; they do not introduce a second theme, a second spacing system, or a different accent. The English-language reader sees Source Serif + Inter everywhere; the fallback only renders glyphs that the preferred face lacks.

### Long-Text And Script Adaptation

- Navigation and controls: every primary-nav label, mobile-nav chip, breadcrumb segment and CTA button uses content-driven height with at least 12 px of vertical padding and may wrap to two lines; critical labels never clip or hide behind an ellipsis.
- Headings and card titles: page titles, cluster group titles (Combat / Bosses / Progression / Collectibles / Reference / Overview), boss-card titles (Sasaki Ganryu, Shuten Doji, Minamoto no Yoshitsune), weapon names and Genma Note labels use content-driven height and may wrap on two lines at narrow widths; card grids tolerate unequal heights and never force a fixed-height copy block.
- Field labels, breadcrumbs and player-facing URLs: weapon-tier labels, "Carnage → Trophy", trophy names and player-facing cross-link labels wrap inside their container; long unbroken URLs from Player Content Review stay in internal evidence and never appear on the page.
- CJK or other non-Latin scripts when present: Noto Serif JP / Noto Sans JP fallback uses its own metrics; line breaking and word-spacing stay Latin-default for the en-US launch locale, but the JP fallback already carries correct CJK break rules if borrowed names appear (Yoshitsune, Shuten Doji, Tamahagane, Arashiyama).
- Card and list density: equal spacing scale across all 21 surfaces; combat-step lists, trophy rows, Oni Armaments table rows and characters table rows share the same 12 px cell padding and 16 px row gap. Density is comfortable; tables never collapse below 36 px row height.
- Mobile: at <= 768 px width, primary navigation collapses to a short chip row of cluster groups (Combat / Bosses / Progression / Collectibles / Reference / Overview); breadcrumb stacks above the H1; right-rail collapses below the article body; data tables switch to a horizontally-scrollable internal pane (no page-level horizontal overflow).

### Background And Surface Rules

- `pageBg` (`#0E0F12`) is the base dark ink; the `background.mode` gradient lifts the top 12 vh by 8% lighter to give a faint horizon without introducing any imagery; no large hero photograph, no texture bitmap, no remote image hotlink.
- `surface1` is the standard card / panel / FAQ surface, raised on `pageBg` by lightness; `surface2` is the deeper panel used for table headers and tab strips; `surface3` is the highest elevation used for hover lift on cards and on focus-visible elevation.
- `surfaceInverse` (`#F4F2EC`) is reserved for narrow status banners (Carnage irreversible warning, Chapter 22 point-of-no-return reminder, Story / Action / Carnage tag) where the dark-on-light pair improves attention.
- `line` (`#2E323B`) carries default card borders, table cell separators and section dividers; `lineStrong` (`#43464F`) is reserved for the vertical crimson rule beside Reading-Right-Rail headlines and for the divider between grouped-navigation and primary content.
- `shadow` (`0 1px 2px rgba(0, 0, 0, 0.6)`) is the only permitted elevation shadow; `hoverLift` is 0 — no translate-Y on hover, no scaling, no animation. Cards deepen to `surface3` and add a 1-px `lineStrong` border on hover.
- Decoration uses the `lines` motif at `low` intensity: a single 1-px vertical hairline next to combat headings and boss-card weakness lines, plus a faint 1-px inset frame around the home-page directory. No kanji, no brushwork, no rotated motifs.
- Motion is limited to the supported `hoverLift` (0) and a single 120 ms ease for focus-ring transitions. No parallax, no marquee, no scroll-jacking, no per-page animation library.

## 3. Asset Plan

Read Planner image_requirements and the current accepted Collector images first. Every required image must have a named Page Assembly media-capable region and visible desktop/mobile placement. Only decorative images may be omitted. State `No decorative assets selected` when decoration is absent; this does not remove any required explanatory image.

The Site Plan Player Content Review declares zero `image_requirements` on every one of the 21 surfaces (home + 20 fixed pages). The accepted Collector materials package (`collection_materials_sha256: 77b9cf8ef39e1b75019bbc6bf3fdc097b5e8ab4bec2136662f32430cef39895e`, `site_plan_sha256: 6fae39b8030045e05692e3f414e686fae42a67fda7178c5d65a390d75659c897`) supplies no `images` arrays on any page. The theme therefore ships zero Planner-required gameplay images and zero optional decorative images. No decorative assets selected.

### Required Image Placement

```json
{
  "schema_version": "theme-required-images-v1",
  "collection_materials_sha256": "77b9cf8ef39e1b75019bbc6bf3fdc097b5e8ab4bec2136662f32430cef39895e",
  "items": []
}
```

### Decoration-Free Theme Contract

- Identity remains readable without any optional image: the vermilion `accentPrimary` on the primary CTA, the warm bone-white `textPrimary` on dark surfaces, the Source Serif 4 heading family and the low-intensity vertical `lines` motif together form a distinct Edo-ink + vermilion-steel signature.
- The home-page directory uses only 1-px hairlines and a single crimson rule for IA-group headers; boss-hub cards use `entity-grid` with name, chapter and Issen window rows (no image); boss-leaf pages use the `key-facts` block with name, chapter, weakness, posture-break trigger — all type-driven, no image.
- Combat, Oni Gauntlet, weapons, Oni Armaments, difficulty, endings, characters, collectibles, Genma Notes, trophies, demo-reward, platform-performance, review-scores, overview, release-status and system-requirements pages all retain their identity through type, surface and accent alone.

## 4. Layout Selections

### Home

- Starting variant: `guide-portal`
- Composition and priority treatment without changing Site Plan hierarchy.
- Home renders as a dark guide-portal: a compact identity strip, the six-cluster primary nav (Combat / Bosses / Progression / Collectibles / Reference / Overview) at the top, the full 20-entry directory grouped by cluster below, then a single `related-guides` row cross-linking to overview and review-scores. The 20 entries follow the Site Plan homepage order exactly (Combat basics → Oni Gauntlet → first chapter boss → … → review scores).

### Hub

- Variant: `card-grid`
- Grouping, density, card/list, optional media, and entity-Hub treatment.
- The Bosses hub (`/bosses/`) is the only explicit `page_type: hub`. It uses `card-grid` with one boss per card, each card showing name, chapter, weakness, and Issen window as type-only rows. No decorative image, no placeholder thumbnail; cards stay coherent with the decoration-free contract.

### Content

- Variant: `reading-right-rail`
- Reading width, heading, table, media, callout, right-rail, and entity-detail treatment.
- Combat-guide, oni-gauntlet, weapons, difficulty, endings, characters, collectibles, genma-notes, trophies, demo-reward, platform-performance, review-scores, system-requirements, release-status, overview, oni-armaments and the three boss-leaf pages all share the `reading-right-rail` content variant: ~720 px reading column on desktop with a ~260 px right rail for cross-link and `key-facts` blocks. Long tables (Oni Armaments list, collectibles 11-category list, trophy list, characters roster, platform-performance comparison, system-requirements spec table) live inside horizontally-scrollable panes within the article column and never overflow the page.

### Workspace

- Required by Site Plan: `no`
- Variant when required: `full-width`
- Visual shell treatment only; no tool behavior or data logic.
- The Site Plan declares `tool_pages: []` and `entity_families: []`; no Workspace family is needed for the first launch. If a downstream zh-CN launch later adds an Oni Gauntlet planner, the existing `workspace: full-width` variant remains the correct shell.

### Page Assembly

```json
{
  "schema": "v4-page-assembly",
  "site_plan_sha256": "6fae39b8030045e05692e3f414e686fae42a67fda7178c5d65a390d75659c897",
  "navigation": {
    "desktop": "Grouped primary navigation across Combat / Bosses / Progression / Collectibles / Reference / Overview clusters with the current page surfaced as a guide tree",
    "mobile": "Short chip-row of cluster groups; full nav collapsed into a single chip menu under the identity strip"
  },
  "ad_inventory": {
    "schema": "adsterra-placement-inventory-v1",
    "layout_version": "v4-horizontal-2026-10-02",
    "adUnits": [
      { "key": "page-top-728x90", "type": "Banner", "size": "728x90" },
      { "key": "page-top-468x60", "type": "Banner", "size": "468x60" },
      { "key": "page-top-320x50", "type": "Banner", "size": "320x50" },
      { "key": "home-after-entry-native-banner", "type": "Native Banner" },
      { "key": "home-topic-break-728x90", "type": "Banner", "size": "728x90" },
      { "key": "home-topic-break-468x60", "type": "Banner", "size": "468x60" },
      { "key": "home-topic-break-300x250", "type": "Banner", "size": "300x250" },
      { "key": "home-directory-rail-160x300", "type": "Banner", "size": "160x300" },
      { "key": "home-directory-end-468x60", "type": "Banner", "size": "468x60" },
      { "key": "home-directory-end-320x50", "type": "Banner", "size": "320x50" },
      { "key": "guide-native-native-banner", "type": "Native Banner" },
      { "key": "guide-section-break-728x90", "type": "Banner", "size": "728x90" },
      { "key": "guide-section-break-468x60", "type": "Banner", "size": "468x60" },
      { "key": "guide-section-break-320x50", "type": "Banner", "size": "320x50" },
      { "key": "guide-before-faq-468x60", "type": "Banner", "size": "468x60" },
      { "key": "guide-before-faq-320x50", "type": "Banner", "size": "320x50" },
      { "key": "guide-rail-160x600", "type": "Banner", "size": "160x600" },
      { "key": "guide-rail-160x300", "type": "Banner", "size": "160x300" },
      { "key": "footer-sponsored-smartlink", "type": "Smartlink" }
    ],
    "slots": [
      {
        "id": "page-top",
        "page_kind": "all",
        "desktop": ["page-top-728x90", "page-top-468x60"],
        "mobile": ["page-top-320x50"]
      },
      {
        "id": "home-after-entry",
        "page_kind": "home",
        "desktop": ["home-after-entry-native-banner"],
        "mobile": ["home-after-entry-native-banner"]
      },
      {
        "id": "home-topic-break",
        "page_kind": "home",
        "desktop": ["home-topic-break-728x90", "home-topic-break-468x60"],
        "mobile": ["home-topic-break-300x250"]
      },
      {
        "id": "home-directory-rail",
        "page_kind": "home",
        "desktop": ["home-directory-rail-160x300"],
        "mobile": []
      },
      {
        "id": "home-directory-end",
        "page_kind": "home",
        "desktop": ["home-directory-end-468x60"],
        "mobile": ["home-directory-end-320x50"]
      },
      {
        "id": "guide-native",
        "page_kind": "guide",
        "desktop": ["guide-native-native-banner"],
        "mobile": ["guide-native-native-banner"]
      },
      {
        "id": "guide-section-break",
        "page_kind": "guide",
        "desktop": ["guide-section-break-728x90", "guide-section-break-468x60"],
        "mobile": ["guide-section-break-320x50"]
      },
      {
        "id": "guide-before-faq",
        "page_kind": "guide",
        "desktop": ["guide-before-faq-468x60"],
        "mobile": ["guide-before-faq-320x50"]
      },
      {
        "id": "guide-rail",
        "page_kind": "guide",
        "desktop": ["guide-rail-160x600", "guide-rail-160x300"],
        "mobile": []
      },
      {
        "id": "footer-sponsored",
        "page_kind": "all",
        "desktop": ["footer-sponsored-smartlink"],
        "mobile": ["footer-sponsored-smartlink"]
      }
    ]
  },
  "layouts": [
    {
      "id": "home-entry",
      "page_ids": ["home"],
      "desktop": "Compact identity strip, grouped cluster nav, 20-entry directory in Combat / Bosses / Progression / Collectibles / Reference / Overview order, single related-guides row",
      "mobile": "Identity strip then a chip-row cluster nav, full 20-entry directory stacks below, related-guides row at the bottom",
      "regions": [
        {
          "id": "identity",
          "component": "identity-hero",
          "source": "Site Plan game identity (Edo-period Kyoto, Musashi, RE-Engine)",
          "mobile": "Identity strip with game name and one-line subtitle; no long introduction"
        },
        {
          "id": "primary-nav",
          "component": "grouped-navigation",
          "source": "Site Plan Primary Navigation (Combat / Bosses / Progression / Collectibles / Reference / Overview)",
          "mobile": "Short chip-row of cluster groups; sub-tree collapsed into a single chip menu"
        },
        {
          "id": "directory",
          "component": "task-entries",
          "source": "Site Plan 20-entry homepage directory in declared order",
          "mobile": "Single-column stack with every entry label fully visible, no clipping"
        },
        {
          "id": "related",
          "component": "related-guides",
          "source": "Site Plan required internal links to overview, review-scores, release-status",
          "mobile": "Stacked list below the directory"
        }
      ],
      "ad_placements": [
        { "slot_id": "page-top", "desktop": { "anchor": "$header", "edge": "after" }, "mobile": { "anchor": "$header", "edge": "after" } },
        { "slot_id": "home-after-entry", "desktop": { "anchor": "directory", "edge": "after" }, "mobile": { "anchor": "directory", "edge": "after" } },
        { "slot_id": "home-topic-break", "desktop": { "anchor": "directory", "edge": "inside" }, "mobile": { "anchor": "directory", "edge": "inside" } },
        { "slot_id": "home-directory-rail", "desktop": { "anchor": "directory", "edge": "inside" } },
        { "slot_id": "home-directory-end", "desktop": { "anchor": "directory", "edge": "after" }, "mobile": { "anchor": "directory", "edge": "after" } },
        { "slot_id": "footer-sponsored", "desktop": { "anchor": "$footer", "edge": "inside" }, "mobile": { "anchor": "$footer", "edge": "inside" } }
      ],
      "acceptance": [
        "Identity strip and cluster nav sit above the first screen of directory entries on desktop",
        "Every one of the 20 directory entries is visible on mobile without horizontal scrolling",
        "Cluster group headers (Combat / Bosses / Progression / Collectibles / Reference / Overview) appear in declared Site Plan order",
        "No page-level horizontal overflow at 360 px width"
      ]
    },
    {
      "id": "hub-overview",
      "page_ids": ["bosses-hub"],
      "desktop": "Compact identity, grouped nav, page summary, full boss card-grid with name / chapter / weakness / Issen window rows, related-guides",
      "mobile": "Identity strip, cluster nav, summary, card-grid stacks one per row, related-guides below",
      "regions": [
        {
          "id": "identity",
          "component": "identity-hero",
          "source": "Site Plan boss-hub identity (all chapter bosses, Onimusha: Way of the Sword)",
          "mobile": "Compact identity strip"
        },
        {
          "id": "primary-nav",
          "component": "grouped-navigation",
          "source": "Site Plan Primary Navigation",
          "mobile": "Chip-row cluster nav"
        },
        {
          "id": "summary",
          "component": "answer-summary",
          "source": "Site Plan bosses-hub quick answer (chapter list, Issen posture break pattern)",
          "mobile": "Full readable width above the grid"
        },
        {
          "id": "boss-grid",
          "component": "entity-grid",
          "source": "Site Plan bosses-hub chapter boss list (Sasaki Ganryu, Daidara, Rasho-gan, Byakue, Ifuu, Nue, Greater Nue, Dohatsu-ten, Benkei, Burai, Shuten Doji, Dokyo, Yoshitsune)",
          "mobile": "Single-column card stack with name, chapter, weakness, Issen window rows"
        },
        {
          "id": "related",
          "component": "related-guides",
          "source": "Site Plan Required Internal Links from /bosses/ to /bosses/sasaki-ganryu/, /bosses/shuten-doji/, /bosses/yoshitsune/, combat-guide, weapons",
          "mobile": "Stacked list below the grid"
        }
      ],
      "ad_placements": [
        { "slot_id": "page-top", "desktop": { "anchor": "$header", "edge": "after" }, "mobile": { "anchor": "$header", "edge": "after" } },
        { "slot_id": "guide-section-break", "desktop": { "anchor": "boss-grid", "edge": "inside" }, "mobile": { "anchor": "boss-grid", "edge": "after" } },
        { "slot_id": "guide-rail", "desktop": { "anchor": "summary", "edge": "after" } },
        { "slot_id": "footer-sponsored", "desktop": { "anchor": "$footer", "edge": "inside" }, "mobile": { "anchor": "$footer", "edge": "inside" } }
      ],
      "acceptance": [
        "Every chapter boss from the Site Plan bosses-hub list is rendered as a card-grid entry",
        "Boss cards show name, chapter, weakness, and Issen window as four readable rows",
        "Card grid tolerates unequal name lengths (Sasaki Ganryu vs Greater Nue vs Dohatsu-ten) without clipping",
        "No page-level horizontal overflow at 360 px width"
      ]
    },
    {
      "id": "boss-leaf",
      "page_ids": ["boss-sasaki-ganryu", "boss-shuten-doji", "boss-yoshitsune"],
      "desktop": "Identity strip, grouped nav, answer-summary, guide-modules (steps + data-table), key-facts, faq, related-guides, right rail",
      "mobile": "Identity strip, chip-row cluster nav, answer-summary, guide-modules, key-facts, faq, related-guides stacked in a single column",
      "regions": [
        {
          "id": "identity",
          "component": "identity-hero",
          "source": "Site Plan per-boss identity (Sasaki Ganryu / Shuten Doji / Yoshitsune)",
          "mobile": "Compact identity strip with boss name and chapter"
        },
        {
          "id": "primary-nav",
          "component": "grouped-navigation",
          "source": "Site Plan Primary Navigation",
          "mobile": "Chip-row cluster nav"
        },
        {
          "id": "answer",
          "component": "answer-summary",
          "source": "Site Plan per-boss Quick Answer (weakness part, Issen window, posture break trigger)",
          "mobile": "Full readable width above steps"
        },
        {
          "id": "modules",
          "component": "guide-modules",
          "source": "Site Plan per-boss module combination (steps + data-table for Rikido break / Oni Armament matchup)",
          "mobile": "Steps stack full-width; data-table scrolls inside its own container"
        },
        {
          "id": "facts",
          "component": "key-facts",
          "source": "Site Plan per-boss Required Answers (chapter, weakness, posture trigger, Oni Armament matchup)",
          "mobile": "Two-column key/value pairs collapse to single column"
        },
        {
          "id": "faq",
          "component": "faq",
          "source": "Site Plan per-boss Frequently Asked (Ganryu Chapter 17 forced-loss, Shuten Doji self-heal, Yoshitsune Phase 3 unlock)",
          "mobile": "Stacked Q/A pairs"
        },
        {
          "id": "related",
          "component": "related-guides",
          "source": "Site Plan per-boss cross-links (combat-guide, oni-armaments, other bosses)",
          "mobile": "Stacked list"
        }
      ],
      "ad_placements": [
        { "slot_id": "page-top", "desktop": { "anchor": "$header", "edge": "after" }, "mobile": { "anchor": "$header", "edge": "after" } },
        { "slot_id": "guide-native", "desktop": { "anchor": "answer", "edge": "after" }, "mobile": { "anchor": "answer", "edge": "after" } },
        { "slot_id": "guide-section-break", "desktop": { "anchor": "modules", "edge": "inside" }, "mobile": { "anchor": "modules", "edge": "after" } },
        { "slot_id": "guide-before-faq", "desktop": { "anchor": "faq", "edge": "before" }, "mobile": { "anchor": "faq", "edge": "before" } },
        { "slot_id": "guide-rail", "desktop": { "anchor": "answer", "edge": "after" } },
        { "slot_id": "footer-sponsored", "desktop": { "anchor": "$footer", "edge": "inside" }, "mobile": { "anchor": "$footer", "edge": "inside" } }
      ],
      "acceptance": [
        "Quick Answer is visible above the fold on desktop and the first screen on mobile",
        "Rikido posture-break trigger is reachable in two clicks from any of the three boss pages",
        "Wide tables (Oni Armament matchup) scroll inside their container and never push the page wider than the viewport",
        "Right rail cross-links to combat-guide, oni-armaments and the boss-hub stay visible on desktop"
      ]
    },
    {
      "id": "combat-guide",
      "page_ids": ["combat-guide", "oni-gauntlet", "weapons"],
      "desktop": "Identity strip, grouped nav, answer-summary, guide-modules (steps + tables + callouts), key-facts, faq, related-guides, right rail",
      "mobile": "Identity strip, chip-row cluster nav, answer-summary, guide-modules, key-facts, faq, related-guides stacked single-column",
      "regions": [
        {
          "id": "identity",
          "component": "identity-hero",
          "source": "Site Plan Combat cluster identity (Issen / Parry / Deflect, Oni Gauntlet, weapon tiers)",
          "mobile": "Compact identity strip"
        },
        {
          "id": "primary-nav",
          "component": "grouped-navigation",
          "source": "Site Plan Primary Navigation",
          "mobile": "Chip-row cluster nav"
        },
        {
          "id": "answer",
          "component": "answer-summary",
          "source": "Site Plan Quick Answer (Issen frame, tier-unlock list, weapon upgrade red-soul cost)",
          "mobile": "Full readable width above modules"
        },
        {
          "id": "modules",
          "component": "guide-modules",
          "source": "Site Plan Combat cluster module combination (steps for combat ladder, data-table for soul colors, data-table for weapon tier red-soul costs)",
          "mobile": "Steps stack; tables scroll inside their own container"
        },
        {
          "id": "facts",
          "component": "key-facts",
          "source": "Site Plan Combat cluster Required Answers (cannot-Issen moves, chapter gates, tier ladder)",
          "mobile": "Two-column key/value pairs collapse to single column"
        },
        {
          "id": "faq",
          "component": "faq",
          "source": "Site Plan Combat cluster Frequently Asked (Issen frame width, Rikido reset, red-vs-blue soul split)",
          "mobile": "Stacked Q/A pairs"
        },
        {
          "id": "related",
          "component": "related-guides",
          "source": "Site Plan Combat cluster Required Internal Links (combat-guide ↔ oni-gauntlet ↔ weapons ↔ oni-armaments ↔ boss hub)",
          "mobile": "Stacked list"
        }
      ],
      "ad_placements": [
        { "slot_id": "page-top", "desktop": { "anchor": "$header", "edge": "after" }, "mobile": { "anchor": "$header", "edge": "after" } },
        { "slot_id": "guide-native", "desktop": { "anchor": "answer", "edge": "after" }, "mobile": { "anchor": "answer", "edge": "after" } },
        { "slot_id": "guide-section-break", "desktop": { "anchor": "modules", "edge": "inside" }, "mobile": { "anchor": "modules", "edge": "after" } },
        { "slot_id": "guide-before-faq", "desktop": { "anchor": "faq", "edge": "before" }, "mobile": { "anchor": "faq", "edge": "before" } },
        { "slot_id": "guide-rail", "desktop": { "anchor": "answer", "edge": "after" } },
        { "slot_id": "footer-sponsored", "desktop": { "anchor": "$footer", "edge": "inside" }, "mobile": { "anchor": "$footer", "edge": "inside" } }
      ],
      "acceptance": [
        "Quick Answer on Issen frame / tier-unlock / red-soul cost is visible above the fold on desktop and the first screen on mobile",
        "Combat-step ladder, Oni Gauntlet tier table and weapon-tier table are reachable in one scroll each",
        "Wide tables (soul color matrix, weapon tier costs) scroll inside their container at 360 px width",
        "Combat ↔ Oni Gauntlet ↔ Weapons ↔ Oni Armaments cross-links remain visible in the right rail on desktop"
      ]
    },
    {
      "id": "progression-guide",
      "page_ids": ["difficulty", "endings", "trophies"],
      "desktop": "Identity strip, grouped nav, answer-summary, guide-modules (steps + callouts + tables), key-facts, faq, related-guides, right rail",
      "mobile": "Identity strip, chip-row cluster nav, answer-summary, guide-modules, key-facts, faq, related-guides stacked single-column",
      "regions": [
        {
          "id": "identity",
          "component": "identity-hero",
          "source": "Site Plan Progression cluster identity (Difficulty, Endings, Trophies)",
          "mobile": "Compact identity strip"
        },
        {
          "id": "primary-nav",
          "component": "grouped-navigation",
          "source": "Site Plan Primary Navigation",
          "mobile": "Chip-row cluster nav"
        },
        {
          "id": "answer",
          "component": "answer-summary",
          "source": "Site Plan Progression cluster Quick Answer (Carnage irreversible, one fixed ending, 52-trophy Peerless roadmap)",
          "mobile": "Full readable width above modules"
        },
        {
          "id": "modules",
          "component": "guide-modules",
          "source": "Site Plan Progression cluster module combination (steps to switch at Spirit Mirror, data-table for NG+ carry-over, trophy list table, callout for Chapter 22 point of no return)",
          "mobile": "Steps and callouts stack; tables scroll inside their own container"
        },
        {
          "id": "facts",
          "component": "key-facts",
          "source": "Site Plan Progression cluster Required Answers (Carnage chapters, trophy counts, point-of-no-return rule)",
          "mobile": "Two-column key/value pairs collapse to single column"
        },
        {
          "id": "faq",
          "component": "faq",
          "source": "Site Plan Progression cluster Frequently Asked (Carnage reversibility, true-ending debunk, missable rule)",
          "mobile": "Stacked Q/A pairs"
        },
        {
          "id": "related",
          "component": "related-guides",
          "source": "Site Plan Progression cluster Required Internal Links (difficulty ↔ endings ↔ trophies ↔ combat-guide ↔ boss-yoshitsune)",
          "mobile": "Stacked list"
        }
      ],
      "ad_placements": [
        { "slot_id": "page-top", "desktop": { "anchor": "$header", "edge": "after" }, "mobile": { "anchor": "$header", "edge": "after" } },
        { "slot_id": "guide-native", "desktop": { "anchor": "answer", "edge": "after" }, "mobile": { "anchor": "answer", "edge": "after" } },
        { "slot_id": "guide-section-break", "desktop": { "anchor": "modules", "edge": "inside" }, "mobile": { "anchor": "modules", "edge": "after" } },
        { "slot_id": "guide-before-faq", "desktop": { "anchor": "faq", "edge": "before" }, "mobile": { "anchor": "faq", "edge": "before" } },
        { "slot_id": "guide-rail", "desktop": { "anchor": "answer", "edge": "after" } },
        { "slot_id": "footer-sponsored", "desktop": { "anchor": "$footer", "edge": "inside" }, "mobile": { "anchor": "$footer", "edge": "inside" } }
      ],
      "acceptance": [
        "Irreversible Carnage warning and Chapter 22 point-of-no-return callout are visible above the fold on every Progression page",
        "Trophy list table (52 rows) and NG+ carry-over table scroll inside their container at 360 px width",
        "Difficulty ↔ Endings ↔ Trophies cross-links remain visible in the right rail on desktop",
        "True-ending debunk callout is reachable in one click from the Endings page"
      ]
    },
    {
      "id": "collectibles-list",
      "page_ids": ["collectibles", "genma-notes", "oni-armaments"],
      "desktop": "Identity strip, grouped nav, answer-summary, wide-reference table (collectibles 11-category list / Genma Notes per-area list / Oni Armaments 7+ roster), guide-modules, key-facts, related-guides, right rail",
      "mobile": "Identity strip, chip-row cluster nav, answer-summary, wide-reference table scrolls inside its own pane, guide-modules, key-facts, related-guides stacked single-column",
      "regions": [
        {
          "id": "identity",
          "component": "identity-hero",
          "source": "Site Plan Collectibles cluster identity (274 collectibles, 11 categories; 23 Genma Notes; 7 Oni Armaments)",
          "mobile": "Compact identity strip"
        },
        {
          "id": "primary-nav",
          "component": "grouped-navigation",
          "source": "Site Plan Primary Navigation",
          "mobile": "Chip-row cluster nav"
        },
        {
          "id": "answer",
          "component": "answer-summary",
          "source": "Site Plan Collectibles cluster Quick Answer (11 categories, note #23 post-game, blue-soul Oni Armament roster)",
          "mobile": "Full readable width above the table"
        },
        {
          "id": "modules",
          "component": "guide-modules",
          "source": "Site Plan Collectibles cluster module combination (data-table for 11-category list / 23 per-area Genma Notes / 7 Oni Armaments)",
          "mobile": "Tables scroll inside their own horizontally-scrollable container"
        },
        {
          "id": "facts",
          "component": "key-facts",
          "source": "Site Plan Collectibles cluster Required Answers (per-category count, Oni Vision unlock requirement)",
          "mobile": "Two-column key/value pairs collapse to single column"
        },
        {
          "id": "related",
          "component": "related-guides",
          "source": "Site Plan Collectibles cluster Required Internal Links (collectibles ↔ genma-notes ↔ trophies ↔ oni-armaments ↔ weapons)",
          "mobile": "Stacked list"
        }
      ],
      "ad_placements": [
        { "slot_id": "page-top", "desktop": { "anchor": "$header", "edge": "after" }, "mobile": { "anchor": "$header", "edge": "after" } },
        { "slot_id": "guide-native", "desktop": { "anchor": "answer", "edge": "after" }, "mobile": { "anchor": "answer", "edge": "after" } },
        { "slot_id": "guide-section-break", "desktop": { "anchor": "modules", "edge": "inside" }, "mobile": { "anchor": "modules", "edge": "after" } },
        { "slot_id": "guide-rail", "desktop": { "anchor": "answer", "edge": "after" } },
        { "slot_id": "footer-sponsored", "desktop": { "anchor": "$footer", "edge": "inside" }, "mobile": { "anchor": "$footer", "edge": "inside" } }
      ],
      "acceptance": [
        "11-category collectibles table, 23-note per-area Genma Notes list, and 7+ Oni Armaments roster all stay inside a horizontally-scrollable pane at 360 px width",
        "Quick Answer on category counts, note #23 post-game rule, and Oni Armament blue-soul fuel is visible above the fold",
        "Collectibles ↔ Genma Notes ↔ Oni Armaments ↔ Trophies cross-links remain visible in the right rail on desktop"
      ]
    },
    {
      "id": "reference-overview",
      "page_ids": ["overview", "release-status", "system-requirements", "characters", "demo-reward", "platform-performance", "review-scores"],
      "desktop": "Identity strip, grouped nav, answer-summary, guide-modules, key-facts, related-guides, right rail",
      "mobile": "Identity strip, chip-row cluster nav, answer-summary, guide-modules, key-facts, related-guides stacked single-column",
      "regions": [
        {
          "id": "identity",
          "component": "identity-hero",
          "source": "Site Plan Reference + Overview cluster identity (overview / release-status / system-requirements / characters / demo-reward / platform-performance / review-scores)",
          "mobile": "Compact identity strip"
        },
        {
          "id": "primary-nav",
          "component": "grouped-navigation",
          "source": "Site Plan Primary Navigation",
          "mobile": "Chip-row cluster nav"
        },
        {
          "id": "answer",
          "component": "answer-summary",
          "source": "Site Plan Reference + Overview cluster Quick Answer (2026-09-04 launch + Switch 2 2026-09-25 / spec table / cast roster / Kubi Akari / 4K-60 vs Switch 2 30 / Famitsu 34/40 + Metacritic 85-86)",
          "mobile": "Full readable width above modules"
        },
        {
          "id": "modules",
          "component": "guide-modules",
          "source": "Site Plan Reference + Overview cluster module combination (data-table for spec, characters table, platform comparison table, scores table; callout for Demo save-transfer rule)",
          "mobile": "Tables scroll inside their own container; callouts stack"
        },
        {
          "id": "facts",
          "component": "key-facts",
          "source": "Site Plan Reference + Overview cluster Required Answers (release windows, Min/Rec specs, character chapter debuts, Kubi Akari effect, per-platform frame rate, score sources)",
          "mobile": "Two-column key/value pairs collapse to single column"
        },
        {
          "id": "related",
          "component": "related-guides",
          "source": "Site Plan Reference + Overview cluster Required Internal Links (overview ↔ release-status ↔ system-requirements ↔ platform-performance ↔ demo-reward ↔ combat-guide ↔ difficulty)",
          "mobile": "Stacked list"
        }
      ],
      "ad_placements": [
        { "slot_id": "page-top", "desktop": { "anchor": "$header", "edge": "after" }, "mobile": { "anchor": "$header", "edge": "after" } },
        { "slot_id": "guide-native", "desktop": { "anchor": "answer", "edge": "after" }, "mobile": { "anchor": "answer", "edge": "after" } },
        { "slot_id": "guide-before-faq", "desktop": { "anchor": "facts", "edge": "after" }, "mobile": { "anchor": "facts", "edge": "after" } },
        { "slot_id": "footer-sponsored", "desktop": { "anchor": "$footer", "edge": "inside" }, "mobile": { "anchor": "$footer", "edge": "inside" } }
      ],
      "acceptance": [
        "Per-platform frame-rate table, characters roster table and review scores table all stay inside a horizontally-scrollable pane at 360 px width",
        "Demo save-transfer / Kubi Akari reward callout is reachable in one click from the Demo-reward page",
        "Overview / release-status / system-requirements / platform-performance cross-links remain visible in the right rail on desktop"
      ]
    }
  ]
}
```

## 5. Component Presentation

### Shared Components

- Header and text identity: dark `pageBg` band with the `Source Serif 4` game name set at `headingWeight: 700` over a 1-px `lineStrong` bottom border. No logo, no wordmark, no branded lockup. Identity strip on home uses the same heading family at the largest scale; per-page identity strips use the same family at one step smaller.
- Primary and secondary CTA: primary CTA (Carnage lock-in confirm, Oni Gauntlet absorb, Trophy unlock confirmation) uses `accentPrimary` vermilion background with `textOnAccentPrimary` white text; secondary CTA (cross-link, "see also" link) uses `textLink` gold underline on `surface1`. CTAs sit on 12 px vertical / 20 px horizontal padding with `radius: 2px`.
- Cards and guide grids: card surface is `surface1` with `line` border, `radius: 2px`, `shadow: 0 1px 2px rgba(0, 0, 0, 0.6)`. Hover lifts to `surface3` and replaces the border with `lineStrong`. Card titles use the heading family at the card-title scale; metadata rows use body family at 14 px in `textMuted`.
- Steps, recipes, schedules, and comparisons: steps render as numbered rows on `surface1` with a 1-px crimson vertical rule beside each numbered step. Comparison tables (platform-performance, spec, score, weapons tier, Oni Armament roster, characters) use `surface2` header rows on `surface1` body rows with `line` cell separators.
- FAQ, callouts, and status states: FAQ uses `surface1` question + answer pairs with a 1-px `line` divider. Callouts (Carnage irreversible, Chapter 22 point-of-no-return, true-ending debunk, Demo save-transfer) use `surfaceInverse` (`#F4F2EC`) parchment background with `textInverse` (`#1A1815`) copy and a 4-px left border in `accentPrimary`. Status badges (Confirmed / Caution / Verify in-game) use `statusConfirmed`, `statusCaution`, `statusUnknown` foregrounds on `surface1`.
- Media: no Planner-required gameplay image exists in the current Collector materials, so every Media-capable region renders as `surface2` placeholder with type-only content (label, count, range). Decorative image use is `0`; the decoration-free theme contract preserves identity through color, type and decoration alone.
- Content container and Right Rail: the article column is centred at ~720 px max width with `surface1` background and `line` left rule. The right rail is a 260 px column on `pageBg` carrying cross-link and `key-facts` blocks; on mobile it stacks below the article with `lineStrong` top divider.

### Entity Hub And List Presentation

- Variable-length names: Sasaki Ganryu, Greater Nue, Dohatsu-ten, Minamoto no Yoshitsune, Izumo no Okuni, Ono no Takamura, Yoshitsune all use content-driven height on boss-hub cards; card grids tolerate unequal name lengths without clipping.
- Required image placement when planned: not applicable — the current Collector materials package contains zero `images`, and the Site Plan Player Content Review declares zero `image_requirements` for all 21 surfaces; the `Required Image Placement` block binds the materials SHA with an empty items list.
- Optional decoration: none selected. Decoration-free fallback renders the same identity through color, type and decoration alone.
- Summaries: each card row carries name, chapter, weakness line and Issen window line on `surface1` body rows; cross-link to per-boss leaf pages sits as a `textLink` anchor at the card footer.
- Player-relevant gameplay fields: chapter debut, posture break trigger, Oni Armament matchup — all rendered as type rows on the card.
- Relationship counts: cross-link badges count related pages (e.g. "Cross-link: combat-guide, oni-armaments") on each card footer.
- Card/list heights and decorative-image fallback only: cards use content-driven height; no fixed pixel heights; no decorative image is required for the fallback to remain coherent.

### Entity Detail Presentation

- Title: Source Serif 4 H1 at the page-title scale for boss-leaf, weapon-tier, Genma-Note, Oni-Armament, character and trophy detail sections.
- Required explanatory image placement when planned: not applicable — current Collector materials supply zero images, and the Site Plan declares zero `image_requirements`; no entity detail page carries a required image.
- Optional decoration: none selected.
- Player answer: per-page `answer-summary` Quick Answer block, then `guide-modules` steps and data-tables.
- Structured query fields: per-page `key-facts` block with chapter, weakness, posture trigger, Oni Armament matchup, etc.
- Related entities: per-page `related-guides` block linking to the boss hub, combat-guide, weapons, oni-armaments, and adjacent cluster pages.
- Sparse-field behavior: pages with sparse facts (e.g. character entries where only chapter + role + alignment are known) keep the same identity strip, Quick Answer and key-facts surface; they do not introduce empty placeholders.
- Provenance and version boundaries stay internal: no source block, no checked-date stamp, no version declaration, no disclaimer module on any entity detail page.

### Wide Tables And References

- Wide field sets: Oni Armaments 7+ roster, collectibles 11-category list (274 items), trophy 52-row table, characters roster, platform-performance comparison, system-requirements spec table, review-scores table — every wide table lives inside a horizontally-scrollable container at narrow widths.
- Table labels: `surface2` header row with `textPrimary` at 13 px tracking +0.02 em uppercase; row body uses `surface1` with `textPrimary` at 14 px; numeric columns right-align, label columns left-align.
- Local horizontal scrolling: a 1-px `lineStrong` bottom border marks the scrollable pane; the page-level `<body>` never grows wider than the viewport.
- Readable density: comfortable — 16 px row gap, 12 px cell padding, no zebra striping.
- No page-level overflow: page-level `<body>` width stays at 100 vw; only the table container scrolls.

### Mobile And Overflow

- Stacking order: identity strip → chip-row cluster nav → answer-summary → guide-modules → key-facts → faq → related-guides → footer-sponsored.
- Local overflow boundaries: each table scrolls inside its own container; each wide data-table inside an `overflow-x: auto` wrapper with `max-width: 100%`.
- Long URL / name wrapping: long boss names, character names and weapon names wrap inside their container; long borrowed Japanese words (Yoshitsune, Shuten Doji, Tamahagane) wrap on word boundaries when needed.
- Touch targets: every CTA, breadcrumb and cross-link has at least 44 px square touch area; primary CTAs sit at 48 px tall.
- Preserved reading width: at 360 px viewport the article column is 100% width minus 32 px gutter; the right rail collapses below the article; tables stay inside their horizontally-scrollable panes.

## 6. Builder Acceptance Checklist

- [ ] Uses the approved game-specific V4 configuration and page-family assembly.
- [ ] Locale Coverage exactly matches the Site Plan `primary_locale: en-US` and ordered `launch_locales: ["en-US"]`.
- [ ] Uses one shared theme across all launch locales; no locale-specific token set, shell variant, or visual direction exists.
- [ ] Every launch locale has non-empty heading and body font fallback stacks.
- [ ] Uses a text identity and no official or imitated game logo.
- [ ] Preserves Site Plan page hierarchy, locale scope, entity families (none), and route ownership.
- [ ] Implements Home (`guide-portal`), Hub (`card-grid`), Content (`reading-right-rail`), and required Workspace (`full-width`, not required by current Site Plan) presentation.
- [ ] Covers entity Hub/list and entity detail presentation without per-record design (current Site Plan declares no entity families; the Entity Hub / detail contract is preserved for future additions).
- [ ] Downloads selected assets locally, verifies identity, and registers full manifest metadata. (No decorative assets; no Planner-required images.)
- [ ] Renders no remote runtime image hotlinks.
- [ ] Keeps the theme coherent with all decorative images disabled while preserving every required image. (Decorative-free contract already covers this — there are no required images in the current package.)
- [ ] Required Image Placement binds current Collector materials (`collection_materials_sha256: 77b9cf8ef39e1b75019bbc6bf3fdc097b5e8ab4bec2136662f32430cef39895e`), covers exact Planner requirements (zero in current plan), and names non-optional media regions with visible desktop/mobile placement.
- [ ] Does not create public provenance, review-date, version-scope or disclaimer modules; homepage device/release/pricing facts stay on approved independent pages.
- [ ] Meets readable contrast for body text, links, CTAs, inverse surfaces, statuses, and focus states.
- [ ] Allows critical labels, headings, entity names, fields, and player-facing links to wrap or expand without clipping.
- [ ] Keeps tables and wide references locally scrollable without page overflow on mobile.
- [ ] Composes shared parts in site-local layouts; does not fork the shared template or add unplanned tool logic.
- [ ] Leaves no visual-direction or locale-adaptation decision to the builder.
