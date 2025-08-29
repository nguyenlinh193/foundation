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
    title: "Coding Conventions",
    display: "hidden", //hide the group index from navigation
  },
  "code-comments": {
    title: "Code Comments",
  },
  python: {
    title: "Python",
  },
  terraform: {
    title: "Terraform",
  },
}

export default meta
