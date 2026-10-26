import { Link } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";

export function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="project">
        <h1>这个地址还没有项目。</h1>
        <p className="lede">回到主页，从卡片进去。</p>
        <p className="back">
          <Link to="/">回到主页</Link>
        </p>
      </main>
    </>
  );
}
