import { getSubredditCount, formatNumber } from "@/lib/reddit";

export default async function SubredditStats() {
  const count = await getSubredditCount();
  return <span>{formatNumber(count)}+</span>;
}
