/* eslint-disable react/no-unescaped-entities */
import { TwitterX } from "@/components/social-icons/icons";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

const WallOfLove = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%]"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center">Wall of Love</h2>
        <p className="text-large text-default-500">
          {/* Don't take our word for it. Here's what they have to say. */}
          If you use this landing page template and recommend it on your
          Twitter,{" "}
          <Link
            href={siteConfig.authors[0].twitter as string}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary underline"
          >
            please let me know
          </Link>
          . I will display your tweet and recommendation here.
        </p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 overflow-hidden relative transition-all">
        {testimonials.map((testimonial, index) => (
          <div className="mb-4 z-0 break-inside-avoid-column" key={index}>
            <div className="border border-slate/10 rounded-lg p-4 flex flex-col items-start gap-3 h-fit">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-start gap-2">
                  <Image
                    src={testimonial.user.image}
                    alt="maker"
                    height={40}
                    width={40}
                    className="w-12 h-12 rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-bold">{testimonial.user.name}</p>
                    <p className="dark:text-zinc-400">
                      @{testimonial.user.username}
                    </p>
                  </div>
                </div>
                <Link
                  href={`https://twitter.com/${testimonial.user.username}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <TwitterX className="w-8 h-8" />
                </Link>
              </div>
              <p className="dark:text-zinc-200 text-[14px]">
                {testimonial.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WallOfLove;

const testimonials = [
  {
    user: {
      name: "Founder",
      username: "weijunext",
      image: "/images/users/weijunext.jpeg",
    },
    content:
      "As a front-end developer, I'm highly satisfied with this landing page template. Editing text and images was very intuitive, and I encountered no technical hurdles throughout the process. The template's responsive design is excellent as well; whether on mobile or desktop, the page layout adapts perfectly. I managed to launch my own product's landing page in just half a day, significantly boosting my efficiency.",
  },
  {
    user: {
      name: "User1",
      username: "weijunext",
      image: "/images/users/1.png",
    },
    content:
      "This template has given me a new perspective on coding. As a backend developer with not much front-end experience, I found this template to be very user-friendly. I could build a professional-looking landing page with hardly any coding required. This not only saved me time but also sparked more interest in front-end development.",
  },
  {
    user: {
      name: "User2",
      username: "weijunext",
      image: "/images/users/2.png",
    },
    content:
      "As a developer who transitioned from design, I'm impressed with the aesthetic design of this template. It's not only easy to use but also comes with a default design that feels both modern and professional. I made some adjustments to the details to match my brand style, and the entire process was both simple and enjoyable.",
  },
  {
    user: {
      name: "User3",
      username: "weijunext",
      image: "/images/users/3.png",
    },
    content:
      "The performance of this template is outstanding, with very fast loading times and SEO-friendly features. As a developer focused on product optimization, I appreciate the high performance and optimization of the template. With simple modifications, I was able to further optimize my landing page, improving the speed at which users can access it. The SEO friendliness of the template also helped my page achieve better rankings in search engines.",
  },
  {
    user: {
      name: "User4",
      username: "weijunext",
      image: "/images/users/4.png",
    },
    content:
      "The interactive elements of this template added a lot of fun to my project. I particularly liked the settings for animations and transition effects, which made the browsing experience richer and more dynamic. Adjusting these interactive elements was very straightforward, requiring no deep front-end knowledge, which was very user-friendly for a non-professional front-end developer like me.",
  },
  {
    user: {
      name: "User5",
      username: "weijunext",
      image: "/images/users/5.png",
    },
    content:
      "This template does a great job with multi-language support, which is crucial for my international project. I was able to easily add different language versions, and the template ensured consistency in layout and design across various languages. This significantly reduced my workload in the localization process and helped me reach global users more quickly.",
  },
];
