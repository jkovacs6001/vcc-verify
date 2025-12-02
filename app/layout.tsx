import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VCC Verification Directory",
  description: "Trusted Web3 professionals, verified by VampCatCoin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-vampBg text-vampTextMain`}
      >
        <NavBar />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-8 pb-14">
          {children}
        </main>
        <footer className="w-full border-t border-vampBorder bg-black/60 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-vampTextMuted flex justify-between">
            <span>© {new Date().getFullYear()} VampCatCoin · VCC Verification</span>
            <span className="text-[10px]">
              Early MVP preview · Not financial or hiring advice
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}

