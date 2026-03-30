// "use client";

// export default function AboutSection() {
//   return (
//     <section
//       className=" text-sm sm:text-base md:text-lg   leading-relaxed md:w-[80%]
//       text-gray-800 dark:text-gray-200 md:p-2
//     "
//     >
//       <p>
//         Skilled in developing end-to-end projects, I work on both frontend and
//         backend development — designing intuitive user interfaces, building REST
//         APIs, and managing databases to ensure smooth integration and reliable
//         functionality.
//       </p>
//       <br />
//       <p>
//         Through hands-on project development, I have gained practical experience
//         in building real-world applications, understanding application flow,
//         state management, routing, and data handling across the stack.
//       </p>
//       <br />
//       <p>
//         I am committed to continuous learning, refining my technical skills, and
//         adapting to modern development standards.
//       </p>
//       <br />
//       <p>
//         As a developer, my goal is to contribute to impactful projects,
//         collaborate effectively within teams, and grow into a well-rounded
//         software developer in a professional environment.
//       </p>
//     </section>
//   );
// }
"use client";


export default function AboutSection() {
  return (
    <section
      className="text-sm sm:text-base md:text-lg leading-relaxed md:w-[80%]
      text-gray-800 dark:text-gray-200 md:p-2"
    >
      <p>
        I'm a full-stack developer skilled in building end-to-end web
        applications — designing intuitive user interfaces, building REST APIs,
        and managing databases to keep everything working smoothly across the
        stack. From{" "}
        <strong className="text-foreground font-medium">
          frontend UI to backend logic to database design
        </strong>
        , I work across the full layer and care about each one being clean, not
        just functional.
      </p>
      <br />
      <p>
        Through real-world projects and professional work, I've built up
        practical understanding of{" "}
        <strong className="text-foreground font-medium">
          authentication and authorisation
        </strong>
        , including JWT, cookies, Google OAuth, and{" "}
        <strong className="text-foreground font-medium">
          role-based access control
        </strong>{" "}
        — the parts that have to be right when something ships to users. I've
        also worked on rate-limited REST APIs, real-time features with
        Socket.io, Redis caching, and automated data pipelines that replaced
        manual work.
      </p>
      <br />
      <p>
        On the infrastructure side, I've been hands-on with{" "}
        <strong className="text-foreground font-medium">
          Linux VPS, Nginx (reverse proxy and load balancing), and Docker
          (containerization basics)
        </strong>{" "}
        — locally set up and tested, including{" "}
        <strong className="text-foreground font-medium">
          horizontal and vertical scaling
        </strong>{" "}
        to understand how traffic gets distributed and what breaks under load.
        The kind of learning where you break things first and understand why
        second.
      </p>
      <br />
      <p>
        My goal is to keep growing across the full stack — frontend, backend,
        databases, and deployment — contribute to projects that actually matter,
        and work in teams where I can learn as much as I build.
      </p>
    </section>
  );
}