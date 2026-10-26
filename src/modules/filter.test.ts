import { describe, expect, it } from "vitest";
import { filterModules, parseView } from "./filter";
import { modules } from "./registry";

describe("filterModules", () => {
  it("hides finished quarters from the current view", () => {
    const current = filterModules(modules, "current", "");
    expect(current.some((module) => module.slug === "startup-fund")).toBe(true);
    expect(current.some((module) => module.slug === "work-os")).toBe(true);
    expect(current.some((module) => module.slug === "2025-q1")).toBe(false);
    expect(current.some((module) => module.status === "已完成")).toBe(false);
  });

  it("matches a project by a word in the summary", () => {
    const found = filterModules(modules, "all", "选址");
    expect(found.map((module) => module.slug)).toEqual(["office"]);
  });

  it("falls back to the current view", () => {
    expect(parseView(null)).toBe("current");
    expect(parseView("nope")).toBe("current");
    expect(parseView("quarters")).toBe("quarters");
  });
});
