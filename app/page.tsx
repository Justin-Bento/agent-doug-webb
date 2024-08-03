import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function page() {
  return (
    <>
    <Navigation />
      <main className="min-h-dvh space-y-20 my-20">
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h1 className="text-3xl capitalize font-bold tracking-tight dark:text-white">Welcome to section 1</h1>
            <p className=""></p>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h2 className="text-3xl capitalize font-bold tracking-tight dark:text-white">Welcome to section 2</h2>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h3 className="text-3xl capitalize font-bold tracking-tight dark:text-white">Welcome to section 3</h3>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h4 className="text-3xl capitalize font-bold tracking-tight dark:text-white">Welcome to section 4</h4>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h5 className="text-3xl capitalize font-bold tracking-tight dark:text-white">Welcome to section 5</h5>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h6 className="text-3xl capitalize font-bold tracking-tight dark:text-white">Welcome to section 6</h6>
          </div>
        </section>
      </main>
    <Footer/>
    </>
  );
}
