import { fetchProduct } from "@/lib/api";
import AddToCartButton from "./AddToCartButton";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <img src={product.image} alt={product.title} className="w-full h-96 object-contain" />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mb-6">${product.price}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
