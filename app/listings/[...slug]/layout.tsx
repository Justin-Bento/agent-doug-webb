import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function PropertyListingLayout() {
  return (
    <html>
      <body>
        <Navigation />
        <main className="md:grid md:grid-cols-12 space-y-14">
          <section className="md:col-span-12">
            <div className="wrapper min-h-[20dvh] flex flex-col-reverse justify-center">
              <h1 className="max-w-3xl text-balance text-4xl font-medium tracking-normal text-black dark:text-white">
                Property Name
              </h1>
              <p className="text-xs uppercase tracking-wider">Listings</p>
            </div>
          </section>
          <section className="wrapper md:col-span-12 md:flex items-center justify-between gap-12 space-y-6">
            <div className="bg-gray-400 aspect-video md:aspect-[16/12] rounded-xl md:w-[60rem]">&nbsp;</div>
            <div className="w-full max-w-prose">
              <p className="text-base tracking-wide leading-5 max-w-[100rem]">
                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
                under the king&#39;s pillow, in his soup, even in the royal toilet. The king was furious, but he
                couldn&#39;t seem to stop Jokester. And then, one day, the people of the kingdom discovered that the
                jokes left by Jokester were so funny that they couldn&#39;t help but laugh. And once they started
                laughing, they couldn&#39;t stop.
              </p>
            </div>
          </section>
          <section className="wrapper md:col-span-12 md:flex md:flex-row-reverse items-center justify-between gap-12 space-y-6">
            <div className="bg-gray-400 aspect-video md:aspect-[16/12] rounded-xl md:w-[60rem]">&nbsp;</div>
            <div className="w-full max-w-prose">
              <Accordion
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-1 text-2xl/8 font-medium text-black dark:text-white">
                    Features
                  </AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
              </Accordion>
              {/*  */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-1 text-2xl/8 font-medium text-black dark:text-white">
                    Interior
                  </AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
              </Accordion>
              {/*  */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-1 text-2xl/8 font-medium text-black dark:text-white">
                    Location
                  </AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
              </Accordion>
              {/*  */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-1 text-2xl/8 font-medium text-black dark:text-white">
                    Area & Lot
                  </AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
              </Accordion>
              {/*  */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-1 text-2xl/8 font-medium text-black dark:text-white">
                    Financial
                  </AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
              </Accordion>
              {/*  */}
            </div>
          </section>
          <section className="wrapper md:col-span-12">
            <h3 className="max-w-3xl text-balance text-4xl font-medium tracking-normal text-black dark:text-white">
              Inside The Property
            </h3>
            <p className="text-base tracking-wide leading-5 max-w-[100ch] mt-4">
              Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
              under the king&#39;s pillow, in his soup, even in the royal toilet. The king was furious, but he
              couldn&#39;t seem to stop Jokester. And then, one day, the people of the kingdom discovered that the jokes
              left by Jokester were so funny that they couldn&#39;t help but laugh. And once they started laughing, they
              couldn&#39;t stop.
            </p>
            <div className="border-y-2 mt-6 border-primary border-dotted">
              <div className="overflow-x-auto scroll-p-16 py-4 scroll-snap-x snap-mandatory">
                <div className="inline-grid grid-flow-col gap-5 snap-x auto-cols-[minmax(20rem,1fr)]">
                  <div className="w-full aspect-square bg-gray-400 rounded-xl snap-center flex items-center justify-center">
                    1
                  </div>
                  <div className="w-full aspect-square bg-gray-400 rounded-xl snap-center flex items-center justify-center">
                    2
                  </div>
                  <div className="w-full aspect-square bg-gray-400 rounded-xl snap-center flex items-center justify-center">
                    3
                  </div>
                  <div className="w-full aspect-square bg-gray-400 rounded-xl snap-center flex items-center justify-center">
                    4
                  </div>
                  <div className="w-full aspect-square bg-gray-400 rounded-xl snap-center flex items-center justify-center">
                    5
                  </div>
                  <div className="w-full aspect-square bg-gray-400 rounded-xl snap-center flex items-center justify-center">
                    6
                  </div>
                  <div className="w-full aspect-square bg-gray-400 rounded-xl snap-center flex items-center justify-center">
                    7
                  </div>
                  <div className="w-full aspect-square bg-gray-400 rounded-xl snap-center flex items-center justify-center">
                    8
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="wrapper flex justify-center col-span-12">
            <Button
              variant="outline"
              className="text-sm rounded-full px-5"
            >
              View More Listings
            </Button>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
