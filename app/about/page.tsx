import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Image from "next/image";

export default function about() {
  let message: string = " ";
  return (
    <>
      <Navigation />
      <main className="min-h-dvh">
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          <div className="w-full  rounded-lg bg-gray-200">
            <Image src="" alt="" className="aspect-video" />
          </div>
          <div className="w-full h-24">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
