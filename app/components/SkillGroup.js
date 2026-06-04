import SkillIcon from "./SkillIcon";

const levelRank = { Fortgeschritten: 0, Sicher: 1, Anfänger: 2 };

export default function SkillGroup({ title, summary, skills }) {
  const sorted = [...skills].sort(
    (a, b) => (levelRank[a.level] ?? 99) - (levelRank[b.level] ?? 99)
  );

  return (
    <article className="card card-lift overflow-hidden p-6">
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{summary}</p>
      <ul className="mt-5 space-y-2">
        {sorted.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col gap-1 rounded-lg border border-slate-700/80 bg-slate-950/70 px-3 py-2"
          >
            <span className="inline-flex items-center gap-2 text-sm text-slate-100">
              <SkillIcon src={skill.iconUrl} alt={skill.name} />
              {skill.name}
            </span>
            <span className="pl-10 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
