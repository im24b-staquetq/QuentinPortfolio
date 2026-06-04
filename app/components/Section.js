import RevealOnScroll from "./RevealOnScroll";

export default function Section({ id, label, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`border-t border-slate-800 py-20 ${className}`}>
      <RevealOnScroll>
        {label ? <p className="section-label">{label}</p> : null}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100">{title}</h2>
        {intro ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">{intro}</p>
        ) : null}
        <div className={intro ? "mt-10" : "mt-8"}>{children}</div>
      </RevealOnScroll>
    </section>
  );
}
