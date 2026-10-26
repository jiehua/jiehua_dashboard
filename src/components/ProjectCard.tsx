import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { ProjectModule } from "../modules/types";

export function ProjectCard({ module }: { module: ProjectModule }) {
  return (
    <article
      className="card"
      style={{ "--accent": module.accent } as CSSProperties}
    >
      <div className="card-kicker">
        <span className="stamp">{module.status}</span>
        <span className="group">{module.group}</span>
      </div>
      <h2 className="card-title">
        <Link to={`/p/${module.slug}`}>{module.title}</Link>
      </h2>
      <p className="card-summary">{module.summary}</p>
      <dl className="facts">
        {module.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="card-actions">
        <Link className="quiet" to={`/p/${module.slug}`}>
          本站页面
        </Link>
        <a
          className="direct"
          data-direct={module.slug}
          href={module.direct.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`直达${module.direct.label}：${module.title}`}
        >
          直达 {module.direct.label}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
