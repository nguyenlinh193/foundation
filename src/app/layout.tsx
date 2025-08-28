import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Banner, Head } from "nextra/components"
import { Footer, Layout, Navbar } from "nextra-theme-docs"
import { getPageMap } from "nextra/page-map"
import "nextra-theme-docs/style.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: {
    template: "%s - DF Docs",
  },
  description: "DF Docs: the DF Docs site builder",
  applicationName: "DF Docs",
  generator: "Next.js",
  appleWebApp: {
    title: "DF Docs",
  },
}

const navbar = (
  <Navbar
    logo={
      <div>
        <b>DF Docs</b>
        <span style={{ opacity: "60%", marginLeft: "10px" }}>
          The DF Docs Builder
        </span>
      </div>
    }
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
