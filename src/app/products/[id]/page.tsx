// import { fetchProduct } from "@/lib/api";
// import AddToCartButton from "./AddToCartButton";
// import Image from "next/image";

// export default async function ProductDetailPage({ params }: { params: { id: string } }) {
//   const product = await fetchProduct(params.id);
//   return (
//     <div className="grid md:grid-cols-2 gap-12">
//      <Image
//   src={product.image}      // your image URL
//   alt={product.title}      // alt text for accessibility
//   width={400}              // specify width
//   height={400}             // specify height
//   className="w-full h-96 object-contain"
//   priority={true}          // optional: loads this image eagerly (good for hero/product images)
// />
//       <div>
//         <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//         <p className="text-gray-600 mb-6">{product.description}</p>
//         <p className="text-2xl font-bold text-blue-600 mb-6">${product.price}</p>
//         <AddToCartButton product={product} />
//       </div>
//     </div>
//   );
// }


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

// Next.js automatically passes params to page components
export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product: Product = await fetchProduct(params.id);

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
