"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type NavLink = {
  title: string;
  href: string;
};

const NavLinks: NavLink[] = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "real-estate process",
    href: "/real-estate-process",
  },
  {
    title: "listings",
    href: "/listings",
  },
  {
    title: "contact",
    href: "/contact",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);
  return (
    <>
      <header className="sticky top-0 z-50 shadow-sm shadow-dark dark:bg-dark py-4">
        <section className="grid grid-cols-1 lg:grid-cols-2 wrapper">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex-none font-black text-3xl tracking-[-0.5rem] text-black dark:text-white focus:outline-hidden focus:opacity-80 hover:text-primary dark:hover:text-accent"
            >
              AW
            </Link>
            {isOpen ? (
              <Button
                variant="outline"
                className="block lg:hidden ml-auto dark:bg-transparent border-black dark:border-white"
                onClick={toggle}
                aria-label="Toggle navigation"
              >
                <AiOutlineClose />
              </Button>
            ) : (
              <Button
                variant="outline"
                className="block lg:hidden ml-auto dark:bg-transparent border-black dark:border-white"
                onClick={toggle}
                aria-label="Toggle navigation"
              >
                <AiOutlineMenu />
              </Button>
            )}
          </div>
          <nav
            className={`lg:flex lg:items-center lg:justify-end ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex items-start gap-4 flex-col lg:items-center lg:flex-row">
              {NavLinks.map((link) => {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="navigation-links text-gray-950"
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
}
