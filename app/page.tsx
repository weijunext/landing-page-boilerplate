import CTAButton from "@/components/home/CTAButton";
import FQA from "@/components/home/FQA";
import Feature from "@/components/home/Feature";
import Introduction from "@/components/home/Introduction";
import Pricing from "@/components/home/Pricing";
import UserPurchaseAvatar from "@/components/home/UserPurchaseAvatar";
import WallOfLove from "@/components/home/WallOfLove";

export default function Home() {
  return (
    <>
      <Introduction />
      <UserPurchaseAvatar />
      <Feature id="Feature" />
      <Pricing id="Pricing" />
      <WallOfLove id="WallOfLove" />
      <FQA id="FQA" />
      <CTAButton />
    </>
  );
}
