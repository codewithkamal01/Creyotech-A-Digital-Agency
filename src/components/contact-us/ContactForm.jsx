import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const services = [
  "Website Development",
  "SEO & GEO",
  "Digital Marketing",
  "Social Media Marketing",
  "Mobile App Development",
];

function ContactForm() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (selectedServices.length === 0)
      newErrors.services = "Select at least one service";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please complete all required fields");
      return;
    }

    try {
      setLoading(true);

      // API / EmailJS call here

      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Inquiry submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setSelectedServices([]);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
       py-10 px-5 lg:px-25
        bg-bg-light
        dark:bg-bg-dark
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Intro Content */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span
            className="
      inline-flex
      rounded-full
      bg-primary/10
      px-4
      py-2
      text-sm
      font-medium
      text-primary
    "
          >
            Let&apos;s Start a Conversation
          </span>

          <h2
            className="
      mt-4
      text-3xl
      font-bold
      leading-tight
      dark:text-text-light
      md:text-4xl
    "
          >
            Let&apos;s Find the Right Solution for Your Business
          </h2>

          <p
            className="
      mx-auto
      mt-5
      max-w-3xl
      text-base
      leading-relaxed
      text-text-secondary
      md:text-lg
    "
          >
            Whether you need quick guidance or a detailed consultation,
            We&apos;re here to support you. Every business challenge can be
            addressed with a budget-friendly approach or an optimized, long-term
            solution. We help you evaluate both, clearly and transparently.
          </p>

          <p
            className="
      mt-4
      font-medium
      text-primary
    "
          >
            Don&apos;t hesitate to get in touch.
          </p>
        </div>

        {/* Trust Assurances */}
        <div className="mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {[
            "NDA Available on Request",
            "Dedicated Product Specialists",
            "Multiple Solution Quotations",
            "Milestone-Based Billing",
            "Up to Full Refund Assurance",
          ].map((item) => (
            <div
              key={item}
              className="
        rounded-2xl
        border
        border-primary/10
        bg-white
        p-4
        text-center
        shadow-sm
        transition-all
        hover:border-primary/20
        hover:shadow-md
        dark:border-border-dark
        dark:bg-secondary
      "
            >
              <div
                className="
          mx-auto
          mb-3
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-primary/10
          text-primary
        "
              >
                ✓
              </div>

              <p className="text-sm font-medium dark:text-text-light">{item}</p>
            </div>
          ))}
        </div>

        <div
          className="
            overflow-hidden
            rounded-[24px]
            border
            border-border-light
            bg-white
            shadow-xl
            dark:border-border-dark
            dark:bg-secondary
          "
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* FORM */}
            <div className="flex items-center">
              <div className="w-full p-6 lg:p-8">
                <h2
                  className="
                  mt-4
                  text-3xl
                  font-bold
                  dark:text-text-light
                "
                >
                  Get Expert Advice for Your Business
                </h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Names */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name *"
                        className="
  h-12
  w-full
  rounded-xl
  border
  border-border-light
  bg-bg-soft
  px-4
  text-sm
  outline-none
  transition-all
  focus:border-primary
  focus:ring-4
  focus:ring-primary/10
"
                      />

                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="
  h-12
  w-full
  rounded-xl
  border
  border-border-light
  bg-bg-soft
  px-4
  text-sm
  outline-none
  transition-all
  focus:border-primary
  focus:ring-4
  focus:ring-primary/10
"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className="
  h-12
  w-full
  rounded-xl
  border
  border-border-light
  bg-bg-soft
  px-4
  text-sm
  outline-none
  transition-all
  focus:border-primary
  focus:ring-4
  focus:ring-primary/10
"
                      />

                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className="
  h-12
  w-full
  rounded-xl
  border
  border-border-light
  bg-bg-soft
  px-4
  text-sm
  outline-none
  transition-all
  focus:border-primary
  focus:ring-4
  focus:ring-primary/10
"
                      />

                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="mb-3 block text-sm font-medium dark:text-text-light">
                      Services Interested In
                    </label>

                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                            selectedServices.includes(service)
                              ? "bg-primary text-white"
                              : "border border-border-light bg-bg-soft hover:border-primary dark:border-border-dark"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>

                    {errors.services && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.services}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="
                    w-full
                    rounded-xl
                     min-h-[110px]
                    border
                    border-border-light
                    bg-bg-soft
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10
                    dark:border-border-dark
                  "
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary
                    py-3.5
                    font-medium
                    text-white
                    transition-all
                    hover:scale-[1.01]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                  >
                    {loading ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              </div>
            </div>
            {/* MAP */}
            <div className="relative h-full min-h-[420px] overflow-hidden">
              <iframe
                title="Creyotech Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3687.573562388398!2d88.4041714!3d22.4450708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027371380ecbaf%3A0x7d7545f0ecf59042!2sCreyotech!5e0!3m2!1sen!2sin!4v1780757669142!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Optional overlay */}
              <div
                className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-t
      from-black/10
      via-transparent
      to-transparent
    "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
