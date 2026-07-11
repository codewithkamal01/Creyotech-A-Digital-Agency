import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const menuItemClass = `
group
flex
items-center
justify-between
gap-2
rounded-xl
border
border-transparent
bg-white/70
px-3
py-2
transition-all
duration-300
hover:-translate-y-0.5
hover:border-primary/20
hover:bg-primary/5
hover:shadow-sm
dark:bg-secondary/80
`;

function PackageCard({ title, href }) {
  return (
    <Link to={href} className={menuItemClass}>
      <div>
        <h3 className="text-sm font-medium leading-5 text-text-primary transition-colors group-hover:text-primary dark:text-text-light">
          {title}
        </h3>
      </div>

      <div className="rounded-full bg-primary/10 p-1.5 text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-white">
        <ArrowUpRight size={12} />
      </div>
    </Link>
  );
}

export default PackageCard;
