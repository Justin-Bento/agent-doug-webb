"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);
  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-[#16151b] shadow-sm shadow-dark dark:bg-dark py-4">
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
          <nav className={`lg:flex lg:items-center lg:justify-end ${isOpen ? "block" : "hidden"}`}>
            <ul className="lg:flex space-y-6 my-5 lg:my-0 lg:space-x-1 lg:space-y-0">
              <li>
                <Link href="/">
                  <Button
                    variant="link"
                    className="text-black"
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <Button
                    variant="link"
                    className="text-black"
                  >
                    About
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/real-estate-process">
                  <Button
                    variant="link"
                    className="text-black"
                  >
                    Real-Estate Process
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/listings">
                  <Button
                    variant="link"
                    className="text-black"
                  >
                    Listings
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/contact ">
                  <Button
                    variant="link"
                    className="text-black"
                  >
                    Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
}
