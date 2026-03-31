import { majorProjects, miniProjects } from "@/data/projectData";

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
  SiRedux,
  SiJsonwebtokens,
  //   SiNodemailer,
  SiNextdotjs,
  SiTypescript,
  SiShadcnui,
  SiThreedotjs,
  SiVercel,
  SiFormik,
  SiStripe,
  SiMongoose,
  SiClerk,
  SiLangchain,
  SiGoogle,
  SiArc,
} from "react-icons/si";
// import restApiIcon from "@/data/thumbnail/restApi.png";
import Image from "next/image";
import { ImagesBadge } from "@/components/ui/images-badge";
import { GiOlive } from "react-icons/gi";
import Link from "next/link";
import { DiMongodb } from "react-icons/di";

const techIcons: Record<string, any> = {
  html: <FaHtml5 className="text-orange-400 " />,
  css: <FaCss3 className="text-blue-400 " />,
  js: <FaJsSquare className="text-yellow-400 " />,
  react: <FaReact className="text-cyan-400 " />,
  "node-js": <FaNodeJs className="text-green-400 " />,
  express: <SiExpress className="text-gray-400 " />,
  "mongo-db": <DiMongodb className="text-green-400 " />,

  tailwind: <SiTailwindcss className="text-teal-400 " />,
  "mongo-db-atlas": <SiMongodb className="text-green-400 " />,
  //   "rest-api": (
  //     <Image
  //       width={20}
  //       height={20}
  //       src={"/project-images/mini-project/rest-api.webp"}
  //       alt="REST API"
  //     />
  //   ),
  //   "rest-api": <FaCloud className="text-sky-400" />,
  github: <FaGithub className="text-gray-400 " />,
  netlify: <SiNetlify className="text-green-400 " />,
  render: <SiRender className="text-purple-400 " />,
  postman: <SiPostman className="text-orange-400 " />,
  bootstrap: <FaBootstrap className="text-purple-400 " />,
  razorpay: <SiRazorpay className="text-blue-400 " />,
  axios: <SiAxios className="text-blue-400 " />,
  // // update this icoen
  "redux-toolkit": <SiRedux className="text-purple-500" />,
  jwt: <SiJsonwebtokens className="text-pink-400" />,
  //   nodemailer: <SiNodemailer className="text-green-600" />,
  "next-js": <SiNextdotjs className="text-white" />,
  typescript: <SiTypescript className="text-blue-500" />,
  shadcn: <SiShadcnui className="text-white" />,
  mongoose: <SiMongoose className="text-red-500" />,
  clerk: <SiClerk className="text-indigo-400" />,
  langchain: <SiLangchain className="text-green-400" />,
  gemini: <SiGoogle className="text-blue-400" />,
  "three-js": <SiThreedotjs className="text-white" />,
  arcjet: <SiArc className="text-purple-400" />,
  vercel: <SiVercel className="text-white" />,
  formik: <SiFormik className="text-blue-400" />,
  stripe: <SiStripe className="text-purple-400" />,
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-0  py-16 md:py-20">
      <div className="p-10 container mx-auto px-4   max-w-7xl ">
        <div className="text-center mb-5">
          <h2  id="projects" className="text-3xl font-bold mb-2 text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
          >Projects</h2 >
          <p className="text-muted-foreground">
            A preview of some projects I worked on.
          </p>
        </div>
        {/* Major Projects */}
        <div
          data-aos="fade-up"
          className="mt-5 p-1"
          // className="border border-gray-300 rounded-lg p-6"
        >
          {/* <h5 className="md:text-lg font-bold mb-6 ml-2">Major Projects</h5> */}
          <div className="space-y-8 md:space-y-12">
            {majorProjects
              .sort((a, b) => b.id - a.id)
              .map((project, index) => {
                const fImages = project.images?.map((img) => img.src) ?? [];
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-4 md:gap-8 rounded-xl p-4 md:p-6 bg-white/5 backdrop-blur-sm transition hover:shadow-lg"
                    //   className={`flex flex-col md:flex-row items-stretch gap-8 border rounded-xl p-6 shadow-sm hover:shadow-lg transition

                    // `}
                    //     ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
                  >
                    {/* LEFT - DESCRIPTION (50%) */}
                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">
                          {project.title}
                        </h3>
                        <div className="text-sm text-muted-foreground mb-4">
                          <span className="font-gray-600 font-semibold">
                            {project.duration.startDate} -{" "}
                            {project.duration.endDate}
                          </span>

                          <br />
                          <span className="font-gray-600 font-semibold dark:text-gray-500">
                            {project.links.live}
                          </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3 m-2">
                          <a
                            href={project.links.live}
                            target="_blank"
                            className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 transition"
                          >
                            🌐 Visit Site
                          </a>

                          {project.links.demo && (
                            <a
                              href="/demo-video"
                              className="px-4 py-2 rounded-lg border text-sm hover:bg-muted transition"
                            >
                              🎥 Demo Video
                            </a>
                          )}
                          <span>
                            <Link href={`/projects/${project.slug}/gallery`}>
                              <ImagesBadge
                                text="View Image's"
                                images={fImages}
                                folderSize={{ width: 45, height: 37 }}
                                teaserImageSize={{ width: 40, height: 28 }}
                                hoverImageSize={{ width: 140, height: 108 }}
                                hoverTranslateY={-110}
                                hoverSpread={50}
                                // href={`/projects/${project.slug}/gallery`}
                                // target="_blank"
                                //   target="_self"
                              />
                            </Link>
                          </span>
                        </div>
                        <div className="m-2 text-sm font-sans">
                          {project.description}
                        </div>
                        <div className="bg-muted/40 rounded-xl p-4">
                          <h4 className="font-semibold mb-3 text-lg">
                            Core Functionality
                          </h4>

                          <ul className="space-y-2 text-sm">
                            {project.features.map((item, index) => (
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
                                  __html: project.content,
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
                        width={500}
                        height={500}
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-contain transition ease-in-out duration-500 "
                      />

                      <div 
                      
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-300 ease-out p-6 
                       bg-black/90
                       hover:bg-black/90 
                          
                       opacity-70 
                       backdrop-blur-lg      
                       hover:opacity-90
                       md:backdrop-blur-sm 
                       md:opacity-0 
                       md:group-hover:opacity-90
                      "
                      
                      >
                        <h4 className="text-white  text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center  
                       
                        ">
                          {project.title}
                        </h4>
                        <div className="text-white flex flex-row sm:flex-row justify-center gap-4 my-4">
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-sky-400   cursor-pointer"
                          >
                            <FaEye
                              size={22}
                              className="w-6 h-6 sm:w-7 sm:h-7"
                            />
                          </a>
                          <a
                            href={project.links.github}
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
                          {project.techStack?.map((tech) => (
                            <div
                              key={tech}
                              className="flex items-center group relative p-1"
                            >
                              {techIcons[tech] && (
                                <div className="w-4 h-4 sm:w-2 sm:h-2 hover:scale-200 transition-all ease-in-out duration-300">
                                  {techIcons[tech]}
                                </div>
                              )}
                              <span className="absolute bottom-full mb-1 hidden group-hover:block text-xs bg-black text-white py-1 px-2 rounded">
                                {tech.toUpperCase()}
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
        </div>

        {/* Mini Projects Section */}

        <div 
        // data-aos="flip-right" data-aos-delay="200" 
        
        className="mt-5 ">
          <h3 className="md:text-lg  mb-6 ml-8 text-center text-xl font-bold">Mini Projects</h3>

          <div className="flex flex-wrap justify-center m-auto gap-10 p-5 md:p-2 ">
            {miniProjects.map((project, index) => (
              <div
                key={index}
                className="group relative w-full sm:w-[calc(50%-10px)] md:w-[calc(33%-10px)] lg:w-[calc(25%-15px)]
        rounded-xl shadow-md cursor-pointer overflow-hidden
        transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-center leading-snug">
                  {project.title}
                </h4>

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
          bg-black/70 md:backdrop-blur-sm
           group-hover:opacity-100
          transition-opacity duration-300 ease-in-out 
          opacity-90 md:opacity-0 md:group-hover:opacity-100"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
