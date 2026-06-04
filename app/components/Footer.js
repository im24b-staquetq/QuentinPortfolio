import { site } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-slate-800 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-slate-500 sm:flex-row">
        <span>
          © {year} {site.name}
        </span>
        <span className="text-slate-600">Built with Next.js</span>
      </div>
    </footer>
  );
}
