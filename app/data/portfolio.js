export const site = {
  name: "Quentin Staquet",
  tagline: "Fullstack Developer & Game-Dev Enthusiast",
  heroLead:
    "Ich entwickle Web-Apps mit Next.js und Datenbanken – und Spiele mit Godot und GameMaker.",
  heroSupport:
    "Schüler an der Informatikmittelschule Zürich. Ziel: Applikationsentwicklung studieren und Fullstack-Kompetenz vertiefen.",
  cvPath: "/Lebenslauf_Quentin.pdf",
};

export const navItems = [
  { href: "#about", label: "Über mich" },
  { href: "#projects", label: "Projekte" },
  { href: "#skills", label: "Skills" },
  { href: "#learning", label: "Lernen" },
  { href: "#os", label: "Betriebssysteme" },
  { href: "#languages", label: "Sprachen" },
  { href: "#likes", label: "Interessen" },
  { href: "#contact", label: "Kontakt" },
];

export const about = {
  paragraphs: [
    "Ich bin Schüler an der Informatikmittelschule Zürich mit Fokus auf Fullstack-Entwicklung und Game Design. Meine Stärken liegen in der Datenbankentwicklung und in modernen Frontends mit React und Next.js.",
    "In der Freizeit baue ich Spiele, um Kreativität und technisches Know-how zu verbinden. Ich strebe ein Studium in Applikationsentwicklung an und vertiefe mein Wissen Schritt für Schritt.",
  ],
  highlights: [
    "IMS Zürich – Informatikmittelschule",
    "Stack: Next.js, React, Spring Boot, SQL",
    "Game Dev: Godot, GameMaker, GML",
  ],
};

