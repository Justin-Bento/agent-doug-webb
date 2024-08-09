import { cn } from "@/lib/utils";
import { AiFillFacebook, AiFillYoutube, AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer({ className }: any) {
  return (
    <footer className={cn("overflow-hidden bg-black dark:border-t dark:border-white", className)}>
      <div className="container mx-auto px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-white hover:text-white/50">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm  leading-5 text-white">&copy; 2017 AgentWebb, Inc. All rights reserved.</p>
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
