import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["media:thumbnail"],
  },
});

export const dynamic = "force-dynamic";

export default async function Page() {
  const feed = await parser.parseURL(
    "https://note.com/kind_seal2488/m/m0205f07dde2f/rss"
  );

  return (
    <div className="m-20">
      <pre className="overflow-auto mt-6 p-3 bg-[rgba(0,0,0,0.8)] text-[white] text-xs">
        {JSON.stringify(feed.items, null, 2)}
      </pre>
    </div>
  );
}
