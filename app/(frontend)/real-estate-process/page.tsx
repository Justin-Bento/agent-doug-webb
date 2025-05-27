import React from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { RE_PROCESS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BackgroundPattern from "@/components/BackgroundPattern";
import Divider from "@/components/Divider";

export default async function Page() {
  const { data: posts } = await sanityFetch({
    query: RE_PROCESS_QUERY,
  });
  return (
    <main className="space-y-24 mb-24 min-h-dvh">
      <section className="relative overflow-hidden">
        <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
        <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
          <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
            Real-Estate Process.
          </h1>
        </div>
      </section>

      <section className="wrapper">
        <h2 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
          A Comprehensive Overview of the Real Estate Process: What You Need to
          Know
        </h2>
        <Divider className=" my-8" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post: any) => (
            <li key={post._id} className="group">
              <Link
                href={`real-estate-process/${post.processCategorySlug.current}`}
              >
                <Card className="bg-transparent  active:ring-primary hover:bg-white/70 hover:border-gray-400 transition-all  ">
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
        <h2 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
          Frequently Asked Questions
        </h2>
      </section>
    </main>
  );
}
