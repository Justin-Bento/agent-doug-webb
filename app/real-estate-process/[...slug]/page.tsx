import React from "react";
import DecidingToBuy1 from "@/markdown/deciding-to-buy/step1.mdx";
import DecidingToSell1 from "@/markdown/deciding-to-sell/your-decision-to-sell.mdx";
import ForSaleByOwner from "@/markdown/more-stuff/for-sale-by-owner.mdx";
import ReferencePage from "@/markdown/extra-infromation/reference-page.mdx";

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
    return <DecidingToBuy1 />;
    //
  } else if (params.slug.length === 1 && params.slug[0] === "deciding-to-sell") {
    return <DecidingToSell1 />;
    //
  } else if (params.slug.length === 1 && params.slug[0] === "more-stuff") {
    return <ForSaleByOwner />;
    //
  } else if (params.slug.length === 1 && params.slug[0] === "additional-information") {
    return <ReferencePage />;
    //
  }
}
