import Image from "next/image"
import { ArrowUpRightIcon, BoxIcon, CodeXmlIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import { Markdown } from "@/components/markdown"

import type { Project } from "../../types/projects"
import { ProjectTour } from "./project-tour"

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const hasDemo = project.link !== project.sourceUrl

  return (
    <Collapsible
      className={cn("group/project", className)}
      defaultOpen={project.isExpanded}
    >
      <div className="flex items-start">
        {project.logo ? (
          <Image
            src={project.logo}
            alt=""
            width={32}
            height={32}
            className="mx-4 mt-5 size-6 shrink-0"
          />
        ) : (
          <IconTile className="mx-4 mt-5">
            {project.icon ?? <BoxIcon />}
          </IconTile>
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-3 border-l border-dashed border-line p-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-medium">{project.title}</h3>
            {project.recognition && (
              <span className="text-xs text-muted-foreground">
                {project.recognition}
              </span>
            )}
            {project.status && <Tag>{project.status}</Tag>}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <ul
            className="flex flex-wrap gap-1.5"
            aria-label={`${project.title} technologies`}
          >
            {project.skills.map((skill) => (
              <li key={skill} className="flex">
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {hasDemo && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
                aria-label={`Try ${project.title} live demo`}
              >
                Live demo <ArrowUpRightIcon className="size-3.5" aria-hidden />
              </a>
            )}
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
              aria-label={`View ${project.title} source code`}
            >
              <CodeXmlIcon className="size-3.5" aria-hidden /> Source code
            </a>
            <CollapsibleTrigger className="ml-auto inline-flex min-h-10 items-center gap-1.5 text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring">
              <span className="group-data-open/project:hidden">Expand</span>
              <span className="group-data-closed/project:hidden">Collapse</span>
              <span className="sr-only">
                {" "}
                {project.title} implementation details
              </span>
              <CollapsibleChevronsUpDownIcon
                duration={0.15}
                className="size-4"
              />
            </CollapsibleTrigger>
          </div>
        </div>
      </div>
      <CollapsibleContent className="collapsible-panel">
        <div className="flex flex-col gap-4 border-t border-line p-4">
          {project.tour && project.tour.length > 0 && (
            <ProjectTour title={project.title} slides={project.tour} />
          )}
          <div className="typeset typeset-description">
            <Markdown>{project.description ?? ""}</Markdown>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
