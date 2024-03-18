import { MagnetIcon } from "lucide-react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";

const FEATURES = [
  {
    title: "Open Source Advantage",
    content: "Completely free with a wealth of customization options.",
    icon: BsGithub,
  },
  {
    title: "Responsive Design",
    content:
      "Templates meticulously designed to ensure optimal display on any device.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Easy Customization",
    content:
      "Effortlessly change colors, fonts, and layouts without any coding knowledge.",
    icon: FaToolbox,
  },
  {
    title: "SEO Optimized",
    content:
      "Templates built with search engine optimization in mind to enhance your website's discoverability.",
    icon: MagnetIcon,
  },
  {
    title: "One-Click Deployment",
    content:
      "Tightly integrated with leading web hosting services for instant website publishing.",
    icon: MdCloudUpload,
  },
  {
    title: "Globalization Support",
    content:
      "Supports multiple languages, making your website attractive to a global audience.",
    icon: FaEarthAsia,
  },
];

const Feature = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6"
    >
      <h2 className="text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <div
            key={feature.title}
            className={`
              flex flex-col items-center text-center px-8 py-6 border-b
              ${index === 0 ? "md:border-r" : ""}
              ${index === 1 ? "lg:border-r" : ""}
              ${index === 2 ? "md:border-r lg:border-r-0" : ""}
              ${index === 3 ? "lg:border-b-0 lg:border-r" : ""}
              ${index === 4 ? "md:border-b-0 md:border-r" : ""}
              ${index === 5 ? "border-b-0 border-r-0" : ""}
            `}
          >
            <div className="p-4 w-16 h-16 dark:text-white rounded-full flex items-center justify-center">
              {feature.icon &&
                React.createElement(feature.icon, { className: "text-2xl" })}
            </div>
            <h2 className={"text-xl font-semibold mb-2"}>{feature.title}</h2>
            <p className="text-slate-700 dark:text-slate-400">
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
