import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Shop | See-IT-3D",
};

async function getProducts() {
  const base = process.env.NEXT_PUBLIC_WC_STORE_API;

  if (!base) return [];

  const res = await fetch(`${base}/products?per_page=20`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10">Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group block shadow-md rounded-xl overflow-hidden"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={product.images?.[0]?.src || "/placeholder.jpg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-4">
              <h2 className="font-semibold">{product.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}