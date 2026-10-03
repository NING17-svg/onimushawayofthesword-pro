import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-onimusha-way-of-the-sword",
    question: "What is Onimusha: Way of the Sword?",
    answer:
      "Onimusha: Way of the Sword is a 2026 Capcom single-player third-person sword-combat action game set in Edo-period Kyoto, starring Miyamoto Musashi. It is a 2026 standalone soft-reboot and not a continuation of the 2001-2006 Onimusha series (Warlords, Onimusha 2, Onimusha 3, Dawn of Dreams).",
    pageIds: ["fixed-home", "fixed-overview"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-official",
    question: "Is this site official?",
    answer:
      "No. This is an unofficial fan guide. Game facts are sourced from the official Capcom product page, Steam store page, news.xbox.com combat guide, PowerPyx trophy roadmap, Onimusha Wiki and Fextralife. We do not represent Capcom, Sony, Microsoft, Nintendo, or Valve.",
    pageIds: ["fixed-home", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "release-date-known",
    question: "When did Onimusha: Way of the Sword launch?",
    answer:
      "Onimusha: Way of the Sword launched worldwide on 2026-09-04 on PS5, Xbox Series X|S, and Steam. The Switch 2 version launched on 2026-09-25. The original Demo (Steam / PlayStation) and the extended Switch 2 demo (Kiyomizu + Oni Refuge, with Ganryy + Daidara + Byakue) shipped earlier in 2026.",
    pageIds: ["fixed-release-status", "fixed-home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-known",
    question: "Which platforms is Onimusha: Way of the Sword available on?",
    answer:
      "PS5, Xbox Series X|S, PC (Steam AppID 2638890) and Switch 2. PC minimum specs are i5-8400 / GTX 1660 / 16 GB / 50 GB SSD with DLSS 4.5 / FSR 3.1, and the game supports DualSense, keyboard, and mouse.",
    pageIds: ["fixed-system-requirements", "fixed-platform-performance"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-is-issen",
    question: "What is the Issen counter window?",
    answer:
      "The standard Issen counter window is roughly 6 frames at 60 FPS (about 0.1 seconds). The visual cue is the enemy's weapon glowing white right as it reaches Musashi's hitbox. A successful Issen triggers a brief hit-stop and slow-motion animation, which is your cue to start a Chain Issen or back off.",
    pageIds: ["fixed-combat-guide", "fixed-home"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-carnage-be-reverted",
    question: "Can the Carnage difficulty be reverted?",
    answer:
      "No. The Carnage pick at the Spirit Mirror is irreversible in the same playthrough. Story and Action can be swapped freely; once you pick Carnage you cannot return to Action in that save. Carnage-specific trophies carry into NG+; the rest of the 52-trophy list stays on Story/Action.",
    pageIds: ["fixed-difficulty", "fixed-trophies"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-save-transfer",
    question: "Does the demo save transfer to the full game?",
    answer:
      "No. Demo saves do not carry over to the full version. The Demo / Switch 2 extended demo rewards the Kubi Akari charm once redeemed on the title screen; the extended demo also unlocks Byakue (the standalone boss fight) after 10 Issen counters at the title screen.",
    pageIds: ["fixed-demo-reward"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];