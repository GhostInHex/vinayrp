import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Vinay",
  lastName: "Reddy Patil",
  displayName: "Vinay Reddy Patil",
  username: "vinayrp",
  gender: "male",
  pronouns: "he/him",
  bio: "Full-Stack Developer building AI applications.",
  flipSentences: [
    "Full-Stack Developer.",
    "AI Applications.",
    "14+ articles published.",
    "Based in Bengaluru.",
  ],
  address: "Bengaluru, India",
  phoneNumberB64: "", // E.164 format, base64 encoded — add a real number before launch
  emailB64: "dmluYXlycGRldkBnbWFpbC5jb20=", // base64 encoded
  website: "https://vinayrp.in",
  jobTitle: "Full-Stack Developer — AI Applications",
  jobs: [], // No employment history; the home page leads with projects instead.
  about: `- I’m Vinay Reddy Patil — a student full-stack developer focused on AI applications.
- Full-stack developer building practical web products with modern frontend, backend, database, and AI technologies — shipping end-to-end applications with authentication, third-party APIs, realtime updates, and human-in-the-loop AI workflows.
- Builder of AI-powered products like [NovusMail](https://novus.vinayrp.in/) and Project Ghost.
- Published 14+ technical articles on [Hashnode](https://vinayrp-dev.hashnode.dev).
`,
  avatar: "/avatar.svg", // Placeholder; swap this file to change it everywhere.
  avatarVariants: {
    lightOff: "/avatar.svg",
    lightOn: "/avatar.svg",
    darkOff: "/avatar.svg",
    darkOn: "/avatar.svg",
  },
  ogImage:
    "/og/simple?title=Vinay%20Reddy%20Patil&description=Full-Stack%20Developer%20%E2%80%94%20AI%20Applications",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Vinay Reddy Patil",
    "Vinay Reddy",
    "vinayrp",
    "vinayrp.in",
    "full-stack developer",
    "AI applications",
  ],
  dateCreated: "2026-08-25", // YYYY-MM-DD
}
