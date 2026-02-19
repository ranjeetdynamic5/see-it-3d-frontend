export const dynamic = "force-dynamic";
export const dynamicParams = true;

import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/woocommerce";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const image = product.images?.[0]?.src || "";
  const price =
    product.prices?.price
      ? (product.prices.price / 100).toFixed(2)
      : null;

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">
        {product.name}
      </h1>

      {price && (
        <p className="text-xl font-semibold mb-6">
          {product.prices.currency_prefix}
          {price}
        </p>
      )}

      {image && (
        <div className="relative w-full max-w-md aspect-square mb-8">
          <Image
            src={image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      )}
    </main>
  );
}
