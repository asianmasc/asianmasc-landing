import stats from "@/data/stats.json";

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
  return <span>{formatNumber(stats.subredditCount)}+</span>;
}
