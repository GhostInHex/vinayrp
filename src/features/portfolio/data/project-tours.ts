import type { ProjectTourSlide } from "../types/projects"

// Real project screenshots with captions grounded in the project documentation.
export const PROJECT_TOURS = {
  novusmail: [
    {
      id: "landing",
      src: "/projects/tours/novusmail/landing.webp",
      alt: "NovusMail landing page with an inbox and calendar product preview",
      title: "Inbox and calendar together",
      description:
        "Triage email and manage meetings from one keyboard-first workspace.",
      width: 3228,
      height: 2016,
    },
    {
      id: "workspace",
      src: "/projects/tours/novusmail/workspace.webp",
      alt: "NovusMail workspace with inbox, active email thread, and calendar side by side",
      title: "Inbox, thread, and agenda",
      description:
        "Read a thread alongside the message queue and calendar without switching between apps.",
      width: 3112,
      height: 1944,
    },
    {
      id: "command-console",
      src: "/projects/tours/novusmail/command-console.webp",
      alt: "NovusMail command console with search and scheduling suggestions",
      title: "Command palette",
      description:
        "Search mail, draft emails, and schedule meetings using keyboard commands and plain-language requests.",
      width: 3112,
      height: 1944,
    },
    {
      id: "ai-assistant",
      src: "/projects/tours/novusmail/ai-assistant.webp",
      alt: "NovusMail AI assistant panel with suggested inbox and calendar requests",
      title: "AI-assisted email",
      description:
        "Ask for inbox summaries, reply drafts, and meeting proposals. Review before anything is sent or scheduled.",
      width: 3112,
      height: 1944,
    },
    {
      id: "new-event",
      src: "/projects/tours/novusmail/new-event.webp",
      alt: "NovusMail new event form over the inbox and calendar workspace",
      title: "Schedule in context",
      description:
        "Create a calendar event while keeping the related email thread and agenda visible.",
      width: 3112,
      height: 1944,
    },
  ],
  readeasy: [
    {
      id: "landing",
      src: "/projects/tours/readeasy/landing.png",
      alt: "ReadEasy landing page with a plain-language comparison and page input",
      title: "Start with a page",
      description:
        "Paste a URL or text to compare the original with a simpler version. Cached examples make the demo available without an API key.",
      width: 1920,
      height: 1080,
    },
    {
      id: "focus",
      src: "/projects/tours/readeasy/focus.png",
      alt: "ReadEasy Focus mode with a reading card, progress, and original page",
      title: "Read one step at a time",
      description:
        "Focus mode breaks a dense page into manageable cards alongside the original text.",
      width: 1920,
      height: 1080,
    },
    {
      id: "dyslexia",
      src: "/projects/tours/readeasy/dyslexia.png",
      alt: "ReadEasy Dyslexia mode with spaced type and bolded word starts",
      title: "Dyslexia reading mode",
      description:
        "Adjust the type, spacing, background tint, and bold word starts while keeping the original page for reference.",
      width: 1920,
      height: 1080,
    },
    {
      id: "action",
      src: "/projects/tours/readeasy/action.png",
      alt: "ReadEasy Action mode with an extracted checklist beside the source page",
      title: "Turn text into actions",
      description:
        "Extract required steps and deadlines into a checklist you can follow.",
      width: 1920,
      height: 1080,
    },
    {
      id: "adhd",
      src: "/projects/tours/readeasy/adhd.png",
      alt: "ReadEasy ADHD mode with a short reading card and navigation controls",
      title: "One idea per screen",
      description:
        "ADHD mode uses short cards, emphasized keywords, and progress controls to reduce visual load.",
      width: 1920,
      height: 1080,
    },
  ],
  "project-ghost": [
    {
      id: "features",
      src: "/projects/tours/project-ghost/features.png",
      alt: "Project Ghost feature overview with contribution logging, activity timelines, and private peer reflections",
      title: "Contribution tracking",
      description:
        "Log daily contributions, follow the team timeline, and collect private peer reflections.",
      width: 1440,
      height: 900,
    },
    {
      id: "timeline",
      src: "/projects/tours/project-ghost/timeline.png",
      alt: "Project Ghost seeded demo contribution chart and recent team updates",
      title: "See who contributed",
      description:
        "The seeded demo project pairs a contribution chart with dated updates from each teammate.",
      width: 1440,
      height: 900,
    },
    {
      id: "reflection",
      src: "/projects/tours/project-ghost/reflection.png",
      alt: "Project Ghost demo workspace with group reflection and private coaching sections",
      title: "Reflect without public callouts",
      description:
        "The demo workspace separates a shared team reflection from an individual coaching note.",
      width: 1440,
      height: 900,
    },
  ],
  impacttrace: [
    {
      id: "journal",
      src: "/projects/tours/impacttrace/journal.png",
      alt: "ImpactTrace sample field journal with source photos, captions, tags, and confidence scores",
      title: "Keep the original evidence",
      description:
        "The sample field journal keeps photos, captions, tags, confidence, and source links together.",
      width: 1440,
      height: 900,
    },
    {
      id: "organize",
      src: "/projects/tours/impacttrace/organize.png",
      alt: "ImpactTrace demo suggestions for evidence groups, a timeline, and before-and-after comparison",
      title: "Build a timeline from media",
      description:
        "Demo suggestions group related evidence and propose a timeline and before-and-after pairs for review.",
      width: 1440,
      height: 900,
    },
    {
      id: "review",
      src: "/projects/tours/impacttrace/review.png",
      alt: "ImpactTrace sample evidence review screen with confirm and reject controls for media tags",
      title: "Confirm the story",
      description:
        "Review tags and low-confidence signals before treating suggestions as confirmed project facts. Shown with sample data.",
      width: 1440,
      height: 900,
    },
  ],
  deadmon: [
    {
      id: "landing",
      src: "/projects/tours/deadmon/landing.png",
      alt: "deadmon landing-page hero with a deadline-verification headline and dashboard action",
      title: "Find deadlines worth checking",
      description:
        "A deadline-verification prototype. Its current demo replays recorded listings rather than a live crawl.",
      width: 1254,
      height: 2085,
      crop: "hero",
    },
    {
      id: "dashboard-verdicts",
      src: "/projects/tours/deadmon/dashboard.png",
      alt: "deadmon dashboard showing recorded hackathon listings and verification verdicts",
      title: "Check each listing",
      description:
        "See parsed deadlines and a live, unverified, or closed verdict for listings from the recorded corpus.",
      width: 1254,
      height: 5023,
      crop: "hero",
      cropPosition: "top",
    },
    {
      id: "dashboard-runs",
      src: "/projects/tours/deadmon/dashboard.png",
      alt: "deadmon dashboard run-history table with crawl status, counts, timing, and trace links",
      title: "Inspect crawl runs",
      description:
        "The run history records counts, duration, status, and trace links for fixture-based crawls.",
      width: 1254,
      height: 5023,
      crop: "hero",
      cropPosition: "bottom",
    },
  ],
} satisfies Record<string, ProjectTourSlide[]>
