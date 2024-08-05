import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Image from "next/image";

export default function about() {
  let message: string = " ";
  return (
    <>
      <Navigation />
      <main className="min-h-dvh">
        <section className="container mx-auto my-24">
          <div className="text-balance mb-6">
            <div className="flex flex-col-reverse">
              <h1 className="text-5xl tracking-tight font-extrabold capitalize dark:text-white">
                Our strength is collaboration.
              </h1>
              <p className="text-sm text-purple-500">About us</p>
            </div>
            <p className="text-xl tracking-wide mt-2">
              We believe that our strength lies in our collaborative approach,
              which puts our clients at the center of everything we do.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="bg-gray-400 aspect-square"></div>
            <div className="mt-4 max-w-4xl space-y-6 text-base">
              <p>
                Doug got involved in residential investment real estate in 1986
                which ultimately led to a full time career in real estate sales
                in 1997 with RE/Max. To provide his clients with the latitude of
                service which he and most of his clients sought, Doug moved to
                Right At Home Realty. The business generated through the
                referral of his satisfied clients along with their letters and
                thank-you cards is something he is very proud of.
              </p>
              <ul className="list-disc list-inside space-y-4">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
