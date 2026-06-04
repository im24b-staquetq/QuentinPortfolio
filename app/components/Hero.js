import { site } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div>
        <p className="hero-animate section-label">Portfolio</p>
        <h1 className="hero-animate hero-animate-delay-1 mt-3 text-5xl font-bold tracking-tight text-slate-50 md:text-7xl">
          {site.name}
        </h1>
        <p className="hero-animate hero-animate-delay-2 mt-4 text-xl text-cyan-400/90 md:text-2xl">
          {site.tagline}
        </p>
        <p className="hero-animate hero-animate-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {site.heroLead}
        </p>
        <p className="hero-animate hero-animate-delay-3 mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
          {site.heroSupport}
        </p>
        <div className="hero-animate hero-animate-delay-3 mt-10 flex flex-wrap gap-4">
          <a className="btn-primary" href="#projects">
            Projekte erkunden
          </a>
          <a className="btn-secondary" href="#about">
            Mehr über mich
          </a>
          <a className="btn-secondary" href={site.cvPath} download>
            Lebenslauf herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}
