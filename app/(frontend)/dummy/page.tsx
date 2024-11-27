import Divider from "@/components/Divider";
import Link from "next/link";
import React from "react";
const realEstateProcess = ["Deciding To Buy", "Deciding To Sell", "More Stuff", "Additional Information"];

function formatToSlug(slug: string) {
  return slug.toLowerCase().replace(/\s+/g, "-");
}
export default function DummyPage() {
  return (
    <main className="space-y-4">
      <h1 className="">Hello, Dummy Page.</h1>
      <ul className="list-decimal ml-6">
        {realEstateProcess.map((process) => {
          return (
            <li key={process}>
              <Link href={`/dummy/${formatToSlug(process)}`}>{process}</Link>
            </li>
          );
        })}
      </ul>
      <Divider />
      <Link href="/" className="block">
        Back To Home page
      </Link>
    </main>
  );
}
