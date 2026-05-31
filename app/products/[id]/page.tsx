import ProductDetail from "@/myComponents/ProductDetail";
import ProductDetailHeader from "@/myComponents/ProductDetailHeader";
import { products } from "@/lib/products";
import React from "react";
import { notFound } from "next/navigation";

// ensure this page is rendered on every request so params are always respected
export const dynamic = "force-dynamic";

interface PageProps {
  params: { id: string };
}

export default async function ProductDetails({ params }: PageProps) {
  // params may be a promise in Next.js 16; await it before using
  const { id: idParam } = await params;
  if (!idParam || typeof idParam !== "string") {
    notFound();
  }

  // find product by matching the id string
  const product = products.find((p) => p.id.toString() === idParam);
  if (!product) {
    notFound();
  }

  const { image, title, price, description = "" } = product;

  return (
    <div>
      <ProductDetailHeader />

      <ProductDetail
        image={image}
        title={title}
        price={price}
        description={description}
      />
    </div>
  );
}
