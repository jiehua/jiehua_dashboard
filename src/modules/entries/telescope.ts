import { defineModule, githubRepo, notionPage } from "../types";

export const telescope = defineModule({
  slug: "telescope",
  title: "民用&开源天文望远镜",
  group: "项目",
  status: "暂停",
  summary: "暂停。项目条目指向一份单独文档，标题里写着等资金。",
  facts: [
    { label: "状态", value: "暂停" },
    { label: "条件", value: "等资金" },
    { label: "文档", value: "单独一页" },
  ],
  direct: {
    label: "项目文档",
    href: notionPage("3146e76a725580b7ba47eb7ce97b7629"),
  },
  links: [
    {
      label: "Notion 项目条目",
      href: notionPage("3146e76a7255809d8968f2c582039749"),
    },
    { label: "GitHub open_telescope", href: githubRepo("open_telescope") },
  ],
  brief: [
    "Projects 里的条目状态是暂停，优先级为中，正文指向另一份项目文档。",
    "那份文档的标题是「民用&开源天文望远镜」，并标着暂停、等资金。",
    "open_telescope 仓库放着另一套产品文档，README 目前只有标题。",
  ],
  accent: "#4a5560",
});
