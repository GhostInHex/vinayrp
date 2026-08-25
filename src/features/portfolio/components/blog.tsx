import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/base/ui/button"
import { ExternalPostItem } from "@/features/blog/components/external-post-item"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EXTERNAL_POSTS } from "@/features/portfolio/data/external-posts"

// Anchor id stays "blog" (the route is /blog); the label follows CONTEXT.md's
// "Writing" vocabulary.
const ID = "blog"

export function Blog() {
  // External Posts — links out to Hashnode; self-hosted MDX posts arrive in
  // phase 2 (see .scratch/portfolio-conversion/issues/05).
  const posts = EXTERNAL_POSTS.slice(0, 6)

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Writing</a>
          <PanelTitleSup>({EXTERNAL_POSTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line"></div>
          <div className="border-l border-line"></div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <li
              key={post.id}
              className={cn(
                "max-sm:screen-line-top max-sm:screen-line-bottom",
                "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
              )}
            >
              <ExternalPostItem post={post} headingAs="h3" />
            </li>
          ))}
        </ul>
      </div>

      <div className="screen-line-top flex justify-center py-4">
        <Button
          className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={<Link href="/blog" />}
        >
          All posts
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
