"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebaseConfig"; // adjust path
import { onAuthStateChanged } from "firebase/auth";

export default function ManageProductsPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/login");
      else setUser(currentUser);
      setLoadingUser(false);
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingProducts(false);
      }
    }
    loadProducts();
  }, []);

  const handleDelete = (index) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((_, i) => i !== index));
    }
  };

  if (loadingUser) return <p className="text-center mt-10">Checking authentication...</p>;
  if (loadingProducts) return <p className="text-center mt-10">Loading products...</p>;
  if (products.length === 0) return <p className="text-center mt-10">No products to manage.</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6 text-center">Manage Products</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded text-sm sm:text-base">
          <thead className="bg-pink-100 text-pink-700">
            <tr>
              <th className="px-2 sm:px-4 py-2 border text-left">Title</th>
              <th className="px-2 sm:px-4 py-2 border text-left">Category</th>
              <th className="px-2 sm:px-4 py-2 border text-left">Price (৳)</th>
              <th className="px-2 sm:px-4 py-2 border text-left">Priority</th>
              <th className="px-2 sm:px-4 py-2 border text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="hover:bg-pink-50">
                <td className="px-2 sm:px-4 py-2 border">{p.title}</td>
                <td className="px-2 sm:px-4 py-2 border">{p.category}</td>
                <td className="px-2 sm:px-4 py-2 border">{p.price}</td>
                <td className="px-2 sm:px-4 py-2 border">{p.priority}</td>
                <td className="px-2 sm:px-4 py-2 border flex flex-wrap gap-2">
                  <Link
                    href={`/products/${i}`}
                    className="inline-block px-2 sm:px-3 py-1 bg-pink-600 text-white rounded hover:bg-pink-700 text-xs sm:text-sm"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(i)}
                    className="px-2 sm:px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-xs sm:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
