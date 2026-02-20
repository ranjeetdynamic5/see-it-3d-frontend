import Link from "next/link";
import Image from "next/image";

/* ---------------------------------------------
   FETCH TRAINING PRODUCTS (Store API)
--------------------------------------------- */
async function getTrainingProducts() {
  try {
    const base = process.env.NEXT_PUBLIC_WC_STORE_API;

    if (!base) {
      console.error("NEXT_PUBLIC_WC_STORE_API is missing");
      return [];
    }

    const res = await fetch(
      `${base}/products?category=training&per_page=100`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Training fetch failed:", res.status);
      return [];
    }

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Training fetch error:", error);
    return [];
  }
}

/* ---------------------------------------------
   COMPONENT
--------------------------------------------- */
export default async function TrainingCoursesGrid() {
  const products = await getTrainingProducts();

  if (!products.length) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-600">
          No training courses available right now.
        </p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-[36px] font-bold text-[#0b2b3c] leading-tight">
            Click on any training option to view our online course costs for complete value.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product: any) => {
            const image =
              product?.images?.[0]?.src ||
              "/training/training-banner.webp";

            return (
              <Link
                key={product.id}
                href={`/training/${product.slug}`}
                className="group block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={image}
                    alt={product.name || "Training course"}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Optional: Product Name Under Image */}
                <div className="p-4 bg-white">
                  <h3 className="text-sm font-semibold text-[#0b2b3c] group-hover:text-red-500 transition">
                    {product.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}