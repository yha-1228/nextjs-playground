import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home title",
  description: "Home description",
  openGraph: {
    type: "website",
    title: "Home openGraph.title",
    description: "Home openGraph.description",
  },
};

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
