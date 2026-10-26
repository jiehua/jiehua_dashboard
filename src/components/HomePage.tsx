import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { filterModules, parseView, views, type ViewId } from "../modules/filter";
import { modules } from "../modules/registry";
import { siteTitle } from "../site";
import { ProjectCard } from "./ProjectCard";
import { SiteHeader } from "./SiteHeader";

export function HomePage() {
  const [params, setParams] = useSearchParams();
  const view = parseView(params.get("view"));
  const query = params.get("q") ?? "";
  const results = filterModules(modules, view, query);
  const finishedQuarters = modules.filter(
    (module) => module.group === "季度" && module.status === "已完成",
  ).length;
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = siteTitle;
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA")
      ) {
        return;
      }
      event.preventDefault();
      searchRef.current?.focus();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function update(next: { view?: ViewId; q?: string }) {
    const nextView = next.view ?? view;
    const nextQuery = next.q ?? query;
    const search = new URLSearchParams();
    if (nextView !== "current") search.set("view", nextView);
    if (nextQuery.trim().length > 0) search.set("q", nextQuery);
    setParams(search, { replace: true });
  }

  function openFirst(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter" || results.length === 0) return;
    event.preventDefault();
    window.open(results[0].direct.href, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <a className="skip" href="#projects">
        跳到卡片
      </a>
      <SiteHeader
        search={
          <form className="search" role="search" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="project-search">
              搜索项目
            </label>
            <input
              id="project-search"
              ref={searchRef}
              value={query}
              placeholder="搜索项目，回车直达"
              onChange={(event) => update({ q: event.target.value })}
              onKeyDown={openFirst}
            />
          </form>
        }
      />
      <main className="home">
        <section className="intro">
          <p className="eyebrow">门厅</p>
          <h1>项目都留在各自的页面里。</h1>
          <p className="lede">
            每张卡片先给状态和三行预览。点「直达」打开原文，点标题进入本站的项目页。
          </p>
        </section>
        <div className="toolbar">
          <div className="filters" role="tablist" aria-label="筛选">
            {views.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === view}
                className={item.id === view ? "filter is-on" : "filter"}
                onClick={() => update({ view: item.id })}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="count" aria-live="polite">
            {results.length} 张卡片
            {query.trim().length > 0 && results[0]
              ? ` · 回车直达 ${results[0].title}`
              : ""}
          </p>
        </div>
        {view === "current" ? (
          <p className="hint">已完成的 {finishedQuarters} 个季度页收在「季度」。</p>
        ) : null}
        {results.length === 0 ? (
          <div className="empty">
            <p>换个词，或切到「全部」。</p>
            <button type="button" className="quiet-button" onClick={() => update({ q: "" })}>
              清空搜索
            </button>
          </div>
        ) : (
          <section className="grid" id="projects">
            {results.map((module) => (
              <ProjectCard key={module.slug} module={module} />
            ))}
          </section>
        )}
      </main>
    </>
  );
}
