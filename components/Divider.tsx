import React from "react";

export default function Divider({ className }: { className?: string }) {
  return <span className={`block w-20 h-[0.2rem] bg-black rounded-full ${className}`}></span>;
}
