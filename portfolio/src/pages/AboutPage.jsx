import { EXPERIENCE } from "../data/experience";
import me from "../assets/me.jpg";

const SKILLS = [
  "Python", "C", "C++", "JavaScript", "React",
  "Node.js", "SQL", "AWS", "Docker", "Git",
  "Next.js", "Tailwind", "Linux", "Embedded Systems",
];

export default function AboutPage() {
  const years = new Date().getFullYear() - 2021;

  return (
    <div className="page">
      <div className="about-intro fade-in about-layout">
        <img
          src={me}   // put your image in /public/me.jpg
          alt="Quang Tran"
          className="about-photo"
        />

        <div className="about-text">
          <h1>About Me</h1>

          <p>
            Hey! I'm Quang Tran — a{" "}
            <span className="highlight">software engineer</span> with {years}+ years of
            coding experience and 1.5+ years of professional experience. I've recently
            written software that is currently being deployed in over{" "}
            <span className="highlight">10,000+ Schneider Electric devices</span>.
            I’m a recent graduate and actively looking for{" "}
            <span className="highlight">full-time software engineering roles</span>.
          </p>

          {/* Social links */}
          <div className="about-socials">
            <a href="https://github.com/YOUR_GITHUB">GitHub</a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN">LinkedIn</a>
            <a href="https://instagram.com/YOUR_INSTAGRAM">Instagram</a>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {[
          { label: "Location",  val: "Randolph, MA",              sub: "open to remote"         },
          { label: "Focus",     val: "Full-Stack & ML",           sub: "web, systems, tooling"  },
          { label: "Education", val: "B.S. Computer Science",     sub: "UMass Lowell — 2025"    },
          { label: "Status",    val: "Open to Work",              sub: "full-time & contract"   },
        ].map(c => (
          <div key={c.label} className="stat-cell">
            <div className="stat-label">{c.label}</div>
            <div className="stat-val">{c.val}</div>
            <div className="stat-sub">{c.sub}</div>
          </div>
        ))}
      </div>

      <div className="section-heading">
        <h2>Skills</h2>
      </div>
      <div className="skills-wrap">
        {SKILLS.map(s => (
          <span key={s} className="skill">{s}</span>
        ))}
      </div>

      <div className="section-heading" style={{ marginTop: "3.5rem" }}>
        <h2>Experience</h2>
      </div>

      <div className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="exp-item">
            <div className="exp-date">{e.date}</div>
            <div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">{e.company}</div>
              <p className="exp-desc">{e.desc}</p>
              <div className="exp-tags">
                {e.skills.map(s => (
                  <span key={s} className="exp-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="resume-row">
        <div>
          <strong>Resume</strong>
          <p>last updated {new Date().toLocaleString("default", { month: "long", year: "numeric" })}</p>
        </div>
        <a className="btn-resume" href="resume.pdf" download>
          download pdf →
        </a>
      </div>
    </div>
  );
}