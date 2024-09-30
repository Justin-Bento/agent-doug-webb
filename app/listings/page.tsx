import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import BackgroundPattern from "@/components/BackgroundPattern";
import { TbSearch } from "react-icons/tb";

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
            <Card className="border max-w-xl flex items-center justify-between gap-2 py-2 px-4 bg-transparent border-black/40 dark:border-white/50 dark:bg-[#16151b]">
              <p className="text-sm text-black/50 dark:text-white/50">Search</p>
              <TbSearch className="text-black/50 dark:text-white/50" />
            </Card>
            <Card className="border-0 bg-transparent shadow-none flex justify-start md:justify-end">
              <Button variant="ghost" size="sm" className="dark:bg-[#16151b]">
                Sort By
              </Button>
              <Button variant="ghost" size="sm" className="dark:bg-[#16151b]">
                Latest Price
              </Button>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-12 mt-16 mb-32">
            {Array.from({ length: 6 }, (_, index) => (
              <Card
                key={index}
                className="col-span-4 ring-1 ring-black/10 rounded-xl bg-transparent"
              >
                <CardHeader className="relative aspect-[16/10] p-0 pb-6 overflow-hidden">
                  <Image
                    fill
                    src="/media/img/dillon-kydd-3Ignkeds3w8-unsplash.jpg"
                    alt=""
                    className="object-cover rounded-t-xl"
                  />
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="mt-1 text-2xl/8 font-medium capitalize text-gray-950 dark:text-white">
                    Whispering Pines Estate
                  </p>
                  <p className="mt-2 text-sm/6 text-black/60 dark:text-white/60 line-clamp-3">
                    Nestled among tall, serene pines, Whispering Pines Estate
                    offers a tranquil retreat with modern amenities and
                    breathtaking forest views. Ideal for nature lovers, this
                    charming property combines rustic elegance with contemporary
                    comfort.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 mt-4 bg-transparent"
                  >
                    View Property<span aria-hidden="true">→</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
