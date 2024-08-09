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
          <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6">
            <section className="grid grid-cols-12 my-16">
              <article className="col-span-full xl:col-span-7 xl:col-start-2 xl:max-w-[100ch] space-y-16">
                {children}
                <Link href="/real-estate-process" className="flex items-center justify-between mt-8 border-t-2 pt-8">
                  <Button size="sm" variant="link" className="underline uppercase">
                    Go Home
                  </Button>
                </Link>
              </article>
              <aside className="col-span-3 col-start-10 justify-self-end hidden xl:block">
                <div className="sticky top-12 pb-20">
                  <SideNavigation stage="buy" />
                </div>
              </aside>
            </section>
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
