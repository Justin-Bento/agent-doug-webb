import Link from "next/link";
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="wrapper min-h-dvh my-24">
        <h1 className="text-xl font-bold">Hello, Real Estate Process Page!</h1>
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
      </main>
      <Footer />
    </>
  );
}
