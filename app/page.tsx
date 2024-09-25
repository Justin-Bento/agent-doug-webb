import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentWebb",
  description:
    "The only website that provides all the information you need about Real Estate transactions. Stay one step ahead of the process, educate yourself on upcoming procedures, and be prepared for any red flags along the way",
};

export default function page() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh space-y-20">
        <section className="relative w-full min-h-[100vh] bg-black">
          {/* Background Image */}
          <div className="absolute z-10 w-full h-full">
            <Image
              fill
              src="/media/img/dillon-kydd-pvdx8c6Y5BY-unsplash.png"
              alt="hero-background"
              className="object-cover object-center"
              priority={true}
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute z-20 w-full h-full bg-black/80"></div>
          {/* Gradient Fade at the Bottom */}
          <div className="absolute z-30 bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
          {/* Centered Hero Content */}
          <div className="relative z-40 mx-auto container px-4 sm:px-6 lg:px-8 flex items-center justify-start min-h-dvh">
            <div className="text-start">
              <p className="text-base font-semibold leading-7 text-accent">
                Get the help you need
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
                Support center
              </h1>
              <p className="mt-4 max-w-3xl text-balance text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
          </div>
        </section>
        {/* End of Section 01 */}
        <section className="mx-auto container px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-5xl text-balance mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl capitalize">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <p className="mt-4 max-w-5xl text-balance text-lg leading-6 text-gray-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ut
            repellat reprehenderit provident obcaecati sapiente excepturi ad
            alias, delectus dolorem, natus aliquam voluptatem beatae illo
            quisquam quasi est, iste minima?
          </p>
          <div className="border border-gray-900 max-w-32 mt-8"></div>
          <div className="w-96 aspect-square bg-gray-200 mt-12"></div>
        </section>
        {/* End of Section 02 */}
      </main>
      <Footer className="mt-36" />
    </>
  );
}
