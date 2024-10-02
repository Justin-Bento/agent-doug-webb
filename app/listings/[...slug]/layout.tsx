import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function PropertyListingLayout() {
  return (
    <html>
      <body>
        <Navigation />
        <main className="grid md:grid-cols-12">
          <section className="ring ring-black">&nbsp;</section>
          <section className="ring ring-black">&nbsp;</section>
          <section className="ring ring-black">&nbsp;</section>
          <section className="ring ring-black">&nbsp;</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
