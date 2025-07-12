import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["media:thumbnail"],
  },
});

export function getNoteFeed() {
  if (!process.env.NEXT_PUBLIC_NOTE_RSS_URL) {
    throw new Error(`process.env.NEXT_PUBLIC_NOTE_RSS_URL is required`);
  }

  return parser.parseURL(process.env.NEXT_PUBLIC_NOTE_RSS_URL);
}

export type NoteFeed = Awaited<ReturnType<typeof getNoteFeed>>;
