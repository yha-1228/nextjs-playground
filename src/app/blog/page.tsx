import { createMeta } from "@/create-meta";

export const metadata = createMeta({
  title: "Blog title",
  description: "This is blog!",
  // openGraph: {
  //   type: "article",
  // },
});

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
