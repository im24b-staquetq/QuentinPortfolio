import Image from "next/image";

const projects = [
  {
    title: "Jump n' Run Game",
    description:
      "2D Jump n' Run Spiel mit GML in GameMaker Studio. Entwickelt als Abschlussarbeit der Sekundarschule mit Fokus auf Mechanik und Gameplay.",
    tech: "GameMaker Language",
    tags: ["GameDev", "2D", "Gameplay"],
    image: "/jumpnrun.png",
    demoUrl: "https://youtu.be/soZAqPmaOzc",
  },
  {
    title: "Visual Novel Game",
    description:
      "Visual Novel mit GDScript in der Godot Engine. Pixel-Art-Grafiken mit LibreSprite designt. Die Projektdateien sind verloren gegangen, daher habe ich aktuell weder den vollständigen Build noch ein echtes Screenshot.",
    tech: "GDScript · LibreSprite",
    tags: ["GameDev", "Godot", "Dialogue System"],
    image: "/no-image-available.svg",
  },
  {
    title: "Anime Watchlist",
    description:
      "Schulprojekt mit Java Spring Boot und Thymeleaf, bei dem man Animes zu einer Watchlist hinzufügen und mit Status, Ratings usw. verwalten kann. Dieses Projekt ist noch in Entwicklung.",
    tech: "Java Spring Boot · Thymeleaf",
    tags: ["Web App", "Backend", "CRUD"],
    image: "/AnimeTrackerImage.png",
    imageFit: "contain",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    summary: "Moderne, performante Interfaces mit klarer UX.",
    skills: [
      { name: "React", level: "Fortgeschritten" },
      { name: "Next.js", level: "Fortgeschritten" },
      { name: "Tailwind CSS", level: "Sicher" },
      { name: "JavaScript", level: "Sicher" },
    ],
  },
  {
    title: "Backend",
    summary: "Saubere Datenmodelle und robuste Datenbanklogik.",
    skills: [
      { name: "MySQL", level: "Fortgeschritten" },
      { name: "Python", level: "Sicher" },
      { name: "PostgreSQL", level: "Sicher" },
    ],
  },
  {
    title: "Game Dev",
    summary: "Gameplay-Prototyping und Iteration mit Fokus auf Feel.",
    skills: [
      { name: "Godot", level: "Fortgeschritten" },
      { name: "GDScript", level: "Fortgeschritten" },
      { name: "GML", level: "Sicher" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="text-sm font-bold tracking-widest text-slate-200">QS</span>
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
            <a className="text-slate-400 transition hover:text-slate-100" href="#contact">
              Kontakt
            </a>
            <a className="text-slate-400 transition hover:text-slate-100" href="#likes">
              Interessen
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
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
            </div>
          </div>
        </section>

        <section id="about" className="py-20 border-t border-slate-800">
          <h2 className="mb-6 text-3xl font-bold">Über mich</h2>
          <p className="max-w-3xl text-slate-300 leading-relaxed text-lg">
            Ich bin ein Schüler bei der Informatikmittelschule Zürich mit Leidenschaft für Fullstack-Entwicklung und Game Design. Meine Stärken liegen in der Datenbankentwicklung und modernen Frontendendwicklung mit React und Next.js. In meiner Freizeit entwickle ich Spiele, um meine Fähigkeiten zu erweitern und kreativ zu sein. Ich strebe danach, Applikationsentwicklung zu studieren und mein Wissen zu vertiefen.
          </p>
        </section>

        <section id="projects" className="py-20 border-t border-slate-800">
          <h2 className="mb-8 text-3xl font-bold">Projekte</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-5 transition duration-200"
              >
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={960}
                    height={540}
                    className={`h-full w-full opacity-80 transition group-hover:opacity-100 ${
                      project.imageFit === "contain" ? "object-contain p-2" : "object-cover"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  {project.tags.join(" • ")}
                </p>
                <div className="mt-auto pt-4 flex flex-col items-start gap-2">
                  <span className="text-xs text-slate-300">{project.tech}</span>
                  {(project.githubUrl || project.demoUrl) && (
                    <div className="flex gap-3 text-xs">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 transition hover:text-white"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 transition hover:text-white"
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
            am haeufigsten in Projekten.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
              >
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-400">0{index + 1}</p>
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
                        className="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2"
                      >
                        <span className="text-sm text-slate-100">{skill.name}</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
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

        <section id="likes" className="py-20 border-t border-slate-800">
          <h2 className="mb-3 text-3xl font-bold">Allgemeine Interessen und Freizeitaktivitäten</h2>
          <p className="mb-8 max-w-2xl text-slate-400">
            Neben meiner Leidenschaft für der Programmation interessiere ich mich auch für anderes.
            Beispiele dafür sind: Musik, Animes, Videospiele und anderes.
          </p>
          <a
            href="https://spinel-plaiz.neocities.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition hover:text-slate-100"
          >
            Mehr über mein Privates und meine Interessen (in Entwicklung)
          </a>
        </section>

        <section id="contact" className="py-20 border-t border-slate-800">
          <h2 className="mb-6 text-3xl font-bold">Kontakt</h2>
          <p className="max-w-xl text-slate-400">
            Wenn du an Zusammenarbeit interessiert bist oder Fragen hast, kannst du mich gerne
            kontaktieren.
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
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-10 mt-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-sm text-slate-500">
          <span>© 2026 Quentin Staquet</span>
          <span>Zurich</span>
        </div>
      </footer>
    </div>
  );
}
