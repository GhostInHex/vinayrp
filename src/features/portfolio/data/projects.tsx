import { GhostIcon, MailIcon } from "lucide-react"

import type { Project } from "../types/projects"

// Content seeded from vinay-resume-2.pdf.
// NOTE: the resume carries no project dates; periods are best-guess
// placeholders — correct them once Vinay confirms the timelines.
export const PROJECTS: Project[] = [
  {
    id: "novusmail",
    title: "NovusMail",
    period: {
      start: "06.2025", // TODO: verify actual start
      // Ongoing — omit `end`.
    },
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
    isExpanded: true,
  },
  {
    id: "project-ghost",
    title: "Project Ghost",
    period: {
      start: "02.2025", // TODO: verify actual start
    },
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
]
