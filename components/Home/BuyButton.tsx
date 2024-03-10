import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const BuyButton = () => {
  return (
    <Link
      href="https://github.com/weijunext/landing-page-boilerplate"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500"
      >
        <RocketIcon />
        Get Boilerplate
      </Button>
    </Link>
  );
};

export default BuyButton;
