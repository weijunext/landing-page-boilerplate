import type { ButtonProps } from "@nextui-org/react";

export enum FrequencyEnum {
  Yearly = "yearly",
  Quarterly = "quarterly",
}

export enum TiersEnum {
  Free = "free",
  Pro = "pro",
  Team = "team",
  Customize = "customize"
}

export type Frequency = {
  key: FrequencyEnum;
  label: string;
  priceSuffix: string;
};

export type Tier = {
  key: TiersEnum;
  title: string;
  price: string;
  priceSuffix?: string;
  href: string;
  description?: string;
  mostPopular?: boolean;
  featured?: boolean;
  features?: string[];
  buttonText: string;
  buttonColor?: ButtonProps["color"];
  buttonVariant: ButtonProps["variant"];
};
