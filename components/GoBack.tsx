"use client";

import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  return <button onClick={() => router.back()}>Go Back to Route</button>;
}
