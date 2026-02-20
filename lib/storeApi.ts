export async function storeFetch(endpoint: string) {
  try {
    const base = process.env.NEXT_PUBLIC_WC_STORE_API;

    if (!base) {
      console.error("Store API missing");
      return null;
    }

    const res = await fetch(`${base}/${endpoint}`, {
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