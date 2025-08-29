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
    title: "Developer Checklist",
    display: "hidden", //hide the group index from navigation
  },
  frontend: {
    title: "Front-End",
  },
  backend: {
    title: "Back-End",
  },
  //   "api-testing": {
  //     title: "API Testing",
  //   },
  //   "automated-testing": {
  //     title: "Automated Testing",
  //   },
}

export default meta
