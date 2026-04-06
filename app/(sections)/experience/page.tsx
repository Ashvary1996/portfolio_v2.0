"use client";
import {
  FaBroadcastTower,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaLock,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import {
  SiGoogle,
  SiJsonwebtokens,
  SiMongodb,
  SiPostman,
  SiRedis,
  SiViadeo,
  SiYoutube,
} from "react-icons/si";

import { LinkPreview } from "@/components/ui/link-preview";
import { CameraIcon } from "lucide-react";

const viacaetaTechStack = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MongoDB Atlas", icon: <SiMongodb /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "Bcrypt", icon: <FaLock /> },
  { name: "Google APIs", icon: <SiGoogle /> },
  { name: "SSE", icon: <FaBroadcastTower /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
];
const sellerPunditTechStack = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <FaNodeJs /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
];

const Experience = () => (
  <section
    data-aos="fade-up"
    id="experiences"
    // className="min-h-screen py-12 relative overflow-hidden scroll-mt-10"
    // className="py-8 md:py-12 relative overflow-hidden scroll-mt-10"
    className="min-h-screen py-16 md:py-20 relative overflow-hidden scroll-mt-5 flex items-center "
    // style={{
    //   backgroundImage: `url("https://i.gifer.com/4NB4.gif")`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
  >
    <div className="container mx-auto px-4 max-w-7xl ">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          <span className="bg-linear-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>
        <p className="text-sm md:text-lg font-light italic">
          A glimpse into my professional journey
        </p>
      </div>

      {/* <fieldset className="border border-gray-300 rounded-lg p-2 "> */}

      <div className="max-w-7xl mx-auto">
        <div className=" gap-6">
          {/* //viacerta */}

          <div className="transition-all duration-300 bg-white/5 hover:shadow-lg rounded-xl p-6 md:p-8 lg:p-10 ">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 ">
              {/* Image Section */}
              <div className="lg:w-1/3">
                <img
                  src={"/project-images/mini-project/viacerta.webp"}
                  alt="Website Home Screenshot"
                  className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md"
                />

                <LinkPreview
                  url="https://viacerta-unofficial.vercel.app/"
                  className="mt-3 block text-center py-2 bg-teal-600/30 hover:bg-teal-600/40 rounded-md font-semibold text-sm transition"
                >
                  Visit Website →
                </LinkPreview>
              </div>

              {/* Content */}
              <div className="flex-1 ">
                <h3 className="text-lg md:text-2xl font-bold mb-2">
                  Backend Developer | Viacerta Abroad
                  <span className="block text-xs md:text-sm mt-1 text-gray-500">
                    March 2025 - July 2025
                  </span>
                </h3>

                {/* Tech Stack */}
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 mb-4 ">
                  {viacaetaTechStack.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center p-1.5 rounded-md bg-gray-100 dark:bg-gray-200/20 hover:bg-gray-400/50 dark:hover:bg-gray-400/50 "
                    >
                      <div className="text-lg text-teal-400">{icon}</div>
                      <span className="text-[10px] md:text-xs text-center">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {[
                    "Engineered backend architecture from scratch — Node.js & Express.js",
                    "Built REST APIs powering features: blogs, courses, inquiries, support tickets",
                    "JWT authentication + Google OAuth (Sign-in & Sheets integration)",
                    "Role-based access control & route-level rate limiting",
                    "Redis caching — reduced API response time from ~450ms to ~120ms",
                    "Real-time communication via Socket.io & Server-Sent Events (SSE)",
                    "Chatbot integration & support ticket management system",
                    "Multiple dynamic email templates — welcome, verification, password reset, notifications",
                    "Automated operational data pipelines via Google Sheets API — cut manual work by 70%",
                    "Lead tracking system with Excel export for reporting",
                  ].map((item, index) => (
                    <li key={index} className="flex text-sm md:text-base">
                      <span className="text-teal-400 mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 rounded-xl p-6 md:p-8 lg:p-10  ">
              {/* Image/Demo Section */}

              <div className="lg:w-1/3">
                <img
                  src={"/project-images/chatbot/chat-thumbnail.webp"}
                  alt="Website Home Screenshot"
                  className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md"
                />

                <a
                  href="https://youtu.be/a_NgU7Rc3bs"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 mx-auto flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                >
                  View Demo <SiYoutube size={18} />
                </a>
              </div>

              {/* Content */}
              <div className="flex-1 ">
                <h6 className="text-lg md:text-xl font-semibold mb-2">
                  Real-Time Chatbot & Support System | Viacerta Abroad
                </h6>

                <p className="mb-2">
                  A real-time chatbot and live support system designed to handle
                  multiple user conversations efficiently with seamless
                  communication. It supports dynamic room creation, real-time
                  messaging, and secure one-on-one interactions between users
                  and support agents. The system ensures smooth handling of
                  multiple chats simultaneously while maintaining performance
                  and reliability. Advanced features like auto-closing inactive
                  sessions, admin notifications, and persistent chat state
                  enhance the overall user and support experience.
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {[
                    "Real-time messaging using Socket.io",
                    "Multiple chat rooms with one-on-one communication",
                    "Secure room access for users and support agents",
                    "Admin notifications for new support requests",
                    "Auto-close chats if no agent joins within 5 minutes",
                    "Manual control to open/close chat sessions",
                    "Persistent chat sessions after refresh",
                    "Support dashboard to manage active chats",
                  ].map((item, index) => (
                    <li key={index} className="flex text-sm md:text-base">
                      <span className="text-teal-400 mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* //////////////////////////////////// */}
          {/* SellerPundit */}

          <div className="rounded-lg mt-10 md:mt-16 p-6 md:p-8 transition-all duration-300 bg-white/5 hover:shadow-lg ">
            <h3 className="text-lg md:text-2xl font-bold mb-3">
              Intern - Software Developer | SellerPundit
              <span className="block text-xs md:text-sm mt-1 text-gray-500">
                September 2024 - October 2024
              </span>
            </h3>
            {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 mb-4"> */}
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 mb-4">
              {sellerPunditTechStack.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center p-2 rounded-lg bg-gray-100  dark:bg-gray-200/20 hover:bg-gray-400/50  dark:hover:bg-gray-400/50  transition-colors duration-200"
                >
                  <div className="text-xl md:text-2xl text-teal-400 mb-1">
                    {icon}
                  </div>
                  <span className="text-xs md:text-sm  ">{name}</span>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {[
                // "Refactored MVC structure for improved scalability",
                // "Integrated Nodemailer for email automation",
                // "Implemented Excel import/export utilities",
                // "Streamlined codebase and fixed bugs",

                "Refactored a tangled codebase into clean MVC architecture — controllers, services & route files",
                "Separated business logic from route handlers for better testability and maintainability",
                "Nodemailer integration with automated email workflows — order updates, alerts & confirmations",
                "Built Excel import/export utilities with ExcelJS — structured operational data for reporting",
                "Identified and resolved duplicate product entries in scraped JSON data from eBay API",
                "Added success/fail response logging to Excel — gave visibility into upload outcomes",
                "Reduced unnecessary eBay API calls by filtering duplicates before submission",
                "Debugged and stabilized scraping workflows that were silently failing in production",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start   text-sm md:text-base"
                >
                  <span className="text-teal-400 mr-2 mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
