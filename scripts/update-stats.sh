#!/bin/bash
# Fetches r/asianmasculinity subscriber count and updates stats.json

set -e

cd "$(dirname "$0")/.."

# Fetch from subredditstats.com (scrape the page)
COUNT=$(curl -s "https://subredditstats.com/r/asianmasculinity" | grep -oP 'subscribers.*?([0-9,]+)' | head -1 | grep -oP '[0-9,]+' | tr -d ',')

# Fallback to Reddit API if subredditstats fails
if [ -z "$COUNT" ] || [ "$COUNT" -lt 1000 ]; then
  COUNT=$(curl -s -H "User-Agent: AsianMascStats/1.0" "https://www.reddit.com/r/asianmasculinity/about.json" 2>/dev/null | grep -oP '"subscribers":\s*\K[0-9]+' || echo "")
fi

# Only update if we got a valid count
if [ -n "$COUNT" ] && [ "$COUNT" -gt 100000 ]; then
  TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  cat > src/data/stats.json << EOF
{
  "subredditCount": $COUNT,
  "lastUpdated": "$TIMESTAMP"
}
EOF
  echo "Updated stats.json: $COUNT subscribers"
else
  echo "Failed to fetch valid count, keeping existing value"
  exit 0
fi
