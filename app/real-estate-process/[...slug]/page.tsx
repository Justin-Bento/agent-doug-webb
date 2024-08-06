import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

// This page leverages the Catch-all Segments feature in Next.js to handle dynamic routing within Nextjs.
// Justin Bento used this feature because it allows creating routes based on dynamic data if the clients plans on adding content in the future.
// This section is for the MDX Articles main section utilizes the layout for consistent page structure.

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
