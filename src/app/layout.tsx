import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/content/data";
import "./globals.css";

const body = Inter({ variable: "--font-inter", subsets: ["latin"] });
const display = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  // Change to the real address once deployed (e.g. the Vercel URL).
  metadataBase: new URL("https://mounajeyaseeli.vercel.app"),
  title: `${profile.name} · ${profile.role}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
    images: [profile.photo],
  },
};

// Applies the saved theme before paint (dark by default), so the page never flashes the wrong one.
const themeScript = `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${body.variable} ${display.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
