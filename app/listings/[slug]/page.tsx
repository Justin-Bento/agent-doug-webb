import NotFound from "@/components/NotFound";
import React from "react";
import property from "@/lib/property.json";

// [x] Grab the page id from the slug url.
// [] If the url display anything other than an item 1 through 10  render the not found component.

export default function page({ params }: any) {
  // Ensure params.slug is a number
  const pageId = parseInt(params.slug, 10);
  // Check if the pageId is within the valid range (1-10)
  if (isNaN(pageId) || pageId < 1 || pageId > 10) {
    return <NotFound />;
  }
  // Check if the pageId exists in the property JSON
  const propertyItem = property.find((item) => item.id === pageId);
  if (!propertyItem) {
    return <NotFound />;
  }

  return (
    <>
      <div>
        <p className="">page {params.slug}</p>
      </div>
    </>
  );
}
