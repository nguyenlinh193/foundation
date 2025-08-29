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
    title: "Typescript",
    display: "hidden", //hide the group index from navigation
  },
  "naming-elements": {
    title: "Naming Elements",
  },
  reactjs: {
    title: "ReactJS",
  },
  "react-native": {
    title: "React Native",
  },
}

export default meta
