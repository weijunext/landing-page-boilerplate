import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiFramer,
  SiNextdotjs,
  SiNextui,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const logos = [
  {
    key: "logo-nextjs",
    logo: SiNextdotjs,
  },
  {
    key: "logo-react",
    logo: SiReact,
  },
  {
    key: "logo-tailwind",
    logo: SiTailwindcss,
  },
  {
    key: "logo-framer",
    logo: SiFramer,
  },
  {
    key: "logo-nextui",
    logo: SiNextui,
  },
  {
    key: "logo-shadcn",
    logo: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          id="logo-4"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"
          />
        </svg>
      );
    },
  },
  {
    key: "logo-ts",
    logo: SiTypescript,
  },
  {
    key: "logo-vercel",
    logo: SiVercel,
  },
];

const ScrollingLogos = () => {
  return (
    <section className="mx-auto lg:max-w-7xl md:max-w-5xl px-6 py-10 sm:py-16 lg:px-8 lg:py-20">
      <Marquee direction="left" autoFill pauseOnHover>
        {logos.map(({ key, logo }) => (
          <div
            key={key}
            className="flex items-center justify-center text-foreground mx-6"
          >
            {React.createElement(logo, { className: "text-5xl" })}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingLogos;
