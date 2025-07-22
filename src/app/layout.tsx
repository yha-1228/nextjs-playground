import "./globals.css";
import { createMeta } from "@/create-meta";

export const metadata = createMeta({
  title: "Home title",
  description: "Home description",
  openGraph: {
    type: "website",
    title: "Home openGraph.title",
    description: "Home openGraph.description",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
