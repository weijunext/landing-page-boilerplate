import { defaultLocale, localeNames } from "@/lib/i18n";
import Link from "next/link";

const LangLinks = () => {
  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      {Object.keys(localeNames).map((key: string) => {
        const name = localeNames[key];
        return (
          <span key={key}>
            <Link href={`/${key === defaultLocale ? "/" : key}`}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default LangLinks;
