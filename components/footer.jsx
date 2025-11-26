"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink-200 shadow-md py-6 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo on left */}
        <Link href="/" className="flex items-center select-none cursor-pointer mb-4 md:mb-0">
          <span className="text-pink-600 text-2xl font-bold">Blush</span>
          <span className="text-black text-2xl font-bold ml-1">Bazaar</span>
        </Link>

        {/* Navigation links */}
        <nav className="flex space-x-6 text-sm font-medium text-black">
          <Link href="/" className="hover:underline hover:text-pink-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:underline hover:text-pink-600 transition">
            About
          </Link>
          <Link href="/login" className="hover:underline hover:text-pink-600 transition">
            Login
          </Link>
          <Link href="/register" className="hover:underline hover:text-pink-600 transition">
            Register
          </Link>
        </nav>

        {/* Copyright */}
        <p className="mt-4 md:mt-0 text-sm text-black/70">
          &copy; {new Date().getFullYear()} Blush Bazaar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
