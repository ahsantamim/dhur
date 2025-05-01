import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  details,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col p-8 bg-white shadow-lg border border-gray-100 hover:border-red-100 transition-colors"
    >
      <div className="mb-6 inline-flex items-center justify-center rounded-full p-4 bg-red-600/5">
        <div className="text-3xl sm:text-4xl text-red-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <div className="space-y-2">
        {details.map((detail, idx) => (
          <p key={idx} className="text-gray-600">
            {detail}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const ContactInfo: React.FC = () => {
  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Visit Our Office",
      details: ["123 Fashion Avenue", "Dhaka, Bangladesh", "1230"],
    },
    {
      icon: <FiPhone />,
      title: "Phone Contact",
      details: ["+880 1234-567890", "+880 9876-543210"],
    },
    {
      icon: <FiMail />,
      title: "Email Us",
      details: ["info@jstex.com", "sales@jstex.com", "support@jstex.com"],
    },
    {
      icon: <FiClock />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9am - 6pm",
        "Saturday: 10am - 2pm",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Contact <span className="text-red-600">Information</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to us through any of the following channels. We're
            committed to responding promptly to all inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <ContactCard
              key={index}
              icon={info.icon}
              title={info.title}
              details={info.details}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
