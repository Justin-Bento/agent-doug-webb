import Link from "next/link"; // use the Link component from 'next/link'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer({ className }: any) {
  return (
    <footer className="bg-gray-950 *:text-gray-50 dark:bg-black">
      <div className="wrapper grid grid-cols-1 lg:grid-cols-4 py-20 gap-12">
        <div className="flex w-full flex-col  space-y-4 md:w-2/5">
          <div className="w-full text-lg space-x-1 font-extrabold md:w-fit">
            <span>Agent</span>
            <span>Webb</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()}.</p>
          <div className="flex items-center gap-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-50">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full *:text-gray-50">
          <div className="text-sm font-semibold border-b leading-9 leading-9">
            Company
          </div>
          <ul className="text-sm">
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                About
              </Link>
            </li>
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Terms of Service
              </Link>
            </li>
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full *:text-gray-50">
          <div className="text-sm font-semibold border-b leading-9">
            Solutions
          </div>
          <ul className="text-sm">
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Business Line of Credit
              </Link>
            </li>
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                SBA Loan
              </Link>
            </li>
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Revenue Based Financing
              </Link>
            </li>
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Invoice Factoring
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full *:text-gray-50">
          <div className="text-sm font-semibold border-b leading-9">
            Partnership
          </div>
          <ul className="text-sm">
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Loan Partner
              </Link>
            </li>
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Affiliate
              </Link>
            </li>
            <li className="pt-3">
              <Link
                className="navigation-links text-gray-200"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Brand Guideline
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

const navigation = [
  {
    name: "Facebook",
    href: "#",
    icon: (props: any) => <AiFillFacebook {...props} />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: any) => <AiFillInstagram {...props} />,
  },
  {
    name: "GitHub",
    href: "#",
    icon: (props: any) => <AiFillGithub {...props} />,
  },
  {
    name: "YouTube",
    href: "#",
    icon: (props: any) => <AiFillYoutube {...props} />,
  },
  {
    name: "X",
    href: "#",
    icon: (props: any) => <AiOutlineTwitter {...props} />,
  },
];
