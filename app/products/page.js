"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category.toLowerCase() === category.toLowerCase())
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-pink-700 mb-3 tracking-wide">
        Our Products
      </h1>
      <p className="text-pink-500 mb-10 text-lg">
        Explore our latest makeup, skincare & fashion items.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border border-pink-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/4 border border-pink-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
        >
          <option value="">All Categories</option>
          <option value="Makeup">Makeup</option>
          <option value="Skincare">Skincare</option>
          <option value="Accessories">Accessories</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-pink-600 font-semibold">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-pink-600 font-semibold">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="border border-pink-200 rounded-lg p-5 shadow-md hover:shadow-xl transition cursor-pointer bg-pink-50"
            >
              <div className="relative w-full h-40 sm:h-48 rounded-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  className="rounded-md"
                />
              </div>

           <h3 className="text-2xl font-semibold mt-4 text-pink-700">{product.title}</h3>
              <p className="text-pink-600 mt-2 line-clamp-2">{product.shortDescription}</p>
              <p className="text-pink-700 font-extrabold mt-3 text-lg">৳ {product.price}</p>

          
         <Link
                href={`/products/${index}`}
                className="inline-block mt-5 px-5 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
