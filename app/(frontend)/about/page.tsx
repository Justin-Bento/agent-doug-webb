import Image from "next/image";
import { Metadata } from "next";
import { TbCircleCheck } from "react-icons/tb";
import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import KnowledgeCheckbox from "@/components/KnowledgeCheckbox";

export const metadata: Metadata = {
  title: "About - AgentWebb",
  description:
    "The only website that provides all the information you need about Real Estate transactions. Stay one step ahead of the process, educate yourself on upcoming procedures, and be prepared for any red flags along the way",
};

export default function about() {
  return (
    <>
      <PageHeader title="Our strength is collaboration" />
      <main className="py-32 space-y-32 wrapper min-h-dvh">
        <section className="">
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <div className="max-w-3xl [&>p]:text-xl/loose space-y-6 dark:text-white">
              <p>
                We believe that our strength lies in our collaborative approach,
                which puts our clients at the center of everything we do.
              </p>
              <p>
                Studio was started by three friends who noticed that developer
                studios were charging clients double what an in-house team would
                cost. Since the beginning, we have been committed to doing
                things differently by charging triple instead.
              </p>
              <p>
                At Studio, we&#39; re more than just colleagues — we&#39; re a
                family. This means we pay very little and expect people to work
                late. We want our employees to bring their whole selves to work.
                In return, we just ask that they keep themselves there until at
                least 6:30pm.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <dl className="grid items-center grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
            <div className="relative flex flex-col-reverse p-6 card-container md:pl-8 before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
              <dt className="mt-2 text-base dark:text-white/70">
                Certified Real Estate investor
              </dt>
              <dd className="text-3xl font-semibold text-black font-display sm:text-4xl dark:text-white">
                1985
              </dd>
            </div>
            <div className="relative flex flex-col-reverse p-6 card-container md:pl-8 before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
              <dt className="mt-2 text-base dark:text-white/70">
                Years of experience
              </dt>
              <dd className="text-3xl font-semibold text-black font-display sm:text-4xl dark:text-white">
                25+
              </dd>
            </div>
            <div className="relative flex flex-col-reverse p-6 card-container md:pl-8 before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
              <dt className="mt-2 text-base dark:text-white/70">
                Satisfied Clients and Referral
              </dt>
              <dd className="text-3xl font-semibold text-black font-display sm:text-4xl dark:text-white">
                70%
              </dd>
            </div>
          </dl>
        </section>
        <section className="">
          <div className="grid items-center grid-cols-1 md:grid-cols-12 sm:gap-10 md:gap-x-10">
            <div className="relative w-full h-full col-span-12 md:col-span-5">
              <Image
                fill
                src="/media/img/stock-photos/douglas-job-web.jpg"
                alt="Image of Douglas John Webb"
                className="object-cover object-center rounded-lg"
              />
            </div>
            <div className="grid items-center col-span-12 overflow-hidden md:col-span-7 rounded-2xl">
              <div className="px-4 py-5 sm:p-6 space-y-8 [&>p]:text-xl/loose [&>p]:tracking-wide">
                <h2 className="max-w-3xl text-4xl font-medium tracking-tighter text-black text-pretty dark:text-white sm:text-4xl">
                  Meet Douglas J. Webb
                </h2>
                <Divider />
                <p>
                  Years ago, while working as sales associates at rival
                  companies, Thomas, Ben, and Natalie were discussing a big
                  client they had all been competing for. Joking about seeing
                  the terms of each other&#39;s offers, they had an idea: what
                  if they shared data to win deals and split the commission
                  behind their companies&#39; backs? It turned out to be an
                  incredible success, and that idea became the kernel for
                  Radiant.
                </p>
                <p>
                  Today, Radiant transforms revenue organizations by harnessing
                  illegally acquired customer and competitor data, using it to
                  provide extraordinary leverage. More than 30,000 companies
                  rely on Radiant to undercut their competitors and extort their
                  customers, all through a single integrated platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="space-y-6 lg:col-span-4">
              <h2 className="text-5xl font-semibold text-gray-950">
                Why Should You Choose Me?
              </h2>
              <Divider className="" />
            </div>
            <KnowledgeCheckbox title="Certified Residential Real-Estate Agent" />
            <KnowledgeCheckbox title="(MLS) Multiple Listing Service" />
            <KnowledgeCheckbox title="Member of the Toronto Real Estate Board" />
            <KnowledgeCheckbox title="Canadian Real Estate Association" />
            <KnowledgeCheckbox title="Realtor&copy; Sales Award" />
            <KnowledgeCheckbox title="Serving: Clients since 1997" />
            <KnowledgeCheckbox title="70&#37; Repeat Clients and Referral" />
            <KnowledgeCheckbox title="70&#37; Repeat Clients and Referral" />
          </div>
        </section>
      </main>
    </>
  );
}