export const projects = [
  {
    title: "Jump n' Run Game",
    description:
      "Ein klassisches Jump-n-Run mit mehreren Levels, Gegnern und Power-ups. Entwickelt in GameMaker Studio mit Fokus auf flüssiges Gameplay und Level-Design.",
    tech: ["GameMaker Studio", "GML"],
    image: "/jumpnrun.png",
    demoUrl: "https://youtu.be/soZAqPmaOzc",
    highlights: ["Mehrere Levels", "Gameplay-Video auf YouTube"],
  },
  {
    title: "Anime Watchlist",
    description:
      "Web-App zum Verwalten einer persönlichen Anime-Liste mit CRUD-Funktionen, Persistenz in einer relationalen Datenbank und serverseitigem Rendering.",
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    image: "/AnimeTrackerImage.png",
    imageFit: "contain",
    highlights: ["REST-ähnliche Struktur", "Datenbankanbindung"],
  },
  {
    title: "Genshin Impact Planner",
    description:
      "Persönliche Web-App zum Planen von Charakter-Ascensions in Genshin Impact. Der Rechner zeigt, welche Materialien zwischen aktuellem und Ziel-Level noch gefarmt werden müssen.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    image: "/GenshinCalculatorImage.png",
    repoUrl: "https://github.com/Spinelpersonal/genshin-impact-planner",
    highlights: [
      "Ascension-Rechner für Level 1-90",
      "Charakter-Browser mit Guide-Links",
      "Typisierte Game-Daten in lib/",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    summary: "Moderne, performante Interfaces mit klarer UX.",
    skills: [
      { name: "React", level: "Fortgeschritten", iconUrl: "https://skillicons.dev/icons?i=react" },
      { name: "Next.js", level: "Fortgeschritten", iconUrl: "https://skillicons.dev/icons?i=nextjs" },
      { name: "Tailwind CSS", level: "Sicher", iconUrl: "https://skillicons.dev/icons?i=tailwind" },
      { name: "JavaScript", level: "Sicher", iconUrl: "https://skillicons.dev/icons?i=javascript" },
    ],
  },
  {
    title: "Backend",
    summary: "Saubere Datenmodelle und robuste Datenbanklogik.",
    skills: [
      { name: "Python", level: "Sicher", iconUrl: "https://skillicons.dev/icons?i=python" },
      { name: "Java Spring Boot", level: "Sicher", iconUrl: "https://skillicons.dev/icons?i=spring" },
      { name: "C#", level: "Anfänger", iconUrl: "https://skillicons.dev/icons?i=cs" },
    ],
  },
  {
    title: "Tools & Utilities",
    summary: "Nützliche Tools für Entwicklung, Deployment und mehr.",
    skills: [
      { name: "MySQL", level: "Fortgeschritten", iconUrl: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", level: "Sicher", iconUrl: "https://skillicons.dev/icons?i=postgres" },
      { name: "MongoDB", level: "Sicher", iconUrl: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Docker", level: "Sicher", iconUrl: "https://skillicons.dev/icons?i=docker" },
      { name: "Bash", level: "Fortgeschritten", iconUrl: "https://skillicons.dev/icons?i=bash" },
      { name: "Git", level: "Sicher", iconUrl: "https://skillicons.dev/icons?i=git" },
    ],
  },
  {
    title: "Game Dev",
    summary: "Gameplay-Prototyping und Iteration mit Fokus auf Feel.",
    skills: [
      { name: "Godot", level: "Fortgeschritten", iconUrl: "https://skillicons.dev/icons?i=godot" },
      { name: "GDScript", level: "Fortgeschritten", iconUrl: "https://skillicons.dev/icons?i=godot" },
      { name: "GML", level: "Sicher", iconUrl: "https://skillicons.dev/icons?i=gamemakerstudio" },
    ],
  },
];

export const learningCurrent = [
  { name: "TypeScript", iconUrl: "https://skillicons.dev/icons?i=ts" },
  { name: "C#", iconUrl: "https://skillicons.dev/icons?i=cs" },
];

export const learningPlanned = [
  { name: "PyTorch", iconUrl: "https://skillicons.dev/icons?i=pytorch" },
  { name: "C", iconUrl: "https://skillicons.dev/icons?i=c" },
];

export const osSystems = [
  {
    name: "NixOS",
    iconUrl: "https://cdn.simpleicons.org/nixos/7EBAE4",
    rating: 5,
    note: "Echt gute Linux Distribution. Performant, man kann alles anpassen. Zwar schwierig zu installieren, aber es lohnt sich.",
  },
  {
    name: "Windows 10",
    iconUrl: "https://skillicons.dev/icons?i=windows",
    rating: 4.5,
    note: "Beste Windows Version, die ich je genutzt habe.",
  },
  {
    name: "Windows 11",
    iconUrl: "https://skillicons.dev/icons?i=windows",
    rating: 3.5,
    note: "Windows 10 aber schlechter und überall Copilot. 16GB RAM kann sogar manchmal zu wenig werden.",
  },
  {
    name: "Fedora Linux GNOME Edition",
    iconUrl: "https://cdn.simpleicons.org/fedora/51A2DA",
    rating: 3,
    note: "Fedora ist cool aber gnome ist so nervig, ich mags nicht. Hyprland kann man auch nicht ohne viel Schwierigkeiten installieren.",
  },
];

export const languages = [
  { name: "Französisch", level: "Muttersprache" },
  { name: "Deutsch", level: "C1" },
  { name: "Englisch", level: "C1" },
];

export const interests = [
  "Game Development",
  "Musik",
  "Anime",
];

export const contactLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/im24b-staquetq",
    description: "Projekte und Code",
    external: true,
  },
  {
    id: "email",
    label: "E-Mail",
    href: "mailto:quentin.staquet@malbikendar.net",
    description: "quentin.staquet@malbikendar.net",
    external: false,
  },
  {
    id: "cv",
    label: "Lebenslauf",
    href: "/Lebenslauf_Quentin.pdf",
    description: "PDF herunterladen",
    download: true,
    external: false,
  },
];
