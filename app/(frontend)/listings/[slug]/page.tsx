import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { PROPERTY_LISTINGS_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { TbBoxModel, TbBoxModel2 } from "react-icons/tb";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>; // Fixed: Removed `Promise`
}) {
  const { data: post } = await sanityFetch({
    query: PROPERTY_LISTINGS_BY_SLUG_QUERY,
    params: await params, // Fixed: Pass the slug directly
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12 space-y-32">
      <section className="w-full gap-2">
        <div className="min-h-[30dvh] flex flex-col items-center justify-center">
          <p className="text-sm/6 font-mono">
            {post.Price
              ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "CAD",
                }).format(post.Price)
              : "Price not available"}
          </p>
          <h1 className="text-4xl font-bold text-balance">{post.title}</h1>
          <p className="text-lg max-w-[80ch] text-balance text-center">
            {post.Statement}
          </p>
        </div>
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            fill
            src={urlFor(post.mainImage).url()} // Use the fallback imageSource
            alt={`This is an image of ${post.title}`}
            className="object-cover object-center rounded-xl"
          />
        </div>
      </section>
      {/* 
        - End of the Hero Section
          - This section includes:
            * A formatted price display (in CAD currency) with a fallback for missing prices.
            * The property title and a descriptive statement/description.
            * A responsive image container with a 16:10 aspect ratio, ensuring the image covers the space and is visually appealing.
      */}
      <section className="">
        <div className="space-y-2">
          <h2 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
            Features
          </h2>
          <ul role="list" className="divide-y divide-gray-100">
            {post.listingInformation?.features?.map(
              (feature: string, index: number) => (
                <li key={index} className="text-md/6 text-gray-900">
                  <div className="flex items-center gap-4">
                    <div className="py-4">{index + 1}.</div>
                    <div className="py-4">{feature}</div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
      {/* 
        - End of the Features Section
          - This section includes:
            * An unordered list of features within the properties indoor, outdoor and location facinity.
            * Custom list to seperate the information in a legible, yet appealing manner.
      */}
      <section className="">
        <div className="space-y-2">
          <h3 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
            Interior
          </h3>
        </div>
      </section>
      {/* 
        - End of the Interior Section
          - This section includes:
            * Noting at the moment but will change it later down the line.
      */}
      <section className="">
        <div className="space-y-2">
          <h4 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
            Location
          </h4>
          <ul className="list-disc ml-8 space-y-4 mt-4">
            <li className="">
              Address: {post.listingInformation?.location?.address}
            </li>
            <li className="">
              Country: {post.listingInformation?.location?.country}
            </li>
            <li className="">
              Zip Code: {post.listingInformation?.location?.zipcode}
            </li>
            <li className="">
              City: {post.listingInformation?.location?.city}
            </li>
          </ul>
        </div>
      </section>
      {/* 
        - End of the Location Section
          - This section includes:
            * Fake locations of the dummy places to showcase how the location is shown on the property.
      */}
      <PropertySquareFeet
        Indoor={post.listingInformation?.areaAndLot?.indoors}
        Outdoor={post.listingInformation?.areaAndLot?.outdoors}
      />
      <PropertyFinancialInfo
        FinancialInformation={post.listingInformation?.financial}
      />
      <PropertyImage />
    </main>
  );
}

interface PropertySquareFeetProps {
  Indoor?: string;
  Outdoor?: string;
}

function PropertySquareFeet({ Indoor, Outdoor }: PropertySquareFeetProps) {
  return (
    <section className="">
      <div className="space-y-2">
        <h5 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
          Area & Lot
        </h5>
        <ul className="overflow-hidden flex flex-col md:flex-row md:space-evenly gap-12">
          <li className="flex-1">
            <Card className="bg-transparent px-4 py-5 sm:p-6 space-y-1">
              <TbBoxModel className="size-10" />
              <p className="text-xl font-medium">Indoors</p>
              <p className="">{Indoor}</p>
            </Card>
          </li>
          <li className="flex-1">
            <Card className="bg-transparent px-4 py-5 sm:p-6 space-y-1">
              <TbBoxModel2 className="size-10" />
              <p className="text-xl font-medium">Outdoors</p>
              <p className="">{Outdoor}</p>
            </Card>
          </li>
        </ul>
      </div>
    </section>
  );
}

interface PropertyFinancialInfoProps {
  FinancialInformation?: string;
}

function PropertyFinancialInfo({
  FinancialInformation,
}: PropertyFinancialInfoProps) {
  return (
    <section className="">
      <div className="space-y-2">
        <h5 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
          Financial
        </h5>
        <p className="max-w-[100ch] text-balance">{FinancialInformation}</p>
      </div>
    </section>
  );
}

function PropertyImage() {
  return (
    <section className="">
      <div className="space-y-2">
        <h5 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
          Property Images
        </h5>
      </div>
    </section>
  );
}
