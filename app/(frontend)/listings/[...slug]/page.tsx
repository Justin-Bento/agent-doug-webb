import PageHeader from "@/components/PageHeader";
// app/shop/[[...slug]]/page.tsx
// Based on https://www.rightathomerealty.com/ON/toronto/m4w0b7/14380531-MLS-C12463497-na-1205---11-Yorkville-Avenue
export default function ListingsPage({ params }: any) {
  const { slug } = params;
  const title = slug
    .join("-")
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  // For /shop, slug will be undefined (or an empty array in some cases)
  // For /shop/clothes, slug will be ['clothes']
  // For /shop/clothes/tops, slug will be ['clothes', 'tops']
  // app/shop/[[...slug]]/page.tsx
  return (
    <>
      <PageHeader title={title} />
      <main className="wrapper min-h-dvh my-24 grid grid-cols-2 gap-16">
        {/* Row 1: Two columns */}
        <section className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="body-lead tracking-wide leading-7 font-medium mt-4">
              Welcome to 11 Yorkville Avenue, where sophistication, culture, and
              convenience come together in one of Toronto&apos;s most
              prestigious neighbourhoods. This beautifully designed and
              furnished 2-bedroom+den, 2-bath residence offers the perfect blend
              of modern elegance and urban energy, surrounded by the very best
              the city has to offer. Inside, sleek Miele appliances,
              floor-to-ceiling windows, and high-end finishes create a space
              that feels effortlessly refined.
            </p>
            <ul className="body-lead font-medium tracking-wide space-y-3 list-disc list-inside ml-8">
              <li className="">Address: 1205 - 11 Yorkville Avenue</li>
              <li className="">Country: Toronto, Ontario, Canada</li>
              <li className="">Postal Code: M4W0B7</li>
            </ul>
            <section className="w-full bg-gray-300 p-6 rounded-xl">
              <p className="">Contact Agent Webb for More Information</p>
            </section>
            {/* Content */}
          </div>
          <div className="w-full aspect-square bg-black rounded-2xl">
            {/* Media */}
          </div>
        </section>
        <section className="col-span-2 [&>p]:text-lg [&>p]:leading-7 [&>p:not(:first-child)]:mt-6">
          <h2 className="mt-10 scroll-m-20 border-b border-black pb-2 text-3xl font-semibold transition-colors first:mt-0">
            Property Information
          </h2>
          <ul className=" my-6 grid grid-cols-2 gap-8 *:border *:border-black *:p-6">
            <li className="">2 Bedrooms</li>
            <li className="">2 Bathrooms</li>
            <li className="">800-899 square feet</li>
            <li className="">80 days</li>
          </ul>
          <p>
            Every detail speaks to comfort and quality, from the open-concept
            layout to the natural light that fills the suite. Step outside and
            you&apos;re in the heart of Yorkville home to designer boutiques
            along the Mink Mile, five-star dining, and vibrant caf&eacute;s that
            define Toronto&apos;s luxury lifestyle.
          </p>
          <p>
            Spend weekends exploring the Royal Ontario Museum, catching a
            performance at the Royal Conservatory of Music, or unwinding in the
            serene green spaces of nearby Rosedale. The University of Toronto,
            Bay subway station, and the Financial District are all just moments
            away, making this the ideal home for those who value both elegance
            and accessibility.
          </p>
          <p>
            Life at 11 Yorkville means more than just a beautiful suite,
            it&apos;s a complete lifestyle. Residents enjoy resort-inspired
            amenities, including a rooftop pool and spa, state-of-the-art
            fitness centre, piano lounge, private dining rooms, and more.
            Whether you&apos;re entertaining, relaxing, or recharging, this
            building offers the best of everything right at home. Experience
            Torontos most sophisticated address 11 Yorkville Avenue, where every
            detail embodies prestige, convenience, and elevated living. **
            Parking available at $350.00 per month.
          </p>
        </section>
        <section className="col-span-2 [&>p]:text-lg [&>p]:leading-7 [&>p:not(:first-child)]:mt-6">
          <h2 className="mt-10 scroll-m-20 border-b border-black pb-2 text-3xl font-semibold transition-colors first:mt-0">
            Extra info:
          </h2>
          <p className="body-large">
            Appliances: Cooktop, Built-in Oven, Built-in Microwave, Diswasher,
            Built-in Fridge. Washer and Dryer. All Electrical Light Fixtures.
            Parking available at $350.00 per month.
          </p>
        </section>
        <section className="col-span-2 [&>p]:text-lg [&>p]:leading-7 [&>p:not(:first-child)]:mt-6">
          <h2 className="mt-10 scroll-m-20 border-b border-black pb-2 text-3xl font-semibold transition-colors first:mt-0">
            House features:
          </h2>
          <p className="body-large">Library, Park.</p>
        </section>
      </main>
    </>
  );
}
