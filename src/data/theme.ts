import type { ThemeConfig } from "@/types/theme";

// Edo ink and vermilion steel — single shared dark theme for Onimusha: Way of the Sword.
export const theme: ThemeConfig = {
  mode: "dark",
  navigation: "header",
  tokens: {
    pageBg: "#0E0F12",
    surface1: "#16181D",
    surface2: "#1C1F26",
    surface3: "#23272F",
    surfaceInverse: "#F4F2EC",
    textPrimary: "#ECE7D9",
    textMuted: "#A6A39A",
    textInverse: "#1A1815",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#D9A24A",
    focusRing: "#E07A4C",
    line: "#2E323B",
    lineStrong: "#43464F",
    accentPrimary: "#B23A3A",
    accentSecondary: "#4B5D78",
    accentBright: "#E07A4C",
    statusConfirmed: "#5C8A6A",
    statusCaution: "#C9A24B",
    statusUnknown: "#8E5D3B",
  },
  typography: {
    headingFamily: "\"Source Serif 4\", \"Noto Serif JP\", Georgia, serif",
    bodyFamily: "\"Inter\", \"Noto Sans JP\", system-ui, -apple-system, sans-serif",
    headingWeight: 700,
  },
  shape: {
    radius: "2px",
    borderWidth: "1px",
    shadow: "0 1px 2px rgba(0, 0, 0, 0.6)",
    hoverLift: "0",
  },
  density: "comfortable",
  background: {
    mode: "gradient",
    overlay: 0.08,
    position: "top",
  },
  variants: {
    home: "guide-portal",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: {
    motif: "lines",
    intensity: "low",
  },
};