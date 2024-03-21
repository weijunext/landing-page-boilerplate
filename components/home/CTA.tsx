/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";
import { RoughNotation } from "react-rough-notation";

const CTA = () => {
  return (
    <section className="flex flex-col justify-center max-w-[%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">Build Your Landing Page Now</h2>
        <p className="text-large text-default-500">
          <RoughNotation type="box" color="#b71c1c" show={true}>
            Build
          </RoughNotation>{" "}
          your landing page,{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            show
          </RoughNotation>{" "}
          your product, and{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            start earning
          </RoughNotation>
          !
        </p>
      </div>
      <CTAButton />
    </section>
  );
};

export default CTA;
