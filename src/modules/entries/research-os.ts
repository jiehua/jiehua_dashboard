import { defineModule, githubRepo } from "../types";

export const researchOs = defineModule({
  slug: "research-os",
  title: "Research OS",
  group: "系统",
  status: "进行中",
  summary: "给知识工作用的信息层。工作从工作区开始，而不是从散落的应用开始。",
  facts: [
    { label: "形态", value: "编号文档" },
    { label: "起点", value: "工作区" },
    { label: "仓库", value: "research_OS" },
  ],
  direct: { label: "GitHub", href: githubRepo("research_OS") },
  links: [],
  brief: [
    "Research OS Desktop 把信息、上下文、研究和业务数据收成一个持续在的工作区。",
    "仓库按编号整理愿景、产品、架构、信息架构、运行时、集成和路线图。",
    "入口文档是 0000_Product_Vision 和 2000_System_Architecture。",
  ],
  accent: "#3e5870",
});
