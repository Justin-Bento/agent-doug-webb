import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";

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
      <main className="min-h-dvh my-28 space-y-28">
        <section className="container mx-auto">
          <h1 className="text-4xl text-balance lg:text-nowrap tracking-tight font-bold dark:text-white">
            Welcome, Real-Estate process main page.
          </h1>
          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            <Card className="ring-1 ring-black">
              <CardHeader className="text-lg font-bold">Deciding To Buy.</CardHeader>
              <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                perferendis!
              </CardContent>
              <CardFooter>
                <Link
                  href="/real-estate-process/deciding-to-buy"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium"
                >
                  Link To Segments &rarr;
                </Link>
              </CardFooter>
            </Card>
            {/* End of card */}
            <Card className="ring-1 ring-black">
              <CardHeader className="text-lg font-bold">Deciding To Sell.</CardHeader>
              <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                perferendis!
              </CardContent>
              <CardFooter>
                <Link
                  href="/real-estate-process/deciding-to-sell"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium"
                >
                  Link To Segments &rarr;
                </Link>
              </CardFooter>
            </Card>
            {/* End of card */}
            <Card className="ring-1 ring-black">
              <CardHeader className="text-lg font-bold">Deciding To Sell.</CardHeader>
              <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                perferendis!
              </CardContent>
              <CardFooter>
                <Link
                  href="/real-estate-process/more-stuff"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium"
                >
                  Link To Segments &rarr;
                </Link>
              </CardFooter>
            </Card>
            {/* End of card */}
            <Card className="ring-1 ring-black">
              <CardHeader className="text-lg font-bold">Additional Information.</CardHeader>
              <CardContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa iste, recusandae itaque saepe
                iusto quae nemo commodi voluptatem quam officia tempore! Neque atque architecto saepe, autem eum ab
                perferendis!
              </CardContent>
              <CardFooter>
                <Link
                  href="/real-estate-process/additional-information"
                  className="hover:underline active:opacity-75 text-sm tracking-tight font-medium"
                >
                  Link To Segments &rarr;
                </Link>
              </CardFooter>
            </Card>
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
