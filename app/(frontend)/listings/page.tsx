import React from "react";
import { TbSearch } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import BackgroundPattern from "@/components/BackgroundPattern";
import { PROPERTY_LISTINGS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const options = { next: { revalidate: 60 } };

type PostArticle = {
  _id: string;
  title: string;
  slug: string;
  Price: number;
  Statement: string;
  publishedAt: string;
  mainImage: string;
};

export default async function Page() {
  let posts = [];
  try {
    posts = await client.fetch(PROPERTY_LISTINGS_QUERY, {}, options);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  console.log(posts);
  return (
    <main className="min-h-dvh">
      <section className="relative overflow-hidden">
        <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
        <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
          <h1 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white sm:text-6xl">
            Available Properties.
          </h1>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 wrapper  gap-6 lg:mt-24">
        <div className="col-span-1 lg:col-span-3 w-full flex items-center justify-between">
          <Card className="border max-w-sm w-full flex items-center justify-between gap-2 py-2 px-4 bg-transparent border-black/40 dark:border-white/50">
            <p className="text-sm text-black/50 dark:text-white/50">Search</p>
            <TbSearch className="text-black/50 dark:text-white/50" />
          </Card>
          <Card className="border-0 bg-transparent dark:bg-transparent shadow-none flex gap-4Fixe justify-start md:justify-end">
            <Button variant="ghost" size="sm" className="dark:bg-[#16151b]">
              Sort By
            </Button>
            <Button variant="ghost" size="sm" className="dark:bg-[#16151b]">
              Latest Price
            </Button>
          </Card>
        </div>
        <ul className="contents">
          {posts.map((post: PostArticle) => {
            return (
              <li className="col-span-1 w-full">
                <Card key={post._id} className="bg-transparent">
                  <CardHeader className="relative aspect-[16/10] p-0 pb-6 overflow-hidden">
                    <Image
                      fill
                      src={urlFor(post.mainImage).url() || ""}
                      alt={post.title || "Property"}
                      className="object-cover object-center rounded-t-xl"
                    />
                  </CardHeader>
                  <CardContent className="mt-4">
                    <p className="text-sm/6">
                      {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(post.Price)}
                    </p>
                    <h2 className="text-2xl font-semibold dark:text-white">{post.title}</h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-2 text-gray-700 line-clamp-3">{post.Statement}</p>
                    <Link href={`listings/${post.slug.current}`}>
                      <Button variant="outline" size="sm" className="flex items-center gap-1 mt-4 bg-transparent">
                        View Property<span aria-hidden="true">→</span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
