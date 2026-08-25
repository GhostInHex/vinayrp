import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"

// The stack section only renders while there is something in it, matching
// the home page's hide-when-empty behavior.
const techStackSection =
  TECH_STACK.length > 0
    ? `\n## Tech Stack\n\n${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}\n`
    : ""

const content = `# About

${USER.about.trim()}

## Personal Information

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Display Name: ${USER.displayName}
- Location: ${USER.address}
- Website: ${USER.website}

## Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}
${techStackSection}`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
