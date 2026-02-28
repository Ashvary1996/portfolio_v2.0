import HomeClient from "./HomeClient";

export const metadata = {
  title: "Ashvary Gidian | Full Stack Developer Portfolio",
  description: "Welcome to Ashvary Gidian's Portfolio website.",
};

export default function Page() {
  return (
    <>
      <HomeClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ashvary Gidian",
            url: "https://yourdomain.com",
            jobTitle: "Full Stack Developer",
          }),
        }}
      />
    </>
  );
}
