import { sanityFetch } from "@/sanity/lib/live";
import { PROPERTY_LISTINGS_POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";

interface PropertyDemoProps {
  image: string;
  altTitle: string;
  statement: string;
}
const PropertyDemo: React.FC<PropertyDemoProps> = ({
  image,
  altTitle,
  statement,
}) => {
  return (
    <div className="overflow-hidden  grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative aspect-[16/10] p-0 pb-6 overflow-hidden">
        <Image
          fill
          src={urlFor(image)?.url() || ""}
          alt={altTitle || "Property"}
          className="object-cover object-center rounded-xl"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="">{statement}</p>
        <Button variant="link" className="underline">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: PROPERTY_LISTINGS_POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12 space-y-32">
      <section className="w-full min-h-[50dvh] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      </section>
      <PropertyDemo
        image={post?.mainImage}
        altTitle={post.title}
        statement={post.Statement}
      />
      <section className="">
        <div className="space-y-2">
          <h2 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            Features
          </h2>
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h3 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-whites">
            Interior
          </h3>
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h4 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            Location
          </h4>
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h5 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            Area & Lot
          </h5>
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h5 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            Financial
          </h5>
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h5 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            Property Images
          </h5>
        </div>
      </section>
    </main>
  );
}
