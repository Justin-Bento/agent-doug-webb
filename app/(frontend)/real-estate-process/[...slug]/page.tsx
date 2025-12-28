import React from "react";
import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Divider from "@/components/Divider";
import { PortableText } from "next-sanity";
import PageHeader from "@/components/PageHeader";

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
       <PageHeader title="Real-Estate Process" />
        <section className="wrapper">
          <h2 className="max-w-3xl text-balance text-4xl/tight font-medium text-gray-950 dark:text-white">
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
                  <Card className="ring ring-gray-300 bg-gray-100 rounded hover:ring-gray-700">
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
          <h2 className="max-w-3xl text-pretty text-4xl/tight font-medium text-gray-950 dark:text-white">
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
            <h1 className="text-4xl/loose m-0 font-bold tracking-normal lg:text-5xl/tight">
              {post.processCategoryTitle}
            </h1>
            <Link
              href="/real-estate-process"
              className="p-0 m-0 text-sm tracking-wider leading-loose text-primary font-medium"
            >
              Real-Estate Process
            </Link>
          </div>
          <p className="tracking-wide leading-loose not-first:mt-2 max-w-4xl text-balance">
            {post.processCategoryDescription}
          </p>
          <Divider />
          {/* List of steps linking to double slug pages */}
          <ul className="grid grid-cols-1 gap-8 m-0 p-0 not-first:mt-6">
            {post.processSteps?.map((step: any, index: number) => (
              <li
                key={step.stepSlug?.current || index}
                className="group relative isolate overflow-hidden rounded-lg hover:ring-1 ring-black bg-gray-200 transition-all"
              >
                <Link
                  className="block relative px-4 py-5 sm:p-6"
                  href={`/real-estate-process/${params.slug[0]}/${step.stepSlug?.current}`}
                >
                  <span className="w-full h-full absolute inset-0"></span>
                  <span className="relative z-10 text-lg font-medium group-hover:underline decoration-dotted  group-hover:text-black m-0 p-0">
                    {step.stepTitle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }

  // If slug has 2 parts (stage page)
  if (params.slug.length === 2) {
    const { data: stepData } = await sanityFetch({
      query: `*[_type == "realEstateProcess" && processCategorySlug.current == $categorySlug][0] {
      processCategoryTitle,
      processSteps[stepSlug.current == $stepSlug][0] {
        stepTitle,
        stepSlug,
        stepContent
      }
    }`,
      params: {
        categorySlug: params.slug[0],
        stepSlug: params.slug[1],
      },
    });

    // Add error handling
    if (!stepData || !stepData.processSteps) {
      return <h1>Step not found</h1>;
    }

    const step = stepData.processSteps;

    return (
      <main className="prose max-w-6/10 mx-auto my-24 text-pretty">
        <section>
          <h1 className="m-0 p-0 leading-[1]">{step.stepTitle}</h1>
          <p className="m-0 p-0 text-lg text-gray-500 font-medium leading-[1.5] tracking-wide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
            vitae. Odit vel natus similique itaque harum, maiores, molestias
            magnam obcaecati magni distinctio animi, nam eum laudantium impedit!
            Animi, architecto optio?
          </p>
          <Divider />
        </section>
        <article className="leading-[2] tracking-wide">
          <PortableText value={step.stepContent} />
        </article>
      </main>
    );
  }

  // Fallback for unexpected cases
  return <h1>Not Found</h1>;
}
