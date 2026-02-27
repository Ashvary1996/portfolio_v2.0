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
    <section id="projects" className="py-16">
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
            {majorProjects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-stretch gap-8 border rounded-xl p-6 shadow-sm hover:shadow-lg transition ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* LEFT - DESCRIPTION (50%) */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.duration}
                    </p>

                    <span>
                      <ImagesBadge
                        text="View Image's"
                        images={[
                          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEDaMEoX0Tkzqw74YSBab3HI2czZ14hUpGxq1Wuko5h6hGPVhF",
                          "https://assets.aceternity.com/pro/agenforce-2.webp",
                          "https://assets.aceternity.com/pro/agenforce-3.webp",
                        ]}
                        folderSize={{ width: 48, height: 36 }}
                        teaserImageSize={{ width: 40, height: 28 }}
                        hoverImageSize={{ width: 140, height: 108 }}
                        hoverTranslateY={-110}
                        hoverSpread={50}
                         href="/gallery"
                        target="_blank"
                      />
                    </span>
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

                  {/* Overlay */}
                  {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-gray-900 bg-opacity-75 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 p-4"> */}
                  {/* <div
                    className="absolute inset-0 z-10
  flex flex-col items-center justify-center 
  bg-black/50 backdrop-blur-sm
  opacity-0 group-hover:opacity-100
  transition-all duration-300 ease-out
  p-6"
                  > */}
                  <div
                    className="absolute inset-0 z-10
  flex flex-col items-center justify-center 
  bg-black/50 backdrop-blur-sm
  opacity-0 hover:opacity-100
  transition-all duration-300 ease-out
  p-6  "
                  >
                    <h4 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center   ">
                      {project.title}
                    </h4>
                    <div className="flex flex-row sm:flex-row justify-center gap-4 my-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-sky-400"
                      >
                        <FaEye size={22} className="w-6 h-6 sm:w-7 sm:h-7" />
                      </a>
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green-400"
                      >
                        <FaGithub size={22} className="w-6 h-6 sm:w-7 sm:h-7" />
                      </a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mt-4 max-h-24 overflow-visible tech-stack-scroll">
                      {project.techStackUsed &&
                        project.techStackUsed.map((tech) => (
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
            ))}
          </div>
        </fieldset>

        {/* Mini Projects Section */}

        <fieldset className="border border-gray-300 rounded-lg p-6 mt-10">
          <legend className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-left">
            Mini Projects
          </legend>

          <div className="flex flex-wrap justify-center gap-5">
            {miniProjects.map((project, index) => (
              // <div
              //   key={index}
              //   className="relative flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 overflow-hidden rounded-lg    shadow-md transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg group"
              // >
              <div
                key={index}
                className="relative flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 
  overflow-hidden rounded-xl shadow-md 
  transition-all duration-300 
  hover:scale-105 hover:shadow-xl 
  group cursor-pointer"
              >
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-center leading-snug">
                  {project.title}
                </h4>
                <Image
                  className="w-full h-48 object-contain transition-all duration-300 ease-in-out     group-hover:opacity-50"
                  src={project.image}
                  alt={project.title}
                />

                {/* <div className="absolute inset-0 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white  bg-black/50  bg-opacity-75 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 p-4">
                  <p className="text-center text-gray-300 text-sm font-semibold   ">
                    {project.description}
                  </p>
                  <div className="flex flex-row sm:flex-row justify-center gap-4 mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-400"
                    >
                      <FaEye size={24} />
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-green-400"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-4 max-h-24 overflow-visible tech-stack-scroll">
                    {project.techStackUsed &&
                      project.techStackUsed.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center group relative p-1"
                        >
                          {techIcons[tech] && techIcons[tech]}
                          <span className="absolute bottom-full mb-1 hidden group-hover:block text-xs bg-black text-white py-1 px-2 rounded">
                            {tech}
                          </span>
                        </div>
                      ))}
                  </div>
                </div> */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center 
  bg-black/70 backdrop-blur-sm 
  opacity-0 group-hover:opacity-100 
  transition-all duration-300 
  p-4 sm:p-6 text-center space-y-3"
                >
                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 font-medium leading-relaxed px-2">
                    {project.description}
                  </p>

                  {/* Icons */}
                  <div className="flex justify-center gap-5 mt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all duration-300 hover:scale-125 hover:text-sky-400"
                    >
                      <FaEye size={20} className="sm:w-6 sm:h-6" />
                    </a>

                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all duration-300 hover:scale-125 hover:text-green-400"
                    >
                      <FaGithub size={20} className="sm:w-6 sm:h-6" />
                    </a>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2">
                    {project.techStackUsed?.map((tech) => (
                      <div key={tech} className="relative group/tech p-1">
                        {techIcons[tech]}

                        <span
                          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
          hidden group-hover/tech:block
          text-[10px] sm:text-xs bg-black text-white px-2 py-1 rounded-md whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      </div>
                    ))}
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
