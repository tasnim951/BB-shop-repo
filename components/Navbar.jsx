"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const userLoggedIn = false; // For now, keep false

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

        {/* Nav Links */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center md:gap-8 absolute md:static top-full right-0 bg-pink-200 md:bg-transparent w-48 md:w-auto rounded-md md:rounded-none shadow-md md:shadow-none transition-transform duration-300 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link href="/"
            
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-black hover:text-pink-600"
            >
              Home
            
          </Link>
          <Link href="/products"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-black hover:text-pink-600"
            >
              Products
            
          </Link>
          <Link href="/about"
        
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-black hover:text-pink-600"
            >
              About
            
          </Link>
         

          {!userLoggedIn ? (
            <>
              <Link href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-black hover:text-pink-600"
                >
                  Login
                
              </Link>
              <Link href="/register" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-black hover:text-pink-600"
                >
                  Register
                
              </Link>
            </>
          ) : (
            <div className="relative group">
              <button className="px-4 py-2 text-black font-medium focus:outline-none">
                Username ▼
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                <Link href="/add-product"
                 className="block px-4 py-2 text-black hover:bg-pink-100 hover:text-pink-600">
                    Add Product

                </Link>
                <Link href="/manage-products"
                  className="block px-4 py-2 text-black hover:bg-pink-100 hover:text-pink-600">
                    Manage Products
                  
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-black hover:bg-pink-100 hover:text-pink-600"
                  onClick={() => alert("Logout")}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
