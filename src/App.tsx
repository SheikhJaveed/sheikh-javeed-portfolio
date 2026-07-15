import { type ElementType, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MoonStar,
  Paperclip,
  Sun,
  Twitter,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { aiSystems, contactLinks, experience, profile, projects, signals } from "@/lib/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#work" },
  { label: "More", href: "#experience" },
];

const contactIconMap = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="page-grid" />
      <main className="mx-auto min-h-screen max-w-[880px] border-x border-dashed border-border/80">
        <Header theme={theme} onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
        <Hero />
        <SystemTrace />
        <About />
        <ContactTiles />
        <Projects />
        <Experience />
        <Signals />
        <AIEngineering />
        <Footer />
      </main>
    </div>
  );
}

function Header({
  theme,
  onToggleTheme,
}: {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  const isDark = theme === "dark";
  const ThemeIcon = isDark ? Sun : MoonStar;

  return (
    <header className="sticky top-0 z-40 border-b border-dashed border-border/80 bg-background/88 px-5 py-3 backdrop-blur-xl md:px-7">
      <div className="flex items-center justify-between">
        <a href="#home" className="font-serif text-3xl leading-none tracking-[-0.06em] text-foreground">
          Javeed
        </a>

        <nav aria-label="Portfolio sections" className="flex items-center gap-1 text-xs font-semibold text-muted-foreground sm:text-sm">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-sm px-3 py-2 transition-colors hover:text-foreground ${
                index === 0 ? "text-foreground after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-foreground" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <ChevronDown className="h-4 w-4" />
          <button
            className="ml-3 grid h-9 w-9 place-items-center rounded-sm text-foreground transition-colors hover:bg-secondary"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={!isDark}
            onClick={onToggleTheme}
            type="button"
          >
            <ThemeIcon className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="pixel-panorama mx-3 mt-0 h-[172px] overflow-hidden md:mx-6 md:h-[236px]">
        <div className="pixel-sun" />
        <div className="pixel-ridge ridge-one" />
        <div className="pixel-ridge ridge-two" />
        <div className="pixel-waterfall fall-one" />
        <div className="pixel-waterfall fall-two" />
        <div className="pixel-ground" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid gap-8 border-y border-dashed border-border/80 px-5 py-8 md:grid-cols-[178px_minmax(0,1fr)] md:px-7"
      >
        <div className="pixel-avatar" aria-label="Abstract pixel profile portrait">
          <div className="avatar-hair" />
          <div className="avatar-face" />
          <div className="avatar-body" />
          <div className="avatar-eye left" />
          <div className="avatar-eye right" />
        </div>

        <div className="self-center">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-4 w-4 rounded-full border border-foreground bg-[linear-gradient(90deg,#f7f4ea_50%,#0b0b0c_50%)]" />
            <Badge className="text-[11px] font-bold tracking-[0.18em]">available</Badge>
          </div>
          <h1 className="font-serif text-4xl leading-none tracking-[-0.055em] md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-bold tracking-[0.06em] text-muted-foreground md:text-2xl">
            {profile.role}
          </p>
          <p className="mt-2 font-semibold text-muted-foreground">{profile.location}</p>
        </div>
      </motion.div>
    </section>
  );
}

function SystemTrace() {
  const traceLines = [
    ["boot.profile()", "OK", "ready"],
    ["load.experience()", `${experience.length} entries`, "indexed"],
    ["scan.projects()", `${projects.length} modules`, "linked"],
    ["open.channel()", "mailto ready", "listening"],
  ];

  return (
    <section className="border-b border-dashed border-border/80 px-5 py-5 md:px-7" aria-label="System trace">
      <div className="terminal-panel overflow-hidden rounded-md border border-primary/20 bg-[#050806] font-mono text-[11px] shadow-[0_18px_55px_rgba(0,0,0,0.32),inset_0_0_0_1px_rgba(124,255,190,0.05)] md:text-xs">
        <div className="flex items-center justify-between border-b border-primary/10 bg-white/[0.025] px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#57e389]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.24em] text-primary/70">diagnostics</span>
        </div>

        <div className="relative px-4 py-4">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-muted-foreground">
            <span className="text-primary">javeed@portfolio</span>
            <span>:</span>
            <span className="text-foreground/75">~/system</span>
            <span className="text-primary">$</span>
            <span className="text-foreground">run trace --quick</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </div>

          <div className="space-y-1.5">
            {traceLines.map(([command, status, note], index) => (
              <div
                key={command}
                className="grid grid-cols-[18px_minmax(0,1fr)_auto] items-center gap-3 text-muted-foreground"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="text-primary/70">&gt;</span>
                <span className="min-w-0 truncate text-foreground/85">{command}</span>
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-primary">{status}</span>
                  <span className="hidden text-foreground/35 sm:inline">[{note}]</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <ul className="space-y-4 text-base leading-7 text-foreground/88 md:text-lg md:leading-8">
        <li>
          I&apos;m an <strong>AI Engineer</strong> building agentic systems, RAG-backed memory, and production backend workflows.
        </li>
        <li>
          My work spans <strong>tool-calling integrations, semantic search, FastAPI, React, LangChain</strong>, and reliable APIs that connect models to real products.
        </li>
        <li>
          I&apos;m a Computer Science undergraduate focused on GenAI, distributed systems, AI observability, and cloud-integrated applications.
        </li>
      </ul>
    </Section>
  );
}

function ContactTiles() {
  const resumeLink = {
    label: "Resume",
    href: profile.resume,
    icon: Paperclip,
  };
  const twitterLink = {
    label: "Twitter",
    href: "https://x.com/sheikh_javeed12",
    icon: Twitter,
  };

  const links = [
    contactLinks.find((link) => link.label === "GitHub"),
    contactLinks.find((link) => link.label === "LinkedIn"),
    twitterLink,
    contactLinks.find((link) => link.label === "Email"),
    resumeLink,
  ].filter(Boolean) as Array<{ label: string; href: string; icon?: ElementType }>;

  return (
    <Section id="contact" title="Contact" compact roleLabel="Contact">
      <div className="grid gap-px overflow-hidden border-y border-dashed border-border/80 bg-border/80 sm:grid-cols-2 lg:grid-cols-5">
        {links.map((link) => {
          const Icon = link.icon ?? contactIconMap[link.label as keyof typeof contactIconMap] ?? Mail;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="group flex items-center gap-3 bg-background px-4 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary md:text-lg"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                <Icon className="h-5 w-5" />
              </span>
              <span>{link.label}</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="work" title="Selected Work" roleLabel="Selected Work">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <a key={project.title} href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} project`}>
              <Card className="group h-full rounded-none border-dashed bg-background transition-colors hover:bg-secondary/60">
                <CardHeader>
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">project {String(index + 1).padStart(2, "0")}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <CardTitle className="font-serif text-3xl tracking-[-0.06em]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="secondary" className="rounded-full">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience" roleLabel="Experience">
      <div className="space-y-px overflow-hidden border-y border-dashed border-border/80 bg-border/80">
        {experience.map((item) => (
          <article key={`${item.title}-${item.period}`} className="grid gap-5 bg-background px-0 py-6 md:grid-cols-[210px_minmax(0,1fr)]">
            <div className="px-5 md:px-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{item.period}</p>
              <p className="mt-3 text-sm font-bold text-muted-foreground">{item.location}</p>
            </div>
            <div className="px-5 md:px-7">
              <h3 className="font-serif text-3xl leading-none tracking-[-0.055em]">{item.title}</h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">{item.org}</p>
              <ul className="mt-5 grid gap-3 text-base leading-7 text-foreground/80 md:grid-cols-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Signals() {
  return (
    <Section id="signals" title="Signals">
      <div className="grid gap-px overflow-hidden border border-dashed border-border/80 bg-border/80 md:grid-cols-2">
        {signals.map((signal) => {
          const Icon = signal.icon;
          return (
            <article key={signal.label} className="bg-background p-6">
              <Icon className="mb-8 h-5 w-5 text-primary" />
              <h3 className="font-serif text-2xl tracking-[-0.055em]">{signal.label}</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{signal.detail}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function AIEngineering() {
  return (
    <Section id="ai-engineering" title="AI Engineering" roleLabel="AI Engineering">
      <div className="grid gap-px overflow-hidden border border-dashed border-border/80 bg-border/80 md:grid-cols-2">
        {aiSystems.map((system, index) => {
          const Icon = system.icon;
          return (
            <article key={system.label} className="group bg-background p-6 transition-colors hover:bg-secondary/50">
              <div className="mb-8 flex items-center justify-between">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  node {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-2xl tracking-[-0.055em]">{system.label}</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{system.detail}</p>
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {system.capabilities.map((item) => (
                    <Badge key={item} variant="secondary" className="rounded-full">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Section({
  id,
  title,
  children,
  compact = false,
  roleLabel,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  compact?: boolean;
  roleLabel?: string;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      role={roleLabel ? "region" : undefined}
      aria-labelledby={roleLabel ? headingId : undefined}
      className={`scroll-mt-24 border-b border-dashed border-border/80 px-5 md:px-7 ${compact ? "py-8" : "py-11"}`}
    >
      <div className="mb-7 flex items-center gap-3">
        <h2 id={headingId} className="font-serif text-3xl leading-none tracking-[-0.06em] md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-12 md:px-7">
      <p className="text-sm italic text-muted-foreground">system compiled / Sheikh Mannan Javeed / 2026</p>
    </footer>
  );
}

export default App;
