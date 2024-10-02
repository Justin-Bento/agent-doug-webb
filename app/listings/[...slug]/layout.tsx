import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PropertyListingLayout() {
  return (
    <html>
      <body>
        <Navigation />
        <main className="grid md:grid-cols-12 gap-4 my-12">
          <section className="flex items-center md:col-span-12 min-h-[20dvh]">
            <div className="wrapper flex flex-col-reverse">
              <h1 className="max-w-3xl text-balance text-4xl font-medium tracking-normal text-black dark:text-white">
                Property Name
              </h1>
              <p className="text-xs uppercase tracking-wider">Listings</p>
            </div>
          </section>
          <section className="wrapper md:col-span-12 md:flex items-center justify-between gap-12 space-y-6">
            <div className="w-[60rem] aspect-[16/12] rounded-xl bg-gray-400">&nbsp;</div>
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
            <div className="w-[60rem] aspect-[16/12] rounded-xl bg-gray-400">&nbsp;</div>
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
          <section className="md:col-span-12">
            <div className="wrapper">
              <h3 className="max-w-3xl text-balance text-4xl font-medium tracking-normal text-black dark:text-white">
                Inside The Property
              </h3>
              <span className="block w-20 h-[0.1rem] bg-black rounded mt-2 mb-6"></span>
              <p className="text-base tracking-wide leading-5 max-w-[100ch]">
                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
                under the king&#39;s pillow, in his soup, even in the royal toilet. The king was furious, but he
                couldn&#39;t seem to stop Jokester. And then, one day, the people of the kingdom discovered that the
                jokes left by Jokester were so funny that they couldn&#39;t help but laugh. And once they started
                laughing, they couldn&#39;t stop.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
