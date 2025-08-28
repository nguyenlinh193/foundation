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
    display: "hidden", //hide the group index from navigation
  },
  page1: {
    title: "Page 1 (Example)",
  },
  page2: {
    title: "Page 2 (Example)",
  },
}

export default meta
