import FollowButton from "@/components/FollowButton";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="mx-automax-h-screen flex flex-col items-center">
      <Image src="/404.svg" alt="404" width={128} height={128} />
      <div className="w-full text-center mt-8 flex flex-col sm:flex-row gap-2">
        <FollowButton name="Home" href="/" target="_self"></FollowButton>
        {siteConfig.authors[0].twitter ? (
          <FollowButton
            name="Twitter/X"
            href={siteConfig.authors[0].twitter}
          ></FollowButton>
        ) : (
          <></>
        )}
        {siteConfig.openSourceURL ? (
          <FollowButton
            name="Github"
            href={siteConfig.openSourceURL}
          ></FollowButton>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
