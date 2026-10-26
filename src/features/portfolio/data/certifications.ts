import type { Certification } from "../types/certifications"

// Transcribed from certificates-showcase/index.html and its supplied images.
// Preserve the precision of known dates; an empty date means not supplied.
export const CERTIFICATIONS: Certification[] = [
  {
    id: "buildverse",
    title: "BUILDVERSE Hackathon",
    issuer: "ACM Dallas and IEEE Dallas PES/IAS/PELS",
    kind: "placement",
    result: "3rd prize · 120 teams",
    project: "ReadEasy",
    issueDate: "2026-09-06",
    dateLabel: "September 6, 2026",
    credentialID: "BH-2026-006",
    credentialURL: "/certificates/buildverse.png",
    image: "/certificates/buildverse.png",
    imageAlt:
      "BUILDVERSE third prize certificate for ReadEasy by Vinay Reddy Patil",
    description:
      "Third prize out of 120 teams at the Build From Anywhere, Bring it to Stage hackathon. Remote entry at UT Dallas, with a $50 prize.",
  },
  {
    id: "hackbuzz",
    title: "IKYA 2026 · HackBuzz",
    issuer: "Nagarjuna College of Engineering and Technology, Bengaluru",
    kind: "placement",
    result: "4th place",
    project: "Project Ghost",
    issueDate: "2026-05",
    dateLabel: "May 7–8, 2026",
    credentialID: "",
    credentialURL: "/certificates/ikya.jpg",
    image: "/certificates/ikya.jpg",
    imageAlt:
      "IKYA 2026 HackBuzz participation certificate for Vinay Reddy Patil",
    description:
      "Project Ghost placed 4th at HackBuzz. The event issued a participation certificate, shown here as the attendance record.",
  },
  {
    id: "chaicode",
    title: "Command Inbox: Corsair Hackathon",
    issuer: "ChaiCode",
    kind: "placement",
    result: "8th place · 84/100",
    project: "NovusMail",
    issueDate: "",
    dateLabel: "Official results",
    credentialID: "",
    credentialURL: "/certificates/chaicode-results.jpg",
    image: "/certificates/chaicode-results.jpg",
    imageAlt:
      "Official Corsair Hackathon results showing NovusMail in 8th place with 84 out of 100",
    description:
      "NovusMail finished 8th overall with 84/100. No certificate was issued; the official results screenshot is the record.",
  },
  {
    id: "ml-empowerment",
    title: "ML Empowerment Build Challenge 3.0",
    issuer: "ML Empowerment Foundation",
    kind: "participation",
    result: "Participation",
    project: "ReadEasy",
    issueDate: "2026-10",
    dateLabel: "October 2026",
    credentialID: "",
    credentialURL: "/certificates/ml-empowerment.png",
    image: "/certificates/ml-empowerment.png",
    imageAlt:
      "ML Empowerment Build Challenge 3.0 participation certificate for Vinay Reddy Patil and ReadEasy",
    description:
      "Entered the third edition of the build challenge with ReadEasy.",
  },
  {
    id: "csc",
    title: "CSC Back-to-School Hackathon",
    issuer: "Computer Science For Change",
    kind: "participation",
    result: "Participation",
    project: "ReadEasy: College Applications Made Readable",
    issueDate: "2026-10",
    dateLabel: "October 2026",
    credentialID: "",
    credentialURL: "/certificates/csc.png",
    image: "/certificates/csc.png",
    imageAlt:
      "CSC Back-to-School Hackathon participation certificate for ReadEasy, College Applications Made Readable",
    description:
      "Entered with a ReadEasy variant that makes college application material readable for students.",
  },
  {
    id: "quantique",
    title: "Quantique: Quantum Hackathon",
    issuer: "RGUKT, Nuzvid",
    kind: "participation",
    result: "Participation",
    project: "Team Revenant",
    issueDate: "2026",
    dateLabel: "2026",
    credentialID: "",
    credentialURL: "/certificates/quantique.png",
    image: "/certificates/quantique.png",
    imageAlt:
      "Quantique Quantum Hackathon participation certificate for Vinay Reddy Patil, Team Revenant",
    description:
      "Participated as Team Revenant in the quantum computing hackathon organized by RGUKT, Nuzvid.",
  },
]
