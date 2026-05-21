"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Jump n' Run Game",
    tech: "GameMaker Studio · GameMaker Language",
    image: "/jumpnrun.png",
    demoUrl: "https://youtu.be/soZAqPmaOzc",
  },
  {
    title: "Anime Watchlist",
    tech: "Java Spring Boot · Thymeleaf",
    image: "/AnimeTrackerImage.png",
    imageFit: "contain",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    summary: "Moderne, performante Interfaces mit klarer UX.",
    skills: [
      {
        name: "React",
        level: "Fortgeschritten",
        iconUrl: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "Next.js",
        level: "Fortgeschritten",
        iconUrl: "https://skillicons.dev/icons?i=nextjs",
      },
      {
        name: "Tailwind CSS",
        level: "Sicher",
        iconUrl: "https://skillicons.dev/icons?i=tailwind",
      },
      {
        name: "JavaScript",
        level: "Sicher",
        iconUrl: "https://skillicons.dev/icons?i=javascript",
      },
    ],
  },
  {
    title: "Backend",
    summary: "Saubere Datenmodelle und robuste Datenbanklogik.",
    skills: [
      {
        name: "Python",
        level: "Sicher",
        iconUrl: "https://skillicons.dev/icons?i=python",
      },
      {
        name: "Java Spring Boot",
        level: "Sicher",
        iconUrl: "https://skillicons.dev/icons?i=spring",
      },
      {
        name: "Csharp",
        level: "Anfänger",
        iconUrl: "https://skillicons.dev/icons?i=cs",
      }
    ],
  },
  {
    title: "Tools & Utilities",
    summary: "Nützliche Tools für Entwicklung, Deployment und mehr.",
    skills: [
      {
        name: "MySQL",
        level: "Fortgeschritten",
        iconUrl: "https://skillicons.dev/icons?i=mysql",
      },
      {
        name: "PostgreSQL",
        level: "Sicher",
        iconUrl: "https://skillicons.dev/icons?i=postgres",
      },
      {
        name: "MongoDB",
        level: "Sicher",
        iconUrl: "https://skillicons.dev/icons?i=mongodb",
      },
      {
        name: "Docker",
        level: "Sicher",
        iconUrl: "https://skillicons.dev/icons?i=docker",
      },
      {
        name: "Bash",
        level: "Fortgeschritten",
        iconUrl: "https://skillicons.dev/icons?i=bash",
      },
      {
        name: "Git",
        level: "Anfänger",
        iconUrl: "https://skillicons.dev/icons?i=git",
      },
    ],
  },
  {
    title: "Game Dev",
    summary: "Gameplay-Prototyping und Iteration mit Fokus auf Feel.",
    skills: [
      {
        name: "Godot",
        level: "Fortgeschritten",
        iconUrl: "https://skillicons.dev/icons?i=godot",
      },
      {
        name: "GDScript",
        level: "Fortgeschritten",
        iconUrl: "https://skillicons.dev/icons?i=godot",
      },
      {
        name: "GML",
        level: "Sicher",
        iconUrl: "https://skillicons.dev/icons?i=gamemakerstudio",
      },
    ],
  }
];

// rating: 0–5 in 0.5-Schritten (z. B. 4.5), note: kurze Begründung (leer lassen = kein Text)
const osSystems = [
  { name: "NixOS", iconUrl: "https://cdn.simpleicons.org/nixos/7EBAE4", rating: 5, note: "Echt gute Linux Distribution. Performant, man kann alles anpassen. Hatte viel Spass, mein Hyprland Config zu erstellen." },
  { name: "Windows 10", iconUrl: "https://skillicons.dev/icons?i=windows", rating: 4.5, note: "Beste Windows Version, die ich je genutzt habe." },
  { name: "Fedora Linux", iconUrl: "https://cdn.simpleicons.org/fedora/51A2DA", rating: 4, note: "Fast so gut wie NixOS, aber ich habe GNOME nicht so gerne. Nouveau Drivers sind gut für Nvidia 4000-Serie Grafikkarten." },
  { name: "Windows 11", iconUrl: "https://skillicons.dev/icons?i=windows", rating: 3.5, note: "Windows 10 aber schlechter und überall Copilot. 16GB RAM kann sogar manchmal zu wenig werden." },
];

