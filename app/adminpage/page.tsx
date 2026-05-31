"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "tummy") {
      router.push("/dashboard");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="w-100 bg-neutral-900 border-yellow-500/20">
        <CardContent className="p-8 flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-yellow-400 text-center">
            Admin Login
          </h1>

          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            onClick={handleLogin}
            className="bg-yellow-400 text-black hover:bg-yellow-300"
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
