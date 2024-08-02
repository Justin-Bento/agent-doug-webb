import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SideNavigation from "../components/SideNavigation";
import { Button } from "@/components/ui/button";
import Heading from "../components/Heading";
import Link from "next/link";

export default function RealEstateTransaction() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6 my-20">
        <Heading
          heading="Real-Estate Transaction Process"
          supporting="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore saepe sunt ad aliquam optio non voluptatibus quidem et porro corrupti?"
        />
        <section className="grid items-center grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card
            Title="Deciding To Buy"
            Supporting=""
            URL="/real-estate-process/deciding-to-buy"
            LinkName="Buyers Information"
          />
          <Card
            Title="Deciding To Sell"
            Supporting=""
            URL="/real-estate-process/deciding-to-sell"
            LinkName="Seller's Information"
          />
          <Card
            Title="More Stuff"
            Supporting=""
            URL="/real-estate-process/more-stuff"
            LinkName="More Information"
          />
          <Card
            Title="Extra Information"
            Supporting=""
            URL="/real-estate-process/extra-information"
            LinkName="Extra Information"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

interface cardInterface {
  Title: string;
  Supporting: string;
  URL: string;
  LinkName: string;
}
function Card({ Title, Supporting, URL, LinkName }: cardInterface) {
  return (
    <div className="w-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="mb-1.5 text-xl captialize font-bold text-gray-800 dark:text-white">
          {Title}
        </h2>
        <p className="leading-6">
          {Supporting ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reprehenderit inventore consectetur odit quasi ad nulla eius voluptatem ipsum aliquid praesentium eligendi error in, nesciunt sunt debitis nisi optio delectus!"}
        </p>
        <Link href={URL}>
          <Button variant="secondary" size="sm" className="mt-6">
            {LinkName}
          </Button>
        </Link>
      </div>
    </div>
  );
}
