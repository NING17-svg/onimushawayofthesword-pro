import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  {
    href: "/onimusha-way-of-the-sword/",
    labels: { "en-US": "Overview" },
    children: [
      { href: "/onimusha-way-of-the-sword/", labels: { "en-US": "What is Onimusha: Way of the Sword" } },
      { href: "/onimusha-way-of-the-sword-release-date/", labels: { "en-US": "Release status" } },
    ],
  },
  {
    href: "/onimusha-way-of-the-sword-combat-guide/",
    labels: { "en-US": "Combat" },
    children: [
      { href: "/onimusha-way-of-the-sword-combat-guide/", labels: { "en-US": "Combat guide (Issen / Parry / Deflect)" } },
      { href: "/oni-gauntlet/", labels: { "en-US": "Oni Gauntlet abilities" } },
      { href: "/onimusha-way-of-the-sword-weapons/", labels: { "en-US": "Weapons and upgrade tiers" } },
      { href: "/oni-armaments/", labels: { "en-US": "Oni Armaments list" } },
    ],
  },
  {
    href: "/bosses/",
    labels: { "en-US": "Bosses" },
    children: [
      { href: "/bosses/", labels: { "en-US": "Boss hub" } },
      { href: "/bosses/sasaki-ganryu/", labels: { "en-US": "Sasaki Ganryu" } },
      { href: "/bosses/shuten-doji/", labels: { "en-US": "Shuten Doji" } },
      { href: "/bosses/yoshitsune/", labels: { "en-US": "Yoshitsune final boss" } },
    ],
  },
  {
    href: "/onimusha-way-of-the-sword-difficulty/",
    labels: { "en-US": "Progression" },
    children: [
      { href: "/onimusha-way-of-the-sword-difficulty/", labels: { "en-US": "Difficulty and Carnage lock-in" } },
      { href: "/onimusha-way-of-the-sword-endings/", labels: { "en-US": "Endings and point of no return" } },
      { href: "/onimusha-way-of-the-sword-trophy-guide/", labels: { "en-US": "Trophy and platinum roadmap" } },
    ],
  },
  {
    href: "/onimusha-way-of-the-sword-collectibles/",
    labels: { "en-US": "Collectibles" },
    children: [
      { href: "/onimusha-way-of-the-sword-collectibles/", labels: { "en-US": "Collectibles hub (274 items)" } },
      { href: "/onimusha-way-of-the-sword-genma-notes-locations/", labels: { "en-US": "Genma Notes locations (23)" } },
    ],
  },
  {
    href: "/onimusha-way-of-the-sword-characters/",
    labels: { "en-US": "Reference" },
    children: [
      { href: "/onimusha-way-of-the-sword-characters/", labels: { "en-US": "Characters and story roster" } },
      { href: "/onimusha-way-of-the-sword-demo-reward/", labels: { "en-US": "Demo reward" } },
      { href: "/onimusha-way-of-the-sword-system-requirements/", labels: { "en-US": "System requirements" } },
      { href: "/onimusha-way-of-the-sword-platform-performance/", labels: { "en-US": "Platform performance" } },
      { href: "/onimusha-way-of-the-sword-review/", labels: { "en-US": "Review scores" } },
    ],
  },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}