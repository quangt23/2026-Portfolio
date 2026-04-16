import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import TypingLogo from "./components/TypingLogo";

export default function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-dark", String(dark));
  }, [dark]);

  return (
    <>
      <nav>
        <button className="nav-logo" onClick={() => setPage("home")}>
          <TypingLogo />
        </button>

        <div className="nav-links">
          {[
            { id: "home",     label: "~"        },
            { id: "about",    label: "about"    },
            { id: "projects", label: "projects" },
          ].map(({ id, label }) => (
            <button
              key={id}
              className={"nav-link" + (page === id ? " active" : "")}
              onClick={() => setPage(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <button className="theme-btn" onClick={() => setDark(d => !d)} title="Toggle theme">
          {dark ? "○" : "●"}
        </button>
      </nav>

      <main key={page}>
        {page === "home"     && <HomePage     setPage={setPage} />}
        {page === "about"    && <AboutPage    />}
        {page === "projects" && <ProjectsPage />}
      </main>

      <footer>
        <span>quang tran — {new Date().getFullYear()}</span>
        <span>randolph, ma</span>
      </footer>
    </>
  );
}