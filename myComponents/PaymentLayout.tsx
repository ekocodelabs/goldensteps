// "use client";

// import { useState } from "react";
// import PaystackPop from "@paystack/inline-js";

// export default function PaymentLayout() {
//   const paystack = new PaystackPop();
//   const [email, setEmail] = useState("");
//   const [amount, setAmount] = useState("");

//   const handlePayment = () => {
//     paystack.newTransaction({
//       key: "pk_test_23ae77fd6b4eb016059a0cdf3681ba777b1bce58", // Replace with your Paystack public key
//       email,
//       amount: parseFloat(amount) * 100, // Paystack expects amount in kobo
//       onSuccess: (transaction) => {
//         alert(`Payment successful! Reference: ${transaction.reference}`);
//       },
//       onCancel: () => {
//         alert("Payment cancelled.");
//       },
//       onError: (error) => {
//         alert(`Payment error: ${error.message}`);
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center px-4">
//       <div className="w-full max-w-md rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 shadow-2xl shadow-yellow-500/10">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-bold text-yellow-400">Shoe Checkout</h1>

//           <p className="mt-2 text-sm text-zinc-400">
//             Enter your payment details below
//           </p>
//         </div>

//         {/* Form */}
//         <div className="space-y-5">
//           {/* Email Input */}
//           <div>
//             <label className="mb-2 block text-sm font-medium text-yellow-300">
//               Email Address
//             </label>

//             <input
//               type="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-4 text-white outline-none transition focus:border-yellow-400"
//             />
//           </div>

//           {/* Amount Input */}
//           <div>
//             <label className="mb-2 block text-sm font-medium text-yellow-300">
//               Amount
//             </label>

//             <input
//               type="number"
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-4 text-white outline-none transition focus:border-yellow-400"
//             />
//           </div>

//           {/* Button */}
//           <button
//             onClick={handlePayment}
//             className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-semibold text-black transition hover:bg-yellow-300 active:scale-[0.98]"
//           >
//             Proceed To Payment
//           </button>
//         </div>

//         {/* Footer */}
//         <div className="mt-6 text-center text-xs text-zinc-500">
//           Fast • Secure • Trusted
//         </div>
//       </div>
//     </div>
//   );
// }
