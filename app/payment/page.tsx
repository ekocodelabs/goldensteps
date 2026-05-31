"use client";
import dynamic from "next/dynamic";

export default function Payment() {
  const PaymentLayout = dynamic(() => import("@/myComponents/PaymentLayout"), {
    ssr: false,
  });
  return (
    <div>
      <PaymentLayout />
    </div>
  );
}
