import React from "react";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function page() {
  return (
    <main className="min-h-dvh">
      <section className="relative overflow-hidden">
        <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
        <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
          <h1 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white sm:text-6xl">
            Available Properties.
          </h1>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 wrapper  gap-6 lg:mt-24">
        <div className="col-span-1 lg:col-span-3 w-full h-40 border border-gray-700 rounded"></div>
        <ul className="contents">
          <li className="col-span-1 lg:col-span-1 w-full h-40 border border-gray-700 rounded"></li>
          <li className="col-span-1 lg:col-span-1 w-full h-40 border border-gray-700 rounded"></li>
          <li className="col-span-1 lg:col-span-1 w-full h-40 border border-gray-700 rounded"></li>
        </ul>
      </section>
    </main>
  );
}
