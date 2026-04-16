import { useState } from "react";
import { PROJECTS } from "../data/projects";

const CATS = ["all", "app", "machine learning", "tool"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <div className="page">
      <div className="projects-intro fade-in">
        <h1>Projects</h1>
        <p>Things I've built — coursework, side projects, and open source.</p>
      </div>

      <div className="filter-row">
        {CATS.map(c => (
          <button
            key={c}
            className={"filter-btn" + (filter === c ? " active" : "")}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="proj-grid">
        {shown.map((p, i) => (
          <a
            key={p.id}
            className="proj-cell"
            href={"https://" + p.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="proj-cell-num">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="proj-cell-title">{p.title}</div>
            <p className="proj-cell-desc">{p.desc}</p>
            <div className="proj-cell-tags">
              {p.tags.map(t => (
                <span key={t} className="proj-cell-tag">{t}</span>
              ))}
            </div>
            <span className="proj-cell-link">
              {p.link} ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}