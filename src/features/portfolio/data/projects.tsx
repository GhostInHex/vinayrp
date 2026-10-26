import {
  BookOpenIcon,
  GhostIcon,
  MailIcon,
  ScanSearchIcon,
  TimerIcon,
} from "lucide-react"

import type { Project } from "../types/projects"
import { PROJECT_TOURS } from "./project-tours"

// Curated from the resume and each project's public repository README.
// Dates are omitted rather than presenting repository creation as project start.
export const PROJECTS: Project[] = [
  {
    id: "novusmail",
    tour: PROJECT_TOURS["novusmail"],
    isExpanded: true,
    title: "NovusMail",
    summary:
      "A keyboard-first Gmail and Google Calendar workspace with an AI copilot for email triage and scheduling.",
    sourceUrl: "https://github.com/GhostInHex/novus-mail",
    recognition: "8th place · ChaiCode",
    link: "https://novus.vinayrp.in/",
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Gmail API",
      "Google Calendar API",
      "OAuth",
      "Webhooks",
      "Server-Sent Events",
    ],
    description: `**AI-Powered Gmail and Calendar Command Center**

- Built a unified workspace that lets users triage Gmail, read and respond to threads, manage their calendar, and keep email context visible while scheduling meetings.
- Added keyboard-driven commands and an AI copilot for inbox search, thread summaries, reply drafts, and calendar proposals — with user confirmation required before external actions.
- Integrated Gmail and Google Calendar through Corsair plugins with tenant-scoped OAuth workspaces, cache-first PostgreSQL reads, Drizzle ORM, webhooks, Server-Sent Events, and polling fallback.

[Live Demo](https://novus.vinayrp.in/) · [Source Code](https://github.com/GhostInHex/novus-mail)`,
    icon: <MailIcon />,
  },
  {
    id: "readeasy",
    tour: PROJECT_TOURS["readeasy"],
    isExpanded: true,
    title: "ReadEasy",
    summary:
      "Turns dense web pages into plain-language reading modes, spoken text, and actionable checklists.",
    sourceUrl: "https://github.com/GhostInHex/readeasy",
    recognition: "3rd prize · BUILDVERSE",
    link: "https://readeasy-eight.vercel.app",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "OpenRouter",
      "Mozilla Readability",
      "Web Speech API",
    ],
    description: `**Accessible reading with AI-assisted restructuring**

- Built five reading modes for readers with dyslexia, ADHD, or low vision, with side-by-side original text, reading-level controls, and read-aloud support.
- Added a server-side fetch, clean, and restructure pipeline that returns structured JSON, plus questions grounded in the page's text.
- Bundled cached demo pages and a raw-text input path so the product remains demonstrable when sites block fetching or an API is unavailable.

[Live Demo](https://readeasy-eight.vercel.app) · [Source Code](https://github.com/GhostInHex/readeasy)`,
    icon: <BookOpenIcon />,
  },
  {
    id: "project-ghost",
    tour: PROJECT_TOURS["project-ghost"],
    isExpanded: false,
    title: "Project Ghost",
    summary:
      "Makes contributions visible in student teams through daily updates, peer reviews, and AI-assisted reflections.",
    sourceUrl: "https://github.com/GhostInHex/Project-Ghost",
    recognition: "4th place · HackBuzz",
    link: "https://new-project-dun-tau.vercel.app/",
    skills: [
      "React",
      "Vite",
      "Bun",
      "Express",
      "MongoDB",
      "Mongoose",
      "Google Gemini API",
    ],
    description: `**AI-Assisted Accountability Platform**

- Built a collaboration platform that makes invisible work visible in college group projects through lightweight daily updates, contribution timelines, and project workspaces.
- Implemented email authentication with HTTP-only JWT sessions, project invitations, membership controls, contribution categories, anonymous peer reviews, and project archiving.
- Integrated Google Gemini for neutral team reflections and private coaching with local fallbacks; deployed the React frontend on Vercel and the Bun/Express API on Render with MongoDB.

[Live App](https://new-project-dun-tau.vercel.app/) · [Source Code](https://github.com/GhostInHex/Project-Ghost)`,
    icon: <GhostIcon />,
  },
  {
    id: "impacttrace",
    tour: PROJECT_TOURS["impacttrace"],
    isExpanded: false,
    title: "ImpactTrace",
    summary:
      "Organizes field photos and videos into reviewed sustainability evidence and reports with source links.",
    sourceUrl: "https://github.com/GhostInHex/impacttrace",
    link: "https://impact-trace-gules.vercel.app/",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Cloudinary",
      "OpenRouter",
      "Zustand",
    ],
    description: `**AI evidence workspace built for Code Cubicle 6.0**

- Integrated Cloudinary tagging, captioning, and OCR with a review workflow for confirming, rejecting, and editing evidence before report generation.
- Built project timelines, before-and-after comparisons, and printable impact reports that retain the original media sources.
- Added natural-language query planning over a permitted public dataset, with source links on every row. The MVP stores projects in browser localStorage and labels sample data and provider fallbacks.

[Live Demo](https://impact-trace-gules.vercel.app/) · [Source Code](https://github.com/GhostInHex/impacttrace)`,
    icon: <ScanSearchIcon />,
  },
  {
    id: "deadmon",
    tour: PROJECT_TOURS["deadmon"],
    isExpanded: false,
    title: "deadmon",
    summary:
      "A Python hackathon-listing pipeline with verification, crawl traces, and a server-rendered dashboard.",
    sourceUrl: "https://github.com/GhostInHex/deadmon",
    link: "https://deadmon.vercel.app/",
    status: "Prototype",
    skills: ["Python", "pytest", "Data extraction", "Observability"],
    description: `**Reproducible crawl-pipeline prototype for neatHack**

- Implemented the first pipeline slice: parse recorded Unstop listings, verify deadlines and listing status, store results, and render verdicts on a server-rendered dashboard.
- Added deterministic fixture-based tests and crawl tracing with a local fallback when the tracing provider is unavailable.
- Current scope uses recorded fixtures. Live collection, scheduled refresh, eligibility matching, alerts, and self-healing are planned rather than shipped.

[Live Demo](https://deadmon.vercel.app/) · [Source Code](https://github.com/GhostInHex/deadmon)`,
    icon: <TimerIcon />,
  },
]
