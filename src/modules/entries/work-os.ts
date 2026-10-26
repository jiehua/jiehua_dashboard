import { defineModule, githubRepo } from "../types";

export const workOs = defineModule({
  slug: "work-os",
  title: "Work OS",
  group: "系统",
  status: "进行中",
  summary: "工作系统的规划、设计和使用。今天怎么运转，和业务怎么运转，分成两套表面。",
  facts: [
    { label: "表面", value: "今天 / 业务" },
    { label: "基准", value: "架构原则 v1" },
    { label: "仓库", value: "Work_OS" },
  ],
  direct: { label: "GitHub", href: githubRepo("Work_OS") },
  links: [],
  brief: [
    "Work OS 仓库分三块：规划、设计、使用。",
    "Workspace Dashboard 回答今天怎么运转。Work Section 回答业务怎么运转。两套表面不合并，可以共享数据和 AI。",
    "当前设计基准是《Work OS 的核心架构原则》。",
  ],
  accent: "#7a4b2e",
});
