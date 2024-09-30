import BackgroundPattern from "@/components/BackgroundPattern";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { TbMail, TbMapPin, TbBellRinging, TbArrowRight } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Contact - AgentWebb",
  description:
    "The only website that provides all the information you need about Real Estate transactions. Stay one step ahead of the process, educate yourself on upcoming procedures, and be prepared for any red flags along the way",
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full min-h-[25dvh] z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center container mx-auto">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-black dark:text-white sm:text-6xl">
              Contact.
            </h1>
          </div>
        </section>
        <div className="container mx-auto min-h-dvh mt-24">
          <section id="header">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="font-semibold text-2xl md:text-4xl md:leading-tight">
                Contact us
              </h2>
              <p className="mt-1 text-neutral-400">
                Whatever your goal - we will get you there.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                <form>
                  <div className="space-y-4">
                    {/* Input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-name"
                        className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                        placeholder="Name"
                      />
                      <label
                        htmlFor="hs-tac-input-name"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Name
                      </label>
                    </div>
                    {/* End Input */}
                    {/* Input */}
                    <div className="relative">
                      <input
                        type="email"
                        id="hs-tac-input-email"
                        className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="hs-tac-input-email"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Email
                      </label>
                    </div>
                    {/* End Input */}
                    {/* Input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-company"
                        className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                        placeholder="Company"
                      />
                      <label
                        htmlFor="hs-tac-input-company"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Company
                      </label>
                    </div>
                    {/* End Input */}
                    {/* Input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-phone"
                        className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                        placeholder="Phone"
                      />
                      <label
                        htmlFor="hs-tac-input-phone"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Phone
                      </label>
                    </div>
                    {/* End Input */}
                    {/* Textarea */}
                    <div className="relative">
                      <textarea
                        id="hs-tac-message"
                        className="peer p-4 block w-full border border-black/50 rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-primary disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                        placeholder="This is a textarea placeholder"
                        defaultValue={""}
                      />
                      <label
                        htmlFor="hs-tac-message"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Tell us about your project
                      </label>
                    </div>
                    {/* End Textarea */}
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-neutral-500">
                      All fields are required
                    </p>
                    <Link className="" href="#">
                      <Button size="sm" className=" mt-5">
                        Submit
                      </Button>
                    </Link>
                  </div>
                </form>
              </div>
              {/* End Col */}
              <div className="space-y-14">
                {/* Item */}
                <div className="flex gap-x-5">
                  <TbMapPin className="shrink-0 size-6 text-neutral-500" />
                  <div className="grow">
                    <h4 className=" font-semibold">Our address:</h4>
                    <address className="mt-1 text-neutral-400 text-sm not-italic">
                      300 Bath Street, Tay House
                      <br />
                      Glasgow G2 4JR, United Kingdom
                    </address>
                  </div>
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5">
                  <TbMail className="shrink-0 size-6 text-neutral-500" />
                  <div className="grow">
                    <h4 className=" font-semibold">Email us:</h4>
                    <Link
                      className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200"
                      href="#mailto:example@site.co"
                      target="_blank"
                    >
                      hello@example.so
                    </Link>
                  </div>
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5">
                  <TbBellRinging className="shrink-0 size-6 text-neutral-500 -rotate-12" />
                  <div className="grow">
                    <h4 className=" font-semibold">We&#39;re hiring</h4>
                    <p className="mt-1 text-neutral-400">
                      We&#39;re thrilled to announce that we&#39;re expanding
                      our team and looking for talented individuals like you to
                      join us.
                    </p>
                    <p className="mt-2">
                      <Link
                        className="group inline-flex items-center gap-x-2 font-medium text-sm text-black decoration-2 hover:underline focus:outline-none focus:underline"
                        href="#"
                      >
                        Job openings
                        <TbArrowRight className="size-3" />
                      </Link>
                    </p>
                  </div>
                </div>
                {/* End Item */}
              </div>
              {/* End Col */}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
