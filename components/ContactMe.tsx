import { siteConfig } from "@/config/site";
import Link from "next/link";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const ContactMe = () => {
  const { email, twitter, github, buyMeCoffee, juejin, weChat } =
    siteConfig.links;
  return (
    <div className="mx-auto flex flex-row items-center">
      {email ? (
        <Link
          href={email}
          target="_blank"
          rel="noopener norefferer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          <MdEmail className="text-lg" />
        </Link>
      ) : (
        <></>
      )}
      {github ? (
        <Link
          href={github}
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
      {juejin ? (
        <Link
          href={juejin}
          target="_blank"
          rel="noopener norefferer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          <SiJuejin className="text-lg" />
        </Link>
      ) : (
        <></>
      )}
      {weChat ? (
        <Link
          href={weChat}
          target="_blank"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          <BsWechat className="text-lg" />
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
export default ContactMe;
