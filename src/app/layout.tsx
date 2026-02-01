import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./(main)/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10x AI Bootcamp – Become Top 1% with AI Skills",
  description:
    "Master Generative AI, build real-world AI agents & apps. Join the 10x AI Bootcamp and become the top 1% in your job. Enroll now and transform your career!",
  keywords: [
    "AI bootcamp",
    "Generative AI course",
    "AI agents",
    "learn AI",
    "AI for professionals",
    "10x productivity",
    "AI skills 2026",
    "RAG",
    "LangChain",
    "AI career",
  ],
  openGraph: {
    title: "10x AI Bootcamp – Master AI & Become Top 1%",
    description:
      "Become the top 1% in your job. Hands-on Generative AI bootcamp teaching RAG, AI agents, automation & real projects. Start today!",
    url: "https://10xaibootcamp.com",
    siteName: "10x AI Bootcamp",
    images: [
      {
        url: "/og-image.jpg", // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "10x AI Bootcamp – Become Top 1% with AI",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "10x AI Bootcamp – Become Top 1% with AI",
    description:
      "Master AI agents, RAG & automation. Join the bootcamp that turns professionals into AI power users.",
    images: ["/twitter-image.jpg"], // same or similar to OG image
  },
  alternates: {
    canonical: "https://10xaibootcamp.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define navigation links
  const links = [
    { text: "About me", href: "/#whoami" },
    { text: "My work", href: "/#mywork" },
    { text: "Blog", href: "/blog" },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >        
        {children}
      </body>
    </html>
  );
}
