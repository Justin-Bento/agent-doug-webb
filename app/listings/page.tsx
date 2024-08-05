import React from "react";
import Heading from "../../components/Heading";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";

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
        <section id="real-estate-properties"></section>
      </main>
      <Footer />
    </div>
  );
}
