"use client";
import { useCartStore } from "@/store/useCartStore";

export default function AddToCartButton({ product }: { product: any }) {
  const { items, addToCart, removeFromCart } = useCartStore();

  const cartItem = items.find((i) => i.id === product.id);

  if (cartItem) {
    return (
      <div className="flex items-center gap-4">
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
        >
          -
        </button>
        <span className="font-medium">{cartItem.quantity}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
        >
          +
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>
  );
}
