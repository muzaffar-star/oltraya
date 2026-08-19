import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Oltraya — No Surprises. By Design.",
  description: "Oltraya is a design-led real estate development company based in Pune. We create enduring spaces through thoughtful design, environmental intelligence and transparent execution.",
  keywords: ["luxury real estate", "Pune", "design-led development", "Oltraya", "NAINA Corridor", "plotted development"],
  openGraph: {
    title: "Oltraya — No Surprises. By Design.",
    description: "Design-led real estate development. Every project chosen with intention, crafted for long-term value.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
