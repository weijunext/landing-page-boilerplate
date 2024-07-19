"use client";
import { LOGOS } from "@/config/logos";
import { useTheme } from "next-themes";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ScrollingLogos = () => {
  const { theme } = useTheme();
  return (
    <section className="mx-auto w-full md:max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 pt-16">
      <Marquee direction="left" autoFill pauseOnHover>
        {LOGOS.map((image, index) => (
          <div className="mx-6 text-gray-500" key={index}>
            <Image
              src={image.image}
              alt={image.name}
              width={50}
              height={50}
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              className={`${
                theme === "dark" ? "filter dark:invert grayscale" : ""
              } hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingLogos;
