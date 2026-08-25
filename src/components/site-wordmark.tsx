const WORDMARK_TEXT = "vinayrp.in"

/**
 * Text-based wordmark rendered as SVG text so it stays crisp at any size.
 * Kept as a component plus a raw-string exporter for the copy-as-SVG action,
 * mirroring the mark's API.
 */
export function SiteWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 640 112"
      aria-hidden
      {...props}
    >
      <text
        x="320"
        y="88"
        fill="currentColor"
        fontFamily="Geist, system-ui, sans-serif"
        fontSize="96"
        fontWeight="600"
        letterSpacing="-4"
        textAnchor="middle"
      >
        {WORDMARK_TEXT}
      </text>
    </svg>
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 640 112"><text x="320" y="88" fill="currentColor" fontFamily="Geist, system-ui, sans-serif" fontSize="96" fontWeight="600" letterSpacing="-4" textAnchor="middle">${WORDMARK_TEXT}</text></svg>`
}
