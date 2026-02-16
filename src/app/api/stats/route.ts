import { NextResponse } from "next/server";

let cachedCount: number | null = null;
let lastFetch = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const FALLBACK = 182000;

export async function GET() {
  const now = Date.now();
  
  // Return cached if still valid
  if (cachedCount && now - lastFetch < CACHE_DURATION) {
    return NextResponse.json({ count: cachedCount, cached: true });
  }

  // Try to fetch fresh data
  const count = await fetchRedditCount();
  
  if (count) {
    cachedCount = count;
    lastFetch = now;
  }

  return NextResponse.json({ 
    count: cachedCount || FALLBACK, 
    cached: false 
  });
}

async function fetchRedditCount(): Promise<number | null> {
  const urls = [
    "https://www.reddit.com/r/asianmasculinity/about.json",
    "https://old.reddit.com/r/asianmasculinity/about.json",
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "application/json",
        },
      });
      
      if (res.ok) {
        const data = await res.json();
        const subscribers = data?.data?.subscribers;
        if (subscribers && subscribers > 100000) {
          return subscribers;
        }
      }
    } catch {
      continue;
    }
  }

  return null;
}
