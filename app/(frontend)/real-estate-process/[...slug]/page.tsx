import React from "react";
import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BackgroundPattern from "@/components/BackgroundPattern";
import Divider from "@/components/Divider";
import TypographyDemo from "@/components/TypographyDemo";

export default async function page({ params }: { params: { slug: string[] } }) {
  // If no slug, show the main page with posts
  if (!params.slug) {
    const { data: posts } = await sanityFetch({
      query: `
        *[_type == "realEstateProcess" ] {
          _id,
          processCategoryTitle,
          processCategoryDescription,
          processCategorySlug,
        }`,
    });
    return (
      <main className="space-y-24 mb-24 min-h-dvh">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="text-6xl dark:text-white">Real-Estate Process.</h1>
          </div>
        </section>
        <section className="wrapper">
          <h2 className="max-w-3xl text-balance text-4xl/[1.25] font-medium text-gray-950 dark:text-white">
            A Comprehensive Overview of the Real Estate Process: What You Need
            to Know
          </h2>
          <Divider className="my-8" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post: any) => (
              <li key={post._id} className="group">
                <Link
                  href={`real-estate-process/${post.processCategorySlug.current}`}
                >
                  <Card className="bg-transparent active:ring-primary hover:bg-white/70 hover:border-gray-400 transition-all">
                    <div className="px-4 py-5 sm:p-6 space-y-2">
                      <p className="text-xl font-semibold capitalize">
                        {post.processCategoryTitle}
                      </p>
                      <p className="line-clamp-2">
                        {post.processCategoryDescription}
                      </p>
                      <Button
                        variant="link"
                        className="m-0 p-0 group-hover:underline"
                      >
                        See More
                      </Button>
                    </div>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="wrapper">
          <h2 className="max-w-3xl text-pretty text-4xl/[1.25] font-medium text-gray-950 dark:text-white">
            Frequently Asked Questions
          </h2>
        </section>
      </main>
    );
  }

  if (params.slug.length === 1) {
    const { data: post } = await sanityFetch({
      query: `*[_type == "realEstateProcess" && processCategorySlug.current == $slug][0] {
        processCategoryTitle,  
        processCategoryDescription,
        processCategorySlug,
        processSteps[] {
          stepTitle,
          stepSlug,
          stepContent
        }
      }`,
      params: { slug: params.slug[0] },
    });
    return (
      <main className="wrapper min-h-dvh my-24">
        <section className="prose-lg max-w-[100ch]">
          <div className="flex flex-col-reverse">
            <h1 className="text-4xl/[2] m-0 font-bold tracking-normal lg:text-5xl/[1.25]">
              {post.processCategoryTitle}
            </h1>
            <Link
              href="/real-estate-process"
              className="p-0 m-0 text-sm tracking-wider leading-[2] text-primary font-medium"
            >
              Real-Estate Process
            </Link>
          </div>
          <p className="tracking-wide leading-[2] [&:not(:first-child)]:mt-2 max-w-4xl text-balance">
            {post.processCategoryDescription}
          </p>
          <Divider />
        </section>
      </main>
    );
  }

  // If slug has 2 parts (stage page)
  if (params.slug.length === 2) {
    return (
      <main className="wrapper min-h-dvh my-24">
        <h1 className="max-w-4xl text-4xl font-bold capitalize text-pretty lg:text-5xl lg:leading-[1.25] mb-6">
          Start here for a quick overview of everything you need to know.
        </h1>
        <TypographyDemo />
      </main>
    );
  }

  // Fallback for unexpected cases
  return <h1>Not Found</h1>;
}
