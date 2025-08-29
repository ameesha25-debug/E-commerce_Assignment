import { fetchProducts } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: string | number;
  title: string;
  price: number;
  image: string;
};

export default async function ProductsPage() {
  const products = await fetchProducts();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p: Product)  => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <Image
              src={p.image}
              alt={p.title}
              width={300} // specify width
              height={300} // specify height
              className="object-contain mb-4"
            />

            <h3 className="font-medium">{p.title}</h3>
            <p className="text-blue-600 font-bold mt-2">${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
