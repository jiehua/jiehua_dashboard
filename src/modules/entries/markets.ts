import { defineModule, githubRepo } from "../types";

export const markets = defineModule({
  slug: "markets",
  title: "市场行情看板",
  group: "系统",
  status: "进行中",
  summary: "一页行情。指数、股票、商品、汇率和加密资产放在一起看。",
  facts: [
    { label: "标的", value: "107" },
    { label: "分组", value: "19" },
    { label: "本机", value: "127.0.0.1:8123" },
  ],
  direct: {
    label: "GitHub",
    href: githubRepo("financial-market-dashboard"),
  },
  links: [{ label: "本机看板", href: "http://127.0.0.1:8123" }],
  brief: [
    "看板是单页 HTML，仓库说明里当前是 107 个标的、19 个分组。",
    "在仓库目录运行 python3 server.py，浏览器打开 http://127.0.0.1:8123。直接打开 HTML 文件时用的是内置示例数据。",
    "行情只供参考。",
  ],
  accent: "#9a5b24",
});
