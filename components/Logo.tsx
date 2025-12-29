import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo(className: string) {
  return (
    <Link href="/" className={cn("font-bold text-xl space-x-1", className)}>
      <span>Agent</span>
      <span>Webb</span>
    </Link>
  );
}
