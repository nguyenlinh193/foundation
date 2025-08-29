import { generateStaticParamsFor, importPage } from "nextra/pages"
import { useMDXComponents as getMDXComponents } from "../../../mdx-components"
import type { Metadata } from "next"

// Tell Next.js how to statically generate params for MDX pages
export const generateStaticParams = generateStaticParamsFor("mdxPath")

// Define expected shape of params
interface PageParams {
  mdxPath: string[]
}

// Define props passed into `generateMetadata` and the Page
interface PageProps {
  params: Promise<PageParams>
}

// Generate metadata from the MDX page
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { mdxPath } = await props.params

  if (!mdxPath) {
  }

  const { metadata } = await importPage(mdxPath)
  return metadata as Metadata
}

const Wrapper = getMDXComponents({} as any).wrapper

export default async function Page({ params }: PageProps) {
  const { mdxPath } = await params

  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(mdxPath)

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent params={params} />
    </Wrapper>
  )
}
