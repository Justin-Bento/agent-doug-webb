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
    <main className="min-h-dvh mb-24 space-y-12">
      <PageHeader title="Real Estate Process" />
      <section className="wrapper gap-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post: RealEstateModulesInterface) => (
            <li key={post._id} className="group relative isolate">
              <Link
                href={`/real-estate-process/${post.processCategorySlug.current}`}
              >
                <Card className="ring ring-gray-300 bg-gray-100 transition-all dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:ring-gray-500 rounded hover:ring-gray-700">
                  <CardContent>
                    <CardTitle className="text-2xl font-semibold tracking-wide group-hover:underline group-hover:decoration-dotted">
                      {post.processCategoryTitle}
                    </CardTitle>
                    <CardDescription className="mt-2 tracking-wide text-base/relaxed text-black">
                      {post.processCategoryDescription}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="wrapper grid grid-cols-1 gap-12">
        <div className="col-span-1 space-y-3">
          <h2 className="h1 max-w-3xl text-pretty">
            Things You Should Know Before Getting Started.
          </h2>
          <p className="body-lead tracking-wide max-w-2xl text-pretty">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            recusandae natus a cumque consequatur ipsum enim temporibus rem
            veritatis. Laboriosam rerum veritatis esse minima quae nisi illo ?
          </p>
        </div>
        <div className="card-container">&nbsp;</div>
      </section>
    </main>
  );
}
