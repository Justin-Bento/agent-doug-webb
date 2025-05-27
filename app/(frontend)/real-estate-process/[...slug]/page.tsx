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
      <main className="wrapper space-y-24 lg:mt-24 min-h-dvh">
        <h1 className="text-3xl font-bold">{revertSlug(slug[1])}</h1>
        <TypographyDemo />
      </main>
    );
  } else if (slug?.length === 1) {
    return (
      <main className="wrapper space-y-24 lg:mt-24 min-h-dvh">
        <section className="">
          <div className="flex flex-col-reverse">
            <h1 className="text-3xl font-bold capitalize">
              {revertSlug(slug[0])}
            </h1>

            <Link href="/real-estate-process" className="text-sm/6">
              Real Estate Process
            </Link>
          </div>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
           {new Array(10).fill(null).map((_, index) => ())}
          </ul>
        </section>
      </main>
    );
  }
  return <h1>Docs home page</h1>;
}
