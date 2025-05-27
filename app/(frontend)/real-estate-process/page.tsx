import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <main className="wrapper min-h-dvh my-24">
        <h1 className="">Hello, Real Estate Process Page.</h1>
        <nav className="">
          <ul className="list-disc list-inside ml-6 mt-6">
            <li>
              <Link href="#">Hello, Nested Page.</Link>
            </li>
            <li>
              <Link href="#">Hello, Nested Page.</Link>
            </li>
            <li>
              <Link href="#">Hello, Nested Page.</Link>
            </li>
            <li>
              <Link href="#">Hello, Nested Page.</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
