import { Card } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { PROPERTY_LISTINGS_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TbBoxModel, TbBoxModel2 } from "react-icons/tb";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: PROPERTY_LISTINGS_BY_SLUG_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 p-12">
      <section className="min-h-[25dvh] flex flex-col items-center justify-center">
        <div className="text-center text-balance space-y-4">
          <h1 className="text-4xl font-bold">{post?.title}</h1>
          <p className="text-md">{post?.Statement}</p>
        </div>
      </section>
      <section className="">
        <div className="relative aspect-[16/10] p-0 pb-6 overflow-hidden">
          <Image
            fill
            src={urlFor(post.mainImage)?.url() || ""}
            alt={`Property of ${post.title}`}
            className="object-cover object-center rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}
