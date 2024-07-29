import { IconType } from "react-icons"

export type AuthorsConfig = {
  name: string
  url: string
  twitter?: string
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
export type ThemeColor = {
  media: string
  color: string
}
export type SiteConfig = {
  name: string
  description: string
  url: string
  keywords: string[]
  authors: AuthorsConfig[]
  creator: string
  openSourceURL?: string
  ogImage: string
  headerLinks: Link[]
  footerLinks: Link[],
  footerProducts: ProductLink[]
  metadataBase: URL | string
  themeColors?: string | ThemeColor[]
  nextThemeColor?: string
  icons: {
    icon: string
    shortcut?: string
    apple?: string
  }
  openGraph: {
    type: string
    locale: string
    url: string
    title: string
    description: string
    siteName: string
    images?: string[]
  },
  twitter: {
    card: string
    site: string
    title: string
    description: string
    images?: string[]
    creator: string
  },
}
