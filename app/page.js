import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import SkillGroup from "./components/SkillGroup";
import SkillIcon from "./components/SkillIcon";
import OsStars from "./components/OsStars";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  about,
  projects,
  skillGroups,
  learningCurrent,
  learningPlanned,
  osSystems,
  languages,
  interests,
} from "./data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main id="main" className="mx-auto max-w-6xl px-6">
        <Hero />

        <Section id="about" label="Profil" title="Über mich">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
            <div className="space-y-4 text-lg leading-relaxed text-slate-300">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ul className="flex flex-col gap-2 lg:min-w-[240px]">
              {about.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-700/80 bg-slate-900/50 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          id="projects"
          label="Arbeit"
          title="Projekte"
          intro={
            <>
              Ausgewählte Projekte aus Schule und Freizeit – Web, Datenbanken und Game
              Development. Mehr zu finden bei{" "}
              <a
                href="https://github.com/Spinelpersonal"
                className="text-cyan-400 underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              .
            </>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          label="Stack"
          title="Skills"
          intro="Mein Stack verbindet Webentwicklung mit Game Development – die Bereiche, die ich am häufigsten in Projekten nutze."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
        </Section>

        <Section id="learning" label="Wachstum" title="Lernen">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card p-6">
              <h3 className="text-xl font-semibold text-slate-100">Aktuell lerne ich</h3>
              <ul className="mt-4 space-y-2">
                {learningCurrent.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2"
                  >
                    <span className="inline-flex items-center gap-2 text-slate-300">
                      <SkillIcon src={item.iconUrl} alt={item.name} />
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-semibold text-slate-100">Möchte ich lernen</h3>
              <ul className="mt-4 space-y-2">
                {learningPlanned.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2"
                  >
                    <span className="inline-flex items-center gap-2 text-slate-300">
                      <SkillIcon src={item.iconUrl} alt={item.name} />
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Section>

        <Section
          id="os"
          label="Meinung"
          title="Betriebssysteme"
          intro="Für Gaming, Schule und Privat habe ich verschiedene Systeme genutzt – hier meine ehrlichen Eindrücke."
        >
          <article className="card p-6">
            <ul className="space-y-3">
              {osSystems.map((os) => (
                <li
                  key={os.name}
                  className="flex flex-col gap-1.5 rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 text-slate-200">
                      <SkillIcon src={os.iconUrl} alt={os.name} />
                      {os.name}
                    </span>
                    <OsStars rating={os.rating} />
                  </div>
                  {os.note ? (
                    <p className="pl-10 text-sm leading-relaxed text-slate-500">{os.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        </Section>

        <Section id="languages" label="Kommunikation" title="Sprachkenntnisse">
          <article className="card max-w-xl p-6">
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2 text-slate-300"
                >
                  <span>{lang.name}</span>
                  <span className="text-sm text-slate-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </Section>

        <Section
          id="likes"
          label="Persönlich"
          title="Interessen"
          intro="Themen, für die ich mich ausserhalb des Unterrichts interessiere."
        >
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100/90"
              >
                {interest}
              </span>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          label="Erreichbar"
          title="Kontakt"
          intro="Schreib mir gerne oder lade meinen Lebenslauf herunter."
        >
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
