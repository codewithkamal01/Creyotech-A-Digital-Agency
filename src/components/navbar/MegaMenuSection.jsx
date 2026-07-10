import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";
import { ArrowRight } from "lucide-react";

function MegaMenuSection({ title, items, link, compact = false }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200/70
        bg-slate-50/80
        p-3
        transition-all
        duration-300
        hover:border-primary/20
        hover:shadow-sm
        dark:border-white/10
        dark:bg-slate-900/40
      "
    >
      <Link
        to={link}
        className="
    group
    mb-3
    flex
    items-center
    justify-between
    text-sm
    font-semibold
    uppercase
    tracking-[2px]
    text-primary
    transition-colors
    dark:text-primary
  "
      >
        <span>{title}</span>

        <span
          className="
      flex
      items-center
      gap-1
      text-xs
      font-medium
      normal-case
      tracking-normal
      text-slate-500
      transition-all
      duration-300
      group-hover:gap-2
      group-hover:text-primary
      dark:text-slate-400
    "
        >
          Explore All
          <ArrowRight size={13} />
        </span>
      </Link>

      <div
        className={compact ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2"}
      >
        {items.map((item) => (
          <PackageCard key={item.href} title={item.title} href={item.href} />
        ))}
      </div>
    </div>
  );
}

export default MegaMenuSection;
