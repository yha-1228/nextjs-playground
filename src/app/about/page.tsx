import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About title",
  description: "About description",
  openGraph: {
    type: "website",
    title: "About openGraph.title",
    description: "About openGraph.description",
  },
};

export default function Page() {
  return <div>About</div>;
}
