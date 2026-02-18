import Link from "next/link";
import { wcApi } from "@/lib/woocommerce";

export const metadata = {
  title: "Shop | See-IT-3D",
  description:
    "Browse professional 3D rendering services including interior, exterior and product visualization.",
};

export default async function ShopPage() {
  const res = await wcApi.get("products");
  const products = res.data;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {product.name}
            </h2>

            <p className="text-gray-600 mb-4">
              £{product.price}
            </p>

            <Link
              href={`/product/${product.slug}`}
              className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
            >
              View details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
