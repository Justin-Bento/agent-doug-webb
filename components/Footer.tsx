import { cn } from "@/lib/utils";
import Link from "next/link"; // use the Link component from 'next/link'
import { AiFillFacebook, AiFillYoutube, AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer({ className }: any) {
  return (
    <footer className={cn("overflow-hidden bg-black/10 dark:bg-[#16151b]", className)}>
      <div className="wrapper py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black dark:text-white hover:text-white/50"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                aria-hidden="true"
                className="h-6 w-6"
              />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-black dark:text-white">
            &copy; {new Date().getFullYear()} AgentWebb, Inc. All rights reserved.
          </p>
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
