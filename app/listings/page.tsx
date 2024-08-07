import React from "react";
import Heading from "../../components/Heading";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function page() {
  return (
    <div>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6 my-20">
        <section id="header">
          <h1 className="text-4xl tracking-tight font-extrabold font-display capitalize dark:text-white">
            Hello world, from listing page.
          </h1>
          <p className="text-base text-balance mt-2 mb-7 dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto doloribus aspernatur tenetur officiis
            quasi numquam eos qui praesentium, at placeat eligendi reiciendis dicta similique sapiente porro quis
            tempore voluptatibus aliquam?
          </p>
        </section>
        <section id="filter" className="bg-black/10 p-2 my-4 rounded-lg ring-1 ring-black/30">
          <ul className="flex items-center gap-4 list-none">
            <li>
              <Button variant="ghost" size="sm">
                For Sale
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm">
                Rent
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm">
                For Purchase
              </Button>
            </li>
          </ul>
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
      </main>
      <Footer />
    </div>
  );
}

function CardWFooter({ className }: any) {
  return (
    <Card className="ring-1 ring-black rounded">
      <CardHeader className="p-0 pb-6 overflow-hidden">
        <img src="" alt="" className="w-full aspect-video bg-black rounded-t" />
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
        <Button variant="secondary" size="sm" className="flex items-center gap-1">
          Hello World <span aria-hidden="true">→</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
