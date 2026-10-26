import { MedalIcon, NewspaperIcon, TrophyIcon } from "lucide-react"

import type { Award } from "../types/awards"

// Resume content supplemented by the supplied certificates showcase.
export const AWARDS: Award[] = [
  {
    id: "buildverse",
    prize: "3rd prize",
    title: "BUILDVERSE Hackathon — ReadEasy",
    date: "2026-09-06",
    grade: "120 teams",
    icon: <TrophyIcon />,
    description:
      "ReadEasy won third prize out of 120 teams at BUILDVERSE, organized by ACM Dallas and IEEE Dallas PES/IAS/PELS. Remote entry at UT Dallas; $50 prize.",
    referenceLink: "/certificates/buildverse.png",
  },
  {
    id: "chaicode-hackathon",
    prize: "8th place",
    title: "ChaiCode Hackathon — placed 8th nationwide with NovusMail",
    date: "", // Date not supplied; do not display a guessed date.
    grade: "Nationwide",
    icon: <TrophyIcon />,
    description:
      "NovusMail placed 8th overall with 84/100 in the Command Inbox: Corsair Hackathon. No certificate was issued; the official results screenshot is attached.",
    referenceLink: "/certificates/chaicode-results.jpg",
  },
  {
    id: "hackbuzz",
    prize: "4th place",
    title: "HackBuzz — placed 4th with Project Ghost",
    date: "2026-05",
    grade: "NCET Bengaluru",
    icon: <MedalIcon />,
    description:
      "Project Ghost placed 4th at HackBuzz during IKYA 2026, May 7–8 at NCET Bengaluru. The attached participation certificate records attendance at the event.",
    referenceLink: "/certificates/ikya.jpg",
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
