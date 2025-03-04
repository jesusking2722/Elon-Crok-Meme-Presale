import { Buy, TokenDescriber } from "@/components/molecules";

const Hero = () => {
  return (
    <div className="w-full flex flex-rol lg:flex-row lg:items-start gap-10 lg:gap-0 lg:justify-between">
      <TokenDescriber />
      <Buy />
    </div>
  );
};

export default Hero;
