/* =========================================================
   ALLE INHALTE AN EINER STELLE — Quelle: Lebenslauf
   ========================================================= */

export const profile = {
  name: 'Jehad Qassem',
  firstName: 'Jehad',
  initial: 'JQ',
  title: 'Full-Stack Developer | Frontend & Backend',
  roles: ['Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'TypeScript-Entwickler'],
  location: 'Berlin',
  languages: 'Deutsch (B2), Kurdisch, Arabisch, Englisch (B1)',
  focus: 'TypeScript, Vue 3, Angular, Node.js',
  email: 'qassemjehad@gmail.com',
  phone: '01578 8012362',
  phoneIntl: '+4915788012362',
  timeZone: 'Europe/Berlin',
  // Das PDF ist per .gitignore ausgeschlossen (enthält Adresse) und existiert daher nur lokal.
  // Für die Live-Seite: eine Version ohne Adresse in /public ablegen und hier immer verlinken.
  cvUrl: import.meta.env.DEV ? `${import.meta.env.BASE_URL}Lebenslauf_Jehad_Qassem.pdf` : '',
  photo: `${import.meta.env.BASE_URL}jehad.png`,
  // Trage hier deine Profil-Links ein. Leere Einträge werden nicht angezeigt.
  socials: {
    github: 'https://github.com/je240094',
    linkedin: '',
  },
} as const;

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'Über mich' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projekte' },
  { id: 'experience', label: 'Werdegang' },
  { id: 'strengths', label: 'Stärken' },
  { id: 'contact', label: 'Kontakt' },
];

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Technologien & Tools' },
  { value: 3, label: 'Frontend-Frameworks (Angular, Vue, React)' },
  { value: 4, label: 'Sprachen' },
  { value: 2022, label: 'Start der Weiterbildung zum Web Application Developer' },
];

export type SkillIcon = 'code' | 'server' | 'tool' | 'ai';

export interface SkillGroup {
  title: string;
  icon: SkillIcon;
  items: string[];
  note: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Angular', 'Vue 3', 'Vuetify 3', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'SPA', 'PWA', 'Apache Cordova'],
    note: 'Komponentenbasierte Entwicklung und Single Page Applications',
  },
  {
    title: 'Backend & Datenbanken',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'REST-APIs', 'PostgreSQL', 'Prisma', 'JWT-Authentifizierung'],
    note: 'Relationale Datenmodelle, Grundlagen der Full-Stack-Architektur',
  },
  {
    title: 'Tools & Arbeitsweise',
    icon: 'tool',
    items: ['Git', 'GitHub', 'NPM', 'Yarn', 'Vite', 'Docker', 'VS Code'],
    note: 'Strukturierter, wartbarer Code · Selbstständige Einarbeitung in neue Technologien',
  },
  {
    title: 'KI-gestützte Entwicklung',
    icon: 'ai',
    items: ['Claude', 'Codex (ChatGPT)'],
    note: 'Einsatz von KI-Tools beim Entwickeln und Testen, mit kritischer Prüfung der Ergebnisse',
  },
];

export const techStack: string[] = [
  'TypeScript', 'JavaScript', 'Angular', 'Vue 3', 'Vuetify 3', 'React',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST-APIs', 'PostgreSQL', 'Prisma',
  'Git', 'GitHub', 'NPM', 'Yarn', 'Vite', 'Docker', 'VS Code', 'SPA', 'PWA', 'Apache Cordova', 'Claude', 'Codex',
];

export type ProjectCategory = 'fullstack' | 'frontend';
export type MockType = 'browser' | 'dash' | 'grid' | 'kanban';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  mock: MockType;
  colors: [string, string];
  wide?: boolean;
  badge?: string;
  tags: string[];
  short: string;
  long: string;
  kind: string;
  role: string;
  year?: string;
  highlights: string[];
  /** Link zur Live-Version */
  url?: string;
  /** Link zum Quellcode */
  repo?: string;
}

