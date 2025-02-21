import { Card } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { PROPERTY_LISTINGS_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TbBoxModel, TbBoxModel2 } from "react-icons/tb";

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
    <main className="container mx-auto grid grid-cols-1 p-12 space-y-24">
      <section className="">
        <div className="min-h-[25dvh] flex flex-col items-center justify-center text-center text-balance space-y-4">
          <p className="text-sm">
            {post.Price
              ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "CAD",
                }).format(post.Price)
              : "Price not available"}
          </p>
          <h1 className="text-4xl font-bold">{post?.title}</h1>
          <p className="text-md">{post?.Statement}</p>
        </div>
        <div className="relative aspect-[16/10] p-0 pb-6 overflow-hidden">
          <Image
            fill
            src={urlFor(post.mainImage)?.url() || ""}
            alt={`Property of ${post.title}`}
            className="object-cover object-center rounded-xl"
          />
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h2 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
            Features
          </h2>
          <ul role="list" className="divide-y divide-gray-100">
            {post.listingInformation.features.map(
              (feature: "string", index: number) => {
                return (
                  <li key={index} className="text-md/6 text-gray-900">
                    <div className="flex items-center gap-4">
                      <div className="py-4">{index++}.</div>
                      <div className="py-4">{feature}</div>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h3 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-whites">
            Interior
          </h3>
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h4 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
            Location
          </h4>
          <ul className="list-disc ml-8 space-y-4 mt-4">
            <li className="">
              Address: {post.listingInformation.location.address}
            </li>
            <li className="">
              Country: {post.listingInformation.location.country}
            </li>
            <li className="">
              ZipCode: {post.listingInformation.location.zipcode}
            </li>
            <li className="">City: {post.listingInformation.location.city}</li>
          </ul>
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h5 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            Area & Lot
          </h5>
          <ul className="overflow-hidden flex flex-col md:flex-row md:space-evenely gap-12">
            <li className="flex-1">
              <Card className="bg-transparent px-4 py-5 sm:p-6 space-y-1">
                <TbBoxModel className="size-10" />
                <p className="text-xl font-medium">Indoors</p>
                <p className="">{post.listingInformation.areaAndLot.indoors}</p>
              </Card>
            </li>
            <li className="flex-1">
              <Card className="bg-trasparent px-4 py-5 sm:p-6 space-y-1">
                <TbBoxModel2 className="size-10" />
                <p className="text-xl font-medium">Outdoors</p>
                <p className="">
                  {post.listingInformation.areaAndLot.outdoors}
                </p>
              </Card>
            </li>
          </ul>
        </div>
      </section>
      <section className="">
        <div className="space-y-2">
          <h5 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            Financial
          </h5>
          <p className="max-w-[100ch] text-balace">
            {post.listingInformation.financial}
          </p>
        </div>
      </section>
    </main>
  );
}
