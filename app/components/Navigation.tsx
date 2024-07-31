import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <header className="overflow-hidden shadow">
      <div className="container mx-auto px-4 py-5 sm:p-6">
        <nav className="">
          <ul className="flex items-center justify-end list-none">
            <li>
              <a href="#"><Button variant="link" size="sm">Home</Button></a>
            </li>
            <li>
              <a href="#"><Button variant="link" size="sm">About</Button></a>
            </li>
            <li>
              <a href="#"><Button variant="link" size="sm">Real-Estate Process</Button></a>
            </li>
            <li>
               <a href="#"><Button variant="link" size="sm">Listings</Button></a>
            </li>
            <li>
               <a href="#"><Button variant="link" size="sm">More Stuff</Button></a>
            </li>
            <li>
               <a href="#"><Button variant="link" size="sm">Contact</Button></a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
