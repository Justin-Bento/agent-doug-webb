// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const PROPERTY_LISTINGS_QUERY = defineQuery(
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

export const PROPERTY_LISTINGS_POST_QUERY =
  defineQuery(`*[_type == "propertyListings"][0]{
  title, Statement, mainImage, listingInformation
 }`);

export const RE_PROCESS_POSTS_QUERY = defineQuery(
  `  *[_type == "realEstateProcess" && $keyword in categories[]->slug.current]{
  _id,
  title,
  slug,
  categories[] -> {
    title,
    slug
  }
}
`
);

export const RE_PROCESS_POSTS_QUERY_SELLING = defineQuery(
  `*[_type == "realEstateProcess" && "selling" in categories[]->slug.current]{
  _id,
  title,
  slug,
  categories[] -> {
    title,
    slug
}}`
);

export const RE_PROCESS_POSTS_QUERY_MORESTUFF = defineQuery(
  `*[_type == "realEstateProcess" && "more-stuff" in categories[]->slug.current]{
  _id,
  title,
  slug,
  categories[] -> {
    title,
    slug
}}`
);

export const RE_PROCESS_POSTS_QUERY_ADDITONALINFORMATION = defineQuery(
  `*[_type == "realEstateProcess" && "additional-information" in categories[]->slug.current]{
  _id,
  title,
  slug,
  categories[] -> {
    title,
    slug
}}`
);

export const RE_PROCESS_ARTICLE_QUERY =
  defineQuery(`*[_type == "realEstateProcess" && slug.current == $slug][0]{
  _id, title, body, mainImage
}`);
