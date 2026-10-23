import { capturePageview } from "@/lib/posthog"

if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  capturePageview()
}
