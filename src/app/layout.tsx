import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { domains, profile } from "@/content/data";
import "./globals.css";

const body = Inter({ variable: "--font-inter", subsets: ["latin"] });
const display = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["600", "700", "800"] });

const title = `${profile.name} · Software Engineer | Portfolio`;
const description = `${profile.name} (Mouna) is a Software Engineer with 5.5+ years of experience building accessible, scalable web products with Angular, React, Next.js and NestJS across banking, pensions, wealth, e-commerce and lending.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  keywords: [profile.name, "Mounajeyaseeli", "Mouna", "Software Engineer", "Full Stack Developer", "Frontend Developer", "Angular", "React", "Next.js", "NestJS", "Accessibility", "WCAG", "Chennai", "Madurai"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${profile.name} Portfolio`,
    title,
    description,
    firstName: "Mounajeyaseeli",
    images: [{ url: profile.photo, alt: profile.name }],
  },
  twitter: { card: "summary_large_image", title, description, images: [profile.photo] },
  ...(profile.googleVerification && { verification: { google: profile.googleVerification } }),
};

// Tells search engines who this site is about, so a search for the name can show it as her official page.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: ["Mounajeyaseeli", "Mouna"],
  url: profile.site,
  image: `${profile.site}${profile.photo}`,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "Fintuple" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University College of Engineering Nagercoil, Anna University" },
    { "@type": "CollegeOrUniversity", name: "Vellore Institute of Technology" },
  ],
  address: { "@type": "PostalAddress", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Angular", "React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Web accessibility (WCAG)", "Low-code platforms", ...domains],
};

// Applies the saved theme before paint (dark by default), so the page never flashes the wrong one.
const themeScript = `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body className={`${body.variable} ${display.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
