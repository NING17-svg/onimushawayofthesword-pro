import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

// Onimusha: Way of the Sword — primary navigation mirrors the Site Plan IA:
//   Launch & platforms (release-platforms, system-requirements, demo,
//     editions-pricing, switch-2-version, length)
//   Combat & mechanics (combat-mechanics, issen-guide, difficulty-settings)
//   Characters & bosses (characters, bosses, items-equipment)
//   Unlocks & press (trophies-achievements, reviews-press)
//
// Footer matches the V3 trust-page pattern (about, contact, privacy-policy, terms).

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release", labels: { "en-US": "Launch & platforms" } },
  { href: "/combat", labels: { "en-US": "Combat & mechanics" } },
  { href: "/characters", labels: { "en-US": "Characters & bosses" } },
  { href: "/trophies", labels: { "en-US": "Unlocks & press" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy Policy" } },
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