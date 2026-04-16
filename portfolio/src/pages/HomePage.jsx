import { PROJECTS } from "../data/projects";
import LocationCard from "../components/LocationCard";

export default function HomePage({ setPage }) {
  return (
    <div className="page">
      <div className="home-intro fade-in">
        <p className="eyebrow">open to work</p>
        <h1 className="home-name">
          Hey, I'm <em>Quang Tran</em>.<br />I like to build things.
        </h1>
        <p className="home-bio">
          Software engineer focused on full-stack systems and machine learning.
          Recent CS grad from{" "}
          <a href="https://www.uml.edu/about/" target="_blank" rel="noreferrer">
            UMass Lowell
          </a>{" "}
          — previously Cybersecurity SWE at{" "}
          <a href="https://www.se.com/ww/en/" target="_blank" rel="noreferrer">
            Schneider Electric
          </a>
          . I care about code that's fast, readable, and ships on time.
        </p>

        <div className="socials">
          <a className="social-link" href="https://github.com/quangt23" target="_blank" rel="noreferrer">
            GitHub <span className="arrow">↗</span>
          </a>
          <span className="social-sep">/</span>
          <a className="social-link" href="https://www.linkedin.com/in/quang-tran-uml/" target="_blank" rel="noreferrer">
            LinkedIn <span className="arrow">↗</span>
          </a>
          <span className="social-sep">/</span>
          <a className="social-link" href="mailto:your@email.com">
            Email <span className="arrow">↗</span>
          </a>
        </div>

        <div className="employer-strip">
          <span className="employer-label">currently</span>
          <span className="employer-name current">open to work</span>
          <span className="employer-slash">/</span>
          <span className="employer-label">prev</span>
          <a href="https://www.se.com/ww/en/" className="employer-name" target="_blank" rel="noreferrer">
            Schneider Electric
          </a>
          <span className="employer-slash">/</span>
          <span className="employer-name">Cox Engineering</span>
        </div>
      </div>

      <div className="section-heading">
        <h2>Featured Projects</h2>
        <a href="#" onClick={e => { e.preventDefault(); setPage("projects"); }}>
          view all →
        </a>
      </div>

      <div className="proj-list">
        {PROJECTS.slice(0, 3).map(p => (
          <a
            key={p.id}
            className="proj-row"
            href={"https://" + p.link}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <div className="proj-row-title">{p.title}</div>
              <div className="proj-row-desc">{p.desc}</div>
              <div className="proj-row-tags">
                {p.tags.map(t => (
                  <span key={t} className="proj-tag">{t}</span>
                ))}
              </div>
            </div>
            <span className="proj-row-arrow">↗</span>
          </a>
        ))}
      </div>

      <div className="dashboard">
        <div className="dash-cell">
          <div className="dash-label">connect</div>
          <p className="connect-text">
            Always open to interesting projects, collaborations, and conversations.
          </p>
          <a className="btn-book" href="https://cal.com" target="_blank" rel="noreferrer">
            book a chat <span className="btn-arrow">→</span>
          </a>
        </div>
        <LocationCard />
      </div>
    </div>
  );
}