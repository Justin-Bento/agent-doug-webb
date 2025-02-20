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
}`
);

// Single property listing by slug
export const PROPERTY_LISTINGS_BY_SLUG_QUERY =
  defineQuery(`*[_type == "propertyListings" && slug.current][0] {
  _id,
  title, 
  Statement,  
  mainImage,
  listingInformation
}`);

/*
    ## REAL ESTATE PROCESS
*/

// Real estate process query for posts by category
export const REAL_ESTATE_PROCESS_POSTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "realEstateProcess" && $keyword in categories[]->slug.current] {
  _id,
  title,
  slug,
  categories[]-> {
    title,
    slug
  }
}
  `);

// Real estate process posts specifically for selling category
export const REAL_ESTATE_PROCESS_SELLING_POSTS_QUERY = defineQuery(`
  *[_type == "realEstateProcess" && "selling" in categories[]->slug.current] {
  _id,
  title,
  slug,
  categories[]-> {
    title,
    slug
    }
  }
`);

// Real estate process posts for "more-stuff" category
export const REAL_ESTATE_PROCESS_MORE_STUFF_POSTS_QUERY = defineQuery(`
  *[_type == "realEstateProcess" && "more-stuff" in categories[]->slug.current] {
  _id,
  title,
  slug,
  categories[]-> {
    title,
    slug
    }
  }
`);

// Real estate process posts for "additional-information" category
export const REAL_ESTATE_PROCESS_ADDITIONAL_INFO_POSTS_QUERY = defineQuery(`
  *[_type == "realEstateProcess" && "additional-information" in categories[]->slug.current] {
    _id,
    title,
    slug,
    categories[]-> {
      title,
      slug
    }
  }
`);

// Real estate process article query by slug
export const REAL_ESTATE_PROCESS_ARTICLE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "realEstateProcess" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage
  }
`);
