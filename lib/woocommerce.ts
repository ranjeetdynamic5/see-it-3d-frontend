import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const wcApi = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WC_API_URL as string,
  consumerKey: process.env.WC_CONSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
});
