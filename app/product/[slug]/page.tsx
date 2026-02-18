import { wcApi } from "@/lib/woocommerce";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const res = await wcApi.get("products", {
    slug,
  });

  const product = res.data?.[0];

  if (!product) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <p className="text-xl font-semibold mb-6">£{product.price}</p>

      {product.images?.[0]?.src && (
        <Image
          src={product.images[0].src}
          alt={product.name}
          width={500}
          height={500}
          priority
          className="rounded-lg mb-6"
        />
      )}

      {product.description && (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      )}

      {/* Add to cart – WooCommerce default checkout */}
      <a
        href={`${process.env.NEXT_PUBLIC_WC_API_URL}/checkout/?add-to-cart=${product.id}`}
        className="inline-block mt-8 bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Add to Cart
      </a>
    </main>
  );
}
