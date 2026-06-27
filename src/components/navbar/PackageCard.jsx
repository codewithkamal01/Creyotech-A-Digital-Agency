import { Link } from "react-router-dom";

const menuItemClass = `
  block
  rounded-2xl
  border
  border-transparent
  p-3
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-primary/20
  hover:bg-primary/5
  hover:shadow-md
`;

function PackageCard({ title, href }) {
  return (
    <Link to={href} className={menuItemClass}>
      <h3 className="font-medium dark:text-text-light">{title}</h3>
    </Link>
  );
}

export default PackageCard;
