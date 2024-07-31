import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="overflow-hidden border-b border-gray-200 shadow shadow-gray-200">
      <div className="container mx-auto px-4 py-5 sm:p-6">
        <nav className="">
          <ul className="flex items-center justify-end list-none">
            <li>
              <Link href="#"><Button variant="link" size="sm">Home</Button></Link>
            </li>
            <li>
              <Link href="#"><Button variant="link" size="sm">About</Button></Link>
            </li>
            <li>
              <Link href="#"><Button variant="link" size="sm">Real-Estate Process</Button></Link>
            </li>
            <li>
               <Link href="#"><Button variant="link" size="sm">Listings</Button></Link>
            </li>
            <li>
               <Link href="#"><Button variant="link" size="sm">More Stuff</Button></Link>
            </li>
            <li>
               <Link href="#"><Button variant="link" size="sm">Contact</Button></Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
