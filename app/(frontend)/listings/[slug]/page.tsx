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
      <PropertyLocation
        Address={post.listingInformation.location.address}
        Country={post.listingInformation.location.country}
        ZipCode={post.listingInformation.location.zipcode}
        City={post.listingInformation.location.city}
      />
      <PropertySquareFeet
        Indoor={post.listingInformation.areaAndLot.indoors}
        Outdoor={post.listingInformation.areaAndLot.outdoors}
      />
      <PropertyFinancialInfo
        FinancialInformation={post.listingInformation.financial}
      />
      <PropertyImage />
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
function PropertyLocation({ Address, Country, ZipCode, City }: any) {
  return (
    <section className="">
      <div className="space-y-2">
        <h4 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
          Location
        </h4>
        <ul className="list-disc ml-8 space-y-4 mt-4">
          <li className="">Address: {Address}</li>
          <li className="">Country: {Country}</li>
          <li className="">Zip Code: {ZipCode}</li>
          <li className="">City: {City}</li>
        </ul>
      </div>
    </section>
  );
}

function PropertySquareFeet({ Indoor, Outdoor }: any) {
  return (
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
              <p className="">{Indoor}</p>
            </Card>
          </li>
          <li className="flex-1">
            <Card className="bg-trasparent px-4 py-5 sm:p-6 space-y-1">
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

function PropertyFinancialInfo({ FinancialInformation }: any) {
  return (
    <section className="">
      <div className="space-y-2">
        <h5 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
          Financial
        </h5>
        <p className="max-w-[100ch] text-balace">{FinancialInformation}</p>
      </div>
    </section>
  );
}

function PropertyImage() {
  return (
    <section className="">
      <div className="space-y-2">
        <h5 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
          Property Images
        </h5>
      </div>
    </section>
  );
}
