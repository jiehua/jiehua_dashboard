import { describe, expect, it } from "vitest";
import { getModule, modules } from "./registry";

describe("registry", () => {
  it("keeps every slug unique and resolvable", () => {
    const slugs = modules.map((module) => module.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const module of modules) {
      expect(getModule(module.slug)).toBe(module);
      expect(module.facts).toHaveLength(3);
      expect(module.direct.href.startsWith("https://")).toBe(true);
    }
  });

  it("keeps the recorded end date for 2025 Q3", () => {
    const quarter = getModule("2025-q3");
    expect(quarter?.facts.find((fact) => fact.label === "结束")?.value).toBe(
      "2025-08-31",
    );
  });
});
