import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fisayo",
  description: "Wedding Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased">
        {/* 🩷 Header */}
        <Header />

        {/* 🌸 Main Content (expands flexibly) */}
        <main className="flex-1">{children}</main>

        {/* 💍 Footer */}
        <Footer />
      </body>
    </html>
  );
}