export const projects: Project[] = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    category: 'fullstack',
    mock: 'kanban',
    colors: ['#7c5cff', '#00d4ff'],
    wide: true,
    tags: ['React 19', 'TypeScript', 'Express 5', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    short: 'Full-Stack-Kanban-App für Projektmanagement: Projekte mit Rollen, Drag-and-drop-Boards, Prioritäten, Fälligkeiten und Login.',
    long: 'TaskFlow ist eine Full-Stack-Projektmanagement-App im Kanban-Stil. Aufgebaut als Monorepo mit einer Express-API (TypeScript, Prisma, PostgreSQL) und einem React-19-Frontend (Vite, Tailwind CSS v4). Die Datenbank läuft über Docker Compose; ein Seed-Skript legt Demo-Daten mit Nutzern, Projekten und Aufgaben an.',
    kind: 'Eigenes Projekt · Monorepo',
    role: 'Full-Stack-Entwicklung',
    highlights: [
      'Registrierung und Login mit bcrypt-gehashten Passwörtern und httpOnly-JWT-Cookie',
      'Projekte mit Kürzel (z. B. WEB), Farbe und Rollen: Owner, Admin, Member',
      'Kanban-Board mit Drag-and-drop (@dnd-kit): To Do, In Progress, In Review, Done',
      'Aufgaben mit Priorität, Fälligkeitsdatum, Zuständigkeit und automatischer Nummerierung (z. B. WEB-12)',
      'Team-Verwaltung: bestehende Nutzer per E-Mail in Projekte einladen',
      'Monorepo-Struktur (apps/api, apps/web), Datenbank-Migrationen mit Prisma, Docker Compose',
    ],
    repo: 'https://github.com/je240094/taskflow',
  },
  {
    id: 'baustellen-dashboard',
    title: 'Baustellen-Dashboard',
    category: 'frontend',
    mock: 'dash',
    colors: ['#ffb020', '#ff6b3d'],
    tags: ['Vue 3', 'Vuetify 3', 'TypeScript', 'Vite', 'Sass'],
    short: 'Responsives Dashboard für den Baustellenbetrieb: Aufgaben nach Gewerk, Suche und Filter, Projektfortschritt und Aktivitätsprotokoll.',
    long: 'Ein responsives Dashboard für den Baustellenbetrieb, gebaut mit Vue 3 (<script setup lang="ts">), Vuetify 3 im Material Design und TypeScript. Wiederverwendbare Komponenten für Aufgaben, Kennzahlen, Projektstatus und Aktivitätsprotokoll sorgen für eine saubere, moderne Oberfläche auf Desktop und Mobilgeräten.',
    kind: 'Eigenes Projekt',
    role: 'Frontend-Entwicklung',
    highlights: [
      'Bauaufgaben mit Status und Gewerk',
      'Suche und Filter für Aufgaben',
      'Formular zum Anlegen neuer Aufgaben mit TypeScript-Validierung',
      'Projektfortschritt und Kennzahlen auf einen Blick',
      'Benachrichtigungen und Aktivitätsprotokoll',
      'JSON-Export der Aufgaben',
      'Responsive Oberfläche für Desktop und Mobilgeräte',
    ],
    repo: 'https://github.com/je240094/Baustellen-Dashboard-with-Vuetify-TypeSript',
  },
  {
    id: 'fullstack-app',
    title: 'Full-Stack-Webanwendung',
    category: 'fullstack',
    mock: 'browser',
    colors: ['#5c7cff', '#c45cff'],
    badge: 'Aktuelles Projekt',
    tags: ['Vue 3', 'Vuetify 3', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    short: 'Moderne Full-Stack-Webanwendung, von Grund auf entwickelt: responsives Frontend, REST-Backend und relationale Datenbank in einer Anwendung.',
    long: 'Eine moderne Full-Stack-Webanwendung, die ich von Grund auf entwickle. Das Frontend basiert auf Vue 3, Vuetify 3 und TypeScript, das Backend auf Node.js und Express mit REST-Schnittstellen, die Daten liegen in PostgreSQL.',
    kind: 'Eigenes Projekt',
    role: 'Full-Stack-Entwicklung',
    year: 'Aktuell',
    highlights: [
      'Entwicklung einer modernen Full-Stack-Webanwendung von Grund auf',
      'Umsetzung responsiver Benutzeroberflächen mit wiederverwendbaren Komponenten',
      'Entwicklung von Backend-Endpunkten und REST-Schnittstellen',
      'Aufbau und Verwendung relationaler Datenstrukturen mit PostgreSQL',
      'Verbindung von Frontend, Backend und Datenbank innerhalb einer Anwendung',
    ],
  },
  {
    id: 'angular-frontend',
    title: 'Angular- und Frontend-Projekte',
    category: 'frontend',
    mock: 'browser',
    colors: ['#ff5c8a', '#c45cff'],
    tags: ['Angular', 'TypeScript', 'React', 'JavaScript'],
    short: 'Eigenständige Entwicklung und Test von Anwendungen mit Angular und TypeScript, ergänzt durch Praxis mit React.',
    long: 'Eine Reihe eigenständig umgesetzter Frontend-Projekte mit Angular und TypeScript. Dabei habe ich unterschiedliche Komponentenarchitekturen erprobt, mich mit Routing, Lebenszyklen und State Management beschäftigt und React als alternatives Framework praktisch kennengelernt.',
    kind: 'Eigene Projekte',
    role: 'Frontend-Entwicklung',
    year: '2024 – 2025',
    highlights: [
      'Eigenständige Entwicklung und Test von Anwendungen mit Angular und TypeScript',
      'KI-gestützte Entwicklung und Fehleranalyse mit Claude und Codex (ChatGPT)',
      'Praktische Auseinandersetzung mit React als alternativem Framework',
      'Erprobung unterschiedlicher Komponentenarchitekturen',
      'Dynamisches Routing, Komponentenlebenszyklen und State Management',
      'Responsive Benutzeroberflächen und moderne SPA-Konzepte',
    ],
  },
  {
    id: 'portfolio',
    title: 'Dieses Portfolio',
    category: 'frontend',
    mock: 'grid',
    colors: ['#00e6a7', '#0091ff'],
    tags: ['React 19', 'TypeScript', 'Vite'],
    short: 'Persönliche Portfolio-Website mit React und TypeScript: Dark/Light-Theme, Animationen und vollständig responsiv.',
    long: 'Diese Website ist mit React 19, TypeScript und Vite gebaut. Alle Inhalte liegen typisiert an einer zentralen Stelle, die Komponenten sind wiederverwendbar und die Seite funktioniert auf allen Bildschirmgrößen.',
    kind: 'Eigenes Projekt',
    role: 'Konzept & Entwicklung',
    year: '2026',
    highlights: [
      'Komponentenbasierte Architektur mit React und TypeScript',
      'Eigene Hooks für Theme, Scroll-Animationen und Zähler',
      'Responsives Layout, helles und dunkles Design',
      'Barrierearm: Tastaturbedienung und reduzierte Bewegung',
    ],
  },
];

