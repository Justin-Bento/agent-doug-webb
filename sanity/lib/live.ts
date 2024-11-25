import { client } from "@/sanity/lib/client";
import { defineLive } from "next-sanity";

export const { sanityFetch, SanityLive } = defineLive({ client });
