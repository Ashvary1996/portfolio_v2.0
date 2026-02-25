import Navbar from "@/components/layout/Navbar";
import Hero from "@/app/(sections)/hero/page";
import Skill from "./(sections)/skills/page";
import Contact from "./(sections)/contact/page";
import Experience from "./(sections)/experience/page";
import Projects from "./(sections)/projects/page";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <Skill/> */}
      {/* <Contact/> */}

      {/* <Experience/> */}
      <Projects />
      {/* <ThreeDCardDemo /> */}
    </>
  );
}
