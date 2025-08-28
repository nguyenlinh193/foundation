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
    title: "Web Development",
    display: "hidden", //hide the group index from navigation
  },
  nextjs: {
    title: "NextJS",
  },
  reactjs: {
    title: "ReactJS",
  },
}

export default meta
