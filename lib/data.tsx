import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export const listings = [
  {
    id: 1,
    title: "Maple Ridge Estates",
    alt: "filter description for an image",
    media:
      "/media/img/properties/b746b508b0c9405df110ebabbf09c983-cc_ft_960.jpg",
  },
  {
    id: 2,
    title: "Rocky Summit Retreat",
    alt: "filter description for an image",
    media: "/media/img/properties/dillon-kydd-3Ignkeds3w8-unsplash.jpg",
  },
  {
    id: 3,
    title: "Cedarbrook Haven",
    alt: "filter description for an image",
    media: "/media/img/properties/Investment_Opportunities.jpg",
  },
  {
    id: 4,
    title: "Aurora Shores Villas",
    alt: "filter description for an image",
    media: "/media/img/properties/pexels-curtis-adams-1694007-4258275.jpg",
  },
  {
    id: 5,
    title: "Mapleleaf Manor",
    alt: "filter description for an image",
    media: "/media/img/properties/dillon-kydd-3Ignkeds3w8-unsplash.jpg",
  },
  {
    id: 6,
    title: "Osprey Lake Cottages",
    alt: "filter description for an image",
    media:
      "/media/img/properties/The-Neighbourhoods-of-Mount-Pleasant-Towns.jpg",
  },
];

export const navigation = [
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

type NavLink = {
  title: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { title: "home", href: "/" },
  { title: "about", href: "/about" },
  { title: "real-estate process", href: "/real-estate-process" },
  { title: "listings", href: "/listings" },
  { title: "contact", href: "/contact" },
];
