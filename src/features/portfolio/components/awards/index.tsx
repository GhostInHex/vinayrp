import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { AWARDS } from "@/features/portfolio/data/awards"

import { AwardItem } from "./award-item"

const SORTED_AWARDS = [...AWARDS].sort((a, b) => {
  return (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0)
})

const ID = "achievements"

export function Awards() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Achievements</a>
          <PanelTitleSup>({AWARDS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_AWARDS}
        max={6}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <AwardItem award={item} />}
      />
    </Panel>
  )
}
