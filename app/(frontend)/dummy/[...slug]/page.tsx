import React from "react";
import Divider from "@/components/Divider";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { RE_PROCESS_ARTICLE_QUERY, RE_PROCESS_POSTS_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/sanity/types";
import { PortableText } from "next-sanity";
import GoBack from "@/components/GoBack";
import { notFound } from "next/navigation";
import { revertSlug } from "@/lib/utils";
// Set ISR revalidation at the route level
export const revalidate = 60;

export default async function Page({ params }: { params: { slug?: string[] } }) {
  // Validate params.slug
  if (!params.slug || !Array.isArray(params.slug)) {
    return (
      <div className="wrapper space-y-6 min-h-dvh py-24">
        <h1>Invalid parameters provided</h1>
      </div>
    );
  }

  if (params.slug.length === 1) {
    const { data } = await sanityFetch({
      query: RE_PROCESS_POSTS_QUERY,
      params: { keyword: params.slug[0] },
    });
    const posts: Post[] = data as Post[];

    if (!posts || posts.length === 0) {
      return (
        <div className="wrapper space-y-6 min-h-dvh py-24">
          <h1>Category not recognized</h1>
          <p>The category "{params.slug[0]}" does not exist or has no posts.</p>
        </div>
      );
    }

    return (
      <div className="wrapper space-y-6 min-h-dvh py-24">
        <h1 className="text-4xl font-semibold capitalize">{revertSlug(params.slug[0])}</h1>
        <Divider className="my-3 block" />
        <ul className="grid grid-cols-1 gap-4">
          {posts.length > 0 ? (
            posts.map((post: Post) => (
              <li key={post?._id}>
                <Link href={`/dummy/${params.slug[0]}/${post?.slug?.current}`}>
                  <Card className="bg-transparent hover:border-gray-400 active:ring-primary hover:bg-white/70 transition-all">
                    <div className="px-4 py-5 sm:p-6 space-y-2">
                      <h2 className="text-xl font-semibold">{post?.title}</h2>
                      <p className="line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias voluptatem sint,
                        expedita facilis enim. Velit rem officia fugiat libero eveniet animi nemo minus perspiciatis
                        maxime nihil beatae, atque esse.
                      </p>
                    </div>
                  </Card>
                </Link>
              </li>
            ))
          ) : (
            <p>No posts found for this category.</p>
          )}
        </ul>
        <GoBack />
      </div>
    );
  }

  if (params.slug.length === 2) {
    // const [category, title] = params.slug;
    const { data: post } = await sanityFetch({
      query: RE_PROCESS_ARTICLE_QUERY,
      params: { slug: params.slug[1] },
    });
    return (
      <>
        <main className="wrapper space-y-6 min-h-dvh py-24">
          <h1 className="text-4xl font-semibold capitalize">{post?.title} </h1>
          <article className="prose max-w-[100ch] text-balance">
            <PortableText value={post?.body} />
          </article>
          <Divider className="my-3 block" />
          <section className="">
            <GoBack />
          </section>
        </main>
      </>
    );
  }

  // Fallback case
  return notFound();
}
