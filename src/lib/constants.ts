// Member count - baked in at build time from Discord stats channel
// Fallback used if Discord API fails during build
export const MEMBER_COUNT = parseInt(process.env.NEXT_PUBLIC_REDDIT_SUBSCRIBERS || "") || 192000;

export function formatMemberCount(num: number = MEMBER_COUNT): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return Math.floor(num / 1000) + "K";
  }
  return num.toString();
}

// Pre-formatted for convenience
export const MEMBER_COUNT_DISPLAY = formatMemberCount(MEMBER_COUNT) + "+";
