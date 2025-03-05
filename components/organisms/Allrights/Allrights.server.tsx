import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import { GradientContainer } from "@/components/atoms";

const styles = {
  container:
    "w-full flex flex-col items-center justify-center gap-4 bg-[#161616] py-8 rounded-xl",
  logo: {
    container: "flex items-center justify-center",
    img: "w-36 h-auto",
  },
  label: "text-white font-semibold text-lg",
};

const Allrights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <GradientContainer>
      <div className={styles.container}>
        <div className={styles.logo.container}>
          <Image src={Logo} alt="Logo" className={styles.logo.img} />
        </div>
        <div>
          <p className={styles.label}>
            ©GameFrog {currentYear} - All Rights Reserved
          </p>
        </div>
      </div>
    </GradientContainer>
  );
};

export default Allrights;
