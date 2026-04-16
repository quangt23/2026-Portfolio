const BASE = "https://api.github.com";

export async function fetchCommits(owner, repo) {
  try {
    const res = await fetch(`${BASE}/repos/${owner}/${repo}/commits?per_page=5`);
    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Commits API error:", data);
      return [];
    }

    const detailed = await Promise.all(
      data.slice(0, 3).map(async (c) => {
        const detailRes = await fetch(c.url);
        const detail = await detailRes.json();

        return {
          msg: c.commit.message.split("\n")[0],
          additions: detail.stats?.additions ?? 0,
          deletions: detail.stats?.deletions ?? 0,
        };
      })
    );

    return detailed;
  } catch (err) {
    console.error("fetchCommits failed:", err);
    return [];
  }
}

export async function fetchLanguages(owner, repo) {
  try {
    const res = await fetch(`${BASE}/repos/${owner}/${repo}/languages`);
    const data = await res.json();

    if (!data || typeof data !== "object") {
      console.error("Languages API error:", data);
      return [];
    }

    const total = Object.values(data).reduce((a, b) => a + b, 0);

    if (total === 0) return [];

    return Object.entries(data).map(([lang, bytes]) => ({
      lang,
      percent: (bytes / total) * 100,
    }));
  } catch (err) {
    console.error("fetchLanguages failed:", err);
    return [];
  }
}