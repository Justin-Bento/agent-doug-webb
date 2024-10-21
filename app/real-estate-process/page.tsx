import Link from "next/link";
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
              Real-Estate Process.
            </h1>
          </div>
        </section>
        <section className="wrapper min-h-dvh my-24">
          <ul className="list-disc ml-6 mt-2">
            <li>
              <Link href="/real-estate-process/deciding-to-buy" className="hover:underline">
                Deciding To Buy
              </Link>
            </li>
            <li>
              <Link href="/real-estate-process/deciding-to-sell" className="hover:underline">
                Deciding To Sell
              </Link>
            </li>
            <li>
              <Link href="/real-estate-process/more-stuff" className="hover:underline">
                More Stuff
              </Link>
            </li>
            <li>
              <Link href="/real-estate-process/additional-information" className="hover:underline">
                Additional Information
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
