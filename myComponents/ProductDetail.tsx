"use client";

import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductDetailProps = {
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function ProductDetail({
  image,
  title,
  price,
  description,
}: ProductDetailProps) {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Product Image */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden border border-yellow-500/10">
            <img
              src={image}
              alt={title}
              className="w-full h-125 object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>

            <p className="text-2xl text-yellow-400 font-bold">${price}</p>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 flex items-center gap-2 px-8 py-6">
                <ShoppingCart size={18} />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <Heart size={18} />
              </Button>
            </div>

            {/* Divider */}
            <div className="border-t border-yellow-500/20 pt-6">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">
                Product Description
              </h3>

              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
