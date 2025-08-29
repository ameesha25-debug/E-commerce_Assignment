"use client";

import { useState, useEffect } from "react";

export default function HeroBanner() {
  const heroImages = [
    "/images/hero2.jpg",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-96 mb-8 rounded-2xl overflow-hidden">
      {heroImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Hero ${index + 1}`}
          className={`absolute w-full h-96 object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
        <h1 className="text-5xl font-bold mb-4">Welcome to MyShop</h1>
        <p className="text-lg">Find the best products at unbeatable prices!</p>
      </div>
    </section>
  );
}
