import { contactLinks } from "../data/portfolio";

function GitHubIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.27.825-.6 0-.315-.015-1.365-.015-2.475-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.32-1.745-1.32-1.745-1.08-.735.082-.72.082-.72 1.195.082 1.82 1.23 1.82 1.23 1.065 1.815 2.79 1.29 3.465.99.105-.78.42-1.29.765-1.59-2.655-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.205 0 1.59-.015 2.88-.015 3.27 0 .33.225.72.825.6A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

const icons = {
  github: GitHubIcon,
  email: MailIcon,
  cv: DocumentIcon,
};

export default function Contact() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {contactLinks.map((link) => {
        const Icon = icons[link.id];
        return (
          <a
            key={link.id}
            href={link.href}
            className="card card-lift flex flex-col gap-3 p-6 no-underline"
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            {...(link.download ? { download: true } : {})}
          >
            <span className="text-cyan-400">
              <Icon />
            </span>
            <span className="font-semibold text-slate-100">{link.label}</span>
            <span className="text-sm text-slate-500">{link.description}</span>
          </a>
        );
      })}
    </div>
  );
}
