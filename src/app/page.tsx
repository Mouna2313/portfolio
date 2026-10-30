import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight, FaCheck, FaGithub, FaLinkedinIn, FaRegEnvelope, FaCode, FaServer, FaCubes, FaDownload,
} from "react-icons/fa";
import { SiClaude, SiGit, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { accents } from "@/components/accents";
import { Footer, Header, SkipLink } from "@/components/Chrome";
import { Reveal } from "@/components/Reveal";
import { TechChip, TechIcon } from "@/components/TechIcon";
import { domains, education, experience, profile, projects, skills, type Project } from "@/content/data";

// Name the file gets when a visitor downloads it.
const resumeFileName = `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`;

const marqueeTech = [
  "Angular", "React", "Next.js", "TypeScript", "NestJS", "Node.js", "Prisma", "PostgreSQL", "MySQL", "Redis",
  "Docker", "Kubernetes", "AWS", "Azure", "Tailwind CSS", "Material UI", "Keycloak", "Netflix Conductor",
];

const focus = [
  { icon: FaCode, title: "Accessibility-first frontend", text: "Angular and React/Next.js apps, reusable component libraries, and inclusive, responsive UI built to WCAG 2.1." },
  { icon: FaServer, title: "Backend", text: "NestJS APIs with Prisma, PostgreSQL/MySQL, queues, integrations and secure auth." },
  { icon: FaCubes, title: "Platform engineering", text: "Configurable, low-code platforms: JSON-driven journeys and forms, workflow engines and multi-tenant access control." },
];

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden pt-28 md:-mt-16 md:pt-24">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 size-[34rem] rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 size-[26rem] rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-sm font-medium text-muted backdrop-blur">
            <span aria-hidden="true" className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            Open to new opportunities
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building web products <span className="text-gradient">people rely on.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Hi, I&apos;m <strong className="font-semibold text-text">{profile.name}</strong>, a {profile.role.toLowerCase()} with 5.5+ years
            of experience building accessible, scalable web products for banking, e-commerce, lending and health, from pixel-perfect,
            WCAG-compliant interfaces to production-ready APIs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-bg shadow-lg shadow-primary/25 transition hover:-translate-y-0.5">
              View my work
              <FaArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
            </a>
            {profile.resume && (
              <a href={profile.resume} download={resumeFileName} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-primary">
                <FaDownload aria-hidden="true" />
                Download resume <span className="sr-only">(PDF)</span>
              </a>
            )}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid size-12 place-items-center rounded-full border border-line bg-surface text-lg transition hover:-translate-y-0.5 hover:border-primary hover:text-primary">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid size-12 place-items-center rounded-full border border-line bg-surface text-lg transition hover:-translate-y-0.5 hover:border-primary hover:text-primary">
              <FaGithub aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Industry experience</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {domains.map((d) => (
                <li key={d} className="rounded-full border border-line bg-surface/70 px-3 py-1 text-sm font-medium text-text/85 backdrop-blur">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HeroPortrait />
      </div>
    </section>
  );
}

function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] pb-8 sm:max-w-md">
      <div aria-hidden="true" className="absolute inset-x-12 inset-y-10 rounded-[3rem] bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-35 blur-3xl" />
      <div className="relative mx-10 rounded-[2rem] bg-gradient-to-br from-[var(--primary)] via-[var(--border)] to-[var(--accent)] p-[2px] shadow-2xl sm:mx-14">
        <Image
          src={profile.portrait}
          alt={`Portrait of ${profile.name}`}
          width={640}
          height={800}
          priority
          sizes="(min-width: 640px) 320px, 260px"
          className="aspect-[4/5] w-full rounded-[calc(2rem-2px)] object-cover"
        />
      </div>

      {/* Left cards share the left edge, right cards the right edge. */}
      <HeroCard position="left-0 top-[8%]">
        <p className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-extrabold text-primary sm:text-2xl">5.5+</span>
          <span className="text-xs font-semibold text-muted sm:text-sm">Years</span>
        </p>
      </HeroCard>

      <HeroCard position="right-0 top-[22%]">
        <p className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-extrabold text-accent sm:text-2xl">8+</span>
          <span className="text-xs font-semibold text-muted sm:text-sm">Industries</span>
        </p>
      </HeroCard>

      <HeroCard position="left-0 top-[46%]">
        <p className="text-xs font-medium text-muted">AI &amp; dev tools</p>
        <p className="mt-1.5 flex gap-2 text-lg sm:text-xl">
          <SiClaude aria-label="Claude" role="img" className="text-[#d97757]" />
          <VscVscode aria-label="VS Code" role="img" className="text-[#007acc] dark:text-sky-400" />
          <SiGit aria-label="Git" role="img" className="text-[#f05032]" />
          <SiPostman aria-label="Postman" role="img" className="text-[#ff6c37]" />
        </p>
      </HeroCard>

      <HeroCard position="right-0 top-[60%]">
        <p className="text-xs font-medium text-muted">Tech stack</p>
        <p className="mt-1.5 flex gap-2 text-lg sm:text-xl">
          <TechIcon name="Angular" className="text-[#dd0031]" />
          <TechIcon name="Next.js" className="text-text" />
          <TechIcon name="NestJS" className="text-[#e0234e]" />
          <TechIcon name="PostgreSQL" className="text-[#336791] dark:text-sky-300" />
        </p>
      </HeroCard>

      <HeroCard position="left-0 bottom-0">
        <p className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-extrabold text-primary sm:text-2xl">15+</span>
          <span className="text-xs font-semibold text-muted sm:text-sm">Projects</span>
        </p>
      </HeroCard>
    </div>
  );
}

