import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/cart/AddToCartButton";

/* ----------------------------
   FETCH SINGLE PRODUCT
---------------------------- */
async function getProduct(slug: string) {
  const base = process.env.NEXT_PUBLIC_WC_STORE_API;

  const res = await fetch(`${base}/products?slug=${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] ?? null;
}

/* ----------------------------
   FETCH RELATED PRODUCTS (ONLY 6)
---------------------------- */
async function getRelatedProducts(currentId: number) {
  const base = process.env.NEXT_PUBLIC_WC_STORE_API;

  const res = await fetch(
    `${base}/products?category=147&per_page=20`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const data = await res.json();

  return data
    .filter((item: any) => item.id !== currentId)
    .slice(0, 6);
}

/* ----------------------------
   PAGE
---------------------------- */
export default async function TrainingProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ IMPORTANT

  if (!slug) notFound();

  const product = await getProduct(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product.id);

  const image =
    product.images?.[0]?.src || "/training/training-banner.webp";

  const price =
    product.prices?.price
      ? (product.prices.price / 100).toFixed(2)
      : null;

  return (
    <>
      {/* ================= SEO STRUCTURED DATA ================= */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.name,
            image: image,
            description: product.short_description || "",
            offers: {
              "@type": "Offer",
              priceCurrency: product.prices?.currency_code,
              price: price,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* ================= BREADCRUMB ================= */}
          <nav className="text-sm text-gray-500 mb-10">
            <Link href="/training" className="hover:underline">
              Training
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">
              {product.name}
            </span>
          </nav>

          {/* ================= MAIN PRODUCT ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* IMAGE */}
            <div className="relative w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden shadow-xl mx-auto">
              <Image
                src={image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            {/* DETAILS */}
            <div>
              <h1 className="text-4xl font-bold text-[#0b2b3c] mb-6">
                {product.name}
              </h1>

              {price && (
                <p className="text-3xl font-bold text-[#d32f2f] mb-8">
                  {product.prices.currency_prefix}
                  {price}
                </p>
              )}

              {product.description && (
                <div
                  className="prose max-w-none mb-10 text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: product.description,
                  }}
                />
              )}

              {/* ✅ NEW CLEAN ADD TO CART */}
              <AddToCartButton productId={product.id} />

              {/* TRUST SECTION */}
              <div className="mt-10 text-sm text-gray-600 space-y-2 border-t pt-6">
                <p>✔ Live Expert Training</p>
                <p>✔ Official Authorised Course</p>
                <p>✔ Certificate Included</p>
                <p>✔ UK Based Support</p>
              </div>
            </div>
          </div>

          {/* ================= RELATED TRAININGS ================= */}
          {related.length > 0 && (
            <div className="mt-28">
              <h2 className="text-3xl font-bold text-[#0b2b3c] mb-12">
                Other Training Courses
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {related.map((item: any) => (
                  <Link
                    key={item.id}
                    href={`/training/${item.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden shadow-md">
                      <Image
                        src={item.images?.[0]?.src}
                        alt={item.name}
                        fill
                        sizes="(max-width: 300px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-[#0b2b3c] group-hover:text-red-500 transition">
                      {item.name}
                    </h3>
                  </Link>
                ))}
              </div>

              <div className="mt-14 text-center">
                <Link
                  href="/training"
                  className="inline-block bg-gray-200 hover:bg-gray-300 px-8 py-3 rounded-xl font-medium transition"
                >
                  View All Training Courses
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
