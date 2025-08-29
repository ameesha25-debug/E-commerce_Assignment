"use client";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
}: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const items = useCartStore((state) => state.items);

  const productInCart = items.find((item) => item.id === id);

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      <Link href={`/products/${id}`}>
        <Image
          src={image}
          alt={title}
          width={300} // specify width
          height={300} // specify height
          className="object-contain mb-4"
        />{" "}
        <h3 className="font-medium">{title}</h3>
      </Link>
      <div className="mt-2 flex justify-between items-center">
        <p className="text-blue-600 font-bold">${price}</p>

        {productInCart ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => removeFromCart(id)}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-2">{productInCart.quantity}</span>
            <button
              onClick={() =>
                addToCart({ id, title, price, image, quantity: 1 })
              }
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart({ id, title, price, image, quantity: 1 })}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
