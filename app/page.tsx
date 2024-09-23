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
          <div className="relative z-40 w-full min-h-[100vh] flex items-center justify-center px-6 sm:px-12">
            <div className="text-start">
              <h1 className="max-w-4xl text-white text-4xl sm:text-5xl lg:text-6xl font-bold capitalize">
                Your Guide to Understanding Real Estate Transactions.
              </h1>
              <p className="mt-4 max-w-4xl text-xl sm:text-2xl font-medium text-white leading-relaxed mx-auto">
                Radiant helps you sell more by revealing sensitive information
                about your customers.
              </p>
              {/* Call to Action */}
            </div>
          </div>
        </section>
      </main>
      <Footer className="mt-36" />
    </>
  );
}
