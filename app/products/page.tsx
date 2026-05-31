"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyHeader from "@/myComponents/ProductsHeader";
import PropertyCard from "@/myComponents/ProductCard";
import Navbar2 from "@/myComponents/NavBar2";

import { products } from "@/lib/products";

export default function ProductsPage() {
  const [genderFilter, setGenderFilter] = useState("ALL");
  const [typeFilter, setTypeFilter] = useState("ALL");

  const filteredProducts = products.filter((p) => {
    const genderMatch = genderFilter === "ALL" || p.gender === genderFilter;
    const typeMatch = typeFilter === "ALL" || p.type === typeFilter;
    return genderMatch && typeMatch;
  });

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar2 />
      <PropertyHeader />

      <div className="container mx-auto px-6 py-14">
        {/* FILTER */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {/* Gender Tabs */}
          <Tabs
            defaultValue="ALL"
            onValueChange={(value) => setGenderFilter(value)}
          >
            <TabsList className="bg-white">
              <TabsTrigger value="ALL">All</TabsTrigger>
              <TabsTrigger value="M">Men</TabsTrigger>
              <TabsTrigger value="F">Women</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Type Tabs */}
          <Tabs
            defaultValue="ALL"
            onValueChange={(value) => setTypeFilter(value)}
          >
            <TabsList className="bg-white">
              <TabsTrigger value="ALL">All</TabsTrigger>
              <TabsTrigger value="Casual">Casual</TabsTrigger>
              <TabsTrigger value="Corporate">Corporate</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* PRODUCT GRID */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => {
            console.log("rendering product", product.id, product.title);
            return (
              <PropertyCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={
                  product.description ||
                  "High-quality shoe with exceptional comfort and style."
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
