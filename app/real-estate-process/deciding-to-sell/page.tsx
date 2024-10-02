import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function DecidingToSell() {
  return (
    <>
      <Navigation />
      <main className="wrapper min-h-dvh my-20">
        <section className="">
          <h1 className="">Deciding To Sell</h1>
        </section>
        <section className="flex flex-col gap-4 mt-8">
          {steps.map((step, index) => {
            return (
              <>
                <Link href={`/real-estate-process/deciding-to-sell/${step}`}>
                  <Card
                    key={index}
                    className="bg-transparent px-4 py-5 sm:p-4"
                  >
                    {step}
                  </Card>
                </Link>
              </>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

const steps = ["step1", "step2", "step3", "step4", "step5", "step6", "step7", "step8", "step9", "step10"];
