import BackgroundPattern from "@/components/BackgroundPattern";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
              More Stuff.
            </h1>
          </div>
        </section>
        <section className="wrapper">
          <ul className="list-disc ml-6 mt-2">
            <li>
              <Link href="/real-estate-process/more-stuff/1" className="hover:underline">
                More Stuff - Step #1
              </Link>
            </li>
            <li>
              <Link href="/real-estate-process/more-stuff/2" className="hover:underline">
                More Stuff - Step #2
              </Link>
            </li>
            <li>
              <Link href="/real-estate-process/more-stuff/3" className="hover:underline">
                More Stuff - Step #3
              </Link>
            </li>
            <li>
              <Link href="/real-estate-process/more-stuff/4" className="hover:underline">
                More Stuff - Step #4
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
