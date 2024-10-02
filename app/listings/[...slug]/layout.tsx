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
          <section className="ring ring-black md:col-span-12">&nbsp;</section>
          <section className="ring ring-black md:col-span-12">&nbsp;</section>
          <section className="ring ring-black md:col-span-12">&nbsp;</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
