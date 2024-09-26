import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import BackgroundPattern from "@/components/BackgroundPattern";

export const metadata: Metadata = {
  title: "Listings - AgentWebb",
  description:
    "The only website that provides all the information you need about Real Estate transactions. Stay one step ahead of the process, educate yourself on upcoming procedures, and be prepared for any red flags along the way",
};

export default function page() {
  return (
    <div>
      <Navigation />
      <main className="">
        <section className="relative overflow-hidden h-[50dvh] ">
          <BackgroundPattern className="w-full h-auto z-10 blur-2xl" />
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center container mx-auto">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 data-[dark]:text-white sm:text-6xl">
              Listings.
            </h1>
          </div>
        </section>
        <div className="container mx-auto min-h-dvh px-4 py-5 sm:p-6 my-20">
          <section id="header"></section>
          <section id="filter">
            <Card className="p-2 bg-black/15">
              <ul className="flex items-center gap-4 list-none">
                <li>
                  <Button
                    variant="link"
                    size="sm"
                  >
                    For Sale
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    size="sm"
                  >
                    Rent
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    size="sm"
                  >
                    For Purchase
                  </Button>
                </li>
              </ul>
            </Card>
          </section>
          <section id="real-estate-properties">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
              <CardWFooter className="bg-black/30" />
              <CardWFooter className="bg-black/30" />
              <CardWFooter className="bg-black/30" />
              <CardWFooter className="bg-black/30" />
              <CardWFooter className="bg-black/30" />
              <CardWFooter className="bg-black/30" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function CardWFooter({ className }: any) {
  return (
    <Card className="ring-1 ring-black rounded">
      <CardHeader className="p-0 pb-6 overflow-hidden">
        <Image
          src=""
          alt=""
          className="w-full aspect-video bg-black rounded-t"
        />
      </CardHeader>
      <CardContent>
        <p className="text-lg font-extrabold tracking-wide font-display">Whispering Pines Estate</p>
        <p className="line-clamp-3">
          Nestled among tall, serene pines, Whispering Pines Estate offers a tranquil retreat with modern amenities and
          breathtaking forest views. Ideal for nature lovers, this charming property combines rustic elegance with
          contemporary comfort.
        </p>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          size="sm"
          className="flex items-center gap-1"
        >
          Hello World <span aria-hidden="true">→</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
