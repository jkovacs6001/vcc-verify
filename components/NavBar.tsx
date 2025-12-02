"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  { href: "/apply", label: "Apply" },
];

export const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-vampBorder bg-black/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-paw-pointer">
          <div className="h-8 w-8 rounded-2xl bg-vampAccent flex items-center justify-center shadow-vampGlow">
            <span className="text-xs font-black text-white">VCC</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">
              VCC Verification
            </span>
            <span className="text-[11px] text-vampTextMuted">
              Trusted Web3 professionals
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-3 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "px-3 py-1.5 rounded-full cursor-paw-pointer transition-colors " +
                  (active
                    ? "bg-gradient-to-r from-vampAccent to-vampAccentSoft text-white shadow-vampGlow"
                    : "text-vampTextMuted hover:text-white hover:bg-white/5")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

