import { defineModule, githubRepo } from "../types";

export const skills = defineModule({
  slug: "skills",
  title: "Skills",
  group: "系统",
  status: "进行中",
  summary: "个人 AI 技能库，给 Claude、Codex 和 Cursor 用。",
  facts: [
    { label: "技能", value: "2 个目录 + 1 个旧文件" },
    { label: "客户端", value: "Claude、Cursor" },
    { label: "仓库", value: "私有" },
  ],
  direct: { label: "GitHub", href: githubRepo("skills") },
  links: [
    {
      label: "Skills Manager 备份仓库",
      href: githubRepo("skills-manager-backup"),
    },
  ],
  brief: [
    "skills 仓库保存技能指令，以及 Skills Manager 的一份备份快照。",
    "仓库说明里当前是 2 个标准目录技能，外加 1 个历史单文件技能。",
    "skills-manager-backup 仍是应用使用的备份仓库，两处不会自动互相同步。",
  ],
  accent: "#5a4a78",
});
