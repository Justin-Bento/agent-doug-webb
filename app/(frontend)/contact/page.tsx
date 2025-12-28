import ContactForm from "@/components/ContactForm";
import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <>
      <main className="">
        <PageHeader title="Contact" />
        <div className="wrapper grid grid-cols-1 md:grid-cols-12 gap-8 my-12">
          <section className="w-full h-auto md:col-span-4 space-y-4 lg:p-8">
            <div className="">
              <p className="font-semibold text-black dark:text-white">
                Douglas John Webb
              </p>
              <p className="font-semibold text-black dark:text-white">
                Real Estate Representative
              </p>
              <p className="font-semibold text-black dark:text-white">
                Right At Home Realty Inc.
              </p>
            </div>
            <div className="">
              <Divider className="md:w-full" />
            </div>
            <div className="">
              <p className="font-medium text-black/50 dark:text-white">
                Direct: 416.845.9322
              </p>
              <p className="font-medium text-black/50 dark:text-white">
                Office: 905.663.250
              </p>
              <p className="font-medium text-black/50 dark:text-white">
                Email: abc123@gmail.com
              </p>
            </div>
          </section>
          <section className="md:col-span-7">
            <ContactForm />
          </section>
        </div>
      </main>
    </>
  );
}
