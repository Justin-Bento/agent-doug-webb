import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Image from "next/image";

export default function about() {
  let message: string = " ";
  return (
    <>
      <Navigation />
      <main className="min-h-dvh my-24 space-y-24">
        <section className="container mx-auto">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div style={{opacity: 1, transform: 'none'}}>
              <h1>
                <span className="mb-3 block font-display text-base font-semibold text-black">
                  About us
                </span>
                <span className="sr-only"> - </span>
                <span className="mt-6 text-4xl font-bold capitalize dark:text-white">
                  Our strength is collaboration
                </span>
              </h1>
              <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                <p>
                  We believe that our strength lies in our collaborative
                  approach, which puts our clients at the center of everything
                  we do.
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                  <p>
                    Studio was started by three friends who noticed that
                    developer studios were charging clients double what an
                    in-house team would cost. Since the beginning, we have been
                    committed to doing things differently by charging triple
                    instead.
                  </p>
                  <p>
                    At Studio, we’re more than just colleagues — we’re a family.
                    This means we pay very little and expect people to work
                    late. We want our employees to bring their whole selves to
                    work. In return, we just ask that they keep themselves there
                    until at least 6:30pm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
            <div
              className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
              style={{ opacity: 1, transform: "none" }}
            >
              <dt className="mt-2 text-base text-neutral-600">
                Certified Real Estate investor
              </dt>
              <dd className="font-display text-3xl font-semibold text-black sm:text-4xl">
                1985
              </dd>
            </div>
            <div
              className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
              style={{ opacity: 1, transform: "none" }}
            >
              <dt className="mt-2 text-base text-neutral-600">
                Years of experience
              </dt>
              <dd className="font-display text-3xl font-semibold text-black sm:text-4xl">
                25+
              </dd>
            </div>
            <div
              className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
              style={{ opacity: 1, transform: "none" }}
            >
              <dt className="mt-2 text-base text-neutral-600">
                Satisfied Clients and Referral
              </dt>
              <dd className="font-display text-3xl font-semibold text-black sm:text-4xl">
                70%
              </dd>
            </div>
          </dl>
        </section>
        <section className="container mx-auto">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="bg-gray-400 aspect-square"></div>
            <div className="mt-4 max-w-4xl space-y-6 text-base">
              <p>
                Studio was started by Douglas J. Webb who noticed that people
                are afraid of residential investment as there is a lot of
                secrecy behind home ownership. Since the beginning, he has been
                committed to doing things differently by being transparent and
                share his knowledge instead.
              </p>
              <p>
                Agent Webb is more than just one agent — it is a comprehensive
                platform for Real Estate Transactions. This means people can
                access different stages of the process on the go. Whether
                you&#39;re buying or selling a property, Agent Webb provides you
                with all the tools and resources you need. From initial property
                searches to finalizing the transaction, our platform offers
                step-by-step guidance, expert advice, and real-time updates to
                ensure a smooth and efficient experience.
              </p>
              <p>
                With Agent Webb, you can easily navigate the complexities of the
                real estate market, stay informed about important milestones,
                and make well-informed decisions every step of the way.
              </p>
              <p>
                With Agent Webb, you can easily navigate the complexities of the
                real estate market, stay informed about important milestones,
                and make well-informed decisions every step of the way.
              </p>
              <p>
                With Agent Webb, you can easily navigate the complexities of the
                real estate market, stay informed about important milestones,
                and make well-informed decisions every step of the way.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
