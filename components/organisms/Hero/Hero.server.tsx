import { Buy, TokenDescriber } from "@/components/molecules";

const styles = {
  container:
    "w-full flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-0 lg:justify-between",
};

const Hero = () => {
  return (
    <div className={styles.container}>
      <TokenDescriber />
      <Buy />
    </div>
  );
};

export default Hero;
