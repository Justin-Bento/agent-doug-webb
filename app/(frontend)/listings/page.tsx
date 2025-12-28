import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <>
      <main className="min-h-dvh mb-24">
        <PageHeader title="Property Listings" />
        <section className="wrapper mt-16">
          <div className="flex flex-col-reverse">
            <h2 className="text-4xl/loose font-bold tracking-wide first:mt-0">
              Hello, Property Listings Page.
            </h2>
            <p>Lorem, ipsum dolor!</p>
          </div>
          <p className="text-xl max-w-5xl text-balance tracking-wide">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <Divider className="mt-6 mb-10" />
        </section>
      </main>
    </>
  );
}
