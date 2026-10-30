import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/content/data";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function SkipLink() {
  return (
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-bg">
      Skip to content
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-3 z-40 px-3 sm:top-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-line bg-surface/80 py-2 pl-5 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-sm text-white">
            M
          </span>
          {profile.shortName}
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-text">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={`mailto:${profile.email}`} className="hidden rounded-full bg-text px-4 py-2 text-sm font-semibold text-bg transition hover:opacity-85 sm:inline-block">
            Hire me
          </a>
          <ThemeToggle />
        </div>
      </div>
      <nav aria-label="Sections" className="mx-auto mt-2 max-w-5xl md:hidden">
        <ul className="flex justify-between rounded-full border border-line bg-surface/80 px-2 backdrop-blur-xl">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="block px-2 py-2 text-[13px] font-medium text-muted hover:text-text">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex gap-2">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full border border-line transition hover:border-primary hover:text-primary">
            <FaLinkedinIn aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded-full border border-line transition hover:border-primary hover:text-primary">
            <FaGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
