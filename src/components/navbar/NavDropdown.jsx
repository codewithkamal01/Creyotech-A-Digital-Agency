import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function NavDropdown({
  label,
  activeMenu,
  setActiveMenu,
  menuKey,
  width = "w-[750px]",
  children,
}) {
  const isActive = activeMenu === menuKey;

  return (
    <div
      className="relative hidden sm:block"
      onMouseEnter={() => setActiveMenu(menuKey)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button
        className="
          flex
          items-center
          gap-1
          transition-all
          duration-300
          hover:text-primary
        "
      >
        {label}

        <ChevronDown
          size={16}
          className={`transition duration-300 ${isActive ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            className={`
              absolute
              left-1/2
              top-12
              ${width}
              -translate-x-1/2
              rounded-3xl
              border
              border-black/5
              bg-white
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              backdrop-blur-2xl
              dark:border-white/10
              dark:bg-secondary
            `}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavDropdown;
