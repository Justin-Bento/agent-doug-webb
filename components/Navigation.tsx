"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const onClick = () => setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  return (
    <header className="bg-white dark:bg-black sticky top-0 z-10  py-5 shadow dark:shadow-white/40">
      <div className="px-6 grid grid-cols-1 justify-evenly lg:container lg:mx-auto lg:items-center md:grid-cols-2">
        <div className="flex items-center justify-between gap-1">
          <Link
            className="flex-none font-semibold text-xl text-black hover:underline focus:outline-none focus:opacity-80 dark:text-white"
            href="/"
            aria-label="Brand"
          >
            Brand
          </Link>
          {mobileMenuOpen ? (
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden dark:text-white"
              onClick={onClick}
              aria-label="nav-button-open"
            >
              <RiMenuLine />
            </Button>
          ) : (
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden dark:text-white"
              onClick={onClick}
              aria-label="nav-button-close"
            >
              <RiCloseLine />
            </Button>
          )}
        </div>
        <div
          className={`${mobileMenuOpen ? "hidden lg:flex lg:items-center" : ""
            }`}
        >
          <nav className="flex flex-col justify-start w-full lg:justify-end lg:flex-row">
            <Link href="/">
              <Button
                variant="link"
                aria-label="navigation-link-home"
                className="w-full"
              >
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="link"
                aria-label="navigation-link-about"
                className="w-full"
              >
                About
              </Button>
            </Link>
            <Link href="/real-estate-process">
              <Button
                variant="link"
                aria-label="navigation-link-real-estate-process"
                className="w-full"
              >
                Real-Estate Transaction 
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="link"
                aria-label="navigation-link-contact"
                className="w-full"
              >
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}