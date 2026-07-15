import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Medal,
  MessageSquare,
  Rocket,
  SearchCode,
  Smartphone,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Origin", href: "#origin" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Signals", href: "#signals" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Sheikh Mannan Javeed",
  role: "AI Engineer",
  location: "Bengaluru, India",
  email: "smjaveed94@gmail.com",
  phone: "8867589190",
  headline: "AI engineer building agent workflows, RAG memory, and production backend systems.",
  summary:
    "Computer Science undergraduate with experience building AI-powered applications, agentic systems, scalable backend services, and cloud-integrated product workflows.",
  resume: "/Sheikh_Mannan_Javeed_15th_July_2026.pdf",
};

export const stats = [
  { label: "Current track", value: "AI systems" },
  { label: "Core focus", value: "Agents + RAG" },
  { label: "Operating mode", value: "Prototype, integrate, ship" },
];

export const experience = [
  {
    period: "Jun 2026 - Present",
    title: "AI Engineer",
    org: "BaseThesis Labs",
    location: "Bengaluru, Karnataka",
    points: [
      "Built the Projects feature for Synth, an AI-powered financial assistant, enabling persistent memory and contextual conversations across multiple chat sessions.",
      "Developed an end-to-end Tally integration with tool calls and backend workflows for secure accounting and financial data retrieval.",
      "Designed AI agent workflows with backend services to improve context retention, tool execution, and response reliability in production deployments.",
    ],
  },
  {
    period: "Jan 2026 - May 2026",
    title: "Full Stack Developer Intern",
    org: "Hertzwave Innovation Private Limited",
    location: "Bengaluru, Karnataka",
    points: [
      "Developed and maintained REST APIs for production applications, including request handling, validation, and error management.",
      "Integrated AI-powered services into Node.js and React MERN applications with clean backend-to-frontend communication.",
      "Designed scalable backend workflows and service-level logic to support future product expansion.",
    ],
  },
  {
    period: "Sep 2025 - Dec 2026",
    title: "SDE Intern",
    org: "Hertzwave Innovation Private Limited",
    location: "Bengaluru, Karnataka",
    points: [
      "Built a Compliance Mapper for BRSR reports using organizational and emissions data.",
      "Developed backend APIs for report configuration, preview, generation, and Scope 1/2/3 emissions mapping.",
      "Integrated AI-assisted field mapping with PDF processing and export workflows.",
    ],
  },
];

export const projects = [
  {
    title: "Agentic SRE: Memory-Augmented Incident Response",
    type: "AI Observability",
    description:
      "Incident response system that retrieves root causes, resolutions, and remediation commands from semantic memory instead of hardcoded rules.",
    stack: ["Elasticsearch", "Vector Search", "all-MiniLM-L6-v2", "Agentic Reasoning"],
    href: "https://github.com/SheikhJaveed",
    icon: SearchCode,
  },
  {
    title: "Intelligent Offline Messaging App",
    type: "Offline-first Android",
    description:
      "Kotlin messaging app with background sync, conflict resolution, message versioning, guaranteed delivery, and memory-efficient chat rendering.",
    stack: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Hilt"],
    href: "https://github.com/SheikhJaveed",
    icon: Smartphone,
  },
  {
    title: "MindArena: AI Debate Club",
    type: "Multi-agent RAG Platform",
    description:
      "Debate platform with Pro, Con, Moderator, and Judge agents using RAG over 1.5M+ IBM Debater claims with automated scoring.",
    stack: ["FastAPI", "React", "LangChain", "ChromaDB", "Gemini Flash"],
    href: "https://github.com/SheikhJaveed/AI-DebateClub-genAI-project",
    icon: Bot,
  },
];

export const signals = [
  {
    label: "IEEE Publication",
    detail:
      "Smart Safety Solution: Wearable Health Tracker with Cloud-Based Alerts and Fall Detection. DOI: 10.1109/ICVTTS67119.2025.11296498.",
    icon: FileText,
  },
  {
    label: "Xenith Hackathon",
    detail: "Placed 4th at Xenith Hackathon, DSCE in May 2025. Also ranked 6th at Advaya Hackathon, BGSCET.",
    icon: Medal,
  },
  {
    label: "Certifications",
    detail: "Web Development, Pandas in Python, and Automate the Boring Stuff with Python.",
    icon: Rocket,
  },
  {
    label: "Computer Science",
    detail: "B.E. in Computer Science at Ramaiah Institute of Technology, Bengaluru. CGPA 8.89/10, graduating June 2026.",
    icon: GraduationCap,
  },
];

export const aiSystems = [
  {
    label: "Agentic Product Workflows",
    detail:
      "Tool-calling flows, durable context, and backend orchestration for production assistants like Synth.",
    capabilities: ["Tool calls", "Context retention", "Response reliability"],
    icon: Workflow,
  },
  {
    label: "RAG + Semantic Memory",
    detail:
      "Retrieval systems that turn historical incidents, claims, and domain records into reusable model context.",
    capabilities: ["ChromaDB", "Elasticsearch vectors", "all-MiniLM-L6-v2"],
    icon: BrainCircuit,
  },
  {
    label: "Production AI Backends",
    detail:
      "API layers, validation, error handling, and service logic that make AI features usable beyond demos.",
    capabilities: ["FastAPI", "Node.js", "REST APIs", "PostgreSQL"],
    icon: Cloud,
  },
  {
    label: "Applied AI Interfaces",
    detail:
      "Full-stack product surfaces for financial assistants, debate systems, compliance tools, and offline apps.",
    capabilities: ["React", "Gemini Flash", "Tally integration"],
    icon: MessageSquare,
  },
];

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: "https://github.com/SheikhJaveed", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sheikh-javeed/", icon: Linkedin },
];

export const focusPhrases = [
  "agent workflows",
  "retrieval memory",
  "tool execution",
  "AI observability",
  "backend reliability",
  "product integration",
];

export const IconBriefcase = BriefcaseBusiness;
