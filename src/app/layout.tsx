import { Geist, Geist_Mono } from "next/font/google"
import Image from "next/image"
import { Footer, Layout, Navbar } from "nextra-theme-docs"
import { getPageMap } from "nextra/page-map"
import "../styles/globals.css"

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
    template: "%s - DF Foundation",
  },
  description: "DF Foundation: the DF Foundation site builder",
  applicationName: "DF Foundation",
  generator: "Next.js",
  appleWebApp: {
    title: "DF Foundation",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-2">
        <Image src="/favicon.ico" alt="DF Foundation" width={32} height={32} />
        <div>
          <b>DF Foundation</b>
          <p className="text-xs text-gray-500">
            The DF Foundation site builder
          </p>
        </div>
      </div>
    }
    projectLink="https://github.com/digitalfortress-dev/foundation"
    projectIcon={
      <Image src="/github-mark-light.svg" alt="GitHub" width={24} height={24} />
    }
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © DF Foundation.</Footer>

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
          docsRepositoryBase="https://github.com/digitalfortress-dev/foundation/tree/main"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
