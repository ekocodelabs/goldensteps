"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductDetailHeader() {
  return (
    <div className="w-full bg-black border-b border-yellow-500/20">
      <div className="container mx-auto px-6 py-6 flex items-center">
        <Link href="/products">
          <Button
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Button>
        </Link>
      </div>
    </div>
  );
}
