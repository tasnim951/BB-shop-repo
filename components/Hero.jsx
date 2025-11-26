"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full py-24 text-center bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300"
    >
      <h1 className="text-5xl font-extrabold text-pink-700 mb-4">
        Welcome to Blush Bazaar
      </h1>

      <p className="text-lg text-pink-900 max-w-2xl mx-auto mb-8">
        Discover cute, aesthetic and elegant products — made to match your vibe.
      </p>

      <Link
        href="/about"
        className="px-8 py-3 bg-pink-600 text-white rounded-xl shadow-md hover:bg-pink-700 transition duration-300"
      >
        About Us
      </Link>
    </section>
  );
}
