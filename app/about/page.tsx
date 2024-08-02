import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";

export default function about() {
  let message: string = "Salesperson & Representative, Right At Home Realty Brokerage Inc. Every thing you need in one place to take you through the Real Estate transaction process. From Start to Finish.";
  return (
    <>
      <Navigation />
      <main className="min-h-dvh">
        <section className="bg-gray-100 md:py-16">
          <div className="container mx-auto text-balance">
            <Heading heading="About, Douglas J. Webb!" supporting={message} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
