"use client";
 
import About from "../about/page";
import { FlipWords } from "@/components/ui/flip-words";

function Page() {
  const words = [
    "I'm Full-Stack Developer",
    "I'm Web Developer",
    "I'm Back-End Developer",
    "I'm Front-End Developer",
    "I'm MERN Stack Developer",
  ];
  // const roles = [
  //   { text: "a Front-End Developer", color: "text-red-500" },
  //   { text: "a Back-End Developer", color: "text-green-500" },
  //   { text: "a Full-Stack Developer", color: "text-blue-500" },
  // ];
 

  return (
    <div>
      <FlipWords words={words} />
      <About/>
      <hr />
    </div>
  );
}

export default Page;
