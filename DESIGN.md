---
name: Vinay Reddy Patil portfolio
description: Observed portfolio theme, including projects and certificate records.
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.141 0.005 285.823)"
  primary: "oklch(0.141 0.005 285.823)"
  primary-foreground: "oklch(0.985 0 0)"
  muted: "oklch(0.967 0.001 286.375)"
  muted-foreground: "oklch(0.552 0.016 285.938)"
  border: "oklch(0.92 0.004 286.32)"
  line: "color-mix(in oklab, var(--border) 64%, var(--background))"
  ring: "oklch(0.705 0.015 286.067)"
  tag-background: "oklch(0.985 0 0)"
  dark-background: "oklch(0.141 0.005 285.823)"
  dark-foreground: "oklch(0.985 0 0)"
  dark-muted: "oklch(0.274 0.006 286.033)"
  dark-muted-foreground: "oklch(0.705 0.015 286.067)"
  dark-border: "oklch(0.274 0.006 286.033)"
  dark-ring: "oklch(0.552 0.016 285.938)"
  dark-tag-background: "oklch(0.21 0.006 285.885)"
typography:
  headline:
    fontFamily: "Geist Sans, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: "2.25rem"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: "1.5rem"
  body:
    fontFamily: "Geist Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1rem"
rounded:
  md: "0.375rem"
  lg: "0.5rem"
  2xl: "1rem"
  full: "9999px"
spacing:
  1.5: "0.375rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  6: "1.5rem"
  8: "2rem"
components:
  button-outline:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.lg}"
    height: "2.25rem"
    padding: "0 0.625rem"
  button-ghost:
    rounded: "{rounded.lg}"
    size: "2rem"
  tag:
    backgroundColor: "{colors.tag-background}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.125rem 0.375rem"
  certificate-preview:
    backgroundColor: "{colors.muted}"
    rounded: "{rounded.lg}"
  certificate-dialog:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.2xl}"
    padding: "1.5rem"
---

# Design System: Vinay Reddy Patil portfolio

## Overview

The shipped portfolio uses a monochrome light/dark interface in a centered column. Thin panel rules and compact typography organize the content. Project icons, compact product tours of real screenshots, and certificate images supply the visual detail.

This scan records the existing implementation after the product-tour, default expansion, and merged Certificates & results correction. All five projects now use captioned product tours built from 19 real screenshots. It introduces no new visual direction. Authority is the shipped source and the final tour screenshots in `.impeccable/review/product-tour-final-*.png`.

## Colors

Primary actions use the foreground/background pair. Neutral muted surfaces, subdued metadata, and fine lines establish hierarchy. Project screenshots and certificate artwork retain their original colors.

The frontmatter records light values and observed dark counterparts. Runtime theme variables in `src/styles/globals.css` remain authoritative. Dark mode swaps primary and primary-foreground, uses dark-muted for secondary surfaces, and preserves the line color-mix expression against the active background and border. Dark outline buttons use the translucent input token, `lab(100% 0 0 / 0.15)`, at 30% opacity and 50% on hover.

## Typography

Geist Sans is the body and heading family; Geist Mono is used for tags. IBM Plex Serif and Caveat are also registered in `src/lib/fonts.ts`, but the projects and certificate gallery use the Geist families.

Panel headings use the headline role with balanced wrapping. Project titles use the title role. Certificate titles use medium-weight small text with snug leading. Summaries and descriptions use small muted text with relaxed leading. Dates and recognition labels use small sans-serif text; tags use the mono label role. Expanded project descriptions use the existing typeset treatment at 15px with 1.6 leading. Tour captions pair a small medium title with an extra-small muted description.

## Layout

The home column is centered and capped at 48rem from the medium breakpoint, 768px. Panels have vertical side borders and horizontal rules that extend across the viewport. Section separators are 32px tall with diagonal stripes. Panel headings have 16px horizontal padding; panel bodies and record cells use 16px padding.

Project rows reserve a left icon rail and separate the content with a dashed vertical line. Content stacks with 12px gaps. Tags wrap with 6px gaps. Links and Expand/Collapse controls wrap independently and retain a minimum 40px height.

