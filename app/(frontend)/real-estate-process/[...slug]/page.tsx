import TypographyDemo from "@/components/TypographyDemo";
import { revertSlug } from "@/lib/utils";
import Link from "next/link";

export default async function RealEstateProcessSlug({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <main className="wrapper min-h-dvh my-24">
        <h1 className="max-w-4xl text-4xl font-bold capitalize text-pretty lg:text-5xl lg:leading-[1.25] mb-6">
          Start here for a quick overview of everything you need to know.
        </h1>
        <TypographyDemo />
      </main>
    );
  } else if (slug?.length === 1) {
    return (
      <main className="wrapper space-y-24 lg:mt-24 min-h-dvh">
        <section className="">
          <div className="flex flex-col-reverse">
            <h1 className="max-w-4xl text-4xl font-bold capitalize text-pretty lg:text-5xl lg:leading-[1.25] mb-6">
              {revertSlug(slug[0])}
            </h1>

            <Link href="/real-estate-process" className="text-sm/6">
              Real Estate Process
            </Link>
          </div>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {new Array(10).fill(null).map((_, index) => (
              <li key={index}>
                <Link
                  href={`/real-estate-process/${slug[0]}/stage-${index + 1}`}
                  className="hover:underline hover:underline-offset-2"
                >
                  Stage #{index + 1} level of puns: {index * 5} gold coins
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
  return <h1>Docs home page</h1>;
}
