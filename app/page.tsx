import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

export default function page() {
  let message: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto doloribus aspernatur tenetur officiis quasi numquam eos qui praesentium, at placeat eligendi reiciendis dicta similique sapiente porro quis tempore voluptatibus aliquam?"
  return (
    <>
    <Navigation />
      <main className="min-h-dvh space-y-20 my-20">
        <section className="container mx-auto px-4 py-5 sm:p-6">
          <Heading heading="Hello, Landing Page!" supporting={message} />
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h1 className="">Welcome to section 1</h1>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h2 className="">Welcome to section 2</h2>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h3 className="">Welcome to section 3</h3>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h4 className="">Welcome to section 4</h4>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h5 className="">Welcome to section 5</h5>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h6 className="">Welcome to section 6</h6>
          </div>
        </section>
      </main>
    <Footer/>
    </>
  );
}
