"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/data";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <header className="sticky top-0 z-90">
      <section className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-3 py-6">
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center justify-between">
          <Logo className="text-gray-950 dark:text-gray-50" />
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
          <ul className="flex flex-col lg:flex-row gap-x-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:underline rounded capitalize px-3 py-2 font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 focus:z-10 focus:ring-2  focus:ring-offset-1 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50"
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
