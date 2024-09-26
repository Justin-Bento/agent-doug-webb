import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
        <section className="relative w-full min-h-[100vh]">
          <div className="absolute z-10 w-full h-full overflow-hidden">
            <Image
              fill
              src="/media/img/dillon-kydd-pvdx8c6Y5BY-unsplash.jpg"
              alt=""
              className=" object-fill object-bottom"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute z-20 w-full h-full bg-black/80"></div>
          {/* Gradient Fade at the Bottom */}
          <div className="absolute z-30 bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
          {/* Centered Hero Content */}
          <div className="relative z-40 wrapper flex items-center justify-start min-h-dvh">
            <div className="text-start">
              <p className="text-base font-semibold leading-7 text-accent">Get the help you need</p>
              <h1 className="mt-2 font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-6xl/[0.8] md:text-8xl/[0.8] capitalize">
                Your Guide to the Real Estate Transaction Process
              </h1>
              <p className="mt-4 max-w-3xl text-balance text-lg leading-8 text-gray-300">
                Be one step ahead of real-estate transactions with our un-biased guide. As we give you an unfiltered
                guide about the Real-Estate Transaction without any favoritism so you can be educated on the procedures
                coming at you and ready for any red flags along the way.
              </p>
              <span className="block mt-8 space-x-4">
                <Link
                  href="/listings"
                  className="inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-white shadow-md whitespace-nowrap text-base font-medium text-black data-[disabled]:bg-gray-950 data-[hover]:bg-white/80 data-[disabled]:opacity-40"
                >
                  View Listings
                </Link>
                <Link
                  href="/real-estate-process"
                  className="relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] whitespace-nowrap text-base font-medium text-white data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40"
                >
                  Real-Estate Process
                </Link>
              </span>
            </div>
          </div>
        </section>
        {/* End of Landing Area  */}
        <section className="grid grid-cols-12 gap-12 wrapper min-h-[50dvh]">
          {/* Title Section */}
          <div className="col-span-12 flex flex-col items-center justify-center min-h-[25vh] gap-6">
            <h2 className="max-w-3xl font-display text-pretty text-4xl font-medium tracking-tight text-black data-[dark]:text-white sm:text-6xl">
              Quick Introduction
            </h2>
            {/* Divider */}
            <div className="w-full max-w-[6rem] ring-1 ring-black"></div>
            <p className="max-w-3xl text-lg text-center">
              Doug began his journey in residential investment real estate in 1986, which eventually led to a full-time
              career in real estate sales in 1997 with RE/MAX. To offer the level of service that both he and his
              clients valued, Doug transitioned to Right At Home Realty.
            </p>
          </div>
        </section>
        {/* End of Sub-Hero Area - Quick Section */}
        <section className="relative wrapper">
          <div className="p-3 max-w-4xl mx-auto text-center">
            <h2 className="font-display max-w-4xl text-balance text-4xl font-medium capitalize tracking-tight text-black data-[dark]:text-white sm:text-6xl">
              Everything you need for the Real-Estate Transaction Process.
            </h2>
          </div>
          {/*  End of Sub-Hero Area - Title - Real Estate Transaction Process */}
          <div className="w-full grid grid-cols-12 gap-x-20 mt-16 overflow-hidden">
            <div className="col-span-12 lg:col-span-5 flex justify-center relative aspect-square lg:min-h-[75vh]">
              <Image
                fill
                src="/media/img/pexels-cameron-michael-smith-328251-922451.jpg"
                className="object-cover object-center h-auto max-h-[100vh] rounded" // Ensure it maintains aspect ratio
                alt="rough ocean water"
              />
            </div>
            {/*  End of Sub-Hero Area - Media - Real Estate Transaction Process */}
            <div className="col-span-6 space-y-6 overflow-y-scroll max-h-[80dvh]">
            </div>
            {/*  End of Sub-Hero Area - Content - Real Estate Transaction Process */}
          </div>
        </section>
        {/* End of Sub-Hero Area - Real Estate Transaction Process */}
        <section className="grid grid-cols-12 gap-4 wrapper">
          {/* <!-- Title Section --> */}
          <div className="col-span-12 w-full">
            <h1 className=" max-w-3xl font-display text-pretty text-4xl font-medium tracking-tight text-black data-[dark]:text-white sm:text-6xl sm">
              View Listings
            </h1>
          </div>
          {/* <!-- Divider --> */}
          <div className="col-span-12  mb-6 mt-3 w-full max-w-[6rem] ring-1 ring-black"></div>
          {/* <!-- 3x3 Grid Section --> */}
          <ul className="col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className="relative aspect-video sm:aspect-square">
              <Image fill src="/media/img/b746b508b0c9405df110ebabbf09c983-cc_ft_960.jpg" alt="" className="object-cover object-center" />
            </li>
            <li className="relative aspect-video sm:aspect-square">
              <Image fill src="/media/img/dillon-kydd-3Ignkeds3w8-unsplash.jpg" alt="" className="object-cover object-center" />
            </li>
            <li className="relative aspect-video sm:aspect-square">
              <Image fill src="/media/img/Investment_Opportunities.jpg" alt="" className="object-cover object-center" />
            </li>
            <li className="relative aspect-video sm:aspect-square">
              <Image fill src="/media/img/pexels-curtis-adams-1694007-4258275.jpg" alt="" className="object-cover object-center" />
            </li>
            <li className="relative aspect-video sm:aspect-square">
              <Image fill src="/media/img/dillon-kydd-3Ignkeds3w8-unsplash.jpg" alt="" className="object-cover object-center" />
            </li>
            <li className="relative aspect-video sm:aspect-square">
              <Image fill src="/media/img/The-Neighbourhoods-of-Mount-Pleasant-Towns.jpg" alt="" className="object-cover object-center" />
            </li>
          </ul>
          {/* <!-- Loader --> */}
          <div className="col-span-12 mt-8">
            <button className="rounded-full bg-black px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              View More
            </button>
          </div>
        </section>
        {/* End of Content Area  */}
        <section className="relative w-full min-h-[100vh]">
          {/* Background Image */}
          <div className="absolute z-10 w-full h-full overflow-hidden">
            <Image
              fill
              src="/media/img/patrick-tomasso-gMes5dNykus-unsplash.jpg"
              alt=""
              className="object-cover object-bottom"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute z-20 w-full h-full bg-black/80"></div>
          {/* Gradient Fade at the Bottom */}
          <div className="absolute z-30 bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
          {/* Centered Hero Content */}
          <div className="relative z-40 mx-auto container px-4 sm:px-6 lg:px-8 flex items-center justify-start min-h-dvh">
            <div className="text-start">
              <p className="text-base font-semibold leading-7 text-accent">Get the help you need</p>
              <h1 className="mt-2 font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-6xl/[0.8] md:text-7xl/[0.8] capitalize">
                Right at Home Agents Make it Easy
              </h1>
              <p className="mt-4 max-w-5xl text-balance text-md leading- text-gray-300">
                Be one step ahead of real-estate transactions with our un-biased guide. As we give you an unfiltered
                guide about the Real-Estate Transaction without any favoritism so you can be educated on the procedures
                coming at you and ready for any red flags along the way.
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
        {/* End of Listings Area  */}
      </main>
      <Footer className="mt-0" />
    </>
  );
}
