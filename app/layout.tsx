import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Monara Auto Studio | Imports, Sales, Wraps, PPF & Tinting",
  description:
    "Your Car. Your Style. Your Legacy. Car imports, sales, styling, customization, wraps, PPF, tinting, accessories and spare parts in Nairobi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<header className="h-16 border-b border-border bg-white" />}>
          <NavBar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}