Each product tour is a centered horizontal Embla track capped at 512px, with swipe, arrow controls, and a thin progress bar. One screenshot fills this compact rail at every breakpoint, with its complete caption directly below it. Previous and next controls sit at the left and right edges of the image, centered vertically, with 44px touch targets. The enlarged viewer leaves 16px around the viewport, fits the original image into the available space, and supports zoom up to eight times the fitted size. The image area scrolls horizontally and vertically when zoomed; the caption, zoom controls, and close action remain visible.

The gallery has one column below 640px and two columns from 640px. Each cell has a bottom border; odd cells gain a right border in the two-column layout. Certificate previews use a 3:2 frame with 8px image padding and contain the entire image.

The certificate dialog leaves 16px on each side on mobile, reaches a maximum width of 56rem from 640px, and scrolls within 90dvh. Its image is contained within 60dvh.

## Elevation & Depth

Panels and gallery cells are flat and separated by lines. Joined outline filters have the existing extra-small shadow. The dialog uses the existing large shadow and a thin foreground ring over a black backdrop at 20% opacity in light mode and 40% in dark mode. Preview expand icons sit on opaque background-colored surfaces.

## Shapes

Section panels and gallery cells have square edges. Tags are fully rounded. Tour frames, preview frames, and buttons use the large radius; joined filters keep only their outer medium-radius corners. Dialogs use the 2xl radius. Borders are generally 1px.

## Components

- Projects appear in this order: NovusMail, ReadEasy, Project Ghost, ImpactTrace, deadmon. Each shows its summary, technology tags, source link, and live-demo link where distinct from source; ImpactTrace and deadmon now use their user-provided live URLs. NovusMail and ReadEasy details are expanded by default; the other three remain compact until Expand. The shared list reveals overflow only when more than five projects exist.
- Expanded details begin below a top rule with the project's product tour, followed by implementation text. All five tours are compact and captioned and draw on 19 real screenshots. Controls display Expand or Collapse. Their accessible names combine the visible label with screen-reader-only project context and "implementation details".
- Tours scroll horizontally through Embla with drag, swipe, and previous/next arrow buttons. A thin Motion progress bar advances at 250ms ease-out; a native media-query store makes reduced motion reactive and swaps it for a static bar while setting Embla's scroll duration to zero. The mobile-only "Swipe to explore" hint, disabled arrow states, and a status region reporting the visible range accompany the track.
- Each screenshot trigger enlarges its slide in a nearly full-screen dialog with the same title and description. Zoom in, Zoom out, and Fit to screen controls use the original image pixels; the zoomed image can be scrolled on desktop and mobile. deadmon's tall captures retain the intentional 1.9:1 CSS crop in both views, with an optional `cropPosition` of top or bottom.
- The current collapsible utility transitions height and opacity over 200ms with `cubic-bezier(0.23, 1, 0.32, 1)`. Reduced motion retains only the opacity transition. The shared list chevron disables its rotation transition under reduced motion.
- Tags use a thin border, muted mono text, and a pale zinc surface that becomes zinc-900 in dark mode.
- Certificates & results at `#certs` is the single home section for certificates and awards. Command-menu searches for awards or achievements resolve to this entry.
- Certificate filters are joined small outline toggles labeled All, Top finishes, and Participation. The selected filter uses the muted surface. Selection retains at least one value; record counts are announced through a status region.
- Certificate cells show the image, result tag, date, title, project, description, and issuer. The issuer sits at the bottom of the cell. Image triggers open a dialog with a Close control and an Open original outline link.
- Buttons use medium-weight small text, visible focus rings, and a 0.98 pressed scale. Dialog entry and exit use the existing 100ms fade and 95% zoom. Direct project links underline on hover; Expand/Collapse changes from muted to foreground. Existing Lucide icons accompany actions.

## Do's and Don'ts

- Do reuse the existing panel rules, Geist typography, neutral theme variables, tags, and action icons.
- Do preserve project screenshots' original pixels and aspect in tour frames, allowing only the intentional CSS crop for tall captures, and keep complete certificate images with contain sizing and direct source or credential links.
- Don't introduce a new accent palette or redesign the incumbent portfolio theme for these sections.
- Don't turn the gallery cells into floating cards or replace the existing project summary and Expand/Collapse structure.
