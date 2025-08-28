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
    title: "Development Processes",
    display: "hidden", //hide the group index from navigation
  },
  "pull-request": {
    title: "Pull Request",
  },
  redmine: {
    title: "Redmine",
  },
  // web: {
  //   title: "Web",
  // },
}

export default meta
