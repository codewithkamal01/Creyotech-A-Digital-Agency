import { HiOutlineBuildingOffice2, HiOutlineEnvelope } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

const locations = [
  {
    title: "Corporate Office",
    address:
      "Module 232, SDF Building, EP & GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091",
  },
  {
    title: "Registered Office",
    address:
      "554 South Kumrakhali, Near Future Institute of Engineering and Management, Sonarpur Station Road, Kolkata, West Bengal 700103",
  },
  {
    title: "Ahmedabad Branch",
    address:
      "554 Iscon Elegance, Nr. Shapath 5, Prahladnagar Cross Roads, Sarkhej–Gandhinagar Hwy, Ahmedabad, Gujarat 380015",
  },
  {
    title: "Pune Branch",
    address:
      "1 Kharadi, Dholepatil Farms Rd, Opp. EON Free Zone, MIDC, Knowledge Park, Pune, Maharashtra 411014",
  },
];

function OfficeLocations() {
  return (
    <section className="py-5 px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Our Presence
          </span>

          <h2 className="mt-4 text-4xl font-bold dark:text-text-light">
            Offices Across India
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Visit our offices or connect with our team from anywhere in India.
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((office) => (
            <div
              key={office.title}
              className="
                group
                rounded-3xl
                border
                border-border-light
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-xl
                dark:border-border-dark
                dark:bg-secondary
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <HiOutlineBuildingOffice2 size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold dark:text-text-light">
                    {office.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {office.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Channels */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Email Card */}
          <div
            className="
      group
      rounded-3xl
      border
      border-border-light
      bg-white
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-primary/30
      hover:shadow-xl
      dark:border-border-dark
      dark:bg-secondary
    "
          >
            <div className="flex items-start gap-4">
              <div
                className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
        "
              >
                <HiOutlineEnvelope size={28} />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold dark:text-text-light">
                  Email Us
                </h3>

                <p className="mt-2 text-sm text-text-secondary">
                  For project inquiries, partnerships, and business discussions.
                </p>

                <div className="mt-5 space-y-2 dark:text-text-light">
                  <a
                    href="mailto:hr@creyotech.com"
                    className="
              block
              font-medium
              transition-colors
              hover:text-primary
            "
                  >
                    hr@creyotech.com
                  </a>

                  <a
                    href="mailto:creyotech@gmail.com"
                    className="
              block
              font-medium
              transition-colors
              hover:text-primary
            "
                  >
                    creyotech@gmail.com
                  </a>
                </div>

                <a
                  href="mailto:hr@creyotech.com"
                  className="
            mt-5
            inline-flex
            items-center
            rounded-xl
            bg-primary
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition-all
            hover:opacity-90
          "
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div
            className="
      group
      rounded-3xl
      border
      border-border-light
      bg-white
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-primary/30
      hover:shadow-xl
      dark:border-border-dark
      dark:bg-secondary
    "
          >
            <div className="flex items-start gap-4">
              <div
                className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-green-500/10
          text-green-500
        "
              >
                <FaWhatsapp size={28} />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold dark:text-text-light">
                  WhatsApp
                </h3>

                <p className="mt-2 text-sm text-text-secondary">
                  Get quick responses from our team and discuss your
                  requirements.
                </p>

                <div className="mt-5">
                  <a
                    href="https://wa.me/919674665053"
                    target="_blank"
                    rel="noreferrer"
                    className="
              text-lg
              font-semibold
              transition-colors
              hover:text-green-500
              dark:text-text-light  
            "
                  >
                    +91 96746 65053
                  </a>
                </div>

                <a
                  href="https://wa.me/919674665053"
                  target="_blank"
                  rel="noreferrer"
                  className="
            mt-5
            inline-flex
            items-center
            rounded-xl
            bg-green-500
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition-all
            hover:opacity-90
          "
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeLocations;
