import { LOGOS } from "@/config/logos";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ScrollingLogos = () => {
  return (
    <section className="mx-auto lg:max-w-7xl md:max-w-5xl px-6 py-10 sm:py-16 lg:px-8 lg:py-20">
      <Marquee direction="left" autoFill pauseOnHover>
        {LOGOS.map((image, index) => (
          <div className="mx-6 text-gray-500" key={index}>
            <Image
              src={image.image}
              alt={image.name}
              width={50}
              height={50}
              objectFit="cover"
              className="filter dark:invert grayscale hover:filter-none transition-all duration-300 cursor-pointer text-gray-500"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingLogos;
