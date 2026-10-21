import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ibrahim Berthé — IT Support & Backend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ibrahim Berthé: Computer Technology student in Gatineau, building secure backends, IoT platforms, PowerShell automation and fixing hardware.",
      },
      { property: "og:title", content: "Ibrahim Berthé — Portfolio" },
      {
        property: "og:description",
        content: "Backend, IoT, infrastructure automation and hands-on hardware troubleshooting.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  ["projects", "Projects"],
  ["hardware", "Hardware"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["contact", "Contact"],
];

const skills: Record<string, string[]> = {
  Backend: ["Java", "Spring Boot", "Spring Data JPA", "Node.js", "Express", "REST", "JWT", "Firebase Admin SDK"],
  "Data / Infra": ["PostgreSQL", "SQL", "Docker", "Docker Compose"],
  Frontend: ["Android", "Retrofit 2 / OkHttp", "React", "TypeScript", "Tailwind CSS", "HTML / CSS", "Recharts"],
  Systems: ["PowerShell", "WinRM", "WS-Management", "Microsoft 365", "Python"],
};

const projects = [
  {
    n: "01",
    title: "TaskTogether",
    sub: "Collaborative task manager — Mobile + Cloud",
    goal: "Enterprise-grade simulation built for fault tolerance and strict workspace isolation (multi-tenant).",
    blocks: [
      ["Android", "Async REST calls with Retrofit 2 / OkHttp — no UI thread blocking; OkHttp interceptor injects the JWT on every request."],
      ["Spring Boot", "Containerized microservices-style API with a custom OncePerRequestFilter validating tokens through the Firebase Admin SDK."],
      ["Security", "Per-workspace access control preventing any cross-workspace data exposure."],
      ["DevOps", "PostgreSQL persistence; API + database orchestrated with Docker Compose for a reproducible environment."],
    ],
    tags: ["Java", "Spring Boot 3", "Firebase Auth", "JWT", "PostgreSQL", "Docker"],
  },
  {
    n: "02",
    title: "ColdGuard",
    sub: "IoT cold-chain monitoring platform — SaaS simulation",
    goal: "Industrial SaaS aligned with HACCP-style compliance, multi-site operations and analytics.",
    blocks: [
      ["Dashboards", "Modular React + TypeScript UI with Recharts time-series highlighting thermal drift and early warnings."],
      ["Auth & RBAC", "Stateless JWT auth; Admin / Manager / User roles enforced at route and business-logic levels."],
      ["Data model", "Relational PostgreSQL schema for sites, zones, sensors and measurement history."],
      ["Predictive", "Thermal risk scoring layer to anticipate failures and reduce downtime."],
    ],
    tags: ["React", "TypeScript", "TanStack Router", "Node.js", "Express", "PostgreSQL"],
  },
  {
    n: "03",
    title: "Windows Lab Orchestration",
    sub: "Automated remote control — final practical exam, team of 3",
    goal: "Enterprise-style automation eliminating repetitive IT support tasks.",
    blocks: [
      ["Setup", "Static IP networking, ExecutionPolicy, secured WinRM / WS-Management and tuned TrustedHosts."],
      ["Modular scripts", "File-system admin, disk-space alerts, safe process termination and network connectivity audits."],
      ["Traceability", "Structured logs and CSV exports as execution evidence for faster troubleshooting."],
    ],
    tags: ["PowerShell", "WinRM", "WS-Management", "Logging"],
  },
];

const hardware = [
  {
    title: "Laptop screen replacement",
    text: "Replaced a broken LCD panel end-to-end: disassembly, connector handling, reassembly and validation.",
    links: ["https://youtube.com/shorts/YejJ7glTexs"],
  },
  {
    title: "TV repair via signal bypass",
    text: "Diagnosed a black-screen / protection-mode failure from a damaged LVDS ribbon; isolated faulty CLK lines with dielectric tape to restore the display.",
    links: ["https://youtube.com/shorts/1wo4bpRyisQ", "https://youtube.com/shorts/r6C2QrciRho"],
  },
  {
    title: "Desktop PC — random shutdowns",
    text: "Root-cause elimination traced the issue to an intermittent contact from a misplaced display cable. Fixed without replacing parts.",
    links: [],
  },
  {
    title: "Urban display monitor restoration",
    text: "Recovered discarded monitors; HDMI dropping after ~3s pointed to a bloated electrolytic capacitor. Diagnosed and fixed.",
    links: ["https://youtube.com/shorts/Sg9uiSc2h_M"],
  },
];

const experience = [
  {
    role: "Intern — IT Support Technician & Junior Developer",
    org: "Ottawa, ON",
    date: "Sept 2026 – Present",
    points: [
      "Resolve hardware, software and network support tickets.",
      "Develop, test and debug features across internal applications.",
      "Automate repetitive IT tasks with scripts and maintain technical documentation.",
    ],
  },
  {
    role: "Delivery Driver",
    org: "DoorDash · Ottawa",
    date: "Oct 2023 – Present",
    points: ["Real-time route optimization under strict time constraints.", "“Golden Dasher” elite status — consistent high performance, fully autonomous."],
  },
  {
    role: "Windows Surface Cleaning Technician",
    org: "Collège Pro",
    date: "May 2025 – Aug 2025",
    points: ["Job-site safety assessment and risk management, including height work.", "Bilingual field prospecting and client acquisition."],
  },
  {
    role: "Remote Appointment Setter",
    org: "NR Immobilier · Remote (France)",
    date: "Jan 2025 – May 2025",
    points: ["Multi-channel prospect qualification (SMS, email, DMs).", "CRM workflow administration and closer calendar coordination."],
  },
  {
    role: "Customer Service Specialist",
    org: "Mission Uniforme · Gatineau",
    date: "Oct 2023 – May 2025",
    points: ["Solution-first support in person and by phone.", "Merchandising, stock replenishment and delivery logistics."],
  },
];

const education = [
  ["DEC, Computer Technology", "Collège Universel · Gatineau", "Jan 2024 – Dec 2026"],
  ["Professional Technician Accreditation", "Collège Pro · Ottawa", "Apr 2025"],
  ["Bachelor 1, Management Science", "EPHEP Smart School · Bamako", "Nov 2022 – Jun 2023"],
  ["French Proficiency Test (TCF)", "Centre Culturel Français · Bamako", "Sep 2022"],
  ["High School Diploma in Science", "Mali", "Sep 2019 – Jul 2022"],
];

const certs = [
  ["RCR / DEA Level C", "Red Cross · Jan 2026"],
  ["Google IT Support Certificate", "In progress"],
];

function SectionTitle({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <p className="font-mono text-sm text-primary">// {label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm font-semibold">
            <span className="text-primary">~/</span>ibrahim<span className="caret text-primary">_</span>
          </a>
          <nav className="hidden gap-6 font-mono text-sm text-muted-foreground md:flex">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-primary">{l}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-12 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" /> Open to internships (stage) · Gatineau / Ottawa
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Ibrahim <span className="text-primary">Berthé</span>
            </h1>
            <p className="mt-4 font-mono text-accent">IT Support Technician & Junior Backend Developer</p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Computer Technology student focused on secure backends, IoT platforms and infrastructure
              automation — and the kind of person who opens up the hardware when it breaks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90">
                See projects
              </a>
              <a href="mailto:ibraberthe0301@gmail.com" className="rounded-md border px-5 py-3 font-medium transition hover:border-primary hover:text-primary">
                Contact me
              </a>
            </div>
          </div>
          <div className="img-slot aspect-[4/5] w-full">[ portrait ]</div>
        </section>

        <section className="grid gap-4 border-y py-10 md:grid-cols-4">
          {Object.entries(skills).map(([cat, list]) => (
            <div key={cat}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">{cat}</p>
              <div className="flex flex-wrap gap-1.5">
                {list.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </section>

        <section className="py-24">
          <SectionTitle id="projects" label="01 — software & infrastructure" title="Selected projects" />
          <div className="space-y-8">
            {projects.map((p) => (
              <article key={p.n} className="grid gap-8 rounded-xl border bg-card p-6 md:grid-cols-[1fr_1.3fr] md:p-10">
                <div>
                  <p className="font-mono text-5xl font-bold text-primary/30">{p.n}</p>
                  <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                  <p className="font-mono text-sm text-accent">{p.sub}</p>
                  <p className="mt-4 text-muted-foreground">{p.goal}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="img-slot mt-6 aspect-video">[ screenshot ]</div>
                </div>
                <ul className="space-y-5">
                  {p.blocks.map(([h, t]) => (
                    <li key={h} className="border-l-2 border-primary/40 pl-4">
                      <p className="font-mono text-sm font-semibold text-primary">{h}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12">
          <SectionTitle id="hardware" label="02 — hands-on troubleshooting" title="Hardware repairs" />
          <div className="grid gap-6 md:grid-cols-2">
            {hardware.map((h) => (
              <article key={h.title} className="rounded-xl border bg-card p-6">
                <div className="img-slot mb-5 aspect-video">[ photo ]</div>
                <h3 className="text-xl font-bold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                {h.links.length > 0 && (
                  <div className="mt-4 flex gap-4 font-mono text-xs">
                    {h.links.map((l, i) => (
                      <a key={l} href={l} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                        ▶ video {h.links.length > 1 ? i + 1 : ""}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="py-24">
          <SectionTitle id="experience" label="03 — work" title="Experience" />
          <ol className="relative border-l">
            {experience.map((e) => (
              <li key={e.role} className="mb-10 ml-6">
                <span className="absolute -left-1.5 mt-2 size-3 rounded-full border-2 border-primary bg-background" />
                <p className="font-mono text-xs text-muted-foreground">{e.date}</p>
                <h3 className="mt-1 text-lg font-bold">{e.role}</h3>
                <p className="text-sm text-accent">{e.org}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-12">
          <SectionTitle id="education" label="04 — credentials" title="Education & certificates" />
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <ul className="divide-y rounded-xl border bg-card">
              {education.map(([t, s, d]) => (
                <li key={t} className="flex flex-col justify-between gap-1 p-5 md:flex-row md:items-center">
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="text-sm text-muted-foreground">{s}</p>
                  </div>
                  <p className="font-mono text-xs text-primary">{d}</p>
                </li>
              ))}
            </ul>
            <div className="space-y-6">
              {certs.map(([t, s]) => (
                <div key={t} className="rounded-xl border bg-card p-5">
                  <p className="font-semibold">{t}</p>
                  <p className="font-mono text-xs text-accent">{s}</p>
                </div>
              ))}
              <div className="rounded-xl border bg-card p-5">
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Languages</p>
                <p className="text-sm text-muted-foreground">French · English · Bambara</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-24">
          <div className="rounded-2xl border bg-card p-10 text-center md:p-16">
            <p className="font-mono text-sm text-primary">// 05 — contact</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Let's work together.</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Looking for an internship in IT support or backend development. References available on request.
            </p>
            <a href="mailto:ibraberthe0301@gmail.com" className="mt-8 inline-block font-mono text-xl text-primary hover:underline md:text-2xl">
              ibraberthe0301@gmail.com
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-3 font-mono text-sm">
              <a href="tel:+13435588409" className="tag hover:text-primary">343 558 8409</a>
              <a href="https://github.com/ibraberthe0301-ai" target="_blank" rel="noreferrer" className="tag hover:text-primary">GitHub</a>
              <a href="http://www.linkedin.com/in/ibrahim-berthe-588417349" target="_blank" rel="noreferrer" className="tag hover:text-primary">LinkedIn</a>
              <span className="tag">Gatineau, QC</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ibrahim Berthé
      </footer>
    </div>
  );
}
