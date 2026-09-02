import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-09-02";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About the Onimusha: Way of the Sword guide hub: scope, sourcing rules, and editorial principles for the September 3, 2026 launch window.",
    summary:
      "An unofficial guide hub for Onimusha: Way of the Sword. This page explains the site's scope, how launch facts are sourced, and what readers should expect.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Explain what the site covers, how launch facts are sourced, and what readers should expect from the Onimusha: Way of the Sword guide hub.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial guide hub for Capcom's Onimusha: Way of the Sword, covering release status, demo, editions, combat, characters, bosses, items, trophies, and reviews. Launch facts are sourced to the Steam store page (AppID 2638890), Steam Community hub, SteamDB, the Capcom Spotlight Game Overview Trailer, the Capcom release-date advancement announcement, and launch-window reviews from HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Subject", value: "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890)" },
      { label: "Release date", value: "September 3, 2026" },
      { label: "Editorial rule", value: "Verified launch facts first; unknown items labeled with date" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "about-mission",
        type: "prose",
        heading: "Mission",
        body:
          `${site.name} exists to give players a clean, well-structured set of launch facts for Onimusha: Way of the Sword without pretending the site knows more than official sources support. The site covers the launch window: the September 3, 2026 release date, the cross-store demo, the Standard, Deluxe, and Premium Deluxe editions, the Oni Gauntlet and Issen combat system, the confirmed Genma boss lineup, and the launch-window review coverage. Where the official evidence stops, the site labels the gap with a dated status statement rather than filling it with a guess.`,
      },
      {
        id: "about-sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Launch facts are sourced to the Steam store page for AppID 2638890, the Steam Community hub, SteamDB's listing for the same AppID, the Capcom Spotlight Game Overview Trailer, the Capcom release-date advancement announcement, and the launch-window reviews from HowToShark, Dengeki PlayStation, RPG Site, Push Square, WorthPlaying, and GameSpot. The site's site.ts file lists the same eleven sources as the official-sources list. Third-party recaps are treated as informational only; where a third-party recap and an official source disagree, the official source wins.",
      },
      {
        id: "about-scope",
        type: "prose",
        heading: "Scope",
        body:
          "The site covers the Onimusha: Way of the Sword launch: release status, system requirements, demo, editions and pricing, the Nintendo Switch 2 version, length, difficulty, combat, the Issen timing system, the confirmed Genma boss lineup, characters, items and equipment, trophies and achievements, and reviews and press. It does not cover prior Onimusha: Warlords, Onimusha 2: Samurai's Destiny, Onimusha 3: Demon Siege, Onimusha: Dawn of Dreams, Onimusha Tactics, or Onimusha: Blade Warriors content as primary subjects — those titles are referenced only as historical context.",
      },
      {
        id: "about-update",
        type: "prose",
        heading: "Updates",
        body:
          "Every page carries a lastReviewed date stamp. As launch facts change (release-date advancement, demo expansion, additional confirmed bosses, post-launch trophies, etc.), the affected page's lastReviewed date is updated and the new fact is sourced to its official anchor. The home page carries the master fact-boundary callout that lists what is and is not announced as of 2026-09-02.",
      },
    ],
    faqIds: [
      "onimusha-way-of-the-sword-review-embargo",
    ],
    relatedPageIds: [
      "contact",
      "privacy-policy",
      "terms",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact the Onimusha: Way of the Sword guide hub for corrections, official source updates, and site feedback ahead of the September 3, 2026 launch.",
    summary:
      "A trust page for corrections, official source updates, and site feedback for the Onimusha: Way of the Sword guide hub.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, official source updates, and feedback for the Onimusha: Way of the Sword guide hub. Do not send private account information.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Use this page to send corrections, official source links, or general feedback for the Onimusha: Way of the Sword guide hub. Replace this placeholder with a working contact method (an email address or contact form endpoint) before launch day.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and official source links" },
      { label: "Launch requirement", value: "Add a working contact method before launch" },
      { label: "Do not send", value: "Private account information or credentials" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Add a real email address or contact form endpoint before publishing on September 3, 2026. The placeholder structure exists so the site has a complete trust-page set during pre-launch review. Once a working method is in place, link it from the hero CTA and the data-protection section on this page.",
      },
      {
        id: "contact-corrections",
        type: "prose",
        heading: "Corrections and official source links",
        body:
          "Invite readers to send official source links (Steam store page, Steam Community hub, SteamDB, Capcom Spotlight trailer, Capcom release-date announcement, launch-window reviews) when a launch fact changes. The site updates the affected page's lastReviewed date stamp and the home page's master fact-boundary callout. Do not request private account information or game account credentials in any contact exchange.",
      },
      {
        id: "contact-response",
        type: "prose",
        heading: "Response expectations",
        body:
          "Set clear response expectations before launch: an expected reply window, the kinds of corrections that will be acted on, and the kinds of messages that will not be replied to (general game questions better directed at Capcom support, account-specific help, spam).",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "about",
      "privacy-policy",
      "terms",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the Onimusha: Way of the Sword guide hub: analytics, contact messages, advertising, and policy updates.",
    summary:
      "A starter privacy policy for the Onimusha: Way of the Sword guide hub, covering analytics, contact messages, advertising, and policy updates.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can reach the site owner for the Onimusha: Way of the Sword guide hub.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This privacy policy should be reviewed before the September 3, 2026 launch and updated to match the deployed site's analytics, hosting, contact, and advertising setup. The site does not include accounts, comments, or payments in V1.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts in V1" },
      { label: "Ads", value: "Adsterra only when enabled" },
      { label: "Subject site", value: "Onimusha: Way of the Sword guide hub" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "privacy-collect",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads. The site is a guide hub for Onimusha: Way of the Sword, so the data collected is limited to standard web analytics and contact messages.",
      },
      {
        id: "privacy-contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a contact method is added (email address or form endpoint), messages may include the information visitors choose to send, such as corrections, official source links, or feedback. Do not request sensitive personal information through the contact channel.",
      },
      {
        id: "privacy-third-party",
        type: "prose",
        heading: "Third-party services",
        body:
          "The site may use third-party services including Cloudflare for hosting, GA4 for aggregate analytics, and an advertising provider when ads are enabled. Each third-party service processes only the data needed for its function. Refer to each provider's own privacy policy for the data they collect.",
      },
      {
        id: "privacy-updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes. The lastReviewed date stamp on this page reflects the most recent review pass.",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "about",
      "contact",
      "terms",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the Onimusha: Way of the Sword guide hub: unofficial status, informational use, accuracy, and acceptable use.",
    summary:
      "Terms of use for the unofficial Onimusha: Way of the Sword guide hub, covering unofficial status, informational use, accuracy, and acceptable use.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for the unofficial status, informational use, and acceptable use of the Onimusha: Way of the Sword guide hub.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "These terms cover the unofficial Onimusha: Way of the Sword guide hub. The site is informational only and is not affiliated with Capcom, Sony, Microsoft, Nintendo, Valve, or Epic Games unless explicitly stated after launch.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Subject", value: "Onimusha: Way of the Sword (Capcom, Steam AppID 2638890)" },
      { label: "Last reviewed", value: "2026-09-02" },
    ],
    modules: [
      {
        id: "terms-unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is an unofficial guide hub for Onimusha: Way of the Sword. It is not affiliated with Capcom (the developer and publisher), Sony Interactive Entertainment (PlayStation 5), Microsoft (Xbox Series X|S), Nintendo (Switch 2), Valve (Steam), or Epic Games (Epic Games Store) unless explicitly stated after launch. All game-related trademarks and copyrights belong to their respective owners.",
      },
      {
        id: "terms-accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources (the Steam store page for AppID 2638890, the Steam Community hub, the Capcom Spotlight trailer, the Capcom release-date advancement announcement, and the launch-window reviews) for final purchase, platform, and release decisions. The site's lastReviewed date stamps reflect the most recent review pass; if a page is older than the current launch date, treat its content as pending review rather than authoritative.",
      },
      {
        id: "terms-acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel. The site is provided as-is for informational use; the site owner is not liable for actions taken based on guide content. Refer to the privacy policy for data handling.",
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "about",
      "contact",
      "privacy-policy",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
];