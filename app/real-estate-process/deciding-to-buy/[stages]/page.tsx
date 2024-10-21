import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { revertSlug } from "@/lib/utils";
import React from "react";

export default function page({ params }: any) {
  return (
    <>
      <Navigation />
      <main className="wrapper min-h-dvh my-24">
        <h1 className="text-xl font-bold"> Hello, Deciding To Buy - {revertSlug(params.stages)}!</h1>
      </main>
      <Footer />
    </>
  );
}