// Stat card overlapping the hero photo. Fixed width keeps all five cards the same size.
function HeroCard({ position, children }: { position: string; children: React.ReactNode }) {
  return (
    <div
      className={`absolute w-[7.5rem] rounded-2xl border border-line bg-surface/85 px-3 py-2.5 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:w-[9rem] sm:px-4 sm:py-3 ${position}`}
    >
      {children}
    </div>
  );
}

function TechMarquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {marqueeTech.map((t) => (
        <li key={t} className="flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-semibold text-muted">
          <TechIcon name={t} className="size-6" />
          {t}
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label="Technologies I use" className="marquee border-y border-line bg-surface/60 py-6">
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="animate-marquee flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ id, index, eyebrow, title, intro }: { id: string; index: string; eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="font-display text-text/40">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-accent" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </Reveal>
  );
}

function About() {
  const [current, ...previous] = experience;
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading id="about-title" index="01" eyebrow="About" title={<>Frontend roots, <span className="text-gradient">full-stack</span> today.</>} />

      <div className="grid items-start gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <Reveal>
          <p className="text-xl leading-relaxed text-text/90 sm:text-2xl sm:leading-relaxed">{profile.summary}</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-3xl border border-line bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Currently</p>
            <p className="mt-3 font-display text-xl font-bold">{current.role}</p>
            <p className="mt-1 text-muted">
              {current.company} · {current.period.replace(" – Present", "")} – now
            </p>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Previously</p>
              <ul className="mt-2 space-y-1">
                {previous.map((e) => (
                  <li key={e.company} className="text-sm">
                    <span className="font-semibold">{e.company}</span> <span className="text-muted">· {e.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {focus.map((f, i) => (
          <Reveal key={f.title} delay={i * 80}>
            <div className="border-t-2 border-line pt-6">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <f.icon />
                </span>
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-muted">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative border-y border-line bg-surface-2/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          id="projects-title"
          index="02"
          eyebrow="Selected work"
          title="Platforms I've been part of"
          intro="Products I've contributed to across three companies, plus a personal project. Client work is shown as case studies without code or screenshots, since it belongs to the clients."
        />
        <ul className="space-y-8">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Reveal>
                <ProjectCard project={p} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const a = accents[p.accent];
  const flip = index % 2 === 1;
  return (
    <article className={`group relative grid overflow-hidden rounded-[2rem] border border-line bg-surface shadow-sm ring-4 ring-transparent transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${a.ring} md:grid-cols-2`}>
      <div className={`relative min-h-64 overflow-hidden bg-gradient-to-br p-7 text-white sm:p-9 ${a.gradient} ${flip ? "md:order-2" : ""}`}>
        <span aria-hidden="true" className="absolute -right-4 -top-8 font-display text-[9rem] font-extrabold leading-none text-white/10">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="relative text-sm font-semibold uppercase tracking-widest text-white/85">{p.domain}</p>
        <div aria-hidden="true" className="relative mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition duration-500 group-hover:scale-[1.02]">
          <div className="mb-3 flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/40" />
            <span className="size-2.5 rounded-full bg-white/40" />
            <span className="size-2.5 rounded-full bg-white/40" />
          </div>
          <div className="space-y-2">
            {p.architecture.slice(0, 4).map((layer) => (
              <div key={layer.label} className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2">
                <span className="w-20 shrink-0 text-[11px] font-bold uppercase tracking-wider text-white/80">{layer.label}</span>
                <span className="truncate text-xs text-white">{layer.items.join(" · ")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col p-7 sm:p-9">
        <p className={`text-sm font-semibold ${a.text}`}>{p.personal ? "Personal project" : p.company ? `At ${p.company}` : `For ${p.client ?? "multiple AMCs"}`}</p>
        <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight">
          <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {p.name}
          </Link>
        </h3>
        <p className="mt-3 text-muted">{p.summary}</p>
        <ul className="mt-5 space-y-2">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5 text-sm font-medium">
              <span aria-hidden="true" className={`grid size-5 place-items-center rounded-full ${a.soft} ${a.text}`}>
                <FaCheck className="size-2.5" />
              </span>
              {h}
            </li>
          ))}
        </ul>
        <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 5).map((t) => (
            <li key={t}>
              <TechChip name={t} />
            </li>
          ))}
          {p.stack.length > 5 && <li className="self-center px-1 text-xs font-medium text-muted">+{p.stack.length - 5}</li>}
        </ul>
        <p aria-hidden="true" className="mt-auto flex items-center gap-2 pt-7 font-semibold text-primary">
          Read the case study
          <FaArrowRight className="transition group-hover:translate-x-1.5" />
        </p>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading id="experience-title" index="03" eyebrow="Experience" title="Where I've worked" />
      <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
        <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-[1.4rem] before:top-6 before:w-px before:bg-line">
          {experience.map((e, i) => (
            <li key={e.company}>
              <Reveal delay={i * 80} className="relative flex gap-5">
                <span aria-hidden="true" className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-2xl font-display font-extrabold ${i === 0 ? "bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white shadow-lg" : "border border-line bg-surface text-muted"}`}>
                  {e.company[0]}
                </span>
                <div className={`flex-1 rounded-3xl border p-6 ${i === 0 ? "border-primary/30 bg-surface shadow-lg shadow-primary/5" : "border-line bg-surface"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-bold">{e.role}</h3>
                    {i === 0 && <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">Current</span>}
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted">
                    <span className="text-primary">{e.company}</span> · {e.location} · {e.period}
                  </p>
                  <ul className="mt-4 space-y-2 text-muted">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <aside aria-labelledby="education-title" className="rounded-3xl border border-line bg-surface p-6 lg:sticky lg:top-28">
            <h3 id="education-title" className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Education
            </h3>
            {education.map((ed) => (
              <div key={ed.title} className="mt-4">
                <p className="font-display text-lg font-bold">{ed.title}</p>
                <p className="mt-1 text-muted">{ed.place}</p>
                <p className="mt-1 text-sm font-medium text-primary">{ed.period}</p>
                {ed.note && <p className="mt-3 text-sm text-muted">{ed.note}</p>}
              </div>
            ))}
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-y border-line bg-surface-2/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading id="skills-title" index="04" eyebrow="Skills" title="My toolbox" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 80} className={s.group === "Platforms" ? "lg:col-span-2" : ""}>
              <div className="h-full rounded-3xl border border-line bg-surface p-6">
                <h3 className="font-display text-lg font-bold">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it}>
                      <TechChip name={it} size="md" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1c1b5e] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute -left-20 -top-20 size-72 rounded-full bg-indigo-500/40 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -right-16 size-80 rounded-full bg-orange-500/35 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">05 · Contact</p>
            <h2 id="contact-title" className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
              Have a role or project in mind?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-indigo-100">
              I&apos;m open to full-stack and frontend roles in any domain. Email or LinkedIn is the quickest way to reach me.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-semibold text-[#1c1b5e] transition hover:-translate-y-0.5">
                <FaRegEnvelope aria-hidden="true" />
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/60 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                <FaLinkedinIn aria-hidden="true" />
                LinkedIn
              </a>
              {profile.resume && (
                <a href={profile.resume} download={resumeFileName} className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/60 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                  <FaDownload aria-hidden="true" />
                  Resume <span className="sr-only">(PDF)</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
