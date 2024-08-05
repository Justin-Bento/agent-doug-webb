import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Image from "next/image";

export default function about() {
  let message: string = " ";
  return (
    <>
      <Navigation />
      <main className="">
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-24">
          <div className="w-full rounded-lg bg-gray-200">
            <Image src="" alt="" className="aspect-square" />
          </div>
          <div className="w-full h-24">
            <h1 className="text-4xl tracking-tight font-extrabold capitalize dark:text-white mb-4">
              About, Douglas J. Webb!
            </h1>
            <div className="space-y-4">
              <p>
                Doug got involved in residential investment real estate in 1986
                which ultimately led to a full time career in real estate sales
                in 1997 with RE/Max. To provide his clients with the latitude of
                service which he and most of his clients sought, Doug moved to
                Right At Home Realty.
              </p>
              <p>
                The business generated through the referral of his satisfied
                clients along with their letters and thank-you cards is
                something he is very proud of.
              </p>
              <ul className="list-disc list-inside grid grid-cols-2 gap-4">
                <li>Certified Residential Specialist</li>
                <li>Canadian Real Estate Association</li>
                <li>Realtor® Sales Award</li>
                <li>Serving: Clients since 1997</li>
                <li>Member Toronto Real Estate Board</li>
                <li>MLS - Multiple Listing Service.</li>
                <li>Real Estate investor since 1985</li>
                <li>Real Estate investor since 1985</li>
                <li>70% Repeat Clients and Referral</li>
              </ul>
              <p>
                Today, I&#39;m the founder of Planetaria, where we&#39;re
                working on civilian space suits and manned shuttle kits you can
                assemble at home so that the next generation of kids really can
                make it to orbit — from the comfort of their own backyards.
              </p>
            </div>
            <hr className="border mt-8" />
            <span className="flex items-center gap-1 mt-6">
              <p className="leading-7">don&#39;t hesitate to email me:</p>
              <Button variant="link">email@agentwebb.com</Button>
            </span>
          </div>
        </section>
        <section className="bg-indigo-50 py-28">
          <div className="container mx-auto grid grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
              <h2 className="inline sm:block lg:inline xl:block">
                Want product news and updates?
              </h2>
              <p className="inline sm:block lg:inline xl:block">
                Sign up for our newsletter.
              </p>
            </div>
            <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
              <div className="flex gap-x-4">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-900">
                We care about your data. Read our{" "}
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  privacy&nbsp;policy
                </a>
                .
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
