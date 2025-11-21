import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./app/styles/gradients.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HoooM Technologies | Software Development, Product Design & Branding in Nigeria",
  description:
    "HoooM Technologies is a global innovation and engineering-as-a-service company offering custom software development, UX/UI design, branding, enterprise solutions, and cloud services.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white text-slate-900"}>{children}</body>
    </html>
  );
}
