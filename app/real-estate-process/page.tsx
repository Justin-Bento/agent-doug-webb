import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import { AiOutlineArrowRight } from "react-icons/ai";
import BackgroundPattern from "@/components/BackgroundPattern";

export const metadata: Metadata = {
  title: "Real Estate Process - AgentWebb",
  description:
    "The only website that provides all the information you need about Real Estate transactions. Stay one step ahead of the process, educate yourself on upcoming procedures, and be prepared for any red flags along the way",
};

// This is the landing page for the real-estate process.
// Here is where people will view the different stages of the process and click ones to their needs.
export default function page() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh mb-28 space-y-28">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center wrapper">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-black dark:text-white sm:text-6xl">
              Real-Estate Process.
            </h1>
          </div>
        </section>
        <section className="wrapper">
          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            <Card className="bg-transparent dark:bg-[#16151b] dark:border-white/40">
              <CardHeader className="text-lg font-bold">Deciding To Buy.</CardHeader>
              <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                perferendis!
              </CardContent>
              <CardFooter>
                <Link
                  href="/real-estate-process/deciding-to-buy"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium flex items-center gap-1.5"
                >
                  Link To Segments <AiOutlineArrowRight className="size-3" />
                </Link>
              </CardFooter>
            </Card>
            {/* End of card */}
            <Card className="bg-transparent dark:bg-[#16151b] dark:border-white/40">
              <CardHeader className="text-lg font-bold">Deciding To Sell.</CardHeader>
              <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                perferendis!
              </CardContent>
              <CardFooter>
                <Link
                  href="/real-estate-process/deciding-to-sell"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium flex items-center gap-1.5"
                >
                  Link To Segments <AiOutlineArrowRight className="size-3" />
                </Link>
              </CardFooter>
            </Card>
            {/* End of card */}
            <Card className="bg-transparent dark:bg-[#16151b] dark:border-white/40">
              <CardHeader className="text-lg font-bold">More Stuff.</CardHeader>
              <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                perferendis!
              </CardContent>
              <CardFooter>
                <Link
                  href="/real-estate-process/more-stuff"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium flex items-center gap-1.5"
                >
                  Link To Segments <AiOutlineArrowRight className="size-3" />
                </Link>
              </CardFooter>
            </Card>
            {/* End of card */}
            <Card className="bg-transparent dark:bg-[#16151b] dark:border-white/40">
              <CardHeader className="text-lg font-bold">Additional Information.</CardHeader>
              <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                perferendis!
              </CardContent>
              <CardFooter>
                <Link
                  href="/real-estate-process/additional-information"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium flex items-center gap-1.5"
                >
                  Link To Segments <AiOutlineArrowRight className="size-3" />
                </Link>
              </CardFooter>
            </Card>
            {/* End of card */}
          </div>
        </section>
        <section className="wrapper space-y-5">
          <h2 className="text-4xl tracking-tight font-bold dark:text-white">Frequently Asked Questions.</h2>
          {fakeDetails.map((detail, index) => {
            return (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-1 text-lg/3 font-medium text-black dark:text-white">
                    {detail}
                  </AccordionTrigger>
                  <AccordionContent>
                    Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the
                    place: under the king&#39;s pillow, in his soup, even in the royal toilet. The king was furious, but
                    he couldn&#39;t seem to stop Jokester. And then, one day, the people of the kingdom discovered that
                    the jokes left by Jokester were so funny that they couldn&#39;t help but laugh. And once they
                    started laughing, they couldn&#39;t stop.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

const fakeDetails = [
  "What Is The Purpose Of This Guide?",
  "Why Am I Sharing This Information?",
  "Where Can We Contact Agent Webb?",
  "When Will I Know I'm ready For A Property?",
  "How Does This Help Me In My Search?",
  //
];
