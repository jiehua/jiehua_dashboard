import { ccJh } from "./entries/cc-jh";
import { companySetup } from "./entries/company-setup";
import { markets } from "./entries/markets";
import { office } from "./entries/office";
import { pastQuarters } from "./entries/quarters";
import { quarter2026Q4 } from "./entries/quarter-2026-q4";
import { researchOs } from "./entries/research-os";
import { skills } from "./entries/skills";
import { startupFund } from "./entries/startup-fund";
import { telescope } from "./entries/telescope";
import { workOs } from "./entries/work-os";
import type { ProjectModule } from "./types";

/**
 * 主页只读这份名单。
 * 新项目：在 entries/ 加一个模块，再放进这个数组。
 * 卡片和 /p/:slug 页面会一起出现。
 */
export const modules: ProjectModule[] = [
  quarter2026Q4,
  startupFund,
  ccJh,
  companySetup,
  telescope,
  workOs,
  markets,
  office,
  skills,
  researchOs,
  ...pastQuarters,
];

const bySlug = new Map<string, ProjectModule>();

for (const module of modules) {
  if (bySlug.has(module.slug)) {
    throw new Error(`项目代号重复：${module.slug}`);
  }
  bySlug.set(module.slug, module);
}

export function getModule(slug: string): ProjectModule | undefined {
  return bySlug.get(slug);
}
