import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/layout/theme.provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

  
export const metadata: Metadata = {
  title: {
    default: "Ashvary Gidian | Full Stack Developer",
    template: "%s | Ashvary Gidian",
  },
  description:
    "Ashvary Gidian is a Full Stack Developer skilled in MERN stack, building scalable web applications.",
  keywords: [
    "Ashvary Gidian",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Ashvary Gidian" }],
  creator: "Ashvary Gidian",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Ashvary Gidian | Full Stack Developer",
    description: "Portfolio of Ashvary Gidian - MERN Stack & Next.js Developer",
    url: "https://yourdomain.com",
    siteName: "Ashvary Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
