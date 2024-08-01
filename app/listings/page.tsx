import React from "react";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function page() {
  let message: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto doloribus aspernatur tenetur officiis quasi numquam eos qui praesentium, at placeat eligendi reiciendis dicta similique sapiente porro quis tempore voluptatibus aliquam?"
  return (
    <div>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6">
        <Heading
          heading="Hello world, from listing page."
          supporting={message}
        />
      </main>
      <Footer />
    </div>
  );
}
