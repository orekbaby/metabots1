import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="mt-20">
      <h2>Welcome to the metapp home page, i will fix the landing page soon</h2>
      <Link href="/metabots"> Visit Metabot page</Link>
    </main>
  );
}
