import React from "react";
import Title from "./Title";
import ContactForm from "./ContactForm";
import { motion } from "motion/react";

function Contact() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className=" px-4 py-24 text-gray-700 dark:text-white sm:px-8 lg:px-16 xl:px-24"
    >
      <div className="mb-16 flex flex-col gap-6 items-center">
        <Title
          title="Reach out to us"
          desc="Ready to grow your brand? Let’s connect and build something exceptional together."
        />
      </div>
      <ContactForm />
    </motion.section>
  );
}

export default Contact;
