import { SITE_INFO } from "@/config/site"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"

const body =
  EXPERIENCES.length > 0
    ? EXPERIENCES.map((item) =>
        item.positions
          .map((position) => {
            const skills =
              position.skills?.map((skill) => skill).join(", ") || "N/A"
            return `## ${position.title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}\n\nSkills: ${skills}\n\n${position.description?.trim()}`
          })
          .join("\n\n")
      ).join("\n\n")
    : // Vinay is pre-employment: point agents at his projects instead of
      // serving an empty section.
      `No roles listed yet — his work shows up as [projects](${SITE_INFO.url}/projects.md) instead.`

const content = `# Experience

${body}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
