import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import { Metadata } from "next";
import BackgroundPattern from "@/components/BackgroundPattern";
import { TbCircleCheck } from "react-icons/tb";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "About - AgentWebb",
  description:
    "The only website that provides all the information you need about Real Estate transactions. Stay one step ahead of the process, educate yourself on upcoming procedures, and be prepared for any red flags along the way",
};

export default function about() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh mb-24 space-y-24">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full h-48 max-h-[20dvh] z-10 bg-gradient-to-b from-accent/60 from-70% dark:from-accent/40" />
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center wrapper">
            <h1>
              <span className="mb-3 block font-display text-base font-semibold text-black dark:text-white">
                About us
              </span>
              <span className="sr-only"> - </span>
              <span className="mt-6 text-5xl font-bold capitalize font-display dark:text-white">
                Our strength is collaboration.
              </span>
            </h1>
          </div>
        </section>
        <section className="wrapper">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="mt-6 max-w-3xl text-xl dark:text-white">
              <p>
                We believe that our strength lies in our collaborative approach, which puts our clients at the center of
                everything we do.
              </p>
              <div className="mt-10 max-w-2xl space-y-6 text-base">
                <p>
                  Studio was started by three friends who noticed that developer studios were charging clients double
                  what an in-house team would cost. Since the beginning, we have been committed to doing things
                  differently by charging triple instead.
                </p>
                <p>
                  At Studio, we&#39; re more than just colleagues — we&#39; re a family. This means we pay very little
                  and expect people to work late. We want our employees to bring their whole selves to work. In return,
                  we just ask that they keep themselves there until at least 6:30pm.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper">
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
            <div className="flex flex-col-reverse md:pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
              <dt className="mt-2 text-base dark:text-white/70">Certified Real Estate investor</dt>
              <dd className="font-display text-3xl font-semibold text-black sm:text-4xl dark:text-white">1985</dd>
            </div>
            <div className="flex flex-col-reverse md:pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
              <dt className="mt-2 text-base dark:text-white/70">Years of experience</dt>
              <dd className="font-display text-3xl font-semibold text-black sm:text-4xl dark:text-white">25+</dd>
            </div>
            <div className="flex flex-col-reverse md:pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
              <dt className="mt-2 text-base dark:text-white/70">Satisfied Clients and Referral</dt>
              <dd className="font-display text-3xl font-semibold text-black sm:text-4xl dark:text-white">70%</dd>
            </div>
          </dl>
        </section>
        <section className="wrapper">
          <div className="grid items-center grid-cols-1 md:grid-cols-12 sm:gap-10 md:gap-x-10">
            <div className="relative aspect-square col-span-12 md:col-span-5">
              <Image
                fill
                src="/media/img/douglas-job-web.jpg"
                alt="Image of Douglas John Webb"
                className="object-cover object-center rounded-lg"
              />
            </div>
            <div className="overflow-hidden col-span-12 md:col-span-7 grid items-center rounded-2xl">
              <div className="px-4 py-5 sm:p-6 space-y-8">
                <h2 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-black dark:text-white sm:text-4xl">
                  Meet Douglas J. Webb
                </h2>
                <Divider className="" />
                <p className="">
                  Years ago, while working as sales associates at rival companies, Thomas, Ben, and Natalie were
                  discussing a big client they had all been competing for. Joking about seeing the terms of each
                  other&#39;s offers, they had an idea: what if they shared data to win deals and split the commission
                  behind their companies&#39; backs? It turned out to be an incredible success, and that idea became the
                  kernel for Radiant.
                </p>
                <p className="">
                  Today, Radiant transforms revenue organizations by harnessing illegally acquired customer and
                  competitor data, using it to provide extraordinary leverage. More than 30,000 companies rely on
                  Radiant to undercut their competitors and extort their customers, all through a single integrated
                  platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper min-h-[50dvh]">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-12">
            <div className="overflow-hidden ring-0 bg-transparent shadow-0 sm:rounded-lg sm:col-span-12">
              <h2 className="max-w-3xl text-balance text-4xl font-medium text-black dark:text-white sm:text-4xl">
                Why Should You Choose Me?
              </h2>
            </div>
            <div className="col-span-1 sm:col-span-12">
              <Divider className="" />
            </div>
            <div className="overflow-hidden ring-1 ring-black/10 dark:ring-white/20 bg-transparent shadow-sm rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-3">
              <div className="px-4 py-5 sm:p-6">
                <TbCircleCheck className="size-7 stroke-1.5" />
                <h3 className="mt-1 text-xl/8 text-balance font-medium text-black dark:text-white">
                  Certified Residential Real-Estate Agent
                </h3>
              </div>
            </div>
            <div className="overflow-hidden ring-1 ring-black/10 dark:ring-white/20 bg-transparent shadow-sm rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-3">
              <div className="px-4 py-5 sm:p-6">
                <TbCircleCheck className="size-7 stroke-1.5" />
                <h3 className="mt-1 text-xl/8 text-balance font-medium text-black dark:text-white">
                  (MLS) Multiple Listing Service
                </h3>
              </div>
            </div>
            <div className="overflow-hidden ring-1 ring-black/10 dark:ring-white/20 bg-transparent shadow-sm rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-3">
              <div className="px-4 py-5 sm:p-6">
                <TbCircleCheck className="size-7 stroke-1.5" />
                <h3 className="mt-1 text-xl/8 text-balance font-medium text-black dark:text-white">
                  Member of the Toronto Real Estate Board
                </h3>
              </div>
            </div>
            <div className="overflow-hidden ring-1 ring-black/10 dark:ring-white/20 bg-transparent shadow-sm rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-3">
              <div className="px-4 py-5 sm:p-6">
                <TbCircleCheck className="size-7 stroke-1.5" />
                <h3 className="mt-1 text-xl/8 text-balance font-medium text-black dark:text-white">
                  Canadian Real Estate Association
                </h3>
              </div>
            </div>
            <div className="overflow-hidden ring-1 ring-black/10 dark:ring-white/20 bg-transparent shadow-sm rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-3">
              <div className="px-4 py-5 sm:p-6">
                <TbCircleCheck className="size-7 stroke-1.5" />
                <h3 className="mt-1 text-xl/8 text-balance font-medium text-black dark:text-white">
                  Realtor&copy; Sales Award
                </h3>
              </div>
            </div>
            <div className="overflow-hidden ring-1 ring-black/10 dark:ring-white/20 bg-transparent shadow-sm rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-3">
              <div className="px-4 py-5 sm:p-6">
                <TbCircleCheck className="size-7 stroke-1.5" />
                <h3 className="mt-1 text-xl/8 text-balance font-medium text-black dark:text-white">
                  Real Estate investor since 1985
                </h3>
              </div>
            </div>
            <div className="overflow-hidden ring-1 ring-black/10 dark:ring-white/20 bg-transparent shadow-sm rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-3">
              <div className="px-4 py-5 sm:p-6">
                <TbCircleCheck className="size-7 stroke-1.5" />
                <h3 className="mt-1 text-xl/8 text-balance font-medium text-black dark:text-white">
                  Serving: Clients since 1997
                </h3>
              </div>
            </div>
            <div className="overflow-hidden ring-1 ring-black/10 dark:ring-white/20 bg-transparent shadow-sm rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-3">
              <div className="px-4 py-5 sm:p-6">
                <TbCircleCheck className="size-7 stroke-1.5" />
                <h3 className="mt-1 text-xl/8 text-balance font-medium text-black dark:text-white">
                  70&#37; Repeat Clients and Referral
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
