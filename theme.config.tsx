import { useConfig } from "nextra-theme-docs"
/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  logo: <span>Foundation</span>,
  project: {
    link: "https://github.com/digitalfortress-dev/foundation",
  },
  docsRepositoryBase: "https://github.com/digitalfortress-dev/foundation",
  editLink: {
    text: "Edit this page on GitHub",
  },
  footer: {
    text: "Digital Fortress Foundation",
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        { content: "DF Foundation", name: "apple-mobile-web-app-title" },
        { content: "#fff", name: "msapplication-TileColor" },
        { content: "/ms-icon-144x144.png", name: "msapplication-TileImage" },
      ],
      description:
        frontMatter.description || "Digital Fortress: The Foundation",
      titleTemplate: "%s – Digital Fortress Foundation",
      twitter: {
        cardType: "summary_large_image",
        site: "https://foundation.digitalfortress.dev",
      },
    }
  },
}
