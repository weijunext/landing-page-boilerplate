/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";

const CTA = () => {
  return (
    <section className="flex flex-col justify-center max-w-[%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">Build Your Landing Page Now</h2>
        <p className="text-large text-default-500">
          Build your landing page, show your product, and start earning!
        </p>
      </div>
      <CTAButton />
    </section>
  );
};

export default CTA;
