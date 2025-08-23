import Header from "@/components/header";
import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "PostWave",
  description: "Browse and share amazing posts.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="font-merriweather" lang="en">
      <body className="m-0 bg-[#363234] text-[#eee7ea]">
        <Header />
        <main className="w-4/5 max-w-[60rem] my-12 mx-auto p-8 rounded-[6px] bg-[#1f1b1d] min-h-[85vh] shadow-[0_0_6px_rgba(0,0,0,0.5)]">{children}</main>
      </body>
    </html>
  );
}
