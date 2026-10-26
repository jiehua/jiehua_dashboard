import { defineModule, notionPage } from "../types";

export const startupFund = defineModule({
  slug: "startup-fund",
  title: "启动资金",
  group: "项目",
  status: "进行中",
  summary: "高优先级，进行中。周期记到 2026 年底，任务挂在项目页。",
  facts: [
    { label: "优先级", value: "高" },
    { label: "周期", value: "至 2026-12" },
    { label: "任务", value: "9 项" },
  ],
  direct: {
    label: "Notion",
    href: notionPage("16e6e76a725580c7a2d4cef32c689cab"),
  },
  links: [],
  brief: [
    "启动资金目前是进行中，优先级为高。",
    "记录区间是 2025-01-01 至 2026-12-31。项目页上挂着 9 项任务。",
  ],
  accent: "#8d3b3b",
});
