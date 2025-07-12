"use client";

import { useEffect, useState } from "react";
import { NoteFeed } from "../api-client";

export function Feed() {
  const [feed, setFeed] = useState<NoteFeed | undefined>(undefined);

  useEffect(() => {
    fetch("/api/feeds")
      .then((res) => res.json())
      .then((data) => setFeed(data));
  }, []);

  if (!feed) return "Loading...";

  return (
    <ul className="space-y-2">
      {feed.items.map((item) => (
        <li key={item.guid}>
          <a
            target="_blank"
            href={item.link}
            className="inline-block underline decoration-1 hover:decoration-2 underline-offset-4"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
