import BackgroundPattern from "@/components/BackgroundPattern";
import Divider from "@/components/Divider";
import React from "react";

export default function page() {
  return (
    <>
      <main className="min-h-dvh mb-24">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-linear-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white sm:text-6xl">
              Property Listings.
            </h1>
          </div>
        </section>
        <section className="wrapper mt-16">
          <div className="flex flex-col-reverse">
            <h2 className="text-4xl/loose font-bold tracking-wide first:mt-0">
              Hello, Property Listings Page.
            </h2>
            <p>Lorem, ipsum dolor!</p>
          </div>
          <p className="text-xl max-w-5xl text-balance tracking-wide">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <Divider className="mt-6 mb-10" />
        </section>
      </main>
    </>
  );
}
