import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeInitializer } from "./components/ThemeInitializer";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DiaLabs — Thoughtfully Designed AI & Privacy-First Products",
  description: "Thoughtfully designed products combining AI, privacy, and modern engineering into tools built for practical use. From Dhruv Sen, Itesh Singh Tomar, and Aditya Kumar Anupam.",
  keywords: [
    "DiaLabs",
    "Dia Labs",
    "Dhruv Sen",
    "Itesh Singh Tomar",
    "Aditya Kumar Anupam",
    "PatentIQ",
    "Dia Chat",
    "Dia Moderator",
    "AI Products",
    "Document Intelligence",
    "Serverless Patent Analytics",
    "Local-first secure chat",
    "Community safety bots",
    "CodeXdhruv",
    "iteshxt",
    "akanupam"
  ],
  authors: [
    { name: "Dhruv Sen", url: "https://codexdhruv.dev/" },
    { name: "Itesh Singh Tomar", url: "https://www.iteshxt.me/" },
    { name: "Aditya Kumar Anupam", url: "https://www.aditanupam.dev/" }
  ],
  creator: "DiaLabs Team",
  publisher: "DiaLabs",
  metadataBase: new URL("https://dialabs.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DiaLabs — Thoughtfully Designed AI & Privacy-First Products",
    description: "Thoughtfully designed products combining AI, privacy, and modern engineering into tools built for practical use. Co-founded by Dhruv Sen, Itesh Singh Tomar, and Aditya Kumar Anupam.",
    url: "https://dialabs.tech",
    siteName: "DiaLabs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiaLabs — Thoughtfully Designed AI & Privacy-First Products",
    description: "Thoughtfully designed products combining AI, privacy, and modern engineering into tools built for practical use.",
    creator: "@dialabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "XW0dGehpDX49tHjWRW92ccBimJKiTJyznvrHlTtzKKM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Organization schema mapping all three founders' names and bios to DiaLabs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DiaLabs",
    "url": "https://dialabs.tech",
    "logo": "https://dialabs.tech/apple-icon.png",
    "description": "Thoughtfully designed products combining AI, privacy, and modern engineering into tools built for practical use.",
    "founder": [
      {
        "@type": "Person",
        "name": "Dhruv Sen",
        "jobTitle": "Co-founder & Architect",
        "sameAs": [
          "https://codexdhruv.dev/",
          "https://github.com/CodeXdhruv",
          "https://www.linkedin.com/in/codexdhruv"
        ]
      },
      {
        "@type": "Person",
        "name": "Itesh Singh Tomar",
        "jobTitle": "Co-founder & Design Lead",
        "sameAs": [
          "https://www.iteshxt.me/",
          "https://github.com/iteshxt"
        ]
      },
      {
        "@type": "Person",
        "name": "Aditya Kumar Anupam",
        "jobTitle": "Co-founder & Optimization Lead",
        "sameAs": [
          "https://www.aditanupam.dev/",
          "https://github.com/akanupam",
          "https://www.linkedin.com/in/aditanupam/"
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={cn("dark antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
        <ThemeInitializer />
        <Navbar />
        {children}
        
        {/* Schema.org Organization structure for Knowledge Graph injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
