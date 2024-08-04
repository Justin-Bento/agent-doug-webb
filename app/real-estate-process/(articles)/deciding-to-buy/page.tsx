import SideNavigation from "../../../../components/SideNavigation";
import { Button } from "@/components/ui/button";
import DecidingToBuy from "./deciding-to-buy.mdx";

export default function RealEstateTransaction() {
  return (
    <>
      <section className="grid grid-cols-12 my-16">
        <article className="col-span-full xl:col-span-7 xl:col-start-2 xl:max-w-[100ch]">
          <DecidingToBuy />
          <div className="flex items-center justify-between mt-8 border-t-2 pt-8">
            <Button size="sm" variant="outline">
              Previous Article
            </Button>
            <Button size="sm" variant="outline">
              Next Article
            </Button>
          </div>
        </article>
        <aside className="col-span-3 col-start-10 justify-self-end hidden xl:block">
          <div className="sticky top-12 pb-20">
            <SideNavigation stage="buy" />
          </div>
        </aside>
      </section>
    </>
  );
}
