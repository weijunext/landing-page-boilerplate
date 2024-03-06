export type AuthorsConfig = {
  name: string
  url: string
}
export type ProductLink = {
  url: string
  name: string
}
export type SiteConfig = {
  name: string
  description: string
  url: string
  keywords: string[]
  authors: AuthorsConfig[]
  creator: string
  ogImage: string
  links: {
    email?: string
    twitter?: string
    github?: string
    repo?: string
    buyMeCoffee?: string
    juejin?: string
    weChat?: string
  },
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
