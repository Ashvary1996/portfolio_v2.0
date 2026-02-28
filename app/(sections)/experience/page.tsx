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
} from "react-icons/si";
import viacertaHome from "../data/thumbnail/viacertaHome.png";
import { LinkPreview } from "@/components/ui/link-preview";

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
  data-aos="flip-up"
    id="experiences"
    className="min-h-screen py-12   relative overflow-hidden scroll-mt-10"
    // style={{
    //   backgroundImage: `url("https://i.gifer.com/4NB4.gif")`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          <span className="bg-linear-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>
        <p className="text-md md:text-lg  font-light italic">
          A glimpse into my professional journey
        </p>
      </div>

      <fieldset className="border border-gray-300 rounded-lg p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* //viacerta */}
            <div className="flex flex-col lg:flex-row gap-6   bg-opacity-50 rounded-lg shadow-md p-6 md:p-8 transition-transform duration-500 hover:scale-105">
              <div className="lg:w-1/3">
                <img
                  src={"./viacertaHome"}
                  alt="Website Home Screenshot"
                  className="w-full h-40 md:h-52 lg:h-64 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                />

                <LinkPreview
                  url="https://viacerta-unofficial.vercel.app/"
                  className="mt-4 block text-center py-2 px-4 bg-teal-600/30 hover:bg-teal-600/40 rounded-lg font-bold  hover:scale-105  transition-all duration-300"
                >
                  Visit Website →
                </LinkPreview>
              </div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold   mb-2">
                  Backend Developer | Viacerta Abroad
                  <span className="block text-sm mt-1 text-gray-500">
                    March 2025 - June 10 2025
                  </span>
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 mb-4">
                  {viacaetaTechStack.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center p-2 rounded-lg  bg-gray-100 dark:bg-gray-200/20 hover:bg-gray-400/50  dark:hover:bg-gray-400/50 transition-colors duration-200"
                    >
                      <div className="text-xl md:text-2xl text-teal-400 mb-1">
                        {icon}
                      </div>
                      <span className="text-xs md:text-sm  ">{name}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3">
                  {[
                    "Backend Architecture: Designed robust systems for Vicarta Abroad.",
                    "Data Management: RESTful APIs for blogs, courses, and support.",
                    "Performance Optimization: Implemented Redis for caching.",
                    "Automated Email Communication.",
                    "Real-Time Communication: Built SSE and chatbot integrations.",
                    "Lead Tracking: Automated data generation with Excel exports.",
                    "Security: JWT-based authentication and rate limiting.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start  text-sm md:text-base"
                    >
                      <span className="text-teal-400 mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SellerPundit */}
            <div className="flex-1    rounded-lg shadow-md transition-transform duration-500 hover:transform hover:scale-105 hover:shadow-lg mt-10 p-10">
              <h3 className="text-2xl font-bold  mb-4">
                Intern - Software Developer | SellerPundit
                <span className="block text-sm  mt-1">
                  September 2024 - October 2024
                </span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 mb-4">
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
              <ul className="space-y-3">
                {[
                  "Refactored MVC structure for improved scalability",
                  "Integrated Nodemailer for email automation",
                  "Implemented Excel import/export utilities",
                  "Streamlined codebase and fixed bugs",
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
      </fieldset>
    </div>
  </section>
);

export default Experience;
