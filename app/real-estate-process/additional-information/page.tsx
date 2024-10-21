import BackgroundPattern from "@/components/BackgroundPattern";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
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
              Additional Information.
            </h1>
          </div>
        </section>
        <section className="wrapper">
          <h2 className="text-4xl tracking-tight font-bold">Additional Information of The Process</h2>
          <Divider className="rounded-full my-4" />
          <Link href="/real-estate-process/deciding-to-buy/1" className="hover:underline">
            <Card className="px-4 py-5 sm:p-6">
              <h3 className="">Buy Before You Sell</h3>
            </Card>
          </Link>
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
