import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog title",
  description: "Blog description",
  openGraph: {
    type: "website",
    title: "Blog openGraph.title",
    description: "Blog openGraph.description",
    images: "/ogp-blog.png",
    siteName: "Blog openGraph.siteName",
    url: "https://example.com/",
  },
};
export default function Page() {
  return <div>Blog</div>;
}
