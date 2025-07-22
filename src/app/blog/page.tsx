import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog title",
  openGraph: {
    type: "article",
  },
};

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
