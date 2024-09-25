import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

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
          <div className="absolute z-10 w-full h-full">
            {/* Background Image */}
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
              <h1 className="mt-2 font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-6xl/[0.8] md:text-8xl/[0.8] capitalize">
                Your Guide to the Real Estate Transaction Process
              </h1>
              <p className="mt-4 max-w-3xl text-balance text-lg leading-8 text-gray-300">
                Be one step ahead of real-estate transactions with our un-biased
                guide. As we give you an unfiltered guide about the Real-Estate
                Transaction without any favoritism so you can be educated on the
                procedures coming at you and ready for any red flags along the
                way.
              </p>
              <span className="block mt-8 space-x-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-white shadow-md whitespace-nowrap text-base font-medium text-black data-[disabled]:bg-gray-950 data-[hover]:bg-white/80 data-[disabled]:opacity-40"
                >
                  Get started
                </Link>
                <Link
                  href="#"
                  className="relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] whitespace-nowrap text-base font-medium text-white data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40"
                >
                  See pricing
                </Link>
              </span>
            </div>
          </div>
        </section>
        {/* End of Section 01 */}
        <section
          id="02"
          className="grid grid-cols-12 gap-12 mx-auto container px-4 sm:px-6 lg:px-8 min-h-[50dvh]"
        >
          {/* Title Section */}
          <div className="col-span-12 flex flex-col items-start justify-center min-h-[25vh] gap-6">
            <h2 className="max-w-3xl font-display  text-pretty text-4xl font-medium tracking-tight text-black data-[dark]:text-white sm:text-6xl">
              Quick Introduction
            </h2>
            {/* Divider */}
            <div className="w-full max-w-[6rem] ring-1 ring-black"></div>
            <p className="max-w-3xl text-lg">
              Doug began his journey in residential investment real estate in
              1986, which eventually led to a full-time career in real estate
              sales in 1997 with RE/MAX. To offer the level of service that both
              he and his clients valued, Doug transitioned to Right At Home
              Realty.
            </p>
          </div>
        </section>
        {/* End of Section 02 */}
        <section className="grid grid-cols-12 gap-4 mx-auto container px-4 sm:px-6 lg:px-8">
          {/* <!-- Title Section --> */}
          <div className="col-span-12 w-full">
            <h1 className=" max-w-3xl font-display text-pretty text-4xl font-medium tracking-tight text-black data-[dark]:text-white sm:text-6xl sm">
              View Listings
            </h1>
          </div>
          {/* <!-- Divider --> */}
          <div className="col-span-12  mb-6 mt-3 w-full max-w-[6rem] ring-1 ring-black"></div>
          {/* <!-- 3x3 Grid Section --> */}
          <div className="col-span-12 grid grid-cols-3 gap-4">
            <div className="bg-black aspect-square">&nbsp;</div>
            <div className="bg-black aspect-square">&nbsp;</div>
            <div className="bg-black aspect-square">&nbsp;</div>
            <div className="bg-black aspect-square">&nbsp;</div>
            <div className="bg-black aspect-square">&nbsp;</div>
            <div className="bg-black aspect-square">&nbsp;</div>
            <div className="bg-black aspect-square">&nbsp;</div>
            <div className="bg-black aspect-square">&nbsp;</div>
            <div className="bg-black aspect-square">&nbsp;</div>
          </div>
          {/* <!-- Loader --> */}
          <div className="col-span-12 mt-8">
            <button
              type="button"
              className="rounded-full bg-black px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View More
            </button>
          </div>
        </section>
        {/* End of Section 03 */}
        <section className="relative w-full min-h-[100vh] bg-primary">
          <div className="absolute z-10 w-full h-full">
            {/* Background Image */}
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
              <h1 className="mt-2 font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-6xl/[0.8] md:text-7xl/[0.8] capitalize">
                Your Guide to the Real Estate Transaction Process
              </h1>
              <p className="mt-4 max-w-3xl text-balance text-md leading-7 text-gray-300">
                Be one step ahead of real-estate transactions with our un-biased
                guide. As we give you an unfiltered guide about the Real-Estate
                Transaction without any favoritism so you can be educated on the
                procedures coming at you and ready for any red flags along the
                way.
              </p>
              <span className="block mt-8 space-x-4">
                <Link
                  href="#"
                  className="relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] whitespace-nowrap text-base font-medium text-white data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40"
                >
                  Contact Now
                </Link>
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer className="mt-0" />
    </>
  );
}
