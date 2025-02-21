import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { PROPERTY_LISTINGS_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { TbBoxModel, TbBoxModel2 } from "react-icons/tb";
import { PropertyListings } from "@/sanity/types"; // Import the generated type

export default async function Page({
  params,
}: {
  params: { slug: string }; // Fixed: Removed `Promise`
}) {
  const { data: post } = await sanityFetch<PropertyListings>({
    query: PROPERTY_LISTINGS_BY_SLUG_QUERY,
    params: { slug: params.slug }, // Fixed: Pass the slug directly
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12 space-y-32">
      <PropertyIntroduction
        Price={post.Price}
        Title={post.title}
        Description={post.Statement}
        Media={post.mainImage}
      />
      <Features Objects={post.listingInformation?.features} />
      <PropertyInterior />
      <PropertyLocation
        Address={post.listingInformation?.location?.address}
        Country={post.listingInformation?.location?.country}
        ZipCode={post.listingInformation?.location?.zipcode}
        City={post.listingInformation?.location?.city}
      />
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

// Define prop types for each component
interface PropertyIntroductionProps {
  Price?: number;
  Title?: string;
  Description?: string;
  Media?: PropertyListings["mainImage"];
}

function PropertyIntroduction({
  Price,
  Title,
  Description,
  Media,
}: PropertyIntroductionProps) {
  // Define a default image object to use if Media is undefined
  const defaultImage = {
    _type: "image",
    asset: {
      _ref: "default-image-ref", // Replace with a valid reference or use a fallback URL
      _type: "reference",
    },
  };

  // Use Media if defined, otherwise use the defaultImage
  const imageSource = Media || defaultImage;

  return (
    <section className="w-full gap-2">
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
          src={urlFor(imageSource).url()} // Use the fallback imageSource
          alt={`This is an image of ${Title}`}
          className="object-cover object-center rounded-xl"
        />
      </div>
    </section>
  );
}

interface FeaturesProps {
  Objects?: string[];
}

function Features({ Objects }: FeaturesProps) {
  return (
    <section className="">
      <div className="space-y-2">
        <h2 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
          Features
        </h2>
        <ul role="list" className="divide-y divide-gray-100">
          {Objects?.map((feature, index) => (
            <li key={index} className="text-md/6 text-gray-900">
              <div className="flex items-center gap-4">
                <div className="py-4">{index + 1}.</div>
                <div className="py-4">{feature}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PropertyInterior() {
  return (
    <section className="">
      <div className="space-y-2">
        <h3 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
          Interior
        </h3>
      </div>
    </section>
  );
}

interface PropertyLocationProps {
  Address?: string;
  Country?: string;
  ZipCode?: string;
  City?: string;
}

function PropertyLocation({
  Address,
  Country,
  ZipCode,
  City,
}: PropertyLocationProps) {
  return (
    <section className="">
      <div className="space-y-2">
        <h4 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white">
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
