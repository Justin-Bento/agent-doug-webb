import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";

interface PropertyDemoProps {
  image: string;
  altTitle: string;
  statement: string;
}

import React from "react";

export default function PropertyDemo({
  image,
  altTitle,
  statement,
}: PropertyDemoProps) {
  return (
    <div className="overflow-hidden  grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative aspect-16/10 p-0 pb-6 overflow-hidden">
        <Image
          fill
          src={urlFor(image)?.url() || ""}
          alt={altTitle || "Property"}
          className="object-cover object-center rounded-xl"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="">{statement}</p>
        <Button variant="link" className="underline">
          Read More
        </Button>
      </div>
    </div>
  );
}
