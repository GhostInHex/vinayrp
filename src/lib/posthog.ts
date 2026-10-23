import { posthog } from "posthog-js"
import type { PostHog } from "posthog-js"

let client: PostHog | null = null

export function getPostHog(): PostHog | null {
  if (typeof window === "undefined") {
    return null
  }

  if (client) {
    return client
  }

  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!apiKey) {
    return null
  }

  posthog.init(apiKey, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
  })
  client = posthog

  return client
}

export function capturePageview() {
  getPostHog()?.capture("$pageview")
}
