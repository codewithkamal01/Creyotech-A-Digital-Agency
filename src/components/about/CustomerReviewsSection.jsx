import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cust_reviews } from "../../assets/assets";

const reviewData = [
  {
    logo: cust_reviews[4],
    rating: 4.8,
    platform: "Clutch",
  },
  {
    logo: cust_reviews[7],
    rating: 4.7,
    platform: "Google",
  },
  {
    logo: cust_reviews[5],
    rating: 4.4,
    platform: "Upwork",
  },
  {
    logo: cust_reviews[3],
    rating: 4.5,
    platform: "GoodFirms",
  },
  {
    logo: cust_reviews[1],
    rating: 4.6,
    platform: "Trustpilot",
  },
  {
    logo: cust_reviews[2],
    rating: 4.5,
    platform: "UpCity",
  },
];

function RatingStars({ rating }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const fillPercentage = Math.min(Math.max(rating - (star - 1), 0), 1);

        return (
          <div
            key={star}
            className="
              relative
              h-5
              w-5
            "
          >
            {/* Empty Star */}
            <Star
              size={18}
              className="
                absolute
                text-yellow-300/30
              "
            />

            {/* Filled Star */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: `${fillPercentage * 100}%`,
              }}
            >
              <Star
                size={18}
                className="
                  fill-yellow-400
                  text-yellow-400
                "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CustomerReviewsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-15
        py-20
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-primary/15
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-72
            w-72
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            mb-16
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[2px]
              text-primary
            "
          >
            Client Reviews
          </div>

          <h2
            className="
              mt-6
              max-w-5xl
              text-3xl
              font-bold
              leading-tight
              text-text-primary
              dark:text-white
              sm:text-5xl
            "
          >
            Best in class customer ratings and reviews
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-6
          "
        >
          {reviewData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="
                group
                relative
                overflow-hidden
                rounded-4xl
                border
                border-primary/10
                bg-white/50
                p-5
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-primary/20
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-24
                  w-24
                  rounded-full
                  bg-primary/10
                  blur-3xl
                  transition-all
                  duration-300
                  group-hover:scale-150
                "
              />

              {/* Logo */}
              <div
                className="
                  mx-auto
                  flex
                  h-28
                  w-34
                  sm:w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  p-4
                  shadow-sm
                  dark:bg-secondary
                "
              >
                <img
                  src={item.logo}
                  alt="review platform"
                  className="
                    max-h-30
                    w-auto
                    object-cover
                  "
                />
              </div>

              {/* Rating */}
              <p
                className="
    mt-5
    text-sm
    font-medium
    leading-6
    text-text-primary
    dark:text-white
  "
              >
                {item.rating}/5 on {item.platform}
              </p>

              {/* Stars */}
              <div className="mt-4">
                <RatingStars rating={item.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviewsSection;
