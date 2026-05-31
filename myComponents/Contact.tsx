import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-yellow-400 text-black text-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 py-2 px-4">
        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>support@goldenstep.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>+1 (305) 555-0199</span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>Miami, Florida, USA</span>
        </div>
      </div>
    </div>
  );
}
