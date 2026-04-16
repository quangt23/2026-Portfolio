import { useEffect, useState } from "react";
import { fetchCommits, fetchLanguages } from "../lib/github";

export default function DashboardPanels() {
  const [commits, setCommits] = useState([]);
  const [langs, setLangs] = useState([]);

  const OWNER = "quangt23";
  const REPO = "2026-Portfolio";

  useEffect(() => {
    async function load() {
      const commitData = await fetchCommits(OWNER, REPO);
      const langData = await fetchLanguages(OWNER, REPO);

      setCommits(commitData);
      setLangs(langData);
    }

    load();
  }, []);

  return (
    <div className="dashboard-panels">
      {/* ── RECENT COMMITS ── */}
      <div className="panel">
        <div className="panel-header">
          <span>Recent Commits</span>
        </div>

        <div className="commit-list">
          {commits.map((c, i) => (
            <div key={i} className="commit-row">
              <span className="commit-msg">{c.msg}</span>
              <span className="commit-stats">
                <span className="plus">+{c.additions}</span>
                <span className="minus">-{c.deletions}</span>
              </span>
            </div>
          ))}
        </div>

        {/* language bar */}
        <div className="lang-bar">
          {langs.map((l, i) => (
            <span
              key={i}
              style={{ width: `${l.percent}%` }}
              title={l.lang}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}