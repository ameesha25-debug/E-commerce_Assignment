"use client";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const increment = (item: typeof items[0]) => addToCart(item);
  const decrement = (item: typeof items[0]) => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      
      useCartStore.setState({
        items: items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        ),
      });
    }
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0)
    return <p className="text-center mt-12 text-lg">Your cart is empty.</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-center border p-4 rounded-lg gap-4"
          >
            <div className="flex items-center gap-4 flex-1">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-blue-600 font-semibold">${item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decrement(item)}
                className="px-3 py-1 border rounded hover:bg-gray-200 transition"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increment(item)}
                className="px-3 py-1 border rounded hover:bg-gray-200 transition"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
