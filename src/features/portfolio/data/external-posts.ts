import type { ExternalPost } from "../types/external-posts"

/**
 * External Posts — Vinay's published articles on Hashnode, linked out rather
 * than hosted here. The MDX blog machinery stays intact for the phase 2
 * self-hosted migration; until then this list is the Writing surface.
 *
 * Curated from vinayrp-dev.hashnode.dev (all 14 posts as of launch).
 */
export const HASHNODE_URL = "https://vinayrp-dev.hashnode.dev"

export const EXTERNAL_POSTS: ExternalPost[] = [
  {
    id: "javascript-promises-explained",
    title: "JavaScript Promises Explained: The Desi Way (all, allSettled, any)",
    url: `${HASHNODE_URL}/javascript-promises-explained`,
    createdAt: "2026-03-01",
  },
  {
    id: "mastering-css-selectors-how-to-target-elements-accurately",
    title: "Mastering CSS Selectors: How to Target Elements Accurately",
    url: `${HASHNODE_URL}/mastering-css-selectors-how-to-target-elements-accurately`,
    createdAt: "2026-01-28",
  },
  {
    id: "boost-html-speed-with-emmet",
    title: "Writing HTML Faster: Discover the Power of Emmet",
    url: `${HASHNODE_URL}/boost-html-speed-with-emmet`,
    createdAt: "2026-01-28",
  },
  {
    id: "html-the-skeleton-of-the-web",
    title: "HTML: The Skeleton of the Web",
    url: `${HASHNODE_URL}/html-the-skeleton-of-the-web`,
    createdAt: "2026-01-28",
  },
  {
    id: "how-a-browser-works",
    title: "How a Browser Works: From Code to Pixels",
    url: `${HASHNODE_URL}/how-a-browser-works`,
    createdAt: "2026-01-28",
  },
  {
    id: "tcp-3-way-handshake",
    title: "TCP Deep Dive: The 3-Way Handshake & The Art of Reliability",
    url: `${HASHNODE_URL}/tcp-3-way-handshake`,
    description: `How computers say "Hello" before they start talking.`,
    createdAt: "2026-01-26",
  },
  {
    id: "talking-to-servers-getting-started-with-curl",
    title: "Talking to Servers: Getting Started with cURL",
    url: `${HASHNODE_URL}/talking-to-servers-getting-started-with-curl`,
    description: "The Developer's Swiss Army Knife",
    createdAt: "2026-01-26",
  },
  {
    id: "how-dns-resolution-works-a-deep-dive-with-dig",
    title: "How DNS Resolution Works: A Deep Dive with dig",
    url: `${HASHNODE_URL}/how-dns-resolution-works-a-deep-dive-with-dig`,
    description: "Peeling Back the Layers of the Internet",
    createdAt: "2026-01-26",
  },
  {
    id: "the-internets-phonebook-dns-records-explained",
    title: "The Internet's Phonebook: DNS Records Explained",
    url: `${HASHNODE_URL}/the-internets-phonebook-dns-records-explained`,
    description: "From A Records to MX — How Browsers Find Websites",
    createdAt: "2026-01-26",
  },
  {
    id: "understanding-network-devices",
    title: "Understanding Network Devices for Developers",
    url: `${HASHNODE_URL}/understanding-network-devices`,
    createdAt: "2026-01-24",
  },
  {
    id: "tcp-vs-udp",
    title: "TCP vs UDP: The Registered Post vs. Live Cricket Streaming",
    url: `${HASHNODE_URL}/tcp-vs-udp`,
    description: "And where HTTP fits into the picture",
    createdAt: "2026-01-22",
  },
  {
    id: "why-version-control-exists-the-pendrive-problem",
    title: `Why Version Control Exists: The "Pendrive Problem"`,
    url: `${HASHNODE_URL}/why-version-control-exists-the-pendrive-problem`,
    createdAt: "2026-01-15",
  },
  {
    id: "de-mystifying-git-a-deep-dive-into-the-git-folder-and-its-secrets",
    title:
      "De-mystifying Git: A Deep Dive into the .git Folder and Its Secrets",
    url: `${HASHNODE_URL}/de-mystifying-git-a-deep-dive-into-the-git-folder-and-its-secrets`,
    createdAt: "2026-01-15",
  },
  {
    id: "git-the-save-button-you-wish-you-had",
    title: "Git: The Save Button You Wish You Had",
    url: `${HASHNODE_URL}/git-the-save-button-you-wish-you-had`,
    createdAt: "2026-01-10",
  },
]
