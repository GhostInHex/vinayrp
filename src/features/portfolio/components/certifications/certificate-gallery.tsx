"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRightIcon, ExpandIcon } from "lucide-react"

import { Tag } from "@/components/ui/tag"
import { Button } from "@/components/base/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/ui/dialog"
import { ToggleGroup, ToggleGroupItem } from "@/components/base/ui/toggle-group"
import type { Certification } from "@/features/portfolio/types/certifications"

export function CertificateGallery({
  certificates,
}: {
  certificates: Certification[]
}) {
  const [filter, setFilter] = useState("all")
  const visible = certificates.filter(
    (certificate) => filter === "all" || certificate.kind === filter
  )

  return (
    <>
      <div className="flex flex-col gap-3 border-b border-line p-4">
        <p className="text-sm text-muted-foreground">
          Hackathon placements, participation certificates, and the records
          behind them.
        </p>
        <ToggleGroup
          value={[filter]}
          onValueChange={(values) => {
            if (values.length > 0) setFilter(values[0])
          }}
          variant="outline"
          size="sm"
          aria-label="Filter certificates"
        >
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="placement">Top finishes</ToggleGroupItem>
          <ToggleGroupItem value="participation">Participation</ToggleGroupItem>
        </ToggleGroup>
        <p className="sr-only" role="status">
          {visible.length} records shown
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {visible.map((certificate) => (
          <article
            key={certificate.id}
            className="flex min-w-0 flex-col gap-3 border-b border-line p-4 sm:odd:border-r"
          >
            <Dialog>
              <DialogTrigger
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-lg border border-line bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label={`View ${certificate.title} record`}
              >
                <Image
                  src={certificate.image}
                  alt={certificate.imageAlt}
                  width={1200}
                  height={850}
                  sizes="(max-width: 639px) 100vw, 368px"
                  className="aspect-3/2 w-full object-contain p-2"
                />
                <span className="absolute right-2 bottom-2 rounded-md bg-background p-2 text-foreground">
                  <ExpandIcon className="size-4" aria-hidden />
                </span>
              </DialogTrigger>
              <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-4xl">
                <DialogHeader className="pr-8">
                  <DialogTitle>{certificate.title}</DialogTitle>
                  <DialogDescription>
                    {certificate.project} · {certificate.result} ·{" "}
                    {certificate.dateLabel}
                  </DialogDescription>
                </DialogHeader>
                <Image
                  src={certificate.image}
                  alt={certificate.imageAlt}
                  width={1600}
                  height={1100}
                  sizes="90vw"
                  className="h-auto max-h-[60dvh] w-full object-contain"
                />
                <p className="text-sm text-muted-foreground">
                  {certificate.description}
                </p>
                <Button
                  variant="outline"
                  render={
                    <a
                      href={certificate.credentialURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Open original <ArrowUpRightIcon data-icon="inline-end" />
                </Button>
              </DialogContent>
            </Dialog>
            <div className="flex flex-wrap items-center gap-2">
              <Tag>{certificate.result}</Tag>
              <span className="text-xs text-muted-foreground">
                {certificate.dateLabel}
              </span>
            </div>
            <h3 className="text-sm leading-snug font-medium">
              {certificate.title}
            </h3>
            <p className="text-sm">{certificate.project}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {certificate.description}
            </p>
            <p className="mt-auto text-xs text-muted-foreground">
              {certificate.issuer}
              {certificate.credentialID ? ` · ${certificate.credentialID}` : ""}
            </p>
          </article>
        ))}
      </div>
    </>
  )
}
