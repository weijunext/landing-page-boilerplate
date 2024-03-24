import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import SocialProof from "@/components/home/SocialProof";
import WallOfLove from "@/components/home/WallOfLove";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function LangHome({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const langSlug = (lang && lang[0]) || defaultLocale;
  const dict = await getDictionary(langSlug);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Index} />
      <SocialProof />
      {/* Can be used to display technology stack, partners, project honors, etc. */}
      <ScrollingLogos />

      {/* USP (Unique Selling Proposition) */}
      <Feature id="Features" />

      {/* Pricing */}
      <Pricing id="Pricing" />

      {/* Testimonials / Wall of Love */}
      <WallOfLove id="WallOfLove" />

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" />

      {/* CTA (Call to Action) */}
      <CTA />
    </>
  );
}
