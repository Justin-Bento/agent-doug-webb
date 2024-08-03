import { cn } from "@/lib/utils";

export default function Footer({className}: any) {
  return (
    <footer className={cn("overflow-hidden bg-black", className)}>
      <div className="container mx-auto px-4 py-5 sm:p-6">
        <p className="text-white">I am the end of the website.</p>
      </div>
    </footer>
  );
}
