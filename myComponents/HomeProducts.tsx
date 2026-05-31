import Link from "next/link";
import { Button } from "@/components/ui/button";
import HomeProductCard from "./HomeProductCard";
import { products } from "@/lib/products";

// pick the first four products from the shared list
const featured = products.slice(0, 4);

export default function HomeProducts() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Featured Products
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our most popular footwear designed for style, comfort, and
            performance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {featured.map((product) => (
            <HomeProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={`NGN${product.price}`}
            />
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <Link href="/products">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-6 text-lg">
              See All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
