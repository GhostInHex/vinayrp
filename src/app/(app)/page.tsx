import { Suspense } from "react"
import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl, cn } from "@/lib/utils"
import { Awards } from "@/features/portfolio/components/awards"
import { Blog } from "@/features/portfolio/components/blog"
import { Bookmarks } from "@/features/portfolio/components/bookmarks"
import { Certifications } from "@/features/portfolio/components/certifications"
import { Education } from "@/features/portfolio/components/education"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Hello } from "@/features/portfolio/components/hello"
import {
  Insights,
  InsightsSkeleton,
} from "@/features/portfolio/components/insights"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { BOOKMARKS } from "@/features/portfolio/data/bookmarks"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"
import { EDUCATION } from "@/features/portfolio/data/education"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={getProfilePageJsonLd()} />

      <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
        <div className="mx-auto md:max-w-3xl">
          <ProfileHeader />
          <Separator />

          <Overview />
          <SocialLinks />
          <GitHubContributions />
          <Separator />

          <Hello />
          <Separator />

          <Projects />
          <Separator />

          <Awards />
          <Separator />

          <Blog />
          {/* Optional panels render only while their data files have content.
              Each brings its own leading separator, and the unconditional one
              below closes the run before Insights — so exactly one divider
              sits between any two sections whether zero, some, or all of
              these are seeded. Seeding a data file is the one-file edit that
              brings a panel back. */}
          {TECH_STACK.length > 0 && (
            <>
              <Separator />
              <TechStack />
            </>
          )}
          {EDUCATION.length > 0 && (
            <>
              <Separator />
              <Education />
            </>
          )}
          {CERTIFICATIONS.length > 0 && (
            <>
              <Separator />
              <Certifications />
            </>
          )}
          {BOOKMARKS.length > 0 && (
            <>
              <Separator />
              <Bookmarks />
            </>
          )}

          <Separator />

          <Suspense fallback={<InsightsSkeleton />}>
            <Insights />
          </Suspense>
        </div>
      </div>
    </>
  )
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/"),
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    // Reference the Person defined in the WebSite node (rendered globally in
    // the root layout) so both blocks resolve to the same entity.
    mainEntity: { "@id": JSON_LD_ID.person },
  }
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-(--separator-height) w-full border-x border-line",
        className
      )}
    >
      {/* <div
        className="absolute -top-1.25 -left-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      />
      <div
        className="absolute -top-1.25 -right-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      /> */}
    </div>
  )
}
