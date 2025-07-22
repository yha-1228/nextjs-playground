import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog title",
  description: "Blog description",
  openGraph: {
    type: "website",
    title: "Blog openGraph.title",
    description: "Blog openGraph.description",
  },
};
export default function Page() {
  return <div>Blog</div>;
}
