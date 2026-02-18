import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// ✅ Server-side only environment variables
const apiUrl = process.env.WC_API_URL as string;
const consumerKey = process.env.WC_CONSUMER_KEY as string;
const consumerSecret = process.env.WC_CONSUMER_SECRET as string;

if (!apiUrl || !consumerKey || !consumerSecret) {
  throw new Error("WooCommerce environment variables are missing.");
}

// ✅ Woo API instance
export const wcApi = new WooCommerceRestApi({
  url: apiUrl,
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  version: "wc/v3",
});

// ✅ Generic safe request wrapper
async function safeWooRequest(endpoint: string, params?: any) {
  try {
    const response = await wcApi.get(endpoint, params);
    return response.data;
  } catch (error: any) {
    console.error(`Woo API Error (${endpoint}):`, error?.response?.data || error.message);
    return [];
  }
}

// ✅ Get Training Products
export async function getTrainingProducts() {
  return await safeWooRequest("products", {
    category: "training", // ⚠ slug confirm kar lena
    per_page: 20,
  });
}

// ✅ Get All Products (for homepage/shop)
export async function getProducts(limit = 10) {
  return await safeWooRequest("products", {
    per_page: limit,
  });
}

// ✅ Get Single Product by Slug
export async function getProductBySlug(slug: string) {
  const products = await safeWooRequest("products", {
    slug: slug,
  });

  return products?.[0] || null;
}
