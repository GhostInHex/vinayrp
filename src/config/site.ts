import type { Route } from "next"
import { decodeEmail } from "@/utils/string"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

// Single source of truth is the base64 value in the user data file; decoding
// it here keeps the two copies from drifting apart.
const USER_EMAIL = decodeEmail(USER.emailB64)

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://vinayrp.in",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

/**
 * The site is MIT licensed via the upstream fork; the URL credits the original
 * author's license file. This is intentional attribution (see TRADEMARK.md).
 */
export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/ncdai/chanhdai.com/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Writing",
    href: "/blog",
  },
  {
    title: "Contact",
    // mailto is not an app route, so it needs a cast to satisfy typedRoutes.
    href: `mailto:${USER_EMAIL}` as Route,
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [...MAIN_NAV]

export const X_HANDLE = SOCIAL.x.handle
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "GhostInHex/vinayrp.in"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/GhostInHex/vinayrp.in"

export const UTM_PARAMS = {
  utm_source: "vinayrp.in",
}
