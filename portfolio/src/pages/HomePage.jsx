import { PROJECTS } from "../data/projects";
import LocationCard from "../components/LocationCard";
import DashboardPanels from "../components/DashboardPanels";
import { FaGithub, FaLinkedin, FaEnvelope, FaStar, FaStarHalf, FaStarOfLife, FaTag, FaTags, FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";
import coxLogo from "../assets/cox_logo.png";
import schneiderLogo from "../assets/schneider_logo.png";

export default function HomePage({ setPage }) {
  return (
    <div className="page">
      <div className="home-intro fade-in">
        <p className="eyebrow">V.20</p>
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
      <div className="project-grid">
        {PROJECTS.slice(0, 2).map((p) => (
          <a
            key={p.id}
            className="project-card"
            href={"https://" + p.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-image-wrap">
              <img
                src={p.image}
                alt={p.title}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <div className="project-top">
                <h3>{p.title}</h3>
                <span className="proj-row-arrow">↗</span>
              </div>

              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                <FaTags className="project-tags-icon" />
                {p.tags.map((t, i) => (
                  <span
                    key={t}
                    className={`project-tag tag-color-${Math.floor(Math.random() * 6)}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="cards-grid">
        <div className="card"></div>
        <div className="card connect-card">
          <div className="card-title">
            <FaRegCalendarAlt className="card-title-icon" />
              Let's Connect
          </div>

          <p className="connect-text">
            Always open to interesting projects,
            collaborations, and conversations.
          </p>

          <a
            className="connect-btn"
            href="https://cal.com/quang-tran/30min?overlayCalendar=true"
            target="_blank"
            rel="noreferrer"
          >
            Book a Chat
            <FaArrowRight className="connect-arrow" />
          </a>
        </div>
        <LocationCard />
        <div className="card"></div>
      </div>
    </div>
  );
}