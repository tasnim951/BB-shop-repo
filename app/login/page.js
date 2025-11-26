"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      router.push("/"); 
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

       const handleEmailLogin = async (e) => {
        e.preventDefault();
   
        setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); 
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 to-pink-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">Login</h2>

        {error && (
          <p className="mb-4 text-red-600 font-semibold text-center">{error}</p>
        )}

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full bg-pink-600 text-white py-2 rounded mb-6 hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue with Google
        </button>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500 focus:ring-1 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500 focus:ring-1 focus:ring-pink-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700">
          New user?{" "}
          <Link href="/register" className="text-pink-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
