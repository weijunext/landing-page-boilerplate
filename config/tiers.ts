
import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Open-Source / Free",
    price: "Free",
    href: siteConfig.openSourceURL || "#",
    description:
      "Freely clone the landing page boilerplate from the GitHub repository.",
    features: [
      "Free",
      "Access to full code",
      "Secondary development",
      "MIT License",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Customize",
    href: siteConfig.authors[0].twitter || "#",
    description: "Pay to customize an exclusive landing page.",
    price: "$188",
    features: [
      "Access to full code",
      "Secondary development",
      "Exclusive style",
      "One-on-one service",
      "More exquisite pages",
    ],
    buttonText: "Contact us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];
