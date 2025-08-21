import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ContactForm: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    }, 500);
  };

  return (
    <section className="py-16 sm:py-24 bg-neutral-50 relative overflow-hidden">
      {/* SVG Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg
          className="absolute -bottom-20 -left-20 h-80 w-80 rotate-12"
          viewBox="0 0 100 100"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="#DC2626"
            strokeWidth="10"
            fill="none"
          />
        </svg>

        <svg
          className="absolute top-20 right-0 h-64 w-64 text-red-600"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray="10,5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form Intro - 2/5 width on large screens */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="w-12 h-1 bg-red-600 mb-6"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Send Us A <span className="text-red-600">Message</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Whether you're interested in our products, want to request a
                sample, or have questions about our manufacturing process, we're
                here to help.
              </p>
              <p className="text-gray-600 mb-6">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className="mt-8 py-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  What happens next?
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-medium">
                      1
                    </span>
                    <p className="text-gray-600">
                      We'll review your inquiry within 24 hours
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-medium">
                      2
                    </span>
                    <p className="text-gray-600">
                      Our specialist will contact you to discuss details
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-medium">
                      3
                    </span>
                    <p className="text-gray-600">
                      We'll provide a tailored solution based on your needs
                    </p>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>

          {/* Contact Form - 3/5 width on large screens */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 sm:p-10 shadow-xl border border-gray-100"
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 text-green-600 text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Received!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Two column layout for name and email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Two column layout for phone and company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  {/* Subject dropdown */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Sample Request">Sample Request</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="Custom Manufacturing">
                        Custom Manufacturing
                      </option>
                      <option value="Partnership Opportunity">
                        Partnership Opportunity
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition-colors duration-300 font-medium"
                    >
                      Send Message
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
