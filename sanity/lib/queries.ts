// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const RE_PROCESS_POSTS_QUERY = defineQuery(
  `*[_type == "realEstateProcess"]{ _id, title, slug, categories }`
);

export const RE_PROCESS_POST_QUERY =
  defineQuery(`*[_type == "realEstateProcess" && slug.current == $slug][0]{
  title, body, mainImage
}`);
