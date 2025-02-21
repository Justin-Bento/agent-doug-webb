import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { PROPERTY_LISTINGS_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: PROPERTY_LISTINGS_BY_SLUG_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12 space-y-32">
      <PropertyIntroduction
        Price={post.price}
        Title={post.title}
        Description={post.Statement}
        Media={post.mainImage}
      />
      <Features Objects={post.listingInformation.features} />
      <PropertyInterior />
    </main>
  );
}

function PropertyIntroduction({ Price, Title, Description, Media }: any) {
  return (
    <section className="w-full  gap-2">
      <div className="min-h-[30dvh] flex flex-col items-center justify-center">
        <p className="text-sm/6 font-mono">
          {Price
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "CAD",
              }).format(Price)
            : "Price not available"}
        </p>
        <h1 className="text-4xl font-bold text-balance">{Title}</h1>
        <p className="text-lg max-w-[80ch] text-balance text-center">
          {Description}
        </p>
      </div>
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          fill
          src={urlFor(Media)?.url() || ""}
          alt={`This is a image of ${Title}`}
          className="object-cover object-center rounded-xl"
        />
      </div>
    </section>
  );
}

function Features({ Objects }: any) {
  return (
    <section className="">
      <div className="space-y-2">
        <h2 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
          Features
        </h2>
        <ul role="list" className="divide-y divide-gray-100">
          {Objects.map((feature: "string", index: number) => {
            return (
              <li key={index} className="text-md/6 text-gray-900">
                <div className="flex items-center gap-4">
                  <div className="py-4">{index++}.</div>
                  <div className="py-4">{feature}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function PropertyInterior() {
  return (
    <section className="">
      <div className="space-y-2">
        <h3 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-whites">
          Interior
        </h3>
      </div>
    </section>
  );
}
