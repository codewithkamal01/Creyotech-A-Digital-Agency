import { motion } from "motion/react";
import React, { useRef, useState } from "react";

function ServiceCard({ service, index }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border-light
        dark:border-border-dark
        bg-bg-light
        dark:bg-secondary
        shadow-lg
        transition-all
        duration-300
      "
    >
      {/* Mouse Follow Border Glow */}
      <div
        className={`
          pointer-events-none
          absolute
          z-0
          h-[280px]
          w-[280px]
          rounded-full
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-purple-500
          blur-2xl
          transition-opacity
          duration-300
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        style={{
          left: position.x - 110,
          top: position.y - 110,
        }}
      />

      {/* Inner Card */}
      <div
        className="
          relative
          z-10
          m-[1px]
          flex
          items-center
          gap-6
          rounded-2xl
          bg-bg-light
          p-8
          transition-all
          duration-300
          dark:bg-secondary
        "
      >
        {/* Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-bg-soft dark:bg-secondary">
          <img src={service.icon} alt="" className="w-9 object-contain" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary dark:text-text-light">
            {service.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-text-secondary dark:text-text-light/70">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
