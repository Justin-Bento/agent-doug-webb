import React from "react";
import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export default function page() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <main className="space-y-24 my-24">
        <article className="wrapper grid gap-12 md:gap-24 md:grid-cols-3">
          <section className="w-full h-auto md:col-span-1 space-y-4 lg:p-8">
            <ul className="space-y-1 [&>p]:font-semibold [&>p]:text-black [&>p]:dark:text-gray-50">
              <li>Douglas John Webb</li>
              <li>Real Estate Representative</li>
              <li>Right At Home Realty Inc.</li>
            </ul>
            <Divider className="col-span-3" />
            <ul className="space-y-1 [&>li]:font-medium [&>li]:text-black [&>li]:dark:text-gray-50">
              <li>Direct: 416.845.9322</li>
              <li>Office: 905.663.250</li>
              <li>Email: abc123@gmail.com</li>
            </ul>
          </section>
          <section className="md:col-span-2">
            <ContactForm />
          </section>
        </article>
      </main>
    </>
  );
}
