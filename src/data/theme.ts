import type { ThemeConfig } from "@/types/theme";

// Runnable neutral placeholder; each game supplies its own visual configuration.
export const theme: ThemeConfig = {
  mode: "light", navigation: "header",
  tokens: {
    pageBg: "#f5f5f5", surface1: "#ffffff", surface2: "#eeeeee", surface3: "#dddddd", surfaceInverse: "#222222",
    textPrimary: "#222222", textMuted: "#555555", textInverse: "#ffffff", textOnAccentPrimary: "#ffffff",
    textLink: "#333333", focusRing: "#333333", line: "#cccccc", lineStrong: "#888888",
    accentPrimary: "#333333", accentSecondary: "#555555", accentBright: "#777777",
    statusConfirmed: "#333333", statusCaution: "#555555", statusUnknown: "#666666",
  },
  typography: { headingFamily: "system-ui, sans-serif", bodyFamily: "system-ui, sans-serif", headingWeight: 700 },
  shape: { radius: "4px", borderWidth: "1px", shadow: "none", hoverLift: "0px" },
  density: "comfortable", background: { mode: "solid", overlay: 0, position: "center" },
  variants: { home: "guide-portal", hub: "grouped-list", content: "reading-right-rail", workspace: "full-width" },
  decoration: { motif: "none", intensity: "low" },
};
