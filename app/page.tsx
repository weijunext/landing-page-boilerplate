import CTAButton from "@/components/home/CTAButton";
import FQA from "@/components/home/FQA";
import Feature from "@/components/home/Feature";
import Introduction from "@/components/home/Introduction";
import MakerShowcase from "@/components/home/MakerShowcase";
import Pricing from "@/components/home/Pricing";
import WallOfLove from "@/components/home/WallOfLove";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Introduction />
      {/* Social Proof 1 - maker showcase */}
      <MakerShowcase />
      {/* USP (Unique Selling Proposition) */}
      <Feature id="Feature" />
      {/* Pricing */}
      <Pricing id="Pricing" />
      {/* Social Proof 2 - Wall of Love */}
      <WallOfLove id="WallOfLove" />
      {/* FAQ (Frequently Asked Questions) */}
      <FQA id="FQA" />
      {/* CTA (Call to Action) */}
      <CTAButton />
    </>
  );
}
