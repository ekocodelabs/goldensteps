"use client";

import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CartPage() {
  const deliveryPrice = 100;

  const subtotal = products.reduce((acc, item) => acc + item.price, 0);

  const total = subtotal + deliveryPrice;

  return (
    <section className="min-h-screen bg-neutral-950 text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-yellow-400 mb-12">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-black border border-yellow-500/20"
              >
                <CardContent className="p-6 flex gap-6">
                  {/* Image */}

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  {/* Info */}

                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">{product.title}</h2>

                      <p className="text-gray-400 text-sm mt-2 max-w-md">
                        {product.description}
                      </p>
                    </div>

                    <p className="text-yellow-400 text-lg font-bold mt-4">
                      ${product.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}

          <div>
            <Card className="bg-black border border-yellow-500/20">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-yellow-400">
                  Order Summary
                </h2>

                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Delivery</span>
                  <span>${deliveryPrice}</span>
                </div>

                <div className="border-t border-yellow-500/20 pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-yellow-400">${total}</span>
                </div>

                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 text-lg py-6">
                  Place Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
