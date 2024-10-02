import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function PropertyListingLayout() {
  return (
    <html>
      <body>
        <Navigation />
        <main className="grid md:grid-cols-12 gap-4">
          <section className="ring ring-black md:col-span-12">&nbsp;</section>
          <section className="ring ring-black md:col-span-12">&nbsp;</section>
          <section className="ring ring-black md:col-span-12">&nbsp;</section>
          <section className="ring ring-black md:col-span-12">&nbsp;</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
