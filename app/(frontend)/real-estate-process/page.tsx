import PageHeader from "@/components/PageHeader";
import {
  Card,
  CardContent,
  CardDescription,
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
    <>
      <PageHeader title="Real Estate Process" />
      <main className="my-24 space-y-12 min-h-dvh">
        <section className="gap-8 wrapper">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.map((post: RealEstateModulesInterface) => (
              <li key={post._id} className="relative group isolate">
                <Link
                  href={`/real-estate-process/${post.processCategorySlug.current}`}
                >
                  <Card className="transition-all bg-gray-100 rounded ring ring-gray-300 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:ring-gray-500 hover:ring-gray-700">
                    <CardContent>
                      <CardTitle className="text-2xl font-semibold tracking-wide group-hover:underline group-hover:decoration-dotted">
                        {post.processCategoryTitle}
                      </CardTitle>
                      <CardDescription className="mt-2 tracking-wide text-black text-base/relaxed">
                        {post.processCategoryDescription}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="grid grid-cols-1 gap-12 wrapper">
          <div className="col-span-1 space-y-3">
            <h2 className="max-w-3xl h1 text-pretty">
              Things You Should Know Before Getting Started.
            </h2>
            <p className="max-w-2xl tracking-wide body-lead text-pretty">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              recusandae natus a cumque consequatur ipsum enim temporibus rem
              veritatis. Laboriosam rerum veritatis esse minima quae nisi illo ?
            </p>
          </div>
          <div className="card-container">&nbsp;</div>
        </section>
      </main>
    </>
  );
}
