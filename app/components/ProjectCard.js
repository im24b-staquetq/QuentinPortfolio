import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  imageFit,
  demoUrl,
  repoUrl,
  highlights,
}) {
  const imageClass =
    imageFit === "contain"
      ? "object-contain p-2"
      : "object-cover transition duration-300 group-hover:scale-[1.02]";

  return (
    <article className="card card-lift group flex h-full flex-col overflow-hidden p-5 text-slate-200">
      <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-800">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={960}
            height={540}
            className={`h-full w-full opacity-90 ${imageClass}`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-900 text-sm font-medium text-slate-500">
            Bild folgt
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>
      {highlights?.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-slate-500">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="tech-chip">
            {t}
          </span>
        ))}
      </div>
      {(demoUrl || repoUrl) && (
        <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-800 pt-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              Demo →
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              Code →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
