// import React from "react";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// interface TeamMemberProps {
//   name: string;
//   role: string;
//   image: string;
//   bio: string;
// }

// const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
//   return (
//     <div className="group relative overflow-hidden rounded-xl">
//       {/* Image with hover effect */}
//       <div className="relative aspect-[3/4] overflow-hidden">
//         <img
//           src={image}
//           alt={name}
//           className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
//           loading="lazy"
//         />
//         {/* Red gradient overlay on hover */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//         <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//       </div>

//       {/* Red accent bar */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-20"></div>

//       {/* Content overlay */}
//       <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
//         <div className="translate-y-8 transform transition-transform duration-300 group-hover:translate-y-0">
//           <h3 className="text-xl font-bold text-white">{name}</h3>
//           <p className="text-sm font-medium uppercase tracking-wider text-gray-300">
//             {role}
//           </p>
//           <p className="mt-4 text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//             {bio}
//           </p>
//         </div>
//       </div>

//       {/* Decorative element - updated to red */}
//       <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//     </div>
//   );
// };

// export default function AboutTeam() {
//   const teamMembers: TeamMemberProps[] = [
//     {
//       name: "Alex Morgan",
//       role: "CEO & Founder",
//       image:
//         "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       bio: "With over 15 years of industry experience, Alex leads our company with a vision for innovation and excellence.",
//     },
//     {
//       name: "Jamie Chen",
//       role: "CTO",
//       image:
//         "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       bio: "Jamie drives our technical strategy, ensuring we stay at the cutting edge of textile technology innovation.",
//     },
//     {
//       name: "Taylor Wilson",
//       role: "Head of Design",
//       image:
//         "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       bio: "With an eye for detail and a passion for user experience, Taylor leads our design team to create exceptional fabric products.",
//     },
//     {
//       name: "Jordan Smith",
//       role: "Head of Operations",
//       image:
//         "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       bio: "Jordan ensures our operations run smoothly and efficiently, with a focus on continuous improvement and sustainability.",
//     },
//   ];

//   return (
//     <section
//       id="team"
//       className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20 sm:py-28"
//     >
//       {/* Modern decorative elements with red accents */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
//         <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-red-100"></div>
//         <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-100"></div>

//         {/* SVG decorative elements */}
//         <svg
//           className="absolute top-1/4 right-10 h-48 w-48 text-red-600/10"
//           viewBox="0 0 100 100"
//         >
//           <circle
//             cx="50"
//             cy="50"
//             r="40"
//             stroke="currentColor"
//             strokeWidth="8"
//             fill="none"
//           />
//         </svg>

//         <svg
//           className="absolute bottom-1/4 left-10 h-64 w-64 text-red-600/5"
//           viewBox="0 0 100 100"
//         >
//           <rect
//             x="10"
//             y="10"
//             width="80"
//             height="80"
//             rx="10"
//             stroke="currentColor"
//             strokeWidth="10"
//             fill="none"
//           />
//         </svg>

//         <svg
//           className="absolute top-1/3 right-1/3 h-24 w-24 text-red-600/10 rotate-45"
//           viewBox="0 0 100 100"
//         >
//           <polygon
//             points="50,10 90,50 50,90 10,50"
//             stroke="currentColor"
//             strokeWidth="8"
//             fill="none"
//           />
//         </svg>
//       </div>

//       <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="mb-16 text-center">
//           <span className="mb-2 inline-block rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-600">
//             Our Team
//           </span>
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
//             The People Behind <span className="text-red-600">Our Success</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
//             Meet the talented individuals who make our company thrive with their
//             expertise, passion, and dedication to textile excellence.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {teamMembers.map((member) => (
//             <TeamMember key={member.name} {...member} />
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <Link
//             href="/careers"
//             className="group inline-flex items-center rounded-md bg-red-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
//           >
//             Join Our Team
//             <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
