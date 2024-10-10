import React from "react";

export default function Divider({ className }: { className?: string }) {
  return <span className={`block w-20 h-[0.2rem] bg-black dark:bg-white/80 rounded-full ${className}`}></span>;
}
