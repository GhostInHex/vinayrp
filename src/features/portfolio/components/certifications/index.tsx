import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"

import { CertificationItem } from "./certification-item"

const ID = "certs"

/**
 * Hidden entirely while `CERTIFICATIONS` is empty so the page shows no bare
 * "(0)" panel; seeding the data file brings the section back (one-file edit).
 */
export function Certifications() {
  if (CERTIFICATIONS.length === 0) {
    return null
  }

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Certifications</a>
          <PanelTitleSup>({CERTIFICATIONS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        max={6}
        renderItem={(item) => <CertificationItem certification={item} />}
      />
    </Panel>
  )
}
