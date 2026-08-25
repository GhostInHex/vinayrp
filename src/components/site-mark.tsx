export function SiteMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 256"
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d={MARK_PATH} />
    </svg>
  )
}

/**
 * Single source of truth for the monogram geometry, shared by the live
 * component, the copy-as-SVG action, and the generated icon assets.
 */
export const MARK_PATH = "M40 32H108L128 96L148 32H216L156 224H100L40 32Z"

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><path fill="currentColor" d="${MARK_PATH}"/></svg>`
}
