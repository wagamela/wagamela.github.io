// Fetches the GitHub contribution calendar at build time.
// The deploy workflow rebuilds the site every day, so the graph stays fresh
// without any JavaScript calling GitHub from the visitor's browser.

export type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
export type Calendar = { total: number; weeks: Day[][]; source: "github" | "sample" | "none" };

function toLevel(count: number, max: number): Day["level"] {
  if (count === 0) return 0;
  const ratio = count / Math.max(max, 1);
  if (ratio > 0.75) return 4;
  if (ratio > 0.5) return 3;
  if (ratio > 0.25) return 2;
  return 1;
}

// Groups days into Sunday-first weeks, like GitHub does.
function toWeeks(days: { date: string; count: number }[]): Day[][] {
  const max = Math.max(...days.map((d) => d.count), 0);
  const weeks: Day[][] = [];
  for (const d of days) {
    const weekday = new Date(`${d.date}T00:00:00Z`).getUTCDay();
    if (weekday === 0 || weeks.length === 0) weeks.push([]);
    weeks[weeks.length - 1].push({ ...d, level: toLevel(d.count, max) });
  }
  return weeks;
}

async function fromGraphQL(user: string, token: string) {
  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { login: user } }),
  });
  if (!res.ok) throw new Error(`GitHub GraphQL responded ${res.status}`);
  const json = await res.json();
  const weeks = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
  if (!weeks) throw new Error(`Unexpected GraphQL response: ${JSON.stringify(json).slice(0, 200)}`);
  return weeks.flatMap((w: any) =>
    w.contributionDays.map((d: any) => ({ date: d.date, count: d.contributionCount })),
  );
}

// Public, token-free mirror of the same data. Used when no token is available.
async function fromPublicApi(user: string) {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`);
  if (!res.ok) throw new Error(`Contributions API responded ${res.status}`);
  const json = await res.json();
  return json.contributions.map((d: any) => ({ date: d.date, count: d.count }));
}

// Fake but realistic-looking data, only for local previews (SAMPLE_CONTRIBUTIONS=1).
function sample() {
  const days: { date: string; count: number }[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - i);
    const busy = Math.sin(i / 20) + Math.random() * 1.6;
    days.push({ date: d.toISOString().slice(0, 10), count: busy > 1 ? Math.round(busy * 4) : 0 });
  }
  return days;
}

export async function getCalendar(user: string): Promise<Calendar> {
  if (process.env.SAMPLE_CONTRIBUTIONS) {
    const days = sample();
    return { total: days.reduce((s, d) => s + d.count, 0), weeks: toWeeks(days), source: "sample" };
  }
  const attempts = [
    process.env.GITHUB_TOKEN ? () => fromGraphQL(user, process.env.GITHUB_TOKEN!) : null,
    () => fromPublicApi(user),
  ].filter(Boolean) as (() => Promise<{ date: string; count: number }[]>)[];

  for (const attempt of attempts) {
    try {
      const days = await attempt();
      return { total: days.reduce((s, d) => s + d.count, 0), weeks: toWeeks(days), source: "github" };
    } catch (err) {
      console.warn(`[contributions] ${(err as Error).message}`);
    }
  }
  return { total: 0, weeks: [], source: "none" };
}
