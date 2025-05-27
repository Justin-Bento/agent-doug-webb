// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

/*
    ## REAL ESTATE PROCESS
*/

// General property listings query
export const PROPERTY_LISTINGS_ALL_QUERY = defineQuery(
  `  *[_type == "propertyListings"] {
  _id,
  title,
  slug {
    current
  },
  Price,
  Statement,
  publishedAt,
  mainImage{
    asset->{
      _id,
      url
    }
  }
}
`
);

// Single property listing by slug
export const PROPERTY_LISTINGS_BY_SLUG_QUERY =
  defineQuery(`*[_type == "propertyListings" && slug.current == $slug][0] {
    _id,
    title, 
    Price,
    Statement,
    mainImage {
      asset -> {
        _id, 
        url
      }
    },
    listingInformation
  }
`);

/*
    ## REAL ESTATE PROCESS
*/

// Real estate process query for posts by category
export const RE_PROCESS_QUERY = defineQuery(`
  *[_type == "realEstateProcess" ] {
    _id,
  categoryTitle,
  categoryDescription,
  categorySlug,
    processSteps[] {
      _id,
      stepTitle,
      stepSlug,
      stepContent
    }
  }
`);
