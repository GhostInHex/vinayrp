import { describe, expect, it } from "vitest"

import { getStack } from "@/lib/build-info"

import packageJson from "../../package.json"

describe("build-info stack", () => {
  it("pins versions that match package.json", () => {
    const declared: Record<string, string | undefined> = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    }

    for (const entry of getStack()) {
      const [name, version] = entry.split("@").slice(-2)
      // Mirrors build-info's own range-stripping (`^4.3.3` -> `4.3.3`).
      const bareVersion = declared[name]?.replace(/^[^\d]*/, "")
      expect(bareVersion).toBe(version)
    }
  })
})
