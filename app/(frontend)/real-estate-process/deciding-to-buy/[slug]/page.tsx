import { sanityFetch } from "@/sanity/lib/live";
import { RE_PROCESS_POSTS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import TypographyDemo from "@/components/TypographyDemo";

type PostIndexProps = { params: { slug: string; title: string } };

export default async function Page({ params }: PostIndexProps) {
  const { data: post } = await sanityFetch({
    query: RE_PROCESS_POSTS_QUERY,
    params: { slug: params.slug },
  });
  if (!post) {
    notFound();
  }
  return (
    <>
      <Navigation />
      <main className="wrapper mb-24 grid-cols-1 gap-6 space-y-8 p-12 min-h-dvh max-w-[100ch]">
        {post ? (
          <section className="space-y-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize">
              {post.title || "News title is not available."}
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
              {post.description || "Description not available."}
            </p>
            <Divider />
          </section>
        ) : (
          <p>Loading...</p>
        )}
        <TypographyDemo />
        <section className="">
          <hr className="pb-4" />
          <Link href="/posts">&larr; Return to index</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
