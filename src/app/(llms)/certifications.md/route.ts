import { SITE_INFO } from "@/config/site"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"

const body =
  CERTIFICATIONS.length > 0
    ? CERTIFICATIONS.map(
        (item) =>
          `- [${item.title}](${new URL(item.credentialURL, SITE_INFO.url).toString()})\n  ${item.result} · ${item.project} · ${item.dateLabel}\n  ${item.issuer}\n  ${item.description}`
      ).join("\n")
    : "None earned yet."

const content = `# Certificates and results

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
