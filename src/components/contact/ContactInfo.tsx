import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  index: number;
  isManager?: boolean;
  isAssistantManager?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  details,
  index,
  isManager = false,
  isAssistantManager = false,
}) => {
  const getBorderColor = () => {
    if (isManager) return "border-red-500";
    if (isAssistantManager) return "border-blue-500";
    return "border-gray-100 hover:border-red-100";
  };

  const getHeaderBgColor = () => {
    if (isManager) return "bg-red-600/10";
    if (isAssistantManager) return "bg-blue-600/10";
    return "bg-red-600/5";
  };

  const getTitleExtra = () => {
    if (isManager) return " (Manager)";
    if (isAssistantManager) return " (Asst. Manager)";
    return "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col p-8 bg-white shadow-lg border ${getBorderColor()} ${
        isManager || isAssistantManager ? "border-2" : ""
      } transition-colors`}
    >
      <div
        className={`mb-6 inline-flex items-center justify-center rounded-full p-4 ${getHeaderBgColor()}`}
      >
        <div className="text-3xl sm:text-4xl text-red-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        {title}
        {isManager && (
          <span className="text-red-600 font-bold text-lg"> (Manager)</span>
        )}
        {isAssistantManager && (
          <span className="text-blue-500 font-bold"> (Asst. Manager)</span>
        )}
      </h3>
      <div className="space-y-2">
        {details.map((detail, idx) => (
          <p key={idx} className="text-gray-800 font-semibold text-xl">
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
      title: "ADDRESS",
      details: [
        "Khilkhet, Nikunja-2",
        "House #14, Road #14",
        "Nikunja-2, Dhaka-1229",
        "Bangladesh",
      ],
      isManager: false,
      isAssistantManager: false,
    },
    {
      icon: <FiMail />,
      title: "EMAIL",
      details: ["alam@js-texbd.com", "Nour Alam"],
      isManager: true,
      isAssistantManager: false,
    },
    {
      icon: <FiMail />,
      title: "EMAIL",
      details: ["nahid@js-texbd.com", "Nahidul Islam"],
      isManager: false,
      isAssistantManager: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Talk <span className="text-red-600">To Us</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to us through any of the following channels. We're
            committed to responding promptly to all inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <ContactCard
              key={index}
              icon={info.icon}
              title={info.title}
              details={info.details}
              index={index}
              isManager={info.isManager}
              isAssistantManager={info.isAssistantManager}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
