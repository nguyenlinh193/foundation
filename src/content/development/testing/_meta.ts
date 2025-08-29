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
    title: "Testing",
    display: "hidden", //hide the group index from navigation
  },
  "api-testing": {
    title: "API Testing",
  },
  "automated-testing": {
    title: "Automated Testing",
  },
}

export default meta
