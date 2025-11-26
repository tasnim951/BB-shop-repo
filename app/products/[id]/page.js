import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailsPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const res = await fetch(`http://localhost:3001/products.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  const products = await res.json();

  const product = products[parseInt(id)];

  if (!product) return <div className="p-8 text-center">Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link href="/products" className="inline-block mb-6 text-pink-600 hover:underline">
        ← Back to products
      </Link>

      <div className="border rounded-lg p-6 shadow-lg bg-white">
        <Image
          src={product.image.trim()}
          alt={product.title}
          width={700}
          height={400}
          className="rounded-md object-cover w-full max-h-[400px]"
          priority
        />

        <h1 className="text-3xl font-bold text-pink-600 mt-6">{product.title}</h1>
        <p className="text-gray-700 mt-4">{product.fullDescription}</p>

        <div className="mt-6 flex flex-wrap gap-6 text-gray-600">
          <p><span className="font-semibold">Price:</span> ৳{product.price}</p>
          <p><span className="font-semibold">Date:</span> {product.date}</p>
          <p><span className="font-semibold">Priority:</span> {product.priority}</p>
        </div>
      </div>
    </div>
  );
}
