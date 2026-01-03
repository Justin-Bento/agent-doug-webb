import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Divider from "@/components/Divider";
import { Button } from "@/components/ui/button";
import { listings } from "@/lib/data";
import { createSlug } from "@/lib/utils";

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
            <div className="absolute z-20 w-full h-full bg-secondary/70 dark:bg-secondary-dark/70" />
            <div className="absolute z-30 w-full h-full grid items-center">
              {/* Content Is Inside Here */}
              <div className="max-w-7xl mx-auto">
                <h2 className="display-3 font-sans max-w-[30ch]">
                  Learn The Anatomy of the Real Estate Transaction.
                </h2>
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
                    <Button variant="outline" className="dark:text-white">
                      Real-Estate Process
                    </Button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper min-h-dvh max-w-[80ch] grid place-content-center">
          <div className="flex flex-col items-center justify-center gap-6 *:text-center">
            <h2 className="h1">Quick Introduction</h2>
            <Divider />
            <p className="body-lead">
              Doug began his journey in residential investment real estate in
              1986, which eventually led to a full-time career in real estate
              sales in 1997 with RE/MAX. To offer the level of service that both
              he and his clients valued, Doug transitioned to Right At Home
              Realty.
            </p>
          </div>
        </section>
        <section className="wrapper grid grid-cols-1 md:grid-cols-3 gap-8">
          <h2 className="display-3 col-span-3 max-w-[30ch] capitalize">
            Everything you need for the Real-Estate Transaction Process.
          </h2>
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
        <section className="wrapper min-h-dvh grid grid-cols-1 md:grid-cols-3 gap-4">
          <h2 className="display-3 col-span-3 capitalize">View Listings</h2>
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
        <section className="relative w-full min-h-dvh">
          <div className="absolute z-10 w-full h-full overflow-hidden">
            <Image
              fill
              src="/media/img/landing/image-03.jpg"
              alt=""
              className="object-cover object-bottom"
            />
          </div>
          {/* Background Image */}
          <div className="absolute z-20 w-full h-full bg-secondary/70 dark:bg-secondary-dark/70" />
          {/* End of Image Overlay */}
          <div className="relative z-40 wrapper flex items-center justify-start min-h-dvh">
            <div className="space-y-4">
              <h2 className="mt-2 font-sans display-3">
                Right at Home Agents Make it Easy
              </h2>
              <p className="body-lead max-w-prose">
                Be one step ahead of real-estate transactions with our un-biased
                guide. As we give you an unfiltered guide about the Real-Estate
                Transaction without any favoritism so you can be educated on the
                procedures coming at you and ready for any red flags.
              </p>
              <p className="body-lead">Get the help you need</p>
              <span className="block mt-8 space-x-4">
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
