<<<<<<< HEAD:app/listings/page.tsx
// [x] Create a Route for listings page inside Next.js.
// [x] Creating a UI for the listing page segment.
// [x] Create an unordered list on the listing page has a list item of properties from 1 - 10.
// [x] Link the properties from 1 - 10 inside the listing route.
// [x] Dynamically render these properties with an array.
// [] If the url display anything other than an item 1 through 10  render the not found component.

=======
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import BackgroundPattern from "@/components/BackgroundPattern";
import { TbSearch } from "react-icons/tb";
>>>>>>> bd92058cc93acb3074561e3f05be23f3b5d6b460:app/(frontend)/listings/page.tsx
import Link from "next/link";
import property from "@/lib/property.json";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TbSearch } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="space-y-24">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
              Hello, Listings Page!.
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
              <Button variant="ghost" size="sm" className="dark:bg-[#16151b]">
                Sort By
              </Button>
              <Button variant="ghost" size="sm" className="dark:bg-[#16151b]">
                Latest Price
              </Button>
            </Card>
          </div>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-12 mt-16 mb-32">
            {property.map((list: any, index) => {
              return (
                <>
                  <Card key={index} className="col-span-4 ring-1 ring-black/10 rounded-xl bg-transparent">
                    <CardHeader className="relative aspect-[16/10] p-0 pb-6 overflow-hidden">
                      <Image
                        fill
                        src={`/media/img/${list.media}`}
                        alt=""
                        className="object-cover object-center rounded-t-xl"
                      />
                    </CardHeader>
                    <CardContent className="mt-4">
                      <p className="text-sm/6">{list.price}</p>
                      <p className="mt-1 text-2xl/8 font-medium capitalize text-gray-950 dark:text-white">
                        {list.title}
                      </p>
                      <p className="mt-2 text-base/6 text-black/60 dark:text-white/60 line-clamp-3">{list.summary}</p>
                      <Link href={`listings/${list.id}`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-1 mt-4 bg-transparent">
                          View Property<span aria-hidden="true">→</span>
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
