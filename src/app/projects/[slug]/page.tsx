import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaCheck } from "react-icons/fa";
import { accents } from "@/components/accents";
import { Footer, Header, SkipLink } from "@/components/Chrome";
import { Reveal } from "@/components/Reveal";
import { TechChip } from "@/components/TechIcon";
import { profile, projects } from "@/content/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.name} · ${profile.name}`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const a = accents[p.accent];

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <section className={`relative -mt-20 overflow-hidden bg-gradient-to-br pb-20 pt-36 text-white md:-mt-16 md:pt-32 ${a.gradient}`}>
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
          <span aria-hidden="true" className="absolute -bottom-10 right-0 font-display text-[14rem] font-extrabold leading-none text-white/10 sm:text-[18rem]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <Link href="/#projects" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/25">
              <FaArrowLeft aria-hidden="true" /> All projects
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-white/85">{p.domain}</p>
            <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold tracking-tight sm:text-7xl">{p.name}</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">{p.summary}</p>
            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/75">{p.personal ? "Type" : "Client"}</dt>
                <dd className="mt-1 font-semibold">{p.personal ? "Personal project" : p.client ?? (p.company ? "Multiple clients" : "Multiple AMCs")}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/75">Role</dt>
                <dd className="mt-1 font-semibold">{p.personal ? "Designer & developer" : p.role ?? "Software Engineer"}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/75">Company</dt>
                <dd className="mt-1 font-semibold">{p.personal ? "Independent" : p.company ?? "Fintuple"}</dd>
              </div>
            </dl>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-20 px-4 py-20 sm:px-6">
          <Reveal>
            <section aria-labelledby="problem" className="grid gap-6 md:grid-cols-[14rem_1fr]">
              <h2 id="problem" className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                The problem
              </h2>
              <p className="text-xl leading-relaxed sm:text-2xl">{p.problem}</p>
            </section>
          </Reveal>

          <section aria-labelledby="features" className="grid gap-6 md:grid-cols-[14rem_1fr]">
            <Reveal>
              <h2 id="features" className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                What it does
              </h2>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {p.features.map((f, i) => (
                <li key={f}>
                  <Reveal delay={(i % 2) * 80} className="h-full">
                    <div className="flex h-full gap-3 rounded-2xl border border-line bg-surface p-5">
                      <span aria-hidden="true" className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${a.soft} ${a.text}`}>
                        <FaCheck className="size-3" />
                      </span>
                      <span>{f}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="architecture" className="grid gap-6 md:grid-cols-[14rem_1fr]">
            <Reveal>
              <h2 id="architecture" className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Architecture
              </h2>
              <p className="mt-3 text-sm text-muted">How a request travels through the system, top to bottom.</p>
            </Reveal>
            <ol className="space-y-2">
              {p.architecture.map((layer, i) => (
                <li key={layer.label}>
                  <Reveal delay={i * 80}>
                    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4 sm:flex-row sm:items-center">
                      <span className={`w-36 shrink-0 font-display text-sm font-bold uppercase tracking-wider ${a.text}`}>{layer.label}</span>
                      <span className="flex flex-wrap gap-2">
                        {layer.items.map((it) => (
                          <span key={it} className="rounded-lg bg-surface-2 px-3 py-1.5 text-sm font-medium">
                            {it}
                          </span>
                        ))}
                      </span>
                    </div>
                    {i < p.architecture.length - 1 && <FaArrowDown aria-hidden="true" className="mx-auto mt-2 size-3.5 text-muted" />}
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>

          <Reveal>
            <section aria-labelledby="stack" className="grid gap-6 md:grid-cols-[14rem_1fr]">
              <h2 id="stack" className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Tech stack
              </h2>
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li key={t}>
                    <TechChip name={t} size="md" />
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {p.links && p.links.length > 0 && (
            <div className="flex flex-wrap gap-3 md:pl-[15.5rem]">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 font-semibold text-bg">
                  {l.label}
                </a>
              ))}
            </div>
          )}

          <Reveal>
            <Link href={`/projects/${next.slug}`} className={`group relative block overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 text-white sm:p-10 ${accents[next.accent].gradient}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Next project</p>
              <p className="mt-2 flex items-center justify-between gap-4 font-display text-3xl font-extrabold sm:text-4xl">
                {next.name}
                <FaArrowRight aria-hidden="true" className="shrink-0 transition group-hover:translate-x-2" />
              </p>
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
