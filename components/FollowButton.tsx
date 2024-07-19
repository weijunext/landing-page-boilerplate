"use client";

import { Icon } from "@iconify/react";
import { Button, Link } from "@nextui-org/react";

export default function FollowButton({
  name,
  href,
  target,
}: {
  name: string;
  href: string;
  target?: string;
}) {
  return (
    <Button
      as={Link}
      target={target || "_blank"}
      className="group relative h-9 overflow-hidden bg-transparent text-small font-normal"
      color="default"
      endContent={
        <Icon
          className="flex-none outline-none transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[2]"
          icon="solar:arrow-right-linear"
          width={16}
        />
      }
      href={href}
      style={{
        border: "solid 2px transparent",
        backgroundImage: `linear-gradient(hsl(var(--nextui-background)), hsl(var(--nextui-background))), linear-gradient(to right, #F871A0, #9353D3)`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
      variant="bordered"
    >
      {name}
    </Button>
  );
}
