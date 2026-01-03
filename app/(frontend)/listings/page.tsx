import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { listings } from "@/lib/data";
import { createSlug } from "@/lib/utils";

export default function page() {
  return (
    <>
      <PageHeader title="Property Listings" />
      <main className="min-h-dvh my-24 space-y-12">
        <ul className="wrapper grid grid-cols-1 md:grid-cols-3 md:col-span-3 gap-6 lg:gap-12">
          {listings.map((house: any) => {
            return (
              <li key={house.id}>
                <Link
                  href={`/listings/${createSlug(house.title)}`}
                  className="overflow-hidden sm:rounded-lg hover:underline hover:animate-pulse hover:opacity-80 hover:cursor-pointer"
                >
                  <div className="relative aspect-video sm:aspect-square sm:rounded-lg">
                    <Image
                      fill
                      src={house.media}
                      alt={house.alt}
                      className="object-cover object-center rounded-lg"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-lg/8 font-medium tracking-normal text-black dark:text-white">
                      {house.title}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
