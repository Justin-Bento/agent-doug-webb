import Link from "next/link";
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Divider from "@/components/Divider";

export default function page() {
  return (
    <>
      <Navigation />
      <main className="space-y-24 mb-24 min-h-dvh">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
              Real-Estate Process.
            </h1>
          </div>
        </section>
        <section className="wrapper">
          <h2 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            A Comprehensive Overview of the Real Estate Process: What You Need
            to Know
          </h2>
          <Divider className=" my-8" />
          <div className="grid grid-cols-2 gap-8">
            <Link
              href="/real-estate-process/deciding-to-buy"
              className="last:hover:underline"
            >
              <Card className="bg-transparent hover:border-gray-400 active:ring-primary hover:bg-white/70 transition-all  ">
                <div className="px-4 py-5 sm:p-6 space-y-2">
                  <p className="text-xl font-semibold">Deciding To Buy</p>
                  <p className="line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore molestias voluptatem sint, expedita facilis enim.
                    Velit rem officia fugiat libero eveniet animi nemo minus
                    perspiciatis maxime nihil beatae, atque esse.
                  </p>
                  <Button variant="link" className="m-0 p-0">
                    See More
                  </Button>
                </div>
              </Card>
            </Link>
            <Link
              href="/real-estate-process/deciding-to-sell"
              className="last:hover:underline"
            >
              <Card className="bg-transparent hover:border-gray-400 active:ring-primary hover:bg-white/70 transition-all  ">
                <div className="px-4 py-5 sm:p-6 space-y-2">
                  <p className="text-xl font-semibold">Deciding To Sell</p>
                  <p className="line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore molestias voluptatem sint, expedita facilis enim.
                    Velit rem officia fugiat libero eveniet animi nemo minus
                    perspiciatis maxime nihil beatae, atque esse.
                  </p>
                  <Button variant="link" className="m-0 p-0">
                    See More
                  </Button>
                </div>
              </Card>
            </Link>
            <Link
              href="/real-estate-process/more-stuff"
              className="last:hover:underline"
            >
              <Card className="bg-transparent hover:border-gray-400 active:ring-primary hover:bg-white/70 transition-all  ">
                <div className="px-4 py-5 sm:p-6 space-y-2">
                  <p className="text-xl font-semibold">More Stuff</p>
                  <p className="line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore molestias voluptatem sint, expedita facilis enim.
                    Velit rem officia fugiat libero eveniet animi nemo minus
                    perspiciatis maxime nihil beatae, atque esse.
                  </p>
                  <Button variant="link" className="m-0 p-0">
                    See More
                  </Button>
                </div>
              </Card>
            </Link>
            <Link
              href="/real-estate-process/additional-information"
              className="last:hover:underline"
            >
              <Card className="bg-transparent hover:border-gray-400 active:ring-primary hover:bg-white/70 transition-all  ">
                <div className="px-4 py-5 sm:p-6 space-y-2">
                  <p className="text-xl font-semibold">
                    Additional Information
                  </p>
                  <p className="line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore molestias voluptatem sint, expedita facilis enim.
                    Velit rem officia fugiat libero eveniet animi nemo minus
                    perspiciatis maxime nihil beatae, atque esse.
                  </p>
                  <Button variant="link" className="m-0 p-0">
                    See More
                  </Button>
                </div>
              </Card>
            </Link>
          </div>
        </section>
        <section className="wrapper">
          <h2 className="max-w-3xl text-pretty text-4xl font-medium  text-gray-950 dark:text-white">
            Frequently Asked Questions
          </h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
