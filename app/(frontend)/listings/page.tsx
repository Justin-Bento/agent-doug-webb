import React from "react";
import { TbSearch } from "react-icons/tb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        <div className="col-span-1 lg:col-span-3 w-full flex items-center justify-between">
          <Card className="border max-w-sm w-full flex items-center justify-between gap-2 py-2 px-4 bg-transparent border-black/40 dark:border-white/50">
            <p className="text-sm text-black/50 dark:text-white/50">Search</p>
            <TbSearch className="text-black/50 dark:text-white/50" />
          </Card>
          <Card className="border-0 bg-transparent dark:bg-transparent shadow-none flex gap-4Fixe justify-start md:justify-end">
            <Button variant="ghost" size="sm" className="dark:bg-[#16151b]">
              Sort By
            </Button>
            <Button variant="ghost" size="sm" className="dark:bg-[#16151b]">
              Latest Price
            </Button>
          </Card>
        </div>
        <ul className="contents">
          <li className="col-span-1 lg:col-span-1 w-full h-40 border border-gray-700 rounded"></li>
          <li className="col-span-1 lg:col-span-1 w-full h-40 border border-gray-700 rounded"></li>
          <li className="col-span-1 lg:col-span-1 w-full h-40 border border-gray-700 rounded"></li>
        </ul>
      </section>
    </main>
  );
}
