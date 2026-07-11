import MegaMenuSection from "./MegaMenuSection";
import NavDropdown from "./NavDropdown";
import { serviceSections } from "./navbarData";
import { Link } from "react-router-dom";

function NavLinks({ activeMenu, setActiveMenu }) {
  return (
    <>
      {/* Services */}
      <NavDropdown
        label="Services"
        menuKey="services"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      >
        <div className="grid gap-4 md:grid-cols-[1.5fr_1.5fr_1.5fr_2fr]">
          {serviceSections.map((section, index) => (
            <MegaMenuSection
              key={section.title}
              title={section.title}
              link={section.href}
              items={section.items}
              compact={index === serviceSections.length - 1}
            />
          ))}
        </div>
      </NavDropdown>
    </>
  );
}

export default NavLinks;
