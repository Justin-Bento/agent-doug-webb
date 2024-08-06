import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function page({ params }: { params: { slug: string[] } }) {
  if (params.slug.length === 2) {
    return (
      <>
        <h1 className="text-4xl tracking-tight font-bold dark:text-white">We are inside Deciding To Buy.</h1>
      </>
    );
  } else if (params.slug.length === 1 && params.slug[0] === "deciding-to-buy") {
    return (
      <>
        <h1 className="text-4xl tracking-tight font-bold dark:text-white">Welcome, to Deciding To Buy.</h1>
      </>
    );
  } else if (params.slug.length === 1 && params.slug[0] === "deciding-to-sell") {
    return (
      <>
        <h1 className="text-4xl tracking-tight font-bold dark:text-white">Welcome, to Deciding To Sell.</h1>
        <Footer />
      </>
    );
  } else if (params.slug.length === 1 && params.slug[0] === "more-stuff") {
    return (
      <>
        <h1 className="text-4xl tracking-tight font-bold dark:text-white">Welcome, to More Stuff.</h1>
      </>
    );
  } else if (params.slug.length === 1 && params.slug[0] === "additional-information") {
    return (
      <>
        <h1 className="text-4xl tracking-tight font-bold dark:text-white">Welcome, to Additional Information.</h1>
      </>
    );
  }
}
