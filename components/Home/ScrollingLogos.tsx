import React from "react";
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from "./Logos";

const logos = [
  {
    key: "logo-1",
    logo: Logo1,
  },
  {
    key: "logo-2",
    logo: Logo2,
  },
  {
    key: "logo-3",
    logo: Logo3,
  },
  {
    key: "logo-4",
    logo: Logo4,
  },
  {
    key: "logo-5",
    logo: Logo5,
  },
  {
    key: "logo-6",
    logo: Logo6,
  },
];

const ScrollingLogos = () => {
  return (
    <section className="mx-auto lg:max-w-7xl md:max-w-5xl w-[60%] px-6 py-10 sm:py-16 lg:px-8 lg:py-20">
      {/*  tip: If the list of logos you want to display is long,
        please comment out the div and then use ScrollingBanner to scroll */}
      {/* <ScrollingBanner shouldPauseOnHover gap="40px" duration={5}> */}
      <div className="flex gap-10 justify-center">
        {logos.map(({ key, logo }) => (
          <div
            key={key}
            className="flex items-center justify-center text-foreground"
          >
            {React.createElement(logo, { className: "text-5xl" })}
          </div>
        ))}
      </div>
      {/* </ScrollingBanner> */}
    </section>
  );
};

export default ScrollingLogos;
