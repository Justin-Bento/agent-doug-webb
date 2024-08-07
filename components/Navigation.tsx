import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="overflow-hidden border-b border-black/10 shadow shadow-black/10 sticky top-0 left-0 bg-white z-20">
      <div className="container mx-auto flex items-center justify-between px-4 py-5 sm:p-6">
        <div id="company-logo" className="relative size-8">
          <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
            <Image
              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              alt="TE Logo"
              fill={true}
              loading="lazy"
            />
          </a>
        </div>
        <nav id="webpages" className="">
          <ul className="flex items-center justify-end list-none">
            <li>
              <Link href="/">
                <Button variant="link" size="sm">
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Button variant="link" size="sm">
                  About
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/real-estate-process">
                <Button variant="link" size="sm">
                  Real-Estate Process
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/listings">
                <Button variant="link" size="sm">
                  Listings
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Button variant="link" size="sm">
                  Contact
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
