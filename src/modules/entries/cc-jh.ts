import { defineModule, notionPage } from "../types";

export const ccJh = defineModule({
  slug: "cc-jh",
  title: "CC&JH",
  group: "项目",
  status: "进行中",
  summary: "进行中，两个人一起做，周期记到 2027 年底。",
  facts: [
    { label: "状态", value: "进行中" },
    { label: "协作", value: "两人" },
    { label: "周期", value: "至 2027-12" },
  ],
  direct: {
    label: "Notion",
    href: notionPage("16e6e76a72558025b25eee7cec712918"),
  },
  links: [],
  brief: [
    "CC&JH 目前是进行中，优先级为中，项目页上有两位负责人。",
    "记录区间是 2025-01-01 至 2027-12-31。任务列表在 Notion 项目页里。",
  ],
  accent: "#3f5e4a",
});
