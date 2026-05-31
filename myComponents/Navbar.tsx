"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Example cart count (later connect to Zustand / Redux / Context)
  const cartCount = 3;

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-500/20 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-yellow-400 hover:text-yellow-300 transition"
        >
          GoldenStep
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition",
                  active
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-white hover:text-yellow-400 transition"
          >
            <ShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                {cartCount}
              </span>
            )}
          </Link>

          {/* CTA */}
          <Button className="hidden md:inline-flex bg-yellow-400 text-black hover:bg-yellow-300">
            Shop Now
          </Button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-100 border-t border-yellow-500/20" : "max-h-0",
        )}
      >
        <div className="flex flex-col space-y-4 bg-black px-6 py-5">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-base font-medium transition",
                  active
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400",
                )}
              >
                {link.name}
              </Link>
            );
          })}

          <Button className="mt-2 w-full bg-yellow-400 text-black hover:bg-yellow-300">
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  );
}
