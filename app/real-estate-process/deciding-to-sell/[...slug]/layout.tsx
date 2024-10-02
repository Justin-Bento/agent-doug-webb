import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SideNavigation from "@/components/SideNavigation";
import TypographyDemo from "@/components/TypographyDemo";
import React from "react";

export default function layout() {
  return (
    <>
      <html>
        <body>
          <Navigation />
          <main className="wrapper min-h-[100dvh] my-20 grid grid-cols-1 md:grid-cols-12 md: gap-7">
            <section className="md:col-span-8">
              <TypographyDemo />
            </section>
            <section className="hidden md:grid md:col-span-4">
              <SideNavigation stage="sell" />
            </section>
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
