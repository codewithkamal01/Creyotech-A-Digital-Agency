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
        <div className="grid grid-cols-[1fr_1fr_1fr_320px] gap-6">
          {serviceSections.map((section) => (
            <MegaMenuSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}

          {/* CTA */}
          <div
            className="
        rounded-3xl
        bg-gradient-to-br
        from-primary
        to-primary/80
        p-7
        mr-5
        text-white
      "
          >
            <p className="text-xs uppercase tracking-[3px] opacity-80">
              Creyotech
            </p>

            <h3 className="mt-4 text-2xl font-semibold leading-tight">
              Let&apos;s build your next digital growth engine.
            </h3>

            <p className="mt-3 text-sm text-white/80">
              Websites, SEO, GEO, Social Media & Lead Generation.
            </p>

            <Link
              to="/contact-us"
              className="
          mt-6
          inline-flex
          items-center
          rounded-full
          bg-white
          px-5
          py-3
          text-sm
          font-medium
          text-primary
          transition-all
          hover:scale-105
        "
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </NavDropdown>
    </>
  );
}

export default NavLinks;
