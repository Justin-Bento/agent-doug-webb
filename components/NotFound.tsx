import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-6">Sorry, we couldn’t find the property you’re looking for.</p>
        <Link href="/listings">
          <Button variant="outline" className="text-sm rounded-full px-5">
            View All Listings
          </Button>
        </Link>
      </div>
    </div>
  );
}
