import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"

import { CertificateGallery } from "./certificate-gallery"

const ID = "certs"

export function Certifications() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Certificates & results</a>
          <PanelTitleSup>({CERTIFICATIONS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CertificateGallery certificates={CERTIFICATIONS} />
    </Panel>
  )
}
