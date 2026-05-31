"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddProduct() {
  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-3xl font-bold text-yellow-400">Add New Shoe</h1>

      <div className="space-y-6">
        {/* Image */}
        <div className="space-y-2">
          <Label>Image</Label>
          <Input type="file" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Label>Title</Label>
          <Input placeholder="Shoe title" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea placeholder="Product description" />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <Label>Price</Label>
          <Input type="number" placeholder="Price" />
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label>Gender</Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="M">Men</SelectItem>
              <SelectItem value="F">Women</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type */}
        <div className="space-y-2">
          <Label>Type</Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Casual">Casual</SelectItem>
              <SelectItem value="Corporate">Corporate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
          Add Product
        </Button>
      </div>
    </div>
  );
}
