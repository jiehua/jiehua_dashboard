import { defineModule, notionPage } from "../types";

export const companySetup = defineModule({
  slug: "company-setup",
  title: "业务公司筹建",
  group: "项目",
  status: "规划中",
  summary: "还在规划。页上写的范围是机器人业务、投资计划和贸易公司。",
  facts: [
    { label: "状态", value: "规划中" },
    { label: "优先级", value: "高" },
    { label: "范围", value: "机器人、投资、贸易" },
  ],
  direct: {
    label: "Notion",
    href: notionPage("16e6e76a725580ad933bde97f8e3a2d1"),
  },
  links: [],
  brief: [
    "业务公司筹建目前是规划中，优先级为高。",
    "项目摘要里的范围是机器人业务、投资计划和贸易公司。",
    "记录区间是 2025-03-01 至 2025-12-31。",
  ],
  accent: "#3d5270",
});
