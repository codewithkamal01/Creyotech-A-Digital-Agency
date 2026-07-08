import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";

function MegaMenuSection({ title, items, link }) {
  return (
    <div className="space-y-3">
      <Link
        to={link}
        className="text-xs font-semibold uppercase tracking-[3px] text-primary block"
      >
        {title}
      </Link>

      {items.map((item, index) => (
        <PackageCard key={index} title={item.title} href={item.href} />
      ))}
    </div>
  );
}

export default MegaMenuSection;
