import React, { useState } from "react";
import assets from "../assets/assets";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import ServiceCarousel from "./home/ServiceCarousel";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending...");

    const form = new FormData();

    form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          id: toastId,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error.message || "Failed to send message", {
        id: toastId,
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="
        px-4
        py-3
        text-text-primary
        dark:text-text-light
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Form Container */}
        <div
          className="
    overflow-hidden
    rounded-3xl
    border
    border-border-light
    shadow-xl
    dark:border-border-dark
  "
        >
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* Left */}
            <div className="bg-bg-light p-5 dark:bg-secondary sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Header */}
                <div className="mb-5">
                  <h2 className="mt-2 text-3xl font-bold">Get Started</h2>
                </div>

                {/* Name */}
                <div className="group">
                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                    <FiUser className="text-lg text-text-secondary" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-transparent py-3 outline-none dark:text-secondary"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                      <FiMail className="text-lg text-text-secondary" />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-transparent py-3 outline-none dark:text-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Phone Number
                    </label>

                    <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                      <FiPhone className="text-lg text-text-secondary" />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="w-full bg-transparent py-3 outline-none dark:text-secondary"
                      />
                    </div>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Interested Service
                  </label>

                  <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                    <HiOutlineBriefcase className="text-lg text-text-secondary" />

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent py-3 outline-none dark:text-secondary"
                    >
                      <option value="">Select a Service</option>
                      <option>Website Development</option>
                      <option>Mobile App Development</option>
                      <option>Digital Marketing</option>
                      <option>Social Media Marketing</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Project Details
                  </label>

                  <div className="flex gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 py-4 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                    <FiMessageSquare className="mt-1 text-lg text-text-secondary" />

                    <textarea
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      required
                      className="w-full resize-none bg-transparent outline-none dark:text-secondary"
                    />
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  className="
      group
      flex
      w-full
      items-center
      justify-center
      gap-2
      rounded-2xl
      bg-primary
      px-8
      py-3
      font-medium
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
                >
                  Send Inquiry
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Right */}
            <ServiceCarousel />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactForm;
