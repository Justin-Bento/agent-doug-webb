import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function RealEstateTransaction() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6">
        <div className="flex min-h-dvh gap-9">
          <SideNavigation />
          <div className="w-full bg-gray-200">
            <h1>Hello, Real-Estate Transaction Page!</h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const real_estate_stages = {
  deciding_to_buy: [
    "Sell before you buy",
    "How Much can you afford?",
    "Selecting an Buying Agent",
    "The Buyers RE. Contract",
    "Searching Properties",
    "Visiting Properties",
    "Making an Offer",
    "Negotiating the Offer",
    "Making The Offer Firm",
    "Lawyers & Closing B.",
    "Packing and Moving",
  ],
  deciding_to_sell: [
    "Researching Value",
    "Prepping Property",
    "Selecting an Selling Agent",
    "The Listing Contract",
    "Staging",
    "Showing",
    "Negotatiing",
    "Removing Conditions",
    "Lawyers & Closing Selling",
    "Packing & Moving",
  ],
};

function SideNavigation() {
  return (
    <>
      <div className="bg-gray-200 w-64 flex-none">
        <p className="">Side Navigation</p>
      </div>
    </>
  );
}
