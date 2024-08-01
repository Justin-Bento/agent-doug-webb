import React from "react";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6">
        <Heading
          heading="Hello world, from listing page."
          supporting="the quick brown fox jumps over the lazy dog."
        />
      </main>
      <Footer />
    </div>
  );
}
