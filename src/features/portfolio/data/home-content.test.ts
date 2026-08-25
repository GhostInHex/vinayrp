import { describe, expect, it } from "vitest"

import { AWARDS } from "@/features/portfolio/data/awards"
import { PROJECTS } from "@/features/portfolio/data/projects"

describe("home page content", () => {
  it("leads with NovusMail, then Project Ghost", () => {
    expect(PROJECTS.map((project) => project.id)).toEqual([
      "novusmail",
      "project-ghost",
    ])
  })

  it("exposes live demo and source links for both flagship projects", () => {
    const [novusmail, ghost] = PROJECTS

    expect(novusmail.link).toBe("https://novus.vinayrp.in/")
    expect(ghost.link).toBe("https://new-project-dun-tau.vercel.app/")
    for (const project of PROJECTS) {
      expect(project.description).toContain("](https://")
      expect(project.description).toContain("Source Code](")
    }
  })

  it("carries resume-sourced descriptions and skills", () => {
    const [novusmail, ghost] = PROJECTS

    expect(novusmail.description).toContain("Gmail")
    expect(novusmail.skills).toContain("Drizzle ORM")
    expect(ghost.description).toContain("Accountability")
    expect(ghost.skills).toContain("Google Gemini API")
  })

  it("shows the hackathon placements and writing milestone", () => {
    expect(AWARDS.map((award) => award.id)).toEqual([
      "chaicode-hackathon",
      "hackbuzz",
      "writing-milestone",
    ])

    const [chaicode, hackbuzz, writing] = AWARDS
    expect(chaicode.prize).toBe("8th place")
    expect(chaicode.title).toContain("ChaiCode Hackathon")
    expect(hackbuzz.prize).toBe("4th place")
    expect(hackbuzz.title).toContain("HackBuzz")
    expect(writing.prize).toBe("14+ articles")
    expect(writing.referenceLink).toBe("https://vinayrp-dev.hashnode.dev")
  })
})
