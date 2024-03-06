import { SiteConfig } from "@/types/siteConfig"

const baseSiteConfig = {
  name: "Clean Next.js Starter",
  description:
    "Clean Next.js Starter is a meticulously designed Next.js starter template aimed at providing developers with a clean, efficient, and scalable foundation for quickly launching.",
  url: "https://starter.weijunext.com",
  ogImage: "https://starter.weijunext.com/og.png",
  metadataBase: new URL("https://starter.weijunext.com"),
  keywords: ["next.js starter", "next.js template", "awesome starter", "study next.js"],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
    }
  ],
  creator: '@weijunext',
  themeColor: '#fff',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  links: {
    email: "mailto:weijunext@gmail.com",
    twitter: "https://twitter.com/weijunext",
    github: "https://github.com/weijunext/",
    repo: "https://github.com/weijunext/clean-nextjs-starter",
    buyMeCoffee: "https://www.buymeacoffee.com/weijunext",
    juejin: "https://juejin.cn/user/26044008768029",
    weChat: "https://weijunext.com/make-a-friend",
  },
  footerProduct: [
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://githubbio.com', name: 'Github Bio Generator' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
