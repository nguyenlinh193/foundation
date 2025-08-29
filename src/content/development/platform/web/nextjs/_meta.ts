import type { MetaRecord } from "nextra"

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  index: {
    title: "NextJS Development",
    display: "hidden", //hide the group index from navigation
  },

  localization: {
    title: "Localization",
  },
  "project-configuration": {
    title: "Project Configuration",
  },
}

export default meta
