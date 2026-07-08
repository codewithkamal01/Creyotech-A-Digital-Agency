import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

export default function FloatingContact() {
  return (
    <div className="absolute -right-2 bottom-10 md:bottom-16 lg:bottom-20 z-20 flex flex-col gap-3">
      {/* Call */}
      <motion.a
        href="tel:+919674665053"
        whileHover={{ x: -8 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center overflow-hidden rounded-l-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-[0_10px_30px_rgba(37,99,235,.45)]"
      >
        <div className="flex h-14 w-14 items-center justify-center">
          <Phone size={22} />
        </div>
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919674665053"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: -8 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center overflow-hidden rounded-l-full bg-gradient-to-r from-green-500 to-green-600 shadow-[0_10px_30px_rgba(34,197,94,.45)]"
      >
        <div className="flex h-14 w-14 items-center justify-center">
          <FaWhatsapp size={24} />
        </div>
      </motion.a>
    </div>
  );
}
