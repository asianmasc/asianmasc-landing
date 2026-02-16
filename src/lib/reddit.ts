const FALLBACK_COUNT = 182000;

export async function getSubredditCount(): Promise<number> {
  // Try multiple sources with ISR (revalidate every 24 hours)
  const sources = [
    fetchFromRedditOld,
    fetchFromRedditApi,
  ];

  for (const source of sources) {
    try {
      const count = await source();
      if (count && count > 100000) return count;
    } catch {
      continue;
    }
  }

  return FALLBACK_COUNT;
}

async function fetchFromRedditOld(): Promise<number | null> {
  const res = await fetch("https://old.reddit.com/r/asianmasculinity/about.json", {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
    next: { revalidate: 86400 }, // Revalidate every 24 hours
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.data?.subscribers || null;
}

async function fetchFromRedditApi(): Promise<number | null> {
  const res = await fetch("https://www.reddit.com/r/asianmasculinity/about.json", {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
    next: { revalidate: 86400 }, // Revalidate every 24 hours
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.data?.subscribers || null;
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return Math.floor(num / 1000) + "K";
  }
  return num.toString();
}
