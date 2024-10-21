import BackgroundPattern from "@/components/BackgroundPattern";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { createSlug } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="space-y-24 mb-24 min-h-dvh">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
              Deciding To Buy.
            </h1>
          </div>
        </section>
        <section className="wrapper">
          <h2 className="text-4xl tracking-tight font-bold">Sages Of The Buying Process</h2>
          <Divider className="rounded-full my-4" />
          {buying_process.map((process, index) => {
            return (
              <>
                <Link
                  key={index}
                  href={`/real-estate-process/deciding-to-buy/${createSlug(process.title)}`}
                  className="hover:underline"
                >
                  <Card className="px-4 py-5 sm:p-6">
                    <h3 className="">{process.title}</h3>
                  </Card>
                </Link>
              </>
            );
          })}
        </section>
        <section className="wrapper">
          <h2 className="text-4xl tracking-tight font-bold">Frequently Asked Questions</h2>
          <Divider className="rounded-full my-4" />
        </section>
      </main>
      <Footer />
    </>
  );
}

const buying_process = [
  {
    id: 1,
    title: "Sell Before You Buy",
  },
  {
    id: 2,
    title: "How Much can you afford",
  },
  {
    id: 3,
    title: "Selecting an B. Agent",
  },
  {
    id: 4,
    title: "Visiting Properties",
  },
  {
    id: 5,
    title: "Making An Offer",
  },
  {
    id: 6,
    title: "Making The Offer Firm",
  },
  {
    id: 7,
    title: "Layers & Closing Buying",
  },
  {
    id: 8,
    title: "Packing and Moving",
  },
];
