import type { ThemeConfig } from "@/types/theme";

/** Per-game preview fixtures only. Never imported by production source. */
export const showcaseThemes = {
  "how-to-fish": {
    mode: "light", navigation: "header",
    tokens: {
      pageBg: "#f0f3f5", surface1: "#ffffff", surface2: "#e8eef2", surface3: "#dbe5ed", surfaceInverse: "#183249",
      textPrimary: "#192d3d", textMuted: "#526577", textInverse: "#ffffff", textOnAccentPrimary: "#ffffff",
      textLink: "#165782", focusRing: "#165782", line: "#d0dce5", lineStrong: "#8b9fac",
      accentPrimary: "#165782", accentSecondary: "#916320", accentBright: "#cfaa5c",
      statusConfirmed: "#246547", statusCaution: "#82561a", statusUnknown: "#526577",
    },
    typography: { headingFamily: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif', bodyFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', headingWeight: 700 },
    shape: { radius: "6px", borderWidth: "1px", shadow: "none", hoverLift: "-1px" },
    density: "comfortable", background: { mode: "solid", overlay: 0, position: "center" },
    variants: { home: "guide-portal", hub: "grouped-list", content: "reading-right-rail", workspace: "full-width" },
    decoration: { motif: "none", intensity: "low" },
  },
  "tears-of-metal": {
    mode: "dark", navigation: "wiki-sidebar",
    tokens: {
      pageBg: "#18221d", surface1: "#233029", surface2: "#2a392f", surface3: "#334438", surfaceInverse: "#e3dfc6",
      textPrimary: "#f1efdf", textMuted: "#b3bead", textInverse: "#18221d", textOnAccentPrimary: "#18221d",
      textLink: "#edca7b", focusRing: "#edca7b", line: "#3c4c3f", lineStrong: "#829078",
      accentPrimary: "#edca7b", accentSecondary: "#afc7a3", accentBright: "#edca7b",
      statusConfirmed: "#b3d3a2", statusCaution: "#edca7b", statusUnknown: "#b3bead",
    },
    typography: { headingFamily: '"Barlow Condensed", ui-sans-serif, system-ui, sans-serif', bodyFamily: 'ui-sans-serif, system-ui, sans-serif', headingWeight: 700 },
    shape: { radius: "2px", borderWidth: "1px", shadow: "none", hoverLift: "0px" },
    density: "compact", background: { mode: "solid", overlay: 0, position: "center" },
    variants: { home: "reference-desk", hub: "compact-index", content: "wide-reference", workspace: "panelled" },
    decoration: { motif: "grid", intensity: "low" },
  },
  "aion-2": {
    mode: "dark", navigation: "header",
    tokens: {
      pageBg: "#251d29", surface1: "#302535", surface2: "#3c2f41", surface3: "#48374e", surfaceInverse: "#e5d9bd",
      textPrimary: "#f4edde", textMuted: "#c5b9c7", textInverse: "#251d29", textOnAccentPrimary: "#251d29",
      textLink: "#e6c68c", focusRing: "#e6c68c", line: "#524155", lineStrong: "#a08a79",
      accentPrimary: "#e6c68c", accentSecondary: "#b5d1be", accentBright: "#e6c68c",
      statusConfirmed: "#b5d1be", statusCaution: "#e6c68c", statusUnknown: "#c5b9c7",
    },
    typography: { headingFamily: '"Cinzel", Georgia, serif', bodyFamily: 'ui-sans-serif, system-ui, sans-serif', headingWeight: 700 },
    shape: { radius: "3px", borderWidth: "1px", shadow: "none", hoverLift: "-1px" },
    density: "comfortable", background: { mode: "solid", overlay: 0, position: "center" },
    variants: { home: "visual-cover", hub: "card-grid", content: "reading-right-rail", workspace: "panelled" },
    decoration: { motif: "lines", intensity: "low" },
  },
  rivage: {
    mode: "dark", navigation: "wiki-sidebar",
    tokens: {
      pageBg: "#18232c", surface1: "#22323e", surface2: "#2b3e4b", surface3: "#354c59", surfaceInverse: "#dfe9ee",
      textPrimary: "#edf4f7", textMuted: "#b0c3ce", textInverse: "#18232c", textOnAccentPrimary: "#18232c",
      textLink: "#91d5e8", focusRing: "#91d5e8", line: "#3d5461", lineStrong: "#7393a4",
      accentPrimary: "#91d5e8", accentSecondary: "#e8b889", accentBright: "#e8b889",
      statusConfirmed: "#aad8c5", statusCaution: "#e8b889", statusUnknown: "#b0c3ce",
    },
    typography: { headingFamily: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif', bodyFamily: 'ui-sans-serif, system-ui, sans-serif', headingWeight: 700 },
    shape: { radius: "4px", borderWidth: "1px", shadow: "none", hoverLift: "0px" },
    density: "comfortable", background: { mode: "solid", overlay: 0, position: "center" },
    variants: { home: "guide-portal", hub: "grouped-list", content: "reading-right-rail", workspace: "full-width" },
    decoration: { motif: "none", intensity: "low" },
  },
} satisfies Record<string, ThemeConfig>;
export type ShowcaseGameId = keyof typeof showcaseThemes;
