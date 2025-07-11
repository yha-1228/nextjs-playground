import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["media:thumbnail"],
  },
});

function getNoteFeed() {
  if (!process.env.NEXT_PUBLIC_NOTE_RSS_URL) {
    throw new Error(`process.env.NEXT_PUBLIC_NOTE_RSS_URL is required`);
  }

  return parser.parseURL(process.env.NEXT_PUBLIC_NOTE_RSS_URL);
}

export const dynamic = "force-dynamic";

export default async function Page() {
  const feed = await getNoteFeed();

  return (
    <div className="m-20">
      <pre className="overflow-auto mt-6 p-3 bg-[rgba(0,0,0,0.8)] text-[white] text-xs">
        {JSON.stringify(feed.items, null, 2)}
      </pre>
    </div>
  );
}
