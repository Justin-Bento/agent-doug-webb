import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function PropertyListingLayout() {
  return (
    <html>
      <body>
        <Navigation />
        <main className="grid md:grid-cols-12 gap-4">
          <section className="flex items-center md:col-span-12 min-h-[20dvh]">
            <div className="wrapper flex flex-col-reverse">
              <h1 className="max-w-3xl text-balance text-4xl font-medium tracking-normal text-black dark:text-white">
                Property Name
              </h1>
              <p className="text-xs uppercase tracking-wider">Listings</p>
            </div>
          </section>
          <section className="wrapper md:col-span-12 flex items-center justify-between gap-12">
            <div className="w-full aspect-square bg-gray-400">&nbsp;</div>
            <div className="">
              <p className="text-base tracking-wide leading-5 max-w-[100rem]">
                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
                under the king&#39;s pillow, in his soup, even in the royal toilet. The king was furious, but he
                couldn&#39;t seem to stop Jokester. And then, one day, the people of the kingdom discovered that the
                jokes left by Jokester were so funny that they couldn&#39;t help but laugh. And once they started
                laughing, they couldn&#39;t stop.
              </p>
            </div>
          </section>
          <section className="ring ring-black md:col-span-12">&nbsp;</section>
          <section className="ring ring-black md:col-span-12">&nbsp;</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
