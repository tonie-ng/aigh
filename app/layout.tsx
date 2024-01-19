import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Script from "next/script";
import Footer from "./Footer";
import Nav from "./Nav";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  fallback: ["san-serif"],
});

export const metadata: Metadata = {
  title: "AIESEC in Ghana",
  description: "Website for AIESEC in Ghana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
