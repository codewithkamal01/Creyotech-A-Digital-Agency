import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import toast from "react-hot-toast";

function ProposalForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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

    const toastId = toast.loading("Sending proposal request...");

    const form = new FormData();

    form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    form.append("subject", "New Proposal Request - Creyotech");

    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("service", formData.service);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Proposal request submitted!", {
          id: toastId,
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error.message || "Failed to send request", {
        id: toastId,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <InputField
          icon={<FiUser />}
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email */}
        <InputField
          icon={<FiMail />}
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Phone */}
        <InputField
          icon={<FiPhone />}
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Service */}
        <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 dark:border-border-dark dark:bg-white/[0.03]">
          <HiOutlineBriefcase className="text-text-secondary" />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-transparent py-3 outline-none text-text-primary dark:text-white"
          >
            <option value="" className="text-text-primary dark:text-white">
              Select Service
            </option>

            <option className="text-black">Website Development</option>
            <option className="text-black">Mobile App Development</option>
            <option className="text-black">SEO / GEO</option>
            <option className="text-black">Digital Marketing</option>
            <option className="text-black">AI Product Development</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 py-4 dark:border-border-dark dark:bg-white/[0.03]">
        <FiMessageSquare className="mt-1 text-text-secondary" />

        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          required
          className="w-full resize-none bg-transparent outline-none dark:text-white"
        />
      </div>

      {/* Submit */}
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
        Request Proposal
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function InputField({
  icon,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 dark:border-border-dark dark:bg-white/[0.03]">
      <span className="text-text-secondary">{icon}</span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full bg-transparent py-3 outline-none dark:text-white"
      />
    </div>
  );
}

export default ProposalForm;
