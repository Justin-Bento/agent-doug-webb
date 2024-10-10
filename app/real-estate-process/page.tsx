import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import Divider from "@/components/Divider";
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
        <section className="wrapper grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12">
            <h2 className="text-4xl font-bold dark:text-white text-gray-950">Deciding To Buy</h2>
            <Divider className="mt-6" />
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              {deciding_to_buy.map((step, index) => (
                <div
                  key={index}
                  id={`step-${index}`}
                >
                  <Link href={`/real-estate-process/deciding-to-buy/${index}`}>
                    <Card className="bg-transparent border border-black/20 p-6 space-y-1">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="line-clamp-2">
                        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on
                        his throne. One day, his advisors came to him with a problem: the kingdom was running out of
                        money.
                      </p>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-12">
            <h2 className="text-4xl font-bold dark:text-white text-gray-950">Deciding To Sell</h2>
            <Divider className="mt-6" />
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              <>
                {deciding_to_sell.map((step, index) => (
                  <div
                    key={index}
                    id={`step-${index}`}
                  >
                    <Link href={`/real-estate-process/deciding-to-buy/${index}`}>
                      <Card className="bg-transparent border border-black/20 p-6 space-y-1">
                        <h3 className="font-bold text-lg">{step.title}</h3>
                        <p className="line-clamp-2">
                          Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on
                          his throne. One day, his advisors came to him with a problem: the kingdom was running out of
                          money.
                        </p>
                      </Card>
                    </Link>
                  </div>
                ))}
              </>
            </div>
          </div>
          <div className="md:col-span-12">
            <h2 className="text-4xl font-bold dark:text-white text-gray-950">More Stuff</h2>
            <Divider className="mt-6" />
            <div className="grid lg:grid-cols-3 gap-8 mt-8"></div>
          </div>
          <div className="md:col-span-12">
            <h2 className="text-4xl font-bold dark:text-white text-gray-950">Extra Information</h2>
            <Divider className="mt-6" />
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              {Array.from({ length: 6 }, (_, index) => {
                return (
                  <>
                    <Link href="#">
                      <Card
                        key={index}
                        className="bg-transparent border border-black/20 p-6 space-y-1"
                      >
                        <h3 className="font-bold text-lg">Title Of Section</h3>
                        <p className="line-clamp-2">
                          Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on
                          his throne. One day, his advisors came to him with a problem: the kingdom was running out of
                          money.
                        </p>
                      </Card>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          {/* End Of Deciding To Buy */}
          <div className="space-y-5 md:col-span-12">
            <h2 className="text-4xl font-bold dark:text-white">Frequently Asked Questions.</h2>
            <Divider className="mt-6" />
            {fakeDetails.map((detail, index) => {
              return (
                <>
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
                        Jokester began sneaking into the castle in the middle of the night and leaving jokes all over
                        the place: under the king&#39;s pillow, in his soup, even in the royal toilet. The king was
                        furious, but he couldn&#39;t seem to stop Jokester. And then, one day, the people of the kingdom
                        discovered that the jokes left by Jokester were so funny that they couldn&#39;t help but laugh.
                        And once they started laughing, they couldn&#39;t stop.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </>
              );
            })}
          </div>
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

const deciding_to_buy = [
  {
    id: 1,
    title: "Deciding To Buy",
  },
  {
    id: 2,
    title: "Deciding To Buy",
  },
  {
    id: 3,
    title: "Deciding To Buy",
  },
  {
    id: 4,
    title: "Deciding To Buy",
  },
  {
    id: 5,
    title: "Deciding To Buy",
  },
  {
    id: 6,
    title: "Deciding To Buy",
  },
];

const deciding_to_sell = [
  {
    id: 1,
    title: "Deciding To Sell",
  },
  {
    id: 2,
    title: "Deciding To Sell",
  },
  {
    id: 3,
    title: "Deciding To Sell",
  },
  {
    id: 4,
    title: "Deciding To Sell",
  },
  {
    id: 5,
    title: "Deciding To Sell",
  },
  {
    id: 6,
    title: "Deciding To Sell",
  },
];
