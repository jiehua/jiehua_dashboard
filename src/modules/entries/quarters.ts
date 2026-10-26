import { defineModule, notionPage, type ProjectModule } from "../types";

const doneQuarters: Array<{
  slug: string;
  title: string;
  start: string;
  end: string;
  notionId: string;
}> = [
  {
    slug: "2025-q1",
    title: "2025 Q1",
    start: "2025-01-01",
    end: "2025-03-31",
    notionId: "16e6e76a7255800abcd1dc93f7fe8ea5",
  },
  {
    slug: "2025-q2",
    title: "2025 Q2",
    start: "2025-04-01",
    end: "2025-06-30",
    notionId: "1c66e76a72558069a2b7f14e17c443eb",
  },
  {
    slug: "2025-q3",
    title: "2025 Q3",
    start: "2025-07-01",
    end: "2025-08-31",
    notionId: "22c6e76a725580cbbf96c6089ea1ddd5",
  },
  {
    slug: "2025-q4",
    title: "2025 Q4",
    start: "2025-10-01",
    end: "2025-12-31",
    notionId: "27e6e76a725580e5a575ecb748801cc4",
  },
  {
    slug: "2026-q1",
    title: "2026 Q1",
    start: "2026-01-01",
    end: "2026-03-31",
    notionId: "2a96e76a72558076952dc47e3dfde85f",
  },
  {
    slug: "2026-q2",
    title: "2026 Q2",
    start: "2026-04-01",
    end: "2026-06-30",
    notionId: "32b6e76a72558039a578e2bdacef78ca",
  },
  {
    slug: "2026-q3",
    title: "2026 Q3",
    start: "2026-07-01",
    end: "2026-09-30",
    notionId: "3906e76a72558058bf28d355b1896f56",
  },
];

export const pastQuarters: ProjectModule[] = doneQuarters.map((quarter) =>
  defineModule({
    slug: quarter.slug,
    title: quarter.title,
    group: "季度",
    status: "已完成",
    summary: `已结束。记录区间是 ${quarter.start} 至 ${quarter.end}。`,
    facts: [
      { label: "状态", value: "已完成" },
      { label: "开始", value: quarter.start },
      { label: "结束", value: quarter.end },
    ],
    direct: { label: "Notion", href: notionPage(quarter.notionId) },
    links: [],
    brief: [
      `${quarter.title} 在 Notion 中的状态是已完成，优先级为中。`,
      `记录区间是 ${quarter.start} 至 ${quarter.end}。`,
    ],
    accent: "#8a8175",
  }),
);
