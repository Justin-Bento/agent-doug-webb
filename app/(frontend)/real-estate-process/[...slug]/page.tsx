import React from "react";
import Divider from "@/components/Divider";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import {
  REAL_ESTATE_PROCESS_ARTICLE_BY_SLUG_QUERY,
  REAL_ESTATE_PROCESS_POSTS_BY_CATEGORY_QUERY,
} from "@/sanity/lib/queries";
import { Post } from "@/sanity/types";
import { PortableText } from "next-sanity";
import GoBack from "@/components/GoBack";
import { notFound } from "next/navigation";
import { revertSlug } from "@/lib/utils";

// Set ISR revalidation at the route level
export const revalidate = 60;

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  // Handle undefined or invalid params.slug
  if (!params.slug || !Array.isArray(params.slug)) {
    return <h1>Invalid parameters provided</h1>;
  }

  if (params.slug.length === 1) {
    // Fetch posts for a single slug (category view)
    try {
      const { data } = await sanityFetch({
        query: REAL_ESTATE_PROCESS_POSTS_BY_CATEGORY_QUERY,
        params: { keyword: params.slug[0] },
      });
      const posts: Post[] = data as Post[];

      if (!posts || posts.length === 0) {
        return (
          <>
            <h1>Category not recognized</h1>
            <p>
              The category &quot;{params.slug[0]}&quot; does not exist or has no
              posts.
            </p>
          </>
        );
      }
      return (
        <>
          <h1 className="text-4xl font-semibold capitalize">
            {revertSlug(params.slug[0])}
          </h1>
          <ul className="grid grid-cols-1 gap-4">
            {posts.map((post: Post) => (
              <li key={post?._id}>
                <Link
                  href={`/real-estate-process/${(params.slug as string[])[0]}/${post?.slug?.current}`}
                >
                  <Card className="bg-transparent hover:border-gray-400 active:ring-primary hover:bg-white/70 transition-all">
                    <div className="px-4 py-5 sm:p-6 space-y-2">
                      <h2 className="text-xl font-semibold">{post?.title}</h2>
                      <p className="line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Inventore molestias voluptatem sint, expedita
                        facilis enim. Velit rem officia fugiat libero eveniet
                        animi nemo minus perspiciatis maxime nihil beatae, atque
                        esse.
                      </p>
                    </div>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
          <section className="space-y-8">
            <Divider className="block" />
            <GoBack />
          </section>
        </>
      );
    } catch (error) {
      console.error("Error fetching posts:", error);
      return <h1>Something went wrong while fetching posts.</h1>;
    }
  }

  if (params.slug.length === 2) {
    // Fetch specific post based on category and title slugs
    try {
      const { data: post } = await sanityFetch({
        query: REAL_ESTATE_PROCESS_ARTICLE_BY_SLUG_QUERY,
        params: { slug: params.slug[1] },
      });

      if (!post) {
        return (
          <>
            <h1>Post not found</h1>
            <p>The post you are looking for does not exist.</p>
          </>
        );
      }

      return (
        <>
          <h1 className="text-4xl font-semibold capitalize">{post?.title}</h1>
          <article className="prose max-w-[100ch] text-balance">
            <PortableText value={post?.body} />
          </article>
          <section className="space-y-8">
            <Divider className="block" />
            <GoBack />
          </section>
        </>
      );
    } catch (error) {
      console.error("Error fetching post:", error);
      return <h1>Something went wrong while fetching the post.</h1>;
    }
  }

  // Fallback case for invalid slug lengths
  return notFound();
}
