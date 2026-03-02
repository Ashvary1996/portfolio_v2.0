// utils/isMobile.js
export const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth <= 768;
