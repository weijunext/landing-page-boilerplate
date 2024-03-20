import { MagnetIcon } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";

export const FEATURES = [
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