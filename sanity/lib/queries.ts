// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const RE_PROCESS_POSTS_QUERY = defineQuery(
  `*[_type == "realEstateProcess"]{ _id, title, slug, categories }`
);

export const RE_PROCESS_ARTICLE_QUERY =
  defineQuery(`*[_type == "realEstateProcess" && slug.current == $slug][0]{
  _id, title, body, mainImage
}`);
