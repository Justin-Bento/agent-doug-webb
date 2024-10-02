import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function layout() {
  return (
    <>
      <html>
        <body>
          <Navigation />
          <main className="wrapper min-h-[100dvh] my-20">
            <h1 className="">layout</h1>
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
