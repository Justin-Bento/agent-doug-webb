import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import Heading from "../../components/Heading";
import Link from "next/link";

export default function RealEstateTransaction() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6 my-20">
        <section id="header">
          <h1 className="text-4xl tracking-tight font-extrabold capitalize dark:text-white">
            Real-Estate Transaction Process.
          </h1>
          <p className="text-base text-balance mt-2 mb-7 dark:text-white">
            Agent Webb provides all the essential information you need to
            navigate the Real Estate transaction process from start to finish,
            offering unbiased and straightforward insights to help you make
            informed decisions and stay ahead of potential red flags.
          </p>
        </section>
        <section className="grid items-center grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card
            Title="Deciding To Buy"
            Supporting=""
            URL="/real-estate-process/deciding-to-buy"
            LinkName="Buyers Information"
          />
          <Card
            Title="Deciding To Sell"
            Supporting=""
            URL="/real-estate-process/deciding-to-sell"
            LinkName="Seller's Information"
          />
          <Card
            Title="More Stuff"
            Supporting=""
            URL="/real-estate-process/more-stuff"
            LinkName="More Information"
          />
          <Card
            Title="Extra Information"
            Supporting=""
            URL="/real-estate-process/extra-information"
            LinkName="Extra Information"
          />
        </section>
        <section
          className="container mx-auto px-4 py-5 sm:p-6 my-20"
          data-info="common-questions"
        >
          <h3 className="text-4xl tracking-tight font-extrabold capitalize dark:text-white">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <Footer />
    </>
  );
}

interface cardInterface {
  Title: string;
  Supporting: string;
  URL: string;
  LinkName: string;
}
function Card({ Title, Supporting, URL, LinkName }: cardInterface) {
  return (
    <div className="w-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="px-4 py-6 sm:p-6">
        <h2 className="text-xl font-bold dark:text-white mb-1">
          {Title}
        </h2>
        <p className="leading-6 text-balance">
          {Supporting ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore consectetur odit quasi ad nulla eius voluptatem ipsum aliquid praesentium eligendi error in, nesciunt sunt debitis nisi optio delectus!"}
        </p>
        <Link href={URL}>
          <Button variant="secondary" size="sm" className="mt-6">
            {LinkName}
          </Button>
        </Link>
      </div>
    </div>
  );
}
