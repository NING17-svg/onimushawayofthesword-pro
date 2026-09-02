import type { ThemeConfig } from "@/types/theme";

// Onimusha: Way of the Sword — dark crimson-ink samurai theme. The mixed mode
// gives Home and Hub shells the dark crimson radial atmosphere while every
// long-form Content / Reference page sits on the warm cream-paper surface.
// Tokens, typography, shape, density, background, decoration, and variants
// match the V3 theme specification dated 2026-09-02.

export const theme = {
  mode: "mixed",
  tokens: {
    pageBg: "#0B0A0D",
    surface1: "#14121A",
    surface2: "#1C1A24",
    surface3: "#26232E",
    surfaceInverse: "#F6F1E8",
    textPrimary: "#F2EBDC",
    textMuted: "#B5AC9A",
    textInverse: "#1A1620",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#D55B62",
    focusRing: "#E5474F",
    line: "#2A2733",
    lineStrong: "#3D3A48",
    accentPrimary: "#B91C2C",
    accentSecondary: "#C8A45C",
    accentBright: "#E5474F",
    statusConfirmed: "#4F8F4F",
    statusCaution: "#C8A45C",
    statusUnknown: "#9C9893",
  },
  typography: {
    headingFamily:
      "Manrope, 'Helvetica Neue', Arial, system-ui, sans-serif",
    bodyFamily:
      "'Inter', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "4px",
    borderWidth: "1px",
    shadow: "0 2px 8px rgba(11,10,13,0.5)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.6, position: "center top" },
  variants: {
    home: "media-hero",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;
