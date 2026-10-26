import type { ProjectModule } from "./types";

export const views = [
  { id: "current", label: "当前" },
  { id: "active", label: "进行中" },
  { id: "planning", label: "规划中" },
  { id: "paused", label: "暂停" },
  { id: "systems", label: "系统" },
  { id: "quarters", label: "季度" },
  { id: "all", label: "全部" },
] as const;

export type ViewId = (typeof views)[number]["id"];

export function parseView(value: string | null): ViewId {
  const match = views.find((view) => view.id === value);
  return match?.id ?? "current";
}

export function filterModules(
  source: ProjectModule[],
  view: ViewId,
  query: string,
): ProjectModule[] {
  const needle = query.trim().toLowerCase();
  return source.filter((module) => {
    if (!matchesView(module, view)) return false;
    if (needle.length === 0) return true;
    return searchableText(module).includes(needle);
  });
}

function matchesView(module: ProjectModule, view: ViewId): boolean {
  switch (view) {
    case "current":
      return module.status !== "已完成";
    case "active":
      return module.status === "进行中";
    case "planning":
      return module.status === "规划中";
    case "paused":
      return module.status === "暂停";
    case "systems":
      return module.group === "系统";
    case "quarters":
      return module.group === "季度";
    case "all":
      return true;
  }
}

function searchableText(module: ProjectModule): string {
  return [
    module.title,
    module.group,
    module.status,
    module.summary,
    module.direct.label,
    ...module.facts.flatMap((fact) => [fact.label, fact.value]),
  ]
    .join(" ")
    .toLowerCase();
}
