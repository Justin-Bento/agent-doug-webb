import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentWebb",
  description:
    "The only website that provides all the information you need about Real Estate transactions. Stay one step ahead of the process, educate yourself on upcoming procedures, and be prepared for any red flags along the way",
};

export default function page() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh space-y-20">
        <section className="">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-black/5 dark:from-gray-900/60">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-black/30 ring-1 dark:ring-gray-800 dark:bg-black dark:shadow-gray-900 sm:-mr-80 lg:-mr-96"
            />
            <div className="container mx-auto px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 text-balance">
                <h1 className="max-w-2xl text-4xl font-extrabold text-black sm:text-5xl lg:col-span-2 xl:col-auto font-display dark:text-white">
                  <span className="text-black dark:text-white">Agent Webb,</span> Your Guide to Understanding Real Estate Transactions.
                </h1>
                <div className="mt-4 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="leading-6 dark:text-white">
                    Welcome to Agent Webb, John Webb is a real estate agent with 20+ years of experience. This websites
                    shares his information about the Real Estate transaction, one place, and guiding you to take you
                    through the Real Estate transaction process from start to finish.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <Link href="#">
                      <Button>Schedule A Call</Button>
                    </Link>
                    <Link href="/real-estate-process">
                      <Button variant="secondary" className="bg-indigo-50">
                        Read Information
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="mt-10 relative aspect-[6/5] w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
                  <Image
                    alt=""
                    fill={true}
                    src=""
                    className="w-full aspect-video bg-black dark:bg-white rounded-2xl object-cover ring-2 ring-black"
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-transparent sm:h-32" />
          </div>
        </section>
        {/* End of Hero Section For Website */}
        <section className="container mx-auto px-4 py-5 sm:p-6">
          <div className="mb-6 mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-4xl font-extrabold capitalize font-display dark:text-white">
              Trust Our Experience and Expertise
            </h2>
            <p className="text-lg mt-1">
              Our certifications reflect our commitment to trust, quality, and excellence in every real estate
              transaction.
            </p>
          </div>
          <div className=" relative overflow-hidden mx-auto max-w-7xl px-6 lg:px-8 mt-16">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="lg:flex lg:items-center lg:justify-end">
                <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                  <div className="w-[33.75rem] flex-none lg:w-[45rem]" style={{ opacity: 1, transform: "none" }}>
                    <div className="justify-center lg:justify-end relative flex aspect-[719/680] w-full grayscale">
                      <svg viewBox="0 0 655 680" fill="none" className="w-full h-auto">
                        <g clipPath="url(#:S1:-clip)" className="group">
                          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                            <foreignObject width="655" height="680">
                              <Image
                                alt=""
                                loading="lazy"
                                width="2400"
                                height="3000"
                                decoding="async"
                                data-nimg="1"
                                className="w-full bg-gray-100 object-cover"
                                style={{
                                  color: "transparent",
                                  aspectRatio: "655 / 680",
                                }}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&w=1080&q=75"
                              />
                            </foreignObject>
                          </g>
                          <use href="#:S1:-shape" strokeWidth="2" className="stroke-white/10"></use>
                        </g>
                        <defs>
                          <clipPath id=":S1:-clip">
                            <path
                              id=":S1:-shape"
                              d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>

                    </div>
                  </div>
                </div>
                <div>
                  <ul
                    role="list"
                    className="text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4"
                  >
                    <li className="group mt-10 first:mt-0">
                      <div style={{ opacity: 1, transform: "none" }}>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-white">Web development.</strong>
                          We specialise in crafting beautiful, high quality marketing pages. The rest of the website
                          will be a shell that uses lorem ipsum everywhere.
                        </div>
                      </div>
                    </li>
                    <li className="group mt-10 first:mt-0">
                      <div style={{ opacity: 1, transform: "none" }}>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-white">Application development.</strong>
                          We have a team of skilled developers who are experts in the latest app frameworks, like
                          Angular 1 and Google Web Toolkit.
                        </div>
                      </div>
                    </li>
                    <li className="group mt-10 first:mt-0">
                      <div style={{ opacity: 1, transform: "none" }}>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-white">E-commerce.</strong>
                          We are at the forefront of modern e-commerce development. Which mainly means adding your logo
                          to the Shopify store template we’ve used for the past six years.
                        </div>
                      </div>
                    </li>
                    <li className="group mt-10 first:mt-0">
                      <div style={{ opacity: 1, transform: "none" }}>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-white">Custom content management.</strong>
                          At Studio we understand the importance of having a robust and customised CMS. That’s why we
                          run all of our client projects out of a single, enormous Joomla instance.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-black dark:bg-white/20 py-32">
          <div className="container mx-auto px-4 py-5 sm:p-6 text-white">
            <div className="max-w-3xl flex flex-col gap-3">
              <p className="dark:text-white/70">Felling Overwhelmed?</p>
              <h3 className="text-4xl text-pretty tracking-wide font-bold capitalize font-display dark:text-white ">
                We&#39;ll Help You and Simplify Your Real Estate Journey!
              </h3>
              <p className="dark:text-white leading-7 trakcing-wide">
                Navigating the real estate market is daunting, but you don&#39;t have to do it alone. John Webb, is here
                to guide you through every step, from understanding the complex details to making informed decisions
                with confidence. Discover how we can make the process smoother and stress-free for you.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <Image src="" alt="" className="w-full aspect-video bg-black dark:bg-white/90 rounded-2xl cover ring-2 ring-black" />
            <div className="mt-8 space-y-2">
              <h4 className="text-4xl font-display font-extrabold capitalize dark:text-white">Welcome to section 4</h4>
              <p className="text-balance max-w-4xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum facilis cupiditate molestias
                dolorum deserunt dolores veniam culpa ipsum, harum. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-4 py-5 sm:p-6">
            <div className="py-24 sm:py-32">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h5 className="text-4xl font-display font-extrabold capitalize dark:text-white">
                  Welcome to section 5
                </h5>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white/80">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                  in accusamus quisquam.
                </p>
              </div>
              <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div>
                  <dt className="font-semibold text-gray-900 dark:text-white">Push to deploy.</dt>
                  <dd className="mt-1 text-gray-600 dark:text-white/80">
                    Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia.
                    Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 dark:text-white">SSL certificates.</dt>
                  <dd className="mt-1 text-gray-600 dark:text-white/80">
                    Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque
                    cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 dark:text-white">Simple queues.</dt>
                  <dd className="mt-1 text-gray-600 dark:text-white/80">
                    Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum.
                    Commodi autem voluptatem nam. Quos voluptatem totam.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 dark:text-white">Advanced security.</dt>
                  <dd className="mt-1 text-gray-600 dark:text-white/80">
                    Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus.
                    Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 dark:text-white">Powerful API.</dt>
                  <dd className="mt-1 text-gray-600 dark:text-white/80">
                    Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt
                    dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 dark:text-white">Database backups.</dt>
                  <dd className="mt-1 text-gray-600 dark:text-white/80">
                    Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus
                    reprehenderit iste aspernatur ut est velit consequatur distinctio.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <div className="mx-auto max-w-xl text-center">
            <h6 className="text-sm uppercase font-semibold leading-8 tracking-wide text-black font-display">
              Testimonials
            </h6>
            <p className="text-4xl font-display font-extrabold capitalize dark:text-white">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-black/10 dark:bg-white/20 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900 dark:text-white">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image alt="" src="" className="h-10 w-10 rounded-full bg-black" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                        <div className="text-gray-600 dark:text-white/80">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer className="mt-36" />
    </>
  );
}

const testimonials = [
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
    },
  },
  // More testimonials...
];
