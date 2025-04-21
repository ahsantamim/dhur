import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Added Next.js Link import

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="group relative overflow-hidden">
      {/* Image with hover effect */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm font-medium uppercase tracking-wider text-gray-300">
            {role}
          </p>
          <p className="mt-4 text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {bio}
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
};

export default function AboutTeam() {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With over 15 years of industry experience, Alex leads our company with a vision for innovation and excellence.",
    },
    {
      name: "Jamie Chen",
      role: "CTO",
      image:
        "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Jamie drives our technical strategy, ensuring we stay at the cutting edge of technology innovation.",
    },
    {
      name: "Taylor Wilson",
      role: "Head of Design",
      image:
        "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With an eye for detail and a passion for user experience, Taylor leads our design team to create exceptional products.",
    },
    {
      name: "Jordan Smith",
      role: "Head of Operations",
      image:
        "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Jordan ensures our operations run smoothly and efficiently, with a focus on continuous improvement.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Subtle SVG background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          className="absolute left-0 bottom-0 h-64 w-64 translate-x-1/3 translate-y-1/3"
          viewBox="0 0 100 100"
        >
          <path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="black"
            strokeWidth="8"
          />
        </svg>
        <svg
          className="absolute right-0 top-0 h-80 w-80 -translate-x-1/4 -translate-y-1/4"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="black"
            strokeWidth="8"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Team
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            The People Behind Our Success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Meet the talented individuals who make our company thrive with their
            expertise, passion, and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/careers"
            className="group inline-flex items-center bg-black px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Join Our Team
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
