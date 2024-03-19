import Image from "next/image";
import Marquee from "react-fast-marquee";

const ScrollingLogos = () => {
  return (
    <section className="mx-auto lg:max-w-7xl md:max-w-5xl px-6 py-10 sm:py-16 lg:px-8 lg:py-20">
      <Marquee direction="left" autoFill pauseOnHover>
        {Images.map((image, index) => (
          <div className="mx-6 text-gray-500" key={index}>
            <Image
              src={image.image}
              alt={image.name}
              width={80}
              height={80}
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

const Images = [
  {
    name: "Next.js",
    image: "/images/techStack/nextjs.svg",
  },
  {
    name: "React",
    image: "/images/techStack/react.svg",
  },
  {
    name: "Tailwind",
    image: "/images/techStack/tailwind.svg",
  },
  {
    name: "Framer",
    image: "/images/techStack/framer.svg",
  },
  {
    name: "Shadcnui",
    image: "/images/techStack/shadcnui.svg",
  },
  {
    name: "Nextui",
    image: "/images/techStack/nextui.svg",
  },
  {
    name: "TS",
    image: "/images/techStack/typescript.svg",
  },
  {
    name: "Vercel",
    image: "/images/techStack/vercel.svg",
  },
];
