"use client";

import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PropertyCardProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function PropertyCard({
  id,
  image,
  title,
  price,
  description,
}: PropertyCardProps) {
  return (
    <div>
      {/* Image */}
      <div className="relative">
        <Link
          href={`/products/${id}`}
          className="group block bg-neutral-900 border border-yellow-500/10 rounded-xl overflow-hidden hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
        >
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Fav Button */}
        <button className="absolute top-3 right-3 bg-black/60 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2">{description}</p>

        <p className="text-yellow-400 font-bold text-md">NGN{price}</p>

        <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 flex items-center gap-2">
          <ShoppingCart size={16} />
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
