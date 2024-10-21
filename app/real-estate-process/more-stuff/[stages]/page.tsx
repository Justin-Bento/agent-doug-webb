import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function page({ params }: any) {
  return (
    <>
      <Navigation />
      <main className="wrapper min-h-dvh my-24">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-normal lg:text-5xl">
          Hello, More Stuff - Stage {params.stages}!
        </h1>
      </main>
      <Footer />
    </>
  );
}
