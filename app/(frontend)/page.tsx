import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { createSlug } from "@/lib/utils";
import Divider from "@/components/Divider";
import { listings } from "@/lib/data";

export const metadata: Metadata = {
  title: "AgentWebb",
  description:
    "The only website that provides all the information you need about Real Estate transactions. Stay one step ahead of the process, educate yourself on upcoming procedures, and be prepared for any red flags along the way",
};

export default function page() {
  return (
    <>
      <main className="min-h-dvh space-y-32">
        <section className="">
          <div className="relative isolate overflow-hidden min-h-dvh">
            <div className="absolute z-10 w-full h-full">
              <Image
                fill
                src="/media/img/landing/image-01.jpg"
                alt=""
                className="object-cover object-bottom-right lg:object-fit lg:object-right"
              />
            </div>
            <div className="absolute z-20 w-full h-full bg-secondary/70">
              {/* This is an overlay with no semantic meaning. */}
            </div>
            <div className="absolute z-30 w-full h-full grid items-center">
              {/* Content Is Inside Here */}
              <div className="wrapper">
                <h1 className="display-3 font-sans max-w-[30ch]">
                  Learn The Anatomy of the Real Estate Transaction.
                </h1>
                <p className="mt-3 mb-12 body-lead max-w-[80ch] text-balance">
                  This website is a collection of real estate transaction in
                  Canada. As this process is intimidating he is here to give
                  unfiltered guide without any favoritism so you can be educated
                  on the procedures coming at you and ready for any red flags
                  along the way.
                </p>
                <span className="flex flex-col md:flex-row gap-6">
                  <Link href="/listings" className="*:w-full *:lg:w-fit">
                    <Button>View Listings</Button>
                  </Link>
                  <Link
                    href="/real-estate-process"
                    className="*:w-full *:lg:w-fit"
                  >
                    <Button variant="outline">Real-Estate Process</Button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* End of Landing Area */}
        <section className="relative min-h-dvh">
          {/* SVG Background */}
          <div className="absolute inset-0 z-0">
            {/* <MySvgComponent className="rotate-45" /> */}
          </div>

          {/* Title Section */}
          <div className="relative z-20 flex items-center justify-center min-h-dvh wrapper">
            <div className="sm:col-span-12 flex flex-col items-center justify-center gap-6">
              <h2 className="max-w-3xl font-display text-pretty text-4xl font-medium tracking-tight text-black dark:text-white sm:text-6xl">
                Quick Introduction
              </h2>

              {/* Divider */}
              <Divider className="" />
              <p className="max-w-3xl text-lg text-center">
                Doug began his journey in residential investment real estate in
                1986, which eventually led to a full-time career in real estate
                sales in 1997 with RE/MAX. To offer the level of service that
                both he and his clients valued, Doug transitioned to Right At
                Home Realty.
              </p>
            </div>
          </div>
        </section>

        {/* End of Sub-Hero Area - Quick Section */}
        <section className="wrapper grid grid-cols-1 md:grid-cols-3 gap-8">
          <h3 className="pb-6 col-span-1 md:col-span-3 max-w-[30ch] font-display text-5xl/snug font-bold text-balance capitalize">
            Everything you need for the Real-Estate Transaction Process.
          </h3>
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="card-container place-content-center *:text-base *:text-pretty *:tracking-wide"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center gap-2 ">
                  <p className="font-mono">{index + 1}</p>{" "}
                  <span className="my-6 block w-4 rounded-full ring-1 ring-black dark:ring-white"></span>
                  {/* Updated to use index + 1 */}
                </div>
                <h3 className="font-display font-bold text-lg capitalize">
                  Your Trusted Realtor
                </h3>
                <p className="">
                  With over 10 years of experience in the real estate industry,
                  John possesses an in-depth understanding of the local market
                  trends, neighborhoods, and property.
                </p>
              </div>
            </div>
          ))}
        </section>
        {/* End of Sub-Hero Area - Real Estate Transaction Process */}
        <section className="wrapper min-h-dvh grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* <!-- Title Section --> */}
          <div className="col-span-1 md:col-span-3 space-y-6 mb-6">
            <h1 className=" max-w-3xl font-display text-pretty text-4xl font-medium tracking-tight text-black dark:text-white sm:text-6xl sm">
              View Listings
            </h1>
            <Divider />
          </div>
          {/* <!-- Divider --> */}
          {/* <!-- 3x3 Grid Section --> */}
          <ul className="col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {listings.map((house) => {
              return (
                <li key={house.id}>
                  <Link
                    href={`/listings/${createSlug(house.title)}`}
                    className="overflow-hidden sm:rounded-lg hover:underline hover:animate-pulse hover:opacity-80 hover:cursor-pointer"
                  >
                    <div className="relative aspect-video sm:aspect-square sm:rounded-lg">
                      <Image
                        fill
                        src={house.media}
                        alt={house.alt}
                        className="object-cover object-center rounded-lg"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-lg/8 font-medium tracking-normal text-black dark:text-white">
                        {house.title}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <!-- Loader --> */}
          <div className="col-span-12 mt-8">
            <Link href="/listings">
              <Button>View More</Button>
            </Link>
          </div>
        </section>
        {/* End of Content Area  */}
        <section className="relative w-full min-h-dvh">
          {/* Background Image */}
          <div className="absolute z-10 w-full h-full overflow-hidden">
            <Image
              fill
              src="/media/img/landing/image-03.jpg"
              alt=""
              className="object-cover object-bottom"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute z-20 w-full h-full bg-secondary/70" />
          {/* Centered Hero Content */}
          <div className="relative z-40 mx-auto container px-4 sm:px-6 lg:px-8 flex items-center justify-start min-h-dvh">
            <div className="text-start">
              <p className="font-semibold leading-7 text-black dark:text-white uppercase text-sm tracking-wide">
                Get the help you need
              </p>
              <h1 className="mt-2 font-sans display-3">
                Right at Home Agents Make it Easy
              </h1>
              <p className="mt-4 max-w-5xl body-lead font-semibold">
                Be one step ahead of real-estate transactions with our un-biased
                guide. As we give you an unfiltered guide about the Real-Estate
                Transaction without any favoritism so you can be educated on the
                procedures coming at you and ready for any red flags.
              </p>
              <span className="block mt-8 space-x-4">
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </span>
            </div>
          </div>
        </section>
        {/* End of Listings Area  */}
      </main>
    </>
  );
}
