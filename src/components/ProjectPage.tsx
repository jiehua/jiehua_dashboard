import { useEffect, type CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import { getModule } from "../modules/registry";
import { siteName, siteTitle } from "../site";
import { NotFound } from "./NotFound";
import { SiteHeader } from "./SiteHeader";

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getModule(slug) : undefined;

  useEffect(() => {
    document.title = project ? `${project.title} · ${siteName}` : `未找到 · ${siteName}`;
    return () => {
      document.title = siteTitle;
    };
  }, [project]);

  if (!project) return <NotFound />;

  const more = project.links;

  return (
    <>
      <SiteHeader />
      <main className="project">
        <p className="back">
          <Link to="/">回到主页</Link>
        </p>
        <p className="kicker">
          <span className="stamp" style={{ "--accent": project.accent } as CSSProperties}>
            {project.status}
          </span>
          <span>{project.group}</span>
        </p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <dl className="facts facts-page">
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="brief">
          {project.brief.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="action-panel">
          <a
            className="direct direct-large"
            href={project.direct.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>直达 {project.direct.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
          {more.map((link) => (
            <a key={link.href} className="link-row" href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
