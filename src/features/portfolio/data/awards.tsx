import { MedalIcon, NewspaperIcon, TrophyIcon } from "lucide-react"

import type { Award } from "../types/awards"

// Content seeded from vinay-resume-2.pdf.
// NOTE: the resume carries no dates for these achievements; dates below are
// best-guess placeholders — correct them once Vinay confirms.
export const AWARDS: Award[] = [
  {
    id: "chaicode-hackathon",
    prize: "8th place",
    title: "ChaiCode Hackathon — placed 8th nationwide with NovusMail",
    date: "2025-07", // TODO: verify actual date
    grade: "Nationwide",
    icon: <TrophyIcon />,
    description:
      "Placed 8th nationwide in the ChaiCode Hackathon with NovusMail.",
  },
  {
    id: "hackbuzz",
    prize: "4th place",
    title: "HackBuzz — placed 4th with Project Ghost",
    date: "2025-03", // TODO: verify actual date
    grade: "NCET Bengaluru",
    icon: <MedalIcon />,
    description:
      "Placed 4th in HackBuzz, conducted by NCET Bengaluru, with Project Ghost.",
  },
  {
    id: "writing-milestone",
    prize: "14+ articles",
    title: "Published 14+ technical articles on Hashnode",
    date: "2026-08", // Milestone reached at launch; keep current.
    grade: "Technical writing",
    icon: <NewspaperIcon />,
    description:
      "Published 14+ technical articles covering JavaScript, networking, browsers, and developer tools.",
    referenceLink: "https://vinayrp-dev.hashnode.dev",
  },
]
