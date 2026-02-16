"use client";

const FALLBACK = 192000;

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return Math.floor(num / 1000) + "K";
  }
  return num.toString();
}

export default function SubredditStats() {
  // Use build-time env var, fallback to 182K
  const count = parseInt(process.env.NEXT_PUBLIC_REDDIT_SUBSCRIBERS || "") || FALLBACK;
  return <span>{formatNumber(count)}+</span>;
}
