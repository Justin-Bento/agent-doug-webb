import React from "react";
import Heading from "../../components/Heading";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function page() {
  let message: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto doloribus aspernatur tenetur officiis quasi numquam eos qui praesentium, at placeat eligendi reiciendis dicta similique sapiente porro quis tempore voluptatibus aliquam?"
  return (
    <div>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6 my-20">
        <Heading
          heading="Hello world, from listing page."
          supporting={message}
        />
        <section id="filter" className="bg-gray-300 p-2 my-4 rounded-lg ring-1 ring-gray-400">
          <ul className="flex items-center gap-4 list-none">
            <li>
              <Button variant="ghost" size="sm">For Sale</Button>
            </li>
            <li>
              <Button variant="ghost" size="sm">Rent</Button>
            </li>
            <li>
              <Button variant="ghost" size="sm">For Purchase</Button>
            </li>
          </ul>
        </section>
        <section id="real-estate-properties">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
            <CardWFooter className="bg-gray-300" />
            <CardWFooter className="bg-red-300" />
            <CardWFooter className="bg-blue-300" />
            <CardWFooter className="bg-gray-300" />
            <CardWFooter className="bg-blue-300" />
            <CardWFooter className="bg-red-300" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function CardWFooter({className}: any) {
  return (
    <div className="divide-y divide-gray-900 overflow-hidden rounded-lg bg-white ring-1 ring-gray-900">
      <div className="rounded-lg">
        {/* Content goes here */}
        <div className={cn("bg-gray-300 w-full aspect-video", className)}></div>
      </div>
      <div className="px-4 py-4 sm:p-6 space-y-1">
        {/* Content goes here */}
        <h3 className="text-lg tracking-tight font-bold dark:text-white">Whispering Pines Estate</h3>
        <p className="line-clamp-3">Nestled among tall, serene pines, Whispering Pines Estate offers a tranquil retreat with modern amenities and breathtaking forest views. Ideal for nature lovers, this charming property combines rustic elegance with contemporary comfort.</p>
        <Button variant="secondary" size="sm" className="flex items-center gap-1">Hello World <span aria-hidden="true">→</span></Button>
      </div>
    </div>
  )
}
