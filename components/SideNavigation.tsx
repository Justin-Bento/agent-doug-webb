import { Button } from "@/components/ui/button";

export default function SideNavigation({ stage }: any) {
  return (
    <>
      <div className="w-64 flex-none">
        {stage === "buy" && (
          <div className="">
            <p className="font-bold">Deciding to Buy</p>
            <hr className="mt-2" />
            <ul className="mt-4">
              {real_estate_stages.deciding_to_buy.map((buy_steps, index) => {
                return (
                  <li key={index}>
                    <Button variant="link" className="w-full justify-start">
                      {buy_steps}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {stage === "sell" && (
          <div className="mt-8">
            <p className="font-bold">Deciding to Sell</p>
            <hr className="mt-2" />
            <ul className="mt-4">
              {real_estate_stages.deciding_to_sell.map((sell_steps, index) => {
                return (
                  <li key={index}>
                    <Button variant="link" className="w-full justify-start">
                      {sell_steps}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
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
