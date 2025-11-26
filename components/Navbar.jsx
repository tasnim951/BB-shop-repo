"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../components/AuthProvider";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  const dropdownRef = useRef(null);

  const userLoggedIn = !!user;

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

       const handleLogout = async () => {
     
        await logout();
    setDropdownOpen(false);
    setMenuOpen(false);
    router.push("/");  
  };

  return (
    <nav className="bg-pink-200 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold select-none cursor-pointer">
          <span className="text-pink-600">Blush</span>
          <span className="text-black">Bazaar</span>
        </Link>

        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div
          className={`flex-col md:flex-row md:flex md:items-center md:gap-8 absolute md:static top-full right-0 bg-pink-200 md:bg-transparent w-48 md:w-auto rounded-md md:rounded-none shadow-md md:shadow-none transition-transform duration-300 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 text-black hover:text-pink-600"
          >
            Home
          </Link>
         
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 text-black hover:text-pink-600"
          >
            Products
          </Link>
         
           <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 text-black hover:text-pink-600"
          >
            About
          </Link>

          {!userLoggedIn ? (
            <>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-black hover:text-pink-600"
              >
                Login
              </Link>
             
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-black hover:text-pink-600"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                className="px-2 py-1 focus:outline-none rounded-full hover:bg-pink-300 cursor-pointer flex items-center gap-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                  <Image
                  src="/images/profile2.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="hidden md:inline-block text-black font-medium select-none">▼</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                 
                  <Link
                    href="/add-product"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-black hover:bg-pink-100 hover:text-pink-600"
                  >
                    Add Product
                  </Link>
                 
                  <Link
                    href="/manage-products"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-black hover:bg-pink-100 hover:text-pink-600"
                  >
                    Manage Products
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-black hover:bg-pink-100 hover:text-pink-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
