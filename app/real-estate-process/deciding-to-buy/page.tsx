import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="wrapper min-h-dvh my-24">
        <h1 className="text-xl font-bold"> Hello, Deciding To Buy Page!</h1>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <Link href="/real-estate-process/deciding-to-buy/1" className="hover:underline">
              Deciding To Buy Step #1
            </Link>
          </li>
          <li>
            <Link href="/real-estate-process/deciding-to-buy/2" className="hover:underline">
              Deciding To Buy Step #2
            </Link>
          </li>
          <li>
            <Link href="/real-estate-process/deciding-to-buy/3" className="hover:underline">
              Deciding To Buy Step #3
            </Link>
          </li>
          <li>
            <Link href="/real-estate-process/deciding-to-buy/4" className="hover:underline">
              Deciding To Buy Step #4
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
