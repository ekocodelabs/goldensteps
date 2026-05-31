"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const images = [
  "/images/about1.jpg",
  "/images/about2.jpg",
  "/images/about3.jpg",
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-black py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Carousel */}
        <div className="relative w-full h-105 overflow-hidden rounded-xl shadow-xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="About our shoe brand"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition ${
                  index === current
                    ? "bg-yellow-400"
                    : "bg-white/40 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
            About GoldenStep
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            At GoldenStep, we believe that great footwear is more than just
            fashion — it’s a statement of confidence and individuality. Our
            shoes are designed with premium materials, combining comfort,
            durability, and modern style.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            From casual wear to performance-driven designs, our mission is to
            provide shoes that support your lifestyle while elevating your
            personal style. Every pair reflects our dedication to craftsmanship
            and innovation.
          </p>

          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
