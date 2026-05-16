import React, { useState } from "react";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      onSubmit={handleSubmit}
      className="
        px-4
        py-3
        text-gray-700
        dark:text-white
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Form Container */}
        <div
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-xl
            dark:border-gray-700
            dark:bg-gray-900
            sm:p-10
          "
        >
          <form className="flex flex-col gap-6">
            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Name
                </label>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    dark:border-gray-700
                    dark:bg-gray-800
                    focus-within:border-primary
                  "
                >
                  <img
                    src={assets.person_icon}
                    alt=""
                    className="w-5 opacity-60"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="
                      w-full
                      bg-transparent
                      py-3
                      outline-none
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Email
                </label>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    dark:border-gray-700
                    dark:bg-gray-800
                    focus-within:border-primary
                  "
                >
                  <img
                    src={assets.email_icon}
                    alt=""
                    className="w-5 opacity-60"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="
                      w-full
                      bg-transparent
                      py-3
                      outline-none
                    "
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  py-3
                  outline-none
                  transition-all
                  focus:border-primary
                  dark:border-gray-700
                  dark:bg-gray-800
                "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-primary
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                hover:scale-105
                hover:shadow-lg
              "
            >
              Send Message
              <img src={assets.arrow_icon} alt="" className="w-4" />
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactForm;
