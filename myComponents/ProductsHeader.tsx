"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];

export default function PropertyHeader() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-105 w-full overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Products banner"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Our Products
        </h1>
      </div>
    </div>
  );
}
