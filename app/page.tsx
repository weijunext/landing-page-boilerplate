import BuyButton from "@/components/Home/BuyButton";
import FQA from "@/components/Home/FQA";
import Feature from "@/components/Home/Feature";
import Introduction from "@/components/Home/Introduction";
import Pricing from "@/components/Home/Pricing";
import UserPurchaseAvatar from "@/components/Home/UserPurchaseAvatar";
import WallOfLove from "@/components/Home/WallOfLove";

export default function Home() {
  return (
    <>
      <Introduction />
      <UserPurchaseAvatar />
      <Feature id="Feature" />
      <Pricing id="Pricing" />
      <WallOfLove id="WallOfLove" />
      <FQA id="FQA" />
      <BuyButton />
    </>
  );
}
