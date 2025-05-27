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
        <section className="relative">
          <div className="absolute z-10 w-full min-h-dvh overflow-hidden bg-linear-to-b from-secondary/80">
            <Image
              fill
              src="/media/img/leeroy-lifeofpix-leeroy8118-305043.jpg"
              alt=""
              className="object-cover object-bottom-right lg:object-fit lg:object-right"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute z-20 w-full h-full bg-secondary/80 dark:bg-[#16151b]/70"></div>
          {/* Gradient Fade at the Bottom */}
          <div className="absolute z-30 bottom-0 w-full h-full bg-linear-to-b from-secondary/80"></div>
          {/* Centered Hero Content */}
          <div className="relative z-40 wrapper flex items-center justify-start min-h-dvh">
            <div className="text-start">
              <h1 className="mt-2 font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-black dark:text-white sm:text-6xl/[0.8] md:text-8xl/[1.1] capitalize">
                AgentWebb is Your Guide through the Real Estate Transaction
                Process.
              </h1>
              <p className="mt-4 max-w-4xl text-balance text-lg leading-8 text-black dark:text-white">
                Douglas John Webb is a real estate agent with platform that is
                here to help you during the real estate transaction process. His
                goal is to give you an unfiltered guide about the Real-Estate
                Transaction without any favoritism so you can be educated on the
                procedures coming at you and ready for any red flags along the
                way.
              </p>
              <span className="block mt-8 space-x-4">
                <Link href="/listings">
                  <Button className="rounded-full px-5">View Listings</Button>
                </Link>
                <Link href="/real-estate-process">
                  <Button
                    variant="outline"
                    className="rounded-full px-5 dark:bg-[#16151b] dark:border-[#16151b]"
                  >
                    Real-Estate Process
                  </Button>
                </Link>
              </span>
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
        <section className="wrapper min-h-dvh grid grid-cols-1 sm:grid-cols-12 gap-12 lg:gap-0 lg:gap-y-20 lg:gap-x-10">
          <div className="sm:col-span-12 row-auto overflow-hidden sm:rounded-lg">
            <div className="max-w-5xl mx-auto text-center">
              <h3 className="font-display text-balance text-4xl font-medium capitalize tracking-tight text-black dark:text-white sm:text-5xl">
                Everything you need for the Real-Estate Transaction Process.
              </h3>
            </div>
          </div>
          <div className="sm:col-span-6 row-auto overflow-hidden sm:rounded-lg">
            <div className="relative aspect-[1/1.25] shadow-sm">
              <Image
                fill
                src="/media/img/daniel-krakan-lifeofpix-danielkrakan7928-308970.jpg"
                className="object-center rounded-sm" // Ensure it maintains aspect ratio
                alt="rough ocean water"
              />
            </div>
          </div>
          <div className="sm:col-span-6 row-auto overflow-y-scroll aspect-[1/1.25] ring-1 ring-gray-300 sm:rounded-lg">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="gap-12 place-content-center aspect-[1/1.25] sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="font-display max-w-4xl text-balance text-xl font-bold uppercase text-black dark:text-white">
                    Meet Your Trusted Realtor: John Webb
                  </h3>
                  <p className="text-sm text-balance mt-2 leading-5">
                    With over 10 years of experience in the real estate
                    industry, John possesses an in-depth understanding of the
                    local market trends, neighborhoods, and property values.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-xs uppercase tracking-wide">
                      {index + 1}
                    </p>{" "}
                    {/* Updated to use index + 1 */}
                    <span className="my-6 block w-8 rounded-full max-w-16 ring-1 ring-black dark:ring-white"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* End of Sub-Hero Area - Real Estate Transaction Process */}
        <section className="wrapper min-h-dvh grid grid-cols-12 gap-4">
          {/* <!-- Title Section --> */}
          <div className="col-span-12 w-full">
            <h1 className=" max-w-3xl font-display text-pretty text-4xl font-medium tracking-tight text-black dark:text-white sm:text-6xl sm">
              View Listings
            </h1>
          </div>
          {/* <!-- Divider --> */}
          <div className="col-span-12  mb-6 mt-3 w-full max-w-24 ring-1 ring-black dark:ring-white"></div>
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
              <Button className="rounded-full px-5">View More</Button>
            </Link>
          </div>
        </section>
        {/* End of Content Area  */}
        <section className="relative w-full min-h-dvh">
          {/* Background Image */}
          <div className="absolute z-10 w-full h-full overflow-hidden">
            <Image
              fill
              src="/media/img/tumblr_nsoart1B4L1qfirfao1_1280.jpg"
              alt=""
              className="object-cover object-bottom"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute z-20 w-full h-full bg-secondary/80 dark:bg-[#16151b]/60"></div>
          {/* Gradient Fade at the Bottom */}
          <div className="absolute z-30 bottom-0 w-full bg-linear-to-b from-secondary/80 dark:from-[#16151b] to-transparent"></div>
          {/* Centered Hero Content */}
          <div className="relative z-40 mx-auto container px-4 sm:px-6 lg:px-8 flex items-center justify-start min-h-dvh">
            <div className="text-start">
              <p className="font-semibold leading-7 text-black dark:text-white uppercase text-sm tracking-wide">
                Get the help you need
              </p>
              <h1 className="mt-2 font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-black dark:text-white sm:text-6xl/[0.8] md:text-7xl/[0.8] capitalize">
                Right at Home Agents Make it Easy
              </h1>
              <p className="mt-4 max-w-5xl text-md leading-7 font-semibold text-black dark:text-white">
                Be one step ahead of real-estate transactions with our un-biased
                guide. As we give you an unfiltered guide about the Real-Estate
                Transaction without any favoritism so you can be educated on the
                procedures coming at you and ready for any red flags.
              </p>
              <span className="block mt-8 space-x-4">
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full px-5">
                    Contact Us
                  </Button>
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
