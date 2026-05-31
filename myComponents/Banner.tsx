"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    image: "/images/banner1.jpg",
    title: "Luxury Shoes for Every Step",
    subtitle: "Premium comfort and timeless style",
  },
  {
    image: "/images/banner2.jpg",
    title: "Designed for Performance",
    subtitle: "Crafted for durability and elegance",
  },
  {
    image: "/images/banner3.jpg",
    title: "Step Into Confidence",
    subtitle: "Where fashion meets comfort",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {slide.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
              {slide.subtitle}
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
                Shop Now
              </Button>

              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === current
                ? "bg-yellow-400"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
