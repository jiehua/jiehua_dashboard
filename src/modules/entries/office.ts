import { defineModule, githubRepo } from "../types";

export const office = defineModule({
  slug: "office",
  title: "北京办公室",
  group: "系统",
  status: "进行中",
  summary: "筹建记录。先看选址和分区，再看设备放在哪。",
  facts: [
    { label: "范围", value: "选址到设备" },
    { label: "总表", value: "放置规划" },
    { label: "仓库", value: "公开" },
  ],
  direct: { label: "GitHub", href: githubRepo("office") },
  links: [],
  brief: [
    "北京办公室的筹建记录都在 office 仓库的 docs 目录。",
    "选址定区域和楼宇条件，布置划分办公、休息、健身和访客。",
    "各区域设备的数量、位置和状态，以《办公室设备放置规划》为唯一维护入口。",
  ],
  accent: "#2f5d50",
});
