"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebaseConfig"; 
import { onAuthStateChanged } from "firebase/auth";

export default function AddProductPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [imageUrl, setImageUrl] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/login");
      else setUser(currentUser);
      setLoadingUser(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setToastMessage("Product submitted successfully!");

    setTitle("");
    setShortDesc("");
    setFullDesc("");
    setPrice("");
    setDate("");
    setPriority("Medium");
    setImageUrl("");

    setTimeout(() => setToastMessage(""), 3000);
  };

  if (loadingUser) return <p>Checking authentication...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500 focus:ring-1 focus:ring-pink-500"
        />
        <input
          type="text"
          placeholder="Short Description"
          required
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500 focus:ring-1 focus:ring-pink-500"
        />
        <textarea
          placeholder="Full Description"
          required
          value={fullDesc}
          onChange={(e) => setFullDesc(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500 focus:ring-1 focus:ring-pink-500"
          rows={4}
        />
        <input
          type="number"
          placeholder="Price"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500 focus:ring-1 focus:ring-pink-500"
        />
        <input
          type="date"
          placeholder="Date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500 focus:ring-1 focus:ring-pink-500"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500 focus:ring-1 focus:ring-pink-500"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="url"
          placeholder="Optional Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500 focus:ring-1 focus:ring-pink-500"
        />

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          Submit
        </button>
      </form>

      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-pink-600 text-white px-6 py-3 rounded shadow-lg animate-fadeInOut">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
