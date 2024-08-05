import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh space-y-20">
        <section className="">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            />
            <div className="container mx-auto px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 text-balance">
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto">
                  <span className="text-indigo-600">Agent Webb,</span> Your
                  Guide to Understanding Real Estate Transactions.
                </h1>
                <div className="mt-4 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="leading-6">
                    Welcome to Agent Webb, John Webb is a real estate agent with
                    20+ years of experience. This websites shares his
                    information about the Real Estate transaction, one place,
                    and guiding you to take you through the Real Estate
                    transaction process from start to finish.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <Link href="#">
                      <Button className="bg-indigo-600">Schedule A Call</Button>
                    </Link>
                    <Link href="/real-estate-process">
                      <Button variant="secondary" className="bg-indigo-50">
                        Read Information
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="mt-10 relative aspect-[6/5] w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
                  <Image
                    alt=""
                    fill={true}
                    src="/media/img/photo-unsplash.avif"
                    className="rounded-2xl object-cover ring-1 ring-indigo-950"
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h2 className="text-4xl tracking-tight font-extrabold capitalize dark:text-white">
              Trust Our Experience and Expertise
            </h2>
          </div>
        </section>
        <section className="relative overflow-hidden bg-indigo-600 py-32">
          <div className="container mx-auto px-4 py-5 sm:p-6 text-white">
            <div className="max-w-3xl flex flex-col gap-3">
              <p className="">Felling Overwhelmed?</p>
              <h3 className=" text-4xl tracking-tight font-extrabold capitalize dark:text-white ">
                We&#39;ll Help You and Simplify Your Real Estate Journey!
              </h3>
              <p className="">
                Navigating the real estate market is daunting, but you don&#39;t
                have to do it alone. John Webb, is here to guide you through
                every step, from understanding the complex details to making
                informed decisions with confidence. Discover how we can make the
                process smoother and stress-free for you.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h4 className="text-4xl tracking-tight font-extrabold capitalize dark:text-white">
              Welcome to section 4
            </h4>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h5 className="text-4xl tracking-tight font-extrabold capitalize dark:text-white">
              Welcome to section 5
            </h5>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <h6 className="text-4xl tracking-tight font-extrabold capitalize dark:text-white">
              Welcome to section 6
            </h6>
          </div>
        </section>
      </main>
      <Footer className="mt-20" />
    </>
  );
}
