import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh">
        <section className="container mx-auto my-28">
          <h1 className="text-4xl tracking-tight font-bold dark:text-white">Welcome, Real Estate Page.</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
