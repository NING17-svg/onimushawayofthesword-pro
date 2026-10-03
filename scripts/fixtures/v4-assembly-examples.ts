import type { GuideModuleType } from "@/types/modules";
import type { HomeVariant } from "@/types/theme";

export interface AssemblyRecipe {
  label: string;
  gameContexts: string[];
  home: HomeVariant;
  sections: Array<{ purpose: string; preferred: GuideModuleType[]; optional?: boolean }>;
}

/** Illustrative combinations for tests, not runtime rules or defaults. */
export const assemblyRecipes = {
  walkthrough: { label: "Level, quest or puzzle walkthrough", gameContexts: ["puzzle", "adventure", "platformer"], home: "guide-portal", sections: [
    { purpose: "Find the level or task", preferred: ["guide-index", "progression"] },
    { purpose: "Understand the goal and conditions", preferred: ["fact-panel", "callout"] },
    { purpose: "Follow the solution", preferred: ["steps"] },
    { purpose: "See the relevant scene", preferred: ["media-gallery"], optional: true },
    { purpose: "Find the next answer", preferred: ["guide-index"] },
  ] },
  combat: { label: "Boss preparation and build choice", gameContexts: ["action", "RPG", "strategy"], home: "reference-desk", sections: [
    { purpose: "Choose an approach", preferred: ["comparison"] },
    { purpose: "Compare requirements or responses", preferred: ["data-table", "fact-panel"] },
    { purpose: "Execute and recover", preferred: ["steps", "callout"] },
    { purpose: "Look up related equipment", preferred: ["entity-grid", "guide-index"], optional: true },
  ] },
  reference: { label: "Character, item or location lookup", gameContexts: ["RPG", "survival", "collection"], home: "reference-desk", sections: [
    { purpose: "Find the object", preferred: ["guide-index", "entity-grid"] },
    { purpose: "Scan properties and prerequisites", preferred: ["fact-panel", "data-table"] },
    { purpose: "Obtain, use or combine it", preferred: ["steps", "recipes", "prose"] },
    { purpose: "Navigate object relationships", preferred: ["guide-index", "featured-guides"] },
  ] },
  production: { label: "Production, pricing and resource planning", gameContexts: ["management", "crafting", "survival"], home: "guide-portal", sections: [
    { purpose: "Choose the objective", preferred: ["comparison", "fact-panel"] },
    { purpose: "Understand inputs and outputs", preferred: ["recipes", "data-table"] },
    { purpose: "Apply the sequence", preferred: ["steps", "progression"] },
    { purpose: "Explain trade-offs", preferred: ["prose", "callout"] },
  ] },
  troubleshooting: { label: "Co-op, settings and troubleshooting", gameContexts: ["co-op", "racing", "simulation"], home: "guide-portal", sections: [
    { purpose: "Confirm the supported situation", preferred: ["comparison", "fact-panel"] },
    { purpose: "Follow the checks", preferred: ["steps"] },
    { purpose: "Identify limitations", preferred: ["callout", "data-table"] },
    { purpose: "Find related fixes", preferred: ["guide-index"] },
  ] },
  codes: { label: "Codes and time-sensitive rewards", gameContexts: ["Roblox", "live service"], home: "guide-portal", sections: [
    { purpose: "Show verified current status", preferred: ["callout", "data-table"] },
    { purpose: "Redeem or claim", preferred: ["steps"] },
    { purpose: "Resolve errors", preferred: ["callout", "prose"] },
    { purpose: "Show confirmed timing", preferred: ["schedule"], optional: true },
  ] },
  availability: { label: "Release, platforms and current availability", gameContexts: ["unreleased", "version changes"], home: "guide-portal", sections: [
    { purpose: "Answer what is confirmed", preferred: ["callout", "fact-panel"] },
    { purpose: "Compare availability", preferred: ["data-table", "comparison"] },
    { purpose: "Explain evidence and changes", preferred: ["schedule", "prose"] },
  ] },
} satisfies Record<string, AssemblyRecipe>;
export type AssemblyRecipeId = keyof typeof assemblyRecipes;
