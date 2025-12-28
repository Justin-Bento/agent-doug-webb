"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = {
  title: string;
  href: string;
};

const navLinks: NavLink[] = [
  { title: "home", href: "/" },
  { title: "about", href: "/about" },
  { title: "real-estate process", href: "/real-estate-process" },
  { title: "listings", href: "/listings" },
  { title: "contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-90 bg-gray-50 border-b border-gray-100 shadow">
      <section className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-3 p-6">
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl space-x-1">
            <span>Agent</span>
            <span>Webb</span>
          </Link>
          <button
            onClick={toggle}
            className="lg:hidden text-3xl"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "≡"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`lg:flex lg:items-center lg:justify-end ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="navigation-links text-gray-950"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
}
