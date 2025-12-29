import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export default function Logo(className: LogoProps) {
  return (
    <Link href="/" className={cn("font-bold text-xl space-x-1", className)}>
      <span>Agent</span>
      <span>Webb</span>
    </Link>
  );
}
