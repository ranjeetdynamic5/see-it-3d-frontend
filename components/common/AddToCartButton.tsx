"use client";

export default function AddToCartButton({
  productId,
}: {
  productId: number;
}) {
  const handleAddToCart = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_WC_STORE_API}/cart/add-item`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            id: productId,
            quantity: 1,
          }),
        }
      );

      window.location.href = `${process.env.NEXT_PUBLIC_WC_API_URL}/cart`;
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-[#0b2b3c] hover:bg-[#09415c] text-white px-10 py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-md"
    >
      Add to Cart
    </button>
  );
}
