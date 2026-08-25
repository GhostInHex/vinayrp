import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EDUCATION } from "@/features/portfolio/data/education"
import type { Education } from "@/features/portfolio/types/education"

import { EducationItem } from "./education-item"

const ID = "education"

/**
 * Hidden entirely while `EDUCATION` is empty so the page shows no bare panel
 * header; seeding the data file brings the section back (one-file edit).
 */
export function Education() {
  if (EDUCATION.length === 0) {
    return null
  }

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      {EDUCATION.map((item) => (
        <div
          key={item.id}
          id={`education-${item.id}`}
          className="screen-line-bottom scroll-mt-14 p-4 pr-2"
        >
          <EducationItem key={item.id} item={item} />
        </div>
      ))}
    </Panel>
  )
}
