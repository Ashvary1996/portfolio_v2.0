import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function About() {
  const description1 = `I'm a passionate Full Stack Web Developer with a knack for crafting user-centric web applications and websites. My coding journey ignited in 2023, and since then, I've honed a diverse skillset that allows me to bridge the gap between design and development.`;
  const description2 = `I bring my technical expertise and creative flair to every project, aiming to deliver innovative solutions that enhance user engagement andoverall functionality. My goal is to simplify user journeys by building intuitive and visually appealing interfaces that prioritize usability.`;
  return (
    <div>
      <h2 className="text-lg font-bold">About Me</h2>
      <TextGenerateEffect words={description1} />
      <TextGenerateEffect words={description2} duration={2}  filter={false} />
    </div>
  );
}

export default About;
