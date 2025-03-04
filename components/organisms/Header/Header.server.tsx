import next from "next";
import Link from "next/link";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";

const styles = {
  container: "w-full fixed mt-8 rounded-lg h-[80px]",
  childContainer: "relative w-[83%] mx-auto h-full bg-gradient rounded-lg",
  subChildContainer:
    "absolute inset-[1px] bg-black flex flex-row items-center justify-between rounded-lg px-4",
  navContainer: "flex flex-row items-center gap-4",
  link: "px-2 text-white font-semibold hover:text-white/50 transition",
};

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.childContainer}>
        <div className={styles.subChildContainer}>
          <nav className={styles.navContainer}>
            <Image src={Logo} alt="Logo" className="w-10 h-10" />
            <Link href="" className={styles.link}>
              Home
            </Link>
            <Link href="" className={styles.link}>
              About
            </Link>
            <Link href="" className={styles.link}>
              Tokenomics
            </Link>
            <Link href="" className={styles.link}>
              Roadmap
            </Link>
            <Link href="" className={styles.link}>
              FAQ
            </Link>
          </nav>
          <div>
            <Button type="colorful" label="BUY NOW" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
