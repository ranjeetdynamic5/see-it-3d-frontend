"use client";

export default function AddToCartButton({
  productId,
}: {
  productId: number;
}) {
  const handleAddToCart = () => {
    window.location.href =
      `${process.env.NEXT_PUBLIC_WC_API_URL}/?add-to-cart=${productId}`;
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
