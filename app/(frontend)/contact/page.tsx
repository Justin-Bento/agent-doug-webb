import React from "react";
import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export default function page() {
  return (
    <main className="space-y-24 mb-24">
      <PageHeader title="Contact Us" />
      <article className="wrapper grid gap-12 md:gap-24 md:grid-cols-3">
        <section className="w-full h-auto md:col-span-1 space-y-4 lg:p-8">
          <div className="[&>p]:font-semibold [&>p]:text-gray-950 [&>p]:dark:text-gray-50">
            <p>Douglas John Webb</p>
            <p>Real Estate Representative</p>
            <p>Right At Home Realty Inc.</p>
          </div>
          <div className="">
            <Divider className="md:w-full" />
          </div>
          <ul className="[&>li]:font-medium [&>li]:text-gray-500 [&>li]:dark:text-gray-50">
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
  );
}
