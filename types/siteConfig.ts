import { IconType } from "react-icons"

export type AuthorsConfig = {
  name: string
  url: string
}
export type ProductLink = {
  url: string
  name: string
}
export type Link = {
  name: string
  href: string
  icon: IconType
}
export type SiteConfig = {
  name: string
  description: string
  url: string
  keywords: string[]
  authors: AuthorsConfig[]
  creator: string
  ogImage: string
  headerLinks: Link[]
  footerLinks: Link[],
  footerProduct: ProductLink[]
  metadataBase: URL
  themeColor: string
  icons: {
    icon: string
    shortcut: string
    apple: string
  }
  openGraph: {
    type: string
    locale: string
    url: string
    title: string
    description: string
    siteName: string
  },
  twitter: {
    card: string
    title: string
    description: string
    images: string[]
    creator: string
  },
}
