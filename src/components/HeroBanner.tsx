// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function HeroBanner() {
//   const heroImages = ["/images/hero2.jpg"];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroImages.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [heroImages.length]);

//   return (
//     <section className="relative w-full h-96 mb-8 rounded-2xl overflow-hidden">
//       {heroImages.map((src, index) => (
//         <Image
//             src={src}
//             alt={`Hero ${index + 1}`}
//             fill
//             style={{ objectFit: "cover" }}
//             priority={index === 0} // first image loads faster
//           />
//       ))}

//       <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
//         <h1 className="text-5xl font-bold mb-4">Welcome to MyShop</h1>
//         <p className="text-lg">Find the best products at unbeatable prices!</p>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroBanner() {
  const heroImages = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full h-96 mb-8 rounded-2xl overflow-hidden">
      {/* Only render the current image */}
      <Image
        key={currentIndex}
        src={heroImages[currentIndex]}
        alt={`Hero ${currentIndex + 1}`}
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
        <h1 className="text-5xl font-bold mb-4">Welcome to MyShop</h1>
        <p className="text-lg">Find the best products at unbeatable prices!</p>
      </div>
    </section>
  );
}
