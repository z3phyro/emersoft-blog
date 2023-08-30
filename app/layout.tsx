import TopMenu from "@/components/top-menu/top-menu.component";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emeresoft Blog",
  description: "A Blog made to check applicants Frontend skills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu />
        <main>{children}</main>
        <div id="portal" />
      </body>
    </html>
  );
}
