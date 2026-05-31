import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Gem,
  Footprints,
  Headset,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const services = [
  {
    title: "Free Worldwide Shipping",
    description:
      "Enjoy fast and secure delivery on all orders, bringing premium footwear directly to your doorstep.",
    icon: Truck,
  },
  {
    title: "Premium Quality Guarantee",
    description:
      "Every pair is crafted using high-quality materials to ensure durability, comfort, and luxury.",
    icon: ShieldCheck,
  },
  {
    title: "Easy 30-Day Returns",
    description:
      "Shop with confidence knowing you can easily return or exchange your shoes within 30 days.",
    icon: RotateCcw,
  },
  {
    title: "Luxury Craftsmanship",
    description:
      "Our shoes are designed with precision craftsmanship to deliver elegance and lasting style.",
    icon: Gem,
  },
  {
    title: "Perfect Fit Technology",
    description:
      "Engineered for comfort with ergonomic designs that support every step you take.",
    icon: Footprints,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our support team is always ready to assist you with any questions about your purchase.",
    icon: Headset,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-20 px-6">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Our Premium Services
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide more than just footwear — we deliver a luxury experience
            designed for comfort, reliability, and style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="bg-neutral-900 border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-yellow-400/10 p-4">
                    <Icon className="text-yellow-400" size={28} />
                  </div>

                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
