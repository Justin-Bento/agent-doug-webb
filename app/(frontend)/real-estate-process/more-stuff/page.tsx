import Link from "next/link";
// Custom Components
import Navigation from "@/components/Navigation";
import BackgroundPattern from "@/components/BackgroundPattern";
import { Card } from "@/components/ui/card";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
// Sanity Imports
import { sanityFetch } from "@/sanity/lib/live";
import { RE_PROCESS_POSTS_QUERY_MORESTUFF } from "@/sanity/lib/queries";

// Set ISR revalidation at the route level
export const revalidate = 60;

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: RE_PROCESS_POSTS_QUERY_MORESTUFF });
  return (
    <>
      <Navigation />
      <main className="space-y-24 mb-24 ">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
              Real-Estate Process.
            </h1>
          </div>
        </section>
        <section className="wrapper max-w-[100ch]">
          <h2 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            Deciding To Sell
          </h2>
          <Divider className=" my-8" />
          <ul className="grid grid-cols-1 gap-4">
            {posts.map((post) => (
              <li key={post?._id}>
                <Link href={`/real-estate-process/deciding-to-sell/${post?.slug?.current}`}>
                  <Card className="bg-transparent hover:border-gray-400 active:ring-primary hover:bg-white/70 transition-all">
                    <div className="px-4 py-5 sm:p-6 space-y-2">
                      <h2 className="text-xl font-semibold">{post?.title}</h2>
                      <p className="line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias voluptatem sint,
                        expedita facilis enim. Velit rem officia fugiat libero eveniet animi nemo minus perspiciatis
                        maxime nihil beatae, atque esse.
                      </p>
                    </div>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
