import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-im24b.vercel.app";

export const metadata = {
  title: "Quentin Staquet – Portfolio",
  description:
    "Fullstack Developer & Game-Dev Enthusiast. Next.js, React, Datenbanken und Game Development – Portfolio von Quentin Staquet, IMS Zürich.",
  openGraph: {
    title: "Quentin Staquet – Portfolio",
    description:
      "Fullstack Developer & Game-Dev Enthusiast. Projekte, Skills und Kontakt.",
    url: siteUrl,
    siteName: "Quentin Staquet Portfolio",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quentin Staquet – Portfolio",
    description:
      "Fullstack Developer & Game-Dev Enthusiast. Next.js, React, Datenbanken und Game Development.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
