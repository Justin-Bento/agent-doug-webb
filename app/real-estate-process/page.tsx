import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";

// This is the landing page for the real-estate process.
// Here is where people will view the different stages of the process and click ones to their needs.
export default function page() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh">
        <section className="container mx-auto my-28">
          <h1 className="text-4xl tracking-tight font-bold dark:text-white">Welcome, Real-Estate process main page.</h1>
          <ul className="list-disc list-inside my-6 space-y-6">
            <li className="">
              <Link href="/real-estate-process/deciding-to-buy" className="hover:underline">
                Deciding To Buy
              </Link>
            </li>
            <li className="">
              <Link href="/real-estate-process/deciding-to-sell" className="hover:underline">
                Deciding To Sell
              </Link>
            </li>
            <li className="">
              <Link href="/real-estate-process/more-stuff" className="hover:underline">
                More Stuff
              </Link>
            </li>
            <li className="">
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
