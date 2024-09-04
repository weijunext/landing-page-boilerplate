"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, usePathname, useRouter } from "next/navigation";

import { defaultLocale, localeNames } from "@/lib/i18n";

export const LangSwitcher = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  let langName = (params.lang as string) || defaultLocale;

  const handleSwitchLanguage = (value: string) => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    let newPath;

    if (pathSegments[0] === params.lang) {
      // Current path has a language code
      newPath = pathSegments.slice(1).join("/");
    } else {
      // Current path doesn't have a language code
      newPath = pathSegments.join("/");
    }

    if (value === defaultLocale) {
      router.push(`/${newPath}`);
    } else {
      router.push(`/${value}/${newPath}`);
    }
  };

  return (
    <Select value={langName as string} onValueChange={handleSwitchLanguage}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(localeNames).map((key: string) => {
          const name = localeNames[key];
          return (
            <SelectItem className="cursor-pointer" key={key} value={key}>
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
