import { sanityFetch } from "@/sanity/lib/live";
import { RE_PROCESS_ARTICLE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import { PortableText } from "next-sanity";

type PostIndexProps = { params: { slug: string; title: string } };

// Set ISR revalidation at the route level
export const revalidate = 60;

export default async function Page({ params }: PostIndexProps) {
  const { data: post } = await sanityFetch({
    query: RE_PROCESS_ARTICLE_QUERY,
    params: { slug: params.slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="wrapper mb-24 grid-cols-1 gap-6 space-y-8 p-12 min-h-dvh max-w-[100ch]">
        <section className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize">
            {post?.title || "News title is not available."}
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
            {post?.description || "Description not available."}
          </p>
          <Divider />
        </section>
        <article className="prose max-w-[100ch]">
          <PortableText value={post?.body} />
        </article>
        <section>
          <hr className="pb-4" />
          <Link href="/real-estate-process/deciding-to-buy">
            &larr; Return to Deciding To Buy Process
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
