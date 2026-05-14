import { PROJECTS } from "../data/projects";
import LocationCard from "../components/LocationCard";
import DashboardPanels from "../components/DashboardPanels";
import { FaGithub, FaLinkedin, FaEnvelope, FaStar, FaStarHalf, FaStarOfLife } from "react-icons/fa";
import coxLogo from "../assets/cox_logo.png";
import schneiderLogo from "../assets/schneider_logo.png";

export default function HomePage({ setPage }) {
  return (
    <div className="page">
      <div className="home-intro fade-in">
        <p className="eyebrow">V.10</p>
        <h1 className="home-name">
          Hey! I'm <em>Quang Tran</em><br />
        </h1>
        <p className="home-bio">
          Software engineer focused on building reliable systems and scalable applications.
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
            <FaGithub className="social-icon" />
              GitHub
            <span className="arrow">↗</span>
          </a>
          <span className="social-sep">/</span>
          <a className="social-link" href="https://www.linkedin.com/in/quang-tran-uml/" target="_blank" rel="noreferrer">
            <FaLinkedin className="social-icon" />
              LinkedIn
            <span className="arrow">↗</span>
          </a>
          <span className="social-sep">/</span>
          <a className="social-link" href="mailto:your@email.com">
            <FaEnvelope className="social-icon" />
              E-mail
            <span className="arrow">↗</span>
          </a>
        </div>

        <div className="employer-strip">
          <span className="employer-label">currently</span>
          <span className="employer-name current">open to work</span>
          <span className="employer-slash">/</span>
          <a href="https://www.se.com/ww/en/" className="employer-name" target="_blank" rel="noreferrer">
            <img src={schneiderLogo} alt="Schneider Electric" className="employer-logo-schneider" />
              Schneider Electric <em>(past)</em>
          </a>
          <span className="employer-slash">/</span>
          <a href="https://www.coxengineering.com/who-we-are/" className="employer-name" target="_blank" rel="noreferrer">
            <img src={coxLogo} alt="Cox Engineering" className="employer-logo-cox" />
              Cox Engineering <em>(past)</em>
          </a>
        </div>
      </div>

      <div className="section-heading">
         <h2>
          <FaStar className="section-icon" />
          Featured Projects
        </h2>
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
          <a className="btn-book" href="https://cal.com/quang-tran/30min?overlayCalendar=true" target="_blank" rel="noreferrer">
            book a chat <span className="btn-arrow">→</span>
          </a>
        </div>
        <LocationCard />
      </div>
    </div>
  );
}