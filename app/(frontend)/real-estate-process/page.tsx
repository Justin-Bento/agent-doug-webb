import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import {
  Card,
  CardContent,
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
      <PageHeader title="Real Estate Process" />
      <section className="wrapper grid grid-cols-2 gap-8">
        <div className="col-span-2 [&>p]:text-lg [&>p]:max-w-[80ch] [&>p]:mb-3">
          <h2 className="text-4xl/loose font-bold tracking-wide first:mt-0">
            A Comprehensive Overview of the Real Estate Process.
          </h2>
          <p className="text-xl max-w-5xl text-pretty tracking-wide">
            As an Ontario Real Estate Expert with 20+ Years Experience.
            I&apos;ve distilled two decades of property buying/selling
            experience into 4 simple modules - complete with guides and tools to
            help you acquire your perfect property.
          </p>
          <p>
            Each module goes into a lot of detail about the process so take your
            time reading this information!
          </p>
        </div>

        <ul className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post: RealEstateModulesInterface) => (
            <li key={post._id} className="group relative isolate">
              <Link
                href={`/real-estate-process/${post.processCategorySlug.current}`}
              >
                <Card className="ring ring-gray-300 bg-gray-100 rounded hover:ring-gray-700">
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
