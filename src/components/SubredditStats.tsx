"use client";

import { useEffect, useState } from "react";

const FALLBACK = 182000;

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
  const [count, setCount] = useState(FALLBACK);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data.count) setCount(data.count);
      })
      .catch(() => {
        // Keep fallback
      });
  }, []);

  return <span>{formatNumber(count)}+</span>;
}
