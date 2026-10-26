export type ProjectStatus = "进行中" | "规划中" | "暂停" | "已完成";

export type ProjectGroup = "项目" | "系统" | "季度";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectModule = {
  slug: string;
  title: string;
  group: ProjectGroup;
  status: ProjectStatus;
  summary: string;
  facts: [ProjectFact, ProjectFact, ProjectFact];
  direct: ProjectLink;
  links: ProjectLink[];
  brief: string[];
  accent: string;
};

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isAllowedHref(href: string): boolean {
  return href.startsWith("https://") || href.startsWith("http://127.0.0.1");
}

export function notionPage(id: string): string {
  return `https://app.notion.com/p/${id}`;
}

export function githubRepo(name: string): string {
  return `https://github.com/jiehua/${name}`;
}

export function defineModule(module: ProjectModule): ProjectModule {
  if (!slugPattern.test(module.slug)) {
    throw new Error(`项目代号不可用：${module.slug}`);
  }
  if (module.summary.trim().length === 0 || module.brief.length === 0) {
    throw new Error(`${module.slug} 缺少预览说明`);
  }
  if (module.brief.some((paragraph) => paragraph.trim().length === 0)) {
    throw new Error(`${module.slug} 有空段落`);
  }
  const hrefs = [module.direct.href, ...module.links.map((link) => link.href)];
  if (hrefs.some((href) => !isAllowedHref(href))) {
    throw new Error(`${module.slug} 的链接需要是 https，或本机 127.0.0.1`);
  }
  return module;
}
