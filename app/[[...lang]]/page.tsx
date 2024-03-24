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
      <Hero locale={dict.Hero} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      {/* Can be used to display technology stack, partners, project honors, etc. */}
      <ScrollingLogos />

      {/* USP (Unique Selling Proposition) */}
      <Feature id="Features" locale={dict.Feature} />

      {/* Pricing */}
      <Pricing id="Pricing" locale={dict.Pricing} />

      {/* Testimonials / Wall of Love */}
      <WallOfLove id="WallOfLove" locale={dict.WallOfLove} />

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" locale={dict.FAQ} />

      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}
