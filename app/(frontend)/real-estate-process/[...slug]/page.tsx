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
      <>
        <PageHeader title="Real-Estate Process" />
        <main className="space-y-24 my-24 min-h-dvh">
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
      </>
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
      <>
        <PageHeader title={`${post.processCategoryTitle}`} />
        <main className="min-h-dvh space-y-24">
          <section className="wrapper">
            {/* List of steps linking to double slug pages */}
            <ul className="grid grid-cols-1 gap-8 m-0 p-0 not-first:mt-6">
              {post.processSteps?.map((step: any, index: number) => (
                <li
                  key={step.stepSlug?.current || index}
                  className="group relative isolate overflow-hidden card-container"
                >
                  <Link
                    className="block relative px-4 py-5 sm:p-6"
                    href={`/real-estate-process/${params.slug[0]}/${step.stepSlug?.current}`}
                  >
                    <span className="w-full h-full absolute inset-0"></span>
                    <span className="relative z-10 text-lg font-medium group-hover:underline decoration-dotted m-0 p-0">
                      {step.stepTitle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </>
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
      <>
        <PageHeader title="Taxing Laughter: The Joke Tax Chronicles" />
        <main className="wrapper max-w-[80ch] my-24 *:dark:text-white">
          <section className="space-y-3 mb-6">
            <p className="text-xl leading-7 [&amp;:not(:first-child)]:mt-6">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
          </section>
          <article className="leading-[2] tracking-wide">
            {/* <PortableText value={step.stepContent} /> */}
            <h2 className="mb-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-wide transition-colors first:mt-0">
              The King&#39;s Plan
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The king thought long and hard, and finally came up with{" "}
              <a
                href="#"
                className="text-secondary font-medium underline underline-offset-4"
              >
                a brilliant plan
              </a>
              : he would tax the jokes in the kingdom.
            </p>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              &#34;After all,&#34; he said, &#34;everyone enjoys a good joke, so
              it&#39;s only fair that they should pay for the privilege.&#34;
            </blockquote>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-wide">
              The Joke Tax
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The king&#39;s subjects were not amused. They grumbled and
              complained, but the king was firm:
            </p>
            <ul className="my-6 ml-6 list-disc [&amp;&gt;li]:mt-2">
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners : 20 gold coins</li>
            </ul>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              As a result, people stopped telling jokes, and the kingdom fell
              into a gloom. But there was one person who refused to let the
              king&#39;s foolishness get him down: a court jester named
              Jokester.
            </p>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-wide">
              Jokester&#39;s Revolt
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king&#39;s pillow,
              in his soup, even in the royal toilet. The king was furious, but
              he couldn&#39;t seem to stop Jokester.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              And then, one day, the people of the kingdom discovered that the
              jokes left by Jokester were so funny that they couldn&#39;t help
              but laugh. And once they started laughing, they couldn&#39;t stop.
            </p>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-wide">
              The People&#39;s Rebellion
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The people of the kingdom, feeling uplifted by the laughter,
              started to tell jokes and puns again, and soon the entire kingdom
              was in on the joke.
            </p>
            <div className="my-6 w-full overflow-y-auto">
              <table className="w-full">
                <thead>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <th className="border px-4 py-2 text-left font-bold [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      King&#39;s Treasury
                    </th>
                    <th className="border px-4 py-2 text-left font-bold [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      People&#39;s happiness
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Empty
                    </td>
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Overflowing
                    </td>
                  </tr>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Modest
                    </td>
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Satisfied
                    </td>
                  </tr>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Full
                    </td>
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Ecstatic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The king, seeing how much happier his subjects were, realized the
              error of his ways and repealed the joke tax. Jokester was declared
              a hero, and the kingdom lived happily ever after.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The moral of the story is: never underestimate the power of a good
              laugh and always be careful of bad ideas.
            </p>
          </article>
        </main>
      </>
    );
  }

  // Fallback for unexpected cases
  return <h1>Not Found</h1>;
}
