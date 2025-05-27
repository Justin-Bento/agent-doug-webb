import BackgroundPattern from "@/components/BackgroundPattern";
import Divider from "@/components/Divider";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";
import React from "react";

interface RealEstateModulesInterface {
  _id: string;
  processCategoryTitle: string;
  processCategoryDescription: string;
  processCategorySlug: {
    current: string;
  };
}
export default async function page() {
  const { data: posts } = await sanityFetch({
    query: `*[_type == "realEstateProcess" ] {
      _id,
      processCategoryTitle,
      processCategoryDescription,
      processCategorySlug
    }`,
  });
  return (
    <main className="min-h-dvh mb-24">
      <section className="relative overflow-hidden">
        <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-linear-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
        <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
          <h1 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white sm:text-6xl">
            Real Estate Process.
          </h1>
        </div>
      </section>
      <section className="wrapper mt-16">
        <div className="flex flex-col-reverse">
          <h2 className="text-4xl/loose font-bold tracking-wide first:mt-0">
            A Comprehensive Overview of the Real Estate Process.
          </h2>
          <p>What You Need to Know!</p>
        </div>
        <p className="text-xl max-w-5xl text-pretty tracking-wide">
          As an Ontario Real Estate Expert with 20+ Years Experience. I&apos;ve
          distilled two decades of property buying/selling experience into 4
          simple modules - complete with guides and tools to help you acquire
          your perfect property.
        </p>
        <Divider className="mt-6 mb-10" />
      </section>
      <ul className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.map((post: RealEstateModulesInterface) => {
          return (
            <li key={posts._id} className="group relative isolate">
              <Link
                href={`/real-estate-process/${post.processCategorySlug.current}`}
              >
                <Card className="ring-1 ring-transparent group-hover:ring-black/50 shadow-none transition-all">
                  <CardHeader className="p-6">
                    <CardTitle className="text-2xl font-semibold tracking-wide group-hover:underline group-hover:decoration-dotted">
                      {post.processCategoryTitle}
                    </CardTitle>
                    <CardDescription className="tracking-wide text-base/loose text-black">
                      {post.processCategoryDescription}
                    </CardDescription>
                    <CardDescription className="tracking-wide text-sm/loose text-black">
                      Choose Path &rarr;
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
      <section className="wrapper mt-16">
        <div className="flex flex-col-reverse">
          <h2 className="text-4xl/loose font-bold tracking-wide first:mt-0">
            Things You Should Know Before Getting Started.
          </h2>
          <p>Frequently Asked Questions!</p>
        </div>
        <p className="text-xl max-w-5xl text-pretty tracking-wide">
          As an Ontario Real Estate Expert with 20+ Years Experience. I&apos;ve
          distilled two decades of property buying/selling experience into 4
          simple modules - here are some things I expect you to know before we
          get started.
        </p>
        <Divider className="mt-6 mb-10" />
      </section>
    </main>
  );
}
