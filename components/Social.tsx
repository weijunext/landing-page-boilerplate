import { siteConfig } from "@/config/site";
import Link from "next/link";
import { BsGithub, BsTwitterX } from "react-icons/bs";

import { SiBuymeacoffee } from "react-icons/si";

const Social = () => {
  const { email, twitter, repo, buyMeCoffee, juejin, weChat } =
    siteConfig.links;
  return (
    <div className="mx-auto flex flex-row items-center">
      {repo ? (
        <Link
          href={repo}
          target="_blank"
          rel="noopener norefferer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          <BsGithub className="text-lg" />
        </Link>
      ) : (
        <></>
      )}
      {twitter ? (
        <Link
          href={twitter}
          target="_blank"
          rel="noopener norefferer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          <BsTwitterX className="text-lg" />
        </Link>
      ) : (
        <></>
      )}
      {buyMeCoffee ? (
        <Link
          href={buyMeCoffee}
          target="_blank"
          rel="noopener norefferer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          <SiBuymeacoffee className="text-lg" />
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Social;