export interface TimelineEntry {
  date: string;
  title: string;
  place: string;
  text: string;
  points?: string[];
  tags?: string[];
}

export const practice: TimelineEntry[] = [
  {
    date: 'Aktuell',
    title: 'Full-Stack-Webanwendung',
    place: 'Eigenes Projekt',
    text: 'Entwicklung einer modernen Webanwendung von Grund auf, über den gesamten Stack.',
    tags: ['Vue 3', 'Vuetify 3', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    date: '2024 — 2025',
    title: 'Angular- und Frontend-Projekte',
    place: 'Eigene Projekte',
    text: 'Eigenständige Entwicklung und Test von Angular-Anwendungen, KI-gestützte Fehleranalyse sowie praktische Arbeit mit React.',
    tags: ['Angular', 'TypeScript', 'React', 'JavaScript'],
  },
];

export const education: TimelineEntry[] = [
  {
    date: '08/2022 — 10/2023',
    title: 'Certified Web Application Developer',
    place: 'SGD – Studiengemeinschaft Darmstadt',
    text: 'Abschluss: Gesamtzertifikat „Gut“ · Schriftliche Prüfung: „Sehr gut“',
    points: [
      'Moderne JavaScript- und Node.js-Entwicklung',
      'Webanwendungsarchitekturen und REST-Konzepte',
      'React, Angular und Vue.js',
      'Single Page Applications und Progressive Web Apps',
      'Responsive Webdesign',
    ],
  },
  {
    date: 'Zertifiziert',
    title: 'Deutsch B2',
    place: 'Sprachzertifikat',
    text: 'Weitere Sprachen: Kurdisch und Arabisch (Muttersprachen), Englisch (B1).',
  },
];

export type StrengthIcon = 'brain' | 'rocket' | 'layers' | 'cpu' | 'users';

export interface Strength {
  icon: StrengthIcon;
  title: string;
  text: string;
}

export const strengths: Strength[] = [
  { icon: 'brain', title: 'Analytisch & lösungsorientiert', text: 'Ich zerlege Probleme in klare Schritte und suche die Ursache, statt nur Symptome zu beheben.' },
  { icon: 'rocket', title: 'Eigeninitiative & Lernbereitschaft', text: 'Neue Technologien arbeite ich mir selbstständig und schnell an, wie Angular, Vue 3 und React.' },
  { icon: 'layers', title: 'Strukturiert & zuverlässig', text: 'Sauberer, wartbarer Code und eine nachvollziehbare Arbeitsweise sind mir wichtig.' },
  { icon: 'cpu', title: 'Interesse an modernen Technologien', text: 'Ich setze KI-Tools wie Claude und Codex gezielt ein und prüfe ihre Ergebnisse kritisch.' },
  { icon: 'users', title: 'Teamfähig & verantwortungsbewusst', text: 'Mein Ziel ist es, meine Kenntnisse in einem professionellen Entwicklungsteam einzubringen und auszubauen.' },
];

export const interests = ['Softwareentwicklung', 'Neue Technologien', 'Fitness und Sport', 'Musik', 'Lesen'];

export const processSteps = [
  { title: 'Verstehen', text: 'Anforderungen klären und das Problem genau verstehen.' },
  { title: 'Planen', text: 'Datenmodell, Schnittstellen und Komponenten strukturieren.' },
  { title: 'Entwickeln', text: 'Sauberen, wartbaren Code schreiben, Frontend bis Datenbank.' },
  { title: 'Testen', text: 'Gründlich prüfen, auch KI-gestützt und mit kritischem Blick.' },
  { title: 'Verbessern', text: 'Feedback einarbeiten und die Lösung weiterentwickeln.' },
];

export const marqueeItems = ['TypeScript', 'Vue 3', 'Angular', 'React', 'Node.js', 'Express', 'PostgreSQL', 'REST-APIs'];
