import { fetchProduct } from "@/lib/api";
import AddToCartButton from "./AddToCartButton";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

// Async server component returning Promise<JSX.Element>
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const {id} = await params;
  const product: Product = await fetchProduct(id);

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="w-full h-96 object-contain"
        priority
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mb-6">${product.price}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
