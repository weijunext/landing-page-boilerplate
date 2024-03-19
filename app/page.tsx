import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Introduction from "@/components/home/Introduction";
import MakerShowcase from "@/components/home/MakerShowcase";
import Pricing from "@/components/home/Pricing";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import WallOfLove from "@/components/home/WallOfLove";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Introduction />
      <MakerShowcase />
      {/* Can be used to display technology stack, partners, project honors, etc. */}
      <ScrollingLogos />

      {/* USP (Unique Selling Proposition) */}
      <Feature id="Feature" />

      {/* Pricing */}
      <Pricing id="Pricing" />

      {/* Social Proof 2 - Testimonials / Wall of Love */}
      <WallOfLove id="WallOfLove" />

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" />

      {/* CTA (Call to Action) */}
      <CTA />
    </>
  );
}
