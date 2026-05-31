import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-yellow-500/20">
      <div className="container mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4">GoldenStep</h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            GoldenStep delivers premium footwear designed for comfort,
            durability, and modern style. Step confidently with shoes crafted
            for performance and elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="#about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="#services"
                className="hover:text-yellow-400 transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-yellow-400 transition"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="hover:text-yellow-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              support@goldenstep.com
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              +1 (305) 555-0199
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-lg bg-neutral-900 hover:bg-yellow-400 hover:text-black transition"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-lg bg-neutral-900 hover:bg-yellow-400 hover:text-black transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-lg bg-neutral-900 hover:bg-yellow-400 hover:text-black transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-500/20 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} GoldenStep. All rights reserved.
      </div>
    </footer>
  );
}
