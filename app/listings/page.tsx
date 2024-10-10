import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import BackgroundPattern from "@/components/BackgroundPattern";
import { TbSearch } from "react-icons/tb";
import Link from "next/link";
import { createSlug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Listings - AgentWebb",
  description:
    "The only website that provides all the information you need about Real Estate transactions. Stay one step ahead of the process, educate yourself on upcoming procedures, and be prepared for any red flags along the way",
};

export default function page() {
  return (
    <div>
      <Navigation />
      <main className="space-y-24">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
              Listings.
            </h1>
          </div>
        </section>
        <section className="wrapper min-h-[100dvh]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Card className="border max-w-xl flex items-center justify-between gap-2 py-2 px-4 bg-transparent border-black/40 dark:border-white/50">
              <p className="text-sm text-black/50 dark:text-white/50">Search</p>
              <TbSearch className="text-black/50 dark:text-white/50" />
            </Card>
            <Card className="border-0 bg-transparent dark:bg-transparent shadow-none flex gap-4Fixe justify-start md:justify-end">
              <Button
                variant="ghost"
                size="sm"
                className="dark:bg-[#16151b]"
              >
                Sort By
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="dark:bg-[#16151b]"
              >
                Latest Price
              </Button>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-12 mt-16 mb-32">
            {listings.map((property, index) => {
              return (
                <Card
                  key={index}
                  className="col-span-4 ring-1 ring-black/10 rounded-xl bg-transparent"
                >
                  <CardHeader className="relative aspect-[16/10] p-0 pb-6 overflow-hidden">
                    <Image
                      fill
                      src={`/media/img/${property.media}`}
                      alt=""
                      className="object-cover object-center rounded-t-xl"
                    />
                  </CardHeader>
                  <CardContent className="mt-4">
                    <p className="text-sm/6">{property.price}</p>
                    <p className="mt-1 text-2xl/8 font-medium capitalize text-gray-950 dark:text-white">
                      {property.title}
                    </p>
                    <p className="mt-2 text-base/6 text-black/60 dark:text-white/60 line-clamp-3">{property.summary}</p>
                    <Link href={`listings/${createSlug(property.title)}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 mt-4 bg-transparent"
                      >
                        View Property<span aria-hidden="true">→</span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const listings = [
  {
    price: "$599,000",
    title: "Maple Ridge Estates",
    summary:
      "Spacious family home in Halifax. 4 bedrooms, large backyard, and minutes from downtown. Ideal for growing families!",
    alt: "filter description for an image",
    media: "b746b508b0c9405df110ebabbf09c983-cc_ft_960.jpg",
  },
  {
    price: "$799,000",
    title: "Rocky Summit Retreat",
    summary:
      "This cozy bungalow features 3 bedrooms, 2 baths, and a spacious backyard. Located in a friendly neighborhood, it’s close to parks, schools, and shopping. Perfect for families seeking comfort and convenience!",
    alt: "filter description for an image",
    media: "dillon-kydd-3Ignkeds3w8-unsplash.jpg",
  },
  {
    price: "$1,149,000",
    title: "Cedarbrook Haven",
    summary:
      "Serene lakeside property with breathtaking views! This 4-bedroom home offers a spacious deck, fireplace, and direct access to the water. Ideal for nature lovers and outdoor enthusiasts seeking tranquility and adventure.",
    alt: "filter description for an image",
    media: "Investment_Opportunities.jpg",
  },
  {
    price: "$750,000",
    title: "Aurora Shores Villas",
    summary:
      "Spacious 4-bedroom, 3-bath home in a quiet neighborhood. Features a large backyard, modern kitchen, and finished basement. Close to schools, parks, and shopping. Perfect for growing families looking for community and comfort!",
    alt: "filter description for an image",
    media: "pexels-curtis-adams-1694007-4258275.jpg",
  },
  {
    price: "$450,000",
    title: "Mapleleaf Manor",
    summary:
      "Beautifully restored 3-bedroom heritage home with original woodwork and modern updates. Enjoy a private garden and proximity to historic sites, cafés, and shops. Ideal for those seeking a unique blend of history and modern living!",
    alt: "filter description for an image",
    media: "dillon-kydd-3Ignkeds3w8-unsplash.jpg",
  },
  {
    price: "$1,250,000",
    title: "Osprey Lake Cottages",
    summary:
      "Contemporary 3-bedroom townhome with open-plan living, gourmet kitchen, and rooftop terrace. Located near vibrant local shops and parks, it's perfect for those wanting urban convenience with a touch of elegance!",
    alt: "filter description for an image",
    media: "The-Neighbourhoods-of-Mount-Pleasant-Towns.jpg",
  },
];
