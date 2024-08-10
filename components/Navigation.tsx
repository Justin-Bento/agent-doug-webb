"use client"
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineTags, AiOutlineMail, AiOutlineClose } from "react-icons/ai";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  return (
    // <!-- ========== HEADER ========== -->
    <header className="bg-white shadow shadow-black/30 flex flex-wrap dark:bg-black dark:border-white dark:shadow-white/30 md:justify-start md:flex-nowrap sticky top-0 z-50 w-full p-4">
      <nav className="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo w/ Collapse Button */}
        <div className="flex items-center justify-between">
          <Link
            className="flex-none font-semibold text-xl text-black hover:underline focus:outline-none focus:opacity-80 dark:text-white"
            href="/"
            aria-label="Brand"
          >
            Brand
          </Link>
          {/* Collapse Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-black text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-white dark:hover:bg-white/70 dark:focus:bg-white/70"
              id="hs-header-classic-collapse"
              aria-expanded="false"
              aria-controls="hs-header-classic"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-header-classic"
              onClick={toggle}
            >
             {(isOpen == false) ?  <AiOutlineMenu className="hs-collapse-open:hidden size-4" /> : <AiOutlineClose className="hs-collapse-open:hidden size-4" />}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
          {/* End Collapse Button */}
        </div>
        {/* End Logo w/ Collapse Button */}
        {/* Collapse */}
        {isOpen && (
          <>
            <div
              className="overflow-hidden transition-all duration-300 basis-full grow md:block"
              aria-labelledby="hs-header-classic-collapse"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                  <Link
                    className="p-2 flex items-center text-sm text-black hover:underline focus:text-black/60 dark:text-white dark:hover:text-white/80"
                    href="/"
                    aria-current="page"
                  >
                    <AiOutlineHome className="shrink-0 size-4 me-3 md:me-2 block md:hidden" />
                    Home
                  </Link>
                  <Link
                    className="p-2 flex items-center text-sm text-black hover:underline focus:outline-none focus:text-black/60 dark:text-white dark:hover:text-white/80"
                    href="/about"
                  >
                    <AiOutlineUser className="shrink-0 size-4 me-3 md:me-2 block md:hidden" />
                    About
                  </Link>
                  <Link
                    className="p-2 flex items-center text-sm text-black hover:underline focus:outline-none focus:text-black/60 dark:text-white dark:hover:text-white/80"
                    href="/real-estate-process"
                  >
                    <AiOutlineTags className="shrink-0 size-4 me-3 md:me-2 block md:hidden" />
                    Real-Estate Transaction
                  </Link>
                  <Link
                    className="p-2 flex items-center text-sm text-black hover:underline focus:outline-none focus:text-black/60 dark:text-white dark:hover:text-white/80"
                    href="/contact"
                  >
                    <AiOutlineMail className="shrink-0 size-4 me-3 md:me-2 block md:hidden" />
                    Contact
                  </Link>
                  {/* End Button Group */}
                </div>
              </div>
            </div>
          </>
        )}
        {/* End Collapse */}
      </nav>
    </header>
  );
}
