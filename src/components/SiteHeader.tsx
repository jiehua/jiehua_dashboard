import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function SiteHeader({ search }: { search?: ReactNode }) {
  return (
    <header className="site-header">
      <Link to="/" className="mark">
        <span className="mark-name">史颉华</span>
        <span className="mark-sub">个人主页</span>
      </Link>
      {search}
    </header>
  );
}
