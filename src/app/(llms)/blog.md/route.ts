import { buildBlogMarkdown } from "@/lib/llms-content"

const content = buildBlogMarkdown()

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
