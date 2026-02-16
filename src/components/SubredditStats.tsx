"use client";

import { useEffect, useState } from "react";

const FALLBACK_COUNT = 182000; // Update periodically

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
}

export default function SubredditStats() {
  const [count, setCount] = useState<number>(FALLBACK_COUNT);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchSubredditData() {
      try {
        const res = await fetch(
          "https://www.reddit.com/r/asianmasculinity/about.json",
          {
            headers: {
              "Accept": "application/json",
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          if (data?.data?.subscribers) {
            setCount(data.data.subscribers);
          }
        }
      } catch {
        // Use fallback count
      } finally {
        setLoaded(true);
      }
    }
    fetchSubredditData();
  }, []);

  return (
    <span className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-70"}`}>
      {formatNumber(count)}+
    </span>
  );
}
