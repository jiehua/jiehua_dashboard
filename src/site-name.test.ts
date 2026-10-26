import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { siteName, siteTitle } from "./site";

const forbidden = ["石" + "杰华", "史" + "杰华", "石" + "颉华"];

function sourceFiles(dir: string): string[] {
  const found: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === "dist" || entry === ".git") continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      found.push(...sourceFiles(path));
      continue;
    }
    if (entry.endsWith(".test.ts") || entry.endsWith(".test.tsx")) continue;
    if (/\.(tsx?|html|md|svg|css)$/.test(entry)) found.push(path);
  }
  return found;
}

describe("site name", () => {
  it("uses the characters recorded in Notion", () => {
    expect(siteName).toBe("史颉华");
    expect(siteTitle).toBe("史颉华 · 个人主页");
  });

  it("rejects spellings guessed from the email", () => {
    const files = sourceFiles(".");
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const text = readFileSync(file, "utf8");
      for (const wrong of forbidden) {
        expect(text.includes(wrong), `${file} contains ${wrong}`).toBe(false);
      }
    }
    const html = readFileSync("index.html", "utf8");
    const readme = readFileSync("README.md", "utf8");
    expect(html).toContain(siteName);
    expect(readme).toContain(siteName);
  });
});
