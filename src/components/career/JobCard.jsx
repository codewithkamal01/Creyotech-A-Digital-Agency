import { ArrowRight, Briefcase, MapPin, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border-light
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
        dark:border-white/10
        dark:bg-secondary
      "
    >
      {/* Hover Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-primary/5
          via-transparent
          to-primary/5
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {/* Category + Type */}
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="
              rounded-full
              bg-primary/10
              px-3
              py-1
              text-sm
              font-medium
              text-primary
            "
          >
            {job.category}
          </span>

          <span
            className="
              rounded-full
              bg-green-500/10
              px-3
              py-1
              text-sm
              font-medium
              text-green-600
              dark:text-green-400
            "
          >
            {job.type}
          </span>
        </div>

        {/* Job Title */}
        <h3
          className="
            mt-4
            text-2xl
            font-bold
            text-text-primary
            transition-colors
            group-hover:text-primary
            dark:text-text-light
          "
        >
          {job.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-1.5
            max-w-3xl
            leading-relaxed
            text-text-secondary
            dark:text-text-light/75
          "
        >
          {job.description}
        </p>

        {/* Bottom Row */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-4
            border-t
            border-border-light
            pt-5
            dark:border-white/10
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6">
            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                text-text-secondary
                dark:text-text-light/70
              "
            >
              <MapPin size={16} />
              {job.location}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                text-text-secondary
                dark:text-text-light/70
              "
            >
              <Briefcase size={16} />
              {job.type}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                text-text-secondary
                dark:text-text-light/70
              "
            >
              <Clock3 size={16} />
              {job.experience}
            </div>
          </div>

          {/* CTA */}
          <Link
            to={`/careers/${job.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-primary
              transition-all
              duration-300
              hover:gap-3
            "
          >
            View Details
            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
