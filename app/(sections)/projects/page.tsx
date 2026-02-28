"use client";
import React, { useState } from "react";
import { majorProjects, miniProjects } from "@/data/projects.js";

// custom marquee tag for tech stack
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FaEye,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiRender,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiRazorpay,
  SiAxios,
} from "react-icons/si";
import restApiIcon from "@/data/thumbnail/restApi.png";
import Image from "next/image";
import { ImagesBadge } from "@/components/ui/images-badge";
import { GiOlive } from "react-icons/gi";

const techIcons: Record<string, any> = {
  html: <FaHtml5 className="text-orange-400 " />,
  css: <FaCss3 className="text-blue-400 " />,
  js: <FaJsSquare className="text-yellow-400 " />,
  react: <FaReact className="text-cyan-400 " />,
  node: <FaNodeJs className="text-green-400 " />,
  express: <SiExpress className="text-gray-400 " />,
  mongodb: <SiMongodb className="text-green-400 " />,
  mongodbAtlas: <FaDatabase className="text-green-400 " />,
  tailwind: <SiTailwindcss className="text-teal-400 " />,
  restfulApi: <Image width={10} height={10} src={restApiIcon} alt="REST API" />,
  gitHub: <FaGithub className="text-gray-400 " />,
  netlify: <SiNetlify className="text-green-400 " />,
  render: <SiRender className="text-purple-400 " />,
  postman: <SiPostman className="text-orange-400 " />,
  mongoDbAtlas: <FaCloud className="text-green-400 " />,
  bootstrap: <FaBootstrap className="text-purple-400 " />,
  razorpay: <SiRazorpay className="text-blue-400 " />,
  axios: <SiAxios className="text-blue-400 " />,
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 scroll-mt-7">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground">
            A preview of some projects I worked on.
          </p>
        </div>
        {/* Major Projects */}
        <fieldset className="border border-gray-300 rounded-lg p-6">
          <legend className="  text-2xl mb-6">Major Projects</legend>

          <div className="space-y-12">
            {majorProjects.map((project, index) => {
              const fImages = project.images?.map((img) => img.src) ?? [];
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch gap-8 border rounded-xl p-6 shadow-sm hover:shadow-lg transition 
                   
                  `} //     ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
                >
                  {/* LEFT - DESCRIPTION (50%) */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <div className="text-sm text-muted-foreground mb-4">
                        <span>{project.duration}</span>
                        <br />
                        <span className="text-gray-600 ">
                          {project.liveUrl}
                        </span>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-3 m-2">
                        <a
                          href="https://ecom-app-by-ashvary.netlify.app/"
                          target="_blank"
                          className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 transition"
                        >
                          🌐 Go Live
                        </a>

                        <a
                          href="/demo-video"
                          className="px-4 py-2 rounded-lg border text-sm hover:bg-muted transition"
                        >
                          🎥 Demo Video
                        </a>
                        <span>
                          <ImagesBadge
                            text="View Image's"
                            images={fImages}
                            folderSize={{ width: 48, height: 36 }}
                            teaserImageSize={{ width: 40, height: 28 }}
                            hoverImageSize={{ width: 140, height: 108 }}
                            hoverTranslateY={-110}
                            hoverSpread={50}
                            href={`/projects/${project.slug}/gallery`}
                            // target="_blank"
                            target="_self"
                          />
                        </span>
                      </div>

                      <div className="bg-muted/40 rounded-xl p-4">
                        <h4 className="font-semibold mb-3 text-lg">
                          Core Functionality
                        </h4>

                        <ul className="space-y-2 text-sm">
                          {[
                            "User Signup / Login / Forgot Password",
                            "JWT Authentication & Encrypted Passwords",
                            "Browse Restaurants & Search Food",
                            "Add to Cart & Multi-Step Checkout",
                            "Online Payments Integration",
                            "Admin Dashboard (Manage Menu, Orders, Users)",
                            "Real-time Order Status & Email Notifications",
                          ].map((item, index) => (
                            <li key={index} className="flex gap-2">
                              <span className="text-green-600">✔</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* detail description */}
                      <Accordion type="single" collapsible>
                        <AccordionItem value="desc">
                          <AccordionTrigger className="cursor-pointer">
                            View Description
                          </AccordionTrigger>
                          <AccordionContent>
                            <div
                              className="prose max-w-none"
                              dangerouslySetInnerHTML={{
                                __html: project.description,
                              }}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>

                  {/* RIGHT - IMAGE (50%) */}
                  <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden  ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover transition "
                    />

                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center   bg-black/50 backdrop-blur-sm opacity-0 hover:opacity-100  transition-all duration-300 ease-out p-6  ">
                      <h4 className="text-white  text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center   ">
                        {project.title}
                      </h4>
                      <div className="flex flex-row sm:flex-row justify-center gap-4 my-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-sky-400   cursor-pointer"
                        >
                          <FaEye size={22} className="w-6 h-6 sm:w-7 sm:h-7" />
                        </a>
                        <a
                          href={project.gitHubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-green-400"
                        >
                          <FaGithub
                            size={22}
                            className="w-6 h-6 sm:w-7 sm:h-7"
                          />
                        </a>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 mt-4 max-h-24 overflow-visible tech-stack-scroll">
                        {project.techStackUsed?.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center group relative p-1"
                          >
                            {techIcons[tech] && (
                              <div className="w-4 h-4 sm:w-2 sm:h-2">
                                {techIcons[tech]}
                              </div>
                            )}
                            <span className="absolute bottom-full mb-1 hidden group-hover:block text-xs bg-black text-white py-1 px-2 rounded">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </fieldset>

        {/* Mini Projects Section */}

        <fieldset className="border border-gray-300 rounded-lg p-6 mt-10">
          <legend className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-left">
            Mini Projects
          </legend>

          <div className="  p-4 flex flex-wrap justify-center   m-auto gap-10">
            {miniProjects.map((project, index) => (
              <div
                key={index}
                className="group relative w-full sm:w-[calc(50%-10px)] md:w-[calc(33%-10px)] lg:w-[calc(25%-15px)]
        rounded-xl shadow-md cursor-pointer overflow-hidden
        transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Title */}
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-center leading-snug">
                  {project.title}
                </h4>

                {/* Image */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    className="object-cover rounded-lg"
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-between p-4
          bg-black/70 backdrop-blur-sm
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300 ease-in-out"
                >
                  {/* Description */}
                  <div className="flex-1 flex items-center justify-center text-center px-2">
                    <p className="text-white text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Icons */}
                  <div className="flex justify-center gap-6 pb-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white transition-transform duration-300 hover:scale-125 hover:text-sky-400"
                    >
                      <FaEye size={22} />
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white transition-transform duration-300 hover:scale-125 hover:text-green-400"
                    >
                      <FaGithub size={22} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default Projects;
