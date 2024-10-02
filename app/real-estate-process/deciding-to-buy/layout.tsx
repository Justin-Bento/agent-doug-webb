import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SideNavigation from "@/components/SideNavigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Children } from "react";

// This is a nested layout for real-estate transaction articles.
// All articles inside the /real-estate-process route will follow this format.
// The children prop is where the dynamic content will be rendered.

export default function RealEstateProcessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html className="">
        <body className="">
          <Navigation />
          <main className="wrapper min-h-[100dvh] grid grid-cols-1 md:grid-cols-12 my-20 ">
            <article className="w-full h-full md:col-span-9 px-4 py-5 sm:p-6 overflow-hidden">
              {children}
              <Link
                href="/real-estate-process"
                className="flex items-center justify-between mt-8 border-t-2 border-black/20 dark:border-white/20 pt-8"
              >
                <Button
                  size="sm"
                  variant="ghost"
                  className="uppercase"
                >
                  Go Home
                </Button>
              </Link>
            </article>
            <aside className="w-full h-full  md:col-span-3 px-4 py-5 sm:p-6 overflow-hidden static top-0">
              <SideNavigation stage="buy" />
            </aside>
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
