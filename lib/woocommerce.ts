// ✅ Base Store API URL
const baseUrl = process.env.NEXT_PUBLIC_WC_STORE_API;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_WC_STORE_API is missing.");
}

/* --------------------------------------------------
   GENERIC SAFE STORE API FETCH
-------------------------------------------------- */
async function storeFetch(endpoint: string) {
  try {
    const res = await fetch(`${baseUrl}/${endpoint}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Store API error:", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Store API crash:", error);
    return null;
  }
}

/* --------------------------------------------------
   GET TRAINING PRODUCTS (by category slug)
-------------------------------------------------- */
export async function getTrainingProducts() {
  const data = await storeFetch(
    "products?category=training&per_page=20"
  );

  return data || [];
}

/* --------------------------------------------------
   GET ALL PRODUCTS (Homepage / Shop)
-------------------------------------------------- */
export async function getProducts(limit = 10) {
  const data = await storeFetch(
    `products?per_page=${limit}`
  );

  return data || [];
}

/* --------------------------------------------------
   GET SINGLE PRODUCT BY SLUG
-------------------------------------------------- */
export async function getProductBySlug(slug: string) {
  const data = await storeFetch(
    `products?slug=${slug}`
  );

  return data?.[0] || null;
}
