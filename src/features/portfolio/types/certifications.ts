export type Certification = {
  id: string
  kind: "placement" | "participation"
  result: string
  project: string
  dateLabel: string
  description: string
  image: string
  imageAlt: string
  title: string
  issuer: string
  /**
   * Issuer logo to display (takes precedence over `issuerIconName`).
   * Provide an absolute URL or a path under /public.
   */
  issuerLogoURL?: string
  /**
   * Icon key for the issuer when no `issuerLogoURL` is provided.
   * Must match a supported icon name (e.g., "vercel", "coursera", "meta", "google", "microsoft", "accenture").
   */
  issuerIconName?: string
  /**
   * Known issue date as YYYY, YYYY-MM, or YYYY-MM-DD. Empty if unknown.
   * The gallery uses dateLabel to preserve the supplied date precision.
   */
  issueDate: string
  /**
   * Certificate or credential identifier; leave empty if not applicable.
   */
  credentialID: string
  /**
   * Public verification URL or link to the certificate document. Used as the anchor href.
   */
  credentialURL: string
}
