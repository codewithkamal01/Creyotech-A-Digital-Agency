import React, { useState } from "react";

function ServiceCard({ title, icon: Icon, desc }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group w-full [perspective:1400px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`
          relative
          h-[340px]
          w-full
          transition-transform
          duration-700
          ease-out
          [transform-style:preserve-3d]
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
          md:group-hover:[transform:rotateY(180deg)]
        `}
      >
        {/* FRONT SIDE */}
        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[30px]
            border
           border-black/[0.06]
            bg-white/90
            shadow-[0_10px_40px_rgba(0,0,0,0.06)]
            backdrop-blur-xl
            backface-hidden
           dark:border-white/[0.08]
            dark:bg-[#111111]
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >
          {/* Gradient Glow */}
          <div
            className="
              absolute
              -top-16
              left-1/2
              h-56
              w-56
              -translate-x-1/2
              rounded-full
              bg-primary/10
              blur-3xl

              dark:bg-primary/20
            "
          />

          {/* Subtle Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
              dark:opacity-[0.05]
              [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
              [background-size:32px_32px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              items-center
              justify-center
              px-8
              text-center
            "
          >
            {/* Icon */}
            <div
              className="
                mb-7
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-[26px]
                border
                border-primary/10
               bg-gradient-to-br from-primary/20 to-secondary/10
                shadow-lg
                transition-all
                duration-300
                group-hover:scale-105
                dark:border-white/10
               dark:from-primary/20 dark:to-white/5
              "
            >
              <Icon
                className="
                  h-11
                  w-11
                  text-secondary
                  dark:text-primary
                "
              />
            </div>

            {/* Title */}
            <h3
              className="
                max-w-[280px]
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-text-primary

                dark:text-white
              "
            >
              {title}
            </h3>

            {/* Short Desc */}
            <p
              className="
                mt-4
                max-w-[260px]
                text-sm
                leading-6
                text-text-secondary

                dark:text-white/65
              "
            >
              Powerful digital solutions crafted for modern businesses and
              scalable growth.
            </p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="
            absolute
            inset-0
            rounded-[30px]
            border
            border-black/5
            bg-white
            p-8
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            [transform:rotateY(180deg)]
            backface-hidden

            dark:border-white/10
            dark:bg-[#111111]
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >
          {/* Background Glow */}
          <div
            className="
              absolute
              bottom-0
              right-0
              h-40
              w-40
              rounded-full
              bg-primary/10
              blur-3xl

              dark:bg-primary/20
            "
          />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              {/* Mini Label */}
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-primary/10
                  bg-primary/5
                  px-4
                  py-1.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-secondary

                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-primary
                "
              >
                Service
              </span>

              {/* Title */}
              <h3
                className="
                  mt-6
                  text-2xl
                  font-bold
                  leading-tight
                  text-text-primary

                  dark:text-white
                "
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-text-secondary

                  dark:text-white/70
                "
              >
                {desc}
              </p>
            </div>

            {/* CTA */}
            <button
              className="
                mt-8
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-black/10
                bg-black/[0.03]
                px-5
                py-2.5
                text-sm
                font-medium
                text-text-primary
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-primary
                hover:text-white

                dark:border-white/10
                dark:bg-white/5
                dark:text-white
              "
            >
              Learn More
              <span className="text-base">↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
