import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { App } from "./App";

function renderAt(path: string) {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("pages", () => {
  it("shows living cards and their direct links", () => {
    const html = renderAt("/");
    expect(html).toContain("启动资金");
    expect(html).toContain("市场行情看板");
    expect(html).toContain("直达 Notion");
    expect(html).toContain("https://app.notion.com/p/16e6e76a725580c7a2d4cef32c689cab");
    expect(html).toContain('href="/p/office"');
    expect(html).not.toContain("2025 Q1");
  });

  it("opens an independent project page", () => {
    const html = renderAt("/p/markets");
    expect(html).toContain("市场行情看板");
    expect(html).toContain("107");
    expect(html).toContain("https://github.com/jiehua/financial-market-dashboard");
    expect(html).toContain("http://127.0.0.1:8123");
    expect(html).toContain("回到主页");
  });

  it("renders the quarter list when asked", () => {
    const html = renderAt("/?view=quarters");
    expect(html).toContain("2026 Q4");
    expect(html).toContain("2025 Q1");
  });

  it("explains a missing project address", () => {
    const html = renderAt("/p/missing");
    expect(html).toContain("这个地址还没有项目");
  });
});
