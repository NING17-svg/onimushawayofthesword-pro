import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  "id": "fixed-home",
  "translationKey": "home",
  "locale": "en-US",
  "routeKind": "home",
  "slug": "",
  "url": "/",
  "pageType": "home",
  "presentation": {
    "shell": "home",
    "variant": "guide-portal"
  },
  "h1": "Onimusha Way of the Sword Player Guides and Walkthroughs",
  "seoTitle": "Onimusha Way of the Sword Player Guides and Walkthroughs",
  "metaDescription": "Browse 20 ordered Onimusha Way of the Sword guides grouped by Combat, Bosses, Progression, Collectibles, Lore, and Overview. Pick the entry that matches your current play situation.",
  "summary": "Browse 20 ordered Onimusha Way of the Sword guides grouped by Combat, Bosses, Progression, Collectibles, Lore, and Overview. Pick the entry that matches your current play situation.",
  "hero": {
    "eyebrow": "Player guides hub",
    "subtitle": "Player homepage directory to locate the right guide for the current play situation",
    "ctas": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "Release status",
        "href": "/onimusha-way-of-the-sword-release-date/"
      }
    ]
  },
  "quickAnswer": "# Onimusha Way of the Sword Player Guides",
  "keyFacts": [
    {
      "label": "Coverage",
      "value": "20 guides across 6 clusters"
    },
    {
      "label": "Game",
      "value": "Onimusha: Way of the Sword (Capcom, 2026)"
    },
    {
      "label": "Primary platform",
      "value": "Steam / PS5 / Xbox / Switch 2"
    }
  ],
  "modules": [
    {
      "id": "guide-index",
      "type": "guide-index",
      "heading": "Guide directory by cluster",
      "columns": 1,
      "groups": [
        {
          "title": "Combat",
          "items": [
            {
              "label": "Combat guide",
              "href": "/onimusha-way-of-the-sword-combat-guide/",
              "description": "Issen / Parry / Deflect timing"
            },
            {
              "label": "Oni Gauntlet",
              "href": "/oni-gauntlet/",
              "description": "Tier unlock order"
            },
            {
              "label": "Weapons",
              "href": "/onimusha-way-of-the-sword-weapons/",
              "description": "Tier upgrade costs"
            },
            {
              "label": "Oni Armaments",
              "href": "/oni-armaments/",
              "description": "Blue-soul armament roster"
            }
          ]
        },
        {
          "title": "Bosses",
          "items": [
            {
              "label": "Boss hub",
              "href": "/bosses/",
              "description": "Chapter-boss order"
            },
            {
              "label": "Sasaki Ganryu",
              "href": "/bosses/sasaki-ganryu/",
              "description": "Tsuba weakness"
            },
            {
              "label": "Shuten Doji",
              "href": "/bosses/shuten-doji/",
              "description": "Back-crystal weakness"
            },
            {
              "label": "Yoshitsune",
              "href": "/bosses/yoshitsune/",
              "description": "Three-phase Issen plan"
            }
          ]
        },
        {
          "title": "Progression",
          "items": [
            {
              "label": "Difficulty",
              "href": "/onimusha-way-of-the-sword-difficulty/",
              "description": "Carnage lock-in"
            },
            {
              "label": "Endings",
              "href": "/onimusha-way-of-the-sword-endings/",
              "description": "Single ending"
            },
            {
              "label": "Trophy guide",
              "href": "/onimusha-way-of-the-sword-trophy-guide/",
              "description": "52-trophy roadmap"
            }
          ]
        },
        {
          "title": "Collectibles",
          "items": [
            {
              "label": "Collectibles hub",
              "href": "/onimusha-way-of-the-sword-collectibles/",
              "description": "274 items"
            },
            {
              "label": "Genma Notes",
              "href": "/onimusha-way-of-the-sword-genma-notes-locations/",
              "description": "23 lore notes"
            }
          ]
        },
        {
          "title": "Lore",
          "items": [
            {
              "label": "Characters",
              "href": "/onimusha-way-of-the-sword-characters/",
              "description": "Cast roster"
            },
            {
              "label": "Demo reward",
              "href": "/onimusha-way-of-the-sword-demo-reward/",
              "description": "Kubi Akari charm"
            },
            {
              "label": "System requirements",
              "href": "/onimusha-way-of-the-sword-system-requirements/",
              "description": "PC specs"
            },
            {
              "label": "Platform performance",
              "href": "/onimusha-way-of-the-sword-platform-performance/",
              "description": "PS5 / Xbox / PC / Switch 2"
            },
            {
              "label": "Review scores",
              "href": "/onimusha-way-of-the-sword-review/",
              "description": "Famitsu + Metacritic"
            }
          ]
        },
        {
          "title": "Overview",
          "items": [
            {
              "label": "What is it",
              "href": "/onimusha-way-of-the-sword/",
              "description": "2026 standalone soft-reboot"
            },
            {
              "label": "Release status",
              "href": "/onimusha-way-of-the-sword-release-date/",
              "description": "Global launch + patch level"
            }
          ]
        }
      ]
    },
    {
      "id": "match-situation",
      "type": "prose",
      "heading": "Match the entry to where you are right now",
      "body": "Use the cluster groups as quick lookup labels, not as hard categories. If you are stuck on the first chapter boss Sasaki Ganryu at Kiyomizu-dera, open the Sasaki Ganryu boss guide first, then skim the combat guide if you have not practiced the Issen timing window yet. If you just unlocked the Oni Gauntlet and a new tier icon is greyed out, open the Oni Gauntlet abilities page. If you reached Chapter 22 and are unsure if there is a true ending, open the endings page, then the Yoshitsune final boss guide."
    }
  ],
  "faqIds": [],
  "relatedPageIds": [
    "fixed-overview",
    "fixed-combat-guide",
    "fixed-bosses-hub",
    "fixed-weapons",
    "fixed-difficulty",
    "fixed-endings",
    "fixed-collectibles",
    "fixed-trophies",
    "fixed-characters",
    "fixed-review-scores"
  ],
  "schemaTypes": [
    "WebSite",
    "CollectionPage",
    "BreadcrumbList"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-10-03"
};