function OsStar({ fill }) {
  if (fill <= 0) {
    return (
      <span className="inline-block w-[1em] text-slate-600" aria-hidden>
        ★
      </span>
    );
  }
  if (fill >= 1) {
    return (
      <span className="inline-block w-[1em] text-amber-400" aria-hidden>
        ★
      </span>
    );
  }
  return (
    <span className="relative inline-block w-[1em]" aria-hidden>
      <span className="text-slate-600">★</span>
      <span
        className="absolute left-0 top-0 h-full overflow-hidden text-amber-400"
        style={{ width: `${fill * 100}%` }}
      >
        <span className="inline-block w-[1em]">★</span>
      </span>
    </span>
  );
}

function OsStars({ rating }) {
  const value = Math.min(5, Math.max(0, Number(rating) || 0));
  return (
    <span className="inline-flex shrink-0 gap-px text-sm leading-none" aria-label={`${value} von 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <OsStar key={n} fill={Math.min(1, Math.max(0, value - (n - 1)))} />
      ))}
    </span>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-sm font-bold tracking-widest text-slate-200">Quentin Staquet</span>
          <button
            type="button"
            className="rounded-md border border-slate-700 p-2 text-slate-300 transition hover:border-slate-500 hover:text-slate-100 md:hidden"
            aria-label="Navigation umschalten"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <nav className="hidden gap-8 text-sm md:flex">
            <a className="text-slate-400 transition hover:text-slate-100" href="#about">
              Über mich
            </a>
            <a className="text-slate-400 transition hover:text-slate-100" href="#projects">
              Projekte
            </a>
            <a className="text-slate-400 transition hover:text-slate-100" href="#skills">
              Skills
            </a>
            <a className="text-slate-400 transition hover:text-slate-100" href="#learning">
              Lernen
            </a>
            <a className="text-slate-400 transition hover:text-slate-100" href="#os">
              Betriebssysteme
            </a>
            <a className="text-slate-400 transition hover:text-slate-100" href="#languages">
              Sprachen
            </a>
            <a className="text-slate-400 transition hover:text-slate-100" href="#contact">
              Kontakt
            </a>
            <a className="text-slate-400 transition hover:text-slate-100" href="#os"></a>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <nav className="border-t border-slate-800 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm">
              <a
                className="text-slate-300 transition hover:text-slate-100"
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über mich
              </a>
              <a
                className="text-slate-300 transition hover:text-slate-100"
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projekte
              </a>
              <a
                className="text-slate-300 transition hover:text-slate-100"
                href="#skills"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                className="text-slate-300 transition hover:text-slate-100"
                href="#learning"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lernen
              </a>
              <a
                className="text-slate-300 transition hover:text-slate-100"
                href="#os"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Betriebssysteme
              </a>
              <a
                className="text-slate-300 transition hover:text-slate-100"
                href="#languages"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sprachen
              </a>
              <a
                className="text-slate-300 transition hover:text-slate-100"
                href="#likes"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Interessen
              </a>
              <a
                className="text-slate-300 transition hover:text-slate-100"
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="flex min-h-screen items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-100 md:text-6xl">
              Quentin Staquet
            </h1>
            <p className="mt-4 text-xl text-slate-300">
              Fullstack Developer &amp; Game Dev Enthusiast
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Spezialisiert auf Next.js, Datenbankentwicklung und benutzerfreundliche Interfaces.
              Mit Leidenschaft für sauberen Code und innovative Lösungen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="rounded-lg border border-slate-700 bg-slate-900 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
                href="#projects"
              >
                Projekte erkunden
              </a>
              <a
                className="rounded-lg border border-slate-700 px-7 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-slate-100"
                href="#about"
              >
                Mehr über mich
              </a>
              <a
                className="rounded-lg border border-slate-700 px-7 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-slate-100"
                href="/Lebenslauf_Quentin.pdf"
                download
              >
                Lebenslauf herunterladen
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 border-t border-slate-800">
          <h2 className="mb-6 text-3xl font-bold">Über mich</h2>
          <p className="max-w-3xl text-slate-300 leading-relaxed text-lg">
            Ich bin ein Schüler bei der Informatikmittelschule Zürich mit Leidenschaft für
            Fullstack-Entwicklung und Game Design. Meine Stärken liegen in der 
            Datenbankentwicklung und modernen Frontendentwicklung mit React und Next.js. 
            In meiner Freizeit entwickle ich Spiele, um meine Fähigkeiten zu erweitern 
            und kreativ zu sein. Ich strebe danach, Applikationsentwicklung zu studieren und mein Wissen zu vertiefen.
          </p>
        </section>

        <section id="projects" className="py-20 border-t border-slate-800">
          <h2 className="mb-8 text-3xl font-bold">Projekte</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-5 text-slate-200 transition duration-200"
              >
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={960}
                    height={540}
                    className={`h-full w-full opacity-80 transition group-hover:opacity-100 ${project.imageFit === "contain" ? "object-contain p-2" : "object-cover"
                      }`}
                  />
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="mt-auto pt-4 flex flex-col items-start gap-2">
                  <p className="text-sm">Technologien: {project.tech}</p>
                  {project.demoUrl && (
                    <div className="flex gap-3 text-sm">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 decoration-current transition hover:opacity-80"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20 border-t border-slate-800">
          <h2 className="mb-3 text-3xl font-bold">Skills</h2>
          <p className="mb-8 max-w-2xl text-slate-400">
            Mein Stack verbindet Webentwicklung mit Game-Development. Diese Bereiche nutze ich
            am häufigsten in Projekten.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
              >
                <div className="p-6">
                  <h3 className="mt-3 text-xl font-semibold text-slate-100">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{group.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {[...group.skills]
                      .sort((a, b) => {
                        const rank = { Fortgeschritten: 0, Sicher: 1 };
                        return (rank[a.level] ?? 99) - (rank[b.level] ?? 99);
                      })
                      .map((skill) => (
                        <li
                          key={skill.name}
                          className="flex flex-col items-start gap-1 rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2"
                        >
                          <span className="inline-flex items-center gap-2 text-sm text-slate-100">
                            <img className="h-8 w-8" src={skill.iconUrl} alt={skill.name} />
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 pl-10">
                            {skill.level}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="learning" className="py-20 border-t border-slate-800">
          <h2 className="mb-8 text-3xl font-bold">Lernen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-slate-100">Aktuell lerne ich</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">
                  <span className="inline-flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="h-8 w-8" src="https://skillicons.dev/icons?i=cs" alt="CSharp" />
                    CSharp
                  </span>
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-slate-100">Möchte ich lernen</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">
                  <span className="inline-flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="h-8 w-8" src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
                    TypeScript
                  </span>
                </li>
                <li className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">
                  <span className="inline-flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="h-8 w-8" src="https://skillicons.dev/icons?i=pytorch" alt="PyTorch" />
                    PyTorch
                  </span>
                </li>
                <li className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">
                  <span className="inline-flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="h-8 w-8" src="https://skillicons.dev/icons?i=c" alt="C" />
                    C
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="os" className="py-20 border-t border-slate-800">
          <h3 className="mb-8 text-3xl font-bold">Betriebssysteme</h3>
          <p className="mb-8 text-lg text-slate-400">
            Ich habe schon verschiedene Betriebssysteme genutzt, für Gaming, Schule und Privat. Hier sind meine Gedanken zu den verschiedenen Betriebssystemen.
          </p>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <ul className="mt-4 space-y-2 text-slate-300">
              {osSystems.map((os) => (
                <li
                  key={os.name}
                  className="flex flex-col gap-1.5 rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="h-8 w-8" src={os.iconUrl} alt={os.name} />
                      {os.name}
                    </span>
                    <OsStars rating={os.rating} />
                  </div>
                  {os.note ? (
                    <p className="pl-10 text-sm leading-relaxed text-slate-400">{os.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="languages" className="py-20 border-t border-slate-800">
          <h2 className="mb-8 text-3xl font-bold">Sprachkenntnisse</h2>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">
                <span>Französisch</span>
                <span className="text-sm">Muttersprache</span>
              </li>
              <li className="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">
                <span>Deutsch</span>
                <span className="text-sm">C1</span>
              </li>
              <li className="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2">
                <span>Englisch</span>
                <span className="text-sm">C1</span>
              </li>
            </ul>
          </article>
        </section>

        <section id="contact" className="py-20 border-t border-slate-800">
          <h2 className="mb-6 text-3xl font-bold">Persönliche Daten</h2>
          <p className="max-w-xl text-slate-400">
            Hier kannst du mich erreichen oder meinen Lebenslauf herunterladen.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              className="text-slate-300 transition hover:text-slate-100"
              href="https://github.com/im24b-staquetq"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-slate-300 transition hover:text-slate-100"
              href="mailto:quentin.staquet@malbikendar.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              className="text-slate-300 transition hover:text-slate-100"
              href="/Lebenslauf_Quentin.pdf"
              download
            >
              Lebenslauf herunterladen
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-10 mt-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-sm text-slate-500">
          <span>Quentin Staquet</span>
          <span>Zürich</span>
        </div>
      </footer>
    </div>
  );
}
