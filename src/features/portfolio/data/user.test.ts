import { decodeEmail } from "@/utils/string"
import { describe, expect, it } from "vitest"

import { SITE_INFO } from "@/config/site"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

describe("identity data", () => {
  it("decodes to Vinay's protected email", () => {
    expect(decodeEmail(USER.emailB64)).toBe("vinayrpdev@gmail.com")
  })

  it("defaults the site URL to vinayrp.in", () => {
    expect(SITE_INFO.url).toBe("https://vinayrp.in")
    expect(USER.website).toBe("https://vinayrp.in")
  })

  it("carries Vinay's identity end-to-end", () => {
    expect(USER.displayName).toBe("Vinay Reddy Patil")
    expect(USER.jobTitle).toBe("Full-Stack Developer — AI Applications")
    expect(USER.address).toContain("Bengaluru")
  })

  it("exposes only Vinay's three social profiles", () => {
    expect(Object.keys(SOCIAL)).toEqual(["x", "github", "linkedin"])
    expect(SOCIAL.x.href).toBe("https://x.com/vinayrp_dev")
    expect(SOCIAL.github.href).toBe("https://github.com/GhostInHex")
    expect(SOCIAL.linkedin.href).toBe("https://linkedin.com/in/vinay-263b933a6")
  })
})
