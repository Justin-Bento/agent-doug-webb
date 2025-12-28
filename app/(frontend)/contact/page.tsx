import ContactForm from "@/components/ContactForm";
import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <>
      <main className="">
        <PageHeader title="Contact" />
        <div className="wrapper grid grid-cols-1 md:grid-cols-3 items-st gap-8 my-12">
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
        </div>
      </main>
    </>
  );
}
