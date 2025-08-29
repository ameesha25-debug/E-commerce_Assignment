"use client";

import { fetchProducts } from "@/lib/api";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";



type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);
  <div>
    <HeroBanner />
    {/* Product carousels here */}
  </div>;

  const categories = [
    { title: "Today's Deal", products: products.slice(0, 6) },
    { title: "Flat 70% Off", products: products.slice(6, 12) },
    { title: "Most Searched", products: products.slice(12, 18) },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="mb-8">
        <Image
          src="/images/hero1.jpg"
          alt="Hero Banner"
          className="rounded-2xl object-cover"
          width={1920} // Set a width for optimization
          height={500} // Set a height for optimization
          priority // Optional: preloads the image for LCP
        />
      </section>

      {/* Product Carousels */}
      {categories.map((cat, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{cat.title}</h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
          >
            {cat.products.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  image={p.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
