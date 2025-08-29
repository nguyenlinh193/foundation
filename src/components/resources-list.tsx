"use client"

import { Cards } from "nextra/components"
import { useConfig } from "nextra-theme-docs"

export function ResourcesList() {
  const { normalizePagesResult } = useConfig()
  const childrenDocs = normalizePagesResult.activePath[0]?.children

  const keys = normalizePagesResult.activeMetadata?.filePath?.split("/")

  const groupName = keys[keys.length - 2]

  const groupData = normalizePagesResult.activePath.find(
    (group) => group.name === groupName
  )

  if (!groupData?.children?.length) return <></>

  return (
    <Cards>
      {groupData?.children.map((page) => (
        <Cards.Card
          key={page.route}
          title={page.title as string}
          href={page.route}
          arrow
        />
      ))}
    </Cards>
  )
}
