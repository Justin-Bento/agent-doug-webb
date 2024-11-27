import React from "react";
import Divider from "@/components/Divider";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { RE_PROCESS_POSTS_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/sanity/types";

// Set ISR revalidation at the route level
export const revalidate = 60;

function formatToSentence(slug: string): string {
  if (!slug || typeof slug !== "string") return "";
  return slug.toLowerCase().replace(/-/g, " ");
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  // Validate params.slug
  if (!params.slug || !Array.isArray(params.slug)) {
    return (
      <div>
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
        <div>
          <h1>Category not recognized</h1>
          <p>The category "{params.slug[0]}" does not exist or has no posts.</p>
        </div>
      );
    }

    return (
      <div>
        <h1 className="text-4xl font-semibold capitalize">{formatToSentence(params.slug[0])}</h1>
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
      </div>
    );
  }

  if (params.slug.length === 2) {
    const [category, title] = params.slug;
    return (
      <div>
        <h1 className="text-4xl font-semibold capitalize">Viewing docs for real estate process: {category}</h1>
        <Divider className="my-3 block" />
        <p>Document title: {title}</p>
      </div>
    );
  }

  // Fallback case
  return (
    <div>
      <h1>Page not found</h1>
      <p>The content you're looking for doesn't exist.</p>
    </div>
  );
}
