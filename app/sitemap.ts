// export default function sitemap() {
//   return [
//     {
//       url: "https://yourdomain.com",
//       lastModified: new Date(),
//     },
//   ];
// }

export default function sitemap() {
  const baseUrl = "https://ashvarygidian.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
    },
  ];
}




// A sitemap tells search engines (Google, Bing)
// “These are the pages on my website. Please index them.”