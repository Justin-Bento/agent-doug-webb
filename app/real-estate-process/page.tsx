import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// This is the landing page for the real-estate process.
// Here is where people will view the different stages of the process and click ones to their needs.
export default function page() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh">
        <section className="container mx-auto my-28">
          <h1 className="text-4xl tracking-tight font-bold dark:text-white">Welcome, Real-Estate process main page.</h1>
          <div className="grid grid-cols-2 gap-8 mt-16">
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-gray-900">
              <div className="px-4 pt-5 sm:px-6 sm:pb-3 space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Deciding To Buy.</h2>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                  iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                  perferendis!
                </p>
              </div>
              <div className="px-4 pb-6 sm:px-6">
                <Link
                  href="/real-estate-process/deciding-to-buy"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium"
                >
                  Link To Segments &rarr;
                </Link>
              </div>
            </div>
            {/* End of card */}
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-gray-900">
              <div className="px-4 pt-5 sm:px-6 sm:pb-3 space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Deciding To Sell.</h2>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                  iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                  perferendis!
                </p>
              </div>
              <div className="px-4 pb-6 sm:px-6">
                <Link
                  href="/real-estate-process/deciding-to-sell"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium"
                >
                  Link To Segments &rarr;
                </Link>
              </div>
            </div>
            {/* End of card */}
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-gray-900">
              <div className="px-4 pt-5 sm:px-6 sm:pb-3 space-y-2">
                <h2 className="text-xl font-bold tracking-tight">More Stuff.</h2>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                  iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                  perferendis!
                </p>
              </div>
              <div className="px-4 pb-6 sm:px-6">
                <Link
                  href="/real-estate-process/more-stuff"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium"
                >
                  Link To Segments &rarr;
                </Link>
              </div>
            </div>
            {/* End of card */}
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-gray-900">
              <div className="px-4 pt-5 sm:px-6 sm:pb-3 space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Additional Information.</h2>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                  iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                  perferendis!
                </p>
              </div>
              <div className="px-4 pb-6 sm:px-6">
                <Link
                  href="/real-estate-process/additional-information"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium"
                >
                  Link To Segments &rarr;
                </Link>
              </div>
            </div>
            {/* End of card */}
          </div>
        </section>
        <section className="container mx-auto">
          <h2 className="text-4xl tracking-tight font-bold dark:text-white">Frequently Asked Questions.</h2>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <Footer />
    </>
  );
}
